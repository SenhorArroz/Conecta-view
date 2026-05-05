"use client";
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { api } from '~/trpc/react';
import Navbar from '../_components/navbar';

export default function DashboardEquipe() {
    const { data: session } = useSession();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [novaEquipeNome, setNovaEquipeNome] = useState("");
    const { data: doacoesReal } = api.doacao.getAll.useQuery();

    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const utils = api.useUtils();
    const { data: equipesReal, isLoading } = api.equipe.getAll.useQuery();

    const listaEquipesRankeada = equipesReal
        ? [...equipesReal]
            .sort((a, b) => b.pontos - a.pontos)
            .map((eq, index) => ({
                ...eq,
                posicao: index + 1
            }))
        : [];

    const top1 = listaEquipesRankeada.find(e => e.posicao === 1);
    const top2 = listaEquipesRankeada.find(e => e.posicao === 2);
    const top3 = listaEquipesRankeada.find(e => e.posicao === 3);

    const createEquipe = api.equipe.create.useMutation({
        onSuccess: async () => {
            handleCancelar();
            await utils.equipe.getAll.invalidate();
        }
    });

    const updateEquipe = api.equipe.update.useMutation({
        onSuccess: async () => {
            handleCancelar();
            await utils.equipe.getAll.invalidate();
        }
    });

    const deleteEquipe = api.equipe.delete.useMutation({
        onSuccess: async () => {
            await utils.equipe.getAll.invalidate();
        }
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

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col w-full font-sans text-slate-800">

            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
                        onClick={handleCancelar}
                    ></div>

                    <div className="relative bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl border border-slate-100 transform transition-all scale-100">
                        <div className="flex flex-col items-center text-center mb-8">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#248ebe]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-black text-[#248ebe] tracking-tight">{isEditing ? "Editar Equipe" : "Nova Equipe"}</h3>
                            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Gincana Proeidi Conecta</p>
                        </div>

                        <div className="space-y-6">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 mb-2 block">Nome da Equipe</label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Equipe Sigma"
                                        className="w-full h-14 bg-slate-50 border-2 border-transparent focus:border-[#248ebe] rounded-2xl px-6 outline-none font-bold text-slate-700 transition-all placeholder:text-slate-300 shadow-inner"
                                        value={novaEquipeNome}
                                        onChange={(e) => setNovaEquipeNome(e.target.value)}
                                    />
                                </div>

                                <div className="flex flex-col gap-3 pt-2">
                                    <button type="submit" disabled={createEquipe.isPending || updateEquipe.isPending} className="w-full h-14 bg-[#248ebe] hover:bg-[#ff9324] text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-100 transition-all duration-300 active:scale-95">
                                        {createEquipe.isPending || updateEquipe.isPending ? "Processando..." : isEditing ? "Salvar Alterações" : "Confirmar Cadastro"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleCancelar}
                                        className="w-full h-14 bg-transparent text-slate-400 hover:text-slate-600 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            <Navbar activePage="dashboard" />

            <main className="p-6 md:p-10 max-w-7xl mx-auto w-full flex flex-col gap-10">
                <section className="relative overflow-hidden bg-white p-10 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100 flex flex-col items-center">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#248ebe] via-[#ff9324] to-[#248ebe]"></div>

                    <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-12">Líderes da Gincana</h2>

                    <div className="flex items-end justify-center gap-4 md:gap-12 h-64 w-full">
                        {/* 2º Lugar */}
                        <div className="flex flex-col items-center group">
                            <div className="mb-4 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-slate-100 border-4 border-slate-400 flex items-center justify-center font-black text-slate-500 shadow-lg rotate-3 group-hover:rotate-0 transition-all">2º</div>
                            </div>
                            <div className="w-24 md:w-32 bg-gradient-to-b from-slate-500 to-slate-700 h-28 rounded-t-[2rem] flex flex-col items-center justify-center shadow-lg text-white">
                                <span className="text-[10px] font-black text-white/70 uppercase">{top2?.pontos ?? 0} PTS</span>
                                <span className="text-sm font-bold truncate px-2">{top2?.nome ?? "---"}</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="mb-6 transform group-hover:-translate-y-3 transition-transform duration-500">
                                <div className="w-20 h-20 rounded-[1.5rem] bg-white border-4 border-[#ff9324] flex items-center justify-center font-black text-3xl text-[#ff9324] shadow-2xl -rotate-6 group-hover:rotate-0 transition-all">1º</div>
                            </div>
                            <div className="w-32 md:w-40 bg-gradient-to-b from-[#248ebe] to-[#1a6b91] h-44 rounded-t-[2.5rem] flex flex-col items-center justify-center shadow-2xl relative text-white">
                                <div className="absolute -top-3 px-3 py-1 bg-[#ff9324] rounded-full text-[9px] font-black text-white uppercase">Vencedor</div>
                                <span className="text-[11px] font-black text-white/70 uppercase">{top1?.pontos ?? 0} PTS</span>
                                <span className="text-xl font-black truncate px-2">{top1?.nome ?? "---"}</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center group">
                            <div className="mb-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 border-4 border-amber-400 flex items-center justify-center font-black text-amber-700/80 shadow-md rotate-12 group-hover:rotate-0 transition-all">3º</div>
                            </div>
                            <div className="w-24 md:w-32 bg-gradient-to-b from-amber-600/90 to-amber-700/60 h-20 rounded-t-[2rem] flex flex-col items-center justify-center shadow-lg text-white">
                                <span className="text-[10px] font-black text-white/70 uppercase">{top3?.pontos ?? 0} PTS</span>
                                <span className="text-sm font-bold truncate px-2">{top3?.nome ?? "---"}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => { setIsEditing(false); setIsModalOpen(true); }}
                        className="mt-12 group flex items-center gap-3 bg-[#248ebe] hover:bg-[#ff9324] text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 shadow-xl shadow-blue-200"
                    >
                        <span>Adicionar Equipe</span>
                        <div className="bg-white/20 p-1 rounded-md group-hover:rotate-90 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" /></svg>
                        </div>
                    </button>
                </section>

                <div className="grid lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-3 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-sm font-black text-[#248ebe] uppercase tracking-[0.2em] flex items-center gap-2">
                                <div className="w-1.5 h-6 bg-[#ff9324] rounded-full"></div>
                                Classificação Geral
                            </h3>
                            <span className="text-[10px] font-bold text-slate-400">Total: {listaEquipesRankeada.length} Equipes</span>
                        </div>
                        <div className="space-y-2">
                            {isLoading ? (
                                <p className="text-center py-4 font-bold text-slate-400">Carregando classificação...</p>
                            ) : (
                                listaEquipesRankeada.map((eq) => (
                                    <div key={eq.id} className="flex justify-between items-center p-4 hover:bg-slate-50 rounded-3xl transition-all group border border-transparent hover:border-slate-100">
                                        <div className="flex items-center gap-5">
                                            <span className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black transition-all ${eq.posicao === 1 ? 'bg-[#ff9324] text-white rotate-6' : 'bg-slate-100 text-slate-400 group-hover:rotate-3'}`}>
                                                {eq.posicao}º
                                            </span>
                                            <div>
                                                <p className="font-black text-slate-700 uppercase text-xs tracking-tight">{eq.nome}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase">Proeidi Conecta</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right">
                                                <span className="font-black text-[#248ebe] text-lg">{eq.pontos}</span>
                                                <span className="text-[10px] font-black text-slate-300 ml-1 uppercase">pts</span>
                                            </div>

                                            <div className="dropdown dropdown-left">
                                                <label tabIndex={0} className="btn border-0 bg-amber-50 hover:bg-amber-500/50 btn-xs btn-circle text-slate-300 hover:text-[#248ebe]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                                                </label>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-xl bg-white border border-slate-100 rounded-2xl w-32">
                                                    <li><button onClick={() => handleEditClick(eq.id, eq.nome)} className="text-[10px] font-black uppercase text-slate-600 hover:text-[#248ebe]">Editar</button></li>
                                                    <li><button onClick={() => { if (confirm("Excluir equipe?")) deleteEquipe.mutate({ id: eq.id }) }} className="text-[10px] font-black uppercase text-red-400 hover:text-red-600">Excluir</button></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-2 bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                        <h3 className="text-sm font-black text-[#248ebe] uppercase tracking-[0.2em] mb-10 flex items-center gap-2">
                            <div className="w-1.5 h-6 bg-[#ff9324] rounded-full"></div>
                            Atividades Recentes
                        </h3>
                        <div className="space-y-6">
                            {doacoesReal && doacoesReal.length > 0 ? (
                                [...doacoesReal]
                                    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                    .slice(0, 5)
                                    .map((doacao, i, arr) => {
                                        const totalPontos = doacao.itensDoadores.reduce((acc, vinc) => acc + ((vinc.item?.pontos ?? 0) * vinc.quantidade), 0);
                                        const resumoItem = doacao.itensDoadores[0]?.item.name ?? "Doação";
                                        return (
                                            <div key={doacao.id} className="flex gap-4 group">
                                                <div className="flex flex-col items-center">
                                                    <div className="w-3 h-3 rounded-full bg-[#ff9324] group-hover:scale-125 transition-transform"></div>
                                                    {i !== arr.length - 1 && <div className="w-0.5 h-16 bg-slate-100"></div>}
                                                </div>
                                                <div className="flex flex-col gap-1 -mt-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-black text-xs text-slate-700 uppercase tracking-tight">{resumoItem} {doacao.itensDoadores.length > 1 && "..."}</span>
                                                        <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[9px] font-black rounded-md">+{totalPontos}</span>
                                                    </div>
                                                    <p className="text-[10px] font-bold text-slate-400 uppercase">Equipe <span className="text-[#248ebe]">{doacao.equipe.name}</span> • {new Date(doacao.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                            ) : (
                                <p className="text-center font-bold text-slate-300 py-4 uppercase text-xs">Nenhuma atividade recente</p>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}