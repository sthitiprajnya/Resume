# Sentinel's Journal - Critical Security Learnings

## 2025-05-14 - Dependency Supply Chain Hardening
**Vulnerability:** Command injection in `glob` (<10.5.0) and XSS in `postcss` (<8.5.10) in transitive dependencies.
**Learning:** Even if direct dependencies are updated, transitive dependencies can remain vulnerable unless explicitly overridden in the package manager configuration.
**Prevention:** Regularly run `pnpm audit` and use `pnpm.overrides` to enforce secure versions of transitive dependencies that aren't being updated by parent packages.
