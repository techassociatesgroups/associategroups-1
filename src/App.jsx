import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortalNetwork from './components/PortalNetwork';
import ServiceMatrix from './components/ServiceMatrix';
import QuantumLeap from './components/QuantumLeap';

function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <PortalNetwork />
      <ServiceMatrix />
      <QuantumLeap />

      <footer className="py-20 border-t border-white/5 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-white mb-4">ASSOCIATES</h4>
            <p className="text-gray-500 text-sm">The premier 360-degree digital architecture for technology, finance, and legal compliance excellence.</p>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs tracking-widest mb-4">CORE SERVICES</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Tech Solutions</li>
              <li>Financial Audit</li>
              <li>Entity Registration</li>
              <li>Strategic Consulting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs tracking-widest mb-4">INFRASTRUCTURE</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Privacy Protocol</li>
              <li>Compliance Framework</li>
              <li>Global Support</li>
              <li>API Access</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white text-xs tracking-widest mb-4">CONNECTION</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>info@associatesgroups.in</li>
              <li>+91 63748 46995 </li>
              <li>Tambaram,chennai</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-[10px] tracking-widest uppercase">
  © {new Date().getFullYear()} ASSOCIATES GROUPS GLOBAL HUB. ALL SYSTEMS OPERATIONAL.
</div>
      </footer>
    </div>
  );
}

export default App;
