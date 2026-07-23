import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RoiCalculator from "@/components/RoiCalculator";
import HowItWorks from "@/components/HowItWorks";
import CityVote from "@/components/CityVote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-porcelain">
      <Navbar />
      <Hero />
      <hr className="dbl" aria-hidden="true" />
      <RoiCalculator />
      <hr className="dbl" aria-hidden="true" />
      <HowItWorks />
      <hr className="dbl" aria-hidden="true" />
      <CityVote />
      <Footer />
    </main>
  );
}
