import Nav from "./components/Nav";
import Hero from "./components/Hero";
import QuoteCarousel from "./components/QuoteCarousel";
import Showcase from "./components/Showcase";
import FAQ from "./components/FAQ";
import DownloadCTA from "./components/DownloadCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0a0a0a] antialiased">
      <Nav />
      <Hero />
      <QuoteCarousel />
      <Showcase />
      <FAQ />
      <DownloadCTA />
      <Footer />
    </div>
  );
}