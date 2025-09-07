---
title:
draft:
tags: Information theory
---
The entropy of a discrete random variable $X$ with distribution $p$ is defined as
$$
\mathbb{H}(X) = -\mathbb{E}_{X \sim p} \left[ \log p(X) \right] = -\sum_{x} p(x) \log p(x)
$$

also denoted as $H(p)$.
When the random variable $X$ is continuous, the entropy is known as differential entropy.
It gives a lower bound on the number of bits (if logarithm base 2 is used) needed to encode the outcomes of $X$ using an optimal code.

### See also

[[Kullback-Leibler Divergence]]  
[[Cross Entropy]]  

### References