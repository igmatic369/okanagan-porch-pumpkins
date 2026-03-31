import { motion } from "motion/react";
import { Link } from "react-router";

const farmImage = "https://images.unsplash.com/photo-1603055971132-fbf2b0c2cd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdW1wa2luJTIwcGF0Y2glMjBmYXJtJTIwcGlja2luZ3xlbnwxfHx8fDE3NzQ3Mzk1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const okanaganImage = "https://images.unsplash.com/photo-1732159622597-aefade3499a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxva2FuYWdhbiUyMHZhbGxleSUyMGJyaXRpc2glMjBjb2x1bWJpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQ3Mzk1NTN8MA&ixlib=rb-4.1.0&q=80&w=1080";

const serviceAreas = [
  "Kelowna",
  "West Kelowna",
  "Lake Country",
  "Peachland",
  "Summerland",
  "Penticton",
  "Vernon",
  "Coldstream",
];

export function About() {
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
            >
              Our Story
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
              Born From a Love of Fall in the{" "}
              <span className="text-orange-600 italic">Okanagan</span>
            </h2>
            <div
              className="space-y-4 text-stone-600"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.8 }}
            >
              <p>
                Okanagan Porch Pumpkins started as a simple idea: why should decorating your porch for fall be stressful? We're a local family business right here in the Okanagan Valley — and like you, we adore this region's spectacular autumn season.
              </p>
              <p>
                Every fall, the Okanagan transforms into a canvas of gold, amber, and deep red. We thought — what better way to celebrate that magic than by bringing the most beautiful pumpkins in the valley right to your front door?
              </p>
              <p>
                We partner exclusively with local Okanagan farms to source the freshest, most gorgeous pumpkins of the season. By choosing us, you're not just getting a beautiful porch — you're supporting local farmers and keeping our community thriving.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Book Your Display →
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
              <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                style={{ fontFamily: "'Lato', sans-serif" }}>
                🌾 Locally Sourced
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
          >
            Where We Deliver
          </p>
          <h3
            className="text-stone-900 mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              fontWeight: 700,
            }}
          >
            Serving the Okanagan Valley
          </h3>
          <p
            className="text-stone-600 mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
          >
            We deliver across the beautiful Okanagan Valley. If your community isn't listed, reach out — we're always looking to expand!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              <span
                key={city}
                className="bg-white border border-orange-200 text-stone-700 px-5 py-2.5 rounded-full text-sm shadow-sm hover:border-orange-400 hover:text-orange-600 transition-colors cursor-default"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 500 }}
              >
                📍 {city}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
