import { useParams, Link, Navigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useContent } from "../hooks/useContent";

export function AddOnDetailPage() {
  const content = useContent();
  const { slug } = useParams<{ slug: string }>();
  const addon = content.addons.find((a) => a.slug === slug);
  const addonIndex = content.addons.findIndex((a) => a.slug === slug);

  if (!addon) return <Navigate to="/packages" replace />;

  return (
    <section className="py-20 bg-stone-50 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-64 overflow-hidden"
          >
            <ImageWithFallback
              src={addon.image}
              alt={addon.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <span
              className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold ${
                addon.restricted ? "bg-amber-500 text-white" : "bg-stone-800/80 text-white"
              }`}
              style={{ fontFamily: "'Lato', sans-serif" }}
              data-content-key={`addons.${addonIndex}.tag`}
            >
              {addon.tag}
            </span>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1
                className="text-stone-900"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
                data-content-key={`addons.${addonIndex}.name`}
              >
                {addon.name}
              </h1>
              <div className="text-right shrink-0">
                <p
                  className="text-orange-600"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700 }}
                  data-content-key={`addons.${addonIndex}.price`}
                >
                  {addon.price}
                </p>
                <p
                  className="text-stone-400 text-xs"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  CAD
                </p>
              </div>
            </div>

            <p
              className="text-stone-600 mb-8"
              style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.75, fontSize: "1rem" }}
              data-content-key={`addons.${addonIndex}.description`}
            >
              {addon.description}
            </p>

            {addon.restricted && (
              <div
                className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-700"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                ⚠️ This add-on is only available with <strong>Package #1 — The Doorstep Drop</strong>.
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                className="flex-1 text-center bg-orange-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-orange-500 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Add to My Order
              </Link>
              <Link
                to="/packages"
                className="flex-1 text-center bg-stone-100 text-stone-700 px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-stone-200 transition-all duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Browse All Packages
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
