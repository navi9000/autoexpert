# UI and Workflow QA Checklist

Use this checklist before releasing the Nuxt site. Items marked **confirmed** were found in the current source; the remaining items require browser verification at the listed widths.

## Fix First

- [ ] **Confirmed — make `Contacts` SSR-safe.** `app/components/contacts.vue` reads `window?.innerWidth` during setup. `window` is not defined during server rendering, so initialize `screenWidth` safely (for example, `null`) and set it in `onMounted`.
- [ ] **Confirmed — correct accordion click behavior.** In `faq.vue` and `repairs-service-list.vue`, clicking the plus image calls `toggle(index)` and bubbles to `Accordion`’s `.iconwrapper`, which toggles a second time. A plus-icon click can therefore leave the panel closed. Give one element responsibility for toggling or stop propagation.
- [ ] **Confirmed — make accordions keyboard accessible.** Replace clickable `div`/`p` controls with a semantic button, support Enter/Space, expose `aria-expanded` and `aria-controls`, and give the answer an associated ID.
- [ ] **Confirmed — replace placeholder contact content and inactive CTAs.** The logo, phone number, address, email, and callback/question buttons are placeholders or have no defined workflow. Supply real content and make every CTA open its intended form, route, phone link, or email link.

## Responsive Layout Checks

- [ ] Test every route at 320, 375, 768, 899, 900, 1023, 1024, 1439, and 1440 px widths. Check for clipped cars, text wrapping, horizontal scroll, and content hidden under the absolute header.
- [ ] Verify the menu button does not cover page controls while scrolling and that opening it locks or otherwise manages background scrolling.
- [ ] Check the `Contacts` map around 1420–1439 px. Its JavaScript threshold is 1420 while its two-column CSS layout begins at 1440; ensure the fixed 849 px map does not create an awkward stacked or overflowing layout.
- [ ] Open each service accordion and FAQ item on mobile. Verify only one intended item changes, the plus icon matches state, and answers are fully visible during animation.
- [ ] Review the promotions carousel at desktop widths: first/last slides, centering, card spacing, and touch/keyboard controls.

## Content, Semantics, and Visual Polish

- [ ] Add stable `:key` values to all `v-for` loops, including navigation, service cards, FAQ items, and mobile promotion cards.
- [ ] Use descriptive alt text for meaningful car/service imagery; set decorative background-circle images to `alt=""` so screen readers skip them.
- [ ] Add a `title` to the embedded Google Maps iframe and verify its location matches the published address.
- [ ] Check heading order on every page: one page-level `h1`, followed by logical `h2` sections.
- [ ] Verify visible focus states and adequate text/background contrast for links, buttons, menu items, and accordion controls.

## Release Workflow

- [ ] Run `pnpm build` from a clean dependency install. The current build attempt is blocked by an access-denied error removing `node_modules/.pnpm`; release validation is incomplete until this environment issue is resolved.
- [ ] Test the generated site under the GitHub Pages base path (`/autoexpert/`) and confirm all `public/img/` assets load on direct navigation and refresh.
- [ ] Validate routes (`/`, `/repairs`, `/promotions`, `/about`, `/contacts`) after deployment and check the browser console for hydration, image, and map errors.
