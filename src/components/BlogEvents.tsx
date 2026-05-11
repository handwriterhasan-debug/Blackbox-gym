import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogEvents() {
  const blogs = [
    {
      title: "Nutrition Guide: Bulking In LA",
      date: "Nov 12, 2026",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop"
    },
    {
      title: "Why Compound Lifts Are Non-Negotiable",
      date: "Oct 28, 2026",
      image: "https://images.unsplash.com/photo-1517964603305-11c0f6f66012?q=80&w=400&auto=format&fit=crop"
    }
  ];

  const events = [
    { title: "Los Angeles Powerlifting Meet", date: "Dec 15", time: "09:00 AM" },
    { title: "Nutrition Seminar with Dr. Evans", date: "Dec 22", time: "05:00 PM" },
    { title: "Blackbox Anniversary Party", date: "Jan 10", time: "08:00 PM" }
  ];

  return (
    <section className="bg-[#111111] py-24 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Blog Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display text-white uppercase tracking-wide mb-8">
              Recent <span className="text-primary">Knowledge</span>
            </h2>
            
            <div className="space-y-2 sm:space-y-6">
              {blogs.map((blog, idx) => (
                <div key={idx} className="flex flex-row gap-2 sm:gap-4 group cursor-pointer border border-zinc-800 bg-black p-2 sm:p-4 hover:border-primary/50 transition-colors rounded-xl shadow-lg">
                  <div className="w-12 h-12 sm:w-32 sm:h-24 flex-shrink-0 overflow-hidden bg-zinc-900 border-none rounded-lg">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-col justify-center overflow-hidden">
                    <span className="text-primary font-sans text-[8px] sm:text-xs uppercase tracking-widest font-bold mb-0.5 sm:mb-1">{blog.date}</span>
                    <h3 className="text-white font-display text-[10px] sm:text-xl uppercase group-hover:text-primary transition-colors truncate">{blog.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#" className="inline-flex items-center text-gray-400 font-sans uppercase font-bold text-sm tracking-widest hover:text-white transition-colors mt-6">
              View All Articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>

          {/* Events Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display text-white uppercase tracking-wide mb-8">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            
            <div className="bg-black border border-zinc-800 divide-y divide-zinc-800 rounded-2xl shadow-xl overflow-hidden">
              {events.map((event, idx) => (
                <div key={idx} className="p-2 sm:p-6 flex items-center justify-between group hover:bg-[#151515] transition-colors cursor-pointer">
                  <div className="flex items-center gap-2 sm:gap-6 w-full">
                    <div className="text-center w-10 sm:w-16 flex-shrink-0">
                      <div className="text-primary font-sans text-[8px] sm:text-xs uppercase font-bold tracking-widest">
                        {event.date.split(' ')[0]}
                      </div>
                      <div className="text-white font-display text-sm sm:text-2xl">
                        {event.date.split(' ')[1]}
                      </div>
                    </div>
                    <div className="overflow-hidden w-full">
                      <h3 className="text-white font-display text-[10px] sm:text-xl uppercase group-hover:text-primary transition-colors leading-tight truncate">{event.title}</h3>
                      <div className="flex items-center text-gray-500 font-sans text-[8px] sm:text-sm mt-0.5 sm:mt-1">
                        <Calendar className="w-2 h-2 sm:w-3 sm:h-3 mr-1 sm:mr-2 flex-shrink-0" /> <span className="truncate">{event.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
