import { motion } from 'motion/react';

export default function CTABanner() {
  return (
    <section className="bg-primary py-24 relative overflow-hidden z-20">
      {/* Dynamic background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none overflow-hidden mix-blend-overlay">
        <span className="text-[20vw] font-black text-black whitespace-nowrap leading-none tracking-tighter">NO EXCUSES</span>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="text-black text-[13px] font-black uppercase leading-tight mb-4 tracking-widest">
            Special Offer For New Members
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[6rem] font-black tracking-tighter text-black uppercase leading-[0.85] mb-6">
            Get Fit In Less Than<br/>4 Weeks With Us
          </h2>
          <p className="text-sm sm:text-base text-black/80 font-sans mb-10 max-w-2xl mx-auto font-medium">
            No excuses. Just results. Join today in Los Angeles and claim your throne.
          </p>
          <a 
            href="#pricing" 
            className="inline-block bg-[#0D0D0D] text-primary px-12 py-5 text-sm font-black uppercase tracking-tighter hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
          >
            Join Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
