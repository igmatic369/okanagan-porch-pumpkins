import { HashRouter, Routes, Route } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { PackagesPage } from "./pages/PackagesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { AboutPage } from "./pages/AboutPage";
import { FAQPage } from "./pages/FAQPage";
import { ContactPage } from "./pages/ContactPage";
import { PackageDetailPage } from "./pages/PackageDetailPage";
import { AddOnDetailPage } from "./pages/AddOnDetailPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="packages" element={<PackagesPage />} />
          <Route path="packages/:slug" element={<PackageDetailPage />} />
          <Route path="add-ons/:slug" element={<AddOnDetailPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
