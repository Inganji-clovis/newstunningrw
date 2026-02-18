export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background images without overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506012733851-462978393e96?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Travel Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Empowering Travelers Through <span className="text-crimson">Smart Solutions</span> & Memorable Experiences
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-light">
            Award-winning travel and tours consulting based in Kigali, Rwanda. 
            Delivering excellence in every journey we design.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-crimson text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-crimson/90 transition-all shadow-xl hover:shadow-2xl active:scale-95">
              Book Your Trip Now
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all active:scale-95">
              Exlore Tours
            </button>
          </div>
        </div>
      </div>

      {/* Hero Accent */}
      {/* Hero Accent Removed */}
    </section>
  );
}
