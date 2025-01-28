import FAQ from "../components/landingPage/FAQ/faq";
import { Footer } from "../components/landingPage/Footer/footer";
import { Header } from "../components/landingPage/Header/header";
import { Hero } from "../components/landingPage/Hero/hero";
import Pricing  from "../components/landingPage/Pricing/pricing";
import { VideoExplanation } from "../components/landingPage/VideoExplanation/videoexplanation";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header /> 
      <Hero />
      <VideoExplanation />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
