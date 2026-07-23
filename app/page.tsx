import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoiCalculator from "@/components/RoiCalculator";
import HowItWorks from "@/components/HowItWorks";
import CityVote from "@/components/CityVote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-asphalt">
      <Navbar />
      <Hero />
      <RoiCalculator />
      <HowItWorks />
      <CityVote />
      <Footer />
    </main>
  );
}
