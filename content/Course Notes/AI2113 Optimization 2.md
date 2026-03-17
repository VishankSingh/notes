---
title:
draft:
tags:
---

SCS
CVX
Julia
DCP - disciplined convex programming
SOCP

Norm approximation

# Norm Approximation

Let $\mathbf{A}\in \mathbb{R}^{m\times n}$, $\mathbf{b}\in\mathbb{R}^m$.
The objective is to minimize the residual vector
$\mathbf{r} = \mathbf{A}\mathbf{x} - \mathbf{b}$.

The general problem is formulated as,
$$
\min_{\mathbf{x}\in\mathbb{R}^n} \|\mathbf{A}\mathbf{x}-\mathbf{b}\|.
$$

Depending on the norm chosen, this results in different convex optimization problems
with unique statistical interpretations and solution characteristics.

### $\ell_1$ Norm Approximation (Sum of Absolute Residuals)

$$
\|Ax - b\|_1 = \sum_{i=1}^{m} |(Ax - b)_i|
$$

Also known as **Least Absolute Deviations (LAD)**.

- **Robustness:** Unlike the $\ell_2$ norm, the $\ell_1$ norm places less weight on large residuals (outliers). It yields a robust estimator where the solution tends to minimize the median of the residuals rather than the mean.
- **Sparsity:** In problems like Basis Pursuit (where we minimize $\|x\|_1$ subject to constraints), $\ell_1$ induces sparsity. Here, in residual minimization, it allows many residual entries to be exactly zero.

#### Convex Formulation (Linear Program):
The problem is non-differentiable at zero. We reformulate it as a Linear Program (LP) by introducing slack variables $t \in \mathbb{R}^m$:

$$
\begin{aligned}
& \text{minimize} & & \mathbf{1}^T t \\
& \text{subject to} & & -t \preceq Ax - b \preceq t
\end{aligned}
$$
where $\preceq$ denotes component-wise inequality.

### $\ell_2$ Norm Approximation (Least Squares)

$$
\|Ax - b\|_2 = \left( \sum_{i=1}^{m} (Ax - b)_i^2 \right)^{1/2}
$$

Minimizing the $\ell_2$ norm is equivalent to minimizing the squared Euclidean norm $\|Ax - b\|_2^2$. This is the standard **Least Squares** problem.

- **Statistical Interpretation:** Corresponds to the Maximum Likelihood Estimator (MLE) under the assumption of Gaussian noise.
- **Sensitivity:** Highly sensitive to outliers because errors are squared.

#### Convex Formulation (Unconstrained Quadratic):
This is a differentiable, unconstrained convex problem with a closed-form analytical solution (assuming $A$ is full rank):
$$
x^\star = (A^T A)^{-1} A^T b
$$

### $\ell_\infty$ Norm Approximation (Chebyshev)

$$
\|Ax - b\|_\infty = \max_{1 \le i \le m} |(Ax - b)_i|
$$

Also known as **Minimax** or **Chebyshev approximation**.

- **Goal:** Minimizes the worst-case residual.
- **Applications:** Critical in control design and engineering where ensuring that error never exceeds a safety threshold is more important than the average error.

#### Convex Formulation (Linear Program):
We introduce a scalar variable $t \in \mathbb{R}$ representing the maximum bound:

$$
\begin{aligned}
& \text{minimize} & & t \\
& \text{subject to} & & -t\mathbf{1} \preceq Ax - b \preceq t\mathbf{1}
\end{aligned}
$$

## Penalty Functions

In many approximation problems, we minimize a sum of penalty functions applied to the residuals $r_i = (Ax - b)_i$. The problem takes the form:
$$
\min_{x} \sum_{i=1}^{m} \phi(r_i)
$$
where $\phi : \mathbb{R} \to \mathbb{R}$ is a convex penalty function.

### Norm Based ($p = 1,2,\infty$)

$\|\cdot\|_1, \|\cdot\|_2, \|\cdot\|_\infty$.

### Dead Zone Linear

Functions of the form, for $r\in \mathbb{R}^n$,

$$
\sum_{i} \phi(r_i),
$$

where
$$
\phi(r) = \max\{ |r|-a, 0\}.
$$

### Log Barrier

$$
\phi(u) = \begin{cases}
        -\log(1-u^2), \quad &|u| < 1 \\
        \infty, \quad &|u| \ge 1
    \end{cases}
$$

### Huber Penalty

##### <span style="color: transparent;">sec-Moreau-Envelope</span>
# Moreau Envelope

<span class="blue"><strong>Definition</strong> (<em>Moreau Envelope</em>):</span>
Given $f:\mathbb{R}^n \to \mathbb{R}$, we have the Moreau Envelope as
$$
f_u(\mathbf{x}) = \inf_{\mathbf{y}\in\mathbb{R}^n} \left\{ f(\mathbf{y}) + \dfrac{1}{2u} \|\mathbf{x}-\mathbf{y}\|^2 \right\}.
$$

<span class="blue"><strong>Remark</strong>:</span>
The above expression is essentially an infimal convolution of $uf:\mathbb{R}^n \to \mathbb{R}$
and $g:\mathbb{R}^n \to \mathbb{R}$ where $g = (1/2)\|\cdot\|^2_2$.

<span class="blue"><strong>Definition</strong> (<em>Proximal Operator</em>):</span>
The proximal operator $prox_u(\mathbf{x}) : \mathbb{R}^n \to \mathbb{R}^n$ of $f$ with parameter
$u$ is defined as,
$$
prox_u(\mathbf{x}) = \arg \min_{\mathbf{y}\in\mathbb{R}^n} \left\{ f(\mathbf{y}) + \dfrac{1}{2u} \|\mathbf{x}-\mathbf{y}\|^2 \right\}.
$$

### Properties of Moreau Envelope

1. $f_u(\mathbf{x})$ is differentiable if $f$ is continuous. Further, the derivative is continuous.
2. $f_u(\mathbf{x})$ is defined for all $\mathbf{x} \in \mathbb{R}^n$, even when $f$ is not.
3. $f_u(\mathbf{x})$ is convex whenever $f$ is convex.
4. If $x^*$ is the unique minimizer of $f$, then it is the unique minimizer of $f_u(\mathbf{x})$

<span class="blue"><strong>Remark</strong>:</span>
$f_u(\mathbf{x})$ is convex, since it is the min over one variable of a jointly convex function.

<span class="blue"><strong>Remark</strong>:</span>
$f_u(\mathbf{x})$ is continuously smooth.

<span class="blue"><strong>Remark</strong>:</span>
$$
epi f_u(x) = epi f(x) \oplus epi \left( \frac{1}{2u} \|x\|^2 \right)
$$

<span class="blue"><strong>Remark</strong>:</span>
$x^*$ is a minima of $f$ if and only if $x^*$ is a minima of $f_u$.

<span class="blue"><strong>Remark</strong>:</span>
$$
\nabla f_u(\mathbf{x}) = \frac{1}{u} (x - prox_u(x)).
$$

# Epigraphs

TODO: complete this

Duality

Supporting Hyperplane Theorem

<span class="blue"><strong>Definition</strong> (<em>Conjugate of a function</em>):</span>
Let $f: \mathbb{R}^n \to \mathbb{R}$.
The conjugate $f^*: \mathbb{R}^n \to \mathbb{R}$ of $f$ is defined as,
$$
f^*(\mathbf{y}) = \sup_{\mathbf{x}\in domf} (\mathbf{y}^T\mathbf{x}-f(\mathbf{x})).
$$

<span class="blue"><strong>Remark</strong>:</span>
The conjugate of $f$ is also called Legendre transform, polar of $f$, Fenchel dual.

<span class="blue"><strong>Remark</strong>:</span>
$f^*$ is convex, irrespective of $f$.

<span class="blue"><strong>Remark</strong>:</span>
$$
-f^*(0) = \min_{\mathbf{x}\in\mathbb{R}^n} f(\mathbf{x})
$$

