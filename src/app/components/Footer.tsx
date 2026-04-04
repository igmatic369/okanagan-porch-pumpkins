import { Link } from "react-router";
import { useContent } from "../hooks/useContent";

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
            >
              Service Areas
            </h4>
            <ul className="space-y-2">
              {service_areas.map((city, i) => (
                <li key={city}>
                  <span
                    className="text-stone-500 text-sm"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    📍 <span data-content-key={`service_areas.${i}`}>{city}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-amber-100 mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 600 }}
            >
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📧</span>
                <span
                  data-content-key="business.email"
                  className="text-stone-500 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {business.email}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📱</span>
                <span
                  data-content-key="business.phone_display"
                  className="text-stone-500 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {business.phone_display}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">📍</span>
                <span
                  data-content-key="business.service_area"
                  className="text-stone-500 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {business.service_area}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">🕐</span>
                <span
                  className="text-stone-500 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Deliveries: <span data-content-key="season.delivery_range">{season.delivery_range}</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sm mt-0.5">♻️</span>
                <span
                  className="text-stone-500 text-sm"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Pickup: <span data-content-key="season.pickup_window">{season.pickup_window.charAt(0).toUpperCase() + season.pickup_window.slice(1)}</span>
                </span>
              </li>
            </ul>

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
