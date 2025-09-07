---

---
For a single dimension vector case
$$
\mathcal{N}(x \mid \mu, \sigma^2) = \frac{1}{\sqrt{2 \pi \sigma^2}} \exp \left\{-\frac{(x - \mu)^2}{2 \sigma^2}\right\}
$$

For a multi-dimensional vector case
$$
\mathcal{N}(\mathbf{x} \mid \boldsymbol{\mu}, \boldsymbol{\Sigma}) = \frac{1}{\sqrt{(2 \pi)^k |\boldsymbol{\Sigma}|}} \exp \left\{-\frac{1}{2} (\mathbf{x} - \boldsymbol{\mu})^T \boldsymbol{\Sigma}^{-1} (\mathbf{x} - \boldsymbol{\mu})\right\}
$$

# Conditional Gaussian Distribution

Let $\mathbf{x}$ be a K-dimensional random vector with Gaussian distribution, i.e.,
$$
\mathbf{x} \sim \mathcal{N}(\boldsymbol{\mu}, \mathbf{\Sigma})
$$
Let $\mathbf{x}_1$ be the first $k$ components of $\mathbf{x}$ and $\mathbf{x}_2$ be the remaining $K-k$ components. Then, the joint distribution of $\mathbf{x}_1$ and $\mathbf{x}_2$ is given by
$$
\begin{pmatrix}
\mathbf{x}_1 \\
\mathbf{x}_2
\end{pmatrix} \sim \mathcal{N}\left(
\begin{pmatrix}
\boldsymbol{\mu}_1 \\
\boldsymbol{\mu}_2
\end{pmatrix},
\begin{pmatrix}
\mathbf{\Sigma}_{11} & \mathbf{\Sigma}_{12} \\
\mathbf{\Sigma}_{21} & \mathbf{\Sigma}_{22}
\end{pmatrix}
\right)
$$
where $\boldsymbol{\mu}_1$ and $\boldsymbol{\mu}_2$ are the means of $\mathbf{x}_1$ and $\mathbf{x}_2$, respectively, and $\mathbf{\Sigma}_{ij}$ are the corresponding covariance matrices.

Let $\Lambda$ be the precision matrix of $\mathbf{x}$, i.e., $\Lambda = \mathbf{\Sigma}^{-1}$. The conditional distribution of $\mathbf{x}_1$ given $\mathbf{x}_2$ is given by
$$
\mathbf{x}_1 | \mathbf{x}_2 \sim \mathcal{N}(\boldsymbol{\mu}_{1|2}, \mathbf{\Sigma}_{1|2})
$$
where
$$
\boldsymbol{\mu}_{1|2} = \boldsymbol{\mu}_1 + \mathbf{\Sigma}_{12} \mathbf{\Sigma}_{22}^{-1} (\mathbf{x}_2 - \boldsymbol{\mu}_2)
$$
and
$$
\mathbf{\Sigma}_{1|2} = \mathbf{\Sigma}_{11} - \mathbf{\Sigma}_{12} \mathbf{\Sigma}_{22}^{-1} \mathbf{\Sigma}_{21}
$$

# Marginal Gaussian Distribution

Given a joint Gaussian distribution $\mathcal{N}(\mathbf{x}\mid \boldsymbol{\mu}, \boldsymbol{\Sigma})$ with $\boldsymbol{\Lambda} \equiv \boldsymbol{\Sigma}^{-1}$ and
$$
\mathbf{x} = \begin{pmatrix}
        \mathbf{x}_1 \\
        \mathbf{x}_2
    \end{pmatrix}, \quad
    \boldsymbol{\mu} = \begin{pmatrix}
        \boldsymbol{\mu}_1 \\
        \boldsymbol{\mu}_2
    \end{pmatrix}, \quad
    \boldsymbol{\Sigma} = \begin{pmatrix}
        \boldsymbol{\Sigma}_{11} & \boldsymbol{\Sigma}_{12} \\
        \boldsymbol{\Sigma}_{21} & \boldsymbol{\Sigma}_{22}
    \end{pmatrix}, \quad
    \boldsymbol{\Lambda} = \begin{pmatrix}
        \boldsymbol{\Lambda}_{11} & \boldsymbol{\Lambda}_{12} \\
        \boldsymbol{\Lambda}_{21} & \boldsymbol{\Lambda}_{22}
    \end{pmatrix},
$$
the marginal distribution of $\mathbf{x}_1$ is given by
$$
\mathbf{x}_1 \sim \mathcal{N}(\boldsymbol{\mu}_1, \boldsymbol{\Sigma}_{11}).
$$

### See also

### References