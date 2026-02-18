import { Plane, FileCheck, Globe, Hotel, GraduationCap, Car } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Flight Booking & Ticketing',
      description: 'Identifying cheap flights and good connections at competitive prices with no hidden fees.',
      icon: <Plane className="w-12 h-12 text-crimson" />,
      tag: 'Aviation'
    },
    {
      title: 'Visa Assistance',
      description: 'Step-by-step assistance on preparing your visa application with expert guidance.',
      icon: <FileCheck className="w-12 h-12 text-crimson" />,
      tag: 'Immigration'
    },
    {
      title: 'Tour Packages',
      description: 'Satisfying tours in Rwanda, Kenya, Uganda and Tanzania. We plan from A to Z for you.',
      icon: <Globe className="w-12 h-12 text-crimson" />,
      tag: 'Experiences'
    },
    {
      title: 'Hotel Bookings',
      description: 'Big savings on homes and hotels worldwide – build your perfect trip on any budget.',
      icon: <Hotel className="w-12 h-12 text-crimson" />,
      tag: 'Accommodation'
    },
    {
      title: 'Study Abroad Assistance',
      description: 'Advice on how to obtain funding and financial aid for your study abroad program globally.',
      icon: <GraduationCap className="w-12 h-12 text-crimson" />,
      tag: 'Education'
    },
    {
      title: 'Car Rentals',
      description: 'Providing all types of cars to suit your needs in Kigali Rwanda and beyond.',
      icon: <Car className="w-12 h-12 text-crimson" />,
      tag: 'Transport'
    }
  ];

  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate mb-4">Our Premium Services</h2>
          <p className="text-lg text-slate/70 max-w-2xl mx-auto uppercase tracking-wider font-semibold text-sm">
            High-End and Exclusive Solutions
          </p>
          <div className="w-24 h-1 bg-crimson mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 bg-gray-50 rounded-xl group-hover:bg-crimson/5 transition-colors">
                {service.icon}
              </div>
              <span className="block text-crimson text-xs font-bold uppercase tracking-widest mb-2">{service.tag}</span>
              <h3 className="text-xl font-bold text-slate mb-4 group-hover:text-crimson transition-colors">
                {service.title}
              </h3>
              <p className="text-slate/70 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
