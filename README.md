# ShopKart — Week 4 Assignment

A React implementation of the "ShopKart" landing page from the Week 4 frontend assignment Figma file (`FE Assignment`, node `0:1`).

## ⚠️ Status: close match, two things still pending

The Figma file is view-only (no edit access was granted), so this was built from:
- Screenshots of the Desktop and iPhone 14 frames
- The file's "Styleguide" page (typography scale, color style names)

Still outstanding:
- **Exact color hex codes.** `src/index.css` uses visually-estimated hex values for the 5 color styles (Primary colour, Grey scale 1000/400/200/000). Replace the `--color-*` variables there with the real hex values once available (click each color style in Figma's right panel to get it).
- **Real product/hero images.** Without file export access, product photos and the hero model image are grey placeholder blocks. Swap in the real assets in `Hero.jsx` and `ProductCard.jsx` once exportable.

Everything else (layout, typography sizes/weights, component structure, copy, spacing) was built to match the design as closely as possible from the available screenshots.

## Setup and running locally

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`).

```bash
npm run build
```

builds to `dist/`, ready to deploy (e.g. to Netlify).

## Structure

```
src/
  data/
    products.js         # placeholder product content
  components/
    Header.jsx            # topbar, nav, "Our Products" dropdown, mobile menu
    Hero.jsx                # headline, year graphic, hero visual block
    ProductCard.jsx           # one product tile
    ProductGrid.jsx             # "New products" section: filters + product row
    Newsletter.jsx                # contact form + "Get in touch" + send button
    Footer.jsx                      # copyright line
  App.jsx                           # assembles the page
  App.css                            # all layout/visual styling
  index.css                          # design tokens: fonts, colors, type scale
```

## Design tokens (from the Figma Styleguide page)

| Token | Value |
|---|---|
| Display font | Syne (Extrabold 800 for H1, Semibold 600 for H2/Subtitles) |
| Body font | Work Sans (Regular 400) |
| H1 | 135px |
| H2 | 90px |
| Subtitle | 26px |
| Body | 18px / 14px |

## Interactive behaviour implemented

- "Our Products" nav item reveals a dropdown (Product 1–4) on hover.
- Mobile hamburger menu opens a full-screen nav overlay (closable), matching the iPhone 14 frames.
- Category filter buttons in "New products" are clickable and track an active state.
- The contact form (Name/Email/Message) is a controlled form; submitting logs the values and resets the fields.
