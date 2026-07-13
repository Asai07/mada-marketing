"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2, ShieldCheck } from "lucide-react";
import { login } from "./actions";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const res = await login(password);

    if (res?.error) {
      setError(res.error);
      setIsLoading(false);
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans selection:bg-lime-400 selection:text-black">
      
      {/* Luces Ambientales (Neon Glows) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-lime-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
          
          {/* Subtle top highlight */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-lime-400/50 to-transparent" />

          <div className="text-center mb-12">
            <div className="relative inline-block mb-8">
               <div className="absolute inset-0 bg-lime-400 blur-xl opacity-20 rounded-full" />
               <div className="w-16 h-16 bg-black border border-lime-400/30 rounded-full flex items-center justify-center text-lime-400 font-display font-bold text-3xl relative z-10 shadow-[0_0_30px_rgba(198,248,57,0.15)]">
                 M
               </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mb-3">
              Área Privada<span className="text-lime-400">.</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-zinc-500 text-[10px] tracking-widest uppercase font-bold">
              <ShieldCheck size={14} className="text-lime-400" />
              Acceso Restringido
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa la contraseña"
                required
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-center text-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-lime-400 focus:bg-lime-400/5 transition-all duration-300 tracking-[0.2em] font-mono shadow-inner"
              />
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs text-center font-bold tracking-widest uppercase bg-red-400/10 border border-red-400/20 py-3 rounded-xl"
              >
                {error}
              </motion.p>
            )}

            <div className="pt-4 flex justify-center">
              <button
                type="submit"
                disabled={isLoading || !password}
                className="group relative flex items-center justify-center w-full py-5 rounded-2xl bg-lime-400 text-black font-bold uppercase tracking-widest text-sm hover:bg-lime-300 transition-all duration-500 active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 disabled:hover:bg-lime-400 overflow-hidden"
              >
                {/* Botón Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <span className="flex items-center gap-3 relative z-10">
                    Desbloquear Panel <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
