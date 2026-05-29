## 2026-05-29 - Accessible loading state
**Learning:** The loading states in the async components (like GitHubStats.tsx) missed screen reader announcements.
**Action:** To ensure loading states are perceived by screen readers without interrupting the user unnecessarily, adding `role="status"`, `aria-live="polite"`, and an `.sr-only` screen reader string helps significantly.
