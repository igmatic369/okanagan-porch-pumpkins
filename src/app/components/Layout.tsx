import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Lato', sans-serif" }}>
      <Navbar />
      <main className={isHome ? "" : "pt-[124px]"}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}