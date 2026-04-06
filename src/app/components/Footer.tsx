import { Link } from "react-router";
import { useContent } from "../hooks/useContent";
import { getContactIcon, CONTACT_TYPES } from "../lib/contactIcons";

const isPreview =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("preview") === "true";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Packages & Pricing", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "About Us", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Order Now", to: "/contact" },
];

export function Footer() {
  const content = useContent();
  const { business, season, service_areas, footer } = content;
  const contactItems = business.contact_items || [];

  return (
    <footer className="bg-stone-950 text-stone-400">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center text-xl">
                🎃
              </div>
              <div>
                <div
                  className="text-orange-400 font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem" }}
                >
                  Okanagan
                </div>
                <div
                  className="text-amber-200/70 tracking-widest uppercase"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em" }}
                >
                  Porch Pumpkins
                </div>
              </div>
            </div>
            <p
              data-content-key="business.description"
              className="text-stone-500 text-sm leading-relaxed mb-5"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {business.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-amber-100 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-stone-500 hover:text-orange-400 transition-colors text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4
              className="text-amber-100 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600 }}
              data-content-key="footer.service_areas_heading"
            >
              {footer.service_areas_heading}
            </h4>
            <ul className="space-y-2">
              {service_areas.map((city, i) => (
                <li
                  key={`${city}-${i}`}
                  className="relative"
                  data-reorderable="service_areas"
                  data-reorder-index={i}
                >
                  <span
                    className="text-stone-500 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    📍 <span data-content-key={`service_areas.${i}`}>{city}</span>
                  </span>
                </li>
              ))}
            </ul>
            {isPreview && (
              <button
                className="mt-2 text-stone-600 text-sm hover:text-orange-400 transition-colors border border-dashed border-stone-700 rounded px-2 py-1"
                style={{ fontFamily: "'Lato', sans-serif" }}
                onClick={() => window.parent.postMessage({ type: 'preview-add-item', arrayPath: 'service_areas' }, '*')}
              >
                + Add City
              </button>
            )}
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-amber-100 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600 }}
              data-content-key="footer.contact_heading"
            >
              {footer.contact_heading}
            </h4>
            <ul className="space-y-3">
              {contactItems.map((item: { type: string; label: string }, i: number) => {
                const Icon = getContactIcon(item.type)
                return (
                  <li
                    key={i}
                    className="relative flex items-start gap-2"
                    data-reorderable="business.contact_items"
                    data-reorder-index={i}
                  >
                    <Icon size={14} className="text-stone-500 mt-0.5 flex-shrink-0" />
                    <span
                      data-content-key={`business.contact_items.${i}.label`}
                      className="text-stone-500 text-sm"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </li>
                )
              })}
              {isPreview && (
                <li>
                  <button
                    data-contact-picker
                    className="text-stone-600 text-sm hover:text-orange-400 transition-colors border border-dashed border-stone-700 rounded px-2 py-1"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    + Add Contact Info
                  </button>
                </li>
              )}
            </ul>

            {/* Season Info */}
            <div className="mt-4 pt-4 border-t border-stone-800/60">
              <p
                className="text-stone-600 text-xs uppercase tracking-wider mb-2"
                style={{ fontFamily: "'Lato', sans-serif" }}
                data-content-key="footer.season_info_heading"
              >
                {footer.season_info_heading}
              </p>
              <div className="space-y-2">
                <p
                  data-content-key="season.delivery_display"
                  className="text-stone-500 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {season.delivery_display}
                </p>
                <p
                  data-content-key="season.pickup_display"
                  className="text-stone-500 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {season.pickup_display}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-800">
              <p
                className="text-stone-600 text-xs mb-3"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Join our mailing list for early booking access:
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-stone-800 border border-stone-700 text-stone-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-orange-500 placeholder:text-stone-600 min-w-0"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                />
                <button className="bg-orange-600 hover:bg-orange-500 text-white px-3 py-2 rounded-lg text-sm transition-colors flex-shrink-0">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-stone-600">
          <p style={{ fontFamily: "'Lato', sans-serif" }}>
            © <span data-content-key="season.year">{season.year}</span>{" "}
            <span data-content-key="footer.copyright">{footer.copyright}</span>
          </p>
          <div className="flex gap-5" style={{ fontFamily: "'Lato', sans-serif" }}>
            <a href="#" className="hover:text-orange-400 transition-colors" data-content-key="footer.privacy_link">{footer.privacy_link}</a>
            <a href="#" className="hover:text-orange-400 transition-colors" data-content-key="footer.terms_link">{footer.terms_link}</a>
          </div>
          <p style={{ fontFamily: "'Lato', sans-serif" }} data-content-key="footer.tagline">
            {footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
