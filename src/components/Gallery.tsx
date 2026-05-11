import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfe019fee?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="bg-[#111111] py-24">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-7xl font-display text-white uppercase tracking-wide">
            The <span className="text-primary">Asylum</span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-lg max-w-2xl mx-auto">
            Inside Blackbox, Los Angeles. Raw iron, no distractions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => {
            // Create a masonry-like feel by making some items span rows
            const isLarge = index === 0 || index === 3;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative overflow-hidden group border border-zinc-800 ${isLarge ? 'row-span-2' : ''} aspect-square ${isLarge ? 'md:aspect-[1/2]' : ''}`}
              >
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none mix-blend-color"></div>
                <img 
                  src={src} 
                  alt="Gym Facility" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
