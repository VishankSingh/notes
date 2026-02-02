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

<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{\ell_1}$ norm</em>):</span>
For $\mathbf{y} \in \mathbb{R}^m$, $\ell_1$ norm is defined as
$$
\left\| \mathbf{y} \right\|_1 = \sum_{i=1}^{m} |y_i|
$$

<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{\ell_2}$ norm</em>):</span>
For $\mathbf{y} \in \mathbb{R}^m$, $\ell_2$ norm is defined as
$$
\left\| \mathbf{y} \right\|_2 = \left( \sum_{i=1}^{m} y_i^2 \right)^{1/2}
$$

<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{\ell_\infty}$ norm</em>):</span>
For $\mathbf{y} \in \mathbb{R}^m$, $\ell_\infty$ norm is defined as
$$
\left\| \mathbf{y} \right\|_\infty = \max_{1 \le i \le m} |y_i|
$$

## Penalty Functions

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
\nabla f_u(\mathbf{x}) = \frac{1}{u} (1 - prox_u(x)).
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

<span class="blue"><strong>Remark</strong>:</span>
{Fenchel Young inequality}
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

<span class="blue"><strong>Corollary</strong>:</span>
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
> $$
> \begin{aligned}
>     h^*(\mathbf{m}) &= \sup_{\mathbf{y}} \left( \mathbf{m}^T \mathbf{y} - h(\mathbf{y}) \right) \\
>     &= \sup_{\mathbf{y}} \left( \mathbf{m}^T \mathbf{y} - \min_{\mathbf{x}} f(\mathbf{x}, \mathbf{y}) \right) \\
>     &= \sup_{\mathbf{y}} \sup_{\mathbf{x}} \left( \mathbf{m}^T \mathbf{y} - f(\mathbf{x}, \mathbf{y}) \right) = f^*(0, \mathbf{m})
> \end{aligned}
> $$

<span class="blue"><strong>Remark</strong>:</span>
$\sup \left[-f^*(0,\mathbf{m})\right] \le \inf f(\mathbf{x},0)$ i.e. $h^{**}(0) \le h(0)$

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

# Mechanistic Interpretation of KKT Conditions