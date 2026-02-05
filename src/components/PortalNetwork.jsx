import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, FileText, ArrowUpRight } from 'lucide-react';

const PortalCard = ({ icon: Icon, title, description, color, items, btnColor }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative group p-8 rounded-3xl bg-[#0A0C10] border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden"
    >
        {/* Hover Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`} />

        <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 mb-8 text-white">
                <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan transition-colors">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-8">{description}</p>

            <div className="mt-auto space-y-6">
                <ul className="space-y-3">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-xs font-semibold text-gray-500 group-hover:text-gray-300 transition-colors">
                            <Icon size={12} className="opacity-50" />
                            {item}
                        </li>
                    ))}
                </ul>

                <button className={`w-full py-3 rounded-lg ${btnColor} font-bold text-xs tracking-widest text-bg flex items-center justify-center gap-2 opacity-90 hover:opacity-100 hover:scale-[1.02] transition-all`}>
                    ENTER PORTAL
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    </motion.div>
);

const PortalNetwork = () => {
    const cards = [
        {
            title: "Tech Associates Group",
            description: "Architecting high-performance digital infrastructure and enterprise-scale software solutions.",
            icon: Terminal,
            color: "from-cyan via-blue-500 to-transparent",
            btnColor: "bg-cyan",
            items: ["Web & App Ecosystems", "AI-Driven SEO", "Performance Marketing"]
        },
        {
            title: "Audit Associates Group",
            description: "Financial precision and regulatory excellence for the modern global enterprise.",
            icon: Shield,
            color: "from-mint via-green-500 to-transparent",
            btnColor: "bg-mint",
            items: ["Statutory Assurance", "Financial Synthesis", "Strategic Taxation"]
        },
        {
            title: "United Filings",
            description: "Streamlined legal compliance and entity registration in a unified service.",
            icon: FileText,
            color: "from-white via-gray-400 to-transparent",
            btnColor: "bg-white",
            items: ["GST Compliance", "MSME/Udyam Registry", "Trade Licensing"]
        }
    ];

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase">The Portal Network</h2>
                <p className="text-gray-400 max-w-lg mx-auto text-sm">Three specialized verticals engineered for enterprise-grade solutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {cards.map((card, idx) => (
                    <PortalCard key={idx} {...card} />
                ))}
            </div>
        </section>
    );
};

export default PortalNetwork;
