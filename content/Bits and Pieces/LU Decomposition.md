---
title:
draft:
tags:
---
<span class="blue">**Theorem** (*LU decomposition*):</span>
Let $A_{n\times n}$ be a square matrix. If all $k$ leading principal
minors of $A$ are non-singular (for $k = 1, \dots, n-1$), then
$A$ has a unique factorization
$$
A = LU,
$$
where $L_{n\times n}$ and $U_{n\times n}$ are lower and upper triangular matrices respectively.

#### Explicit formula:
The elements of $L$ and $U$ are computed as follows:
$$
\begin{aligned}
    L_{ii} &= 1, \quad \text{for } i = 1, \dots, n \\
    U_{ij} &= A_{ij} - \sum_{k=1}^{i-1} L_{ik} U_{kj}, \quad \text{for } j \ge i \\
    L_{ij} &= \dfrac{1}{U_{jj}}\left( A_{ij} - \sum_{k=1}^{j-1}L_{ik} U_{kj} \right) , \quad \text{for } i > j
\end{aligned}
$$