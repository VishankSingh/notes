---
title:
draft:
tags: Information_Theory
---
<span class="blue"><strong>Definition</strong> (<em>Shannon Entropy</em>):</span>
Let $P$ be a probability measure on a measurable space $(\mathcal{X}, \mathcal{F})$, and let $p = \frac{dP}{d\mu}$ be its density with respect to a reference measure $\mu$. The Shannon Entropy $H(P)$ is defined as:
$$
H(P) = -\int_{\mathcal{X}} p(x) \log p(x) \, d\mu(x) = -E_P[\log p(X)]
$$
where the integral is taken over the support of $P$.

<span class="blue"><strong>Remark</strong>:</span>
Shannon entropy is not an intrinsic functional of the probability measure $P$ alone,
but depends on the choice of reference measure $\mu$.
Different choices of $\mu$ lead to entropy values that differ by an additive constant.

<span class="blue"><strong>Remark</strong>:</span>
In the discrete setting, taking $\mu$ to be the counting measure recovers the usual discrete entropy.
In the continuous setting, taking $\mu$ to be the Lebesgue measure yields differential entropy,
which may be negative and lacks invariance under coordinate transformations.

<span class="blue"><strong>Remark</strong>:</span>
The expression $H(P)=-E_P[\log p(X)]$ is well-defined only when $\log p$ is $P$-integrable.
If this condition fails, the entropy may be infinite or undefined.

<span class="blue"><strong>Definition</strong> (<em>Cross Entropy</em>):</span>
Let $P$ and $Q$ be probability measures on $(\mathcal{X}, \mathcal{F})$. If $P$ is absolutely continuous with respect to a reference measure $\mu$ (with density $p$) and $Q$ has density $q$, the Cross Entropy $H(P, Q)$ is:
$$
H(P, Q) = -\int_{\mathcal{X}} p(x) \log q(x) \, d\mu(x) = -E_P[\log q(X)]
$$

<span class="blue"><strong>Remark</strong>:</span>
Cross entropy is not symmetric in its arguments and is finite only when $P\ll Q$.
If $Q(x)=0$ on a set of positive $P$-measure, then $H(P,Q)=\infty$.

<span class="blue"><strong>Remark</strong>:</span>
Cross entropy decomposes as
$$
H(P,Q) = H(P) + D_{\mathrm{KL}}(P\|Q),
$$
whenever both sides are well-defined.
This identity makes explicit the role of cross entropy in statistical estimation
and maximum likelihood methods.

<span class="blue"><strong>Definition</strong> (<em>Joint Entropy</em>):</span>
Let $P_{X,Y}$ be a joint probability measure on the product space $(\mathcal{X} \times \mathcal{Y}, \mathcal{F} \otimes \mathcal{G})$ with joint density $p(x, y)$ relative to $\mu \times \nu$. The Joint Entropy $H(X, Y)$ is:
$$
H(X, Y) = -\int_{\mathcal{X}} \int_{\mathcal{Y}} p(x, y) \log p(x, y) \, d\mu(x) d\nu(y)
$$

<span class="blue"><strong>Remark</strong>:</span>
Joint entropy is defined relative to the product reference measure $\mu\times\nu$.
As with marginal entropy, its value depends on the choice of reference measures.

<span class="blue"><strong>Remark</strong>:</span>
The joint entropy satisfies $H(X,Y)\le H(X)+H(Y)$ whenever the entropies are finite,
with equality if and only if $X$ and $Y$ are independent.

<span class="blue"><strong>Definition</strong> (<em>Conditional Entropy</em>):</span>
Given a joint measure $P_{X,Y}$, the Conditional Entropy $H(Y|X)$ is the expected entropy of the conditional distributions:
$$
H(Y|X) = -\int_{\mathcal{X}} \int_{\mathcal{Y}} p(x, y) \log p(y|x) \, d\mu(x) d\nu(y)
$$
where $p(y|x) = \frac{p(x, y)}{p(x)}$ is the conditional density. It satisfies the relation $H(Y|X) = H(X, Y) - H(X)$.

<span class="blue"><strong>Remark</strong>:</span>
The conditional density $p(y|x)$ is defined only up to $P_X$-null sets.
Accordingly, conditional entropy is defined as an expectation with respect to $P_X$,
and pointwise values of $p(y|x)$ outside sets of full measure are irrelevant.

<span class="blue"><strong>Remark</strong>:</span>
The identity $H(Y|X)=H(X,Y)-H(X)$ holds whenever the relevant entropies are finite.
This equality is a consequence of the chain rule for Radon--Nikodym derivatives.

<span class="blue"><strong>Remark</strong>:</span>
Unlike marginal entropy, conditional entropy is invariant under changes of the reference
measure on $\mathcal Y$, provided the joint measure $P_{X,Y}$ is fixed.