<span class="blue"><strong>Theorem</strong> (<em>Fenchel Young inequality</em>):</span>
$$
f(\mathbf{x}) + f^*(\mathbf{m}) \ge \mathbf{m}^T \mathbf{x}
$$

## Recovering $f$ from $f^*$

<span class="blue"><strong>Definition</strong> (<em>Biconjugate</em>):</span>
Let $f^* : \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}$ be the conjugate of a
function $f : \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}$. The **biconjugate**
$f^{**} : \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}$ is defined as the conjugate of $f^*$,

$$
f^{**}(\mathbf{x}) = (f^*)^*(\mathbf{x}) = \sup_{\mathbf{y} \in \mathbb{R}^n} \left( \mathbf{y}^T \mathbf{x} - f^*(\mathbf{y}) \right).
$$

<span class="blue"><strong>Remark</strong> (<em>Geometric Interpretation</em>):</span>
The biconjugate $f^{**}$ constructs the pointwise supremum (upper envelope) of all
affine minorants of $f$. Specifically, the epigraph of $f^{**}$ is the
**closed convex hull** of the epigraph of $f$,

$$
epif^{**} = \text{cl}(\text{conv}(epif)).
$$

Thus, $f^{**}$ represents the "tightest" closed convex function that minorizes $f$.

### Properties of the Biconjugate

<span class="blue"><strong>Corollary</strong> (<em>Weak Duality</em>):</span>
For any proper function $f$, the inequality $f^{**}(\mathbf{x}) \leq f(\mathbf{x})$
holds for all $\mathbf{x} \in \mathbb{R}^n$.

> [!note]- Proof
> Recall the **Fenchel-Young inequality**, which states that for any $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$:
> $$
> f^*(\mathbf{y}) + f(\mathbf{x}) \geq \mathbf{x}^T \mathbf{y}.
> $$
> Rearranging terms yields:
> $$
> \mathbf{x}^T \mathbf{y} - f^*(\mathbf{y}) \leq f(\mathbf{x}).
> $$
> Since this inequality holds for all $\mathbf{y} \in \mathbb{R}^n$, it must also hold for the supremum over $\mathbf{y}$:
> $$
> \sup_{\mathbf{y} \in \mathbb{R}^n} \left( \mathbf{x}^T \mathbf{y} - f^*(\mathbf{y}) \right) \leq f(\mathbf{x}).
> $$
> By definition of the biconjugate, this is exactly $f^{**}(\mathbf{x}) \leq f(\mathbf{x})$.

<span class="blue"><strong>Theorem</strong> (<em>Fenchel-Moreau</em>):</span>
Let $f : \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}$ be a proper function. Then $f = f^{**}$ if and only if $f$ is **closed** (lower semi-continuous) and **convex**.

> [!note]- Proof
> The forward implication is immediate: since $f^{**}$ is defined as the pointwise supremum of a family of affine functions, it is necessarily closed and convex. Thus, if $f = f^{**}$, $f$ must share these properties.
>
> For the reverse implication, assume $f$ is proper, closed, and convex. By the weak duality lemma, $f^{**}(\mathbf{x}) \leq f(\mathbf{x})$ for all $\mathbf{x} \in \mathbb{R}^n$. It remains to show that $f(\mathbf{x}) \leq f^{**}(\mathbf{x})$.
>
> We proceed by contradiction. Suppose there exists a point $\mathbf{x}_0 \in \mathbb{R}^n$ such that $f^{**}(\mathbf{x}_0) < f(\mathbf{x}_0)$. This implies that the point $(\mathbf{x}_0, f^{**}(\mathbf{x}_0)) \in \mathbb{R}^{n+1}$ lies strictly below the epigraph of $f$, denoted $\text{epi}(f)$. Since $f$ is closed and convex, $\text{epi}(f)$ is a closed convex set.
>
> By the **Strict Separating Hyperplane Theorem**, there exists a non-zero vector $(\mathbf{y}, \mu) \in \mathbb{R}^n \times \mathbb{R}$ and a scalar $\alpha \in \mathbb{R}$ such that:
> $$
> \mathbf{y}^T \mathbf{x}_0 + \mu f^{**}(\mathbf{x}_0) > \alpha > \mathbf{y}^T \mathbf{x} + \mu t, \quad \forall (\mathbf{x}, t) \in \text{epi}(f).
> $$
> Since $(\mathbf{x}, t) \in \text{epi}(f)$ allows $t$ to be arbitrarily large, we must have $\mu \leq 0$ (otherwise the RHS would be unbounded).
>
> **Case 1: Non-vertical separation ($\mu < 0$)**
> Divide the inequality by $-\mu > 0$. Let $\mathbf{m} = \mathbf{y}/(-\mu)$ and $c = \alpha/(-\mu)$. The separation becomes:
> $$
> \mathbf{m}^T \mathbf{x}_0 - f^{**}(\mathbf{x}_0) > c > \mathbf{m}^T \mathbf{x} - t, \quad \forall (\mathbf{x}, t) \in \text{epi}(f).
> $$
> Setting $t = f(\mathbf{x})$ for $\mathbf{x} \in \text{dom}(f)$, we obtain $\mathbf{m}^T \mathbf{x} - f(\mathbf{x}) < c$. Taking the supremum over $\mathbf{x}$:
> $$
> f^*(\mathbf{m}) = \sup_{\mathbf{x}} (\mathbf{m}^T \mathbf{x} - f(\mathbf{x})) \leq c.
> $$
> However, the left side of the separation inequality yields $\mathbf{m}^T \mathbf{x}_0 - c > f^{**}(\mathbf{x}_0)$. This implies that the affine function $h(\mathbf{z}) = \mathbf{m}^T \mathbf{z} - f^*(\mathbf{m})$ satisfies:
> $$
> h(\mathbf{x}_0) = \mathbf{m}^T \mathbf{x}_0 - f^*(\mathbf{m}) \geq \mathbf{m}^T \mathbf{x}_0 - c > f^{**}(\mathbf{x}_0).
> $$
> This contradicts the definition of $f^{**}$ as the supremum of \textit{all} such affine minorants: $f^{**}(\mathbf{x}_0) \geq h(\mathbf{x}_0)$.
>
> **Case 2: Vertical separation ($\mu = 0$)**
> If $\mu = 0$, the separation reduces to $\mathbf{y}^T \mathbf{x}_0 > \alpha > \mathbf{y}^T \mathbf{x}$ for all $\mathbf{x} \in \text{dom}(f)$. This means $\mathbf{x}_0$ is strictly separated from the domain of $f$ in $\mathbb{R}^n$. Since $f$ is proper and convex, it admits at least one affine minorant $g(\mathbf{z}) = \mathbf{a}^T \mathbf{z} - b \leq f(\mathbf{z})$. Consider the function $g_k(\mathbf{z}) = g(\mathbf{z}) + k(\mathbf{y}^T \mathbf{z} - \alpha)$. For $\mathbf{x} \in \text{dom}(f)$, since $\mathbf{y}^T \mathbf{x} < \alpha$, the term $k(\mathbf{y}^T \mathbf{x} - \alpha)$ is negative. Thus, $g_k(\mathbf{x}) \leq g(\mathbf{x}) \leq f(\mathbf{x})$ for all $k > 0$. This means $g_k$ is an affine minorant of $f$ for any $k$. At $\mathbf{x}_0$, however, $\mathbf{y}^T \mathbf{x}_0 > \alpha$, so the term $k(\mathbf{y}^T \mathbf{x}_0 - \alpha) \to +\infty$ as $k \to \infty$. Consequently, $f^{**}(\mathbf{x}_0) \geq g_k(\mathbf{x}_0) \to +\infty$. Since we assumed $f^{**}(\mathbf{x}_0) < f(\mathbf{x}_0) < \infty$ (if $f(\mathbf{x}_0) = \infty$ the inequality holds trivially), this yields a contradiction.
>
> Thus, the assumption $f^{**}(\mathbf{x}_0) < f(\mathbf{x}_0)$ is false. We conclude $f = f^{**}$.

