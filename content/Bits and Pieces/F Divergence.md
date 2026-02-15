---
title:
draft:
tags: Information_Theory
---
<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{f}$-Divergence</em>):</span>
Let $P$ and $Q$ be probability measures on a measurable space $(\mathcal{X}, \mathcal{F})$.
Let $f:(0,\infty)\to\mathbb R$ be a convex function with $f(1)=0$, extended to $[0,\infty]$ by lower semicontinuity.

Let $P = P_{\mathrm{ac}} + P_{\mathrm{s}}$ be the Lebesgue decomposition of $P$ with respect to $Q$.
The $f$-divergence of $P$ from $Q$ is defined as
$$
D_f(P\|Q) = \int_{\mathcal X} f\!\left(\frac{dP_{\mathrm{ac}}}{dQ}\right)\,dQ + f'(\infty)\,P_{\mathrm{s}}(\mathcal X),
$$
where $f'(\infty)=\lim_{t\to\infty} \frac{f(t)}{t}$ represents the recession constant of $f$.

If $P\ll Q$, then $P_{\mathrm{s}}=0$ and the definition simplifies to:
$$
D_f(P\|Q)=\int_{\mathcal X} f\!\left(\frac{dP}{dQ}\right)\,dQ.
$$

<span class="blue"><strong>Remark</strong>:</span>
The definition of $f$-divergence is independent of any choice of densities or coordinates on $\mathcal X$.
All expressions are formulated directly in terms of Radon--Nikodym derivatives and Lebesgue decompositions,
making the definition valid for discrete, continuous, and mixed distributions.

<span class="blue"><strong>Remark</strong>:</span>
The singular component $P_{\mathrm{s}}$ captures the portion of $P$ supported on sets of $Q$-measure zero.
The term $f'(\infty)\,P_{\mathrm{s}}(\mathcal X)$ represents the information-theoretic cost of this singular mismatch.
For many divergences of interest (e.g.\ Kullback--Leibler), $f'(\infty)=\infty$, implying
$D_f(P\|Q)=\infty$ whenever $P\not\ll Q$.

<span class="blue"><strong>Remark</strong>:</span>
When $P\ll Q$, the $f$-divergence reduces to an expectation under $Q$ of a convex function of the likelihood ratio
$\frac{dP}{dQ}$. This highlights the role of convexity in establishing properties such as non-negativity,
lower semicontinuity, and the data processing inequality.

<span class="blue"><strong>Remark</strong>:</span>
Many classical information measures arise as special cases of $f$-divergences.
For example, the Kullback--Leibler divergence corresponds to $f(t)=t\log t$,
and the total variation distance corresponds to $f(t)=\frac{1}{2}|t-1|$.

### See also

### References