import { motion } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import { Link } from "react-router";
import { useContent } from "../hooks/useContent";

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

export function Gallery() {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const content = useContent();
  const { gallery } = content;
  const photos = gallery.photos ?? [];

  return (
    <section id="gallery" className="py-24 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={isPreview ? false : { opacity: 0, y: 10 }}
            whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
            viewport={isPreview ? undefined : { once: true }}
            transition={{ duration: 0.5 }}
            className="text-orange-600 font-semibold tracking-widest uppercase text-sm mb-3"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="gallery.eyebrow"
          >
            {gallery.eyebrow}
          </motion.p>
          <motion.h2
            initial={isPreview ? false : { opacity: 0, y: 20 }}
            whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
            viewport={isPreview ? undefined : { once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-stone-900 mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
            data-content-key="gallery.headline"
          >
            {gallery.headline}
          </motion.h2>
          <motion.p
            initial={isPreview ? false : { opacity: 0, y: 20 }}
            whileInView={isPreview ? undefined : { opacity: 1, y: 0 }}
            viewport={isPreview ? undefined : { once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Lato', sans-serif", fontSize: "1.1rem", lineHeight: 1.7 }}
            data-content-key="gallery.subtitle"
          >
            {gallery.subtitle}
          </motion.p>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {photos.map((photo, i) => (
            <motion.div
              key={`${photo.src}-${i}`}
              initial={isPreview ? false : { opacity: 0, scale: 0.95 }}
              whileInView={isPreview ? undefined : { opacity: 1, scale: 1 }}
              viewport={isPreview ? undefined : { once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`${photo.span} relative overflow-hidden rounded-2xl ${isPreview ? "cursor-default" : "cursor-pointer"} group shadow-md`}
              onClick={isPreview ? undefined : () => setLightboxImg(photo.src)}
              data-reorderable="gallery.photos"
              data-reorder-index={i}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                data-content-key={`gallery.photos.${i}.src`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span
                  className="text-white text-sm font-semibold"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                  data-content-key={`gallery.photos.${i}.label`}
                >
                  {photo.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {isPreview && (
          <div className="flex justify-center mt-4 mb-2">
            <button
              className="border-2 border-dashed border-stone-300 rounded-2xl px-8 py-4 text-stone-400 font-semibold hover:border-orange-400 hover:text-orange-500 hover:bg-orange-50 transition-all"
              onClick={() => window.parent.postMessage({ type: 'preview-add-item', arrayPath: 'gallery.photos' }, '*')}
            >
              + Add Photo
            </button>
          </div>
        )}

        {/* Lightbox — only in non-preview mode */}
        {!isPreview && lightboxImg && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-400 transition-colors"
              onClick={() => setLightboxImg(null)}
            >
              <X size={32} />
            </button>
            <img
              src={lightboxImg}
              alt="Gallery enlarged"
              className="max-w-full max-h-[90vh] rounded-xl object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

        {/* CTA under gallery */}
        <motion.div
          initial={isPreview ? false : { opacity: 0 }}
          whileInView={isPreview ? undefined : { opacity: 1 }}
          viewport={isPreview ? undefined : { once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <p
            className="text-stone-600 mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="gallery.cta_text"
          >
            {gallery.cta_text}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5"
            style={{ fontFamily: "'Lato', sans-serif" }}
            data-content-key="gallery.cta_button"
          >
            {gallery.cta_button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