<span class="blue"><strong>Remark</strong>:</span>
If $f$ is convex but not closed, $f^{**}$ is the lower semi-continuous closure of $f$. If $f$ is not convex, $f^{**}$ is the convex envelope of $f$.

# Duality

##### <span style="color: transparent;">sec:Fenchel-Young-Corollary</span>
<span class="blue"><strong>Corollary</strong> (<em>Fenchel-Young-Corollary</em>):</span>
Let $f : \mathbb{R}^n \to \mathbb{R}$ be a convex and differentiable function. For any $\mathbf{x}, \mathbf{m} \in \mathbb{R}^n$, the following statements are equivalent:

1. $\mathbf{m} = \nabla f(\mathbf{x})$
2. $f(\mathbf{x}) + f^*(\mathbf{m}) = \mathbf{m}^T \mathbf{x}$

> [!note]- Proof
> Recall the Fenchel-Young inequality, which states
> $f(\mathbf{x}) + f^*(\mathbf{m}) \geq \mathbf{m}^T \mathbf{x}$ for all
> $\mathbf{x}, \mathbf{m}$. We prove the equivalence of the equality condition and the
> gradient condition.
>
> **(1 $\implies$ 2):** Assume $\mathbf{m} = \nabla f(\mathbf{x})$. Since $f$
> is convex and differentiable, the first-order condition for convexity states that for
> all $\mathbf{y} \in \mathbb{R}^n$,
> $$
> f(\mathbf{y}) \geq f(\mathbf{x}) + \nabla f(\mathbf{x})^T(\mathbf{y} - \mathbf{x}).
> $$
> Substituting $\mathbf{m} = \nabla f(\mathbf{x})$,
> $$
> f(\mathbf{y}) \geq f(\mathbf{x}) + \mathbf{m}^T \mathbf{y} - \mathbf{m}^T \mathbf{x}.
> $$
> Rearranging terms to isolate $\mathbf{m}^T \mathbf{y} - f(\mathbf{y})$,
> $$
> \mathbf{m}^T \mathbf{y} - f(\mathbf{y}) \leq \mathbf{m}^T \mathbf{x} - f(\mathbf{x}).
> $$
> Taking the supremum of the left-hand side over all $\mathbf{y} \in \mathbb{R}^n$
> yields the definition of the conjugate $f^*(\mathbf{m})$,
> $$
> f^*(\mathbf{m}) = \sup_{\mathbf{y}} (\mathbf{m}^T \mathbf{y} - f(\mathbf{y})) \leq \mathbf{m}^T \mathbf{x} - f(\mathbf{x}).
> $$
> This implies $f(\mathbf{x}) + f^*(\mathbf{m}) \leq \mathbf{m}^T \mathbf{x}$.
> Combining this with the Fenchel-Young inequality (which gives the reverse inequality
> $\geq$), we obtain equality,
> $$
> f(\mathbf{x}) + f^*(\mathbf{m}) = \mathbf{m}^T \mathbf{x}.
> $$
>
> **(2 $\implies$ 1):** Assume
> $f(\mathbf{x}) + f^*(\mathbf{m}) = \mathbf{m}^T \mathbf{x}$. Rearranging for
> $f(\mathbf{x})$,
> $$
> f(\mathbf{x}) = \mathbf{m}^T \mathbf{x} - f^*(\mathbf{m}).
> $$
> By definition of the conjugate,
> $f^*(\mathbf{m}) \geq \mathbf{m}^T \mathbf{y} - f(\mathbf{y})$ for any
> $\mathbf{y} \in \mathbb{R}^n$. Substituting this inequality into the equation above,
> $$
> f(\mathbf{x}) \leq \mathbf{m}^T \mathbf{x} - (\mathbf{m}^T \mathbf{y} - f(\mathbf{y})).
> $$
> Rearranging terms to compare $f(\mathbf{y})$ and $f(\mathbf{x})$,
> $$
> f(\mathbf{y}) \geq f(\mathbf{x}) + \mathbf{m}^T(\mathbf{y} - \mathbf{x}).
> $$
> This inequality holds for all $\mathbf{y} \in \mathbb{R}^n$. This is precisely the
> defining inequality for $\mathbf{m}$ being a subgradient of $f$ at $\mathbf{x}$.
> Since $f$ is differentiable, the subgradient is unique and equal to the gradient. Thus,
> $$
> \mathbf{m} = \nabla f(\mathbf{x}).
> $$

<span class="blue"><strong>Remark</strong>:</span>
Geometrically, this corollary asserts that the vector $\mathbf{m}$ defines a
supporting hyperplane to the graph of $f$ at $(\mathbf{x}, f(\mathbf{x}))$ if and
only if Fenchel's inequality holds with equality.

## Partial Minimization \& Relation To Conjugate

Let $f : \mathbb{R}^n \times \mathbb{R}^k \to \mathbb{R} \cup \{+\infty\}$ be a
function of two variables $(\mathbf{x}, \mathbf{y})$, where
$\mathbf{x} \in \mathbb{R}^n$ and $\mathbf{y} \in \mathbb{R}^k$.

<span class="blue"><strong>Definition</strong> (<em>Partial Minimization</em>):</span>
The partial minimization of $f$ with respect to $\mathbf{x}$ is the function
$h : \mathbb{R}^k \to \mathbb{R} \cup \{+\infty\}$ defined as,
$$
h(\mathbf{y}) = \inf_{\mathbf{x} \in \mathbb{R}^n} f(\mathbf{x}, \mathbf{y}).
$$

<span class="blue"><strong>Lemma</strong> (<em>Preservation of Convexity</em>):</span>
If $f$ is jointly convex in $(\mathbf{x}, \mathbf{y})$, then $h(\mathbf{y})$
is a convex function.

<span class="blue"><strong>Remark</strong>:</span>
$$
f^*(\mathbf{m}_1, \mathbf{m}_2) = \sup_{\mathbf{x}, \mathbf{y}} \left( \mathbf{m}_1^T \mathbf{x} + \mathbf{m}_2^T \mathbf{y} - f(\mathbf{x}, \mathbf{y}) \right)
$$

<span class="blue"><strong>Remark</strong>:</span>
$h^*(\mathbf{m}) = f^*(0,\mathbf{m})$
> [!note]- Proof
> [Proof]
> $$
> \begin{aligned}
>     h^*(\mathbf{m}) &= \sup_{\mathbf{y}} \left( \mathbf{m}^T \mathbf{y} - h(\mathbf{y}) \right) \\
>     &= \sup_{\mathbf{y}} \left( \mathbf{m}^T \mathbf{y} - \min_{\mathbf{x}} f(\mathbf{x}, \mathbf{y}) \right) \\
>     &= \sup_{\mathbf{y}} \sup_{\mathbf{x}} \left( \mathbf{m}^T \mathbf{y} - f(\mathbf{x}, \mathbf{y}) \right) = f^*(0, \mathbf{m})
> \end{aligned}
> $$

<span class="blue"><strong>Remark</strong>:</span>
$\sup \left[-f^*(0,\mathbf{m})\right] \le \inf f(\mathbf{x},0)$ i.e. $h^{**}(0) \le h(0)$

<span class="blue"><strong>Remark</strong>:</span>
Partial minimization appears naturally when eliminating primal variables in dual constructions.

### Perturbation Interpretation Of Duality

For any problem  $p^* = \min_{\mathbf{x}} f(\mathbf{x})$, "the" dual is constructed by

1. Introduce perturbations $\mathbf{y}$, and extend $f$ such that $f(\mathbf{x}, 0)$ returns the function to minimize
2. the dual is $d^* = \sup \left[ -f^*(0, \mathbf{m}) \right]$

where $\mathbf{m}$ is the dual variable and $\mathbf{x}$ is the primal variable.

We have
$$
d^* \leq p^*,
$$
under convexity + mild conditions, we have strong duality, i.e. $d^* = p^*$.

# Lagrangian Duality

Given the optimization problem in standard form:
$$
p^* = \inf \{ f_0(x) \mid f_i(x) \le 0, \; i=1, \dots, m, \; x \in \mathcal{D} \}
$$
where $\mathcal{D} \subseteq \mathbb{R}^n$ is the intersection of the domains of all functions $f_i$.

