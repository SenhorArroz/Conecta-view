"use client";
import { useSession } from 'next-auth/react';
import { useState } from "react";
import { api } from '~/trpc/react';

export default function ItensPage() {
  const { data: session } = useSession();
  const utils = api.useUtils();
  const [name, setName] = useState("");
  const [pontos, setPontos] = useState("");
  const [desc, setDesc] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItem, setSelectedItem] = useState<null | { id: string; name: string; pontos: number; desc?: string }>(null);
  const { data: itens } = api.item.getAll.useQuery();

  const itensMock = [
    { id: "1", name: "Cesta Básica", pontos: 50, desc: "Doação padrão de alimentos não perecíveis." },
  ];

  const handleEditPreview = (item: typeof itensMock[0]) => {
    setName(item.name);
    setPontos(item.pontos.toString());
    setDesc(item.desc);
    setIsEditing(true);
    setSelectedItem(item);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const createItem = api.item.create.useMutation({
     onSuccess: async() => {
      setName("");
      setPontos("");
      setDesc("");
      await utils.item.getAll.invalidate();
    }
  });
  const updateItem = api.item.update.useMutation({
     onSuccess: async() => {
      setName("");
      setPontos("");
      setDesc("");
      setIsEditing(false);
      await utils.item.getAll.invalidate();
    }
  });

  const deleteItem = api.item.delete.useMutation({
    onSuccess: async() =>{
      await utils.item.getAll.invalidate();
    }
  });

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja deletar este item?")) {
      deleteItem.mutate({ id });
    }
  }; 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      updateItem.mutate({ id: selectedItem?.id as string, name, desc, pontos: Number(pontos) });
    } else {
      createItem.mutate({ name, desc, pontos: Number(pontos) });
    }
  };

  return (
    <main className="min-h-screen w-full bg-slate-50  text-slate-900 font-sans">
      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#248ebe] p-1.5 rounded-xl hover:scale-110 hover:bg-white transition-all duration-500">
            <img src="/logoProeidi.png" alt="Logo" className="h-10 brightness-0 invert hover:brightness-100 hover:invert-0 transition-transform duration-500" />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden lg:flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
            <div className='group relative pb-1'>
              <a href="/dashboard" className="group-hover:text-[#248ebe] transition-colors duration-300">Dashboard</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff9324] transition-all duration-300 group-hover:w-full"></span>
            </div>

            <a className="text-[#ff9324] border-b-2 border-[#ff9324] pb-1 cursor-pointer">Itens</a>
            <div className='group relative pb-1'>
              <a href='/doacoes' className="hover:text-[#248ebe] transition-all">Doações</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff9324] transition-all duration-300 group-hover:w-full"></span>
            </div>
            <div className='group relative pb-1'>
              <a href='/provas' className="hover:text-[#248ebe] transition-all">Provas</a>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff9324] transition-all duration-300 group-hover:w-full"></span>
            </div>
          </nav>

          <div className="flex items-center gap-3 bg-slate-50 pl-4 pr-1 py-1 rounded-full border border-slate-100">
            <span className="text-xs font-bold text-slate-500">
              {session?.user?.name ?? "Visitante"}
            </span>
            <div className="h-8 w-8 rounded-full bg-[#248ebe] flex items-center justify-center text-white text-xs font-bold shadow-md uppercase">
              {session?.user?.name?.[0] ?? "V"}
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-6xl mx-auto space-y-10">

        {/* Cabeçalho */}
        <div className="flex justify-between items-end py-10 border-b-4 border-[#ff9324] pb-4">
          <div>
            <h1 className="text-4xl font-black text-[#248ebe]">Itens para doação</h1>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">
              Adição de itens que os doadores podem escolher para doar. 
              (Cada item tem uma pontuação pré-definida)
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulário lateral adaptável para Criar/Update */}
          <form action="" onSubmit={handleSubmit}>
          <section className="lg:col-span-1">
            <div className={`card bg-white shadow-xl rounded-[2.5rem] border-2 transition-all duration-300 p-8 sticky top-24 ${isEditing ? 'border-[#248ebe]' : 'border-slate-100'}`}>
              <h2 className="text-xl font-bold text-[#248ebe] mb-6 flex items-center gap-2">
                <span className={`w-2 h-6 rounded-full transition-colors ${isEditing ? 'bg-[#248ebe]' : 'bg-[#ff9324]'}`}></span>
                {isEditing ? "Editar Item" : "Novo Item"}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nome do Item"
                  className="w-full h-14 rounded-2xl bg-slate-100 px-6 outline-none border-2 border-transparent focus:border-[#248ebe] text-slate-800 font-medium placeholder:text-slate-400 shadow-inner"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Pontuação"
                  className="w-full h-14 rounded-2xl bg-slate-100 px-6 outline-none border-2 border-transparent focus:border-[#248ebe] text-slate-800 font-medium placeholder:text-slate-400 shadow-inner"
                  value={pontos}
                  onChange={(e) => setPontos(e.target.value)}
                />

                <textarea
                  placeholder="Descrição do item..."
                  className="w-full h-32 rounded-2xl bg-slate-100 p-6 outline-none border-2 border-transparent focus:border-[#248ebe] text-slate-800 font-medium placeholder:text-slate-400 shadow-inner resize-none"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />

                <div className="flex flex-col gap-2">
                  <button
                    className={`w-full h-14 text-white rounded-2xl font-bold text-lg shadow-lg transition-all active:scale-95 ${isEditing ? 'bg-[#248ebe] shadow-blue-100 hover:bg-[#1d76a1]' : 'bg-[#ff9324] shadow-orange-100 hover:bg-[#e07d1d]'}`}
                  >
                    {isEditing ? "Atualizar Dados" : "Salvar Item"}
                  </button>

                  {isEditing && (
                    <button
                      onClick={() => { setIsEditing(false); setName(""); setPontos(""); setDesc(""); }}
                      className="text-slate-400 font-bold text-sm hover:text-slate-600 transition-colors py-2"
                    >
                      Cancelar Edição
                    </button>
                  )}
                </div>
              </div>
            </div>
          </section>
          </form>

          {/* Listagem com botão de Update */}
          <section className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {itens?.map((item) => (
                <div key={item.id} className="card bg-white shadow-md rounded-3xl border-l-8 border-[#248ebe] hover:shadow-xl transition-all group overflow-hidden">
                  <div className="card-body p-6">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-slate-800">{item.name}</h3>
                      <span className="bg-[#fff4e6] text-[#ff9324] font-black px-3 py-1 rounded-lg text-sm">
                        +{item.pontos} pts
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="flex justify-end gap-4 mt-6 pt-4 border-t border-slate-50">
                      {/* Botão de Update Visual */}
                      <button
                        onClick={() => handleEditPreview(item as { id: string; name: string; pontos: number; desc: string })}
                        className="flex items-center gap-1 text-[#248ebe] hover:text-[#ff9324] font-bold text-xs uppercase tracking-widest transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Editar
                      </button>

                      <button onClick={() => handleDelete(item.id)} className="flex items-center gap-1 text-red-400 hover:text-red-600 font-bold text-xs uppercase tracking-widest transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}