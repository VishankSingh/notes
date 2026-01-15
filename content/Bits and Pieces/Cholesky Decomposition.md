---
title:
draft:
tags:
---
<span class="blue"><strong>Theorem</strong> (<em>Cholesky decomposition</em>):</span>
Let $A_{n\times n}$ be a real, **symmetric**, and **positive definite**
matrix. Then $A$ has a unique factorization
$$
A = LL^T,
$$
where $L_{n\times n}$ is a lower triangular matrix with strictly
positive diagonal entries (i.e., $L_{ii} > 0$).

#### Explicit formula:
The elements of $L$ are computed as follows:
$$
\begin{aligned}
    L_{ii} &= \sqrt{A_{ii} - \sum_{k=1}^{i-1} (L_{ik})^2}, \quad \text{for } i = 1,\dots,n \\
    L_{ij} &= \dfrac{1}{L_{jj}}\left( A_{ij} - \sum_{k=1}^{j-1}L_{ik} L_{jk} \right) , \quad \text{for } i > j
\end{aligned}
$$