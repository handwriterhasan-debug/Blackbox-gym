/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import VideoMotivation from './components/VideoMotivation';
import Classes from './components/Classes';
import SuccessStories from './components/SuccessStories';
import Trainers from './components/Trainers';
import CTABanner from './components/CTABanner';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import BlogEvents from './components/BlogEvents';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0D0D0D] min-h-screen selection:bg-primary selection:text-black font-sans relative overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 opacity-15 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <VideoMotivation />
        <Classes />
        <SuccessStories />
        <Trainers />
        <CTABanner />
        <Gallery />
        <Pricing />
        <BlogEvents />
        <Footer />
      </div>
    </div>
  );
}

