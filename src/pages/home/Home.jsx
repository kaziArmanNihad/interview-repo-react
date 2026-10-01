import Hero from "../../components/homePageComponents/Hero.jsx";
import Stats from "../../components/homePageComponents/Stats.jsx";
import Features from "../../components/homePageComponents/Features.jsx";
import Services from "../../components/homePageComponents/Services.jsx";
import Pricing from "../../components/homePageComponents/Pricing.jsx";
import Testimonials from "../../components/homePageComponents/Testimonials.jsx";
import CTA from "../../components/homePageComponents/CTA.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
}

export default Home;
