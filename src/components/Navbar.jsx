import React from 'react';
import { Menu, Grid } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-xl bg-bg/50 border-b border-white/5">

            <div className="flex items-center gap-3">
                <div>
                    <img src="/favi.png" alt="Logo" className="w-8 h-8" />
                    {/* <Grid size={20} /> */}
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-lg leading-none tracking-wide text-white">ASSOCIATES</span>
                    <span className="font-bold text-sm leading-none tracking-widest text-cyan/80">GROUPS</span>
                </div>
            </div>

            <div className="hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest text-gray-400">
                <a href="#" className="hover:text-cyan transition-colors uppercase">Tech Hub</a>
                <a href="#" className="hover:text-mint transition-colors uppercase">Audit Lab</a>
                <a href="#" className="hover:text-cyan transition-colors uppercase">Legal Portal</a>
            </div>

            <div className="flex items-center gap-4">
                <a
                   href="mailto:info@associatesgroups.in?subject=Inquiry from Website Hub"
                    className="hidden md:block px-6 py-2.5 bg-cyan text-bg font-bold text-sm tracking-wide rounded-full hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:scale-105 transition-all duration-300 text-center"
                >
                    CONNECT
                </a>
                <button className="md:hidden p-2 text-white/70 hover:text-white">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
