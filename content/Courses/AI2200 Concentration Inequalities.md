# July 29, 2025 (Class 1)

## Probability Space
Probability space $(\Omega, \mathcal{F}, P)$ where $\Omega$ is the sample space, $\sigma$-algebra $\mathcal{F} \subseteq 2^{\Omega}$ is the event space, and $P: \mathcal{F} \to [0, 1]$ is the probability measure.
The event space $\mathcal{F}$ is a $\sigma$-algebra over the sample space $\Omega$.
The probability measure $P$ is a valid measure and satisfies the following properties:

- $P(\Omega) = 1$ and $P(\emptyset) = 0$.
- If $E_1, E_2, \ldots$ are disjoint events in $\mathcal{F}$, then
$$
P\left[\bigcup_{i\in \mathbb{N}} E_i\right] = \sum_{i \in \mathbb{N}} P(E_i).
$$

## Random Variable
Let $\Omega, \mathcal{F}, P$ be a probability space and $(E, \varepsilon )$ be a measurable space. A function $X: \Omega \to E$ is called a random variable if
$$
\forall B \in \varepsilon, X^{-1}(B) \in \mathcal{F}, \text{ where } X^{-1}(B) = \{ \omega \in \Omega : X(\omega) \in B\}
$$
i.e., the preimage of any measurable set $B$ in $E$ is an event in $\mathcal{F}$.

# August 1, 2025 (Class 2)

### Jensen's Inequality
$f: \mathbb{R} \to \mathbb{R}$ is convex if for all $x, y \in \mathbb{R}$ and $\lambda \in [0, 1]$,
$$
f(\lambda x + (1 - \lambda) y) \leq \lambda f(x) + (1 - \lambda) f(y).
$$

#### Theorem If $f$ is convex and $X$ is a random variable, then
$$
f(\mathbb{E}[X]) \leq \mathbb{E}[f(X)]
$$
where $\mathbb{E}[X]$ is the expected value of $X$.

## Basic tail bounds

### Markov's Inequality
If $X$ is a non-negative random variable and $\mathbb{E}[X] = \mu < \infty$, then $\forall\delta > 0$,
$$
Pr[X \geq \delta] \leq \frac{\mu}{\delta}.
$$

#### Proof
$$
\begin{aligned}
    \mu &= \int_{0}^{\infty} x f_X(x) \, dx \\
    &= \int_{0}^{\delta} x f_X(x) \, dx + \int_{\delta}^{\infty} x f_X(x) \, dx \\
    &\geq \int_{\delta}^{\infty} \delta f_X(x) \, dx = \delta P(X \geq \delta)  \\
    \Rightarrow Pr[X \geq \delta] &\leq \frac{\mu}{\delta}.
\end{aligned}
$$

### Chebyshev's Inequality
If $X$ is a random variable with $\mathbb{E}[X] = \mu < \infty$ and $\text{Var}(X) = \sigma^2 < \infty$, then $\forall \delta > 0$,
$$
Pr[|X - \mu| \geq \delta] \leq \frac{\sigma^2}{\delta^2}.
$$

