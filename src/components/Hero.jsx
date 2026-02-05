import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Boxes, ShieldCheck, FileText, Cpu, Briefcase } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col justify-center relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Column: Text Content */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan/20 bg-cyan/5 text-cyan text-xs font-bold tracking-widest uppercase backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
                        </span>
                        360° Business Ecosystem
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold leading-[1.1]"
                    >
                        Powering the <br />
                        <span className="bg-gradient-to-r from-[#00F2FF] to-[#20E39B] bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                            Future of Business
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                    >
                        Connecting cutting-edge tech, precision audit, and seamless enterprise registration services in a unified digital architecture.
                    </motion.p>
                </div>

                {/* Right Column: 3D Interactive Orb */}
                <div className="relative flex items-center justify-center min-h-[500px] perspective-1000">

                    {/* Orbital Ring 1 (Background) */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[550px] h-[550px] rounded-full border border-white/5"
                    />

                    {/* Orbital Ring 2 (Active) with Icons */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[420px] h-[420px] rounded-full border border-white/10"
                    >
                        {/* Floating Element 1 - Tech */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="p-4 bg-[#05070A]/80 backdrop-blur-md border border-cyan/30 rounded-2xl shadow-[0_0_30px_rgba(0,242,255,0.15)] flex flex-col items-center gap-1 group cursor-pointer hover:border-cyan hover:scale-110 transition-all"
                            >
                                <Cpu className="text-cyan w-6 h-6" />
                                <span className="text-[10px] font-bold text-cyan tracking-wider">TECH</span>
                            </motion.div>
                        </div>

                        {/* Floating Element 2 - Audit */}
                        <div className="absolute bottom-[14%] right-[14%] translate-x-1/2 translate-y-1/2">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="p-4 bg-[#05070A]/80 backdrop-blur-md border border-mint/30 rounded-2xl shadow-[0_0_30px_rgba(32,227,155,0.15)] flex flex-col items-center gap-1 group cursor-pointer hover:border-mint hover:scale-110 transition-all"
                            >
                                <ShieldCheck className="text-mint w-6 h-6" />
                                <span className="text-[10px] font-bold text-mint tracking-wider">AUDIT</span>
                            </motion.div>
                        </div>

                        {/* Floating Element 3 - Legal */}
                        <div className="absolute bottom-[14%] left-[14%] -translate-x-1/2 translate-y-1/2">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="p-4 bg-[#05070A]/80 backdrop-blur-md border border-white/20 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.1)] flex flex-col items-center gap-1 group cursor-pointer hover:border-white hover:scale-110 transition-all"
                            >
                                <Briefcase className="text-white w-6 h-6" />
                                <span className="text-[10px] font-bold text-white tracking-wider">LEGAL</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* The Central Orb */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                        className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full cursor-pointer"
                        style={{
                            background: 'radial-gradient(circle at 30% 30%, #fff 0%, #00F2FF 40%, #000 100%)',
                            boxShadow: '0 0 120px rgba(0, 242, 255, 0.35)'
                        }}
                    >
                        {/* Additional inner glow for realism */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent to-black/40" />

                        {/* Inner Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Boxes className="w-24 h-24 text-white opacity-90 drop-shadow-2xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
