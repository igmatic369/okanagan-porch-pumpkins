import { motion } from "motion/react";
import { MapPin, Leaf, Smile, RefreshCw, Heart, Shield, Star, Truck, Home, ShoppingBag, Award, Sun, Zap, Clock, Gift } from "lucide-react";
import { useContent } from "../hooks/useContent";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  MapPin, Leaf, Smile, RefreshCw, Heart, Shield, Star, Truck, Home,
  ShoppingBag, Award, Sun, Zap, Clock, Gift,
};

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

export function WhyUs() {
  const content = useContent();
  const { why_choose_us } = content;

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
            data-content-key="why_choose_us.eyebrow"
          >
            {why_choose_us.eyebrow}
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
            data-content-key="why_choose_us.headline"
          >
            {why_choose_us.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-400 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
            data-content-key="why_choose_us.subtitle"
          >
            {why_choose_us.subtitle}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {why_choose_us.features.map((feature, i) => {
            const Icon = iconMap[feature.icon] || MapPin
            return (
              <motion.div
                key={i}
                initial={isPreview ? false : { opacity: 0, y: 30 }}
                whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
                viewport={isPreview ? undefined : { once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                data-reorderable="why_choose_us.features"
                data-reorder-index={i}
                className="relative group p-8 rounded-2xl bg-stone-800/60 hover:bg-stone-800 border border-stone-700 hover:border-orange-600/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-orange-600/20 flex items-center justify-center mb-5 group-hover:bg-orange-600/40 transition-colors">
                  <Icon className="text-orange-400" size={26} />
                </div>
                <h3
                  className="text-amber-50 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 600 }}
                  data-content-key={`why_choose_us.features.${i}.title`}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-stone-400 group-hover:text-stone-300 transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}
                  data-content-key={`why_choose_us.features.${i}.description`}
                >
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {isPreview && (
          <div className="flex justify-center mt-8">
            <button
              className="border-2 border-dashed border-stone-600 rounded-2xl px-8 py-4 text-stone-400 font-semibold hover:border-orange-400 hover:text-orange-400 hover:bg-stone-800 transition-all"
              onClick={() => window.parent.postMessage({ type: 'preview-add-item', arrayPath: 'why_choose_us.features' }, '*')}
            >
              + Add Feature
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
