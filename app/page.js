import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Footer from "./component/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f9fa] flex flex-col">
      <Header />
      <HeroSection />
      <Footer />

    </main>
  );
}
