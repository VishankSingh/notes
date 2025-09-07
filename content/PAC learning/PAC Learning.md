---

---
A concept class $\mathcal{C}$ is said to be PAC learnable if there exists a learning algorithm
$\mathcal{A}$ and a polynomial function $poly(1/\epsilon, 1/\delta, \ldots)$ such that for any
$\epsilon>0$, $\delta>0$, any distributions $\mathcal{D}$ on $\mathcal{X}$ and
any target concept $c \in \mathcal{C}$, the following holds for any sample size
$m \geq poly(1/\epsilon, 1/\delta, \ldots)$, $h_S = \mathcal{A}(S)$ then
$$
\mathbb{P}_{S\sim D^m}[L_{\mathcal{D},c}(h_S) \leq \epsilon] \geq 1 - \delta
$$

That is, the hypothesis returned by the learning algorithm after observing a polynomial
number of examples is approximately correct (within error $\epsilon$) with high probability
(at least $1-\delta$).
### See also

### References