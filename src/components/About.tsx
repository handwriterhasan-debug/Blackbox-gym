import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-transparent py-24 sm:py-32 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl sm:text-7xl font-black text-white mb-6 uppercase leading-none tracking-tighter">
              Not Just A Gym.<br/>
              <span className="text-primary italic">A Proving Ground.</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-sm leading-relaxed max-w-lg">
              <p>
                Established in the heart of Los Angeles, BLACKBOX isn't for those who are just looking for a treadmill. We are a community of iron addicts, athletes, and individuals committed to leaving their excuses at the door.
              </p>
              <p>
                Our mission is simple: provide the heaviest weights, the best equipment, and the most elite coaching environment in California. Whether you are prepping for a bodybuilding show or trying to build your first 10lbs of muscle, our walls breed champions.
              </p>
            </div>
            <div className="mt-10">
              <a 
                href="#contact" 
                className="inline-block border border-white/20 text-white px-8 py-3 text-xs font-black uppercase hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4"></div>
            <div className="relative aspect-[4/5] bg-zinc-900 border border-white/5 overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" 
                alt="Blackbox Gym Interior" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/5 p-6 w-48 text-center shadow-xl">
              <div className="text-5xl font-black text-white italic">100%</div>
              <div className="text-[10px] text-primary uppercase tracking-widest font-bold mt-1">Results Guaranteed</div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
