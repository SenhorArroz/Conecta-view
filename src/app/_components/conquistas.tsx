import React from 'react';

export function ConquistasPanel({ doacoes }: { doacoes: any[] | undefined }) {
  if (!doacoes) return null;

  const totalDoacoes = doacoes.length;
  let totalPontos = 0;
  let totalItensDoados = 0;
  const tiposUnicos = new Set<string>();

  doacoes.forEach(d => {
    d.itensDoadores.forEach((v: any) => {
      totalPontos += (v.item?.pontos ?? 0) * v.quantidade;
      totalItensDoados += v.quantidade;
      tiposUnicos.add(v.itemId);
    });
  });

  const totalTipos = tiposUnicos.size;

  const conquistas = [
    {
      id: "primeiro_passo",
      nome: "Primeiro Passo",
      desc: "Registre a primeira doação do sistema",
      icone: "🎯",
      alcançado: totalDoacoes >= 1,
      progresso: Math.min(totalDoacoes, 1),
      meta: 1,
    },
    {
      id: "maquina_doacoes",
      nome: "Máquina de Doações",
      desc: "Alcance 10 doações registradas",
      icone: "🚀",
      alcançado: totalDoacoes >= 10,
      progresso: Math.min(totalDoacoes, 10),
      meta: 10,
    },
    {
      id: "multiplicador_bem",
      nome: "Multiplicador do Bem",
      desc: "Doe 50 itens individuais no total",
      icone: "📦",
      alcançado: totalItensDoados >= 50,
      progresso: Math.min(totalItensDoados, 50),
      meta: 50,
    },
    {
      id: "variedade_solidaria",
      nome: "Variedade Solidária",
      desc: "Doe 10 tipos diferentes de itens",
      icone: "🌈",
      alcançado: totalTipos >= 10,
      progresso: Math.min(totalTipos, 10),
      meta: 10,
    },
    {
      id: "impacto_milionario",
      nome: "Impacto Milionário",
      desc: "Gere 10.000 pontos em doações",
      icone: "💎",
      alcançado: totalPontos >= 10000,
      progresso: Math.min(totalPontos, 10000),
      meta: 10000,
    }
  ];

  const conquistasDesbloqueadas = conquistas.filter(c => c.alcançado).length;

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden mb-6">
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl shadow-inner">🏆</div>
          <div>
            <h3 className="text-sm font-black text-white uppercase tracking-widest">Mural de Conquistas</h3>
            <p className="text-[10px] text-white/70 font-semibold uppercase tracking-widest mt-0.5">Desafios da Gincana</p>
          </div>
        </div>
        <div className="bg-black/20 px-4 py-1.5 rounded-full text-xs font-black text-white border border-white/10 shadow-inner">
          {conquistasDesbloqueadas} / 5
        </div>
      </div>
      <div className="p-5 grid grid-cols-1 gap-3">
        {conquistas.map(c => {
          const isUnlocked = c.alcançado;
          const pct = Math.round((c.progresso / c.meta) * 100);
          
          return (
            <div key={c.id} className={`p-4 rounded-[1.25rem] border-2 transition-all ${isUnlocked ? "border-indigo-100 bg-indigo-50/40 hover:bg-indigo-50/80 hover:border-indigo-200" : "border-slate-50 bg-slate-50/50 grayscale-[0.8] opacity-60"}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm ${isUnlocked ? "bg-white" : "bg-slate-200"}`}>
                  {c.icone}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={`font-black text-sm truncate ${isUnlocked ? "text-indigo-900" : "text-slate-600"}`}>{c.nome}</h4>
                  <p className="text-[10px] font-bold text-slate-500 mt-0.5 leading-tight truncate">{c.desc}</p>
                  
                  <div className="mt-2.5 flex items-center gap-2.5">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden shadow-inner">
                      <div className={`h-full rounded-full transition-all duration-1000 ${isUnlocked ? "bg-gradient-to-r from-indigo-400 to-purple-500" : "bg-slate-400"}`} style={{ width: `${pct}%` }} />
                    </div>
                    <span className={`text-[10px] font-black w-8 text-right ${isUnlocked ? "text-indigo-600" : "text-slate-400"}`}>{pct}%</span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
