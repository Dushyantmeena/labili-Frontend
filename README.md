# LABIII · Timeless Comfort (Baisa Jaipur Luxe Frontend)

> A luxury React.js + SCSS frontend inspired directly by [The Baisa Jaipur](https://www.baisajaipur.com/) with brand identity **Labiii · Timeless Comfort** — celebrating royal Rajputana ethnic silhouettes, heirloom Gota Patti embroidery, Rajputi Aangi blouses, festive lehengas, and pure Jaipur hand-block cottons.

---

## 👑 Visual Language & Design System

The frontend replicates and refines the complete design system of royal Jaipur couture:

- **Typography**:
  - **Headings & Brand Title**: `Cormorant Garamond` (Regal serif, weights 400, 500, 600, 700, italics)
  - **Body, Nav & Buttons**: `Jost` (Modern geometric sans-serif, weights 300, 400, 500, 600)
- **Royal Color Palette**:
  - **Primary Background**: `#FBF6EE` (Warm Pale Ivory / Rajasthan Sandstone)
  - **Secondary Contrast**: `#F3EADB` (Cream contrast surface)
  - **Primary Accent**: `#6B1E2A` (Signature Royal Burgundy / Crimson Maroon)
  - **Metallic Gold**: `#C59B27` and `#E3BF87` (Jaipur Gota Gold)
  - **Deep Charcoal / Espresso**: `#2A1A14` (Regal night / dark wood text)
  - **Festive Accents**: Rani Pink (`#C2185B`), Peacock Teal (`#1A535C`), Olive Sage (`#4A5D4E`)
- **Strictly Modular SCSS**:
  - Organized into `_variables.scss`, `_mixins.scss`, `_typography.scss`, `_reset.scss`, and component-specific SCSS files.
  - Zero Tailwind CSS, zero intrusive external UI frameworks.

---

## 🏛️ Project Architecture

```
src/
├── styles/
│   ├── _variables.scss          # Royal color tokens, typography scales, shadows, breakpoints
│   ├── _mixins.scss             # Responsive queries, button styles, flex & container mixins
│   ├── _typography.scss         # Cormorant Garamond & Jost rules
│   ├── _reset.scss              # Modern CSS reset & custom scrollbars
│   └── main.scss                # Master SCSS index
├── context/
│   ├── CurrencyContext.jsx      # Multi-currency engine (INR, USD, GBP, EUR, AED)
│   ├── CartContext.jsx          # Cart state, free shipping progress, discount coupons
│   ├── WishlistContext.jsx      # Wishlist toggle and local persistence
│   └── AuthContext.jsx          # Royal patronage session and login/register modal
├── services/
│   ├── api.js                   # Central Axios client with bearer tokens & offline fallback
│   ├── productService.js        # /products, /categories, search & sort
│   ├── authService.js           # /auth/login, /auth/register, /auth/profile
│   └── orderService.js          # /orders, /enquiries/rental-custom, /enquiries/contact
├── data/
│   └── initialProducts.js       # Authentic Baisa Jaipur catalog dataset with high-res photography
├── components/
│   ├── common/
│   │   ├── Header/              # AnnouncementBar, Navbar, Mobile Off-canvas Drawer
│   │   ├── Footer/              # Newsletter strip, Values, Studio hours, Jaipur address
│   │   ├── ProductCard/         # Image hover flip, Badges, Quick View, Size pills, Direct Add
│   │   ├── CartDrawer/          # Slide-over cart with free shipping meter & coupon codes
│   │   ├── SearchModal/         # Live search modal with popular suggestions
│   │   ├── QuickViewModal/      # Lightbox view with thumbnails, color swatches & sizes
│   │   ├── SizeGuideModal/      # Inch/CM size chart & 2-inch alteration margin notes
│   │   ├── AuthModal/           # Royal Sign In / Registration dialog
│   │   └── Toast/               # Floating action notifications
│   └── home/
│       ├── HeroBanner/          # Editorial split hero with dual royal CTAs
│       ├── CategoryGrid/        # "Five Ways to Wear The Baisa"
│       ├── FeaturedCollection/  # Tabbed bestsellers with instant filter
│       ├── CraftStory/          # "The Spirit of Rajasthan" & Jaipur workshop pillars
│       ├── ReelShowcase/        # "Seen on The Baisa" with direct "Shop Look" action
│       ├── CustomRentalBanner/  # Bespoke bridal couture & wedding rental feature
│       ├── StudioVisit/         # Jaipur flagship boutique card with Google Maps
│       └── FaqSection/          # Accordion FAQs for sizing, shipping & rentals
├── pages/
│   ├── HomePage.jsx
│   ├── CollectionPage.jsx       # Category filtering, price slider, fabric/size chips, sorting
│   ├── ProductDetailPage.jsx   # Multi-image gallery, zoom, size picker, pincode check, specs
│   ├── CustomRentalPage.jsx     # Interactive custom couture & outfit rental booking form
│   ├── AboutPage.jsx            # The Baisa origin story & Jaipur artisan craft
│   ├── ContactPage.jsx          # Jaipur studio address, hours, maps, inquiry form
│   ├── CartPage.jsx             # Dedicated shopping bag with item management
│   ├── CheckoutPage.jsx         # Multi-step checkout with UPI, Card, NetBanking & COD
│   ├── WishlistPage.jsx         # Saved heirloom pieces with "Move All to Bag"
│   ├── AccountPage.jsx          # Customer orders history, saved measurements profile
│   └── NotFoundPage.jsx         # Regal 404 page
├── App.jsx
└── main.jsx
```

---

## 🔌 Backend Integration Specification

The frontend connects cleanly to your backend via the isolated service layer in `src/services/`.

### Configured Environment Variable
Create or edit `.env`:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### Endpoints Connected:
1. **Catalog**:
   - `GET /products`: Accepts query params `{ category, search, sort }`
   - `GET /products/:idOrSlug`: Returns single product details
   - `GET /categories`: Returns category listing
2. **Authentication**:
   - `POST /auth/login`: `{ email, password }` -> `{ token, user }`
   - `POST /auth/register`: `{ name, email, phone, password }` -> `{ token, user }`
   - `GET /auth/profile`: Attaches Bearer token from localStorage
3. **Orders & Checkout**:
   - `POST /orders`: Creates new order with items, shipping address, and payment method
   - `GET /orders/my-orders`: Returns customer's past orders
4. **Custom Couture & Rentals**:
   - `POST /enquiries/rental-custom`: Submits custom bridal / rental requests
   - `POST /enquiries/contact`: Submits general inquiries

*Note: If the backend server is offline or unreachable, the frontend gracefully activates its local seed catalog without breaking or throwing runtime errors. The moment the backend server is started, it automatically pulls live data.*

---

## 🚀 Running the Project

```bash
# 1. Install dependencies
npm install

# 2. Run in development mode
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```
