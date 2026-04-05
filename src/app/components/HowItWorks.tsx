import { motion } from "motion/react";
import {
  ShoppingBag, Truck, Home, Recycle,
  MapPin, Leaf, Smile, Heart,
  Shield, Star, Sun, Moon,
  Cloud, Zap, Award, Gift,
  Camera, Music, Coffee, Book,
  Briefcase, Clock, Phone, Mail, Globe
} from "lucide-react";
import { Link } from "react-router";
import { useContent } from "../hooks/useContent";

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  ShoppingBag, Truck, Home, Recycle,
  MapPin, Leaf, Smile, Heart,
  Shield, Star, Sun, Moon,
  Cloud, Zap, Award, Gift,
  Camera, Music, Coffee, Book,
  Briefcase, Clock, Phone, Mail, Globe,
}

const stepColors = [
  { color: "bg-amber-100", iconColor: "text-orange-600" },
  { color: "bg-orange-100", iconColor: "text-orange-700" },
  { color: "bg-red-50",    iconColor: "text-red-700" },
  { color: "bg-stone-100", iconColor: "text-stone-700" },
];

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

export function HowItWorks() {
  const content = useContent();
  const { how_it_works } = content;

  return (
    <section id="how-it-works" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={isPreview ? false : { opacity: 0, y: 10 }}
            whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
            viewport={isPreview ? undefined : { once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-600 font-semibold tracking-widest uppercase text-sm mb-3"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="how_it_works.eyebrow"
          >
            {how_it_works.eyebrow}
          </motion.p>
          <motion.h2
            initial={isPreview ? false : { opacity: 0, y: 20 }}
            whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
            viewport={isPreview ? undefined : { once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-stone-900 mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
            data-content-key="how_it_works.headline"
          >
            {how_it_works.headline}
          </motion.h2>
          <motion.p
            initial={isPreview ? false : { opacity: 0, y: 20 }}
            whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
            viewport={isPreview ? undefined : { once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
            data-content-key="how_it_works.subtitle"
          >
            {how_it_works.subtitle}
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {how_it_works.steps.map((step, i) => {
            const Icon = iconMap[step.icon] || ShoppingBag
            const { color, iconColor } = stepColors[i % stepColors.length]
            return (
              <motion.div
                key={i}
                initial={isPreview ? false : { opacity: 0, y: 40 }}
                whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
                viewport={isPreview ? undefined : { once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative"
                data-reorderable="how_it_works.steps"
                data-reorder-index={i}
                data-drag-handle-only
              >
                {/* Connector line (desktop) */}
                {i < how_it_works.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%-16px)] w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-100 z-0" />
                )}

                <div className="relative z-10 flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div
                    className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300 border border-orange-200`}
                  >
                    <Icon className={iconColor} size={32} />
                  </div>

                  {/* Step Number */}
                  <div
                    className="text-orange-300 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em" }}
                  >
                    STEP <span data-content-key={`how_it_works.steps.${i}.number`}>{step.number}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-stone-900 mb-3"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                    data-content-key={`how_it_works.steps.${i}.title`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-stone-600"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}
                    data-content-key={`how_it_works.steps.${i}.description`}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {isPreview && (
          <div className="flex justify-center mt-8">
            <button
              className="border-2 border-dashed border-stone-300 rounded-2xl px-8 py-4 text-stone-400 font-semibold hover:border-orange-400 hover:text-orange-500 hover:bg-orange-100 transition-all"
              onClick={() => window.parent.postMessage({ type: 'preview-add-item', arrayPath: 'how_it_works.steps' }, '*')}
            >
              + Add Step
            </button>
          </div>
        )}

        {/* Delivery Window Info */}
        <motion.div
          initial={isPreview ? false : { opacity: 0, y: 20 }}
          whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
          viewport={isPreview ? undefined : { once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <p
            className="text-orange-700 font-semibold mb-2"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="how_it_works.delivery_banner_eyebrow"
          >
            {how_it_works.delivery_banner_eyebrow}
          </p>
          <p
            className="text-stone-600"
            style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
            data-content-key="how_it_works.delivery_banner_text"
          >
            {how_it_works.delivery_banner_text}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={isPreview ? false : { opacity: 0, y: 20 }}
          whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
          viewport={isPreview ? undefined : { once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/packages"
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-1"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="how_it_works.cta"
          >
            {how_it_works.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
