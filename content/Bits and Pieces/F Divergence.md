---
title:
enableToc: false
draft:
tags: Information theory
---
The $f$-divergence is a family of divergences between two probability distributions $p$ and $q$ defined by a convex function $f: \mathbb{R}_+ \to \mathbb{R}$. It is defined as
$$
\mathbb{D}_f(p \| q) = \int q(x) f\left(\frac{p(x)}{q(x)}\right) \, dx
$$
The function $f$ is called the generator of $\mathbb{D}_f$, and is always convex. The $f$-divergence is a generalization of the more-famous Kullback-Leibler divergence, which corresponds to the case where $f(t) = t \log t$.

### See also

### References