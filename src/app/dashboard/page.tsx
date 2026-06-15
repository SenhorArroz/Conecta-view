"use client";
import { useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { api } from "~/trpc/react";
import Navbar from "../_components/navbar";

// ─── Modal Equipe ─────────────────────────────────────────────────────────────
function EquipeModal({ isEditing, nome, setNome, onSubmit, onClose, isPending }: {
  isEditing: boolean;
  nome: string;
  setNome: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  isPending: boolean;
}) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100" style={{ animation: "scaleIn 0.2s ease-out" }}>

        {/* Cabeçalho gradiente */}
        <div className="bg-gradient-to-r from-[#248ebe] to-[#1a7aaa] px-7 py-5 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-black text-white">{isEditing ? "Editar Equipe" : "Nova Equipe"}</h3>
            <p className="text-[10px] text-white/60 font-semibold uppercase tracking-widest">Gincana Proeidi Conecta</p>
          </div>
          <button onClick={onClose} className="ml-auto h-8 w-8 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#248ebe] inline-block" />
              Nome da Equipe
            </label>
            <input
              autoFocus
              type="text"
              placeholder="Ex: Equipe Sigma, Os Feras..."
              className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#248ebe] focus:bg-white px-5 outline-none font-semibold text-slate-800 text-sm transition-all placeholder:text-slate-300"
              style={{ height: "52px" }}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="flex gap-3 pt-1">
            <button type="submit" disabled={isPending || !nome.trim()}
              className={`flex-1 h-12 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-2 ${
                nome.trim() && !isPending
                  ? "bg-[#248ebe] hover:bg-[#ff9324] text-white shadow-lg shadow-blue-200"
                  : "bg-slate-100 text-slate-300 cursor-not-allowed"
              }`}>
              {isPending ? (
                <><svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Salvando...</>
              ) : isEditing ? "Salvar Alterações" : "Criar Equipe"}
            </button>
            <button type="button" onClick={onClose}
              className="h-12 px-5 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function DashboardEquipe() {
  const { data: session } = useSession();
  const utils = api.useUtils();
  const prevEquipeCountRef = useRef<number | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [novaEquipeNome, setNovaEquipeNome] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Polling a cada 5s
  const { data: equipesReal, isLoading, dataUpdatedAt } = api.equipe.getAll.useQuery(undefined, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });
  const { data: doacoesReal } = api.doacao.getAll.useQuery(undefined, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  // Detecta mudanças de outros usuários
  useEffect(() => {
    if (equipesReal === undefined) return;
    if (prevEquipeCountRef.current !== null && prevEquipeCountRef.current !== equipesReal.length) {
      const diff = equipesReal.length - prevEquipeCountRef.current;
      if (diff > 0) setToast(`✨ ${diff} equipe(s) adicionada(s)`);
      else setToast(`🗑️ ${Math.abs(diff)} equipe(s) removida(s)`);
    }
    prevEquipeCountRef.current = equipesReal.length;
  }, [equipesReal]);

  const lastSync = dataUpdatedAt
    ? new Date(dataUpdatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "--:--:--";

  const listaEquipesRankeada = equipesReal
    ? [...equipesReal].sort((a, b) => b.pontos - a.pontos).map((eq, i) => ({ ...eq, posicao: i + 1 }))
    : [];

  const top1 = listaEquipesRankeada.find(e => e.posicao === 1);
  const top2 = listaEquipesRankeada.find(e => e.posicao === 2);
  const top3 = listaEquipesRankeada.find(e => e.posicao === 3);

  const createEquipe = api.equipe.create.useMutation({
    onSuccess: async () => {
      handleCancelar();
      await utils.equipe.getAll.invalidate();
      setToast("✅ Equipe criada!");
    },
  });

  const updateEquipe = api.equipe.update.useMutation({
    onSuccess: async () => {
      handleCancelar();
      await utils.equipe.getAll.invalidate();
      setToast("✅ Equipe atualizada!");
    },
  });

  const deleteEquipe = api.equipe.delete.useMutation({
    onSuccess: async () => {
      setDeletingId(null);
      await utils.equipe.getAll.invalidate();
      setToast("🗑️ Equipe removida.");
    },
  });

  const handleEditClick = (id: string, nome: string) => {
    setEditingId(id);
    setNovaEquipeNome(nome);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleCancelar = () => {
    setIsModalOpen(false);
    setIsEditing(false);
    setEditingId(null);
    setNovaEquipeNome("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novaEquipeNome.trim()) return;
    if (isEditing && editingId) {
      updateEquipe.mutate({ id: editingId, nome: novaEquipeNome });
    } else {
      createEquipe.mutate({ nome: novaEquipeNome });
    }
  };

  const atividades = doacoesReal
    ? [...doacoesReal]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6)
    : [];

  return (
    <>
      <style>{`
        @keyframes scaleIn { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }
        @keyframes slideUp { from { opacity:0; transform:translateX(-50%) translateY(20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
      `}</style>

      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
        <Navbar activePage="dashboard" />

        <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col gap-8">

          {/* ── Header ── */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black text-[#248ebe] tracking-tight">Dashboard</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-0.5">Gincana Proeidi Conecta</p>
            </div>
          </div>

          {/* ── Pódio ── */}
          <section className="relative overflow-hidden bg-white rounded-[2.5rem] border border-slate-100 shadow-lg shadow-blue-900/5">
            {/* Barra de cor topo */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#248ebe] via-[#ff9324] to-[#248ebe]" />

            <div className="p-8 md:p-10 flex flex-col items-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-10">Líderes da Gincana</p>

              {/* Barras do pódio */}
              <div className="flex items-end justify-center gap-4 md:gap-10 w-full" style={{ height: "220px" }}>
                {/* 2º */}
                <div className="flex flex-col items-center group">
                  <div className="mb-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border-4 border-slate-400 flex items-center justify-center font-black text-slate-500 shadow-md rotate-3 group-hover:rotate-0 transition-all text-sm">2º</div>
                  </div>
                  <div className="w-24 md:w-32 bg-gradient-to-b from-slate-400 to-slate-600 h-24 rounded-t-[1.75rem] flex flex-col items-center justify-center shadow-lg text-white">
                    <span className="text-[10px] font-black text-white/70 uppercase">{top2?.pontos ?? 0} pts</span>
                    <span className="text-xs font-bold truncate px-2 mt-0.5 max-w-full">{top2?.nome ?? "—"}</span>
                  </div>
                </div>

                {/* 1º */}
                <div className="flex flex-col items-center group">
                  <div className="mb-4 transform group-hover:-translate-y-3 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-white border-4 border-[#ff9324] flex items-center justify-center font-black text-2xl text-[#ff9324] shadow-2xl -rotate-6 group-hover:rotate-0 transition-all">1º</div>
                  </div>
                  <div className="w-28 md:w-36 bg-gradient-to-b from-[#248ebe] to-[#1a6b91] h-36 rounded-t-[2rem] flex flex-col items-center justify-center shadow-2xl relative text-white">
                    <div className="absolute -top-3 px-3 py-1 bg-[#ff9324] rounded-full text-[9px] font-black text-white uppercase tracking-wider">Vencedor</div>
                    <span className="text-[11px] font-black text-white/70 uppercase mt-2">{top1?.pontos ?? 0} pts</span>
                    <span className="text-base font-black truncate px-3 mt-0.5 max-w-full">{top1?.nome ?? "—"}</span>
                  </div>
                </div>

                {/* 3º */}
                <div className="flex flex-col items-center group">
                  <div className="mb-2 transform group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border-4 border-amber-400 flex items-center justify-center font-black text-amber-700 shadow-md rotate-12 group-hover:rotate-0 transition-all text-xs">3º</div>
                  </div>
                  <div className="w-20 md:w-28 bg-gradient-to-b from-amber-500/90 to-amber-700/70 h-16 rounded-t-[1.5rem] flex flex-col items-center justify-center shadow-lg text-white">
                    <span className="text-[10px] font-black text-white/70 uppercase">{top3?.pontos ?? 0} pts</span>
                    <span className="text-xs font-bold truncate px-2 mt-0.5 max-w-full">{top3?.nome ?? "—"}</span>
                  </div>
                </div>
              </div>

              {/* Botão adicionar equipe */}
              <button
                onClick={() => { setIsEditing(false); setIsModalOpen(true); }}
                className="mt-8 group flex items-center gap-2.5 bg-[#248ebe] hover:bg-[#ff9324] text-white px-7 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-blue-200 active:scale-95"
              >
                <div className="bg-white/20 p-1 rounded-lg group-hover:rotate-90 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                </div>
                Adicionar Equipe
              </button>
            </div>
          </section>

          {/* ── Classificação + Atividades ── */}
          <div className="grid lg:grid-cols-5 gap-6">

            {/* Classificação Geral */}
            <div className="lg:col-span-3 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-7">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black text-[#248ebe] uppercase tracking-[0.2em] flex items-center gap-2">
                  <div className="w-1.5 h-5 bg-[#ff9324] rounded-full" />
                  Classificação Geral
                </h3>
                <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full">{listaEquipesRankeada.length} equipes</span>
              </div>

              <div className="space-y-1.5">
                {isLoading ? (
                  [...Array(4)].map((_, i) => (
                    <div key={i} className="h-14 bg-slate-50 rounded-2xl animate-pulse" />
                  ))
                ) : listaEquipesRankeada.length === 0 ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <p className="font-black text-slate-300 text-xs uppercase tracking-widest">Nenhuma equipe ainda</p>
                    <p className="text-xs text-slate-300 mt-1">Clique em "Adicionar Equipe" acima</p>
                  </div>
                ) : (
                  listaEquipesRankeada.map((eq) => {
                    const isFirst = eq.posicao === 1;
                    return (
                      <div key={eq.id}
                        className={`group flex items-center justify-between px-4 py-3 rounded-2xl border transition-all duration-200 ${
                          isFirst
                            ? "bg-blue-50 border-[#248ebe]/20"
                            : "border-transparent hover:bg-slate-50 hover:border-slate-100"
                        } ${deletingId === eq.id ? "opacity-40 scale-95" : ""}`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0 transition-all ${
                            isFirst ? "bg-[#ff9324] text-white rotate-6 group-hover:rotate-0" : "bg-slate-100 text-slate-500 group-hover:rotate-3"
                          }`}>
                            {eq.posicao}º
                          </span>
                          <div>
                            <p className="font-black text-slate-700 text-xs uppercase tracking-tight">{eq.nome}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Proeidi Conecta</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <span className={`font-black text-base ${isFirst ? "text-[#248ebe]" : "text-slate-600"}`}>{eq.pontos}</span>
                            <span className="text-[10px] font-black text-slate-300 ml-1 uppercase">pts</span>
                          </div>

                          {/* Ações inline (hover) */}
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => handleEditClick(eq.id, eq.nome)}
                              className="h-7 w-7 rounded-lg bg-white border border-slate-200 hover:bg-[#248ebe] hover:border-[#248ebe] text-slate-400 hover:text-white flex items-center justify-center transition-all"
                              title="Editar">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                            </button>
                            <button
                              onClick={() => { setDeletingId(eq.id); deleteEquipe.mutate({ id: eq.id }); }}
                              className="h-7 w-7 rounded-lg bg-white border border-slate-200 hover:bg-red-50 hover:border-red-200 text-slate-400 hover:text-red-500 flex items-center justify-center transition-all"
                              title="Excluir">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Atividades Recentes */}
            <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-7">
              <h3 className="text-sm font-black text-[#248ebe] uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <div className="w-1.5 h-5 bg-[#ff9324] rounded-full" />
                Atividades Recentes
              </h3>

              {atividades.length === 0 ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </div>
                  <p className="font-black text-slate-300 text-xs uppercase tracking-widest">Nenhuma atividade</p>
                </div>
              ) : (
                <div className="space-y-0">
                  {atividades.map((doacao, i) => {
                    const totalPontos = doacao.itensDoadores.reduce(
                      (acc, vinc) => acc + ((vinc.item?.pontos ?? 0) * vinc.quantidade), 0
                    );
                    const resumo = doacao.itensDoadores[0]?.item.name ?? "Doação";
                    const isLast = i === atividades.length - 1;
                    return (
                      <div key={doacao.id} className="flex gap-3 group">
                        {/* Timeline */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#ff9324] group-hover:scale-125 transition-transform mt-1 flex-shrink-0" />
                          {!isLast && <div className="w-px flex-1 bg-slate-100 my-1" style={{ minHeight: "32px" }} />}
                        </div>
                        {/* Conteúdo */}
                        <div className="pb-4 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-black text-xs text-slate-700 uppercase tracking-tight truncate">
                              {resumo}{doacao.itensDoadores.length > 1 && " +more"}
                            </span>
                            <span className="px-1.5 py-0.5 bg-emerald-50 text-emerald-600 text-[9px] font-black rounded-md flex-shrink-0">
                              +{totalPontos}
                            </span>
                          </div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase mt-0.5">
                            Equipe <span className="text-[#248ebe]">{doacao.equipe.name}</span>
                            {" · "}
                            {new Date(doacao.createdAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>
        </main>
      </div>

      {/* Modal de equipe */}
      {isModalOpen && (
        <EquipeModal
          isEditing={isEditing}
          nome={novaEquipeNome}
          setNome={setNovaEquipeNome}
          onSubmit={handleSubmit}
          onClose={handleCancelar}
          isPending={createEquipe.isPending || updateEquipe.isPending}
        />
      )}

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200]" style={{ animation: "slideUp 0.3s ease-out" }}>
          <div className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-2xl shadow-2xl text-sm font-bold whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            {toast}
          </div>
        </div>
      )}
      {toast && <span className="hidden" key={toast} ref={(el) => { if (el) setTimeout(() => setToast(null), 3500); }} />}
    </>
  );
}