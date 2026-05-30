# Sentinel's Journal - Critical Security Learnings

## 2025-05-15 - Dependency Supply Chain Vulnerabilities
**Vulnerability:** Identified high-severity command injection in `glob` (<10.5.0), moderate-severity XSS in `postcss` (<8.5.10), and low-severity ReDoS in `@eslint/plugin-kit` (<0.3.4). These were nested sub-dependencies introduced by `next` and `eslint`.
**Learning:** Even if primary dependencies are relatively up-to-date, their dependency trees can harbor critical vulnerabilities that aren't always resolved by a simple `pnpm update` if semver ranges in parent packages are restrictive or if the parent hasn't been patched yet.
**Prevention:** Regularly run `pnpm audit`. Use `pnpm.overrides` (or `resolutions` in npm/yarn) to forcefully update deep sub-dependencies to patched versions without waiting for upstream package maintainers to release a fix.
