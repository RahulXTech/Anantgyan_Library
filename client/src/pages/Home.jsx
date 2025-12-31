import Hero from "../components/home/Hero";
import InfoBar from "../components/home/InfoBar";
import WhyChoose from "../components/home/WhyChoose";
import Facilities from "../components/home/Facilities";
import Testimonials from "../components/home/Testimonials";
import SuccessStories from "../components/home/SuccessStories";
import CTA from "../components/home/CTA";
import Navbar from "../components/home/Navbar";
import Gallery from "../components/home/Gallery";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <main className="font-sans bg-gray-50 text-gray-800">
      <Hero />
      <InfoBar />
      <WhyChoose />
      <Facilities />
      <Testimonials />
      <SuccessStories />
      <Gallery/>
      <CTA />   
    </main>
  );
}
