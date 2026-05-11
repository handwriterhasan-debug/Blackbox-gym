import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Classes() {
  const classesList = [
    {
      name: 'Bodybuilding',
      duration: '90 Min',
      difficulty: 'Hard',
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Cardio HIIT',
      duration: '45 Min',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'CrossFit',
      duration: '60 Min',
      difficulty: 'Extreme',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfe019fee?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'MMA & Boxing',
      duration: '60 Min',
      difficulty: 'Hard',
      image: 'https://images.unsplash.com/photo-1549719386-74dfc97dd4fc?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Spin Cycle',
      duration: '45 Min',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
    },
    {
      name: 'Power Yoga',
      duration: '60 Min',
      difficulty: 'All Levels',
      image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&w=600&auto=format&fit=crop',
    }
  ];

  return (
    <section id="classes" className="bg-transparent py-24 sm:py-32 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-sm max-w-2xl mx-auto leading-relaxed">
            From heavy lifting to high-intensity interval training, choose your weapon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {classesList.map((cls, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900 border border-white/5 p-8 relative overflow-hidden group min-h-[300px] flex flex-col justify-end transition-colors hover:border-primary/50"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={cls.image} 
                  alt={cls.name} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-10 group-hover:scale-105 grayscale transition-all duration-700 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex gap-2 mb-2">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">
                    {cls.duration}
                  </span>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">
                    • {cls.difficulty}
                  </span>
                </div>
                
                <h3 className="text-3xl font-black uppercase italic text-white mb-4 group-hover:text-primary transition-colors">
                  {cls.name}
                </h3>
                
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-white font-sans uppercase font-bold text-[10px] tracking-widest group-hover:text-primary transition-colors"
                >
                  Book Class <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" />
                </a>
              </div>
              
              <div className="absolute bottom-[-20px] right-[-10px] text-[8rem] font-black text-white/5 italic leading-none pointer-events-none select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
