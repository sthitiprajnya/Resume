## 2025-05-14 - [Initial Performance Exploration]
**Learning:** The `ParticleField` component runs a loop over 1800 particles every frame (60fps). Using `Math.sqrt` for boundary and repulsion checks is a classic micro-optimization target. Pre-calculating the squared radius and using squared distance comparisons can save thousands of square root operations per second.
**Action:** Always prefer squared distance comparisons in high-frequency loops when possible.
## 2025-05-15 - [High-Frequency React Re-render Optimization]
**Learning:** Updating React state on every mouse movement (60fps+) in a high-level provider (like `CursorProvider`) causes the entire application to re-render, leading to significant CPU overhead. Additionally, manual DOM updates in React components can be overwritten by reconciliation if the JSX still defines those properties (like `opacity: 0`).
**Action:** Move high-frequency state to `useRef` and use `requestAnimationFrame` for direct DOM updates. Always ensure that the animation loop re-applies any critical visual state (opacity, classes) that React might reset during a background re-render.
