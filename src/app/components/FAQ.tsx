import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

const faqs = [
  {
    q: "When do you start delivering?",
    a: "We begin deliveries on September 21st and continue through to October 21st. Peak delivery weeks (late September / early October) are our busiest, so we highly recommend booking early to secure your preferred delivery window!",
  },
  {
    q: "What areas of the Okanagan do you serve?",
    a: "We currently deliver to Kelowna, West Kelowna, Lake Country, Peachland, Summerland, Penticton, Vernon, and Coldstream. If your area isn't listed, please reach out — we may be able to accommodate you!",
  },
  {
    q: "Do you pick everything up at the end of the season?",
    a: "Yes! End-of-season pickup is included in every package. We schedule pickups during the first two weeks of November. We'll come by and collect all pumpkins, gourds, corn stalks, and any other materials we provided. Everything is composted responsibly. You don't have to do a thing!",
  },
  {
    q: "How do I place an order?",
    a: "Simply fill out our order form on the Contact page, choose your package, select a delivery window, and we'll confirm everything via email within 24 hours. Payment is collected at the time of booking.",
  },
  {
    q: "Are your pumpkins locally grown?",
    a: "Absolutely! We partner exclusively with local Okanagan farms. We take great pride in supporting our local agricultural community. Keeping it local means fresher pumpkins and a smaller carbon footprint!",
  },
  {
    q: "Can I customize my arrangement?",
    a: "Yes! If you have a specific vision in mind — particular colours, styles, or arrangement preferences — just let us know in the order notes or contact us directly. We love creating custom displays and will do our best to accommodate your vision.",
  },
  {
    q: "What if a pumpkin goes bad or gets damaged?",
    a: "While pumpkins are natural products and will eventually age, we use only the freshest, highest-quality pumpkins to ensure they last throughout the season. If a pumpkin deteriorates unusually quickly within the first 2 weeks, contact us and we'll replace it at no charge.",
  },
  {
    q: "What if I need to cancel my order?",
    a: "We understand that plans change! Cancellations made more than 7 days before your scheduled delivery receive a full refund. Cancellations within 7 days are eligible for a credit towards next year's booking.",
  },
  {
    q: "Do you offer gift cards or gifting options?",
    a: "What a thoughtful idea! Yes, we offer gift cards that can be purchased in any denomination. Give the gift of a stunning fall porch to someone you love! Contact us at hello@okanaganporchpumpkins.ca to purchase a gift card.",
  },
  {
    q: "Do you set up the display, or do I have to arrange it myself?",
    a: "We do everything! Our team delivers and professionally arranges your display right on your porch, steps, or entryway. You don't lift a finger. We style it beautifully so you can immediately enjoy the season.",
  },
];

export function FAQ() {
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
          >
            Got Questions?
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
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            Everything you need to know before you book. Don't see your question?{" "}
            <Link to="/contact" className="text-orange-600 hover:underline">
              Just ask us!
            </Link>
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
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
                >
                  {faq.q}
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
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
