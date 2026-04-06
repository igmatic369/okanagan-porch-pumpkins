import { motion } from "motion/react";
import { Link } from "react-router";
import { useContent } from "../hooks/useContent";

export function SeasonCTA() {
  const content = useContent();
  const { cta_banner } = content;

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${cta_banner.background_image})` }}
        data-content-key="cta_banner.background_image"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/75 to-stone-950/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-orange-400 font-semibold tracking-widest uppercase text-sm mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="cta_banner.eyebrow"
          >
            {cta_banner.eyebrow}
          </p>
          <h2
            className="text-amber-50 mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              textShadow: "0 2px 20px rgba(0,0,0,0.4)",
            }}
          >
            <span data-content-key="cta_banner.headline_line1">{cta_banner.headline_line1}</span>{" "}
            <span className="text-orange-400 italic" data-content-key="cta_banner.headline_highlight">{cta_banner.headline_highlight}</span>
            <br />
            <span data-content-key="cta_banner.headline_line2">{cta_banner.headline_line2}</span>
          </h2>
          <p
            className="text-stone-300 mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.75 }}
            data-content-key="cta_banner.subtitle"
          >
            {cta_banner.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-600/40 hover:-translate-y-1 inline-block"
              style={{ fontFamily: "'Lato', sans-serif" }}
              data-content-key="cta_banner.cta_primary"
            >
              {cta_banner.cta_primary}
            </Link>
            <Link
              to="/contact"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 inline-block"
              style={{ fontFamily: "'Lato', sans-serif" }}
              data-content-key="cta_banner.cta_secondary"
            >
              {cta_banner.cta_secondary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
