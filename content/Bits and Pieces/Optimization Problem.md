An optimization problem is a problem of form
$$
\begin{aligned}
        \text{minimize} & \quad f_0(x) \\
        \text{subject to} & \quad f_i(x) \leq 0, \quad i = 1, \ldots, m \\
        & \quad h_i(x) = 0, \quad j = 1, \ldots, p
    \end{aligned}
$$
where $x\in \mathbb{R}^n$ is called the *optimization variable* and the function $f_0:\mathbb{R}^n \to \mathbb{R}$ the *objective function*. The inequalities $f_i(x) \leq 0$ and equalities $h_j(x) = 0$ are called inequality and equality constraints respectively.

The set $\mathcal{D}$, defined by
$$
\mathcal{D} = \bigcap_{i=0}^{m} \textbf{dom }f_i \;\; \cap \;\; \bigcap_{j=0}^{p} \textbf{dom }h_j,
$$
is called the *domain* of the optimization problem.

The *optimal value* $p^*$ of the problem is defined as
$$
p^* = \inf \{f_0(x) \mid f_i \leq 0, i = 1, \dots,m ; h_j(x) = 0, j = 1, \dots, p\}.
$$
To note, $p^*$ is allowed to take on the extended values $\pm \infty$.

### See also

### References