import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-transparent pt-24 pb-0 relative z-20 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 border-t border-white/5 pt-20">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">
              No More <span className="text-primary italic">Waiting</span>
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-zinc-900 border border-white/5 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm rounded-xl"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-zinc-900 border border-white/5 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm rounded-xl"
                    placeholder="e.g. 03XX-XXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-zinc-900 border border-white/5 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm rounded-xl"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-zinc-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Message / Goals</label>
                <textarea 
                  rows={4}
                  className="w-full bg-zinc-900 border border-white/5 text-white px-4 py-3 focus:outline-none focus:border-primary transition-colors text-sm resize-none rounded-xl"
                  placeholder="Tell us what you want to achieve..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary text-black px-8 py-4 text-sm font-black uppercase tracking-tighter hover:bg-white transition-colors duration-300 inline-block text-center rounded-full shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info Block */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8">
                Head<span className="text-primary italic">quarters</span>
              </h2>
              
              <div className="space-y-4 sm:space-y-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6 rounded-xl sm:rounded-2xl shadow-lg">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[12px] sm:text-xl uppercase mb-0.5 sm:mb-1 tracking-tighter">Location</h4>
                    <p className="text-zinc-400 text-[10px] sm:text-sm">Downtown<br/>Los Angeles, California</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6 rounded-xl sm:rounded-2xl shadow-lg">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[12px] sm:text-xl uppercase mb-0.5 sm:mb-1 tracking-tighter">Call Us</h4>
                    <p className="text-zinc-400 text-[10px] sm:text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 bg-zinc-900 border border-white/5 flex items-center justify-center flex-shrink-0 mr-4 sm:mr-6 rounded-xl sm:rounded-2xl shadow-lg">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[12px] sm:text-xl uppercase mb-0.5 sm:mb-1 tracking-tighter">Operating Hours</h4>
                    <p className="text-zinc-400 text-[10px] sm:text-sm">Morning: 5:00 AM - 2:00 PM<br/>Evening: 5:00 PM - 12:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Bottom Footer Strip */}
      <div className="bg-zinc-950 px-8 py-4 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest font-bold border-t border-white/5 w-full">
        <div className="mb-4 md:mb-0">📍 Los Angeles, CA</div>
        <div className="flex space-x-8 mb-4 md:mb-0">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">Facebook</a>
          <a href="#" className="hover:text-primary transition-colors">YouTube</a>
        </div>
        <div>© {new Date().getFullYear()} Blackbox Fitness. No Excuses.</div>
      </div>
    </footer>
  );
}
