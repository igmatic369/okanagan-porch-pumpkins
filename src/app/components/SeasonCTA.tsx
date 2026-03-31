import { motion } from "motion/react";
import { Link } from "react-router";

const bgImage = "https://images.unsplash.com/photo-1603055971132-fbf2b0c2cd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwcGF0Y2glMjBmYXJtJTIwcGlja2luZ3xlbnwxfHx8fDE3NzQ3Mzk1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function SeasonCTA() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
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
          >
            🍁 Limited Delivery Spots Available
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
            Don't Miss the Most Beautiful{" "}
            <span className="text-orange-400 italic">Fall Season</span>
            <br />
            on Your Block
          </h2>
          <p
            className="text-stone-300 mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.75 }}
          >
            Secure your spot for Fall 2026 and be the talk of the neighbourhood all season long. Delivery windows run September 21st through October 21st.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-orange-600/40 hover:-translate-y-1 inline-block"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              🎃 Shop Packages Now
            </Link>
            <Link
              to="/contact"
              className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:-translate-y-1 inline-block"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
