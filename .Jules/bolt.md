## 2025-05-14 - [Initial Performance Exploration]
**Learning:** The `ParticleField` component runs a loop over 1800 particles every frame (60fps). Using `Math.sqrt` for boundary and repulsion checks is a classic micro-optimization target. Pre-calculating the squared radius and using squared distance comparisons can save thousands of square root operations per second.
**Action:** Always prefer squared distance comparisons in high-frequency loops when possible.
