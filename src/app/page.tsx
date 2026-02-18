import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <TrustBar />
      <Services />
      
      {/* Footer Placeholder for completeness */}
      <footer className="bg-slate py-12 text-white/50 text-center border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-medium">
            &copy; {new Date().getFullYear()} Stunning Travel & Tours Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
