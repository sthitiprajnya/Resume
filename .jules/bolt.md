# Bolt's Performance Journal

## 2025-05-15 - [IntersectionObserver for Navigation Tracking]
**Learning:** Using raw `scroll` event listeners with `getBoundingClientRect()` in a loop causes frequent layout thrashing and main-thread congestion. For navigation components that track active sections, `IntersectionObserver` is significantly more efficient as it offloads visibility calculations to the browser's compositor thread and only triggers callbacks when thresholds are crossed.
**Action:** Always prefer `IntersectionObserver` over `window.scrollY` or `getBoundingClientRect()` for tracking element visibility or active scroll states. Use a root margin to fine-tune the "active" zone (e.g., `-30% 0px -60% 0px` for top-heavy activation).
