'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, ChevronDown, Plane, Hotel, Car, ShieldCheck, GraduationCap, Briefcase, Globe, Phone } from 'lucide-react';

const megaMenuData = {
  travelServices: [
    { name: 'Flight Booking', href: '#flights', icon: <Plane className="w-5 h-5 text-crimson" />, desc: 'Global routes & private charters' },
    { name: 'Accommodations', href: '#hotels', icon: <Hotel className="w-5 h-5 text-crimson" />, desc: 'Luxury stays & boutique hotels' },
    { name: 'Car Rentals', href: '#cars', icon: <Car className="w-5 h-5 text-crimson" />, desc: 'Premium fleet in Kigali & EA' },
    { name: 'Airport Transfers', href: '#transfers', icon: <ShieldCheck className="w-5 h-5 text-crimson" />, desc: 'Reliable, secure pickups' },
  ],
  visaHub: [
    { name: 'Student Visa Assistance', href: '#visa-student', icon: <GraduationCap className="w-5 h-5 text-crimson" />, desc: 'Study globally with ease' },
    { name: 'Business & Tourist Visas', href: '#visa-business', icon: <Briefcase className="w-5 h-5 text-crimson" />, desc: 'Fast-track processing' },
    { name: 'Document Processing', href: '#visa-docs', icon: <Globe className="w-5 h-5 text-crimson" />, desc: 'Apostille & certified translations' },
  ],
  tours: [
    { name: 'Rwanda Packages', href: '#tours-rw', icon: <Globe className="w-5 h-5 text-crimson" />, desc: 'Land of a thousand hills' },
    { name: 'East Africa Safaris', href: '#tours-ea', icon: <Plane className="w-5 h-5 text-crimson" />, desc: 'Unforgettable wildlife journeys' },
    { name: 'Corporate Travel', href: '#tours-corp', icon: <Briefcase className="w-5 h-5 text-crimson" />, desc: 'Efficient business logistics' },
  ]
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const NavItem = ({ name, id, items }: { name: string, id: string, items: any[] }) => (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => setActiveMenu(id)}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <button className={`flex items-center space-x-1 px-4 py-2 font-semibold transition-colors ${isScrolled ? 'text-white hover:text-crimson' : 'text-white hover:text-crimson text-shadow-sm'}`}>
        <span>{name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeMenu === id ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {activeMenu === id && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute top-[calc(100%-10px)] left-1/2 -translate-x-1/2 pt-4 w-[600px] z-50 pointer-events-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 grid grid-cols-2 gap-4">
              {items.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                >
                  <div className="p-2 bg-crimson/5 rounded-lg group-hover:bg-crimson/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate text-sm group-hover:text-crimson transition-colors">{item.name}</h4>
                    <p className="text-xs text-slate/60 mt-1">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <>
      <nav 
        className={`fixed w-full z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-slate/95 backdrop-blur-lg py-3 border-b-2 border-crimson shadow-2xl' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-full">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-white'}`}>
                STUNNING<span className="text-crimson">TRAVEL</span>
              </span>
            </Link>
            
            <div className="hidden lg:flex items-center h-full">
              <Link href="/" className="px-4 py-2 text-white font-semibold hover:text-crimson transition-colors">Home</Link>
              <NavItem name="Travel Services" id="travel" items={megaMenuData.travelServices} />
              <NavItem name="Visa Hub" id="visa" items={megaMenuData.visaHub} />
              <NavItem name="Tours" id="tours" items={megaMenuData.tours} />
              <Link href="#about" className="px-4 py-2 text-white font-semibold hover:text-crimson transition-colors">About Us</Link>
              
              <div className="ml-8">
                <Link
                  href="#book"
                  className="bg-crimson hover:bg-white hover:text-crimson text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-crimson/20 active:scale-95"
                >
                  Book Now
                </Link>
              </div>
            </div>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <Menu size={32} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate/80 backdrop-blur-sm z-[110]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-white z-[120] shadow-2xl p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-black text-slate">STUNNING<span className="text-crimson">TRAVEL</span></span>
                <button onClick={() => setIsOpen(false)} className="text-slate p-2"><X size={28} /></button>
              </div>

              <div className="space-y-8 pb-12">
                <div>
                  <h3 className="text-xs font-bold text-slate/40 uppercase tracking-widest mb-4">Navigation</h3>
                  <div className="space-y-4">
                    <Link href="/" className="block text-xl font-bold text-slate hover:text-crimson">Home</Link>
                    <Link href="#about" className="block text-xl font-bold text-slate hover:text-crimson">About Us</Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate/40 uppercase tracking-widest mb-4">Travel Services</h3>
                  <div className="space-y-4">
                    {megaMenuData.travelServices.map(item => (
                      <Link key={item.name} href={item.href} className="flex items-center space-x-3 text-slate hover:text-crimson font-semibold">
                        {item.icon} <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold text-slate/40 uppercase tracking-widest mb-4">Visa Hub</h3>
                  <div className="space-y-4">
                    {megaMenuData.visaHub.map(item => (
                      <Link key={item.name} href={item.href} className="flex items-center space-x-3 text-slate hover:text-crimson font-semibold">
                        {item.icon} <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="#book"
                  className="block w-full text-center bg-crimson text-white py-4 rounded-2xl font-bold text-lg shadow-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
