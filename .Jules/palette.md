## 2024-05-25 - Linked Error Messages to Inputs via ARIA
**Learning:** In highly customized floating-label forms, custom error spans are completely invisible to screen readers unless explicitly linked using `aria-describedby` and `aria-live` regions. `aria-invalid` also needs to be synced with the error state.
**Action:** Always map inline error messages to their inputs using `id` and `aria-describedby`, and use `aria-live="polite"` so screen readers announce validation errors dynamically.
## 2024-05-27 - Disabled State Styling in Reusable Components
**Learning:** Reusable button components often accept a `disabled` prop but lack internal CSS mapping for it. This means disabled buttons still look active, provide misleading hover effects, and confuse users during async states (like form submission).
**Action:** Always map disabled state internally inside reusable button components using pseudo-classes (e.g., `disabled:opacity-50 disabled:cursor-not-allowed`) and explicitly negate their active/hover states to provide clear visual feedback.
## 2026-05-27 - Added ARIA labels to interactive elements
**Learning:** Found several buttons and clickable elements missing accessible names or structural aria tags (like aria-controls, aria-pressed).
**Action:** Applied aria-labels to navigation buttons, filter controls, expandable content headers, and interactive spans to ensure robust screen reader support.
## 2025-05-25 - Copy-to-Clipboard Feedback Pattern
**Learning:** Providing immediate visual and accessibility feedback for "Copy to Clipboard" actions (like changing an icon and ARIA label for 2 seconds) significantly improves the perceived reliability of the feature.
**Action:** When implementing copy-to-clipboard, always include a temporary success state that updates both the visual icon and the `aria-label` to confirm the action to all users.
## 2025-05-28 - Layered Feedback for Copy-to-Clipboard
**Learning:** While icon changes and ARIA label updates provide immediate local feedback, a global toast notification ensures users notice the success even if their focus is not directly on the button (e.g. on larger screens). Human-readable messages in toasts (including emojis) add a "touch of delight" and make the system feel more responsive.
**Action:** Supplement local interactive state changes with global toast notifications for critical "invisible" actions like clipboard copying, ensuring messages are friendly and human-readable.
