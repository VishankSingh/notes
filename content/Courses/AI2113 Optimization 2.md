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