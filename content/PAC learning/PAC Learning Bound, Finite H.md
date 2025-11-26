### Learning Bound for Finite Hypothesis Class — Consistent Case

Let $\mathcal{H}$ be a finite hypothesis class mapping $\mathcal{X} \to \mathcal{Y}$, and let
$\mathcal{A}$ be an algorithm that, for any target concept $c \in \mathcal{H}$ and i.i.d.
sample $S$, returns a hypothesis $h_S$ that is consistent with $S$; that is,
$L_{S,c}(h_S) = 0$. Then, for any $\epsilon, \delta > 0$, the following holds:
$$
\mathbb{P}_{S \sim \mathcal{D}^m}\left[L_{\mathcal{D},c}(h_S) \leq \epsilon\right] \geq 1 - \delta
$$
provided that
$$
m \geq \frac{1}{\epsilon} \left( \log\left(\frac{1}{\delta}\right) + \log|\mathcal{H}| \right).
$$

This yields an equivalent generalization bound: for any $\epsilon, \delta > 0$, with probability at least $1 - \delta$,
$$
L_{\mathcal{D},c}(h_S) \leq \frac{1}{m} \left( \log|\mathcal{H}| + \log\left(\frac{1}{\delta}\right) \right).
$$

### Learning Bound for Finite Hypothesis Class — Non-Consistent Case

Let $\mathcal{H}$ be a finite hypothesis class. Then, for any $\delta > 0$, with probability at least $1 - \delta$, the following inequality holds uniformly for all $h \in \mathcal{H}$:
$$
L_{\mathcal{D},c}(h) \leq L_{S,c}(h) + \sqrt{\frac{1}{2m} \left( \log\left(\frac{2}{\delta}\right) + \log|\mathcal{H}| \right)}.
$$

### See also

### References