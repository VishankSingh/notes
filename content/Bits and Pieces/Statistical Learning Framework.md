---

---
The statistical learning framework can be formulated as
$$
(\mathcal{X}, \mathcal{Y}, \mathcal{P}, \mathcal{H}, \mathcal{L})
$$
where

- $\mathcal{X}$ is the input space,
- $\mathcal{Y}$ is the output space,
- $\mathcal{P}$ is the probability distribution over $\mathcal{X} \times \mathcal{Y}$,
- $\mathcal{H}$ is the hypothesis space, and
- $\mathcal{L}$ is the loss function.

The goal is to find a hypothesis $h:\mathcal{X} \to \mathcal{Y}$, where $h \in \mathcal{H}$, that minimizes the expected loss
$$
\mathbb{E}_{(x,y) \sim \mathcal{P}} \left[ \mathcal{L}(h(x), y) \right]
$$

There is a training set $S = \{(x_i, y_i): x_i \in \mathcal{X}, y_i \in \mathcal{Y}\}_{i=1}^n$ drawn from the distribution $\mathcal{P}$. The [[Empirical Risk Minimization]] (ERM) principle is often used, which minimizes the empirical loss over the training set $S$.

### See also

### References