## 2024-05-25 - Linked Error Messages to Inputs via ARIA
**Learning:** In highly customized floating-label forms, custom error spans are completely invisible to screen readers unless explicitly linked using `aria-describedby` and `aria-live` regions. `aria-invalid` also needs to be synced with the error state.
**Action:** Always map inline error messages to their inputs using `id` and `aria-describedby`, and use `aria-live="polite"` so screen readers announce validation errors dynamically.
## 2024-05-27 - Disabled State Styling in Reusable Components
**Learning:** Reusable button components often accept a `disabled` prop but lack internal CSS mapping for it. This means disabled buttons still look active, provide misleading hover effects, and confuse users during async states (like form submission).
**Action:** Always map disabled state internally inside reusable button components using pseudo-classes (e.g., `disabled:opacity-50 disabled:cursor-not-allowed`) and explicitly negate their active/hover states to provide clear visual feedback.
## 2026-05-27 - Added ARIA labels to interactive elements
**Learning:** Found several buttons and clickable elements missing accessible names or structural aria tags (like aria-controls, aria-pressed).
**Action:** Applied aria-labels to navigation buttons, filter controls, expandable content headers, and interactive spans to ensure robust screen reader support.

## 2025-06-01 - Keyboard Navigation Visibility for Custom Buttons
**Learning:** High-contrast glow effects and custom borders often obscure default browser focus outlines. Users navigating via keyboard lose their place without explicit, high-visibility focus rings that contrast with the dark background and the component's own borders.
**Action:** Always implement `focus-visible:ring-2 focus-visible:ring-offset-2` on custom interactive components, using a ring-offset that matches the background color to ensure the indicator remains clearly visible.
