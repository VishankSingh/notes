# July 28, 2025 (Class 1)

## Initial Value problem (IVP)
<span class="blue"><strong>Definition</strong> (<em>Initial value problem</em>):</span>
An initial value problem (IVP) is a a differential equation together with a specified value, called the initial condition, at a given point in the domain. An IVP is typically expressed in the form:
$$
\begin{aligned}
y'(t) &= f(t, y(t)), \quad \text{with } f: \Omega \subseteq \mathbb{R} \times \mathbb{R}^n \to \mathbb{R}^n, \\
y(t_0) &= y_0, \text{where } (t_0, y_0) \in \Omega.
\end{aligned}
$$

## Hadamard well-posedness of an IVP
For an IVP to be well-posed in the sense of Hadamard, it must satisfy three conditions:

1. The solution exists.
2. The solution is unique.
3. The solution is stable with respect to the data, meaning small changes in the initial conditions or parameters lead to small changes in the solution.

If any of these conditions are not satisfied, the problem is considered ill-posed.

## Lipschitz continuity

##### <span style="color: transparent;">sec:lipschitz-continuity</span>

<span class="blue"><strong>Definition</strong> (<em>Lipschitz continuity.</em>):</span>
Given metric spaces $(X, d_X)$ and $(Y, d_Y)$, a function $f: X \to Y$ is Lipschitz continuous if there exists a constant $L > 0$ such that
$$
\begin{aligned}
d_Y(f(x_1), f(x_2)) \leq L d_X(x_1, x_2), \quad \forall x_1, x_2 \in X.
\end{aligned}
$$

<span class="blue"><strong>Definition</strong> (<em>Locally Lipschitz continuity.</em>):</span>
A function $f: X \to Y$ is locally Lipschitz continuous if for every point $x_0 \in X$, there exists a neighborhood $U$ of $x_0$ such that $f$ is Lipschitz continuous on $U$, i.e.
$$
\begin{aligned}
\exists \; L > 0, \text{ such that } d_Y(f(x_1), f(x_2)) \leq L d_X(x_1, x_2), \quad \forall x_1, x_2 \in U.
\end{aligned}
$$

## Bounded derivative method of checking Lipschitz continuity
If a function $f: \mathbb{R}^n \times \mathbb{R}^m \to \mathbb{R}^n$ is differentiable on a convex domain $\mathcal{D}$, then it is Lipschitz continuous if,
$$
\begin{aligned}
\exists \; L \in \mathbb{R} > 0 \text{ such that } \sup_{(x,y) \in \mathcal{D}} \|\mathcal{J}_f (x,y)\| = L < \infty,
\end{aligned}
$$
where $\mathcal{J}_f (x,y)$ is the Jacobian matrix of $f$ at $(x,y)$ and $\|\cdot\|$ denotes the operator norm.

To note, if the function $f$ is not differentiable, we can still use the definition of Lipschitz continuity to check if it is Lipschitz continuous. If $f$ is not locally Lipschitz on the domain $\mathcal{D}$ of the IVP, then the IVP may not have a unique solution or may not be well-posed.

# July 30, 2025 (Class 2)

## Picard's theorem (Existence and uniqueness of solutions to IVP)
Let $f : \mathcal{D} \subseteq \mathbb{R}^2 \to \mathbb{R}$ be a real valued $f^n$ of two variables $x$ and $y$. Let $\mathcal{D}$ be a closed rectangle defined by
$$
\mathcal{D} := \{(x,y) \in \mathbb{R}^2 : 0\leq x \leq a, 0 \leq y \leq b, a >0, b > 0\}.
$$
If $f(x,y)$ satisfies the following conditions:

1. $f(x,y)$ is continuous on $\mathcal{D}$ and it is bounded such that $|f(x,y)| \leq M$ where $M \in \mathbb{R}$.
2. $f(x,y)$ is locally Lipschitz continuous in $y$ on $\mathcal{D}$, i.e., for every $(x,y) \in \mathcal{D}$, there exists a constant $M > 0$ such that
$$
|f(x,y_1) - f(x,y_2)| \leq M |y_1 - y_2|, \quad \forall (x,y_1) \in \mathcal{D} \text{ and } (x,y_2) \in \mathcal{D}
$$

then the initial value problem (IVP) has a unique solution existing in the interval
$$
I: \{x\in \mathbb{R} : |x-x_o| < h\}
$$
where $h = \min(a, b/M)$, $M = \max|f(x,y)|$

## Gronwall's lemma

## Approximation methods

### Picard's method of successive iteration
Given
$$
y' = f(x,y), y(x_o) = y_o, \quad x \in [x_o, a]
$$

