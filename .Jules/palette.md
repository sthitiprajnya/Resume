## 2026-05-29 - Accessible loading state
**Learning:** The loading states in the async components (like GitHubStats.tsx) missed screen reader announcements.
**Action:** To ensure loading states are perceived by screen readers without interrupting the user unnecessarily, adding `role="status"`, `aria-live="polite"`, and an `.sr-only` screen reader string helps significantly.

## 2026-05-30 - Accessible scrolling content
**Learning:** Scrolling content like marquees can be problematic for users with motion sensitivity or those who need more time to read. WCAG 2.2.2 (Pause, Stop, Hide) requires a mechanism to pause moving content.
**Action:** Implementing `animation-play-state: paused` on both `:hover` and `:focus-within` ensures that both mouse and keyboard users can control the motion. Adding `role="region"`, `aria-label`, and `tabIndex={0}` makes the section discoverable and interactive for assistive technologies.
