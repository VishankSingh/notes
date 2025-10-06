---
title:
draft:
tags:
---
Let $X_1, X_2, \dots , X_n$ be independent random variables such that $X_i \in [a_i,b_i]$ almost surely
for all $i$. We define
$$
S_n = \sum_{i=1}^{n} X_i.
$$
Then, $\forall \varepsilon > 0$,
$$
Pr\left( S_n - \mathbb{E}[S_n] \geq \varepsilon \right) \leq \exp \left( - \dfrac{2\varepsilon^2}{\sum_{i=1}^{n} (b_i-a_i)^2 } \right),
$$
and similarly,
$$
Pr\left( S_n - \mathbb{E}[S_n] \leq -\varepsilon \right) \leq \exp \left( - \dfrac{2\varepsilon^2}{\sum_{i=1}^{n} (b_i-a_i)^2 } \right).
$$

Equivalently, for $\tilde{X} = S_n/n$,
$$
Pr\left( \tilde{X} - \mathbb{E}[\tilde{X}] \geq \varepsilon \right) \leq \exp \left( - \dfrac{2n^2\varepsilon^2}{\sum_{i=1}^{n} (b_i-a_i)^2 } \right).
$$