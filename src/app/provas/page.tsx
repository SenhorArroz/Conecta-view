"use client";

import { useState } from "react";
import { useSession } from 'next-auth/react';
import { api } from '~/trpc/react';

export default function ProvasPage() {
  const { data: session } = useSession();
  const utils = api.useUtils();

  // Queries
  const { data: equipes } = api.equipe.getAll.useQuery();
  const { data: provas, isLoading } = api.prova.getAll.useQuery();

  // Estados
  const [nomeProva, setNomeProva] = useState("");
  const [pontos, setPontos] = useState("");
  const [equipeId, setEquipeId] = useState("");
  const [desc, setDesc] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Mutações
  const createProva = api.prova.create.useMutation({
    onSuccess: async () => {
      alert("Prova cadastrada!");
      clearForm();
      await utils.prova.getAll.invalidate();
      await utils.equipe.getAll.invalidate(); // Atualiza ranking no dashboard
    }
  });

  const updateProva = api.prova.update.useMutation({
    onSuccess: async () => {
      alert("Prova atualizada!");
      clearForm();
      await utils.prova.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
    }
  });

  const deleteProva = api.prova.delete.useMutation({
    onSuccess: async () => {
      await utils.prova.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      nome: nomeProva,
      desc,
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
    setEquipeId(prova.equipeId || "");
    setDesc(prova.desc);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setNomeProva("");
    setPontos("");
    setEquipeId("");
    setDesc("");
  };

  return (
    <main className="min-h-screen w-full bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#248ebe] p-1.5 rounded-xl">
            <img src="/logoProeidi.png" alt="Logo" className="h-10 brightness-0 invert" />
          </div>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <a href="/dashboard" className="hover:text-[#248ebe] transition-all">Dashboard</a>
            <a href="/itens" className="hover:text-[#248ebe] transition-all">Itens</a>
            <a href="/doacoes" className="hover:text-[#248ebe] transition-all">Doações</a>
            <a className="text-[#ff9324] border-b-2 border-[#ff9324] pb-1 cursor-pointer">Provas</a>
          </nav>
          <div className="flex items-center gap-3 bg-slate-50 pl-4 pr-1 py-1 rounded-full border border-slate-100">
            <span className="text-xs font-bold text-slate-500">{session?.user?.name ?? "Visitante"}</span>
            <div className="h-8 w-8 rounded-full bg-[#248ebe] flex items-center justify-center text-white text-xs font-bold uppercase">{session?.user?.name?.[0] ?? "V"}</div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto space-y-10 pb-20">
        <div className="flex justify-between py-10 items-end border-b-4 border-[#ff9324] pb-4">
          <div>
            <h1 className="text-4xl font-black text-[#248ebe]">Provas da Gincana</h1>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">Registro de Atividades e Pontuações</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <section className="lg:col-span-1">
            <form onSubmit={handleSubmit} className={`card bg-white shadow-xl rounded-[2.5rem] border-2 transition-all p-8 sticky top-24 ${isEditing ? 'border-[#248ebe]' : 'border-slate-100'}`}>
              <h2 className="text-xl font-bold text-[#248ebe] mb-6 flex items-center gap-2">
                <span className={`w-2 h-6 rounded-full ${isEditing ? 'bg-[#248ebe]' : 'bg-[#ff9324]'}`}></span>
                {isEditing ? "Editar Prova" : "Nova Prova"}
              </h2>

              <div className="space-y-4">
                <input type="text" placeholder="Nome da Prova" className="w-full h-14 rounded-2xl bg-slate-100 px-6 outline-none text-slate-800 font-medium placeholder:text-slate-400 shadow-inner focus:border-[#248ebe] border-2 border-transparent transition-all" value={nomeProva} onChange={(e) => setNomeProva(e.target.value)} required />
                <input type="number" placeholder="Pontuação" className="w-full h-14 rounded-2xl bg-slate-100 px-6 outline-none text-slate-800 font-medium placeholder:text-slate-400 shadow-inner focus:border-[#248ebe] border-2 border-transparent transition-all" value={pontos} onChange={(e) => setPontos(e.target.value)} required />
                
                <select className="w-full h-14 rounded-2xl bg-slate-100 px-6 outline-none text-slate-800 font-medium shadow-inner border-2 border-transparent focus:border-[#248ebe] appearance-none cursor-pointer" value={equipeId} onChange={(e) => setEquipeId(e.target.value)}>
                  <option value="">Nenhuma Equipe (Pendente)</option>
                  {equipes?.map(eq => <option key={eq.id} value={eq.id}>Vencedor: Equipe {eq.nome}</option>)}
                </select>

                <textarea placeholder="Descrição da atividade..." className="w-full h-32 rounded-2xl bg-slate-100 p-6 outline-none text-slate-800 font-medium placeholder:text-slate-400 shadow-inner focus:border-[#248ebe] border-2 border-transparent resize-none transition-all" value={desc} onChange={(e) => setDesc(e.target.value)} required />

                <button type="submit" disabled={createProva.isPending || updateProva.isPending} className={`w-full h-14 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all ${isEditing ? 'bg-[#248ebe]' : 'bg-[#ff9324]'} disabled:opacity-50`}>
                  {isEditing ? "Salvar Alterações" : "Cadastrar Prova"}
                </button>
                {isEditing && <button type="button" onClick={clearForm} className="w-full text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors py-2">Cancelar Edição</button>}
              </div>
            </form>
          </section>

          <section className="lg:col-span-2 space-y-6">
            {isLoading ? (
              <p className="text-center font-bold text-slate-400 py-20">Carregando provas...</p>
            ) : (
              provas?.map((prova) => (
                <div key={prova.id} className="card bg-white shadow-md rounded-[2rem] border-l-8 border-[#248ebe] hover:shadow-xl transition-all overflow-hidden">
                  <div className="card-body p-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800">{prova.nome}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          {prova.equipe ? (
                            <span className="badge bg-[#ff9324] text-white border-none font-bold py-3 px-4">Vencedor: {prova.equipe.name}</span>
                          ) : (
                            <span className="badge bg-slate-200 text-slate-500 border-none font-bold py-3 px-4">Pendente</span>
                          )}
                          <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{new Date(prova.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-3xl font-black text-[#248ebe] tracking-tighter">{prova.pontos}</span>
                        <span className="block text-[10px] font-black text-[#ff9324] uppercase">Pontos</span>
                      </div>
                    </div>
                    <p className="text-slate-500 text-sm mt-4 bg-slate-50 p-4 rounded-xl italic border border-slate-100">"{prova.desc}"</p>
                    <div className="flex justify-end gap-6 mt-6 pt-4 border-t border-slate-50">
                      <button onClick={() => handleEdit(prova)} className="text-[#248ebe] font-black text-xs uppercase tracking-widest hover:text-[#ff9324] transition-colors">Editar</button>
                      <button onClick={() => { if(confirm("Excluir prova?")) deleteProva.mutate({ id: prova.id }) }} className="text-red-400 font-black text-xs uppercase tracking-widest hover:text-red-600 transition-colors">Excluir</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </main>
  );
}