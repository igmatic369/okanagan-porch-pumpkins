import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Kelowna, BC",
    rating: 5,
    text: "Absolutely obsessed with my porch display! The team was professional, fast, and arranged everything so beautifully. My neighbours keep stopping to take photos. I will 100% be ordering again next year — and possibly upgrading to the Grand Harvest!",
    package: "Bountiful Package",
    initials: "SM",
    color: "bg-orange-500",
  },
  {
    name: "Dave & Linda T.",
    location: "West Kelowna, BC",
    rating: 5,
    text: "We've been decorating our own porch for 15 years and always dreaded hauling pumpkins. Okanagan Porch Pumpkins has completely changed the game for us. The delivery team was friendly, on time, and our display was stunning. Worth every penny!",
    package: "Harvest Package",
    initials: "DL",
    color: "bg-amber-600",
  },
  {
    name: "Jessica K.",
    location: "Lake Country, BC",
    rating: 5,
    text: "As a busy mom of three, I never had time to put together a proper fall display. This year was different! The pumpkins are GORGEOUS and so fresh. The kids were thrilled and I finally have the porch of my dreams. Already told all my mom friends!",
    package: "Harvest Package",
    initials: "JK",
    color: "bg-red-700",
  },
  {
    name: "Mark R.",
    location: "Penticton, BC",
    rating: 5,
    text: "I was skeptical at first but my wife convinced me to try the Seedling package. Now I wish we had ordered the Bountiful! The quality of the pumpkins was amazing — way better than anything at the grocery store. Already booked for next year.",
    package: "Seedling Package",
    initials: "MR",
    color: "bg-stone-700",
  },
  {
    name: "Amanda P.",
    location: "Summerland, BC",
    rating: 5,
    text: "The end-of-season pickup is what really sold me. No rot, no mess, no schlepping heavy pumpkins to the compost bin. They just take care of everything. The display lasted all the way through Halloween and still looked great!",
    package: "Grand Harvest Package",
    initials: "AP",
    color: "bg-orange-700",
  },
  {
    name: "The Chen Family",
    location: "Vernon, BC",
    rating: 5,
    text: "We ordered a custom arrangement with specific colours to match our house. The team absolutely nailed it! They were so thoughtful and creative. Our display was featured on a local Facebook group and got hundreds of likes. Incredible service!",
    package: "Custom Display",
    initials: "CF",
    color: "bg-amber-700",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-stone-50">
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
            Happy Customers
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
            What Our Customers Say
          </motion.h2>
          {/* Stars summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2"
          >
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={22} className="text-orange-500 fill-orange-500" />
            ))}
            <span
              className="text-stone-600 ml-2"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              5.0 out of 5 — 180+ reviews
            </span>
          </motion.div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col"
            >
              {/* Quote Icon */}
              <Quote className="text-orange-200 mb-4" size={28} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} size={14} className="text-orange-500 fill-orange-500" />
                ))}
              </div>

              {/* Text */}
              <p
                className="text-stone-700 flex-1 mb-6 italic"
                style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.95rem", lineHeight: 1.75 }}
              >
                "{t.text}"
              </p>

              {/* Package badge */}
              <div className="mb-4">
                <span
                  className="bg-orange-50 text-orange-700 text-xs px-3 py-1 rounded-full border border-orange-200"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600 }}
                >
                  {t.package}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-stone-100">
                <div
                  className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="text-stone-900 font-semibold text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-stone-400 text-xs"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
