## 2026-05-27 - [Content Security Policy for Static Export]
**Vulnerability:** XSS and Data Exfiltration risks in static portfolio site.
**Learning:** For a Next.js project using `output: 'export'`, CSP must be implemented via `<meta>` tags rather than `middleware.ts`, as there is no server-side logic at runtime on platforms like GitHub Pages.
**Prevention:** Always include a tailored CSP in the base layout for static sites, ensuring only trusted domains (like GitHub APIs and EmailJS) are allowed.

## 2025-05-27 - [Non-functional Honeypot due to missing UI component]
**Vulnerability:** Broken anti-spam protection (Honeypot).
**Learning:** Security logic (honeypot checks) was implemented in the form handler, but the actual bait field was missing from the JSX, rendering the protection useless against bots.
**Prevention:** Ensure "Defense in Depth" features like honeypots are verified in the final rendered UI, not just the logic handlers.

## 2025-05-27 - [Insecure Iframe Sandbox Pattern]
**Vulnerability:** Ineffective security hardening and UI breakage.
**Learning:** Adding `sandbox="allow-scripts allow-same-origin"` to a same-origin iframe (like a PDF viewer) is a security anti-pattern as it allows the content to remove its own sandbox. Furthermore, it often breaks built-in browser PDF renderers.
**Prevention:** Avoid the `allow-scripts allow-same-origin` combination on the same origin. Prioritize reducing attack surface by removing unused code.
