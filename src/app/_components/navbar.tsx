"use client";

import { useSession } from 'next-auth/react';
import { useState } from "react";

// Adicionamos a prop activePage para receber o nome da página ativa
export default function Navbar({ activePage }: { activePage?: string }) {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    // Função auxiliar para definir as classes do desktop
    const getDesktopClasses = (pageName: string) => {
        return activePage === pageName
            ? "text-[#ff9324] border-b-2 border-[#ff9324] pb-1 cursor-pointer"
            : "group-hover:text-[#248ebe] transition-colors duration-300";
    };

    // Função auxiliar para definir as classes do mobile
    const getMobileClasses = (pageName: string) => {
        return activePage === pageName
            ? "text-[#ff9324] border-l-4 border-[#ff9324] pl-4 py-2 cursor-pointer bg-slate-50"
            : "hover:text-[#248ebe] pl-4 transition-colors";
    };

    return (
        <>
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-4 md:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <button
                        className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                        onClick={() => setIsOpen(true)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>

                    <div className="bg-[#248ebe] p-1.5 rounded-xl hover:scale-110 hover:bg-white transition-all duration-500">
                        <img src="/logoProeidi.png" alt="Logo" className="h-10 brightness-0 invert hover:brightness-100 hover:invert-0 transition-transform duration-500" />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <nav className="hidden lg:flex gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        {/* Verificação dinâmica para cada item no Desktop */}
                        <div className='group relative pb-1'>
                            <a href="/dashboard" className={getDesktopClasses('dashboard')}>Dashboard</a>
                            {activePage !== 'dashboard' && <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff9324] transition-all duration-300 group-hover:w-full"></span>}
                        </div>

                        <div className='group relative pb-1'>
                            <a href='/itens' className={getDesktopClasses('itens')}>Itens</a>
                            {activePage !== 'itens' && <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff9324] transition-all duration-300 group-hover:w-full"></span>}
                        </div>

                        <div className='group relative pb-1'>
                            <a href='/doacoes' className={getDesktopClasses('doacoes')}>Doações</a>
                            {activePage !== 'doacoes' && <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff9324] transition-all duration-300 group-hover:w-full"></span>}
                        </div>

                        <div className='group relative pb-1'>
                            <a href='/provas' className={getDesktopClasses('provas')}>Provas</a>
                            {activePage !== 'provas' && <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#ff9324] transition-all duration-300 group-hover:w-full"></span>}
                        </div>
                    </nav>

                    <div className="flex items-center gap-3 bg-slate-50 pl-4 pr-1 py-1 rounded-full border border-slate-100">
                        <span className="hidden sm:inline text-xs font-bold text-slate-500">
                            {session?.user?.name ?? "Visitante"}
                        </span>
                        <div className="h-8 w-8 rounded-full bg-[#248ebe] flex items-center justify-center text-white text-xs font-bold shadow-md uppercase">
                            {session?.user?.name?.[0] ?? "V"}
                        </div>
                    </div>
                </div>
            </header>

            <div className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

                <div className={`absolute top-0 left-0 bottom-0 w-72 bg-white shadow-2xl p-6 flex flex-col gap-8 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-[#248ebe] uppercase tracking-widest">Navegação</span>
                        <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col gap-6 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                        {/* Verificação dinâmica para cada item no Mobile */}
                        <a href="/dashboard" className={getMobileClasses('dashboard')}>Dashboard</a>
                        <a href='/itens' className={getMobileClasses('itens')}>Itens</a>
                        <a href='/doacoes' className={getMobileClasses('doacoes')}>Doações</a>
                        <a href='/provas' className={getMobileClasses('provas')}>Provas</a>
                    </nav>
                </div>
            </div>
        </>
    );
}