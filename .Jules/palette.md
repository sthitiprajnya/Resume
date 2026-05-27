## 2024-05-25 - Linked Error Messages to Inputs via ARIA
**Learning:** In highly customized floating-label forms, custom error spans are completely invisible to screen readers unless explicitly linked using `aria-describedby` and `aria-live` regions. `aria-invalid` also needs to be synced with the error state.
**Action:** Always map inline error messages to their inputs using `id` and `aria-describedby`, and use `aria-live="polite"` so screen readers announce validation errors dynamically.
## 2024-05-27 - Disabled State Styling in Reusable Components
**Learning:** Reusable button components often accept a `disabled` prop but lack internal CSS mapping for it. This means disabled buttons still look active, provide misleading hover effects, and confuse users during async states (like form submission).
**Action:** Always map disabled state internally inside reusable button components using pseudo-classes (e.g., `disabled:opacity-50 disabled:cursor-not-allowed`) and explicitly negate their active/hover states to provide clear visual feedback.
