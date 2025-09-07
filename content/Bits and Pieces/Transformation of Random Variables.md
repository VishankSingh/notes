---

---
Let $x \sim p_x(x)$ be a random variable and $y = f(x)$ where $f$ is a deterministic function.

### Invertible transformations
Let $f: \mathbb{R}^n \to \mathbb{R}^n$ be a bijective (invertible) function. We have
$$
p_y(y) = p_x(f^{-1}(y)) \left| \det [\mathbf{J}_{f^{-1}}(y)] \right|
$$
where $\mathbf{J}_{f^{-1}}(y)$ is the Jacobian of the inverse function $f^{-1}$ evaluated at $y$.

### Non-invertible transformations
If $f$ is not invertible, we can still compute the distribution of $y$ by considering the pre-image of $y$ under $f$. Let $f^{-1}(y)$ denote the set of all $x$ such that $f(x) = y$. Then, we have
$$
p_y(y) = \sum_{x \in f^{-1}(y)} p_x(x) \left| \det [\mathbf{J}_f(x)] \right|^{-1}
$$

### Monte Carlo approximation
If $f$ is complex or high-dimensional, we can use Monte Carlo methods to approximate the distribution of $y$. We can sample $x_i \sim p_x(x)$ and compute $y_i = f(x_i)$. The empirical distribution of $y_i$
will approximate $p_y(y)$. Specifically, we can estimate the density at a point $y$ as
$$
\hat{p}_y(y) = \frac{1}{N} \sum_{i=1}^{N} \delta(y - y_i)
$$

### See also

### References