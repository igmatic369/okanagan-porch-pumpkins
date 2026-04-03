import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { Check, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useContent } from "../hooks/useContent";

export function PackageDetailPage() {
  const content = useContent();
  const { slug } = useParams<{ slug: string }>();
  const pkg = content.packages.find((p) => p.slug === slug);

  if (!pkg) return <Navigate to="/packages" replace />;

  return (
    <section className="py-20 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-600 transition-colors text-sm"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <ArrowLeft size={16} />
            Back to Packages
          </Link>
        </motion.div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-72 sm:h-96 overflow-hidden"
          >
            <ImageWithFallback
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <div
                className="text-white/70 text-sm mb-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Package #{pkg.number}
              </div>
              <h1
                className="text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {pkg.name}
              </h1>
              <p className="text-orange-300 mt-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                {pkg.tagline}
              </p>
            </div>
            {pkg.badge && (
              <div
                className={`absolute top-5 right-5 px-3 py-1.5 rounded-full text-xs font-bold ${
                  pkg.highlight ? "bg-orange-500 text-white" : "bg-stone-800 text-white"
                }`}
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                {pkg.badge}
              </div>
            )}
          </motion.div>

          {/* Content */}
          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left: Description + Includes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2
                  className="text-stone-900 mb-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                  }}
                >
                  About This Package
                </h2>
                <p
                  className="text-stone-600 mb-6"
                  style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.75, fontSize: "1rem" }}
                >
                  {pkg.description}
                </p>

                <h3
                  className="text-stone-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700 }}
                >
                  What's Included
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-orange-500" />
                      <span
                        className="text-stone-700"
                        style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3
                  className="text-stone-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700 }}
                >
                  Pumpkin Breakdown
                </h3>
                <ul className="space-y-2 mb-6">
                  {pkg.pumpkin_breakdown.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="text-orange-500 mt-0.5 flex-shrink-0 text-sm font-bold"
                        style={{ fontFamily: "'Lato', sans-serif", minWidth: "1rem" }}
                      >
                        {item.quantity > 0 ? "×" : "•"}
                      </span>
                      <span
                        className="text-stone-600 text-sm"
                        style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.6 }}
                      >
                        {item.quantity > 0 ? `${item.quantity} × ${item.type}` : item.type}
                      </span>
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <div
                    className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    💡 {pkg.note}
                  </div>
                )}
              </motion.div>

              {/* Right: Price, Best For, Delivery, FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {/* Price */}
                <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mb-6 text-center">
                  <p
                    className="text-stone-500 text-sm mb-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    Package Price
                  </p>
                  <p
                    className="text-orange-600"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className="text-stone-400 text-xs mt-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    CAD · taxes may apply
                  </p>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h3
                    className="text-stone-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700 }}
                  >
                    Best For
                  </h3>
                  <p
                    className="text-stone-600 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
                  >
                    {pkg.best_for}
                  </p>
                </div>

                {/* Delivery Info */}
                <div className="bg-orange-600/10 border border-orange-200 rounded-2xl p-5 mb-6">
                  <p
                    className="text-orange-700 text-sm font-semibold mb-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    🎃 Delivery Window
                  </p>
                  <p
                    className="text-stone-700 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.6 }}
                  >
                    Deliveries run <strong data-content-key="season.delivery_range">{content.season.delivery_range}</strong>. End-of-season
                    pickup is available in the{" "}
                    <strong data-content-key="season.pickup_window">{content.season.pickup_window}</strong> (add-on).
                  </p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                  <h3
                    className="text-stone-900"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700 }}
                  >
                    Common Questions
                  </h3>
                  {[
                    {
                      q: "Can I customise the pumpkin colours?",
                      a: "Yes! Let us know your colour preferences when booking and we'll do our best to accommodate.",
                    },
                    {
                      q: "What if I need to change my delivery window?",
                      a: "Contact us as soon as possible. We'll accommodate changes subject to availability.",
                    },
                    {
                      q: "Are add-ons included in this package?",
                      a: "Add-ons are purchased separately. Visit the Packages page to browse available extras.",
                    },
                  ].map((item) => (
                    <div key={item.q} className="border-b border-stone-100 pb-3">
                      <p
                        className="text-stone-800 text-sm font-semibold mb-1"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {item.q}
                      </p>
                      <p
                        className="text-stone-500 text-sm"
                        style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.6 }}
                      >
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-stone-100 text-center"
            >
              <p
                className="text-stone-500 mb-4"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
              >
                Ready to bring the fall magic to your porch?
              </p>
              <Link
                to="/contact"
                className="inline-block bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-orange-500 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Book This Package
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