## The Lagrangian and Dual Function
Define the **Lagrangian** $L: \mathbb{R}^n \times \mathbb{R}^m \to \mathbb{R}$
for $\lambda \succeq 0$ as,
$$
L(x, \lambda) = f_0(x) + \sum_{i=1}^m \lambda_i f_i(x).
$$
The **Lagrange dual function** $g: \mathbb{R}^m \to \mathbb{R}$ is defined as the
pointwise infimum of the Lagrangian over $x$,
$$
g(\lambda) = \inf_{x \in \mathcal{D}} L(x, \lambda).
$$
By the property of pointwise infima, $g$ is a concave function, and it provides a lower
bound on the primal optimal value: $g(\lambda) \le p^*$ for all $\lambda \succeq 0$.

## The Dual Problem
The **Lagrange dual problem** seeks the tightest lower bound,
$$
\begin{aligned}
    d^* = \sup_{\lambda} & \quad g(\lambda) \\
    \text{s.t.} & \quad \lambda \succeq 0
\end{aligned}
$$
The relationship between the primal and dual optimal values is governed by
**Weak Duality** ($d^* \le p^*$). Under constraint qualifications
(e.g., Slater's condition) and convexity, **Strong Duality** holds ($d^* = p^*$).

# Shadow Price Interpretation of Duality

# Game Theoretic Interpretation of Duality

# KKT Conditions
Consider a standard optimization problem with strong duality and differentiable
constraints. Let $x^*$ be the primal optima and $\lambda^*$ be the dual optima.

<span class="blue"><strong>Definition</strong> (<em>KKT Conditions</em>):</span>
The following statements constitute the KKT conditions,

1. $f_i(x^*) \le 0$ \& $h_j(x^*) = 0$, $\forall i,j$ (Primal feasibility).
2. $\mathbf{\lambda}_i^* \ge 0$, $\forall i$ (Dual feasibility).
3. $\lambda_i^* f_i(x^*) = 0$, $\forall i$ (Complementary slackness).
4. $\nabla_x L(x^*,\lambda) = 0$.

# Mechanistic Interpretation of KKT Conditions

![[AI2113 Optimization 2_tikz_0.svg]]

There's maybe no need for this.

Yeah, there's no need for this.

# Multicriterion Optimization

Some shit. Write it.

# Moreau Envelope (Continued)

Continued from [[AI2113 Optimization 2#sec-moreau-envelope|here]].

> [!example]- Example
> $$
> p^* = \min_{\mathbf{x}} \| \mathbf{A}\mathbf{x} - \mathbf{b} \|_2 \quad \quad g(x) = p^*
> $$
>
> Reframe as:
> $$
> \begin{aligned}
> \min_{\mathbf{x}, \mathbf{y}} & \quad \|\mathbf{y}\|_2 \\
> \text{s.t.} & \quad \mathbf{A}\mathbf{x} - \mathbf{b} = \mathbf{y}
> \end{aligned}
> $$
>
> **Lagrangian:**
> $$
> L(\mathbf{x}, \mathbf{y}, \mathbf{v}) = \|\mathbf{y}\|_2 + \mathbf{v}^T (\mathbf{A}\mathbf{x} - \mathbf{b} - \mathbf{y})
> $$
>
> **Dual Function:**
> $$
> \begin{aligned}
> g(\mathbf{v}) &= \inf_{\mathbf{x}, \mathbf{y}} \left[ \|\mathbf{y}\|_2 + \mathbf{v}^T (\mathbf{A}\mathbf{x} - \mathbf{b} - \mathbf{y}) \right] \\
> &= -\mathbf{v}^T \mathbf{b} + \left[ \inf_{\mathbf{x}, \mathbf{y}} \left( \underbrace{ \|\mathbf{y}\|_2 - \mathbf{v}^T \mathbf{y} }_{\substack{-\infty \text{ if } \|\mathbf{v}\|_2 > 1 \\ 0 \text{ otherwise}}} \right) + \left( \underbrace{ (\mathbf{A}^T \mathbf{v})^T \mathbf{x} }_{\substack{0 \text{ if } \mathbf{A}^T \mathbf{v} = 0 \\ -\infty \text{ otherwise}}} \right) \right]
> \end{aligned}
> $$
>
>
> **Result:**
> $$
> g(\mathbf{v}) =
> \begin{cases}
> -\mathbf{v}^T \mathbf{b} & \text{if } \mathbf{A}^T \mathbf{v} = 0 \text{ \& } \|\mathbf{v}\|_2 \le 1 \\
> -\infty & \text{otherwise}
> \end{cases}
> $$

## Dual of Moreau envelope

Let $f: \mathbb{R}^n \to \mathbb{R} \cup \{+\infty\}$ be a proper, closed, convex
function. Recall the Moreau envelope $f_u(x)$ with parameter $u > 0$ is defined as the
infimal convolution of $f$ and a quadratic kernel,
$$
f_u(x) = \inf_y \left\{ f(y) + \frac{1}{2u} \|x - y\|^2 \right\}.
$$

To derive its dual representation, we rewrite this as a constrained minimization problem
by introducing an auxiliary variable $z$
$$
\begin{aligned}
    \min_{y, z} \quad & f(y) + \frac{1}{2u} \|z\|^2 \\
    \text{s.t.} \quad & x - y = z.
\end{aligned}
$$

The dual function $g(v)$ is given by
$$
g(v) = \langle v, x \rangle - f^*(v) - \frac{u}{2} \|v\|^2,
$$
which leads to the identity
$$
f_u(x) = \left( f^* + \frac{u}{2} \|\cdot\|^2 \right)^*(x).
$$

> [!note]- Proof
> We form the Lagrangian $L(y, z, v)$ with dual variable $v \in \mathbb{R}^n$,
> $$
> L(y, z, v) = f(y) + \frac{1}{2u} \|z\|^2 + \langle v, x - y - z \rangle.
> $$
>
> The Lagrange dual function $g(v)$ is obtained by minimizing the Lagrangian with
> respect to the primal variables $y$ and $z$,
> $$
> \begin{aligned}
>     g(v) &= \inf_{y, z} L(y, z, v) \\
>     &= \inf_{y, z} \left\{ f(y) + \frac{1}{2u} \|z\|^2 + \langle v, x \rangle - \langle v, y \rangle - \langle v, z \rangle \right\} \\
>     &= \langle v, x \rangle + \inf_{y} \big\{ f(y) - \langle v, y \rangle \big\} + \inf_{z} \left\{ \frac{1}{2u} \|z\|^2 - \langle v, z \rangle \right\}.
> \end{aligned}
> $$
>
> We evaluate the infima term-wise:
>
> \textbf{1. Term involving $y$:}
> Using the definition of the Fenchel conjugate,
> $f^*(v) = \sup_y \{ \langle v, y \rangle - f(y) \}$, we have,
> $$
> \inf_y \{ f(y) - \langle v, y \rangle \} = - \sup_y \{ \langle v, y \rangle - f(y) \} = -f^*(v).
> $$
>
> \textbf{2. Term involving $z$:}
> This is the conjugate of the quadratic function
> $h(z) = \frac{1}{2u}\|z\|^2$. Setting the gradient with respect to $z$ to zero,
> $$
> \nabla_z \left( \frac{1}{2u} \|z\|^2 - \langle v, z \rangle \right) = \frac{z}{u} - v = 0 \implies z = uv.
> $$
>
> Substituting $z = uv$ back into the expression,
> $$
> \frac{1}{2u} \|uv\|^2 - \langle v, uv \rangle = \frac{u}{2} \|v\|^2 - u \|v\|^2 = -\frac{u}{2} \|v\|^2.
> $$
>
> Combining these, the dual function
> $$
> g(v) = \langle v, x \rangle - f^*(v) - \frac{u}{2} \|v\|^2.
> $$
>
> The dual problem consists of maximizing $g(v)$. Since $f$ is proper, closed, and convex,
> strong duality holds ($p^* = d^*$), and we can express the primal optimum as the supremum
> of the dual:
> $$
> \begin{aligned}
>     f_u(x) &= \sup_v g(v) \\
>     &= \sup_v \left\{ \langle v, x \rangle - \left( f^*(v) + \frac{u}{2} \|v\|^2 \right) \right\}.
> \end{aligned}
> $$
> Recognizing the right-hand side as the Fenchel conjugate of the function $\phi(v) = f^*(v) + \frac{u}{2} \|v\|^2$ evaluated at $x$, we conclude:
> $$
> f_u(x) = \left( f^* + \frac{u}{2} \|\cdot\|^2 \right)^*(x).
> $$

## Moreau Decomposition

# Proximal Algorithms

## Fixed Point

# Tutorial 1: Projection on $\ell_1$ ball

# Statistical Interpretation of Norm Approximation

# Analysis of Least Squares

## Problem Setup and Definitions

Let us define a dataset comprising a fixed design matrix $\mathbf{A} \in \R^{n \times d}$
(where $n > d$) representing the feature vectors, and a random response vector
$\mathbf{y} \in \R^n$. We assume the labels are generated according to a linear
ground-truth model:
$$
\mathbf{y} = \mathbf{A}\mathbf{x}^* + \bm{\epsilon}
$$

where $\mathbf{x}^* \in \R^d$ is the true, unknown parameter vector, and
$\bm{\epsilon} \sim \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I}_n)$ is the observation noise
vector. The goal is to learn an estimator $\hat{\mathbf{x}}$ that closely approximates
$\mathbf{y} \approx \mathbf{A}\hat{\mathbf{x}}$.

<span class="blue"><strong>Definition</strong> (<em>Risk and Excess Risk</em>):</span>
Let $\tilde{\mathbf{y}} = \mathbf{A}\mathbf{x}^* + \tilde{\bm{\epsilon}}$ be an independent test
sample drawn from the identical data-generating process, where
$\tilde{\bm{\epsilon}} \sim \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I}_n)$ is independent of
$\bm{\epsilon}$. The **Risk** of an estimator $\hat{\mathbf{x}}$ is defined as:
$$
\mathcal{R}(\hat{\mathbf{x}}) = \frac{1}{n} \E_{\bm{\epsilon}, \tilde{\bm{\epsilon}}} \norm{\tilde{\mathbf{y}} - \mathbf{A}\hat{\mathbf{x}}}^2
$$
The **Excess Risk** isolates the error attributable to the estimation of
$\mathbf{x}^*$ by removing the irreducible noise $\sigma^2$:
$$
\mathcal{E}(\hat{\mathbf{x}}) = \frac{1}{n} \E_{\bm{\epsilon}} \norm{\mathbf{A}(\mathbf{x}^* - \hat{\mathbf{x}})}^2
$$

