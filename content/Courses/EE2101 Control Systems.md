---
title:
draft:
tags:
---
# January 9, 2026 (Class 2)

System

Disturbance

Feedback loop

open close System

![[EE2101 Control Systems_tikz_0.svg]]

# January 12, 2026 (Class 3)

## Linear Constant Coefficient Ordinary Differential Equations (LCC-ODE)

A differential equation of the form
$$
\sum_{k=0}^{n} a_k \frac{d^k y(t)}{dt^k} = \sum_{m=0}^{M} b_m \frac{d^m r(t)}{dt^m},
$$
where $y(t)$ is the output (response) of the system and $r(t)$ is the input to the system;
and $a_i$ and $b_i$ are constant.

## Laplace Transform

The Laplace transform of a function $f(t)$, defined for all real numbers $t \ge 0$,
is the function $F(s)$, which is a unilateral transform defined by

$$
\mathcal{L}[f](s) = F(s) = \int_{0^-}^{\infty} f(t) e^{-st} dt,
$$
where $s = \sigma + \iota \omega$ complex frequency-domain parameter, and, $0^-$ is the
shorthand notation for
$$
\lim_{\varepsilon \rightarrow 0^+} \int_{-\varepsilon}^{\infty} .
$$

### Region of Convergence (RoC)