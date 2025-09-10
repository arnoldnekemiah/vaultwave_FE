import React from 'react';
import Navigation from './components/layout/Navigation';
import BackgroundElements from './components/layout/BackgroundElements';
import HeroSection from './components/sections/HeroSection';
import EcosystemSection from './components/sections/EcosystemSection';
import PartnersSection from './components/sections/PartnersSection';
import WaitlistSection from './components/sections/WaitlistSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-vh-100 position-relative">
      <BackgroundElements />
      <Navigation />
      <HeroSection />
      <EcosystemSection />
      <PartnersSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
}

export default App;
