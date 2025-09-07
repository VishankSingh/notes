---
title:
enableToc: false
draft:
tags: Information theory
---
The cross entropy between two probability distributions $p$ and $q$ is defined as
$$
\mathbb{H}_{ce}(p, q) = -\mathbb{E}_{X \sim p} \left[ \log q(X) \right] = -\sum_{x} p(x) \log q(x)
$$
This measures the average number of bits needed to encode events from $p$ using a code optimised for $q$.
The cross entropy is always greater than or equal to the entropy of $p$, with equality when $p = q$, in which case the expected number of bits is $\mathbb{H}_{ce}(p, q) = \mathbb{H}(p)$. This is also known as the Shannon's source coding theorem.

### See also

### References