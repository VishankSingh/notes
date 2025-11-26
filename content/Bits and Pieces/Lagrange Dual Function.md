Considering an [[Optimization Problem]] with assumptions $\mathcal{D} \notin \phi$, and optimal value $p^*$ exists.

The *Lagrange dual function* (or *dual function*) $g: \mathbb{R}^m \times \mathbb{R}^p \to \mathbb{R}$, where $\lambda\in\mathbb{R}^m$ and $\nu\in\mathbb{R}^p$ as
$$
g(\lambda, \nu) = \underset{x\in\mathcal{D}}{\inf} L(x,\lambda, \nu) = \underset{x\in\mathcal{D}}{\inf} \left(f_0(x) + \sum_{i=1}^{m} \lambda_i f_i(x) + \sum_{j=1}^{p} \nu_i h_i(x)\right).
$$
where $L : \mathbb{R}^n \times\mathbb{R}^m\times\mathbb{R}^p \to \mathbb{R}$ is the [[Lagrangian]] associated with the [[Optimization Problem]].
To note, since the dual function is the pointwise infimum of a family of affine functions of $(\lambda, \nu)$, it is concave.

### See also

### References