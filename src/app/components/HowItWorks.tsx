import { motion } from "motion/react";
import { ShoppingBag, Truck, Home, Recycle } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    icon: ShoppingBag,
    step: "01",
    title: "Choose Your Package",
    description:
      "Browse our curated seasonal packages — from cozy starter sets to grand harvest displays. Pick the size and style that fits your home and budget.",
    color: "bg-amber-100",
    iconColor: "text-orange-600",
  },
  {
    icon: Truck,
    step: "02",
    title: "We Deliver & Set Up",
    description:
      "Our team personally delivers your pumpkins and arranges them on your porch. We handle all the heavy lifting, styling, and placement — you don't lift a finger!",
    color: "bg-orange-100",
    iconColor: "text-orange-700",
  },
  {
    icon: Home,
    step: "03",
    title: "Enjoy the Season",
    description:
      "Sit back and soak in all the fall feels! Your porch becomes the envy of the neighbourhood from late September right through to Halloween.",
    color: "bg-red-50",
    iconColor: "text-red-700",
  },
  {
    icon: Recycle,
    step: "04",
    title: "We Pick It All Up",
    description:
      "When the season winds down, we come back in the first two weeks of November and collect everything. No mess, no fuss — just a perfect fall experience from start to finish.",
    color: "bg-stone-100",
    iconColor: "text-stone-700",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Simple & Stress-Free
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
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Getting a beautifully decorated porch has never been easier. Here's everything you need to know.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-16px)] w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-100 z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center group">
                {/* Icon Circle */}
                <div
                  className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300 border border-orange-200`}
                >
                  <step.icon className={`${step.iconColor}`} size={32} />
                </div>

                {/* Step Number */}
                <div
                  className="text-orange-300 mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  STEP {step.step}
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
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="text-stone-600"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.7 }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery Window Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <p
            className="text-orange-700 font-semibold mb-2"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            📅 Fall 2026 Delivery Window
          </p>
          <p
            className="text-stone-600"
            style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
          >
            Deliveries run from <strong>September 21st to October 21st, 2026</strong>. End-of-season pickup is scheduled for the <strong>first two weeks of November</strong>. Book early — delivery spots fill up fast!
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            to="/packages"
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-1"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Get Started — View Packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
