import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[700px] flex flex-col justify-end bg-transparent overflow-hidden pb-32">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0 border border-white/5 bg-zinc-900 m-4 sm:m-8 rounded-none overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop" 
          alt="Blackbox Gym Background" 
          className="w-full h-full object-cover opacity-20 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-black leading-[0.85] tracking-tighter text-white mb-6"
          >
            WHERE <span className="text-primary">CHAMPIONS</span><br/>ARE BUILT
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed border-l-2 border-primary pl-4"
          >
            Push your limits. Build your legacy. LA's most serious training facility is now open.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#pricing" 
              className="bg-white text-black px-8 py-4 text-xs font-black uppercase text-center hover:bg-zinc-200 transition-colors duration-300 block tracking-wider"
            >
              Start Free Trial
            </a>
            <a 
              href="#classes" 
              className="border border-white/20 text-white px-8 py-4 text-xs font-black uppercase text-center hover:bg-white/10 transition-colors duration-300 block tracking-wider"
            >
              Explore Classes
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee highlight strip */}
      <div className="absolute bottom-8 sm:bottom-12 left-4 sm:left-8 right-4 sm:right-8 bg-primary py-3 overflow-hidden z-20 flex justify-center">
        <div className="text-black text-[11px] sm:text-[13px] font-black uppercase leading-tight tracking-widest text-center flex items-center justify-center gap-4 sm:gap-8 whitespace-nowrap overflow-x-auto w-full px-4 scrollbar-hide">
          <span>Morning: 5 AM - 2 PM</span>
          <span className="opacity-50">•</span>
          <span>Evening: 5 PM - 12 AM</span>
          <span className="opacity-50 hidden sm:inline">•</span>
          <span className="hidden sm:inline">Join the Cult Now</span>
        </div>
      </div>
    </section>
  );
}