<span class="blue"><strong>Lemma</strong> (<em>Bias-Variance Decomposition</em>):</span>
The excess risk of any estimator $\hat{\mathbf{x}}$ can be additively decomposed into an
approximation error (Bias term) and a prediction error (Variance term):
$$
\mathcal{E}(\hat{\mathbf{x}}) = \underbrace{\frac{1}{n} \E_{\bm{\epsilon}} \norm{\mathbf{A}(\mathbf{x}^* - \E[\hat{\mathbf{x}}])}^2}_{\text{Bias}} + \underbrace{\frac{1}{n} \E_{\bm{\epsilon}} \norm{\mathbf{A}(\hat{\mathbf{x}} - \E[\hat{\mathbf{x}}])}^2}_{\text{Variance}}
$$
> [!note]- Proof
> By adding and subtracting $\E[\hat{\mathbf{x}}]$, we have
> $\mathbf{A}(\mathbf{x}^* - \hat{\mathbf{x}}) = \mathbf{A}(\mathbf{x}^* - \E[\hat{\mathbf{x}}]) + \mathbf{A}(\E[\hat{\mathbf{x}}] - \hat{\mathbf{x}})$.
> Taking the expected squared norm, the cross-term
> $\frac{2}{n} \E [(\mathbf{A}(\mathbf{x}^* - \E[\hat{\mathbf{x}}]))^\top \mathbf{A}(\E[\hat{\mathbf{x}}] - \hat{\mathbf{x}})]$
> vanishes because $\E[\E[\hat{\mathbf{x}}] - \hat{\mathbf{x}}] = \mathbf{0}$. The remaining terms
> form the bias and variance components.

## Analysis of Ordinary Least Squares (OLS)

<span class="blue"><strong>Theorem</strong> (<em>Risk of OLS</em>):</span>
The Ordinary Least Squares estimator, defined as
$\hat{\mathbf{x}}_{\text{OLS}} = \arg\min_{\mathbf{x}} \norm{\mathbf{y} - \mathbf{A}\mathbf{x}}^2$, is
an unbiased estimator with an excess risk of exactly $\frac{\sigma^2 d}{n}$.
> [!note]- Proof
> The closed-form solution is
> $\hat{\mathbf{x}}_{\text{OLS}} = (\mathbf{A}^\top \mathbf{A})^{-1}\mathbf{A}^\top \mathbf{y}$.
> Taking the expectation:
> $$
> \E[\hat{\mathbf{x}}_{\text{OLS}}] = (\mathbf{A}^\top \mathbf{A})^{-1}\mathbf{A}^\top \E[\mathbf{A}\mathbf{x}^* + \bm{\epsilon}] = (\mathbf{A}^\top \mathbf{A})^{-1}\mathbf{A}^\top \mathbf{A}\mathbf{x}^* = \mathbf{x}^*
> $$
> Since the estimator is unbiased, the excess risk is entirely variance. As derived in
> standard regression analysis, the variance evaluates to $\frac{\sigma^2 d}{n}$.

## Analysis of Ridge Regression

To mitigate the variance term characteristic of OLS, particularly in settings where $d$
is large relative to $n$, we introduce $\ell_2$ regularization.

<span class="blue"><strong>Definition</strong> (<em>Ridge Estimator</em>):</span>
For a regularization parameter $\lambda > 0$, the Ridge estimator is:
$$
\hat{\mathbf{x}}_{\text{ridge}} = \arg\min_{\mathbf{x}} \left[ \frac{1}{n} \norm{\mathbf{y} - \mathbf{A}\mathbf{x}}^2 + \lambda \norm{\mathbf{x}}^2 \right] = \frac{1}{n} (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1} \mathbf{A}^\top \mathbf{y}
$$
where $\mathbf{\Sigma} = \frac{1}{n}\mathbf{A}^\top \mathbf{A}$ is the empirical covariance matrix.

By substituting $\mathbf{y} = \mathbf{A}\mathbf{x}^* + \bm{\epsilon}$, the expected Ridge
estimator is
$\E[\hat{\mathbf{x}}_{\text{ridge}}] = (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1} \mathbf{\Sigma} \mathbf{x}^*$,
demonstrating that Ridge regression introduces bias.

