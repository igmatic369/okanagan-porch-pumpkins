import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router";
import { useContent } from "../hooks/useContent";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Packages", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { announcement } = useContent();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Banner */}
      <div className="bg-orange-600 text-white py-2.5 px-4 text-center">
        <p
          data-content-key="announcement.text"
          className="text-sm"
          style={{ fontFamily: "'Lato', sans-serif" }}
        >
          {announcement.text}
        </p>
      </div>

      {/* Main Nav */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-stone-900/97 backdrop-blur-sm shadow-xl"
            : "bg-stone-900/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">
                🎃
              </div>
              <div className="leading-tight">
                <div
                  className="text-orange-400 font-bold tracking-wide"
                  style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}
                >
                  Okanagan
                </div>
                <div
                  className="text-amber-100 tracking-widest uppercase"
                  style={{ fontFamily: "'Lato', sans-serif", fontSize: "0.7rem", letterSpacing: "0.18em" }}
                >
                  Porch Pumpkins
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-amber-100/80 hover:text-orange-400 transition-colors duration-200 text-sm tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-2 bg-orange-600 hover:bg-orange-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-600/30 hover:-translate-y-0.5"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Order Now
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-amber-100 p-2 hover:text-orange-400 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-stone-900 border-t border-stone-700 px-4 pb-6 pt-2">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-amber-100/80 hover:text-orange-400 transition-colors py-3 px-2 border-b border-stone-800 text-base"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 bg-orange-600 hover:bg-orange-500 text-white px-6 py-3 rounded-full text-center font-semibold transition-all"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
