"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("E-mail ou senha inválidos.");
      } else {
        router.push("/dashboard");
      }
    } catch {
      setError("Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-50 p-4">
      <div className="card w-full max-w-md bg-white shadow-2xl rounded-[2.5rem] border border-slate-100">
        <div className="card-body p-8 md:p-12">
          
          <div className="mb-10 text-center">
            <img 
              src="/logoProeidi.png" 
              alt="Proeidi Logo" 
              className="mx-auto mb-4 h-16 w-auto"
            />
            <a className="text-3xl font-black text-[#248ebe] hover:text-[#e98420] transition-colors" href="/">
              Conecta
            </a>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
              Login de Acesso
            </p>
          </div>

          <form onSubmit={handleSubmit} className="text-center space-y-4">
            <div className="form-control w-full">
              <input
                type="email"
                placeholder="E-mail"
                className="input text-[#248ebe] input-bordered w-full h-14 border-[#248ebe] transition-colors duration-300 hover:border-transparent focus:border-[#e98420] focus:outline-none rounded-2xl bg-slate-50 px-6 font-medium placeholder:text-slate-400 placeholder:font-bold"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control w-full">
              <input
                type="password"
                placeholder="Senha"
                className="input input-bordered text-[#248ebe] w-full h-14 border-[#248ebe] transition-colors duration-300 hover:border-transparent focus:border-[#e98420] focus:outline-none rounded-2xl bg-slate-50 px-6 font-medium placeholder:text-slate-400 placeholder:font-bold"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && (
              <div className="border-1 h-10 rounded-full text-sm font-bold bg-red-500/10 text-red-500 text-center pt-2 hover:border-[#e98420] transition-colors duration-300 hover:bg-[#248ebe]/1 hover:text-[#e98420]">
                {error}
              </div>
            )}

            <div className="form-control mt-6">
              <button 
                type="submit" 
                className={`btn h-14 border-none bg-[#248ebe] text-white hover:bg-[#e98420] rounded-2xl text-lg font-bold shadow-lg shadow-orange-100 transition-all  active:scale-95 ${loading ? 'loading' : ''} `}
                disabled={loading}
              >
                {loading ? "" : "Entrar"}
              </button>
            </div>
          </form>

        </div>
      </div>
    </main>
  );
}