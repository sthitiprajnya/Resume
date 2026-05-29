## 2026-05-29 - Accessible loading state
**Learning:** The loading states in the async components (like GitHubStats.tsx) missed screen reader announcements.
**Action:** To ensure loading states are perceived by screen readers without interrupting the user unnecessarily, adding `role="status"`, `aria-live="polite"`, and an `.sr-only` screen reader string helps significantly.

## 2026-05-29 - Interactive 'Redacted' Metadata UX
**Learning:** For thematic metadata elements (like 'redacted' text in a security portfolio), providing click-to-copy functionality adds a layer of micro-interaction that delights users while serving a minor utility. Ensuring these elements are keyboard-accessible (with proper focus rings and key handlers) is crucial as they are non-semantic interactive elements.
**Action:** When implementing interactive 'redacted' or 'classified' UI elements, use `role="button"`, `tabIndex={0}`, and clear `aria-label`s. Provide visual feedback via toast notifications on successful interaction.
