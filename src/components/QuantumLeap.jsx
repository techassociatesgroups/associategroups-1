import React from 'react';
import { motion } from 'framer-motion';

const QuantumLeap = () => {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-[#0A2025] to-[#05070A] border border-white/5 p-12 md:p-24 text-center transform-gpu"
            >
                {/* Background Glow Effects - Optimized */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-cyan/5 blur-[80px] rounded-full translate-z-0" />
                    <div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-mint/5 blur-[80px] rounded-full translate-z-0" />
                </div>

                <div className="relative z-10 space-y-8 flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter leading-tight uppercase">
                        Ready for the <br />
                        <span className="bg-gradient-to-r from-cyan to-mint bg-clip-text text-transparent">
                            Quantum Leap?
                        </span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                        Symphonizing your digital and financial infrastructure for global dominance.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 pt-6">
                        <button className="px-10 py-4 bg-cyan text-bg font-bold text-sm tracking-widest rounded-full shadow-[0_0_40px_rgba(0,242,255,0.4)] hover:shadow-[0_0_60px_rgba(0,242,255,0.6)] hover:scale-105 transition-all duration-300">
                            CONSULT NOW
                        </button>
                        <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest rounded-full hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 backdrop-blur-md">
                            AUDIT ECOSYSTEM
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default QuantumLeap;
