# Nexora - Digital Innovation Platform

## Project Overview
Nexora is a premium multi-page digital innovation company website designed with a modern dark glassmorphic visual system. The website serves as a landing platform showcasing custom software, mobile app, API, data analytics, and AI development solutions. It includes a comprehensive services list, industry verticals, contact interfaces, sign-in/sign-up forms, legal notices, and an animated placeholder page for pending routes.

The overall design direction features:
- Corporate, high-end digital innovation branding ("Nexora").
- A premium, immersive dark glassmorphic design system with harmonized radial page gradients and fixed header/footer backdrops.
- Immersive background video (`a2.mp4`) integrated seamlessly across all pages for interactive visual testing.
- Clean component-based HTML pages linking to a unified stylesheet (`styles.css`) and interactive script (`menu.js`).
- Complete responsiveness across all device viewports.

---

## Technical Stack & Resources

### Core Technologies
- **HTML5 Semantic Markup**: Built with structured layout components (`header`, `nav`, `main`, `section`, `article`, `footer`, `form`).
- **CSS3 Layouts & Style System**: Powered by CSS custom variables (`:root`), Flexbox, CSS Grid, custom keyframe transitions, and backdrop blur filters.
- **Client-Side JavaScript**: Interactivity is driven by `menu.js`, which handles the state of the responsive mobile dropdown navigation menu and automatically resets menu states on viewport resize events.

### Typography & Icons
- **Primary Typography**: `Outfit` (sans-serif) for clean headers and brand elements.
- **Secondary Typography**: `Plus Jakarta Sans` (sans-serif) for readable body text and interfaces.
- **Iconography**: Font Awesome 6.5.0 CDN for social icons, form icons, and visual indicators.

### Visual Architecture
- **Streamlined Semantic Variables**: Built with a production-grade 10-variable token system in `:root` (for colors, primary page gradients, shared shadows, card borders, and border-radii).
- **Zero Inline Styles**: All styling, layout overrides, custom backgrounds, and card metrics have been migrated to the external stylesheet `styles.css`.
- **Background Video**: Implements a high-quality video backdrop layer (`video-bg`) positioned using `fixed` layers beneath page content, with a semi-transparent overlay to ensure maximum text readability.

---

## Folder Structure & Files

- `index.html`: Home page containing hero action grid, key feature cards, and brand introduction.
- `services.html`: Service catalog detailing core technologies (e.g., custom software, AI/ML, data analytics) with shortened description copy and features checklists.
- `industry.html`: Domain focus page highlighting industry solutions (healthcare, finance, logistics, etc.).
- `contact.html`: Communication cards paired with an input-validated contact request form.
- `login.html` & `signup.html`: Responsive authentication screens featuring a benefits panel and unified login/registration forms.
- `privacy-policy.html` & `terms.html`: Typography-focused legal policy frameworks.
- `coming_soon.html`: Shared animated construction page for pending links.
- `styles.css`: The central, modular stylesheet styling the entire project.
- `menu.js`: Responsive navigation menu toggling and resize event handler.
- `a2.mp4`: Background loop video.

---

## Responsive Navigation & Layouts

The website operates on a **mobile-first responsive strategy** using CSS Grid configurations and media query breakpoints:

### Navigation Breakpoints
- **Desktop/Tablet Breakpoint (992px and up)**: Navigation is rendered inline at the top of the screen.
- **Mobile Hamburger Dropdown Breakpoint (991px and below)**: Navigation collapses into a hamburger icon. Clicking the icon opens a responsive, dark glassmorphic menu dropdown styled to match the page background.
- **Compact Viewport Breakpoint (489px and below)**: Header padding and text scaling adjust dynamically to guarantee alignment and zero text truncation.

### Layout Breakpoints
- **Mobile (Base)**: Single-column layout for hero, feature cards, services, and forms.
- **Tablet (`@media (min-width: 768px)`)**: Upgrades cards to 2 columns and structures the footer into a multi-column horizontal list.
- **Desktop (`@media (min-width: 1280px)`)**: Expands stats cards to 4 columns, and service/industry grids to 3 columns for optimal wide-screen viewing.

---

## Premium UI & Design Decisions

### 1) Cohesive Header & Footer Styling
Both the header and footer share the dark header gradient (`var(--gradient-header)`) along with a `backdrop-filter: blur(4px)`. They are top-bordered using the shared layout border variable, providing a premium, unified page boundary structure.

### 2) Dark Glassmorphism Components
Card elements (`.card`, `.service-card`, `.industry-card`) use semi-transparent background surfaces (`var(--color-bg-surface)`), thin borders, and radial background gradients to pop from the dark page background. 

### 3) Action Buttons
- **Primary Buttons (`.btn.primary`)**: Powered by a blue brand gradient (`var(--gradient-button-primary)`) with glowing shadows and vertical hover transitions.
- **Secondary Buttons (`.btn.secondary`)**: Styled with a semi-transparent glass border and light text, transitioning to a brighter background and deep shadow on hover.

### 4) Clean Code Standards
- Zero inline `style="..."` attributes or inline `<style>` tags.
- Replaced outdated personal email/name placeholders with consistent "Nexora" company branding.
- Restored original high-quality vector BMW logos in the footers of all primary pages.
- Stripped unused dependencies, including deprecated Lottie script players and duplicate CSS navigation rules.

---

## How to Run & Test
1. Double-click or open `index.html` in your web browser, or launch it with a local server (e.g., Live Server).
2. Resize the browser window from desktop down to mobile viewports to inspect the navigation breakpoints at `991px` and `489px`.
3. Click through the primary menu headers and footer redirects to verify path accuracy.
