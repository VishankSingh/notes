---
title:
enableToc: false
draft:
tags: Information theory
---
The joint entropy of two discrete random variables $X$ and $Y$ with joint distribution $p$ is defined as
$$
\mathbb{H}(X, Y) = -\mathbb{E}_{(X, Y) \sim p} \left[ \log p(X, Y) \right] = -\sum_{x, y} p(x, y) \log p(x, y)
$$
It quantifies the amount of uncertainty associated with the pair $(X, Y)$.
The upper and lower bounds of the joint entropy are given by
$$
0 \leq \max\{\mathbb{H}(X), \mathbb{H}(Y)\} \leq \mathbb{H}(X, Y) \leq \mathbb{H}(X) + \mathbb{H}(Y)
$$
with later equality when $X$ and $Y$ are independent, in which $\mathbb{H}(X, Y) = \mathbb{H}(X) + \mathbb{H}(Y)$.

### See also

### References