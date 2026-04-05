import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { Check, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useContent } from "../hooks/useContent";

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

export function PackageDetailPage() {
  const content = useContent();
  const { slug } = useParams<{ slug: string }>();
  const pkg = content.packages.find((p) => p.slug === slug);
  const pkgIndex = content.packages.findIndex((p) => p.slug === slug);
  const { package_detail } = content;

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
                data-content-key={`packages.${pkgIndex}.name`}
              >
                {pkg.name}
              </h1>
              <p className="text-orange-300 mt-1" style={{ fontFamily: "'Lato', sans-serif" }} data-content-key={`packages.${pkgIndex}.tagline`}>
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
                  data-content-key="package_detail.section_about"
                >
                  {package_detail.section_about}
                </h2>
                <p
                  className="text-stone-600 mb-6"
                  style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.75, fontSize: "1rem" }}
                  data-content-key={`packages.${pkgIndex}.description`}
                >
                  {pkg.description}
                </p>

                <h3
                  className="text-stone-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700 }}
                  data-content-key="package_detail.section_includes"
                >
                  {package_detail.section_includes}
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={item} className="flex items-start gap-3" data-reorderable={`packages.${pkgIndex}.includes`} data-reorder-index={i}>
                      <Check size={16} className="mt-0.5 flex-shrink-0 text-orange-500" />
                      <span
                        className="text-stone-700"
                        style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem" }}
                        data-content-key={`packages.${pkgIndex}.includes.${i}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <h3
                  className="text-stone-900 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700 }}
                  data-content-key="package_detail.section_breakdown"
                >
                  {package_detail.section_breakdown}
                </h3>
                <ul className="space-y-2 mb-6">
                  {pkg.pumpkin_breakdown.map((item, i) => (
                    <li key={i} className="flex items-start gap-2" data-reorderable={`packages.${pkgIndex}.pumpkin_breakdown`} data-reorder-index={i}>
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
                        {item.quantity > 0 && (
                          <><span data-content-key={`packages.${pkgIndex}.pumpkin_breakdown.${i}.quantity`}>{item.quantity}</span>{" × "}</>
                        )}
                        <span data-content-key={`packages.${pkgIndex}.pumpkin_breakdown.${i}.type`}>{item.type}</span>
                      </span>
                    </li>
                  ))}
                </ul>

                {pkg.note && (
                  <div
                    className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    💡 <span data-content-key={`packages.${pkgIndex}.note`}>{pkg.note}</span>
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
                    data-content-key="package_detail.price_label"
                  >
                    {package_detail.price_label}
                  </p>
                  <p
                    className="text-orange-600"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2.5rem",
                      fontWeight: 700,
                    }}
                    data-content-key={`packages.${pkgIndex}.price`}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className="text-stone-400 text-xs mt-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    data-content-key="package_detail.price_note"
                  >
                    {package_detail.price_note}
                  </p>
                </div>

                {/* Best For */}
                <div className="mb-6">
                  <h3
                    className="text-stone-900 mb-2"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700 }}
                    data-content-key="package_detail.best_for_label"
                  >
                    {package_detail.best_for_label}
                  </h3>
                  <p
                    className="text-stone-600 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
                    data-content-key={`packages.${pkgIndex}.best_for`}
                  >
                    {pkg.best_for}
                  </p>
                </div>

                {/* Delivery Info */}
                <div className="bg-orange-600/10 border border-orange-200 rounded-2xl p-5 mb-6">
                  <p
                    className="text-orange-700 text-sm font-semibold mb-2"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    data-content-key="package_detail.delivery_label"
                  >
                    🎃 {package_detail.delivery_label}
                  </p>
                  <p
                    className="text-stone-700 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.6 }}
                    data-content-key="package_detail.delivery_text"
                  >
                    {package_detail.delivery_text}
                  </p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                  <h3
                    className="text-stone-900"
                    style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700 }}
                    data-content-key="package_detail.section_faq"
                  >
                    {package_detail.section_faq}
                  </h3>
                  {package_detail.mini_faq.map((item, i) => (
                    <div
                      key={i}
                      className="relative border-b border-stone-100 pb-3"
                      data-reorderable="package_detail.mini_faq"
                      data-reorder-index={i}
                    >
                      <p
                        className="text-stone-800 text-sm font-semibold mb-1"
                        style={{ fontFamily: "'Lato', sans-serif" }}
                        data-content-key={`package_detail.mini_faq.${i}.q`}
                      >
                        {item.q}
                      </p>
                      <p
                        className="text-stone-500 text-sm"
                        style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.6 }}
                        data-content-key={`package_detail.mini_faq.${i}.a`}
                      >
                        {item.a}
                      </p>
                    </div>
                  ))}
                  {isPreview && package_detail.mini_faq.length < 5 && (
                    <button
                      className="mt-3 text-stone-400 text-sm hover:text-orange-500 border border-dashed border-stone-200 rounded-lg px-3 py-2 w-full transition-all hover:border-orange-300 hover:bg-orange-50"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                      onClick={() => window.parent.postMessage({ type: 'preview-add-item', arrayPath: 'package_detail.mini_faq' }, '*')}
                    >
                      + Add Question
                    </button>
                  )}
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
                data-content-key="package_detail.cta_text"
              >
                {package_detail.cta_text}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-orange-500 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ fontFamily: "'Lato', sans-serif" }}
                data-content-key="package_detail.cta_button"
              >
                {package_detail.cta_button}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
