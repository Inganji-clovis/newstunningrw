'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

const images = [
  // 1. Aviation - PRESERVED (WORKING)
  "https://images.unsplash.com/photo-1436491865332-7a61a109c0f?auto=format&fit=crop&q=80&w=2000",
  // 2. Kigali Aviation Hub (NEW)
  "https://images.unsplash.com/photo-1473862170180-84427c485a30?auto=format&fit=crop&q=80&w=2000",
  // 3. Visa Hub - PRESERVED (WORKING)
  "https://images.unsplash.com/photo-1569336415962-a4bd9f6dfc0f?auto=format&fit=crop&q=80&w=2000",
  // 4. Visa Documents - PRESERVED (WORKING)
  "https://images.unsplash.com/photo-1606857521015-7f9fbf423b40?auto=format&fit=crop&q=80&w=2000",
  // 5. Volcanoes National Park / Gorillas (NEW)
  "https://images.unsplash.com/photo-1581281862187-ec5532e332c1?auto=format&fit=crop&q=80&w=2000",
  // 6. Akagera National Park / Wildlife (NEW)
  "https://images.unsplash.com/photo-1516422317184-3314da53ec38?auto=format&fit=crop&q=80&w=2000",
  // 7. Kigali Convention Centre - Night (NEW)
  "https://images.unsplash.com/photo-1529154036614-a60975f5c760?auto=format&fit=crop&q=80&w=2000",
  // 8. Luxury Rwandan Lodge (NEW)
  "https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=2000",
  // 9. Safari Land Cruiser 4x4 (NEW)
  "https://images.unsplash.com/photo-1533106497176-45ae19b68ba2?auto=format&fit=crop&q=80&w=2000",
  // 10. Kigali Modern Office Hub (NEW)
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
  // 11. Luxury Hotel Kigali (NEW)
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
  // 12. Corporate Lounge Kigali (NEW)
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  // 13. Study Abroad - PRESERVED (WORKING)
  "https://images.unsplash.com/photo-1523050338692-7b835a07733f?auto=format&fit=crop&q=80&w=2000",
  // 14. University Campus - PRESERVED (WORKING)
  "https://images.unsplash.com/photo-1541339902294-12784724b071?auto=format&fit=crop&q=80&w=2000",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });
  
  const moveX = useTransform(springX, [-1, 1], [-20, 20]);
  const moveY = useTransform(springY, [-1, 1], [-20, 20]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    
    // Normalize mouse position to [-1, 1]
    const x = ((clientX - left) / width) * 2 - 1;
    const y = ((clientY - top) / height) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ x: moveX, y: moveY, scale: 1.05 }}
          className="absolute inset-0 z-0"
        >
          <img
            src={images[index]}
            alt={`Stunning Travel Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-slate-900/10 z-10 pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 max-w-5xl mx-auto drop-shadow-2xl">
            To empower leisure and <span className="text-crimson">business travelers</span> through smart travel solutions
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 max-w-3xl mx-auto drop-shadow-lg">
            Experience the gold standard in aviation, global visa assistance, and luxury safaris.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link 
              href="#book" 
              className="bg-crimson hover:bg-white hover:text-crimson text-white px-12 py-5 rounded-full font-black text-xl transition-all shadow-2xl active:scale-95 text-center min-w-[220px]"
            >
              Book Now
            </Link>
            <Link 
              href="#services" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-12 py-5 rounded-full font-black text-xl hover:bg-white hover:text-slate transition-all shadow-2xl active:scale-95 text-center min-w-[220px]"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index ? 'w-12 bg-crimson' : 'w-4 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
