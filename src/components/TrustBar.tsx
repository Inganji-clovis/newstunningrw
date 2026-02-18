export default function TrustBar() {
  const partners = [
    { name: 'IATA', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/IATA_logo.svg/1200px-IATA_logo.svg.png' },
    { name: 'RwandAir', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/RwandAir_Logo.svg/1200px-RwandAir_Logo.svg.png' },
    { name: 'Qatar Airways', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/1200px-Qatar_Airways_Logo.svg.png' },
    { name: 'Kenya Airways', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Kenya_Airways_logo.svg/1200px-Kenya_Airways_logo.svg.png' },
    { name: 'KLM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/KLM_logo.svg/1200px-KLM_logo.svg.png' },
    { name: 'Turkish Airlines', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Turkish_Airlines_logo_2019.svg/1200px-Turkish_Airlines_logo_2019.svg.png' },
  ];

  return (
    <div className="bg-gray-50/50 border-y border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate/50 uppercase tracking-widest mb-8">
          Trusted by Industry Leaders & Partner Airlines
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner) => (
            <img
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              className="h-8 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