<span class="blue"><strong>Lemma</strong> (<em>Ridge Bias Bound</em>):</span>
The bias term for the Ridge estimator is bounded by $\frac{\lambda}{4} \norm{\mathbf{x}^*}^2$.
> [!note]- Proof
> Let
> $$
> \Delta\mathbf{x} = \mathbf{x}^* - \E[\hat{\mathbf{x}}_{\text{ridge}}] = \left(\mathbf{I} - (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1}\mathbf{\Sigma}\right)\mathbf{x}^* = \lambda(\mathbf{\Sigma} + \lambda \mathbf{I})^{-1}\mathbf{x}^*.
> $$
> The bias is:
> $$
> \text{Bias} = \frac{1}{n} \norm{\mathbf{A}\Delta\mathbf{x}}^2 = (\Delta\mathbf{x})^\top \mathbf{\Sigma} (\Delta\mathbf{x}) = \lambda^2 (\mathbf{x}^*)^\top (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1} \mathbf{\Sigma} (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1} \mathbf{x}^*.
> $$
> Because $\mathbf{\Sigma}$ and $(\mathbf{\Sigma} + \lambda \mathbf{I})^{-1}$ commute, we rewrite this as $(\mathbf{x}^*)^\top \left[ \lambda^2 \mathbf{\Sigma} (\mathbf{\Sigma} + \lambda \mathbf{I})^{-2} \right] \mathbf{x}^*$.
> Let $\mathbf{\Sigma} = \mathbf{V}\mathbf{D}\mathbf{V}^\top$ be the eigendecomposition with eigenvalues $\mu_i \ge 0$. The eigenvalues of the bracketed matrix are $f(\mu_i) = \frac{\lambda^2 \mu_i}{(\mu_i + \lambda)^2}$. Using the identity $(\mu_i + \lambda)^2 = (\mu_i - \lambda)^2 + 4\mu_i\lambda \ge 4\mu_i\lambda$, we have $f(\mu_i) \le \frac{\lambda^2 \mu_i}{4\mu_i\lambda} = \frac{\lambda}{4}$.
> By the Rayleigh quotient, the quadratic form is bounded by the maximum eigenvalue times $\norm{\mathbf{x}^*}^2$:
> $$
> \text{Bias} \le \frac{\lambda}{4} \norm{\mathbf{x}^*}^2
> $$

<span class="blue"><strong>Lemma</strong> (<em>Ridge Variance Bound</em>):</span>
The variance term for the Ridge estimator is bounded by $\frac{\sigma^2 \Tr(\mathbf{\Sigma})}{4n\lambda}$.
> [!note]- Proof
> The deviation is $\hat{\mathbf{x}}_{\text{ridge}} - \E[\hat{\mathbf{x}}_{\text{ridge}}] = \frac{1}{n} (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1} \mathbf{A}^\top \bm{\epsilon}$.
> The variance is $\E \left[ \norm{\mathbf{C}\bm{\epsilon}}^2 \right]$ where $\mathbf{C} = \frac{1}{n\sqrt{n}}\mathbf{A}(\mathbf{\Sigma} + \lambda \mathbf{I})^{-1}\mathbf{A}^\top$. For any fixed matrix $\mathbf{C}$ and $\bm{\epsilon} \sim \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I})$, $\E\norm{\mathbf{C}\bm{\epsilon}}^2 = \sigma^2 \Tr(\mathbf{C}^\top \mathbf{C})$.
> Evaluating the trace:
> $$
> \begin{aligned}
>     \text{Variance} &= \sigma^2 \Tr\left( \frac{1}{n^3} \mathbf{A}(\mathbf{\Sigma} + \lambda \mathbf{I})^{-1}\mathbf{A}^\top \mathbf{A}(\mathbf{\Sigma} + \lambda \mathbf{I})^{-1}\mathbf{A}^\top \right) \\
>     &= \frac{\sigma^2}{n} \Tr\left( \frac{\mathbf{A}^\top\mathbf{A}}{n} (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1} \frac{\mathbf{A}^\top\mathbf{A}}{n} (\mathbf{\Sigma} + \lambda \mathbf{I})^{-1} \right) = \frac{\sigma^2}{n} \Tr\left( \mathbf{\Sigma}^2 (\mathbf{\Sigma} + \lambda \mathbf{I})^{-2} \right)
> \end{aligned}
> $$
>
> The trace is the sum of eigenvalues $\sum_i \frac{\mu_i^2}{(\mu_i + \lambda)^2}$. Since $\frac{\mu_i}{(\mu_i + \lambda)^2} \le \frac{1}{4\lambda}$ as shown previously:
> $$
> \sum_i \mu_i \left( \frac{\mu_i}{(\mu_i + \lambda)^2} \right) \le \sum_i \mu_i \left( \frac{1}{4\lambda} \right) = \frac{\Tr(\mathbf{\Sigma})}{4\lambda}
> $$
> Thus, $\text{Variance} \le \frac{\sigma^2 \Tr(\mathbf{\Sigma})}{4n\lambda}$.

<span class="blue"><strong>Theorem</strong> (<em>Excess Risk of Ridge Regression</em>):</span>
By selecting the optimal regularization parameter $\lambda = \frac{\sigma\sqrt{\Tr(\mathbf{\Sigma})}}{\norm{\mathbf{x}^*}\sqrt{n}}$, the excess risk of the Ridge estimator is bounded by $\mathcal{O}\left(\frac{1}{\sqrt{n}}\right)$.
> [!note]- Proof
> Combining the lemmas, the upper bound on the excess risk is:
> $$
> \mathcal{E}(\hat{\mathbf{x}}_{\text{ridge}}) \le \frac{\norm{\mathbf{x}^*}^2}{4}\lambda + \frac{\sigma^2 \Tr(\mathbf{\Sigma})}{4n} \frac{1}{\lambda}
> $$
> This bound is of the form $f(\lambda) = a\lambda + \frac{b}{\lambda}$. By the AM-GM inequality ($a\lambda + \frac{b}{\lambda} \ge 2\sqrt{ab}$), the minimum is achieved at $\lambda = \sqrt{b/a}$.
> Substituting $a = \frac{\norm{\mathbf{x}^*}^2}{4}$ and $b = \frac{\sigma^2 \Tr(\mathbf{\Sigma})}{4n}$, we find the optimal $\lambda$. The corresponding minimal risk bound is $2\sqrt{ab}$, which evaluates to:
> $$
> \min_{\lambda > 0} \mathcal{E}(\hat{\mathbf{x}}_{\text{ridge}}) \le \frac{\sigma \norm{\mathbf{x}^*} \sqrt{\Tr(\mathbf{\Sigma})}}{2\sqrt{n}}
> $$

# Gradient Descent

Let $f: \R^d \to \R$ be a continuously differentiable objective function. We consider
the unconstrained optimization problem $\min_{\mathbf{x} \in \R^d} f(\mathbf{x})$. The
standard Gradient Descent (GD) algorithm generates a sequence of iterates
$\{\mathbf{x}^{(k)}\}_{k=0}^\infty$ via the recurrence relation
$$
\mathbf{x}^{(k+1)} = \mathbf{x}^{(k)} - \eta \nabla f(\mathbf{x}^{(k)})
$$
where $\eta > 0$ is the step size. To rigorously guarantee convergence, we must impose
structural conditions on the objective function $f$.

##### <span style="color: transparent;">def-l-smoothness-and-strong-convexity</span>
<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{L}$-Smoothness and Strong Convexity</em>):</span>
A differentiable function $f$ is **$L$-smooth** if its gradient is Lipschitz
continuous with constant $L > 0$:
$$
\norm{\nabla f(\mathbf{x}) - \nabla f(\mathbf{y})}_2 \le L \norm{\mathbf{x} - \mathbf{y}}_2 \quad \forall \mathbf{x}, \mathbf{y} \in \R^d
$$
Furthermore, $f$ is **$\mu$-strongly convex** for $\mu > 0$ if:
$$
f(\mathbf{y}) \ge f(\mathbf{x}) + \nabla f(\mathbf{x})^\top (\mathbf{y} - \mathbf{x}) + \frac{\mu}{2} \norm{\mathbf{y} - \mathbf{x}}_2^2 \quad \forall \mathbf{x}, \mathbf{y} \in \R^d
$$

If $f$ is twice continuously differentiable, these conditions are equivalent to bounding
the spectrum of the Hessian matrix:
$\mu \mathbf{I} \preceq \nabla^2 f(\mathbf{x}) \preceq L \mathbf{I}$ for all $\mathbf{x} \in \R^d$,
where $\preceq$ denotes the Loewner partial order.

## The Least Squares Objective

Let $\mathbf{A} \in \R^{n \times d}$ ($n \ge d$) denote a fixed design matrix and
$\mathbf{y} \in \R^n$ a target vector. The normalized ordinary least squares (OLS) problem
seeks to minimize the empirical risk:
$$
f(\mathbf{x}) = \frac{1}{2n} \norm{\mathbf{A}\mathbf{x} - \mathbf{y}}_2^2
$$

