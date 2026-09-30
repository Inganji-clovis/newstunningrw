export interface HeroSlide {
  image: string;
  tag: string;
  title: string;
  accent: string;
  text: string;
  label: string;
  service: string;
  href: string;
  alt: string;
}

export const heroSlides: HeroSlide[] = [{image:`dubai-dusk`,tag:`AIR TICKETS · VISA ASSISTANCE · HOTELS`,title:`Your next journey`,accent:`starts in Kigali.`,text:`Business, family visits or a new adventure. Let’s bring your travel plans together.`,label:`Find my flight`,service:`Air tickets`,href:`/services/flights`,alt:`Dubai skyline at sunset`},{image:`gorilla-rwanda`,tag:`RWANDA · GORILLA EXPERIENCES`,title:`Some encounters`,accent:`stay with you.`,text:`Discover our primate journeys and plan a safari around your interests.`,label:`Plan a gorilla safari`,service:`Tours`,href:`/destinations/rwanda`,alt:`Mountain gorilla among green forest leaves`},{image:`mara-elephants`,tag:`KENYA · TANZANIA · UGANDA · RWANDA`,title:`Open horizons.`,accent:`Extraordinary journeys.`,text:`Explore wildlife safaris, scenic routes and experiences across East Africa.`,label:`Plan my safari`,service:`Tours`,href:`/safaris`,alt:`Elephant in an East African landscape`},{image:`island-poster`,tag:`BEACH HOLIDAYS · ISLAND STAYS`,title:`Take a little time`,accent:`for the ocean.`,text:`Combine your safari with a beach escape, or make relaxation the whole plan.`,label:`Plan a beach escape`,service:`Hotels`,href:`/safaris?type=Beach`,alt:`Turquoise ocean and tropical island coastline`}];
