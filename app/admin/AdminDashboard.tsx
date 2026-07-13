"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, RefreshCw, Mail, Phone, Calendar, Clock, Sparkles, Trash2 } from "lucide-react";
import { getContacts, logout, updateContactStatus, deleteContact } from "./actions";

type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  plan: string | null;
  createdAt: Date;
  status: string;
};

const STATUS_OPTIONS = ["Nuevo", "Contactado", "Cerrado", "Descartado"];

export default function AdminDashboard() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Nuevo");

  const fetchContacts = async () => {
    setIsLoading(true);
    const res = await getContacts();
    if (res.success && res.contacts) {
      setContacts(res.contacts as Contact[]);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: newStatus } : c))
    );
    await updateContactStatus(id, newStatus);
  };

  const handleDelete = async (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este prospecto permanentemente?")) {
      setContacts((prev) => prev.filter((c) => c.id !== id));
      await deleteContact(id);
    }
  };

  const filteredContacts = contacts.filter((c) => c.status === activeTab);

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-300 font-sans selection:bg-lime-400 selection:text-black overflow-hidden relative">
      
      {/* Luces Ambientales (Neon Glows) */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-lime-400/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Navbar Premium */}
      <nav className="w-full px-6 py-6 md:px-12 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/[0.02] sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="relative group cursor-pointer">
             <div className="absolute inset-0 bg-lime-400 blur-md opacity-20 group-hover:opacity-60 transition-opacity duration-500 rounded-full" />
             <div className="relative w-10 h-10 bg-black border border-lime-400/30 rounded-full flex items-center justify-center text-lime-400 font-display font-bold text-xl group-hover:scale-105 transition-transform duration-500">
               M
             </div>
          </div>
          <div className="flex flex-col">
             <span className="text-xs tracking-[0.3em] font-bold uppercase text-white font-display">
               Dashboard
             </span>
             <span className="text-[9px] tracking-widest text-lime-400/70 uppercase">
               Mada Marketing
             </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchContacts}
            disabled={isLoading}
            className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-lime-400 hover:border-lime-400 hover:text-black transition-all duration-300 group"
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-700"}`} />
          </button>
          <button
            onClick={handleLogout}
            className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 hover:text-white transition-all duration-300"
          >
            <LogOut className="w-4 h-4 ml-0.5" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pt-16 pb-32 relative z-10">
        
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter text-white mb-6">
              Nuevos <br/><span className="text-lime-400 italic font-light">Leads.</span>
            </h1>
            <div className="flex items-center gap-4 text-sm font-medium tracking-widest uppercase text-zinc-500">
              <Sparkles className="text-lime-400 w-4 h-4" />
              <span>{contacts.length} Prospectos en total</span>
            </div>
          </motion.div>
        </header>

        {/* Tabs */}
        <div className="mb-10 overflow-x-auto pb-6 pt-4 px-4 -mx-4 scrollbar-hide">
          <div className="flex items-center gap-3 min-w-max">
            {STATUS_OPTIONS.map((status) => {
              const isActive = activeTab === status;
              const count = contacts.filter((c) => c.status === status).length;
              return (
                <button
                  key={status}
                  onClick={() => setActiveTab(status)}
                  className={`
                    relative px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500
                    ${isActive 
                      ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.15)] scale-105' 
                      : 'bg-white/5 text-zinc-500 border border-white/5 hover:bg-white/10 hover:text-white'}
                  `}
                >
                  {status} 
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-[9px] ${isActive ? 'bg-black/10' : 'bg-white/10'}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lista de Contactos (Filtrada) */}
        <div className="grid grid-cols-1 gap-6">
          <AnimatePresence mode="popLayout">
            {isLoading && contacts.length === 0 ? (
              <div className="py-32 flex justify-center">
                <div className="w-12 h-12 border-2 border-lime-400/20 border-t-lime-400 rounded-full animate-spin" />
              </div>
            ) : filteredContacts.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="py-32 text-center text-zinc-500 font-light tracking-widest uppercase text-sm"
              >
                No hay prospectos en esta sección.
              </motion.div>
            ) : (
              filteredContacts.map((contact, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  key={contact.id}
                  className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-[2rem] p-6 md:p-8 hover:bg-white/[0.04] hover:border-lime-400/30 transition-all duration-500 overflow-hidden"
                >
                  {/* Neon Glow al hacer hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/10 to-lime-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -translate-x-full group-hover:translate-x-full ease-out" />
                  
                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                    
                    {/* Info Principal */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-black font-bold bg-lime-400 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(198,248,57,0.4)]">
                          {contact.service}
                        </span>
                        {contact.plan && (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-white font-bold bg-white/10 px-3 py-1 rounded-full border border-white/20">
                            {contact.plan}
                          </span>
                        )}
                        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-500 ml-auto lg:ml-4">
                          <Calendar size={12} />
                          {new Date(contact.createdAt).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })}
                          <span className="mx-1">•</span>
                          <Clock size={12} />
                          {new Date(contact.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>

                      <h3 className="text-3xl md:text-5xl font-display font-semibold text-white mb-6 group-hover:text-lime-400 transition-colors duration-500">
                        {contact.name}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-zinc-400">
                        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 bg-black/50 px-4 py-2.5 rounded-xl border border-white/5 hover:border-lime-400/50 hover:text-white transition-all">
                          <Mail size={16} className="text-lime-400" /> {contact.email}
                        </a>
                        <a href={`https://wa.me/${contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-black/50 px-4 py-2.5 rounded-xl border border-white/5 hover:border-lime-400/50 hover:text-white transition-all">
                          <Phone size={16} className="text-lime-400" /> {contact.phone}
                        </a>
                      </div>
                    </div>

                    {/* Acciones */}
                    <div className="lg:w-auto mt-6 lg:mt-0 flex flex-col items-start lg:items-end gap-3">
                      <span className="text-[10px] font-medium tracking-widest uppercase text-zinc-500 ml-2">
                        Mover prospecto a:
                      </span>
                      <div className="flex flex-wrap lg:flex-col gap-2">
                        {STATUS_OPTIONS.filter(s => s !== contact.status).map((status) => (
                          <button
                            key={status}
                            onClick={() => handleStatusChange(contact.id, status)}
                            className="px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-white/5 text-zinc-400 border border-white/5 hover:bg-lime-400 hover:text-black hover:scale-105 transition-all duration-300"
                          >
                            {status}
                          </button>
                        ))}
                      </div>

                      {contact.status === "Descartado" && (
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="mt-4 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                          <Trash2 size={14} /> Eliminar Permanentemente
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
