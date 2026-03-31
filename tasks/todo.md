# Okanagan Porch Pumpkins — Site Tasks

## Project Overview
React 18 SPA, Vite 6, React Router v7 (HashRouter), Tailwind CSS v4, Framer Motion.
No local image assets — all images are Unsplash URLs.
Theme: stone-900 dark nav, orange-600 accents, Playfair Display + Lato fonts.

---

## ✅ Completed (2026-03-27)

### Build Fix
- Added `figmaAssetPlugin()` to `vite.config.ts` (resolves `figma:asset/` virtual imports)
- Created `public/_redirects` with `/* /index.html 200` for Netlify SPA routing
- Build confirmed passing: 2029 modules, no errors

### Content Extraction
- Created `src/content.json` with:
  - `business` — name, email, phone, service area, tagline
  - `season` — year, delivery range (Sept 21 – Oct 21, 2026), pickup window
  - `service_areas` — 8 Okanagan cities
  - `delivery_windows` — 5 weekly windows
  - `packages` — 5 packages (see below) with slugs, prices set to "TBD"
  - `addons` — 5 add-ons with slugs, prices set to "TBD"
- Created `src/app/lib/assets.ts` — passthrough `imageSrc()` helper (no local assets needed)

### Package Data (content.json)
| # | Name | Pumpkin Count | Slug |
|---|------|---------------|------|
| 1 | The Doorstep Drop | 30 pumpkins | doorstep-drop |
| 2 | The Cozy Stoop | 46 pumpkins | cozy-stoop |
| 3 | The Harvest Welcome | 53 pumpkins | harvest-welcome |
| 4 | The Grand Display | 76 pumpkins | grand-display |
| 5 | The Showstopper | 42 premium pumpkins | showstopper |

### Add-On Data (content.json)
| Name | Slug | Restricted |
|------|------|------------|
| Professional Porch Styling | professional-styling | Package #1 only |
| Pumpkin Pick-Up & Composting | pumpkin-pickup-composting | Any |
| 24 Miniature Pumpkins | miniature-pumpkins | Any |
| Extra Hay Bale | extra-hay-bale | Any |
| Gift Cards | gift-cards | Any |

### Components Updated
- `src/app/components/Packages.tsx` — Rewritten to read from content.json
  - Package cards now link to `/packages/:slug` detail pages
  - Add-on cards now link to `/add-ons/:slug` detail pages
  - Add-ons grid expanded from 4 to 5 columns for 5 items
- `src/app/components/OrderContact.tsx` — Package dropdown now reads from content.json
  - Old hardcoded Victoria-style names replaced with correct package names

### New Pages Created
- `src/app/pages/PackageDetailPage.tsx` — Detail page for each package
  - Hero image, name, tagline, badge
  - Description, includes checklist
  - Price panel (shows "Price TBD"), best_for, delivery info
  - 3-question inline FAQ
  - "Book This Package" CTA → /contact
  - 404 → redirects to /packages
- `src/app/pages/AddOnDetailPage.tsx` — Detail page for each add-on
  - Image, name, price, description
  - Restriction warning for Package #1-only items
  - "Add to My Order" CTA → /contact
  - 404 → redirects to /packages

### Routing (App.tsx)
Added 2 new parameterised routes (covers all 10 detail pages):
- `packages/:slug` → PackageDetailPage
- `add-ons/:slug` → AddOnDetailPage

---

## 🔜 Remaining / Future

- [ ] Set real prices in `content.json` once confirmed by client
- [ ] Replace `(250) 555-PUMP` placeholder phone with real number
- [ ] Replace Unsplash images with real client photos
- [ ] Wire up contact form to email service (Netlify Forms, Formspree, etc.)
- [ ] Add real social media links in footer
- [ ] SEO: add meta tags, og:image per page
- [ ] Deploy to Netlify
