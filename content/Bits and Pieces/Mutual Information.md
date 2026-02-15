---
title:
enableToc: false
draft:
tags: Information_Theory
---
<span class="blue"><strong>Definition</strong> (<em>Mutual Information</em>):</span>
Let $P_{X,Y}$ be a joint probability measure on
$(\mathcal{X} \times \mathcal{Y}, \mathcal{F} \otimes \mathcal{G})$
with marginals $P_X$ and $P_Y$.
The Mutual Information $I(X; Y)$ is defined as
$$
I(X; Y) = D_{\mathrm{KL}}(P_{X,Y} \| P_X \times P_Y).
$$

If $P_{X,Y} \ll P_X \times P_Y$, then in terms of densities relative to a
product reference measure $\mu \times \nu$,
$$
I(X; Y) = \int_{\mathcal{X}} \int_{\mathcal{Y}}
p(x, y) \log \frac{p(x, y)}{p(x)p(y)} \, d\mu(x) d\nu(y).
$$

<span class="blue"><strong>Remark</strong>:</span>
Mutual information is symmetric, $I(X;Y) = I(Y;X)$, and non-negative.
$I(X;Y) = 0$ if and only if $P_{X,Y} = P_X \times P_Y$, meaning $X$ and $Y$ are independent.

<span class="blue"><strong>Remark</strong>:</span>
Unlike Shannon entropy or joint entropy, mutual information is a truly intrinsic functional
of the joint measure $P_{X,Y}$. Mutual information is invariant under measure-preserving isomorphisms
of the underlying probability spaces, and its value does not depend on the choice of reference measures
$\mu$ and $\nu$.

<span class="blue"><strong>Remark</strong>:</span>
Mutual information can be expressed through the inclusion-exclusion-like relations:
$$
I(X;Y) = H(X) + H(Y) - H(X,Y) = H(X) - H(X|Y) = H(Y) - H(Y|X).
$$
These identities hold provided the constituent entropies are finite.

<span class="blue"><strong>Remark</strong>:</span>
In the context of $f$-divergences, mutual information is the specific case where $f(t) = t \log t$.
Other "generalized mutual informations" can be defined by taking $D_f(P_{X,Y} \| P_X \times P_Y)$
for different convex functions $f$.

### See also

### References