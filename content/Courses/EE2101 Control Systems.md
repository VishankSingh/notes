---
title:
draft:
tags:
---

System

Disturbance

Feedback loop

open close System

![[EE2101 Control Systems_tikz_0.svg]]

# Linear Constant Coefficient Ordinary Differential Equations (LCC-ODE)

A differential equation of the form
$$
\sum_{k=0}^{n} a_k \frac{d^k y(t)}{dt^k} = \sum_{m=0}^{M} b_m \frac{d^m r(t)}{dt^m},
$$
where $y(t)$ is the output (response) of the system and $r(t)$ is the input to the system;
and $a_i$ and $b_i$ are constant.

# Laplace Transform

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

## Region of Convergence (RoC)

## Properties of Laplace Transform

## Standard Laplace Transform Pairs

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

# Second-Order System Analysis

Consider a linear time-invariant (LTI) second-order system described by the transfer function $G(s)$:
$$
G(s) = \frac{b}{s^2 + as + b}
$$
where $a$ and $b$ are constant coefficients. To analyze the dynamic behavior, we map these coefficients to standard physical parameters.

<span class="blue"><strong>Definition</strong> (<em>Natural Frequency, $\color{#338cc7}{\omega_n}$</em>):</span>
The natural frequency, $\omega_n$, represents the frequency at which the system would oscillate in the absence of damping. It is defined as:
$$
\omega_n \coloneqq \sqrt{b}
$$

<span class="blue"><strong>Definition</strong> (<em>Damping Ratio, $\color{#338cc7}{\zeta}$</em>):</span>
The damping ratio, $\zeta$, is a dimensionless parameter that characterizes the rate at which oscillations decay. It is related to the system coefficients by:
$$
\zeta \coloneqq \frac{a}{2\omega_n} = \frac{a}{2\sqrt{b}}
$$

Substituting these parameters back into the original expression yields the \textbf{canonical form} of the second-order transfer function:
$$
G(s) = \frac{\omega_n^2}{s^2 + 2\zeta \omega_n s + \omega_n^2}
$$

The poles of the system, denoted as $s_{1,2}$, are the roots of the characteristic equation $s^2 + 2\zeta \omega_n s + \omega_n^2 = 0$. Using the quadratic formula, the poles are given by:
$$
s_{1,2} = -\zeta \omega_n \pm \omega_n \sqrt{\zeta^2 - 1}
$$

# Underdampled Second Order System

$$
Y(s) = \frac{1}{s} \frac{\omega_n^2}{s^2 + 2\zeta \omega_n s + \omega_n^2} = \frac{A_1}{s} + \frac{A_2 s + A_3}{s^2 + 2\zeta \omega_n s + \omega_n^2}
$$
$$
Y(s) = \frac{1}{s} - \frac{s+\zeta\omega_n}{(s+\zeta\omega_n)^2 + \omega_n^2(1-\zeta^2)} - \frac{(\zeta/\sqrt{1-\zeta^2})\omega_n\sqrt{1-\zeta^2}}{(s+\zeta\omega_n)^2 + \omega_n^2(1-\zeta^2)}
$$
$$
\omega_d \coloneqq \omega_n\sqrt{1-\zeta^2}
$$
$$
y(t) = u(t) - e^{-\zeta \omega_n t} \cos(\omega_d t) u(t) - \frac{\zeta}{\sqrt{1-\zeta^2}} e^{-\zeta \omega_n t} \sin(\omega_d t) u(t)
$$

<span class="blue"><strong>Definition</strong> (<em>Rise time, $\color{#338cc7}{T_r}$</em>):</span>
The time required for the waveform to go from $0.1$ of the ﬁnal value to $0.9$ of the ﬁnal value.
$$
T_r = \frac{\pi - \theta}{\omega_n \sqrt{1-\zeta^2}}, \quad \theta = \arctan \left( \frac{\sqrt{1-\zeta^2}}{\zeta} \right)
$$

<span class="blue"><strong>Definition</strong> (<em>Peak time, $\color{#338cc7}{T_p}$</em>):</span>
The time required to reach the ﬁrst, or maximum, peak.
$$
T_p = \frac{\pi}{\omega_n \sqrt{1-\zeta^2}}
$$

<span class="blue"><strong>Definition</strong> (<em>Percent overshoot, $\color{#338cc7}{\% OS}$</em>):</span>
The amount that the waveform overshoots the steady-state, or ﬁnal, value at the peak time,
expressed as a percentage of the steady-state value.
$$
\% OS = \exp\left( -\zeta\pi / \sqrt{1-\zeta^2} \right) \times 100
$$

<span class="blue"><strong>Definition</strong> (<em>Settling time, $\color{#338cc7}{T_s}$</em>):</span>
The time required for the transient’s damped oscillations to reach and
stay within $\pm 2\%$ of the steady-state value.
$$
T_s = \frac{-\ln \left(0.02 \sqrt{1-\zeta^2}\right)}{\zeta\omega_n} \approx \frac{4}{\zeta\omega_n}
$$