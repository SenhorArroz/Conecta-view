"use client";

import { useState } from "react";
import { useSession } from 'next-auth/react';
import Navbar from '../_components/navbar';
import { api } from '~/trpc/react';

interface ItemSelecionado {
  id: string;
  nome: string;
  quantidade: number;
}

export default function DoacoesPage() {
  const { data: session } = useSession();
  const utils = api.useUtils();

  // Queries Reais
  const { data: itens } = api.item.getAll.useQuery();
  const { data: equipes } = api.equipe.getAll.useQuery();
  const { data: doacoesReal, isLoading } = api.doacao.getAll.useQuery();

  // Estados do Formulário
  const [nomeDoador, setNomeDoador] = useState("");
  const [equipeId, setEquipeId] = useState("");
  const [desc, setDesc] = useState("");
  const [itensQuantificados, setItensQuantificados] = useState<ItemSelecionado[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // --- LÓGICA DE SELEÇÃO E QUANTIDADE ---

  const handleToggleItem = (item: { id: string, name: string }) => {
    const existe = itensQuantificados.find(i => i.id === item.id);
    if (existe) {
      setItensQuantificados(prev => prev.filter(i => i.id !== item.id));
    } else {
      setItensQuantificados(prev => [...prev, { id: item.id, nome: item.name, quantidade: 1 }]);
    }
  };

  const updateQuantidade = (e: React.MouseEvent, id: string, delta: number) => {
    e.stopPropagation(); // IMPEDE de desmarcar o item ao clicar no + ou -
    setItensQuantificados(prev => prev.map(i =>
      i.id === id ? { ...i, quantidade: Math.max(1, i.quantidade + delta) } : i
    ));
  };

  // --- MUTAÇÕES (CREATE / UPDATE) ---

  const createDoacao = api.doacao.create.useMutation({
    onSuccess: async () => {
      alert("Doação registrada com sucesso!");
      clearForm();
      await utils.doacao.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
    }
  });

  const updateDoacao = api.doacao.update.useMutation({
    onSuccess: async () => {
      alert("Doação atualizada com sucesso!");
      clearForm();
      await utils.doacao.getAll.invalidate();
      await utils.equipe.getAll.invalidate();
    }
  });

  const deleteItem = api.doacao.delete.useMutation({
    onSuccess: async () => {
      await utils.doacao.getAll.invalidate();
    }
  });

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja deletar este item?")) {
      deleteItem.mutate({ id });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomeDoador || !equipeId || itensQuantificados.length === 0) {
      alert("Preencha o doador, a equipe e selecione ao menos um item.");
      return;
    }

    const payload = {
      nomeDoador,
      equipeId,
      desc,
      itens: itensQuantificados.map(i => ({
        itemId: i.id,
        quantidade: i.quantidade
      }))
    };

    if (isEditing && editingId) {
      updateDoacao.mutate({ id: editingId, ...payload });
    } else {
      createDoacao.mutate(payload);
    }
  };

  // --- FUNÇÕES DE APOIO ---

  const handleEdit = (doacao: any) => {
    setIsEditing(true);
    setEditingId(doacao.id);
    setNomeDoador(doacao.nome);
    setEquipeId(doacao.equipeId);
    setDesc(doacao.desc || "");

    // Conversão do formato Prisma -> View
    const formatadosParaTela = doacao.itensDoadores.map((vinc: any) => ({
      id: vinc.itemId,
      nome: vinc.item.name,
      quantidade: vinc.quantidade
    }));

    setItensQuantificados(formatadosParaTela);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearForm = () => {
    setIsEditing(false);
    setEditingId(null);
    setNomeDoador("");
    setEquipeId("");
    setDesc("");
    setItensQuantificados([]);
  };

  return (
    <main className="min-h-screen w-full flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar activePage="doacoes" />

      <div className="max-w-6xl mx-auto py-10 space-y-10">
        <div className="flex justify-between items-end border-b-4 border-[#ff9324] pb-4">
          <div>
            <h1 className="text-4xl font-black text-[#248ebe]">Registro de Doações</h1>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest mt-1">Gincana Proeidi Conecta</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FORMULÁRIO */}
          <section className="lg:col-span-1">
            <form onSubmit={handleSubmit}>
              <div className={`card bg-white shadow-xl rounded-[2.5rem] border-2 transition-all p-8 sticky top-24 ${isEditing ? 'border-[#248ebe]' : 'border-slate-100'}`}>
                <h2 className="text-xl font-bold text-[#248ebe] mb-6 flex items-center gap-2">
                  <span className={`w-2 h-6 rounded-full ${isEditing ? 'bg-[#248ebe]' : 'bg-[#ff9324]'}`}></span>
                  {isEditing ? "Editar Registro" : "Novo Registro"}
                </h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome do Doador"
                    className="w-full h-14 rounded-2xl bg-slate-100 px-6 outline-none text-slate-800 font-medium placeholder:text-slate-400 shadow-inner focus:border-[#248ebe] border-2 border-transparent transition-all"
                    value={nomeDoador}
                    onChange={(e) => setNomeDoador(e.target.value)}
                  />

                  <select
                    className="w-full h-14 rounded-2xl bg-slate-100 px-6 outline-none text-slate-800 font-medium shadow-inner border-2 border-transparent focus:border-[#248ebe] appearance-none cursor-pointer"
                    value={equipeId}
                    onChange={(e) => setEquipeId(e.target.value)}
                  >
                    <option value="" disabled>Equipe Beneficiada</option>
                    {equipes?.map(eq => <option key={eq.id} value={eq.id}>Equipe {eq.nome}</option>)}
                  </select>

                  <div className="space-y-3 py-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Selecione os Itens:</label>
                    <div className="grid grid-cols-1 gap-3 max-h-72 overflow-y-auto p-1 custom-scrollbar">
                      {itens?.map((item) => {
                        const selecionado = itensQuantificados.find(i => i.id === item.id);
                        return (
                          <div
                            key={item.id}
                            onClick={() => handleToggleItem(item)}
                            className={`flex items-center justify-between p-4 rounded-[1.5rem] border-2 cursor-pointer transition-all active:scale-[0.98] ${selecionado ? 'border-[#248ebe] bg-blue-50 shadow-md' : 'border-slate-100 bg-white hover:border-slate-200'}`}
                          >
                            <span className={`font-bold text-sm ${selecionado ? 'text-[#248ebe]' : 'text-slate-600'}`}>{item.name}</span>

                            {selecionado && (
                              <div className="flex items-center gap-3 bg-white rounded-xl p-1 shadow-sm border border-slate-100">
                                <button
                                  type="button" // IMPORTANTE: NÃO ENVIA O FORM
                                  onClick={(e) => updateQuantidade(e, item.id, -1)}
                                  className="w-8 h-8 flex items-center justify-center font-black text-[#ff9324] hover:bg-orange-50 rounded-lg transition-colors"
                                > - </button>
                                <span className="text-sm font-black text-slate-800 w-4 text-center">{selecionado.quantidade}</span>
                                <button
                                  type="button" // IMPORTANTE: NÃO ENVIA O FORM
                                  onClick={(e) => updateQuantidade(e, item.id, 1)}
                                  className="w-8 h-8 flex items-center justify-center font-black text-[#ff9324] hover:bg-orange-50 rounded-lg transition-colors"
                                > + </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-4">
                    <button
                      type="submit"
                      disabled={createDoacao.isPending || updateDoacao.isPending}
                      className={`w-full h-14 text-white rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all ${isEditing ? 'bg-[#248ebe] shadow-blue-100' : 'bg-[#ff9324] shadow-orange-100'} disabled:opacity-50`}
                    >
                      {isEditing ? "Salvar Alterações" : "Registrar Doação"}
                    </button>

                    {isEditing && (
                      <button
                        type="button"
                        onClick={clearForm}
                        className="text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors py-2"
                      > Cancelar Edição </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </section>

          {/* LISTAGEM REAl */}
          <section className="lg:col-span-2">
            <div className="grid gap-6">
              {isLoading ? (
                <p className="text-center font-bold text-slate-400 py-20">Carregando doações...</p>
              ) : (
                doacoesReal?.map((doacao) => {
                  // CÁLCULO DA PONTUAÇÃO TOTAL DA DOAÇÃO
                  const totalPontosDoacao = doacao.itensDoadores.reduce((acc: number, vinc: any) => {
                    const pontosItem = vinc.item?.pontos ?? 0;
                    return acc + (pontosItem * vinc.quantidade);
                  }, 0);

                  return (
                    <div key={doacao.id} className="card bg-white shadow-md rounded-[2rem] border-l-8 border-[#ff9324] hover:shadow-xl transition-all">
                      <div className="card-body p-8">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-2xl font-bold text-slate-800">{doacao.nome}</h3>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="bg-[#248ebe] text-white px-2 py-0.5 rounded-md text-[10px] font-bold uppercase">Equipe {doacao.equipe.name}</span>
                              <span className="text-slate-400 text-[10px] font-black uppercase tracking-tighter">
                                {new Date(doacao.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          {/* EXIBIÇÃO DA PONTUAÇÃO TOTAL NO CARD */}
                          <div className="text-right">
                            <span className="block text-2xl font-black text-[#ff9324] leading-none">{totalPontosDoacao}</span>
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">pontos</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-6">
                          {doacao.itensDoadores.map((vinc: any, idx: number) => (
                            <span key={idx} className="bg-blue-50 text-[#248ebe] px-4 py-1.5 rounded-full text-[11px] font-black border border-blue-100">
                              <span className="text-[#ff9324]">{vinc.quantidade}x</span> {vinc.item.name}
                            </span>
                          ))}
                        </div>

                        <div className="flex justify-end gap-6 mt-6 pt-4 border-t border-slate-50">
                          <button
                            type="button"
                            onClick={() => handleEdit(doacao)}
                            className="text-[#248ebe] font-black text-xs uppercase tracking-widest hover:text-[#ff9324] transition-colors"
                          > Editar </button>
                          <button
                            type="button"
                            onClick={() => handleDelete(doacao.id)}
                            className="text-red-400 font-black text-xs uppercase tracking-widest hover:text-red-600 transition-colors"
                          > Remover </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}