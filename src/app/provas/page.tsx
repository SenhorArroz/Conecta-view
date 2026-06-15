"use client";

import { useEffect, useRef, useState } from "react";
import { api } from "~/trpc/react";
import Navbar from "../_components/navbar";

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200]" style={{ animation: "slideUp 0.3s ease-out" }}>
      <div className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl text-sm font-bold whitespace-nowrap">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
        {message}
      </div>
    </div>
  );
}

// ─── Prova Card ───────────────────────────────────────────────────────────────
function ProvaCard({ prova, onEdit, onDelete, isDeleting }: {
  prova: any;
  onEdit: (p: any) => void;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className={`group bg-white border border-slate-100 hover:border-[#248ebe]/30 hover:shadow-md rounded-2xl p-5 transition-all duration-200 ${isDeleting ? "opacity-40 scale-95" : ""}`}>
      <div className="flex items-start gap-4">
        {/* Pontos badge */}
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-[#248ebe]/20 flex flex-col items-center justify-center">
          <span className="text-lg font-black text-[#248ebe] leading-none">{prova.pontos}</span>
          <span className="text-[9px] font-black text-[#248ebe]/60 uppercase tracking-wider">pts</span>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="font-black text-slate-800 text-sm">{prova.nome}</p>
              <div className="flex items-center gap-2 mt-1">
                {prova.equipe ? (
                  <span className="bg-[#ff9324]/10 text-[#ff9324] border border-[#ff9324]/20 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wide">
                    🏆 {prova.equipe.name}
                  </span>
                ) : (
                  <span className="bg-slate-100 text-slate-400 px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wide">
                    Pendente
                  </span>
                )}
                <span className="text-slate-400 text-[10px] font-bold">
                  {new Date(prova.createdAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
                </span>
              </div>
              {prova.desc && (
                <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2 italic">"{prova.desc}"</p>
              )}
            </div>

            {/* Ações */}
            <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
              {confirmDelete ? (
                <div className="flex items-center gap-1.5">
                  <button onClick={() => onDelete(prova.id)} className="h-8 px-3 rounded-lg bg-red-500 hover:bg-red-400 text-white text-xs font-black transition-all active:scale-95">Sim</button>
                  <button onClick={() => setConfirmDelete(false)} className="h-8 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs font-black transition-all">Não</button>
                </div>
              ) : (
                <>
                  <button onClick={() => onEdit(prova)}
                    className="h-8 w-8 rounded-lg bg-slate-50 hover:bg-[#248ebe] text-slate-400 hover:text-white flex items-center justify-center transition-all"
                    title="Editar">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                  </button>
                  <button onClick={() => setConfirmDelete(true)}
                    className="h-8 w-8 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all"
                    title="Excluir">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ProvasPage() {
  const utils = api.useUtils();
  const prevCountRef = useRef<number | null>(null);

  const [nomeProva, setNomeProva] = useState("");
  const [pontos, setPontos] = useState("");
  const [equipeId, setEquipeId] = useState("");
  const [desc, setDesc] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  // Polling a cada 5s
  const { data: equipes } = api.equipe.getAll.useQuery(undefined, { refetchInterval: 5000 });
  const { data: provas, dataUpdatedAt } = api.prova.getAll.useQuery(undefined, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  useEffect(() => {
    if (provas === undefined) return;
    if (prevCountRef.current !== null && prevCountRef.current !== provas.length) {
      const diff = provas.length - prevCountRef.current;
      if (diff > 0) setToast(`✨ ${diff} nova(s) prova(s) registrada(s)`);
      else setToast(`🗑️ ${Math.abs(diff)} prova(s) removida(s)`);
    }
    prevCountRef.current = provas.length;
  }, [provas]);

  const lastSync = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "--:--:--";

  // ── Mutations ──
  const createProva = api.prova.create.useMutation({
    onSuccess: async () => {
      clearForm();
      await utils.prova.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
      setToast("✅ Prova cadastrada com sucesso!");
    },
  });

  const updateProva = api.prova.update.useMutation({
    onSuccess: async () => {
      clearForm();
      await utils.prova.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
      setToast("✅ Prova atualizada!");
    },
  });

  const deleteProva = api.prova.delete.useMutation({
    onSuccess: async () => {
      setDeletingId(null);
      await utils.prova.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
      setToast("🗑️ Prova removida.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeProva.trim() || !pontos || !desc.trim()) {
      setToast("⚠️ Preencha nome, pontuação e descrição.");
      return;
    }
    const payload = {
      nome: nomeProva.trim(),
      desc: desc.trim(),
      pontos: Number(pontos),
      equipeId: equipeId || null,
    };
    if (isEditing && editingId) {
      updateProva.mutate({ id: editingId, ...payload });
    } else {
      createProva.mutate(payload);
    }
  };

  const handleEdit = (prova: any) => {
    setIsEditing(true);
    setEditingId(prova.id);
    setNomeProva(prova.nome);
    setPontos(prova.pontos.toString());
    setEquipeId(prova.equipeId ?? "");
    setDesc(prova.desc);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setNomeProva("");
    setPontos("");
    setEquipeId("");
    setDesc("");
  };

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteProva.mutate({ id });
  };

  const totalPontos = (provas ?? []).reduce((acc, p) => acc + p.pontos, 0);
  const provasComEquipe = (provas ?? []).filter(p => p.equipe).length;
  const isPending = createProva.isPending || updateProva.isPending;
  const canSubmit = nomeProva.trim() && pontos && desc.trim() && !isPending;

  const filtered = (provas ?? []).filter(p =>
    p.nome.toLowerCase().includes(search.toLowerCase()) ||
    (p.equipe?.name ?? "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
      `}</style>

      <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
        <Navbar activePage="provas" />

        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* ── Header ── */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-[#248ebe] tracking-tight">Provas da Gincana</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Registro de atividades e pontuações</p>
            </div>
          </div>

          {/* ── Stats ── */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total de Provas</p>
              <p className="text-3xl font-black text-[#248ebe] mt-1">{provas?.length ?? 0}</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pontos Distribuídos</p>
              <p className="text-3xl font-black text-[#ff9324] mt-1">{totalPontos}</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Com Vencedor</p>
              <p className="text-3xl font-black text-slate-700 mt-1">{provasComEquipe}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">

            {/* ── Formulário ── */}
            <div className="lg:col-span-2">
              <div className="rounded-[1.75rem] border-2 border-[#248ebe]/25 bg-white shadow-lg shadow-blue-900/5 overflow-hidden sticky top-24">

                {/* Cabeçalho gradiente */}
                <div className={`px-6 py-4 flex items-center gap-3 ${isEditing ? "bg-gradient-to-r from-[#248ebe] to-[#1a7aaa]" : "bg-gradient-to-r from-[#ff9324] to-[#e07d1d]"}`}>
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    {isEditing ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                    )}
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-white">{isEditing ? "Editar Prova" : "Nova Prova"}</h2>
                    <p className="text-[10px] text-white/70 font-semibold uppercase tracking-widest">
                      {isEditing ? "Atualizando registro existente" : "Aparece para todos instantaneamente"}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-4">

                  {/* Nome */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#248ebe] inline-block" />
                      Nome da Prova
                      <span className="text-[#ff9324]">(obrigatório)</span>
                    </label>
                    <input
                      autoFocus
                      type="text"
                      placeholder="Ex: Corrida de Sacos, Quiz Cultural..."
                      className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#248ebe] focus:bg-white px-5 outline-none font-semibold text-slate-800 text-sm transition-all placeholder:text-slate-300"
                      style={{ height: "52px" }}
                      value={nomeProva}
                      onChange={(e) => setNomeProva(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  {/* Pontuação */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff9324] inline-block" />
                      Pontuação
                      <span className="text-[#ff9324]">(obrigatório)</span>
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        min={0}
                        placeholder="0"
                        className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#ff9324] focus:bg-white pl-5 pr-12 outline-none font-black text-[#ff9324] text-xl transition-all placeholder:text-slate-300"
                        style={{ height: "52px" }}
                        value={pontos}
                        onChange={(e) => setPontos(e.target.value)}
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase pointer-events-none">pts</span>
                    </div>
                  </div>

                  {/* Equipe vencedora */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                      Equipe Vencedora
                      <span className="text-slate-300 normal-case font-semibold tracking-normal">(opcional)</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:bg-white px-5 outline-none font-semibold text-slate-700 text-sm transition-all appearance-none cursor-pointer"
                        style={{ height: "52px" }}
                        value={equipeId}
                        onChange={(e) => setEquipeId(e.target.value)}
                      >
                        <option value="">Ainda não definida (Pendente)</option>
                        {equipes?.map(eq => (
                          <option key={eq.id} value={eq.id}>{eq.nome}</option>
                        ))}
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  {/* Descrição */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#248ebe] inline-block" />
                      Descrição
                      <span className="text-[#ff9324]">(obrigatório)</span>
                    </label>
                    <textarea
                      placeholder="Descreva a atividade, regras ou observações..."
                      className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#248ebe] focus:bg-white px-5 py-4 outline-none font-medium text-slate-700 text-sm transition-all placeholder:text-slate-300 resize-none"
                      rows={3}
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>

                  {/* Botões */}
                  <div className="space-y-2 pt-1">
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2.5 ${
                        canSubmit
                          ? isEditing
                            ? "bg-[#248ebe] hover:bg-[#1a7aaa] text-white shadow-lg shadow-blue-200"
                            : "bg-[#ff9324] hover:bg-[#e07d1d] text-white shadow-lg shadow-orange-200"
                          : "bg-slate-100 text-slate-300 cursor-not-allowed"
                      }`}
                    >
                      {isPending ? (
                        <>
                          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          {isEditing ? "Salvando..." : "Cadastrando..."}
                        </>
                      ) : (
                        <>
                          {isEditing ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                          )}
                          {isEditing ? "Salvar Alterações" : "Cadastrar Prova"}
                        </>
                      )}
                    </button>

                    {isEditing && (
                      <button type="button" onClick={clearForm}
                        className="w-full h-10 rounded-xl text-slate-400 hover:text-slate-600 font-bold text-xs uppercase tracking-widest transition-colors">
                        Cancelar Edição
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* ── Lista de Provas ── */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {filtered.length} {filtered.length === 1 ? "prova" : "provas"}
                </p>
                {(provas?.length ?? 0) > 3 && (
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-300 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input type="text" placeholder="Buscar..."
                      className="h-8 pl-9 pr-4 bg-white border border-slate-200 rounded-xl outline-none text-xs font-medium text-slate-600 focus:border-[#248ebe] transition-colors w-36 placeholder:text-slate-300"
                      value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {provas === undefined ? (
                  [...Array(3)].map((_, i) => (
                    <div key={i} className="h-[100px] bg-white rounded-2xl border border-slate-100 animate-pulse" />
                  ))
                ) : filtered.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-100 rounded-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <p className="font-black text-slate-300 text-sm uppercase tracking-widest">
                      {search ? "Nenhum resultado" : "Nenhuma prova ainda"}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      {search ? "Tente outro termo" : "Use o formulário ao lado para cadastrar"}
                    </p>
                  </div>
                ) : (
                  filtered.map((prova) => (
                    <ProvaCard
                      key={prova.id}
                      prova={prova}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      isDeleting={deletingId === prova.id}
                    />
                  ))
                )}
              </div>
            </div>

          </div>
        </div>
      </main>

      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
    </>
  );
}