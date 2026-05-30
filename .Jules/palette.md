## 2026-05-29 - Accessible loading state
**Learning:** The loading states in the async components (like GitHubStats.tsx) missed screen reader announcements.
**Action:** To ensure loading states are perceived by screen readers without interrupting the user unnecessarily, adding `role="status"`, `aria-live="polite"`, and an `.sr-only` screen reader string helps significantly.

## 2025-05-15 - Marquee Accessibility (WCAG 2.2.2)
**Learning:** Scrolling marquees can be distracting or impossible to read for some users. They must provide a way to pause the motion and be keyboard accessible.
**Action:** Implement `tabIndex={0}`, `role="region"`, and `aria-label` for keyboard navigation. Use CSS `animation-play-state: paused` on `:hover` and `:focus-within` to allow users to stop the movement at will.
