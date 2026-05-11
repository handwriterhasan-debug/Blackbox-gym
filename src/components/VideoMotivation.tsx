import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoMotivation() {
  return (
    <section className="relative py-16 sm:py-32 bg-transparent my-10 max-w-7xl mx-auto overflow-hidden rounded-3xl shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
      {/* Background */}
      <div className="absolute inset-0 opacity-40 rounded-3xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1920&auto=format&fit=crop" 
          alt="Gym Motivation"
          className="w-full h-full object-cover object-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-7xl font-display text-white mb-6 sm:mb-12 uppercase tracking-wide">
            Watch What <span className="text-primary">Blackbox</span> Is Made Of
          </h2>

          {/* Interactive Play Button Area */}
          <div className="relative cursor-pointer group inline-block">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-150 group-hover:bg-primary/50 group-hover:scale-175 transition-all duration-500"></div>
            
            <div className="relative w-16 h-16 sm:w-32 sm:h-32 rounded-full border-2 sm:border-4 border-primary flex items-center justify-center bg-black hover:bg-primary transition-colors duration-300 group-hover:scale-105 transform z-20">
              <Play className="w-6 h-6 sm:w-14 sm:h-14 text-primary group-hover:text-black ml-1 sm:ml-2" fill="currentColor" />
            </div>
          </div>
          
          <p className="mt-6 sm:mt-12 text-gray-400 font-sans text-xs sm:text-lg max-w-2xl mx-auto font-light">
            Warning: The video above contains heavy lifting, intense screaming, and graphic progress. 
            Click to see the atmosphere that breeds LA's top lifters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
