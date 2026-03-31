import { motion } from "motion/react";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import content from "../../content.json";

const packages = content.packages.map((p) => `${p.name} — Price TBD`);
const deliveryWindows = content.delivery_windows;

export function OrderContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    package: "",
    deliveryWindow: "",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-500 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-600 -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-orange-400 font-semibold tracking-widest uppercase text-sm mb-3"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Ready to Order?
            </p>
            <h2
              className="text-amber-50 mb-6"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              Book Your Porch Pumpkins Today
            </h2>
            <p
              className="text-stone-400 mb-10"
              style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.05rem", lineHeight: 1.75 }}
            >
              Fill out the form and we'll confirm your order within 24 hours. Delivery spots fill up fast — don't miss out on the best fall display on your street!
            </p>

            {/* Contact Info */}
            <div className="space-y-5">
              {[
                { icon: "📧", label: "Email", value: "hello@okanaganporchpumpkins.ca" },
                { icon: "📱", label: "Phone / Text", value: "(250) 555-PUMP" },
                { icon: "📍", label: "Service Area", value: "Okanagan Valley, BC" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-stone-800 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div
                      className="text-stone-400 text-xs uppercase tracking-wider"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-amber-100 font-medium"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Season Banner */}
            <div className="mt-10 bg-orange-600/20 border border-orange-600/40 rounded-2xl p-6">
              <p
                className="text-orange-300 text-sm font-semibold mb-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                🎃 Fall 2026 Season
              </p>
              <p
                className="text-amber-100"
                style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.65 }}
              >
                Delivery windows run from <strong>September 21 – October 21, 2026</strong>. End-of-season pickup is scheduled for the <strong>first two weeks of November</strong>. Book now to secure your preferred window!
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {submitted ? (
              <div className="bg-stone-800 rounded-3xl p-10 text-center">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={56} />
                <h3
                  className="text-amber-50 mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 700 }}
                >
                  Order Received!
                </h3>
                <p
                  className="text-stone-400"
                  style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.7 }}
                >
                  Thank you, <strong className="text-amber-100">{form.name || "friend"}</strong>! We'll be in touch within 24 hours to confirm your delivery details. Get ready for the most beautiful porch on the block! 🎃
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Submit Another Order
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-stone-800 rounded-3xl p-8 space-y-5 border border-stone-700"
              >
                <h3
                  className="text-amber-50 mb-6"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 600 }}
                >
                  Booking Request Form
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-stone-500"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-stone-500"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Phone / Text *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(250) 555-0000"
                      className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-stone-500"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    />
                  </div>
                </div>

                {/* Address */}
                <div>
                  <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Delivery Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={form.address}
                    onChange={handleChange}
                    placeholder="123 Apple Blossom Lane"
                    className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-stone-500"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Kelowna"
                    className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-stone-500"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                {/* Package */}
                <div>
                  <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Package *
                  </label>
                  <select
                    name="package"
                    required
                    value={form.package}
                    onChange={handleChange}
                    className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <option value="">Select a package...</option>
                    {packages.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                {/* Delivery Window */}
                <div>
                  <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Preferred Delivery Window *
                  </label>
                  <select
                    name="deliveryWindow"
                    required
                    value={form.deliveryWindow}
                    onChange={handleChange}
                    className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <option value="">Choose a window...</option>
                    {deliveryWindows.map((w) => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-stone-300 text-sm mb-1.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Special Requests / Notes
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Custom colours, specific arrangement style, add-ons (mums, hay bales), etc."
                    className="w-full bg-stone-700 border border-stone-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-amber-50 rounded-xl px-4 py-3 outline-none transition-all resize-none placeholder:text-stone-500"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-0.5"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <Send size={18} />
                  Submit Booking Request
                </button>
                <p
                  className="text-stone-500 text-xs text-center"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  We'll confirm your order by email within 24 hours. Payment processed upon confirmation.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