Let $y_o$ be the initial approximation.
Then
$$
\begin{aligned}
    y_1(x) &= y(x_o) + \int_{x_o}^{x} f(x, y_o) dx \quad \text{[Piccard's 1st approximation]} \\
    y_2(x) &= y(x_o) + \int_{x_o}^{x} f(x, y_1(x)) dx \quad \text{[Picard's 2nd approximation]} \\
    y_{n}(x) &= y(x_o) + \int_{x_o}^{x} f(x, y_{n-1}(x)) dx \quad \text{[Picard's $n$th approximation]}
\end{aligned}
$$

If the sequence $\{y_n\}_{n=1}^\infty \to y(x)$, then $y(x)$ is the unique solution to the IVP, and $|y_n(x) - y(x_o)| \leq M|x-x_o|$

For an $\epsilon > 0$, we stop the iteration when
$$
\begin{aligned}
|y_n(x) - y_{n-1}(x)| < \epsilon, \quad \forall x \in [x_o, a].
\end{aligned}
$$

### Numerical methods for solving IVP

1. Single-step methods: Euler's method, Taylor's method, Runga-Kutta method
2. Multi-step methods

# July 31, 2025 (Class 3)

## Single step methods

![[MA5060 Numerical Analysis_tikz_0.svg]]

We have
$$
\begin{aligned}
    y' &= f(x,y) \\
    y(x_o) &= y_o \\
    x &\in [x_o, b] \\
    N &:= \dfrac{b - x_o}{h} \\
    S &:= \underbrace{\{x_0 < x_1 < x_2 < \ldots < x_N\}}_{\text{Grid points}} \text{where }x_N = b \\
\end{aligned}
$$
,where $h$ is the step size, $N$ is the number of steps, and $S$ is the set of grid points, and $f(x,y)$ satisfies the conditions of Picard's theorem.

The grid points are equally spaced, i.e., $h = x_{n+1} - x_n$ is constant for all $n$, where $h$ is the step size.

By definition, A single step method is a method that computes the next value $y_{n+1}$ using only the current value $y_n$ and the current point $x_n$.

Single step methods are categorized in two types:

1. Explicit methods: The next value $y_{n+1}$ is computed directly from the current value $y_n$ and the function $f(x_n, y_n)$, i.e., $y_{n+1} = y_n + h \phi(x_n, y_n)$.
2. Implicit methods: The next value $y_{n+1}$ is computed by solving an equation that involves both $y_{n+1}$ and $y_n$, i.e., $y_{n+1} = y_n + h \phi(x_n, y_n, x_{n+1}, y_{n+1}; h)$.

where $\phi$ is a continuous function of its arguments, and assumed to satisfy Lipschitz condition w.r.t. $y$, (also called as the increment function).

## Taylor's method

##### <span style="color: transparent;">sec:taylor-method</span>

$$
y' = f(x,y), \quad y(x_o) = y_o, x \in [x_o, b]
$$

Assumptions:

1. $f(x,y)$ satisfies the conditions of Picard's theorem.
2. The solution $y(x)$ is sufficiently smooth, i.e., it has continuous derivatives of order $(p+1)$ on the interval $[x_o, b], p \geq 1$.

Then the solution $y(x)$ can be approximated by the Taylor series expansion around the point $x_o$:
$$
\begin{aligned}
    y(x) &= y(x_o) + (x - x_o) y'(x_o) + \dfrac{(x - x_o)^2}{2!} y''(x_o) + \ldots + \dfrac{(x - x_o)^p}{p!} y^{(p)}(x_o) + \mathcal{O}((x - x_o)^{p+1})
\end{aligned}
$$
The remainder term $\mathcal{O}((x - x_o)^{p+1})$ represents the error in the approximation, which is of order $(p+1)$, and the specific form is,
$$
\dfrac{(x-x_o)^{p+1}}{(p+1)!} y^{(p+1)}(\xi), \quad \xi \in (x_o, x)
$$

> [!note]- Proof
> [Derivation of remainder term]
> To get the specific form of the remainder term, we can use the integral form of the remainder in Taylor's theorem:
> $$
> \begin{aligned}
>     \dfrac{1}{p!}\int_{x_o}^{x} (x - t)^p y^{(p+1)}(t) dt &= \dfrac{1}{p!} y^{(p+1)}(\xi) \int_{x_o}^{x} (x-t)^p dt \quad \text{[by Integral Mean Value Theorem]} \\
>     &= \dfrac{1}{p!} y^{(p+1)}(\xi) \left[ \dfrac{(x - x_o)^{p+1}}{(p+1)} \right] \\
>     &= \dfrac{(x - x_o)^{p+1}}{(p+1)!} y^{(p+1)}(\xi), \quad \xi \in (x_o, x)
> \end{aligned}
> $$

### Truncation error

We have the truncation error as
$$
\mathcal{E}_n = \dfrac{h^{p+1}}{(p+1)!} y^{(p+1)}(\xi_n)
$$

> [!note]- Proof
> [Derivation of truncation error]
> At $x = x_{n+1}$,
> $$
> y(x_{n+1}) = y(x_n) + (x_{n+1} - x_n) y'(x_n) + \ldots + \dfrac{(x_{n+1} - x_n)^p}{p!} y^{(p)}(x_n) + \dfrac{(x_{n+1} - x_n)^{p+1}}{(p+1)!} y^{(p+1)}(\xi_n).
> $$
> Letting $h = x_{n+1} - x_n$ , for $n=0,1,\ldots,N-1$, we can rewrite the above equation as:
> $$
> \begin{aligned}
>     y(x_{n+1}) &= y(x_n) + h y'(x_n) + \dfrac{h^2}{2!} y''(x_n) + \ldots + \dfrac{h^p}{p!} y^{(p)}(x_n) + \dfrac{h^{p+1}}{(p+1)!} y^{(p+1)}(\xi_n) \\
>     &= y(x_n) + h y'(x_n) + \dfrac{h^2}{2!} y''(x_n) + \ldots + \dfrac{h^p}{p!} y^{(p)}(x_n) + \mathcal{E}_n \quad n = 0, 1, \ldots, N-1,
> \end{aligned}
> $$
> where $\mathcal{E}_n = \dfrac{h^{p+1}}{(p+1)!} y^{(p+1)}(\xi_n)$ is the **local** truncation error at the $n$th step, with order $\mathcal{O}(h^{p+1})$.

### General form and approximation

We can express the relationship for the exact solution in a form that resembles our numerical method,
$$
y_{n+1} = y_n + h \left(y'(x_n) + \dfrac{h}{2!} y''(x_n) + \ldots + \dfrac{h^{p-1}}{(p)!} y^{(p)}(x_n)\right) + \mathcal{E}_n, \quad n = 0, 1, \ldots, N-1.
$$
By dropping the local error term $\mathcal{E}_n$, we get the Taylor's method for solving the IVP, with order $p$,
$$
y_{n+1} = y_n + h \phi(x_n, y_n; h), \quad n = 0, 1, \ldots, N-1.
$$
where
$$
\phi(x_n, y_n; h) = y'(x_n) + \dfrac{h}{2!} y''(x_n) + \ldots + \dfrac{h^{p-1}}{(p)!} y^{(p)}(x_n)
$$
is the increment function, which is a polynomial of degree $p-1$ in $h$.

## Computation of higher order derivatives of $y(x)$ at $x = x_n$

Assumption: The function $f(x,y)$ is sufficiently smooth.

$$
\begin{aligned}
    y'(x_n) &\approx y_n' = f(x_n, y_n) \\
    y'' &\approx \dfrac{df}{dx} = \dfrac{\partial f}{\partial x} + \dfrac{\partial f}{\partial y} y' = \dfrac{\partial f}{\partial x} + \dfrac{\partial f}{\partial y} f(x_n, y_n) \\
\end{aligned}
$$

TODO: complete the computation of higher order derivatives

# August 4, 2025 (Class 4)
TODO: complete this section

## Truncation error

There are two types of truncation errors:

1. Local truncation error
2. Global truncation error

### Local truncation error
We have $T_n$ as the local truncation error at the $n$th step, and
$$
\epsilon_n = hT_n = \dfrac{h^{p+1}}{(p+1)!} y^{(p+1)} (x_n + \theta h), \quad \text{where } 0 < \theta < 1,
$$
where
$$
T_n = \dfrac{h^{p}}{(p+1)!} y^{(p+1)} (x_n + \theta h).
$$

From the Taylor's series expansion we have,

$$
\begin{aligned}
    y(x_{n+1}) &= y(x_n) + h \phi(x_n, y(x_n); h) + \epsilon_n \\
    &= y(x_n) + h \phi(x_n, y(x_n); h) + hT_n
\end{aligned}
$$
$$
T_n = \dfrac{y(x_{n+1}) - y(x_n)}{h} - \phi(x_n, y(x_n); h)
$$

### Global truncation error

$$
T = \underset{0 \leq x \leq N-1}{\max} |T_n|
$$

If $\epsilon > 0$ is preassigned number to bound the truncation error, then
$$
|hT_n| < \epsilon
$$
$$
\left|\dfrac{h^{p+1}}{(p+1)!} f^{(p+1)}(x_n + \theta h, y(x_n + \theta h))  \right| \leq \epsilon
$$

- For a given $h$ and $\epsilon$, the above equation will give $p$, i.e. the number of terms in the Taylor series method.
- If $p$ and $\epsilon$ are specified, then it will give the upper bound on $h$.

### Bound on truncation error
Given the local truncation error $T_n$ for the Taylor's method, we can express it as follows:
$$
\begin{aligned}
    T_n &= \dfrac{h^p}{(p+1)!}y^{(p+1)}(\xi_n) \\
    |T_n| &\leq \dfrac{h^p}{(p+1)!} M_{p+1}, \quad \text{where } M_{p+1} = \underset{x_0 \leq \xi_n \leq b}{\max} |y^{(p+1)}(\xi_n)|
\end{aligned}
$$

## Global error

We define the global error as
$$
e_n = y(x_n) - y_n,
$$
where $y(x_n)$ is the exact value and $y_n$ is the approximated value.

## Rounding error

# August 6, 2025 (Class 5)

## Bound on global error in terms of truncation error

<span class="blue"><strong>Theorem</strong> (<em>Global Error Bound for Single-Step Methods.</em>):</span>
Let the initial value problem (IVP) be defined on the interval $[a,b]$ by
$$
y'(x) = f(x,y(x)), \quad y(a) = y_0
$$
and let $y(x)$ denote its unique, exact solution.

Consider a numerical approximation to this IVP generated by a general single-step method,
$$
y_{n+1} = y_n + h \phi(x_n, y_n; h), \quad n = 0, 1, \ldots, N-1,
$$
where $h = (b-a)/N$ is the uniform step size, $x_n = a+nh$ and $y_n$ is the approximation to $y(x_n)$.
We assume $\phi$ is a continuous function of its arguments, and satisfies Lipschitz condition (see [[MA5060 Numerical Analysis#seclipschitz-continuity|Lipschitz continuity]]) with respect to its second argument, with Lipschitz constant $L$.

Then we have
$$
|e_n| \leq \dfrac{T}{L} \left(e^{L (x_n-x_o)} - 1\right), \quad n = 0, 1, \ldots, N-1
$$
where $T = \underset{0 \leq n \leq N-1}{\max} |T_n|$ and $T_n$ are the local truncation errors.

This result establishes that if the local truncation error $T_n$ is small, the global error will also be small, with its growth controlled exponentially by the Lipschitz constant L and the width of the integration interval.

> [!note]- Proof
> [Proof of the bound on global error]
>
> We have,
> $$
> \begin{aligned}
>     T_n &= \dfrac{y(x_{n+1}) - y({x_n})}{h} - \phi(x_n, y(x_n); h) \\
>     \implies y(x_{n+1}) &= y(x_n) + h \phi(x_n, y(x_n); h) + hT_n \\
> \end{aligned}
> $$
>
> From the single step method, we have,
> $$
> y_{n+1} = y_n + h \phi(x_n, y_n; h)
> $$
>
> Subtracting the two equations, we get,
> $$
> \begin{aligned}
>     (y(x_{n+1}) - y_{n+1}) &= (y(x_n) - y_n) + h \left(\phi(x_n, y(x_n); h) - \phi(x_n, y_n; h)\right) + hT_n  \\
>     e_{n+1} &= e_n + h \left(\phi(x_n, y(x_n); h) - \phi(x_n, y_n; h)\right) + hT_n \\
>     |e_{n+1}| &\leq |e_n| + h \left|\phi(x_n, y(x_n); h) - \phi(x_n, y_n; h)\right| + |hT_n| \\
>     &\leq |e_n| + L_{\phi} h |y(x_n) - y_n| + |hT_n| \qquad \text{[Lipschitz continuity of } \phi\text{]} \\
>     &\leq |e_n| + L_{\phi} h |e_n| + hT \qquad \qquad \qquad \;\;\; \text{where } |T| = \underset{0\leq n \leq N-1}{\max} |T_n| \\
>     |e_{n+1}| &\leq  |e_n| (1 + L_{\phi} h) + hT , \quad n = 0, 1, \ldots, N-1 \\
> \end{aligned}
> $$
>
> For $n=0$,
> $$
> \begin{aligned}
>     |e_1| &\leq |e_0| (1+ hL_{\phi}) + hT \\
>     e_0 &= y(x_0) - y_0 = 0 \implies |e_1| \leq hT
> \end{aligned}
> $$
>
> For $n=1$,
> $$
> \begin{aligned}
>     |e_2| &\leq |e_1| (1 + hL_{\phi}) + hT \\
>     &\leq hT (1 + hL_{\phi}) + hT \\
>     &= 2hT + h^2 L_{\phi} T \\
>     &= \dfrac{T}{L_{\phi}} \left(2L_{\phi} h + h^2 L_{\phi}^2\right) \\
>     \implies |e_2| &\leq \dfrac{T}{L_{\phi}} \left((1+hL_{\phi})^2 - 1\right) \\
> \end{aligned}
> $$
>
> For general $n$,
> $$
> \begin{aligned}
>     |e_n| &\leq \dfrac{T}{L_{\phi}} \left((1+hL_{\phi})^n - 1\right) \quad n = 0, 1, \ldots, N-1 \\
>     &\leq \dfrac{T}{L_{\phi}} \left(e^{L_{\phi} (x_n - x_o)} - 1\right) \quad \text{[since } (1+x)^n \leq e^{nx} \text{ for } x > -1, n > 0\text{]} \\
> \end{aligned}
> $$

## Consistency of a single step method
The general single step method is said to be consistent with the given IVP if

TODO: complete this section

## Order of a single step method

TODO: complete this section

# August 7, 2025 (Class 6)

## Convergence of a single step method
Assume that the IVP satisfies the conditions of Picard's theorem, and also that its approximation generated from the single step method when $h<h_0$ lies in the region $\mathcal{D}$.
Assume further that the function $\phi$ is Lipschitz continuous in $y$ on $\mathcal{D}\times [0,h_0]$ and satisfies the consistency condition $\phi(x,y;0) = f(x,y)$.
Then for ${y_n}$ generated by the single step method, we have, for any fixed point $x \in [x_0, b]$,
$$
\lim_{h \to 0} y_n = y(x).
$$

### Proof of convergence of a single step method
We define
$$
h := \dfrac{b-x_0}{N}, \quad N \in \mathbb{N}^+
$$
and $N$ is sufficiently large such that $h < h_0$.

TODO: write the proof

# August 11, 2025 (Class 7)

## Euler method

From the first order [[MA5060 Numerical Analysis#sectaylor-method|taylor's method]] method we can get the
Euler method.
$$
y_{n+1} = y_n + h y'_n = y_n + h f(x_n, y_n)
$$

Assumption: The step size $h$ is taken to be very small to bound the error of $O(h^2)$ in the taylor series method
$$
\begin{aligned}
    y(x_{n+1}) &= y(x_n) + h y'(x_n) + O(h^2) \\
    &= y(x_n) + h f(x_n, y(x_n)) + \dfrac{h^2}{2!}y''(\xi), \quad x_n < \xi < x_{n+1}
\end{aligned}
$$

### Truncation error of Euler method

$$
\begin{aligned}
    T_n &= \dfrac{y(x_{n+1}) - y(x_n)}{h} - \phi(x_n, y(x_n);h) \\
    &= \dfrac{1}{h}\left(y(x_n) + h y'(x_n) + \dfrac{h^2}{2!} y''(\xi) - y(x_n)\right) - f(x_n, y(x_n)) \\
    &= \dfrac{h}{2!} y''(\xi) \qquad\qquad  \because  y'(x_n) = f(x_n, y(x_n)) \text{ from IVP}
\end{aligned}
$$

Therefore,
$$
\left|T_n\right| \leq Kh, \quad \text{where } K = \dfrac{1}{2} \max_{\xi \in [x_0, b]}|y''(\xi)|.
$$

Euler method is of order 1.

### Global error of Euler method

TODO: complete this section

# August 13, 2025 (Class 8)

The differential equation is given by
$$
\dfrac{dy}{dx} = f(x,y)
$$
From this, we have
$$
\begin{aligned}
    \int_{x_n}^{x_{n+1}} y' dx &= \int_{x_n}^{x_{n+1}} f(x,y) dx \\
    y(x_{n+1}) &= y(x_n) + \int_{x_n}^{x_{n+1}} f(x,y) dx \\
               &= y(x_n) + f(\xi_n, y(\xi_n)) \int_{x_n}^{x_{n+1}} dx, \quad \text{where } x_n < \xi_n < x_{n+1} \\
               &= y(x_n) + (x_{n+1} - x_n) f(\xi_n, y(\xi_n)) \\
               &= y(x_n) + h f(\xi_n, y(\xi_n)) \\
\end{aligned}
$$

$$
y(x_{n+1}) = y(x_n) + hf(x_n + \theta h, y(x_n + \theta h)), \quad \text{where } 0 < \theta < 1
$$

## Euler method, $\theta = 1$
For $\theta = 0$, we have
$$
y_{n+1} = y_n + hf(x_n, y_n).
$$

## Backward Euler method, $\theta = 1$
For $\theta = 1$, we have
$$
y_{n+1} = y_n + hf(x_n + h, y(x_n + h)).
$$

Explicit form,
$$
y_{n+1} = y_n + hf(x_n, y_n + hf(x_n,y_n)).
$$

## Modified Euler method, $\theta = 1/2$
$$
y_{n+1} = y_n + hf(x_n + h/2, y(x_n + h/2))
$$
$$
y_{n+1} = y_n + hf\left(x_n + \frac{h}{2    }, y_n + \frac{h}{2}f(x_n, y_n)\right)
$$

## Trapezium method
$$
y_{n+1} = y_n + \frac{h}{2} \left( f(x_n,y_n) + f(x_{n+1}, y_{n+1}) \right)
$$
2nd order, implicit method

## Heun's method / Euler Cauchy method
$$
y_{n+1} = y_n + \frac{h}{2} \left( f(x_n,y_n) + f(x_n + h, y_n + h f(x_n,y_n)) \right)
$$
Explicit method

## Runge-Kutta methods

# August 14, 2025 (Class 9)

# August 18, 2025 (Class 10)

# August 20, 2025 (Class 11)
# August 21, 2025 (Class 12)
# August 25, 2025 (Class 13)
# August 28, 2025 (Class 14)
# September 1, 2025 (Class 15)

# I will divide the notes into classes later.....

## Root finding

### Types of roots

simple multiple.

### Methods of root finding

1. Direct methods
2. Iterative methods

## Iterative methods of root finding

A sequence of iterative methods is said to converge to the root $\xi$ of the function $f(x)$ if
$$
\lim_{k \to \infty} |x_k - \xi| = 0
$$

## Initial approximation

Two methods used for initial approximation are

1. Graphical approximation
2. Using intermediate value theorem

## Some theorems and definitions

<span class="blue"><strong>Theorem</strong>:</span>
Let $f$ be a real valued function defined and continuous on a bounded closed interval $[a,b]$ of the real line. Assume, further that $f(a)f(b) \leq 0$; then there exists $\xi \in [a,b]$ such that $f(\xi) = 0$.

<span class="blue"><strong>Theorem</strong> (<em>Intermediate value theorem</em>):</span>
Suppose that $f$ is a real-valued function, defined and continuous on the closed interval $[a,b] \in \mathbb{R}$. Then $f$ is bounded
function on the interval $[a,b]$ and if $y$ is any number such that
$$
\inf_{x\in [a,b]} f(x) \leq y \leq \sup_{x \in [a,b]} f(x),
$$
then there is a number $\xi \in [a,b]$ such tht $f(\xi) = y$.

<span class="blue"><strong>Theorem</strong> (<em>Brouwer fixed point theorem</em>):</span>
TODO: write this

<span class="blue"><strong>Definition</strong> (<em>Fixed point iteration</em>):</span>
Suppose that $g$ is a real valued function, defined and continuous on a bounder closed interval $[a,b]$ of the real line,
and assume that $g(x) \in [a,b] \forall x \in [a,b]$. Given that $x_0 \in [a,b]$, the recursion defined by
$$
x_{k+1} = g(x_k), k = 0,1,2,\dots
$$
is called a simple iteration; the number $x_k$ are referred to as iterates.

If the sequence $\{x_k\}$ defined above converges, the limit must be a fixed point of the function $g$,
since $g$ is continuous on a closed interval, i.e.
$$
\lim_{k\to\infty} x_k = \xi \implies \xi = g(\xi).
$$

<span class="blue"><strong>Theorem</strong> (<em>A Priori Iteration Bound for Contractions</em>):</span>
TODO: write this
simple iteration $x_{k+1} = g(x_k)$, contraction map on $[a,b]$, $x_0 \in [a,b]$, tolerance $\varepsilon > 0$,

$$
k_o(\varepsilon) := \inf_{k \in \mathbb{I}_+}\{k \text{ s.t. } |x_k - \xi| \leq \varepsilon \forall k \geq k_o(\varepsilon) \}.
$$

Then,
$$
k_o(\varepsilon) \leq \left( \dfrac{\ln|x_1 - x_0| - \ln(\varepsilon(1-L))}{\ln(1/L)} \right) + 1,
$$
where $L \in [0,1)$, is the Lipschitz constant of the contraction mapping $g$.

<span class="blue"><strong>Theorem</strong> (<em>Banach fixed point theorem</em>):</span>
TODO: write this

> [!note]- Proof
> [Proof]
> TODO: write this

# September 3, 2025 (Class 16)
# September 4, 2025 (Class 17)
# September 8, 2025 (Class 18)

# I will divide the notes into classes later.....

## Stable and unstable fixed points

<span class="blue"><strong>Definition</strong> (<em>Stable and unstable fixed points</em>):</span>
Let $g:\mathbb{R}\to\mathbb{R}$ be continuous, and let $\xi \in \mathbb{R}$ be a
fixed point of $g$ (i.e. $g(\xi)=\xi$).
We say $\xi$ is a *stable fixed point* (or *attracting fixed point*) if
there exists a neighborhood $U$ of $\xi$ such that for all $x_0 \in U$, the
iterates defined by
$$
x_{k+1} = g(x_k), \quad k\geq 0,
$$
converge to $\xi$.
Conversely, if for every neighborhood $U$ of $\xi$ there exists some $x_0 \in U$ such that
the sequence $\{x_k\}$ does not converge to $\xi$, then $\xi$ is called an
*unstable fixed point*.

In the differentiable case, a fixed point $\xi$ is stable if $|g'(\xi)| < 1$,
unstable if $|g'(\xi)| > 1$, and inconclusive if $|g'(\xi)|=1$.

## Bisection method

## Relaxation base iterative method

Let $f: I \to \mathbb{R}$ be a function with a simple root $\xi$ in an open interval
$I \subseteq \mathbb{R}$. The goal is to find $\xi$ such that $f(\xi) = 0$. The
relaxation-based iterative method generates a sequence $\{x_k\}$ from an initial guess
$x_0$ using the formula:
$$
x_{k+1} = x_k - \lambda f(x_k), \quad k \ge 0
$$
where $\lambda \neq 0$ is a constant parameter called the **relaxation parameter**.

This method can be viewed as a **fixed-point iteration**, $x_{k+1} = g(x_k)$,
with the iteration function defined as:
$$
g(x) = x - \lambda f(x)
$$
A point $\xi$ is a fixed point of $g$ if and only if it is a root of $f$, since
$g(\xi)=\xi \iff \xi - \lambda f(\xi) = \xi \iff f(\xi)=0$.

### Convergence of the iterates in relaxation base iterative method

<span class="blue"><strong>Theorem</strong> (<em>Local Convergence of the Relaxation Method</em>):</span>
Let $f$ be a continuously differentiable function in a neighborhood of a simple root
$\xi$ (i.e., $f(\xi)=0$ and $f'(\xi) \neq 0$). The sequence defined by
$x_{k+1} = x_k - \lambda f(x_k)$ converges to $\xi$ for any initial guess
$x_0$ sufficiently close to $\xi$, provided the relaxation parameter $\lambda$
satisfies the condition:
$$
0 < \lambda f'(\xi) < 2
$$

> [!note]- Proof
> [Proof]
> The iteration converges locally to $\xi$ if the iteration function
> $g(x) = x - \lambda f(x)$ is a contraction mapping in a neighborhood of $\xi$.
> A sufficient condition for this is that $g$ is continuously differentiable and
> $|g'(\xi)| < 1$.
>
>
> Differentiating,
> $$
> g'(x) = \frac{d}{dx} \left( x - \lambda f(x) \right) = 1 - \lambda f'(x)
> $$
>
> Applying the convergence condition at the fixed point $\xi$,
> $$
> |g'(\xi)| < 1 \implies |1 - \lambda f'(\xi)| < 1
> $$
>
> This is equivalent to the pair of inequalities:
> $$
> \begin{aligned}
>     -1 &< 1 - \lambda f'(\xi) < 1 \\
>     -2 &< -\lambda f'(\xi) < 0 \\
>     &0 < \lambda f'(\xi) < 2
> \end{aligned}
> $$
> This proves the theorem. The strict inequalities are crucial; if $|g'(\xi)| = 1$, convergence
> is not guaranteed.
>
>
> #### Conclusion
> The condition $0 < \lambda f'(\xi) < 2$ implies that $\lambda$ must have the
> **same sign** as $f'(\xi)$. The convergence is fastest when $g'(\xi)$
> is closest to zero, which occurs when $1 - \lambda f'(\xi) = 0$, or
> $\lambda = 1/f'(\xi)$. This observation forms the basis for Newton's method.

## Newton's method

## Secant method

# Mid term

# October 6, 2025 (Class \_)

Lagrange interpolating polynomial $p_x(x)$   

## Error term in Lagrange interpolation

<span class="blue"><strong>Theorem</strong> (<em>Error in Lagrange interpolation</em>):</span>
Let $k \in \mathbb{N}$ and $f: \mathbb{R} \to \mathbb{R}$. Furthermore,
$f \in \mathbb{C}([a,b])$ and $f^{(k+1)} \in \mathbb{C}([a,b])$. Then, if $p_x$
is the Lagrange interpolation of $f$ of degree at most $k$, we have,

$$
R(x) = f(x) - p_x(x) = \dfrac{f^{(k+1)}(\xi)}{(k+1)!} \prod_{i=0}^{k} (x-x_i) , \quad x_0 < \xi < x_k
$$
and
$$
|R(x)| \leq \dfrac{1}{(k+1)!} \max_{\xi\in[x_0,x_k]} |f^{(k+1)}(\xi)| \max_{x\in[x_0,x_k]} \left| \prod_{i=0}^{k} (x-x_i) \right|.
$$

We obtain a looser but simpler bound taking $\max_{x\in[x_0,x_k]} \left| \prod_{i=0}^{k} (x-x_i) \right| \leq (x_k-x_0)^{k+1}$,
$$
|R(x)| \leq \dfrac{(x_k - x_0)^{k+1}}{(k+1)!} \max_{\xi\in[x_0,x_k]} |f^{(k+1)}(\xi)|.
$$

> [!note]- Proof
> [Proof]
>     TODO

# October 8, 2025 (Class \_)

The previous theorem gives high errors in some cases.
Weierstrass approximation theorem.
## Hermite interpolation

<span class="blue"><strong>Theorem</strong> (<em>Hermite interpolation</em>):</span>
For an unknown function $f: \mathbb{R} \to \mathbb{R}$, we have for data points
$\{ x_i \}_0^n$, $\{ y_i = f(x_i) \}_0^n$ and $\{ z_i = f'(x_i) \}_0^n$.
Then we have the Hermite interpolation polynomial $p$ of degree $2n+1$,
$$
p_{2n+1}(x) = \sum_{k=0}^{n} \left( H_k(x)y_k + K_k(x)z_k \right)
$$
where
$$
\begin{aligned}
    H_k(x) &= \left( l_k(x) \right)^2 \left( 1-2l'_k(x_k) (x-x_k) \right) \\
    K_k(x) &= \left( l_k(x )\right)^2 (x-x_k)
\end{aligned}
$$

# October 10, 2025, (Class \_)

## Solution of systems of linear equations

## Forward \& Backward substitution

## Cramer's rule

For a linear system of equations
$$
Ax = b,
$$

given $\det(A) \ne 0$, we have
$$
x_i = \dfrac{\det(A_i)}{\det(A)}, \quad i = 1,2,\dots,n
$$
We define $A_i$ as
$$
A_i = \begin{bmatrix}
        a_{11} & \cdots & b_1 & \cdots & a_{1n} \\
        a_{21} & \cdots & b_2 & \cdots & a_{2n} \\
        \vdots & & \vdots & & \vdots \\
        a_{n1} & \cdots & b_n & \cdots & a_{nn}
    \end{bmatrix}
$$

where $b$ replaces the $i$-th column.

## Gauss' elimination

## Triangular factorization methods

### LU decomposition based method
Using [[LU Decomposition]], we have
$$
A = LU.
$$

We can decompose the original system of linear equations in two,
$$
\begin{aligned}
    Ux &= z \\
    Lz &= b \\
\end{aligned}
$$

The solution to the original system can be obtained by first solving
$Lz=b$ using **forward substitution** (since $L$ is lower
triangular), and then solving $Ux=z$ using **backward substitution**
(since $U$ is upper triangular).

<span class="blue"><strong>Remark</strong>:</span>
This method can fail for two primary reasons.
    First, the factorization $A=LU$ (without pivoting) may not
    exist if a leading principal minor of $A$ is singular.
    Second, the substitution steps will fail if any diagonal element
    $L_{ii}$ or $U_{ii}$ is 0. This computationally confirms that
    $A$ is singular, since $\det(A) = \det(L)\det(U)$.

### Cholesky decomposition based method
Using [[Cholesky Decomposition]], we have
$$
A = LL^T.
$$

We can decompose the original system of linear equations in two,
$$
\begin{aligned}
    L^T x &= z \\
    Lz &= b \\
\end{aligned}
$$

The solution to the original system can be obtained by first solving
$Lz=b$ using **forward substitution** (since $L$ is lower
triangular), and then solving $L^T x=z$ using **backward substitution**
(since $L^T$ is upper triangular).

<span class="blue"><strong>Remark</strong>:</span>
This method fails if the matrix $A$ is not symmetric and
    positive definite. Computationally, this failure occurs
    during the factorization (not the substitution) if the algorithm
    requires taking the square root of a non-positive number to
    compute a diagonal element $L_{ii}$.

## Error analysis for direct methods

## See also

## References