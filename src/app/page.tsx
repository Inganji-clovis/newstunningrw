import Navbar from '@/components/Navbar';
import JourneyHero from '@/components/JourneyHero';
import RequestBox from '@/components/RequestBox';
import IntroSection from '@/components/IntroSection';
import PhotoServices from '@/components/PhotoServices';
import CountryGrid from '@/components/CountryGrid';
import SafariCollection from '@/components/SafariCollection';
import SplitFlightFeature from '@/components/SplitFlightFeature';
import FlightFilm from '@/components/FlightFilm';
import AirlinePartners from '@/components/AirlinePartners';
import BeachBanner from '@/components/BeachBanner';
import ExperienceGrid from '@/components/ExperienceGrid';
import AdventurePace from '@/components/AdventurePace';
import TravelJournal from '@/components/TravelJournal';
import ClosingBanner from '@/components/ClosingBanner';
import RichFooter from '@/components/RichFooter';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <JourneyHero />
        <RequestBox />
        <IntroSection />
        <PhotoServices />
        <CountryGrid />
        <SafariCollection />
        <SplitFlightFeature />
        <FlightFilm />
        <AirlinePartners />
        <BeachBanner />
        <ExperienceGrid />
        <AdventurePace />
        <TravelJournal />
        <ClosingBanner />
      </main>
      <RichFooter />
    </>
  );
}
