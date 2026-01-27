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

### Properties of Laplace Transform

### Standard Laplace Transform Pairs

$$
\begin{array}{|c|c|c|c|}
\hline
\text{Function} & \text{Time Domain } f(t) & \text{Laplace Domain } F(s) & \text{ROC} \\
\hline
\text{Impulse} & \delta(t) & 1 & \text{All } s \\
\hline
\text{Step} & u(t) & \dfrac{1}{s} & \Re(s) > 0 \\
\hline
\text{Ramp} & tu(t) & \dfrac{1}{s^2} & \Re(s) > 0 \\
\hline
\text{Power} & t^n u(t) & \dfrac{n!}{s^{n+1}} & \Re(s) > 0 \\
\hline
\text{Exponential} & e^{-at}u(t) & \dfrac{1}{s+a} & \Re(s) > -a \\
\hline
\text{Sine} & \sin(\omega t)u(t) & \dfrac{\omega}{s^2 + \omega^2} & \Re(s) > 0 \\
\hline
\text{Cosine} & \cos(\omega t)u(t) & \dfrac{s}{s^2 + \omega^2} & \Re(s) > 0 \\
\hline
\end{array}
$$

# January 16, 2025 (Class 4)

# January 19, 2025 (Class 5)

# January 20, 2025 (Class 6)

## Second Order System
We have $G(s)$ as,
$$
G(s) = \dfrac{b}{s^2 + as + b}
$$
and
$$
\zeta \coloneqq \frac{a}{2\sqrt{b}} \quad w_n \coloneqq \sqrt{b}.
$$

From this
$$
G(s) = \frac{w_n^2}{s^2 + 2\zeta w_n s + w_n^2},
$$
with poles as
$$
\sigma_{1,2} = -\zeta w_n \pm w_n \sqrt{\zeta^2 - 1}.
$$

### Relation between $\zeta$ and the step response

#### For $\zeta > 1$:

Poles are real.