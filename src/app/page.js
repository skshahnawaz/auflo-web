import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import LogoMarquee from "./_components/ScrollSection";
import FeatureGrid from "./_components/FeatureGrid";
import Footer from "./_components/Footer";
import WaitList from "./_components/WaitList";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoMarquee />
      <FeatureGrid />
      <WaitList />
      <Footer />
    </>
  );
}
