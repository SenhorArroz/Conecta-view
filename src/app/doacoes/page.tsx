"use client";

import { useEffect, useRef, useState } from "react";
import { api } from "~/trpc/react";
import Navbar from "../_components/navbar";
import { ConquistasPanel } from "../_components/conquistas";

interface ItemSelecionado {
  id: string;
  nome: string;
  quantidade: number;
  pontos: number;
}

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

// ─── Doação Card ──────────────────────────────────────────────────────────────
function DoacaoCard({ doacao, onEdit, onDelete, isDeleting }: {
  doacao: any;
  onEdit: (d: any) => void;
  onDelete: (id: string) => void;
  isDeleting: boolean;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const totalPontos = doacao.itensDoadores.reduce(
    (acc: number, vinc: any) => acc + ((vinc.item?.pontos ?? 0) * vinc.quantidade), 0
  );

  return (
    <div className={`group bg-white border border-slate-100 hover:border-[#248ebe]/30 hover:shadow-md rounded-2xl p-5 transition-all duration-200 ${isDeleting ? "opacity-40 scale-95" : ""}`}>
      <div className="flex items-start justify-between gap-4">
        {/* Esquerda: info */}
        <div className="flex items-start gap-4 min-w-0">
          {/* Pontos badge */}
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#fff4e6] to-[#ffe8cc] border border-[#ff9324]/20 flex flex-col items-center justify-center">
            <span className="text-lg font-black text-[#ff9324] leading-none">{totalPontos}</span>
            <span className="text-[9px] font-black text-[#ff9324]/60 uppercase tracking-wider">pts</span>
          </div>
          <div className="min-w-0">
            <p className="font-black text-slate-800 text-sm">{doacao.nome}</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="bg-[#248ebe]/10 text-[#248ebe] px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-wide">
                {doacao.equipe.name}
              </span>
              <span className="text-slate-400 text-[10px] font-bold">
                {new Date(doacao.createdAt).toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}
              </span>
            </div>
            {/* Itens */}
            <div className="flex flex-wrap gap-1.5 mt-2.5">
              {doacao.itensDoadores.map((vinc: any, idx: number) => (
                <span key={idx} className="bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full text-[10px] font-bold">
                  <span className="text-[#ff9324] font-black">{vinc.quantidade}×</span> {vinc.item.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Direita: ações */}
        <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          {confirmDelete ? (
            <div className="flex items-center gap-1.5">
              <button onClick={() => onDelete(doacao.id)} className="h-8 px-3 rounded-lg bg-red-500 hover:bg-red-400 text-white text-xs font-black transition-all active:scale-95">Sim</button>
              <button onClick={() => setConfirmDelete(false)} className="h-8 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs font-black transition-all">Não</button>
            </div>
          ) : (
            <>
              <button onClick={() => onEdit(doacao)}
                className="h-8 w-8 rounded-lg bg-slate-50 hover:bg-[#248ebe] text-slate-400 hover:text-white flex items-center justify-center transition-all"
                title="Editar">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              </button>
              <button onClick={() => setConfirmDelete(true)}
                className="h-8 w-8 rounded-lg bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all"
                title="Remover">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function DoacoesPage() {
  const utils = api.useUtils();
  const prevCountRef = useRef<number | null>(null);

  // Form state
  const [nomeDoador, setNomeDoador] = useState("");
  const [equipeId, setEquipeId] = useState("");
  const [desc, setDesc] = useState("");
  const [itensQuantificados, setItensQuantificados] = useState<ItemSelecionado[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  // Polling a cada 5s
  const { data: itens } = api.item.getAll.useQuery(undefined, { refetchInterval: 5000 });
  const { data: equipes } = api.equipe.getAll.useQuery(undefined, { refetchInterval: 5000 });
  const { data: doacoes, dataUpdatedAt } = api.doacao.getAll.useQuery(undefined, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  // Detecta atualizações de outros usuários
  useEffect(() => {
    if (doacoes === undefined) return;
    if (prevCountRef.current !== null && prevCountRef.current !== doacoes.length) {
      const diff = doacoes.length - prevCountRef.current;
      if (diff > 0) setToast(`✨ ${diff} nova(s) doação(ões) registrada(s)`);
      else setToast(`🗑️ ${Math.abs(diff)} doação(ões) removida(s)`);
    }
    prevCountRef.current = doacoes.length;
  }, [doacoes]);

  const lastSync = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "--:--:--";

  // ── Mutations ──
  const createDoacao = api.doacao.create.useMutation({
    onSuccess: async () => {
      clearForm();
      await utils.doacao.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
      setToast("✅ Doação registrada com sucesso!");
    },
  });

  const updateDoacao = api.doacao.update.useMutation({
    onSuccess: async () => {
      clearForm();
      await utils.doacao.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
      setToast("✅ Doação atualizada!");
    },
  });

  const deleteDoacao = api.doacao.delete.useMutation({
    onSuccess: async () => {
      setDeletingId(null);
      await utils.doacao.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
      setToast("🗑️ Doação removida.");
    },
  });

  // ── Helpers ──
  const handleToggleItem = (item: { id: string; name: string; pontos: number }) => {
    const existe = itensQuantificados.find(i => i.id === item.id);
    if (existe) {
      setItensQuantificados(prev => prev.filter(i => i.id !== item.id));
    } else {
      setItensQuantificados(prev => [...prev, { id: item.id, nome: item.name, quantidade: 1, pontos: item.pontos }]);
    }
  };

  const updateQuantidade = (e: React.MouseEvent, id: string, delta: number) => {
    e.stopPropagation();
    setItensQuantificados(prev => prev.map(i =>
      i.id === id ? { ...i, quantidade: Math.max(1, i.quantidade + delta) } : i
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nomeDoador.trim() || !equipeId || itensQuantificados.length === 0) {
      setToast("⚠️ Preencha doador, equipe e selecione ao menos um item.");
      return;
    }
    const payload = {
      nomeDoador: nomeDoador.trim(),
      equipeId,
      desc: desc.trim() || undefined,
      itens: itensQuantificados.map(i => ({ itemId: i.id, quantidade: i.quantidade })),
    };
    if (isEditing && editingId) {
      updateDoacao.mutate({ id: editingId, ...payload });
    } else {
      createDoacao.mutate(payload);
    }
  };

  const handleEdit = (doacao: any) => {
    setIsEditing(true);
    setEditingId(doacao.id);
    setNomeDoador(doacao.nome);
    setEquipeId(doacao.equipeId);
    setDesc(doacao.desc ?? "");
    setItensQuantificados(
      doacao.itensDoadores.map((vinc: any) => ({
        id: vinc.itemId,
        nome: vinc.item.name,
        quantidade: vinc.quantidade,
        pontos: vinc.item.pontos,
      }))
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const clearForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setNomeDoador("");
    setEquipeId("");
    setDesc("");
    setItensQuantificados([]);
  };

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteDoacao.mutate({ id });
  };

  // Stats
  const totalPontosGeral = (doacoes ?? []).reduce((acc, d) =>
    acc + d.itensDoadores.reduce((a: number, v: any) => a + ((v.item?.pontos ?? 0) * v.quantidade), 0), 0
  );

  const itensSelecionadosPontos = itensQuantificados.reduce((acc, i) => acc + i.pontos * i.quantidade, 0);
  const isPending = createDoacao.isPending || updateDoacao.isPending;
  const canSubmit = nomeDoador.trim() && equipeId && itensQuantificados.length > 0 && !isPending;

  const filteredDoacoes = (doacoes ?? []).filter(d =>
    d.nome.toLowerCase().includes(search.toLowerCase()) ||
    d.equipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <style>{`
        @keyframes slideUp { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
      `}</style>

      <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
        <Navbar activePage="doacoes" />

        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* ── Header ── */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-[#248ebe] tracking-tight">Registro de Doações</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Gincana Proeidi Conecta</p>
            </div>
           
          </div>

          {/* ── Stats ── */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Doações</p>
              <p className="text-3xl font-black text-[#248ebe] mt-1">{doacoes?.length ?? 0}</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Pontos Gerados</p>
              <p className="text-3xl font-black text-[#ff9324] mt-1">{totalPontosGeral}</p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Itens Disponíveis</p>
              <p className="text-3xl font-black text-slate-700 mt-1">{itens?.length ?? 0}</p>
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
                    <h2 className="text-sm font-black text-white">{isEditing ? "Editar Doação" : "Nova Doação"}</h2>
                    <p className="text-[10px] text-white/70 font-semibold uppercase tracking-widest">
                      {isEditing ? "Atualizando registro existente" : "Aparece para todos instantaneamente"}
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-5 space-y-4">

                  {/* Nome do doador */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#248ebe] inline-block" />
                      Nome do Doador
                      <span className="text-[#ff9324]">(obrigatório)</span>
                    </label>
                    <input
                      autoFocus
                      type="text"
                      placeholder="Ex: João Silva..."
                      className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#248ebe] focus:bg-white px-5 outline-none font-semibold text-slate-800 text-sm transition-all placeholder:text-slate-300"
                      style={{ height: "52px" }}
                      value={nomeDoador}
                      onChange={(e) => setNomeDoador(e.target.value)}
                      autoComplete="off"
                    />
                  </div>

                  {/* Equipe */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff9324] inline-block" />
                      Equipe Beneficiada
                      <span className="text-[#ff9324]">(obrigatório)</span>
                    </label>
                    <div className="relative">
                      <select
                        className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#ff9324] focus:bg-white px-5 outline-none font-semibold text-slate-700 text-sm transition-all appearance-none cursor-pointer"
                        style={{ height: "52px" }}
                        value={equipeId}
                        onChange={(e) => setEquipeId(e.target.value)}
                      >
                        <option value="" disabled>Selecione uma equipe...</option>
                        {equipes?.map(eq => (
                          <option key={eq.id} value={eq.id}>{eq.nome}</option>
                        ))}
                      </select>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </div>
                  </div>

                  {/* Itens */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#248ebe] inline-block" />
                        Itens Doados
                        <span className="text-[#ff9324]">(obrigatório)</span>
                      </span>
                      {itensQuantificados.length > 0 && (
                        <span className="text-emerald-600 normal-case font-bold tracking-normal">
                          {itensSelecionadosPontos} pts selecionados
                        </span>
                      )}
                    </label>
                    <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1" style={{ scrollbarWidth: "thin" }}>
                      {itens?.length === 0 && (
                        <p className="text-xs text-slate-400 text-center py-4">Nenhum item cadastrado ainda.</p>
                      )}
                      {itens?.map((item) => {
                        const sel = itensQuantificados.find(i => i.id === item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleToggleItem(item)}
                            className={`flex items-center justify-between rounded-xl border-2 cursor-pointer transition-all active:scale-[0.98] px-4 ${sel ? "border-[#248ebe] bg-blue-50" : "border-slate-100 bg-white hover:border-slate-200"}`}
                            style={{ height: "48px" }}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className={`w-4 h-4 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${sel ? "bg-[#248ebe] border-[#248ebe]" : "border-slate-300"}`}>
                                {sel && <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                              </div>
                              <span className={`font-bold text-sm truncate ${sel ? "text-[#248ebe]" : "text-slate-700"}`}>{item.name}</span>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <span className="text-[10px] font-black text-[#ff9324]">{item.pontos} pts</span>
                              {sel && (
                                <div className="flex items-center bg-white rounded-lg border border-slate-200 overflow-hidden" onClick={e => e.stopPropagation()}>
                                  <button type="button" onClick={(e) => updateQuantidade(e, item.id, -1)}
                                    className="w-7 h-7 flex items-center justify-center text-[#ff9324] hover:bg-orange-50 font-black transition-colors text-sm">−</button>
                                  <span className="w-6 text-center text-xs font-black text-slate-800">{sel.quantidade}</span>
                                  <button type="button" onClick={(e) => updateQuantidade(e, item.id, 1)}
                                    className="w-7 h-7 flex items-center justify-center text-[#ff9324] hover:bg-orange-50 font-black transition-colors text-sm">+</button>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Observação */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
                      Observação
                      <span className="text-slate-300 normal-case font-semibold tracking-normal">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Algum detalhe extra sobre a doação..."
                      className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:bg-white px-5 outline-none font-medium text-slate-600 text-sm transition-all placeholder:text-slate-300"
                      style={{ height: "52px" }}
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
                          {isEditing ? "Salvando..." : "Registrando..."}
                        </>
                      ) : (
                        <>
                          {isEditing ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" /></svg>
                          )}
                          {isEditing ? "Salvar Alterações" : "Registrar Doação"}
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

              {/* ── Conquistas ── */}
              <div className="mt-6 sticky top-[550px]">
                <ConquistasPanel doacoes={doacoes} />
              </div>
            </div>

            {/* ── Lista de Doações ── */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  {filteredDoacoes.length} {filteredDoacoes.length === 1 ? "doação" : "doações"}
                </p>
                {(doacoes?.length ?? 0) > 3 && (
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-300 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <input type="text" placeholder="Buscar..."
                      className="h-8 pl-9 pr-4 bg-white border border-slate-200 rounded-xl outline-none text-xs font-medium text-slate-600 focus:border-[#248ebe] transition-colors w-36 placeholder:text-slate-300"
                      value={search} onChange={(e) => setSearch(e.target.value)} />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                {doacoes === undefined ? (
                  [...Array(4)].map((_, i) => (
                    <div key={i} className="h-[100px] bg-white rounded-2xl border border-slate-100 animate-pulse" />
                  ))
                ) : filteredDoacoes.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed border-slate-100 rounded-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <p className="font-black text-slate-300 text-sm uppercase tracking-widest">
                      {search ? "Nenhum resultado" : "Nenhuma doação ainda"}
                    </p>
                    <p className="text-xs text-slate-300 mt-1">
                      {search ? "Tente outro termo" : "Use o formulário ao lado para registrar"}
                    </p>
                  </div>
                ) : (
                  filteredDoacoes.map((doacao) => (
                    <DoacaoCard
                      key={doacao.id}
                      doacao={doacao}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      isDeleting={deletingId === doacao.id}
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