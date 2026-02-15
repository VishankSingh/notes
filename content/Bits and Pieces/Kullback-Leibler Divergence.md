---
title:
enableToc: false
draft:
tags: Information_Theory
---
<span class="blue"><strong>Definition</strong> (<em>Kullback--Leibler Divergence</em>):</span>
Let $P$ and $Q$ be probability measures on a measurable space $(\mathcal{X}, \mathcal{F})$.
The Kullback--Leibler divergence (or relative entropy) of $P$ with respect to $Q$ is defined as:
$$
D_{\mathrm{KL}}(P \| Q) =
\begin{cases}
\int_{\mathcal{X}} \log \left( \frac{dP}{dQ} \right) \, dP & \text{if } P \ll Q \\
+\infty & \text{otherwise}
\end{cases}
$$
Using the density $p = \frac{dP}{d\mu}$ and $q = \frac{dQ}{d\mu}$ relative to a common reference measure $\mu$, this is:
$$
D_{\mathrm{KL}}(P \| Q) = \int_{\mathcal{X}} p(x) \log \frac{p(x)}{q(x)} \, d\mu(x),
$$
whenever $P\ll Q$ and $p\log(p/q)$ is $\mu$-integrable.

<span class="blue"><strong>Remark</strong>:</span>
KL divergence is a special case of $f$-divergence with $f(t)=t\log t$.
Its second-order expansion around $P=Q$ induces the Fisher information metric,
which underlies the local geometry of statistical models.

<span class="blue"><strong>Remark</strong>:</span>
Gibbs' Inequality states that $D_{\mathrm{KL}}(P \| Q) \ge 0$, with equality if and only if $P = Q$ almost everywhere.
This follows from Jensen's inequality applied to the convex function $t\log t$
(or equivalently to $-\log t$ under $P$).

<span class="blue"><strong>Remark</strong>:</span>
$D_{\mathrm{KL}}(P \| Q)$ is not a true metric as it lacks symmetry ($D_{\mathrm{KL}}(P \| Q) \neq D_{\mathrm{KL}}(Q \| P)$)
and does not satisfy the triangle inequality.
In Bayesian inference, the asymmetry distinguishes between the "projection" of a complex
posterior onto a simpler family (variational inference) versus the reverse.

<span class="blue"><strong>Remark</strong>:</span>
The KL divergence is invariant under coordinate transformations (reparameterizations).
If $T: \mathcal{X} \to \mathcal{Y}$ is a measure-preserving isomorphism, then
$D_{\mathrm{KL}}(P \| Q) = D_{\mathrm{KL}}(T_*P \| T_*Q)$, where $T_*$ is the push-forward measure.

### See also
[[Mutual Information]]

### References