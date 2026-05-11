import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '15+', label: 'Expert Trainers' },
    { value: '20+', label: 'Classes Per Week' },
    { value: '6', label: 'Years of Excellence' },
  ];

  return (
    <section className="bg-transparent py-4 relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900 border border-white/5 p-6"
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
