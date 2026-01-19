---
title:
draft:
tags:
---
# January 8, 2026 (Class 0)

SCS
CVX
Julia
DCP - disciplined convex programming
SOCP

Norm approximation

# January 9, 2026 (Class 1)

## Norm Approximation

Let $\mat{A}\in \mathbb{R}^{m\times n}$, $\vct{b}\in\mathbb{R}^m$.
The objective is
$$
\min_{\vct{x}\in\mathbb{R}^n} \|\mat{A}\vct{x}-\vct{b}\|
$$

<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{\ell_1}$ norm</em>):</span>
For $\vct{y} \in \mathbb{R}^m$, $\ell_1$ norm is defined as
$$
\left\| \vct{y} \right\|_1 = \sum_{i=1}^{m} |y_i|
$$

<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{\ell_2}$ norm</em>):</span>
For $\vct{y} \in \mathbb{R}^m$, $\ell_2$ norm is defined as
$$
\left\| \vct{y} \right\|_2 = \left( \sum_{i=1}^{m} y_i^2 \right)^{1/2}
$$

<span class="blue"><strong>Definition</strong> (<em>$\color{#338cc7}{\ell_\infty}$ norm</em>):</span>
For $\vct{y} \in \mathbb{R}^m$, $\ell_\infty$ norm is defined as
$$
\left\| \vct{y} \right\|_\infty = \max_{1 \le i \le m} |y_i|
$$

# January 14, 2026 (Class 2)

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

## Moreau Envelope

<span class="blue"><strong>Definition</strong> (<em>Moreau Envelope</em>):</span>
Given $f:\mathbb{R}^n \rightarrow \mathbb{R}$, we have the Moreau Envelope as
$$
f_u(\vct{x}) = \min_{\vct{y}\in\mathbb{R}^n} \left\{ f(\vct{y}) + \dfrac{1}{2u} \|\vct{x}-\vct{y}\|^2 \right\}.
$$

### Properties of Moreau Envelope

1. $f_u(\vct{x})$ is differentiable if $f$ is continuous. Further, the derivative is continuous.
2. $f_u(\vct{x})$ is defined for all $\vct{x} \in \mathbb{R}^n$, even when $f$ is not.
3. $f_u(\vct{x})$ is convex whenever $f$ is convex.
4. If $x^*$ is the unique minimizer of $f$, then it is the unique minimizer of $f_u(\vct{x})$

# January 16, 2026 (Class 3)

<span class="blue"><strong>Remark</strong>:</span>
$f_u(\vct{x})$ is convex, since it is the min over one variable of a jointly convex function.

<span class="blue"><strong>Remark</strong>:</span>
$f_u(\vct{x})$ is continuously smooth.

<span class="blue"><strong>Remark</strong>:</span>
$$
epi f_u(x) = epi f(x) \oplus epi \left( \frac{1}{2u} \|x\|^2 \right)
$$

<span class="blue"><strong>Remark</strong>:</span>
$x^*$ is a minima of $f$ if and only if $x^*$ is a minima of $f_u$.

<span class="blue"><strong>Remark</strong>:</span>
$$
\nabla f_u(\vct{x}) = \frac{1}{u} (1 - prox_u(x)),
$$
where,
$$
prox_u(x) = \arg \min_{\vct{y}\in\mathbb{R}^n} \left\{ f(\vct{y}) + \dfrac{1}{2u} \|\vct{x}-\vct{y}\|^2 \right\}.
$$

# January 20, 2026 (Class 4)