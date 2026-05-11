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

        <div className="grid grid-cols-3 gap-2 sm:gap-8">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#111111] border border-zinc-800 p-2 pt-8 sm:p-8 relative flex flex-col sm:pt-12 mt-6 sm:mt-12 hover:border-primary/50 transition-colors rounded-2xl shadow-xl"
            >
              <div className="absolute -top-4 sm:-top-12 left-2 sm:left-8 w-8 h-8 sm:w-24 sm:h-24 border-2 sm:border-4 border-black bg-zinc-900 flex items-center justify-center text-sm sm:text-5xl box-content rounded-full shadow-lg">
                {story.emoji}
              </div>
              
              <Quote className="text-primary w-3 h-3 sm:w-8 sm:h-8 mb-2 sm:mb-6" />
              
              <p className="text-gray-300 italic font-sans mb-2 sm:mb-8 flex-grow text-[7px] sm:text-base leading-tight">
                "{story.quote}"
              </p>
              
              <div className="border-t border-zinc-800 pt-2 sm:pt-6">
                <h4 className="text-white font-display text-[8px] sm:text-xl uppercase tracking-wider truncate">{story.name}</h4>
                <p className="text-primary font-sans text-[6px] sm:text-sm font-bold uppercase mt-0.5 sm:mt-1 truncate">{story.achievement}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