#### Proof
$$
\begin{aligned}
    Pr[|X - \mu| \geq \delta] &= Pr[(X - \mu)^2 \geq \delta^2] \\
    &\leq \frac{\mathbb{E}[(X - \mu)^2]}{\delta^2} \quad \text{(by Markov's inequality)} \\
    &= \frac{\sigma^2}{\delta^2}.
\end{aligned}
$$

If the $k$th order higher moment of $X$ exists, then
$$
Pr[|X - \mu| \geq \delta] \leq \frac{\mathbb{E}[|X - \mu|^{2k}]}{\delta^{2k}}.
$$

##### <span style="color: transparent;">sec:an-example</span>
### An example

Let $X_1, X_2, \dots, X_N \sim$ i.i.d. random variables with $\mathbb{E}[X_i] = \mu$ and $\text{Var}(X_i) = \sigma^2$. We define $A_N$ as
$$
A_N = \frac{1}{N} \sum_{i=1}^{N} X_i.
$$
and
$$
A_N \xrightarrow{P} \mu \text{ as } N \to \infty.
$$
According to the weak law of large numbers, for any $\epsilon > 0$,
$$
Pr[|A_N - \mu| \geq \epsilon] \to 0 \text{ as } N \to \infty.
$$
We have,
$$
\mathbb{E}[A_N] = \mu \text{ and } \text{Var}(A_N) = \frac{\sigma^2}{N}.
$$
According to Chebyshev's inequality,
$$
Pr[|A_N - \mu| \geq \epsilon] \leq \frac{\sigma^2}{N \epsilon^2} \to 0 \text{ as } N \to \infty.
$$
We note,

1. This may not be the best rate of convergence (for specific $f_X$).
2. Weak law of large numbers holds even if $\sigma^2$ is not finite.

If $k$th order higher moment of $X_i$ exists, then
$$
Pr[|A_N - \mu| \geq \epsilon] \leq O\left(\frac{1}{N^{k}}\right)
$$

### Chernoff-Cramer Bounds
$X$ is a random variable with moment generating function $\phi_X$. Then $\forall\delta>0$,
$$
Pr[X -\mu \geq \delta] \leq \dfrac{\phi_X(t)}{e^{t (\delta + \mu)}} \; \forall t > 0. \quad \text{ [Right tail probability] }
$$
$$
Pr[X -\mu \leq -\delta] \leq \dfrac{\phi_X(-t)}{e^{t (\delta - \mu)}} \; \forall t > 0. \quad \text{ [Left tail probability] }
$$

#### Proof

$$
\begin{aligned}
    Pr[X-\mu \geq \delta] &= Pr(t(X-\mu) \geq t\delta) \\
    &= Pr[e^{t(X-\mu)} \geq e^{t\delta}] = Pr[e^{tX} \geq e^{t(\delta + \mu)}] \\
    &\leq \frac{\mathbb{E}[e^{tX}]}{e^{t(\delta + \mu)}} \quad \text{(by Markov's inequality)} \\
    &= \frac{\phi_X(t)}{e^{t(\delta + \mu)}}.
\end{aligned}
$$

### Continuation of the bernoulli random variables example

[[AI2200 Concentration Inequalities#secan-example|See: Original example]]. This is a continuation of that.
$$
\begin{aligned}
    \phi_{A_N}(t) = \mathbb{E}[e^{tA_N}] &= \mathbb{E}\left[e^{\frac{t}{N} \sum_{i=1}^{N} X_i }\right] \\
    &= \mathbb{E}\left[\prod_{i=1}^{N} e^{\frac{t}{N} X_i }\right] \\
    &= \prod_{i=1}^{N}  \mathbb{E} \left[ e^{\frac{t}{N} X_i }\right] \\
    &= \left(\mathbb{E}\left[e^{\frac{t}{N} X}\right]\right)^N =\left(\phi_X\left(\frac{t}{N}\right)\right)^N
\end{aligned}
$$

In general, $\forall t > 0$,
$$
\begin{aligned}
    Pr[A_N \geq \mu + \delta] &\leq \dfrac{\left(\phi_X\left(\frac{t}{N}\right)\right)^N}{e^{t(\delta + \mu)}} \\
    Pr[A_N \leq \mu - \delta] &\leq \dfrac{\left(\phi_X\left(\frac{-t}{N}\right)\right)^N}{e^{t(\delta - \mu)}}
\end{aligned}
$$

### Theorem:

If $X_1, X_2, \dots, X_N$ are i.i.d. Ber(p) random variables, then
$$
Pr[|A_N - p| \geq \delta p] \leq \begin{cases}
        2e^{(-N\delta^2 p)/3} & \text{if } 0 < \delta < 1 \\
        2e^{(-N\delta^2 p)/(2+\delta)} & \text{if } \delta \geq 0
    \end{cases}
$$

Do note, that the above is not the tightest form of Chernoff bounds even for bernoulli random variables.

TODO: Verify and prove the above theorem

## Load balancing

TODO: Correct this section

Let there be $m$ jobs and $n$ servers and
$$
\mathcal{X}_{ij} = \begin{cases}
    1 & \text{if job } i \text{ is alloted to server } j \\
    0 & \text{otherwise}
    \end{cases}
$$

Note that $\mathcal{X}_{1j}, \mathcal{X}_{2j}, \dots, \mathcal{X}_{mj}$ are i.i.d. Bernoulli random variables, i.e. for a given server, each job is allocated to it independent of other jobs.   
For a given job $i$, the events of it being assigned to different servers are not independent (e.g., if it goes to server 1, it cannot go to server 2).

We assume that each job is allotted to a server uniformly at random.

We have the load on server $j$ as
$$
L_j = \sum_{i=1}^{m} \mathcal{X}_{ij}.
$$
$$
\mathbb{E}[L_j] = \mathbb{E}\left[\sum_{i=1}^{m} \mathcal{X}_{ij}\right] = \sum_{i=1}^{m} \mathbb{E}[\mathcal{X}_{ij}] = m/n.
$$

Now,
$$
\begin{aligned}
    Pr\left[L_j - \frac{m}{n} \geq \frac{m\delta}{n}\right] &= Pr\left[\frac{L_j}{m} - \frac{1}{n} \geq \frac{\delta}{n}\right]\\
    &\leq 2 \exp\left(\frac{-\delta^2 m}{(2+\delta)n}\right)
\end{aligned}
$$

We see, applying the union bound,
$$
\begin{aligned}
    Pr\left[L_j \geq \frac{m}{n} + \frac{m\delta}{n} \text{ for some j } \right] &= Pr\left[\bigcup_{j=1}^{n} \left(L_j \geq \frac{m}{n} + \frac{m\delta}{n}\right)\right] \\
    &\leq \sum_{j=1}^{n} Pr\left[L_j \geq \frac{m}{n} + \frac{m\delta}{n}\right] \\
    &\leq 2n \exp\left(\frac{-\delta^2 m}{(2+\delta)n}\right) \\
    &\leq O\left(\frac{1}{n}\right) \text{ if } \delta = \theta\left(\log n\right)
\end{aligned}
$$

TODO: Verify and prove the above asymptotic bound.

If $m=n$, then max load on any server is $\leq 1 + \theta\left(\log n\right)$.

# August 5, 2025 (Class 3)

Let $X \in \mathcal{X}$ be the input and $Y \in \mathcal{Y}$ be the output. We have an unknown data distribution $(X,Y) \sim p_{XY}$.
Our goal is to learn a function $g: \mathcal{X} \to \mathcal{Y}$ such that $g(X) \approx Y$, and $g \in \mathcal{G}$.
We have a dataset,
$$
S = \{(X_1, Y_1), (X_2, Y_2), \ldots, (X_N, Y_N)\} \sim \text{ i.i.d. }  p_{XY}^N.
$$

We define a measure of performance of $g$ as
$$
Pr[g(X) \neq Y]
$$
We can set the goal as minimizing this probability, given only the dataset $S$.

We define $g^*$ as the function that minimizes this probability, i.e.
$$
g^* = \arg\min_{g \in \mathcal{G}} Pr[g(X) \neq Y]
$$

## PAC (Probably Approximately Correct) Learning

We define $R(g)$ as the true risk of classifier $g$ as
$$
R(g) = Pr[g(X) \neq Y]
$$

We have a learning algorithm, which takes the dataset $S$ and outputs a classifier $\hat{g}_S$.
We define $\hat{g}_S$ as,
$$
\hat{g}_S = \arg\min_{g \in \mathcal{G}} \frac{1}{N} \sum_{i=1}^{N} \mathbb{I}[g(X_i) \neq Y_i]
$$
This particular learning algorithm is called empirical risk minimization (ERM).

The goal can be formulated as, given $\epsilon > 0$ and $\delta > 0$, find a learning algorithm such that
$$
Pr[R(\hat{g}_S) \geq R(g^*) + \epsilon] \leq \delta
$$
This probability is evaluated w.r.t. dataset $S$, but the $R(\hat{g}_S)$ and $R(g^*)$ are evaluated w.r.t. a new sample independent of $S$.

### PAC learnable
We say that $\mathcal{G}$ (hypothesis class) is PAC learnable if $\forall\epsilon,\delta>0$, $\exists \; N_{\epsilon,\delta,\mathcal{G}}$ s.t. $\exists$ a learning algorithm that takes as input $N$ i.i.d. samples $S = \{(X_1, Y_1), (X_2, Y_2), \ldots, (X_N, Y_N)\}$ and outputs a classifier $\hat{g} \in \mathcal{G}$ such that
 $$
Pr[R(\hat{g}) \geq R(g^*) + \epsilon] \leq \delta
$$

We assume that our hypothesis class $\mathcal{G}$ is finite, i.e. $|\mathcal{G}| < \infty$.

We define,
$$
\begin{aligned}
    R(\hat{g}) &= Pr[\hat{g}(X) \neq Y] \\
    R_S(\hat{g}) &= \frac{1}{N} \sum_{i=1}^{N} \mathbb{I}[\hat{g}(X_i) \neq Y_i]
\end{aligned}
$$

where $R_S(\hat{g})$ is the empirical risk of classifier $\hat{g}$ on dataset $S$ and is a random variable depending on $S$.
$R(\hat{g})$ on the other hand is a fixed value, independent of $S$, depending on the true distribution $p_{XY}$.

We have
$$
\mathbb{E}[R_S(\hat{g})] = R(\hat{g}).
$$
That is, the expected value of empirical risk is equal to the true risk. Given $N$ is large enough, we can expect $R_S(\hat{g})$ to be close to $R(\hat{g})$, and minimizers of $R_S(\hat{g})$ to be close to minimizers of $R(\hat{g})$.

# August 8, 2025 (Class 4)

## Chernoff type bound on rademacher random variables

Let $X_1, X_2, \dots, X_N \approx$ i.i.d. Rademacher random variables, i.e. $X_i \in \{-1, 1\}$ with equal probability, and $a\in \mathbb{R}^n$
Then,
$$
Pr\left[\left|\sum_{i=1}^{N}a_iX_i\right| \geq \delta\right] \leq 2\exp\left(-\frac{\delta^2}{2\|a\|^2}\right)
$$

## Sub gaussian random variables
Let $X$ be a random variable with $\mathbb{E}[X] = 0$.
The following are equivalent

1. Tail Bound: There is a constant $k_1 > 0$ such that
$$
Pr[|X| \geq \delta] \leq 2\exp\left(\dfrac{-\delta^2}{k_1^2}\right), \forall\delta \geq 0.
$$
2. Moment Growth: There is a constant $k_2 > 0$ such that
$$
\left(\mathbb{E}|X|^p\right)^{1/p} \leq k_2\sqrt{p}, p \geq 1.
$$
3. MGF of $X$: There is a constant $\sigma > 0$ such that
$$
\mathbb{E}e^{tX} \leq e^{k_3^2t^2}, \forall t \in \mathbb{R}.
$$
4. MGF of $X^2$: There is a constant $k_3 > 0$ such that
$$
\mathbb{E}e^{t^2X^2} \leq e^{k_3^2t^2}, \forall t \in \mathbb{R}, |t| \leq \dfrac{1}{k_3}.
$$
5. Orlicz Norm Condition: There is a constant $k_4$ such that
$$
\mathbb{E}e^{X^2/k_4^2} \leq 2.
$$

### Sub gaussian norm

The sub gaussian norm of a random variable $X$ is defined as
$$
\|X\|_{\psi_2} = \inf\{k > 0 : \mathbb{E}e^{X^2/k^2} \leq 2\}
$$

# August 12, 2025 (Class 5)

We say $f : \mathcal{H} \to \mathbb{R}_{\geq0}$ is a norm if

- $f(x) \geq 0$ for all $x \in \mathcal{H}$ and $f(x) = 0$ if and only if $x = 0$.
- $f(ax) = |a|f(x)$ for all $x \in \mathcal{H}$ and $a \in \mathbb{R}$
- $f(x+y) \leq f(x) + f(y)$ for all $x, y \in \mathcal{H}$.

## Hoeffding's inequality

If $X_1, \dots, X_n$ are independent random variables with $\mathbb{E}X_i = 0$ and $\|X_i\|_{\psi_2} \leq k_i$, $\alpha_1, \dots, \alpha_n \in \mathbb{R}$, then
$$
Pr\left[\left|\sum_{i=1}^{n}\alpha_i X_i\right| \geq \delta \right] \leq 2\exp\left(-\frac{c\delta^2}{2\sum_{i=1}^{n} \|X_i\|_{\psi_2}^2 }\right)
$$

# August 19, 2025 (Class 6)

# August 22, 2025 (Class 7)

## Bernstein's inequality

Let $X_1, \dots, X_n$ be independent sub-exponential random variables, with $\mathbb{E}X_i = 0 \forall i$, and $\underbar{a} \in \mathbb{R}^n$ be a constant vector.
Then $\forall \delta > 0$,
$$
Pr\left[\left|\sum_{i=1}^{n}a_iX_i\right| \geq \delta\right] \leq 2\exp\left(-c \min\left(\dfrac{\delta^2}{\sum_{i=1}^{n}a_i^2\|X_i\|_{\Psi_1}^2} , \dfrac{\delta}{\max_i a_i\|X_i\|_{\Psi_1}}\right)\right)
$$

### Proof of Bernstein's inequality

# August 26, 2025 (Class 8)

\newpage

# Cheat Sheet

## Chernoff bounds

Let $X = \sum X_i$, where $X_i$ is bernoulli
$$
\begin{aligned}
    Pr(X - \mu \geq \delta\mu) &\leq \exp\left(\frac{-\delta^2\mu}{2+\delta}\right), \quad 0 \leq \delta
\end{aligned}
$$

## Hoeffding's inequalities

Let $X = \sum X_i$
$$
\begin{aligned}
    Pr(X-\mu \leq -t) &< \exp \left(\frac{-2t^2}{n(b-a)^2}\right) \quad a \leq X \leq b \\
    Pr(X-\mu \geq t) &< \exp \left(\frac{-2t^2}{n(b-a)^2}\right) \quad a \leq X \leq b \\
\end{aligned}
$$

### See also

### References