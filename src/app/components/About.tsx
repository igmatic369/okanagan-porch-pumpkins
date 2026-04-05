import { motion } from "motion/react";
import { Link } from "react-router";
import { useContent } from "../hooks/useContent";

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

const farmImage = "https://images.unsplash.com/photo-1603055971132-fbf2b0c2cd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwcGF0Y2glMjBmYXJtJTIwcGlja2luZ3xlbnwxfHx8fDE3NzQ3Mzk1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const okanaganImage = "https://images.unsplash.com/photo-1732159622597-aefade3499a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxva2FuYWdhbiUyMHZhbGxleSUyMGJyaXRpc2glMjBjb2x1bWJpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3Mzk1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function About() {
  const content = useContent();
  const { business, service_areas, about } = content;
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-orange-600 font-semibold tracking-widest uppercase text-sm mb-3"
              style={{ fontFamily: "'Lato', sans-serif" }}
              data-content-key="about.eyebrow"
            >
              {about.eyebrow}
            </p>
            <h2
              className="text-stone-900 mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              <span data-content-key="about.headline_line1">{about.headline_line1}</span>{" "}
              <span className="text-orange-600 italic" data-content-key="about.headline_highlight">{about.headline_highlight}</span>
            </h2>
            <div
              className="space-y-4 text-stone-600"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.8 }}
            >
              {business.about_paragraphs.map((para, i) => (
                <p key={i} data-content-key={`business.about_paragraphs.${i}`}>{para}</p>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5"
                style={{ fontFamily: "'Lato', sans-serif" }}
                data-content-key="about.cta_button"
              >
                {about.cta_button}
              </Link>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[450px]">
              <img
                src={farmImage}
                alt="Local pumpkin farm"
                className="absolute top-0 right-0 w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl"
              />
              <img
                src={okanaganImage}
                alt="Okanagan Valley"
                className="absolute bottom-0 left-0 w-3/5 h-3/5 object-cover rounded-2xl shadow-xl border-4 border-white"
              />
              {/* Badge */}
              <div
                className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                style={{ fontFamily: "'Lato', sans-serif" }}
                data-content-key="about.locally_sourced"
              >
                {about.locally_sourced}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Service Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-amber-50 rounded-3xl p-10 text-center"
        >
          <p
            className="text-orange-600 font-semibold tracking-widest uppercase text-sm mb-3"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="about.service_area_eyebrow"
          >
            {about.service_area_eyebrow}
          </p>
          <h3
            className="text-stone-900 mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 700,
            }}
            data-content-key="about.service_area_heading"
          >
            {about.service_area_heading}
          </h3>
          <p
            className="text-stone-600 mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
            data-content-key="about.service_area_subtitle"
          >
            {about.service_area_subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {service_areas.map((city, i) => (
              <div
                key={`${city}-${i}`}
                className="relative"
                data-reorderable="service_areas"
                data-reorder-index={i}
              >
                <span
                  className="block bg-white border border-orange-200 text-stone-700 px-5 py-2.5 rounded-full text-sm shadow-sm hover:border-orange-400 hover:text-orange-600 transition-colors cursor-default"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 500 }}
                >
                  📍 <span data-content-key={`service_areas.${i}`}>{city}</span>
                </span>
              </div>
            ))}
            {isPreview && (
              <button
                className="border-2 border-dashed border-orange-200 text-orange-400 px-5 py-2.5 rounded-full text-sm font-semibold hover:border-orange-400 hover:bg-orange-50 transition-all"
                style={{ fontFamily: "'Lato', sans-serif" }}
                onClick={() => window.parent.postMessage({ type: 'preview-add-item', arrayPath: 'service_areas' }, '*')}
              >
                + Add City
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
