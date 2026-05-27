## 2026-05-27 - [Content Security Policy for Static Export]
**Vulnerability:** XSS and Data Exfiltration risks in static portfolio site.
**Learning:** For a Next.js project using `output: 'export'`, CSP must be implemented via `<meta>` tags rather than `middleware.ts`, as there is no server-side logic at runtime on platforms like GitHub Pages.
**Prevention:** Always include a tailored CSP in the base layout for static sites, ensuring only trusted domains (like GitHub APIs and EmailJS) are allowed.
