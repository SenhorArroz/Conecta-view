"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { api } from "~/trpc/react";
import Navbar from "../_components/navbar";
import { ConquistasPanel } from "../_components/conquistas";

// ─── Types ───────────────────────────────────────────────────────────────────
type Item = { id: string; name: string; pontos: number; desc?: string | null };

// ─── Toast ───────────────────────────────────────────────────────────────────
function Toast({ message, onDone }: { message: string; onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 3000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div className="fixed bottom-6 right-6 z-[200] animate-slide-up">
      <div className="flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl text-sm font-bold">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        {message}
      </div>
    </div>
  );
}

// ─── Add Item Form ────────────────────────────────────────────────────────────
function AddItemForm({ onAdd, isPending }: { onAdd: (name: string, pontos: number, desc: string) => void; isPending: boolean }) {
  const [name, setName] = useState("");
  const [pontos, setPontos] = useState("");
  const [desc, setDesc] = useState("");
  const nameRef = useRef<HTMLInputElement>(null);

  const canSubmit = name.trim() !== "" && pontos !== "";

  const submit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!canSubmit || isPending) return;
    onAdd(name.trim(), Number(pontos), desc.trim());
    setName("");
    setPontos("");
    setDesc("");
    setTimeout(() => nameRef.current?.focus(), 50);
  };

  return (
    <div className="rounded-[1.75rem] border-2 border-[#248ebe]/25 bg-white shadow-lg shadow-blue-900/5 overflow-hidden">
      {/* Cabeçalho colorido */}
      <div className="bg-gradient-to-r from-[#248ebe] to-[#1a7aaa] px-6 py-4 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <div>
          <h2 className="text-sm font-black text-white tracking-wide">Adicionar Novo Item</h2>
          <p className="text-[10px] text-white/60 font-semibold uppercase tracking-widest">Aparece para todos instantaneamente</p>
        </div>
      </div>

      {/* Campos */}
      <form onSubmit={submit} className="p-6 space-y-4">
        {/* Nome */}
        <div className="space-y-1.5">
          <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#248ebe] inline-block" />
            Nome do Item
            <span className="text-[#ff9324]">(obrigatório)</span>
          </label>
          <input
            ref={nameRef}
            autoFocus
            type="text"
            placeholder="Ex: Cesta Básica, Agasalho, Brinquedo..."
            className="w-full h-13 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#248ebe] focus:bg-white px-5 outline-none font-semibold text-slate-800 text-sm transition-all placeholder:text-slate-300"
            style={{ height: '52px' }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
          />
        </div>

        {/* Pontuação + Descrição */}
        <div className="grid grid-cols-5 gap-3">
          <div className="col-span-2 space-y-1.5">
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
                className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-[#ff9324] focus:bg-white pl-5 pr-10 outline-none font-black text-[#ff9324] text-xl transition-all placeholder:text-slate-300"
                style={{ height: '52px' }}
                value={pontos}
                onChange={(e) => setPontos(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 uppercase pointer-events-none">pts</span>
            </div>
          </div>

          <div className="col-span-3 space-y-1.5">
            <label className="text-[11px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 inline-block" />
              Descrição
              <span className="text-slate-300 normal-case font-semibold tracking-normal">(opcional)</span>
            </label>
            <input
              type="text"
              placeholder="Detalhes sobre o item..."
              className="w-full rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:bg-white px-5 outline-none font-medium text-slate-600 text-sm transition-all placeholder:text-slate-300"
              style={{ height: '52px' }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>

        {/* Botão */}
        <button
          type="submit"
          disabled={!canSubmit || isPending}
          className={`w-full h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2.5 ${
            canSubmit && !isPending
              ? "bg-[#ff9324] hover:bg-[#e07d1d] text-white shadow-lg shadow-orange-200"
              : "bg-slate-100 text-slate-300 cursor-not-allowed"
          }`}
        >
          {isPending ? (
            <>
              <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Adicionando...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
              </svg>
              Adicionar Item
            </>
          )}
        </button>
      </form>
    </div>
  );
}

// ─── Item Row ─────────────────────────────────────────────────────────────────
function ItemRow({
  item,
  onEdit,
  onDelete,
  isDeleting,
  doacaoCount,
}: {
  item: Item;
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
  isDeleting: boolean;
  doacaoCount: number;
}) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className={`group flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:border-[#248ebe]/30 hover:shadow-md transition-all duration-200 ${isDeleting ? "opacity-40 scale-95" : ""}`}>
      {/* Pontos badge */}
      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-[#fff4e6] to-[#fff0da] border border-[#ff9324]/20 flex flex-col items-center justify-center">
        <span className="text-lg font-black text-[#ff9324] leading-none">{item.pontos}</span>
        <span className="text-[9px] font-black text-[#ff9324]/60 uppercase tracking-wider">pts</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="font-black text-slate-800 text-sm truncate">{item.name}</p>
        {item.desc && (
          <p className="text-xs text-slate-400 font-medium truncate mt-0.5">{item.desc}</p>
        )}
        {/* Contador de doações */}
        {doacaoCount > 0 ? (
          <div className="flex items-center gap-1 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <span className="text-[10px] font-black text-emerald-600">{doacaoCount}x doado</span>
          </div>
        ) : (
          <div className="flex items-center gap-1 mt-1">
            <span className="text-[10px] font-bold text-slate-300">Nunca doado</span>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
        <button
          onClick={() => onEdit(item)}
          className="h-8 w-8 rounded-lg bg-slate-50 hover:bg-[#248ebe] hover:text-white text-slate-400 flex items-center justify-center transition-all"
          title="Editar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>

        {confirmDelete ? (
          <div className="flex items-center gap-1">
            <button
              onClick={() => onDelete(item.id)}
              className="h-8 px-3 rounded-lg bg-red-500 text-white text-xs font-black transition-all active:scale-95"
            >
              Sim
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              className="h-8 px-3 rounded-lg bg-slate-100 text-slate-500 text-xs font-black transition-all"
            >
              Não
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmDelete(true)}
            className="h-8 w-8 rounded-lg bg-slate-50 hover:bg-red-50 hover:text-red-500 text-slate-400 flex items-center justify-center transition-all"
            title="Remover"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Edit Modal ───────────────────────────────────────────────────────────────
function EditModal({
  item,
  onSave,
  onClose,
  isPending,
}: {
  item: Item;
  onSave: (id: string, name: string, pontos: number, desc: string) => void;
  onClose: () => void;
  isPending: boolean;
}) {
  const [name, setName] = useState(item.name);
  const [pontos, setPontos] = useState(item.pontos.toString());
  const [desc, setDesc] = useState(item.desc ?? "");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full max-w-md rounded-[2rem] p-8 shadow-2xl border border-slate-100 animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-black text-[#248ebe]">Editar Item</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Atualiza para todos em tempo real</p>
          </div>
          <button onClick={onClose} className="h-9 w-9 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-400 flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Nome</label>
            <input
              autoFocus
              type="text"
              className="w-full h-12 bg-slate-50 border-2 border-transparent focus:border-[#248ebe] rounded-xl px-4 outline-none font-bold text-slate-700 transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Pontuação</label>
            <input
              type="number"
              min={0}
              className="w-full h-12 bg-slate-50 border-2 border-transparent focus:border-[#ff9324] rounded-xl px-4 outline-none font-bold text-[#ff9324] transition-all"
              value={pontos}
              onChange={(e) => setPontos(e.target.value)}
            />
          </div>
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-1.5 block">Descrição</label>
            <input
              type="text"
              className="w-full h-12 bg-slate-50 border-2 border-transparent focus:border-[#248ebe] rounded-xl px-4 outline-none font-medium text-slate-600 transition-all placeholder:text-slate-300"
              placeholder="Opcional..."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") onSave(item.id, name, Number(pontos), desc); }}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => onSave(item.id, name, Number(pontos), desc)}
            disabled={isPending || !name.trim() || !pontos}
            className="flex-1 h-12 bg-[#248ebe] hover:bg-[#ff9324] disabled:opacity-50 text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-95"
          >
            {isPending ? "Salvando..." : "Salvar Alterações"}
          </button>
          <button onClick={onClose} className="h-12 px-5 bg-slate-50 hover:bg-slate-100 text-slate-500 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function ItensPage() {
  const utils = api.useUtils();
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const prevCountRef = useRef<number | null>(null);

  // Polling a cada 5s (sincroniza com outros usuários)
  const { data: itens, dataUpdatedAt } = api.item.getAll.useQuery(undefined, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  // Query de doações para calcular contadores por item
  const { data: doacoes } = api.doacao.getAll.useQuery(undefined, {
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });

  // Mapa: itemId -> total de vezes doado (somando quantidade)
  const donationCountMap = useMemo(() => {
    const map: Record<string, number> = {};
    if (!doacoes) return map;
    for (const doacao of doacoes) {
      for (const vinc of doacao.itensDoadores) {
        map[vinc.itemId] = (map[vinc.itemId] ?? 0) + vinc.quantidade;
      }
    }
    return map;
  }, [doacoes]);

  // Top 5 mais doados
  const top5 = useMemo(() => {
    if (!itens) return [];
    return [...itens]
      .map(i => ({ ...i, count: donationCountMap[i.id] ?? 0 }))
      .filter(i => i.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [itens, donationCountMap]);

  // Detecta quando outro usuário adicionou/removeu itens
  useEffect(() => {
    if (itens === undefined) return;
    if (prevCountRef.current !== null && prevCountRef.current !== itens.length) {
      const diff = itens.length - prevCountRef.current;
      if (diff > 0) setToast(`✨ ${diff} novo(s) item(ns) adicionado(s) por outro usuário`);
      else setToast(`🗑️ ${Math.abs(diff)} item(ns) removido(s) por outro usuário`);
    }
    prevCountRef.current = itens.length;
  }, [itens]);

  const showToast = (msg: string) => setToast(msg);

  // ── Mutations ──
  const createItem = api.item.create.useMutation({
    onSuccess: async () => {
      await utils.item.getAll.invalidate();
      showToast("✅ Item adicionado com sucesso!");
    },
  });

  const updateItem = api.item.update.useMutation({
    onSuccess: async () => {
      setEditingItem(null);
      await utils.item.getAll.invalidate();
      showToast("✅ Item atualizado!");
    },
  });

  const deleteItem = api.item.delete.useMutation({
    onSuccess: async () => {
      setDeletingId(null);
      await utils.item.getAll.invalidate();
      showToast("🗑️ Item removido.");
    },
  });

  const handleAdd = (name: string, pontos: number, desc: string) => {
    createItem.mutate({ name, pontos, desc });
  };

  const handleSave = (id: string, name: string, pontos: number, desc: string) => {
    updateItem.mutate({ id, name, pontos, desc });
  };

  const handleDelete = (id: string) => {
    setDeletingId(id);
    deleteItem.mutate({ id });
  };

  // ── Filter ──
  const filtered = (itens ?? [])
    .filter((i) =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      (i.desc ?? "").toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  const totalPontos = (itens ?? []).reduce((acc, i) => acc + i.pontos, 0);
  const lastSync = dataUpdatedAt ? new Date(dataUpdatedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--";

  return (
    <>
      <style>{`
        @keyframes slide-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scale-in { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-slide-up { animation: slide-up 0.25s ease-out; }
        .animate-scale-in { animation: scale-in 0.2s ease-out; }
      `}</style>

      <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
        <Navbar activePage="itens" />

        <div className="max-w-6xl mx-auto px-4 py-8">

          {/* ── Header ── */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-3xl font-black text-[#248ebe] tracking-tight">Itens de Doação</h1>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] mt-1">
                Catálogo de itens e pontuações
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">

            {/* ── Esquerda: Formulário e Lista ── */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              
              {/* ── Add Form ── */}
              <AddItemForm onAdd={handleAdd} isPending={createItem.isPending} />

              {/* ── Search + List ── */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    {filtered.length} {filtered.length === 1 ? "item" : "itens"}
                    {search && ` para "${search}"`}
                  </p>
                  {(itens?.length ?? 0) > 3 && (
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-slate-300 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Buscar..."
                        className="h-8 pl-8 pr-4 bg-white border border-slate-100 rounded-xl outline-none text-xs font-medium text-slate-600 focus:border-[#248ebe] transition-colors w-36"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  {itens === undefined ? (
                    // Skeleton loading
                    [...Array(4)].map((_, i) => (
                      <div key={i} className="h-[74px] bg-white rounded-2xl border border-slate-100 animate-pulse" />
                    ))
                  ) : filtered.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                      <p className="font-black text-slate-300 text-sm uppercase tracking-widest">
                        {search ? "Nenhum resultado" : "Nenhum item ainda"}
                      </p>
                      <p className="text-xs text-slate-300 mt-1">
                        {search ? "Tente outro termo" : "Use o formulário para adicionar o primeiro"}
                      </p>
                    </div>
                  ) : (
                    filtered.map((item) => (
                      <ItemRow
                        key={item.id}
                        item={item as Item}
                        onEdit={(i) => setEditingItem(i)}
                        onDelete={handleDelete}
                        isDeleting={deletingId === item.id}
                        doacaoCount={donationCountMap[item.id] ?? 0}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* ── Direita: Stats, Conquistas e Top 5 ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              
              {/* ── Stats ── */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total de Itens</p>
                  <p className="text-3xl font-black text-[#248ebe] mt-1">{itens?.length ?? 0}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Soma de Pontos</p>
                  <p className="text-3xl font-black text-[#ff9324] mt-1">{totalPontos}</p>
                </div>
              </div>

              {/* ── Conquistas ── */}
              <div className="mt-0">
                <ConquistasPanel doacoes={doacoes} />
              </div>

              {/* ── Top 5 Mais Doados ── */}
              {top5.length > 0 && (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden sticky top-24">
                  <div className="bg-gradient-to-r from-[#ff9324] to-[#e07d1d] px-5 py-3 flex items-center gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="text-xs font-black text-white uppercase tracking-widest">Top 5 Mais Doados</h3>
                  </div>
                  <div className="divide-y divide-slate-50">
                    {top5.map((item, idx) => {
                      const maxCount = top5[0]!.count;
                      const pct = Math.round((item.count / maxCount) * 100);
                      const medals = ["🥇", "🥈", "🥉", "4º", "5º"];
                      return (
                        <div key={item.id} className="flex items-center gap-3 px-5 py-3">
                          <span className="text-sm flex-shrink-0 w-6 text-center">{medals[idx]}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-black text-slate-700 text-xs truncate">{item.name}</p>
                              <span className="flex-shrink-0 ml-2 text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{item.count}×</span>
                            </div>
                            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-[#ff9324] to-[#e07d1d] transition-all duration-500"
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </main>

      {/* ── Edit Modal ── */}
      {editingItem && (
        <EditModal
          item={editingItem}
          onSave={handleSave}
          onClose={() => setEditingItem(null)}
          isPending={updateItem.isPending}
        />
      )}

      {/* ── Toast ── */}
      {toast && <Toast message={toast} onDone={() => setToast(null)} />}
    </>
  );
}