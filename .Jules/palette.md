## 2024-05-25 - Linked Error Messages to Inputs via ARIA
**Learning:** In highly customized floating-label forms, custom error spans are completely invisible to screen readers unless explicitly linked using `aria-describedby` and `aria-live` regions. `aria-invalid` also needs to be synced with the error state.
**Action:** Always map inline error messages to their inputs using `id` and `aria-describedby`, and use `aria-live="polite"` so screen readers announce validation errors dynamically.

## 2025-02-12 - Semantic Roles on Generic Elements and Contextual Labels
**Learning:** Adding `aria-label` to a `div` element with a background image is ignored by screen readers because the element lacks semantic meaning. Furthermore, repetitive link texts like "View on GitHub" in a list of projects create a poor experience for screen reader users navigating by links.
**Action:** Always add `role="img"` when applying `aria-label` to a `div` used as a background image. Ensure repetitive links (like GitHub icons) have context-aware `aria-label` attributes (e.g., ``aria-label={`View ${project.title} on GitHub`}``).