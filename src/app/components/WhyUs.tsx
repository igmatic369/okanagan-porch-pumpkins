import { motion } from "motion/react";
import { MapPin, Leaf, Smile, RefreshCw, Heart, Shield } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Proudly Local",
    description:
      "We're an Okanagan-based business through and through. Every pumpkin is sourced from local Okanagan farms, supporting our community and keeping your display fresh.",
  },
  {
    icon: Leaf,
    title: "Farm-Fresh Quality",
    description:
      "Our pumpkins are selected for size, colour, and quality. No grocery store pumpkins here — only the finest varieties hand-picked from local growers.",
  },
  {
    icon: Smile,
    title: "White-Glove Service",
    description:
      "We do all the work — delivery, styling, and pickup. Our team arrives at a scheduled time and creates a display you'll love. Just sit back and enjoy!",
  },
  {
    icon: RefreshCw,
    title: "End-of-Season Pickup",
    description:
      "When the season is over, we come back and remove everything. Composted responsibly — because we love the Okanagan as much as you do.",
  },
  {
    icon: Heart,
    title: "Customizable Displays",
    description:
      "Want something specific? We love a challenge! Tell us your vision and we'll create a custom arrangement that perfectly matches your home's style.",
  },
  {
    icon: Shield,
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind our work 100%. If you're not happy with your display, we'll make it right — no questions asked.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-orange-400 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-orange-600 translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 font-semibold tracking-widest uppercase text-sm mb-3"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            The Okanagan Difference
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-amber-50 mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            We're more than just a pumpkin delivery service — we're your local Okanagan fall specialists.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-orange-600/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-orange-600/20 flex items-center justify-center mb-5 group-hover:bg-orange-600/40 transition-colors">
                <reason.icon className="text-orange-400" size={26} />
              </div>
              <h3
                className="text-amber-50 mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600 }}
              >
                {reason.title}
              </h3>
              <p
                className="text-stone-400 group-hover:text-stone-300 transition-colors"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}