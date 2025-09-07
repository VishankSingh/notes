---

---
Any distribution $p(x|\eta)$, $\eta \in \mathbb{R}^K$ with fixed support over $\mathcal{X} \subseteq\mathbb{R}^D$, is in the exponential family if its density can be written in the formulated
$$
p(x|\eta) \triangleq \dfrac{1}{Z(\eta)} h(x) \exp\left(\eta^T \mathcal{T}(x)\right) = h(x) \exp\left(\eta^T \mathcal{T}(x) - A(\eta)\right)
$$
where $h(x)$ is a scaling constant, often 1, $\mathcal{T}(x)\in \mathbb{R}^K$ is the vector of sufficient statistics, $A(\eta) = \log Z(\eta)$ is the log-partition function, and $Z(\eta)$ is the normalizing constant, also known as the partition function.

### Log partition function is a cumulant generating function
The log-partition function $A(\eta)$ is a cumulant generating function of the sufficient statistics $\mathcal{T}(x)$.
For $\mathbb{E}_{p(x|\eta)}\left[\mathcal{T}(x)\right]$, we have
$$
\nabla_{\eta} A(\eta) = \mathbb{E}_{p(x|\eta)}\left[\mathcal{T}(x)\right]
$$

Similarly, we have
$$
\nabla_{\eta}^2 A(\eta) = \text{Cov}_{p(x|\eta)}\left[\mathcal{T}(x)\right]
$$
In general, the $k$-th derivative of the log-partition function gives the $k$-th cumulant of the sufficient statistics
$$
\kappa_k = \nabla_{\eta}^k A(\eta) = \sum_{\pi \in \Pi}^{}(-1)^{|\pi| - 1} (|\pi| - 1)! \prod_{B \in \pi}^{} \mathbb{E}_{p(x|\eta)}\left[\mathcal{T}(x)^{|B|}\right]
$$

### Maximum likelihood estimation and the sufficient statistic
To find MLE of $\eta$,
$$
\nabla_{\eta} \mathcal{L}(\eta) =\sum_{n=1}^{N}\mathcal{T}(x_n) - N \nabla_{\eta} A(\eta) = 0
$$
$$
\implies \nabla_{\eta} A(\eta) = \frac{1}{N} \sum_{n=1}^{N} \mathcal{T}(x_n)
$$
This means that the MLE of $\eta$ is the solution to the equation
$$
\nabla_{\eta} A(\eta) = \mathbb{E}_{p(x|\eta)}\left[\mathcal{T}(x)\right] = \frac{1}{N} \sum_{n=1}^{N} \mathcal{T}(x_n)
$$
and $\mathcal{T}(x)$ is the sufficient statistic.

### See also

### References