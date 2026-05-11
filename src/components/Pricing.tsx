import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$399",
      description: "Basic access for the self-guided lifter.",
      features: ["Full Gym Floor Access", "Locker Room Access", "1 Free Assessment", "Open Hours Access"],
      isPopular: false,
    },
    {
      name: "Pro",
      price: "$699",
      description: "Everything you need to transform completely.",
      features: ["All Starter Features", "Access to All Classes", "Dedicated Locker", "Monthly Body Composition", "Free Energy Drink/Day"],
      isPopular: true,
    },
    {
      name: "Elite",
      price: "$999",
      description: "For those who want zero compromises.",
      features: ["All Pro Features", "Dedicated Personal Trainer", "Custom Nutrition Plan", "Recovery Area Access", "Priority Class Booking"],
      isPopular: false,
    }
  ];

  return (
    <section id="pricing" className="bg-transparent py-24 sm:py-32 relative z-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter">
            Invest in <span className="text-primary italic">Yourself</span>
          </h2>
          <p className="mt-4 text-zinc-400 font-sans text-sm max-w-xl mx-auto leading-relaxed">
            Choose your tier. Commit to the grind. No contracts, no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${plan.isPopular ? 'bg-white text-black lg:scale-105 z-10' : 'bg-zinc-900 border border-white/5 text-white'} p-8 flex flex-col h-full`}
            >
              {plan.isPopular && (
                <div className="text-black text-[10px] font-black uppercase tracking-widest mb-2">
                  Most Popular Plan
                </div>
              )}
              {!plan.isPopular && (
                <div className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2">
                  Membership Tier
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-4xl font-black uppercase leading-none mb-2 tracking-tighter ${plan.isPopular ? 'text-black' : 'text-white'}`}>{plan.name}</h3>
                <p className={`text-xs ${plan.isPopular ? 'text-zinc-500' : 'text-zinc-400'} h-8`}>{plan.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className={`flex items-start text-sm ${plan.isPopular ? 'text-black' : 'text-zinc-300'}`}>
                      <Check className={`w-4 h-4 mr-3 shrink-0 ${plan.isPopular ? 'text-black' : 'text-primary'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className={`text-5xl font-black tracking-tighter ${plan.isPopular ? 'text-black' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`font-bold uppercase text-[10px] tracking-widest ${plan.isPopular ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    / Month
                  </span>
                </div>

                <a 
                  href="#contact" 
                  className={`block w-full text-center py-4 font-black uppercase text-sm tracking-tighter transition-all duration-300 ${plan.isPopular ? 'bg-[#0D0D0D] text-primary hover:bg-black hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.15)]' : 'border border-white/20 text-white hover:bg-white/10'}`}
                >
                  Select Plan
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
