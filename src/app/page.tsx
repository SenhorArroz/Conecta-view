"use client";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
// Importação robusta para Anime.js no ecossistema Next.js
import * as anime from 'animejs';

const LandingPage = () => {
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // 1. Typed.js - Efeito de digitação no Hero
    const typed = new Typed(el.current, {
      strings: ['Equipes', 'Doações', 'Provas', 'Pontuações'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    // 2. ScrollReveal - Import dinâmico para evitar erro de SSR (Server Side Rendering)
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

    // 3. Anime.js - Corrigido: Usando a referência direta e tratando o objeto
    const animeInstance = (anime as any).default || anime;
    
    if (typeof animeInstance === 'function') {
      animeInstance({
        targets: '.logo-float',
        translateY: [-5, 5],
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        duration: 2000
      });
    }

    // Cleanup para evitar vazamento de memória e duplicidade de instâncias
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="navbar bg-white shadow-md px-4 md:px-12 sticky top-0 z-50 border-b border-gray-100">
        <div className="flex-1">
          <img 
            src="/logoProeidi.png" 
            alt="Proeidi Logo" 
            className="h-20 logo-float"
          />
        </div>
        <div className="flex">
          <ul className="menu menu-horizontal px-1 font-bold text-slate-700 hidden md:flex">
            <li><a href="/sobre" className="hover:text-[#ff9324] transition-colors">Sobre</a></li>
          </ul>
          <a href='/login' className="btn bg-[#248ebe] hover:bg-[#1a6fb3] ml-4 text-white border-none shadow-md transition-all">
            Acessar Sistema
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero min-h-[75vh] bg-[#248ebe] text-white">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Organize <span className="text-[#ff9324]" ref={el}></span> <br />
              do Proeidi Conecta
            </h1>
            <p className="py-6 text-lg opacity-95 font-medium max-w-lg mx-auto">
              A plataforma definitiva para gerenciar gincanas de forma rápida e intuitiva, 
              centralizando doações e resultados em tempo real.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              <button className="btn bg-[#ff9324] hover:bg-[#e07d1d] btn-lg shadow-2xl text-white border-none px-10 transition-all active:scale-95">
                Começar Agora
              </button>
              <button className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-[#248ebe] px-10 transition-all">
                Ver Ranking
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl font-bold mb-4 text-slate-800">Meio rápido e fácil</h2>
          <div className="h-1.5 w-20 bg-[#ff9324] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-500 text-lg">Tudo o que você precisa para uma gincana organizada e digital.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card Equipes */}
          <article className="card bg-white shadow-xl reveal border-t-4 border-[#ff9324] hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 bg-[#fff4e6] rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">👥</div>
              <h2 className="card-title text-[#248ebe] text-2xl font-bold">Equipes</h2>
              <p className="text-slate-600">Cadastre participantes e visualize a composição das equipes em segundos.</p>
            </div>
          </article>

          {/* Card Doações */}
          <article className="card bg-white shadow-xl reveal border-t-4 border-[#248ebe] hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 bg-[#e9f3fb] rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">🎁</div>
              <h2 className="card-title text-[#248ebe] text-2xl font-bold">Doações</h2>
              <p className="text-slate-600">Controle de arrecadação com dashboard intuitivo para cada item coletado.</p>
            </div>
          </article>

          {/* Card Pontuação */}
          <article className="card bg-white shadow-xl reveal border-t-4 border-[#ff9324] hover:shadow-2xl transition-all duration-300">
            <div className="card-body items-center text-center p-8">
              <div className="w-16 h-16 bg-[#fff4e6] rounded-full flex items-center justify-center text-3xl mb-4 shadow-inner">🏆</div>
              <h2 className="card-title text-[#248ebe] text-2xl font-bold">Pontuação</h2>
              <p className="text-slate-600">Lançamento de notas facilitado para juízes e atualização automática do ranking.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-center p-12 bg-[#248ebe] text-white">
        <aside>
          <p className="font-bold text-2xl tracking-tight">
            PROEIDI <span className="text-[#ff9324]">CONECTA</span>
          </p> 
          <p className="opacity-70 text-base max-w-md">Transformando a gincana do Metrópole Digital através da tecnologia.</p>
          <p className="opacity-40 text-xs mt-4">Made by: Luiz Guimarães</p>
        </aside>
      </footer>
    </div>
  );
};

export default LandingPage;