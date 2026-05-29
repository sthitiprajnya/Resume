## 2026-05-29 - Accessible loading state
**Learning:** The loading states in the async components (like GitHubStats.tsx) missed screen reader announcements.
**Action:** To ensure loading states are perceived by screen readers without interrupting the user unnecessarily, adding `role="status"`, `aria-live="polite"`, and an `.sr-only` screen reader string helps significantly.

## 2025-05-15 - Accessible Marquee Patterns
**Learning:** Scrolling marquees can be distracting or impossible to read for some users. To comply with WCAG 2.2.2, they must be pauseable.
**Action:** Use `group-hover:[animation-play-state:paused]` and `group-focus-within:[animation-play-state:paused]` on animated children. Ensure the container has `role="region"`, a descriptive `aria-label`, and `tabIndex={0}` to allow keyboard access for pausing.
