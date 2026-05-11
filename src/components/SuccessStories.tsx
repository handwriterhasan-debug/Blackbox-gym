import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: "Marcus Thorne",
      achievement: "Dropped 20kg in 4 Months",
      quote: "Before coming to Blackbox, I tried every gym in Los Angeles. Blackbox is different. The equipment is raw, the trainers don't let you quit, and the atmosphere forces you to work harder.",
      emoji: "🧔🏽‍♂️"
    },
    {
      name: "Elena Rostova",
      achievement: "Deadlift PR: 100kg",
      quote: "As a woman, gyms can be intimidating. Here, it's just pure respect for the hustle. The CrossFit classes completely transformed my strength. No excuses.",
      emoji: "👩🏼‍🦰"
    },
    {
      name: "David O'Connor",
      achievement: "Men's Physique Competitor",
      quote: "If you want to build a competition-ready physique, this is the only place in California. The coaching the provided took me from an amateur to standing on stage.",
      emoji: "👨🏻‍🦲"
    }
  ];

  return (
    <section className="bg-black py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative large quotes */}
      <Quote className="absolute top-10 left-10 w-64 h-64 text-zinc-900 opacity-20 rotate-180" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-7xl font-display text-white uppercase tracking-wide">
            Their <span className="text-primary">Legacy</span>
          </h2>
          <p className="mt-4 text-gray-400 font-sans text-lg max-w-2xl mx-auto">
            Real people. Insane work ethic. Undeniable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#111111] border border-zinc-800 p-8 relative flex flex-col pt-12 mt-12 hover:border-primary/50 transition-colors"
            >
              <div className="absolute -top-12 left-8 w-24 h-24 border-4 border-black bg-zinc-900 flex items-center justify-center text-5xl box-content">
                {story.emoji}
              </div>
              
              <Quote className="text-primary w-8 h-8 mb-6" />
              
              <p className="text-gray-300 italic font-sans mb-8 flex-grow">
                "{story.quote}"
              </p>
              
              <div className="border-t border-zinc-800 pt-6">
                <h4 className="text-white font-display text-xl uppercase tracking-wider">{story.name}</h4>
                <p className="text-primary font-sans text-sm font-bold uppercase mt-1">{story.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
