# Bolt's Performance Journal

## 2025-05-15 - [IntersectionObserver for Navigation Tracking]
**Learning:** Using raw `scroll` event listeners with `getBoundingClientRect()` in a loop causes frequent layout thrashing and main-thread congestion. For navigation components that track active sections, `IntersectionObserver` is significantly more efficient as it offloads visibility calculations to the browser's compositor thread and only triggers callbacks when thresholds are crossed.
**Action:** Always prefer `IntersectionObserver` over `window.scrollY` or `getBoundingClientRect()` for tracking element visibility or active scroll states. Use a root margin to fine-tune the "active" zone (e.g., `-30% 0px -60% 0px` for top-heavy activation).

## 2025-05-16 - [Visibility-aware Animations & Layout Thrashing]
**Learning:** Heavy background animations (Canvas, Three.js) continue to consume significant CPU/GPU resources even when scrolled out of view. Pausing these loops via `IntersectionObserver` can drastically reduce energy consumption and improve framerates for other page elements. Additionally, calling `getBoundingClientRect()` inside a `mousemove` handler triggers synchronous layout reflows (layout thrashing). Caching the bounding box on `mouseenter` and updating it only on `scroll`/`resize` events keeps the main thread clear.
**Action:** Use `react-intersection-observer` to gate `requestAnimationFrame` or `useFrame` loops. Avoid layout-reading APIs in high-frequency event handlers; cache measurements and update them only when the environment changes.

## 2025-05-17 - [Animation Loop Optimization via Hoisting]
**Learning:** In high-frequency animation loops (60fps), redundant property access (e.g., `.length`) and repetitive math operations (e.g., `i * fontSize`) on every frame create unnecessary CPU overhead. Hoisting lookups and pre-calculating constant coordinates during initialization or resize significantly reduces the per-frame workload.
**Action:** For all canvas or animation loops, hoist length lookups and pre-calculate any values that don't change between frames (like X-coordinates for static columns).
