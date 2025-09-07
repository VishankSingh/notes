---

---
Singular value decomposition (SVD) is the generalization of the [[Eigen Decomposition]] to non-square matrices. Formally, for any matrix $A \in \mathbb{R}^{m \times n}$, the SVD is given by
$$
A = U \Sigma V^T
$$
where $U \in \mathbb{R}^{m \times m}$ and $V \in \mathbb{R}^{n \times n}$ are orthogonal matrices, and $\Sigma = \text{diag}(\sigma_1, \sigma_2, \ldots, \sigma_r) \in \mathbb{R}^{m \times n}$, where $r = \min(m, n)$ and $\sigma_1 \geq \sigma_2 \geq \ldots \geq \sigma_r \geq 0$ are the singular values of $A$. The columns of $U$ are the left singular vectors, and the columns of $V$ are the right singular vectors.

### See also

### References