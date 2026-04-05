import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useContent } from "../hooks/useContent";

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

export function FAQ() {
  const content = useContent();
  const { faq } = content;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-600 font-semibold tracking-widest uppercase text-sm mb-3"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="faq.eyebrow"
          >
            {faq.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-stone-900 mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
            data-content-key="faq.headline"
          >
            {faq.headline}
          </motion.h2>
          <motion.p
            initial={isPreview ? false : { opacity: 0, y: 20 }}
            whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
            viewport={isPreview ? undefined : { once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
            data-content-key="faq.subtitle"
          >
            {faq.subtitle}
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faq.questions.map((item, i) => (
            <motion.div
              key={i}
              initial={isPreview ? false : { opacity: 0, y: 20 }}
              whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
              viewport={isPreview ? undefined : { once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              data-reorderable="faq.questions"
              data-reorder-index={i}
              className={`relative border rounded-2xl overflow-hidden transition-all duration-200 ${
                openIndex === i
                  ? "border-orange-400 shadow-md"
                  : "border-stone-200 hover:border-orange-300"
              }`}
            >
              <button
                className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 bg-white hover:bg-orange-50/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span
                  className="text-stone-900 pr-4"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                  data-content-key={`faq.questions.${i}.q`}
                >
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-orange-500 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 bg-orange-50/30 border-t border-orange-100">
                  <p
                    className="text-stone-600 pt-4"
                    style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.97rem", lineHeight: 1.75 }}
                    data-content-key={`faq.questions.${i}.a`}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {isPreview && (
          <div className="flex justify-center mt-6">
            <button
              className="border-2 border-dashed border-stone-300 rounded-2xl px-8 py-4 text-stone-400 font-semibold hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
              onClick={() => window.parent.postMessage({ type: 'preview-add-item', arrayPath: 'faq.questions' }, '*')}
            >
              + Add Question
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
