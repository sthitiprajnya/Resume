## 2026-05-27 - [Content Security Policy for Static Export]
**Vulnerability:** XSS and Data Exfiltration risks in static portfolio site.
**Learning:** For a Next.js project using `output: 'export'`, CSP must be implemented via `<meta>` tags rather than `middleware.ts`, as there is no server-side logic at runtime on platforms like GitHub Pages.
**Prevention:** Always include a tailored CSP in the base layout for static sites, ensuring only trusted domains (like GitHub APIs and EmailJS) are allowed.

## 2026-05-28 - [Ghost Honeypot Implementation]
**Vulnerability:** Incomplete bot protection (Logic without Input).
**Learning:** The contact form included honeypot validation logic in `handleSubmit`, but the actual `<input>` field was missing from the JSX. This rendered the protection non-functional as bots had no field to interact with.
**Prevention:** Verify that security logic (backend/handler) always has a corresponding implementation in the interface (frontend/JSX).
