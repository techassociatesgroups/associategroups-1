import React from 'react';
import { motion } from 'framer-motion';
import {
    Megaphone,
    Calculator,
    FileSearch,
    FileText,
    Building2,
    ShoppingCart,
    Palette,
    Landmark,
    Code2,
    PieChart
} from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, category, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.4 }}
        whileHover={{ y: -5, borderColor: color }}
        className="aspect-square flex flex-col items-center justify-center text-center p-4 rounded-2xl bg-[#0A0C10] border border-white/5 hover:bg-white/[0.02] transition-all group cursor-pointer"
        style={{ '--hover-color': color }}
    >
        <div className="mb-4 p-3 rounded-lg bg-white/5 group-hover:bg-[var(--hover-color)]/10 transition-colors">
            <Icon className="w-6 h-6 text-gray-300 group-hover:text-[var(--hover-color)] transition-colors" />
        </div>

        <h3 className="text-xs font-bold text-white mb-1 uppercase tracking-wider">{title}</h3>
        <p className="text-[10px] font-medium tracking-widest opacity-40 uppercase" style={{ color: color }}>
            {category}
        </p>
    </motion.div>
);

const ServiceMatrix = () => {
    const services = [
        { title: "Digital Marketing", category: "Tech Hub", icon: Megaphone, color: "#00F2FF" },
        { title: "Tax Planning", category: "Audit Lab", icon: Calculator, color: "#20E39B" },
        { title: "Statutory Audit", category: "Audit Lab", icon: FileSearch, color: "#20E39B" },
        { title: "GST Returns", category: "Legal Portal", icon: FileText, color: "#FFFFFF" },
        { title: "MSME Fund", category: "Legal Portal", icon: Building2, color: "#FFFFFF" },
        { title: "E-Commerce", category: "Tech Hub", icon: ShoppingCart, color: "#00F2FF" },
        { title: "Internal Audit", category: "Audit Lab", icon: PieChart, color: "#20E39B" },
        { title: "Company Registration", category: "Legal Portal", icon: Landmark, color: "#FFFFFF" },
        { title: "Designing", category: "Tech Hub", icon: Palette, color: "#00F2FF" },
        { title: "Web Engineering", category: "Tech Hub", icon: Code2, color: "#00F2FF" },
    ];

    return (
        <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
            <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase flex items-center gap-2">
                        Service Matrix
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-mint opacity-80">A-Z</span>
                    </h2>
                    <p className="text-gray-400 text-sm mt-2">The comprehensive backbone of your business operations.</p>
                </div>

                <button className="hidden md:flex items-center gap-2 text-xs font-bold text-cyan tracking-widest hover:text-white transition-colors">
                    FULL CATALOG <span className="text-lg leading-none">→</span>
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {services.map((service, idx) => (
                    <ServiceCard key={idx} {...service} delay={idx * 0.05} />
                ))}
            </div>
        </section>
    );
};

export default ServiceMatrix;
