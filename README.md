# CemzoStore 🛍️

A responsive product catalogue built with **Next.js** for the Cemzo Technologies React Developer Intern assignment.

> Built with Next.js (React framework) to leverage better routing, image optimization, and seamless Vercel deployment — all React fundamentals (Hooks, Context, Components) apply identically.

---

## ✨ Features

### Required
- ✅ Product listing with image, name, price, category & rating
- ✅ Search by product name
- ✅ Category filter (pill tabs)
- ✅ Product detail modal (image, title, description, price, rating)
- ✅ Loading skeletons & error handling
- ✅ Fully responsive — mobile, tablet & desktop

### Bonus — Level 1
- ✅ Debounced search (350ms)

### Bonus — Level 2
- ✅ Dark / Light theme toggle (persisted via `next-themes`)
- ✅ Custom `useProducts` hook for data fetching

---

## 🖥️ Preview

| Light Mode | Dark Mode |
|---|---|
| Navy navbar, cream background | Cream navbar, navy background |

---

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind imports + keyframe animations
│   ├── layout.jsx           # Root layout with ThemeProvider
│   └── page.jsx             # Home page — search, filter, grid, modal
│
├── components/
│   ├── product/
│   │   ├── ProductCard.jsx  # Single product card
│   │   ├── ProductGrid.jsx  # Grid with loading/error/empty states
│   │   └── ProductModal.jsx # Detail modal (slide-up on mobile)
│   └── ui/
│       ├── Navbar.jsx       # Sticky navbar with theme toggle
│       ├── Footer.jsx       # Footer with links and social icons
│       ├── SearchBar.jsx    # Debounced search input
│       ├── CategoryFilter.jsx # Category pill tabs
│       ├── SkeletonCard.jsx # Skeleton loader
│       └── StarRating.jsx   # Half-star rating component
│
├── hooks/
│   ├── useProducts.js       # Fetches products + categories
│   └── useDebounce.js       # Debounce hook (350ms)
│
└── services/
    └── productService.js    # All API calls (fakestoreapi.com)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/khadijarahmannupur-ctrl/cemzo-store.git
cd cemzo-store

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🌐 Live Demo

🔗 [https://cemzo-store-psi.vercel.app](https://cemzo-store-psi.vercel.app)


---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 | React framework (App Router) |
| Tailwind CSS v4 | Utility-first styling |
| next-themes | Dark/light theme management |
| fakestoreapi.com | Mock product data |
| Vercel | Deployment |

---

## 🎨 Color Palette

| Name | Hex | Usage |
|---|---|---|
| Navy | `#0A2947` | Navbar, headings, dark bg |
| Cream | `#F3E4C9` | Page background, light text |
| Sage | `#D3D4C0` | Borders, muted elements |
| Brown | `#8B5E3C` | Accent, price, stars |

---

## 📦 Deploy to Vercel

```bash
# Option 1 — Vercel CLI
npm i -g vercel
vercel

# Option 2 — Connect GitHub repo at vercel.com (recommended)
# Push to GitHub → Import project on Vercel → Auto deploy ✅
```

---

## 📋 Evaluation Criteria Coverage

| Criteria | Implementation |
|---|---|
| React Fundamentals | Functional components, hooks (`useState`, `useEffect`, `useMemo`, `useCallback`) |
| State Management | Custom hooks, component-level state |
| API Integration | `productService.js` → `fakestoreapi.com` |
| UI/UX | Smooth animations, skeleton loaders, empty & error states |
| Code Quality | Clean folder structure, reusable components, separation of concerns |
| Responsiveness | Mobile-first grid, bottom sheet modal on mobile |
| Bonus Features | Debounced search, dark/light theme |
