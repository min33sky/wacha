import About from '@/components/About';
import BackToTopBtn from '@/components/BackToTopBtn';
import Cars from '@/components/Cars';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Testimonial from '@/components/Testimonial';
import Why from '@/components/Why';

export default function Home() {
  return (
    <main className="max-w-[1920px]  mx-auto relative overflow-hidden">
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Contact />
      <Footer />
      <BackToTopBtn />
      <div className="h-[4000px]"></div>
    </main>
  );
}
