"use client";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function SobrePage() {
    const el = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        let typed: Typed | null = null;
        if (el.current) {
            typed = new Typed(el.current, {
                strings: ['Equipes', 'Doações', 'Provas', 'Pontuações', 'Sanidade Mental'],
                typeSpeed: 100,
                backSpeed: 100,
                loop: true,
            });
        }

        const initScrollReveal = async () => {
            try {
                const srModule = await import('scrollreveal');
                const ScrollReveal = srModule.default;
                ScrollReveal().reveal('.reveal', {
                    delay: 300,
                    distance: '30px',
                    origin: 'bottom',
                    interval: 200,
                    cleanup: true 
                });
            } catch (error) {
                console.error("Erro ao carregar ScrollReveal:", error);
            }
        };
        initScrollReveal();

        return () => {
            if (typed) typed.destroy();
        };
    }, []);

    return (
        <main className="w-full min-h-screen bg-slate-50 flex flex-col">
            
            <section id="sobre" className="w-full py-24 px-6 md:px-12 bg-white border-b border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-16 items-center reveal">
                        <div className="md:w-3/5 text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-[#248ebe] mb-8 leading-tight">
                                Gerencie <span className="text-[#ff9324]" ref={el}></span> <br />
                                do Proeidi Conecta
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                O Conecta-view nasceu da necessidade de modernizar o fluxo de dados da gincana, doações e pontuações do ProEIDI Conecta.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                A missão é garantir que cada ponto, cada doação e cada esforço das equipes seja
                                registrado com transparência e agilidade (isso, claro, sem que ninguém sem autorização veja).
                            </p>
                        </div>
                        
                        <div className="md:w-2/5 w-full">
                            <div className="bg-[#e9f3fb] p-10 rounded-[2.5rem] border-2 border-dashed border-[#248ebe]/30 shadow-inner">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-3 h-3 rounded-full bg-[#ff9324]"></div>
                                    <h3 className="text-[#248ebe] font-bold text-2xl">O Framework</h3>
                                </div>
                                <p className="text-slate-700 text-base leading-relaxed">
                                    O projeto utiliza o <strong className="text-[#248ebe]">T3 Stack</strong>, um framework focado em
                                    <em className="italic"> type-safety</em> total e produtividade.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-24 px-6 md:px-12 bg-slate-50">
                <div className="max-w-7xl mx-auto reveal">
                    <div className="text-center mb-16">
                        <span className="text-[#ff9324] font-bold tracking-widest uppercase text-sm">Tecnologias Escolhidas</span>
                        <h3 className="text-4xl font-black text-slate-900 mt-2">Stack Tecnológica</h3>
                        <div className="h-1.5 w-24 bg-[#ff9324] mx-auto mt-4 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Next.js 15', desc: 'Framework React para performance.', icon: 'N' },
                            { title: 'TypeScript', desc: 'Desenvolvimento seguro com tipagem.', icon: 'TS' },
                            { title: 'Prisma ORM', desc: 'Gerenciamento de banco de dados.', icon: 'P' },
                            { title: 'Muita Cafeína', desc: 'Só isso pra me manter acordado.', icon: '☕' }
                        ].map((tech, i) => (
                            <div key={i} className="group bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:border-[#ff9324] hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center">
                                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <span className="text-[#248ebe] font-bold text-xl">{tech.icon}</span>
                                </div>
                                <h4 className="font-bold text-[#248ebe] text-xl group-hover:text-[#ff9324] transition-colors mb-3">{tech.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}