<span class="blue"><strong>Lemma</strong> (<em>Properties of the OLS Objective</em>):</span>
Assume $\mathbf{A}$ has full column rank ($\text{rank}(\mathbf{A}) = d$). Let
$\mathbf{H} \triangleq \frac{1}{n}\mathbf{A}^\top\mathbf{A}$ be the Hessian matrix. The objective
$f(\mathbf{x})$ is $L$-smooth and $\mu$-strongly convex with parameters:

$$
L = \lambda_{\max}(\mathbf{H}), \quad \mu = \lambda_{\min}(\mathbf{H})
$$

where $\lambda_{\max}$ and $\lambda_{\min}$ denote the maximal and minimal eigenvalues
of $\mathbf{H}$, respectively. Moreover, the unique global minimizer is
$\mathbf{x}^* = \mathbf{H}^{-1}\left(\frac{1}{n}\mathbf{A}^\top\mathbf{y}\right)$.

> [!note]- Proof
> The gradient is explicitly given by
> $\nabla f(\mathbf{x}) = \mathbf{H}\mathbf{x} - \frac{1}{n}\mathbf{A}^\top \mathbf{y}$.
> The Hessian is the constant symmetric matrix $\nabla^2 f(\mathbf{x}) = \mathbf{H}$. Since
> $\mathbf{A}$ has full column rank, $\mathbf{A}^\top\mathbf{A}$ is positive definite, implying
> $\mu = \lambda_{\min}(\mathbf{H}) > 0$. Thus, $\mu \mathbf{I} \preceq \mathbf{H} \preceq L \mathbf{I}$,
> fulfilling Definition
> [[AI2113 Optimization 2#def-l-smoothness-and-strong-convexity|L-Smoothness and Strong Convexity]]
> globally. Setting $\nabla f(\mathbf{x}^*) = \mathbf{0}$ directly
> yields the unique optimum due to the invertibility of $\mathbf{H}$.

## Spectral Error Dynamics

We analyze the evolution of the error vector
$\mathbf{e}^{(k)} \triangleq \mathbf{x}^{(k)} - \mathbf{x}^*$.

<span class="blue"><strong>Theorem</strong> (<em>Exact Error Operator</em>):</span>
For the OLS objective, the error sequence under Gradient Descent evolves according to
the linear operator $(\mathbf{I} - \eta \mathbf{H})$:
$$
\mathbf{e}^{(k)} = (\mathbf{I} - \eta \mathbf{H})^k \mathbf{e}^{(0)}
$$
> [!note]- Proof
> By substituting the gradient into the GD update rule:
> $$
> \begin{aligned}
>     \mathbf{x}^{(k)} &= \mathbf{x}^{(k-1)} - \eta \left( \mathbf{H}\mathbf{x}^{(k-1)} - \frac{1}{n}\mathbf{A}^\top \mathbf{y} \right)
> \end{aligned}
> $$
> Utilizing the optimality condition $\frac{1}{n}\mathbf{A}^\top \mathbf{y} = \mathbf{H}\mathbf{x}^*$, we have:
> $$
> \begin{aligned}
>     \mathbf{x}^{(k)} &= \mathbf{x}^{(k-1)} - \eta \mathbf{H}(\mathbf{x}^{(k-1)} - \mathbf{x}^*) \\
>     \mathbf{x}^{(k)} - \mathbf{x}^* &= (\mathbf{I} - \eta \mathbf{H}) (\mathbf{x}^{(k-1)} - \mathbf{x}^*)
> \end{aligned}
> $$
>
> Applying this relation recursively $k$ times yields the stated theorem.

To bound $\norm{\mathbf{e}^{(k)}}_2$, we must constrain the spectral radius
$\rho(\mathbf{I} - \eta \mathbf{H})$. By the Spectral Theorem, the symmetric positive definite
matrix $\mathbf{H}$ admits an orthogonal eigendecomposition
$\mathbf{H} = \mathbf{V}\mathbf{\Lambda}\mathbf{V}^\top$, where $\mathbf{V}$ is an orthogonal matrix
and $\mathbf{\Lambda} = \text{diag}(\lambda_1, \dots, \lambda_d)$ contains the eigenvalues
$\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_d > 0$.

<span class="blue"><strong>Corollary</strong> (<em>Spectral Bound and Convergence</em>):</span>
The induced $\ell_2$-norm of the iteration operator is bounded by:
$$
\norm{\mathbf{I} - \eta \mathbf{H}}_2 = \max_{1 \le i \le d} |1 - \eta \lambda_i|
$$
Consequently, $\lim_{k \to \infty} \mathbf{x}^{(k)} = \mathbf{x}^*$ for any initialization
$\mathbf{x}^{(0)}$ if and only if $0 < \eta < \frac{2}{L}$.

## Optimal Step Size via Minimax Formulation

We define the condition number of the problem as $\kappa \triangleq \frac{L}{\mu} = \frac{\lambda_1}{\lambda_d} \ge 1$. The contraction rate is defined as $q(\eta) \triangleq \max_i |1 - \eta \lambda_i|$. To maximize the convergence speed, we seek the step size $\eta^*$ that minimizes this worst-case spectral radius.

<span class="blue"><strong>Theorem</strong> (<em>Optimal Constant Step Size</em>):</span>
The optimal fixed step size minimizing the spectral radius is:
$$
\eta^* = \frac{2}{L + \mu}
$$
yielding an optimal contraction factor of $q(\eta^*) = \frac{\kappa - 1}{\kappa + 1}$.
> [!note]- Proof
> We formulate the minimax optimization problem:
> $$
> \eta^* = \arg\min_{\eta > 0} \max_{1 \le i \le d} |1 - \eta \lambda_i|
> $$
> Because $1 - \eta \lambda$ is a strictly decreasing function of $\lambda$ for any fixed $\eta > 0$, the maximum absolute value must occur at the boundaries of the spectrum: $\lambda_1 = L$ or $\lambda_d = \mu$. Thus:
> $$
> \max_{1 \le i \le d} |1 - \eta \lambda_i| = \max \left( |1 - \eta \mu|, |1 - \eta L| \right)
> $$
> For a valid learning rate ($\eta < 2/L$), the term $(1 - \eta \mu)$ is strictly positive and linearly decreasing, while $(1 - \eta L)$ becomes negative, making $|1 - \eta L| = \eta L - 1$ linearly increasing. The global minimum of the maximum of these two intersecting linear functions occurs precisely where they are equal:
> $$
> 1 - \eta \mu = \eta L - 1 \implies \eta(L + \mu) = 2 \implies \eta^* = \frac{2}{L + \mu}
> $$
> Substituting $\eta^*$ back into the contraction factor yields:
> $$
> q(\eta^*) = 1 - \left(\frac{2}{L + \mu}\right)\mu = \frac{L - \mu}{L + \mu} = \frac{(L/\mu) - 1}{(L/\mu) + 1} = \frac{\kappa - 1}{\kappa + 1}
> $$

<span class="blue"><strong>Remark</strong> (<em>Iteration Complexity</em>):</span>
Given the optimal rate
$q(\eta^*) = \frac{\kappa - 1}{\kappa + 1} \approx 1 - \frac{2}{\kappa}$ (for large
$\kappa$), the error bound is
$\norm{\mathbf{e}^{(k)}}_2 \le \left(1 - \frac{2}{\kappa}\right)^k \norm{\mathbf{e}^{(0)}}_2 \le \exp\left(-\frac{2k}{\kappa}\right) \norm{\mathbf{e}^{(0)}}_2$.
To guarantee $\norm{\mathbf{e}^{(k)}}_2 \le \epsilon$, the required number of iterations
scales as $\mathcal{O}\left(\kappa \log\frac{1}{\epsilon}\right)$.

## Computational Complexity: Exact Direct Methods
Finding the exact optimal solution $\mathbf{x}^*$ can be done via several matrix factorizations, all of which generally scale as $\mathcal{O}(nd^2)$ but differ in practical constants and numerical stability:

1. **Normal Equations (Cholesky):** $\mathbf{x}^* = (\mathbf{A}^\top \mathbf{A})^{-1}\mathbf{A}^\top \mathbf{y}$. Computing the Hessian $\mathbf{A}^\top \mathbf{A}$ takes $\mathcal{O}(nd^2)$, and its inversion/factorization takes $\mathcal{O}(d^3)$. Total time is $\mathcal{O}(nd^2)$.
2. **QR Decomposition:** $\mathbf{A} = \mathbf{Q}\mathbf{R}$. The solution is obtained by solving the triangular system $\mathbf{R}\mathbf{x}^* = \mathbf{Q}^\top \mathbf{y}$, taking $\mathcal{O}(nd^2)$.
3. **Singular Value Decomposition (SVD):** $\mathbf{A} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^\top$, implying $\mathbf{x}^* = \mathbf{V}\mathbf{\Sigma}^+\mathbf{U}^\top \mathbf{y}$. This is the most numerically stable but computationally heaviest $\mathcal{O}(nd^2)$ approach.

In practice, execution times follow: Cholesky $<$ QR $<$ SVD.

## Gradient Descent (GD) Iterations
GD is an approximate method requiring $k = \mathcal{O}\left(\kappa \log \frac{1}{\epsilon}\right)$ iterations to reach $\epsilon$-accuracy, where $\kappa$ is the condition number of the Hessian $\mathbf{H} = \frac{1}{n}\mathbf{A}^\top\mathbf{A}$. We have two primary ways to compute the gradient step $\mathbf{x}^{(k+1)} = \mathbf{x}^{(k)} - \eta \nabla f(\mathbf{x}^{(k)})$:

<span class="blue"><strong>Lemma</strong> (<em>GD Complexity Regimes</em>):</span>
Gradient Descent can be implemented in two distinct computational paradigms:

- **Approach 1 (Precomputation):** $\mathbf{x}^{(k+1)} = \mathbf{x}^{(k)} - \eta \left(\mathbf{H}\mathbf{x}^{(k)} - \frac{1}{n}\mathbf{A}^\top \mathbf{y}\right)$. We precompute $\mathbf{H}$ and $\mathbf{A}^\top \mathbf{y}$ in $\mathcal{O}(nd^2)$. Each subsequent iteration takes $\mathcal{O}(d^2)$. Total complexity: $\mathcal{O}(nd^2 + d^2 \kappa \log \frac{1}{\epsilon})$.
- **Approach 2 (No Precomputation):** $\mathbf{x}^{(k+1)} = \mathbf{x}^{(k)} - \frac{\eta}{n} \mathbf{A}^\top (\mathbf{A}\mathbf{x}^{(k)} - \mathbf{y})$. We compute the matrix-vector products iteratively. Each iteration takes $\mathcal{O}(nd)$. Total complexity: $\mathcal{O}(nd \kappa \log \frac{1}{\epsilon})$.

<span class="blue"><strong>Remark</strong> (<em>Why use Gradient Descent?</em>):</span>
In regimes where $d$ is very large, Approach 2 avoids the $\mathcal{O}(nd^2)$ cost entirely, offering significant computational savings if the problem is well-conditioned ($\kappa$ is small). Furthermore, GD is favored for:

1. **Memory Restrictions:** Iterative methods avoid storing the $d \times d$ dense Hessian, making them suitable for streaming algorithms or massive datasets.
2. **Implicit Regularization:** When stopped early, GD provides better generalization error by preventing overfitting to the noise, acting akin to Ridge regularization.

## Generalization Error and Early Stopping

We formalize the implicit regularization of GD by analyzing the noisy observation model. Let the training labels be generated by $\mathbf{y}_{\text{train}} = \mathbf{A}\mathbf{x}^* + \bm{\epsilon}$, where $\bm{\epsilon} \sim \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I}_n)$.

