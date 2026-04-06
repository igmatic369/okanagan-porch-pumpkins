import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useContent } from "../hooks/useContent";

const heroImage = "https://images.unsplash.com/photo-1760800327755-0b680db1cb4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2lucyUyMG9uJTIwcG9yY2glMjBhdXR1bW4lMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc3NDczOTU0NXww&ixlib=rb-4.1.0&q=80&w=1080"

export function Hero() {
  const navigate = useNavigate();
  const content = useContent();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.hero.background_image || heroImage})` }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/70 via-stone-900/50 to-stone-950/80" />

      {/* Decorative Leaf Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-7xl rotate-12 select-none">🍂</div>
        <div className="absolute top-32 right-16 text-5xl -rotate-12 select-none">🍁</div>
        <div className="absolute bottom-40 left-20 text-6xl rotate-6 select-none">🍁</div>
        <div className="absolute bottom-32 right-24 text-4xl -rotate-6 select-none">🍂</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-orange-600/90 backdrop-blur-sm text-white px-5 py-2 rounded-full mb-8 border border-orange-400/30 shadow-lg"
        >
          <span className="text-sm font-semibold tracking-wider uppercase" style={{ fontFamily: "'Lato', sans-serif" }} data-content-key="hero.badge">
            {content.hero.badge}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-amber-50 mb-6"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          <span data-content-key="hero.headline_line1">{content.hero.headline_line1}</span>{" "}
          <span className="text-orange-400 italic" data-content-key="hero.headline_highlight">{content.hero.headline_highlight}</span>
          <br />
          <span data-content-key="hero.headline_line2">{content.hero.headline_line2}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-amber-100/90 mb-10 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Lato', sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: 1.7,
          }}
        >
          <span data-content-key="business.hero_description">{content.business.hero_description}</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/packages"
            className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-600/40 hover:-translate-y-1 inline-block"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="hero.cta_primary"
          >
            {content.hero.cta_primary}
          </Link>
          <Link
            to="/how-it-works"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 inline-block"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="hero.cta_secondary"
          >
            {content.hero.cta_secondary}
          </Link>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => navigate("/how-it-works")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-amber-200/60 hover:text-orange-400 transition-colors animate-bounce"
        aria-label="Learn more"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
