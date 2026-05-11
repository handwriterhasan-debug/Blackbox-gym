import { motion } from 'motion/react';
import { Instagram, Twitter } from 'lucide-react';

export default function Trainers() {
  const trainers = [
    { name: "Jack", specialty: "Head Coach / Bodybuilding", image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=600&auto=format&fit=crop" },
    { name: "Marcus", specialty: "Strength & Conditioning", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop" },
    { name: "Sarah", specialty: "HIIT & CrossFit", emoji: "👩🏼‍🦱" },
    { name: "Viktor", specialty: "MMA & Combat", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=600&auto=format&fit=crop" },
    { name: "Mia", specialty: "Power Yoga & Mobility", emoji: "👱🏼‍♀️" },
    { name: "Dr. Evans", specialty: "Nutritionist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    <section id="trainers" className="bg-[#0D0D0D] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl sm:text-7xl font-display text-white uppercase tracking-wide">
              Meet The <span className="text-primary">Architects</span>
            </h2>
            <p className="mt-4 text-gray-400 font-sans text-lg">
              They don't just count reps. They break you down and rebuild you stronger.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-block border-b-2 border-primary text-white hover:text-primary transition-colors pb-1 uppercase font-bold tracking-widest text-sm">
            Work With Us
          </a>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-2 sm:gap-y-12 sm:gap-x-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-2 sm:mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 border border-zinc-800 bg-zinc-900 flex items-center justify-center text-4xl sm:text-[100px] select-none rounded-2xl shadow-lg">
                {trainer.image ? (
                  <img 
                    src={trainer.image} 
                    alt={trainer.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <span>{trainer.emoji}</span>
                )}
                
                {/* Overlay social icons */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1 sm:gap-4 rounded-2xl">
                  <a href="#" className="w-6 h-6 sm:w-12 sm:h-12 bg-primary text-black flex items-center justify-center hover:bg-white hover:scale-110 transition-all border border-transparent rounded-full shadow-md">
                    <Instagram className="w-3 h-3 sm:w-5 sm:h-5" />
                  </a>
                  <a href="#" className="w-6 h-6 sm:w-12 sm:h-12 bg-white text-black flex items-center justify-center hover:bg-primary hover:scale-110 transition-all border border-transparent rounded-full shadow-md">
                    <Twitter className="w-3 h-3 sm:w-5 sm:h-5" />
                  </a>
                </div>
              </div>
              
              <div className="text-center px-1">
                <h3 className="text-sm sm:text-2xl font-display text-white uppercase truncate">{trainer.name}</h3>
                <p className="text-primary font-sans text-[8px] sm:text-sm font-bold uppercase tracking-widest mt-1 truncate">{trainer.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