We obtain an estimate $\hat{\mathbf{x}}^{(k)}$ via $k$ iterations of GD on $\mathbf{y}_{\text{train}}$. We wish to analyze the test error (Risk) on a new sample:
$$
\mathcal{R}(k) = \frac{1}{n}\E \norm{\mathbf{A}\hat{\mathbf{x}}^{(k)} - \mathbf{y}_{\text{test}}}_2^2
$$
Recall that for the exact OLS estimator $\hat{\mathbf{x}}_{\text{OLS}}$, the risk is strictly $\mathcal{R}_{\text{OLS}} = \sigma^2 + \frac{\sigma^2 d}{n}$. We now track this risk strictly as a function of the iteration count $k$.

<span class="blue"><strong>Theorem</strong> (<em>Noisy Error Dynamics</em>):</span>
Let $\mathbf{A}/\sqrt{n} = \mathbf{U}\mathbf{\Sigma}\mathbf{V}^\top$ be the thin SVD of the normalized design matrix, implying $\mathbf{H} = \mathbf{V}\mathbf{\Sigma}^2\mathbf{V}^\top$. If we project the error into the eigenbasis $\bm{\alpha}^{(k)} = \mathbf{V}^\top \mathbf{x}^{(k)}$, the error recurrence with noise is:
$$
\bm{\alpha}^{(k+1)} - \bm{\alpha}^* = (\mathbf{I} - \eta \mathbf{\Sigma}^2)(\bm{\alpha}^{(k)} - \bm{\alpha}^*) + \frac{\eta}{\sqrt{n}} \mathbf{\Sigma} \tilde{\bm{\epsilon}}
$$
where $\tilde{\bm{\epsilon}} = \mathbf{U}^\top \bm{\epsilon} \sim \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I}_d)$ is the projected noise vector.

> [!note]- Proof
> Substituting the noisy labels into the GD update:
> $$
> \begin{aligned}
>     \mathbf{x}^{(k+1)} &= \mathbf{x}^{(k)} - \eta \left( \mathbf{H}\mathbf{x}^{(k)} - \frac{1}{n}\mathbf{A}^\top \mathbf{y}_{\text{train}} \right) \\
>     &= \mathbf{x}^{(k)} - \eta \left( \mathbf{H}\mathbf{x}^{(k)} - \frac{1}{n}\mathbf{A}^\top (\mathbf{A}\mathbf{x}^* + \bm{\epsilon}) \right) \\
>     \mathbf{x}^{(k+1)} - \mathbf{x}^* &= (\mathbf{I} - \eta \mathbf{H})(\mathbf{x}^{(k)} - \mathbf{x}^*) + \frac{\eta}{n}\mathbf{A}^\top \bm{\epsilon}
> \end{aligned}
> $$
> Using the thin SVD, the noise term maps to $\frac{\eta}{n} (\sqrt{n}\mathbf{V}\mathbf{\Sigma}\mathbf{U}^\top) \bm{\epsilon} = \frac{\eta}{\sqrt{n}} \mathbf{V}\mathbf{\Sigma}\tilde{\bm{\epsilon}}$.
> Multiplying the entire recurrence by $\mathbf{V}^\top$ to change into the $\bm{\alpha}$ basis yields:
> $$
> \begin{aligned}
>     \mathbf{V}^\top (\mathbf{x}^{(k+1)} - \mathbf{x}^*) &= \mathbf{V}^\top (\mathbf{I} - \eta \mathbf{V}\mathbf{\Sigma}^2\mathbf{V}^\top)(\mathbf{x}^{(k)} - \mathbf{x}^*) + \frac{\eta}{\sqrt{n}} \mathbf{\Sigma} \tilde{\bm{\epsilon}} \\
>     \bm{\alpha}^{(k+1)} - \bm{\alpha}^* &= (\mathbf{I} - \eta \mathbf{\Sigma}^2)(\bm{\alpha}^{(k)} - \bm{\alpha}^*) + \frac{\eta}{\sqrt{n}} \mathbf{\Sigma} \tilde{\bm{\epsilon}}
> \end{aligned}
> $$
> Because $\mathbf{U}$ has orthonormal columns ($\mathbf{U}^\top \mathbf{U} = \mathbf{I}_d$), the linear transformation of the isotropic Gaussian noise preserves its distribution: $\tilde{\bm{\epsilon}} \sim \mathcal{N}(\mathbf{0}, \sigma^2 \mathbf{I}_d)$.