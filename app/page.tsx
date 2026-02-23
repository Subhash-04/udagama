import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rounds from '@/components/Rounds';

import Media from '@/components/Media';
import Timeline from '@/components/Timeline';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Rounds />

      <Media />
      <Timeline />
      <FAQ />
      <Footer />
    </main>
  );
}
