# Menu — Week 4 Assignment

A React implementation of the "Menu" option from the Week 4 frontend assignment.

## ⚠️ Status: placeholder design

The assignment's exact design spec (Figma link + PDF referenced in the assignment comments, covering required fonts, sizes, colors, and copy) was not available when this was built. Everything here, fonts, colors, spacing, and menu content, is a **placeholder** that follows good typographic practice, not the actual required spec.

Once the real spec is available, only two files should need changes to match it exactly:

- **`src/index.css`** — the `:root` block at the top holds every font, color, and font-size value as a CSS variable. Update the values there (not elsewhere in the codebase) to match the spec.
- **`src/data/menu.js`** — swap in the real section titles, item names, descriptions, and prices.

The component structure (`MenuSection`, `MenuItem`) and layout in `App.css` shouldn't need to change for a content/token swap.

## Setup and running locally

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (typically `http://localhost:5173`).

To build a production bundle:

```bash
npm run build
```

The output goes to `dist/`, ready to deploy (e.g. to Netlify).

## Structure

```
src/
  data/
    menu.js            # section + item content (placeholder)
  components/
    MenuItem.jsx         # one item: name, description, price
    MenuSection.jsx        # a category heading + its list of items
  App.jsx                   # renders all sections from menu.js
  App.css                    # layout styling
  index.css                   # design tokens: fonts, colors, font sizes
```

## Notes on consistency

Per the assignment's emphasis on attention to detail:

- Item names use title case; descriptions use sentence case, consistently.
- All prices are right-aligned and share one font/size/color across every item.
- Section titles share one font/size/color across every section.
- API integration was not implemented, it was marked optional/advantageous in the assignment, not required.
