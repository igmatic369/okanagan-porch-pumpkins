import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContent } from "../hooks/useContent";
import type contentJson from "../../content.json";

type Package = (typeof contentJson)["packages"][number];

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

export function Packages() {
  const content = useContent();
  const { packages, addons, packages_section } = content;
  return (
    <section id="packages" className="py-24 bg-stone-50">
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
            data-content-key="packages_section.eyebrow"
          >
            {packages_section.eyebrow}
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
            data-content-key="packages_section.headline"
          >
            {packages_section.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
            data-content-key="packages_section.subtitle"
          >
            {packages_section.subtitle}
          </motion.p>
        </div>

        {/* Package Cards — top 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {packages.slice(0, 3).map((pkg, i) => (
            <PackageCard key={`${pkg.slug}-${i}`} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Package Cards — bottom 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          {packages.slice(3).map((pkg, i) => (
            <PackageCard key={`${pkg.slug}-${i + 3}`} pkg={pkg} index={i + 3} />
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-stone-500 text-sm mb-20"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          <span data-content-key="packages_section.note">{packages_section.note}</span>
        </motion.p>

        {/* Add-Ons Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <span data-content-key="packages_section.addons_eyebrow">{packages_section.addons_eyebrow}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-stone-900 mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
            data-content-key="packages_section.addons_headline"
          >
            {packages_section.addons_headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 max-w-xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
            data-content-key="packages_section.addons_subtitle"
          >
            {packages_section.addons_subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {addons.map((addon, i) => (
            <motion.div
              key={`${addon.slug}-${i}`}
              initial={isPreview ? false : { opacity: 0, y: 30 }}
              whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
              viewport={isPreview ? undefined : { once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              data-reorderable="addons"
              data-reorder-index={i}
            >
              <Link
                to={`/add-ons/${addon.slug}`}
                className="block bg-white rounded-2xl border-2 border-stone-100 overflow-hidden shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="relative h-44 overflow-hidden">
                  <ImageWithFallback
                    src={addon.image}
                    alt={addon.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold ${
                      addon.restricted
                        ? "bg-amber-500 text-white"
                        : "bg-stone-800/80 text-white"
                    }`}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {addon.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className="text-stone-900 leading-snug"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.05rem",
                        fontWeight: 700,
                      }}
                      data-content-key={`addons.${i}.name`}
                    >
                      {addon.name}
                    </h3>
                    <span
                      className="text-orange-600 shrink-0"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                      }}
                      data-content-key={`addons.${i}.price`}
                    >
                      {addon.price}
                    </span>
                  </div>
                  <p
                    className="text-stone-500 text-sm flex-1"
                    style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.6 }}
                    data-content-key={`addons.${i}.description`}
                  >
                    {addon.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p
            className="text-stone-600 mb-5"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1rem" }}
            data-content-key="packages_section.cta_text"
          >
            {packages_section.cta_text}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-base hover:bg-orange-500 transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="packages_section.cta_button"
          >
            {packages_section.cta_button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PackageCard({
  pkg,
  index,
}: {
  pkg: Package;
  index: number;
}) {
  return (
    <motion.div
      initial={isPreview ? false : { opacity: 0, y: 40 }}
      whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
      viewport={isPreview ? undefined : { once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
        pkg.highlight ? "ring-4 ring-orange-400/50" : ""
      }`}
      data-reorderable="packages"
      data-reorder-index={index}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <ImageWithFallback
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Package number */}
        <div
          className="absolute top-3 left-3 bg-white/90 text-stone-800 px-2.5 py-1 rounded-full text-xs font-bold"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          Package #{pkg.number}
        </div>

        {/* Badge */}
        {pkg.badge && (
          <div
            className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${
              pkg.highlight
                ? "bg-orange-500 text-white"
                : pkg.badge === "Best Value"
                ? "bg-stone-800 text-white"
                : "bg-orange-100 text-orange-700"
            }`}
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {pkg.badge}
          </div>
        )}

        {/* Price overlaid on image bottom */}
        <div className="absolute bottom-3 left-4">
          <span
            className="text-white drop-shadow-lg"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700 }}
            data-content-key={`packages.${index}.price`}
          >
            {pkg.price}
          </span>
          <span
            className="text-white/80 text-xs ml-1"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            CAD
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white p-6 flex flex-col flex-1">
        <h3
          className="text-stone-900 mb-0.5"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 700 }}
          data-content-key={`packages.${index}.name`}
        >
          {pkg.name}
        </h3>
        <p
          className="text-orange-600 text-sm mb-3"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 600 }}
          data-content-key={`packages.${index}.tagline`}
        >
          {pkg.tagline}
        </p>
        <p
          className="text-stone-600 text-sm mb-5"
          style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.65 }}
          data-content-key={`packages.${index}.description`}
        >
          {pkg.description}
        </p>

        <ul className="space-y-2 mb-5 flex-1">
          {pkg.includes.map((item, i) => (
            <li key={item} className="flex items-start gap-2">
              <Check size={15} className="mt-0.5 flex-shrink-0 text-orange-500" />
              <span
                className="text-stone-700 text-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
                data-content-key={`packages.${index}.includes.${i}`}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>

        {pkg.note && (
          <p
            className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            💡 <span data-content-key={`packages.${index}.note`}>{pkg.note}</span>
          </p>
        )}

        <Link
          to={`/packages/${pkg.slug}`}
          className={`w-full text-center py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 ${
            pkg.highlight
              ? "bg-orange-600 text-white hover:bg-orange-500 shadow-lg"
              : "bg-stone-900 text-white hover:bg-stone-700 shadow-md"
          }`}
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          View Package Details
        </Link>
      </div>
    </motion.div>
  );
}
