"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "~/trpc/react"; // Importação correta para Client Components

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "error" | "success">("idle");
    const router = useRouter();

    // Hook do tRPC para mutação
    const createUser = api.auth.createUser.useMutation({
        onSuccess: () => {
            setStatus("success");
            setTimeout(() => router.push("/login"), 2000);
        },
        onError: () => {
            setStatus("error");
        },
    });

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        
        // Chama a mutação definida no seu router auth.ts
        createUser.mutate({ email, password });
    };

    return (
        <div className="h-screen w-full bg-slate-50 flex items-center justify-center p-4">
            <div className="card w-full max-w-md bg-white shadow-xl rounded-[2.5rem] p-10 border border-slate-100">
                <div className="flex flex-col items-center gap-6">
                    <h1 className="text-3xl font-black text-[#248ebe]">Novo Usuário</h1>

                    <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="input input-bordered w-full h-14 rounded-2xl bg-slate-50 px-6 focus:border-[#248ebe] focus:outline-none text-slate-800"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="password"
                            placeholder="Senha"
                            className="input input-bordered w-full h-14 rounded-2xl bg-slate-50 px-6 focus:border-[#248ebe] focus:outline-none text-slate-800"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className={`btn h-14 border-none bg-[#ff9324] hover:bg-[#e07d1d] text-white rounded-2xl font-bold text-lg transition-all ${status === "loading" ? 'loading' : ''}`}
                        >
                            {status === "success" ? "Criado com Sucesso!" : "Criar Usuário"}
                        </button>

                        {status === "error" && (
                            <p className="text-red-500 text-center text-sm font-bold animate-pulse">
                                Erro ao criar conta. Tente outro e-mail.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}