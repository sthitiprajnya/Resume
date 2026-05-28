## 2026-05-27 - [Content Security Policy for Static Export]
**Vulnerability:** XSS and Data Exfiltration risks in static portfolio site.
**Learning:** For a Next.js project using `output: 'export'`, CSP must be implemented via `<meta>` tags rather than `middleware.ts`, as there is no server-side logic at runtime on platforms like GitHub Pages.
**Prevention:** Always include a tailored CSP in the base layout for static sites, ensuring only trusted domains (like GitHub APIs and EmailJS) are allowed.

## 2025-05-27 - [Non-functional Honeypot due to missing UI component]
**Vulnerability:** Broken anti-spam protection (Honeypot).
**Learning:** Security logic (honeypot checks) was implemented in the form handler, but the actual bait field was missing from the JSX, rendering the protection useless against bots.
**Prevention:** Ensure "Defense in Depth" features like honeypots are verified in the final rendered UI, not just the logic handlers.
