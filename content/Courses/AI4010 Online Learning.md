---

---
# July 31, 2025 (Class 1)

Online learning is a sequential learning problem

- No concept of training/test data. Data set is not given at the start at once.
- Decisions on the go. No concept of training loss/accuracy.

$$
\begin{array}{l}
\textbf{Algorithm 1:} \ \text{Online Learning Framework} \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{ALG selects action } a_t \in \mathcal{A} \\
\quad - \ \text{Environment/adversary selects outcome } y_t \in \mathcal{Y} \ \text{and/or loss function } l_t \in \mathcal{L} \\
\quad - \ \text{ALG incurs loss } l(a_t, y_t) \\
\textbf{end for} \\
\end{array}
$$

## Learning with Expert Advice
$$
\begin{array}{l}
\textbf{Algorithm 2:} \ \text{Learning with Expert Advice Framework} \\
\textbf{input: } \text{N experts} \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Each expert provide advice:  } f_{i,t} \in \mathcal{D} \\
\quad - \ \text{ALG selects action } a_t \in \mathcal{D} \\
\quad - \ \text{Environment/adversary selects an action } y_t \in \mathcal{Y} \\
\quad - \ \text{ALG incurs loss } l(a_t, y_t) \\
\textbf{end for}\\
\end{array}
$$

## Weighted Majority Algorithm

$$
\begin{array}{l}
\textbf{Algorithm} \ \text{Weighted Majority Algorithm} \\
\textbf{Input: } \text{N experts, learning rate } \alpha \in [0,1) \\
\textbf{Initialize: } w_{i,1} = 1 \ \forall i \in [N] \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Input: } \text{Expert recommendations } f_{i,t} \in \{0,1\} \\
\quad - \ \text{Predict: } p_t = \mathbb{I}\{\sum_{i:f_{i,t}=1} w_{i,t} \geq \sum_{i:f_{i,t}=0} w_{i,t}\} \\
\quad - \ \text{Observe: } y_t \in \{0,1\} \\
\quad - \ \text{Update weights: } w_{i,t+1} \leftarrow w_{i,t} \cdot \alpha^{\mathbb{I}\{f_{i,t} \neq y_t\}} \\
\textbf{end for} \\
\end{array}
$$

We define the potential function as
$$
\Phi(t) = \sum_{i=1}^{N} w_{i,t-1}
$$

### Mistake bound of Weighted Majority Algorithm

We have,
$$
\begin{aligned}
    \Phi_{t+1} &= \sum_{i:f_{i,t} \neq y_t} w_{i,t} + \sum_{i:f_{i,t} = y_t} w_{i,t} \\
    &= \sum_{i:f_{i,t} \neq y_t} \alpha w_{i,t-1} + \sum_{i:f_{i,t} = y_t} w_{i,t-1} \\
    &= \alpha \left(\Phi_t - \sum_{i:f_{i,t} = y_t} w_{i,t-1}\right) + \sum_{i:f_{i,t} = y_t} w_{i,t-1} \\
    &= \alpha \Phi_t + (1-\alpha) \sum_{i:f_{i,t} = y_t} w_{i,t-1} \\
    &\leq \alpha \Phi_t + (1-\alpha) \dfrac{\Phi_t}{2} \quad \text{(total weight of correct experts is at most half of total weight)} \\
    &= \left(\dfrac{1+\alpha}{2}\right) \Phi_t \\
\end{aligned}
$$

Now, we have $\Phi_{t+1} \leq \Phi_t, \forall t$.

Let $M_t$ be the number of mistakes made by the algorithm up to time $t$ and $T$ be the stopping time. We have,
$$
\Phi_{T+1} \leq \left(\dfrac{1+\alpha}{2}\right)^{M_T} \Phi_1 = \left(\dfrac{1+\alpha}{2}\right)^{M_T} N
$$

Let $M_{i,t}$
TODO: complete this

# August 4, 2025 (Class 2)

# August 7, 2025 (Class 3)

### Convex function
A function $f: \mathbb{R}^d \to \mathbb{R}$ is convex if for all $x_1, x_2 \in \mathbb{R}^d$ and $\lambda \in [0,1]$,
$$
f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2)
$$

### Strictly convex function
A function $f: \mathbb{R}^d \to \mathbb{R}$ is strictly convex if for all $x_1, x_2 \in \mathbb{R}^d$, $x_1 \neq x_2$ and $\lambda \in (0,1)$,
$$
f(\lambda x_1 + (1-\lambda)x_2) < \lambda f(x_1) + (1-\lambda)f(x_2)
$$

### strongly convex function
A function $f: \mathbb{R}^d \to \mathbb{R}$ is $\alpha$-strongly convex if for all $x_1, x_2 \in \mathbb{R}^d$ and $\lambda \in [0,1]$,
$$
f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2) - \dfrac{\alpha}{2}\lambda(1-\lambda)||x_1 - x_2||^2
$$

### Equivalent conditions of strongly convex function
Let $f$ be a differentiable function on a convex set $X$. The following statements are equivalent:

- $f$ is $\alpha$-strongly convex on $X$.
- For all $x_1, x_2 \in X$, $\lambda \in [0,1]$,
$$
f(\lambda x_1 + (1-\lambda)x_2) \leq \lambda f(x_1) + (1-\lambda)f(x_2) - \dfrac{\alpha}{2}\lambda(1-\lambda)||x_1 - x_2||^2
$$
- For all $x_1, x_2 \in X$,
$$
f(x_1) \geq f(x_2) + \nabla f(x_2)^T (x_1 - x_2) + \dfrac{\alpha}{2} ||x_1 - x_2||^2
$$
- For all $x_1, x_2 \in X$,
$$
(\nabla f(x_1) - \nabla f(x_2))^T (x_1 - x_2) \geq \alpha ||x_1 - x_2||^2
$$
- If $f$ is twice differentiable, then for all $x \in X$,
$$
\nabla^2 f(x) \succeq \alpha I
$$
- $f(x) - \dfrac{\alpha}{2}\|x\|^2$ is convex.

### smooth function
A differentiable function $f: \mathbb{R}^d \to \mathbb{R}$ is $\beta$-smooth if for all $x_1, x_2 \in \mathbb{R}^d$,
$$
f(x_1) \leq f(x_2) + \nabla f(x_2)^T (x_1 - x_2) + \dfrac{\beta}{2} ||x_1 - x_2||^2
$$

### exp concave function
A function $f: \mathbb{R}^d \to \mathbb{R}$ is $\alpha$-exp concave if for all $x_1, x_2 \in \mathbb{R}^d$ and $\lambda \in [0,1]$,
$$
h(x) = e^{-\alpha f(x)}
$$
is concave.

### Jensen's inequality
Let $\phi$ be a convex function and $X$ be a random variable. Then,
$$
\phi(\mathbb{E}[X]) \leq \mathbb{E}[\phi(X)]
$$

### Projection operator
The projection operator $\Pi_{\mathcal{S}}(y)$ is defined as
$$
\Pi_{\mathcal{S}}(y) = \arg\min_{x \in \mathcal{S}} ||x - y||
$$

# August 11, 2025 (Class 4)

# August 14, 2025 (Class 5)

## Exponential Weights Algorithm (action setting)

$$
\begin{array}{l}
\textbf{Algorithm} \ \text{Exponential Weights Algorithm (action setting)} \\
\textbf{Input: } \text{N experts, learning rate } \eta > 0 \text{, a convex loss function } l \\
\textbf{Initialize: } w_{i,1} = 1 \ \forall i \in [N] \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Input: } f_{i,t} \in \mathcal{D} \text{ (convex set)} \\
\quad - \ \text{Algorithm takes action: } a_t = \dfrac{\sum_{i=1}^{N} w_{i,t-1} f_{i,t}}{\sum_{i=1}^{N} w_{i,t-1}} \\
\quad - \ \text{Adversary selects: } y_t \in \mathcal{Y} \\
\quad - \ \text{Algorithm incurs loss } l(a_t, y_t) \\
\quad - \ \text{Update weights: } w_{i,t} \leftarrow w_{i,t-1} \cdot e^{-\eta l(f_{i,t}, y_t)} \\
\textbf{end for} \\
\end{array}
$$

We define the best action in hindsight as
$$
a^* = \arg\min_{i \in [N]} \sum_{t=1}^{T} l(f_{i,t}, y_t)
$$
Similarly, we define the overall regret as
$$
R_T(\text{exp wts}) = \mathbb{E}\sum_{t=1}^{T} l(a_t, y_t) - \underbrace{\sum_{t=1}^{T} l(a^*, y_t)}_{\text{benchmark}}
$$

### An optimal regret bound for Exponential Weights Algorithm for general convex loss functions

For a general convex loss function $l$ bounded in $[a,b]$, the Exponential Weights Algorithm with learning rate $\eta > 0$ achieves the following regret bound against any sequence of outcomes $y_1, \dots, y_T$.
The bound is given by,
$$
R_T(\text{exp wts}) \leq \dfrac{\ln(N)}{\eta} + \dfrac{\eta (b-a)^2 T}{8}.
$$
In particular, choosing $\eta = \sqrt{\dfrac{8\ln(N)}{(b-a)^2T}}$, we have,
$$
R_T(\text{exp wts}) \leq (b-a)\sqrt{\dfrac{T}{2}\ln(N)}
$$

> [!note]- Proof
> **Preliminaries:**
>
> We assume that the loss function $l$ is convex and bounded in $[a,b]$.
>
> We define,
> $$
> \begin{aligned}
>     L_{i,T} &:= \sum_{t=1}^T l(f_{i,t}, y_t) \\
>     \hat{L}_T &:= \sum_{t=1}^T l(a_t, y_t) \\
>     w_{i,t} &:= e^{-\eta L_{i,t}} = e^{-\eta \sum_{s=1}^{t} l(f_{i,s}, y_s)}, \quad \forall t \geq 1 \\
>     W_t &:= \sum_{i=1}^{N} w_{i,t} = \sum_{i=1}^{N} e^{-\eta L_{i,t}}, \quad \forall t \geq 1 \\
> \end{aligned}
> $$
> with $W_0 = N$.
>
> We have the following form of the Hoeffding's lemma.
> Let $X$ be a random variabe with $a \leq X \leq b$ almost surely, then for any $s \in \mathbb{R}$,
> $$
> \ln\mathbb{E}[e^{sX}] \leq s\mathbb{E}[X] + \dfrac{s^2(b-a)^2}{8}
> $$
>
> **Main proof:**
>
> We have,
> $$
> \begin{aligned}
>     \ln \dfrac{W_n}{W_0} &= \ln \left(\sum_{i=1}^{N} \exp \left(-\eta L_{i,n}\right)\right) - \ln N \\
>     &\geq \ln \left(\max_{i \in [N]} e^{-\eta L_{i,n}}\right) - \ln N \\
>     &= -\eta \min_{i \in [N]} L_{i,n} - \ln N
> \end{aligned}
> $$
>
> For $t = 1, \dots, T$,
> $$
> \begin{aligned}
>     \ln \dfrac{W_t}{W_{t-1}} &= \ln \dfrac{\sum_{i=1}^{N} e^{-\eta l(f_{i,t},y_t) } e^{-\eta L_{i,t-1}} }{\sum_{i=1}^{N} e^{-\eta L_{i,t-1}}} \\
>     &= \ln \dfrac{\sum_{i=1}^{N} w_{i,t-1} e^{-\eta l(f_{i,t},y_t)}}{\sum_{i=1}^{N} w_{i,t-1}} \\
> \end{aligned}
> $$
> Using Hoeffding's lemma, we have,
> $$
> \begin{aligned}
>     \ln \dfrac{\sum_{i=1}^{N} w_{i,t-1} e^{-\eta l(f_{i,t},y_t)}}{\sum_{i=1}^{N} w_{i,t-1}} &\leq -\eta \sum_{i=1}^{N} \left(\dfrac{w_{i,t-1}}{\sum_{i=1}^{N} w_{i,t-1}}\right) l(f_{i,t},y_t) + \dfrac{\eta^2 (b-a)^2}{8} \\
>     &= -\eta l(a_t, y_t) + \dfrac{\eta^2 (b-a)^2}{8} \quad \text{(by convexity of } l \text{)} \\
>     \implies \ln \dfrac{W_t}{W_{t-1}} &\leq -\eta l(a_t, y_t) + \dfrac{\eta^2 (b-a)^2}{8} \\
> \end{aligned}
> $$
>
> Now, summing over $t = 1, \dots, T$, we have,
> $$
> \begin{aligned}
>     \ln \dfrac{W_T}{W_0} &= \sum_{t=1}^{T} \ln \dfrac{W_t}{W_{t-1}} \\
>     &\leq -\eta \sum_{t=1}^{T} l(a_t, y_t) + \dfrac{\eta^2 (b-a)^2 T}{8} \\
>     \implies \ln \dfrac{W_T}{W_0} &\leq -\eta \hat{L}_T + \dfrac{\eta^2 (b-a)^2 T}{8} \\
> \end{aligned}
> $$
>
> Using the lower bound on $\ln \dfrac{W_T}{W_0}$, we derived earlier, we have,
> $$
> \begin{aligned}
>     \hat{L}_T - \min_{i \in [N]} L_{i,T} &\leq \dfrac{\ln(N)}{\eta} + \dfrac{\eta (b-a)^2 T}{8} \\
> \end{aligned}
> $$
>
> Choosing the optimal $\eta = \sqrt{\dfrac{8\ln(N)}{(b-a)^2 T}}$, we have,
> $$
> R_T(\text{exp wts}) \leq (b-a)\sqrt{\dfrac{T}{2}\ln(N)}
> $$

# August 21, 2025 (Class 6)

Consider $\mathcal{D} = [0,1]$, squared loss $f^n$ and 3 experts $f_1, f_2, f_3$ with constant predictions $f_1(t) = 0$, $f_2(t) = 0.5$, $f_3(t) = 1$, and $\mathcal{Y} = \{0,1\}$.

## An optimal regret bound for Exponential Weights Algorithm for exp concave loss functions

Consider $\eta-exp$ concave loss function, then the regret is bounded by
$$
R_T(\text{exp wts}) \leq \dfrac{\log(N)}{\eta}
$$

> [!note]- Proof
> We define,
> $$
> \begin{aligned}
>     L_{i,T} &:= \sum_{t=1}^T l(f_{i,t}, y_t) \\
>     \hat{L}_T &:= \mathbb{E}\sum_{t=1}^T l(a_t, y_t) \\
> \end{aligned}
> $$
>
> We have,
> $$
> \begin{aligned}
>     R_T(\text{exp wts}) &= \mathbb{E}\sum_{t=1}^T l(a_t, y_t) - \min_{i \in [N]} \sum_{t=1}^T l(f_{i,t}, y_t) \\
>     &= \max_{i \in [N]}\left[ \mathbb{E}\sum_{t=1}^T l(a_t, y_t) - \sum_{t=1}^T l(f_{i,t}, y_t) \right] \\
>     &= \max_{i \in [N]}\left[ \hat{L}_T - L_{i,T} \right] \\
>     &= \log\left[\max_{i \in [N]}  e^{\left(\hat{L}_T - L_{i,T}\right)}\right] \\
>     &= \dfrac{1}{\eta} \log\left[\max_{i \in [N]} e^{\left(\eta\left(\hat{L}_T - L_{i,T}\right)\right)}\right] \\
>     &= \dfrac{1}{\eta} \log\left[e^{\left(\eta\left(\hat{L}_T - L_{i^*,t}\right)\right)}\right] \qquad \text{where } i^* = \arg\max_{i \in [N]}e^{\left(\hat{L}_T - L_{i,T}\right)} \\
>     &\leq \dfrac{1}{\eta} \log\left[\sum_{i=1}^{N}e^{\left(\eta\left(\hat{L}_T - L_{i,T}\right)\right)}\right] \\
>     \Phi(T) &= \dfrac{1}{\eta} \log\left[\sum_{i=1}^{N}e^{\left(\eta\left(\hat{L}_T - L_{i,T}\right)\right)}\right] \\
> \end{aligned}
> $$
>
> Now, we have,
> $$
> \begin{aligned}
>     R_T(\text{exp wts}) &\leq \Phi(T) \\
>     \text{where } \Phi(T) &= \dfrac{1}{\eta} \log\left[\sum_{i=1}^{N}e^{\left(\eta\left(\hat{L}_T - L_{i,T}\right)\right)}\right] \\
>     \text{and } \Phi(0) &= \dfrac{\log(N)}{\eta}
> \end{aligned}
> $$
>
> It is sufficient to show $\Phi(t) \leq \Phi(t-1) \; \forall t$.
> $$
> \begin{aligned}
>     \sum_{i=1}^{N} e^{\left(\eta\left(\hat{L}_t - L_{i,t}\right)\right)} &\leq \sum_{i=1}^{N}e^{\left(\eta\left(\hat{L}_{t-1} - L_{i,t-1}\right)\right)} \\
>     \sum_{i=1}^{N}e^{(\eta \hat{L}_{t-1}) +(\eta \hat{l}_t) -(\eta L_{i,t-1}) - (\eta l_{i,t})} &\leq \sum_{i=1}^{N}e^{(\eta \hat{L}_{t-1}) -(\eta L_{i,t-1})} \\
>     \implies \sum_{i=1}^{N} \left( \dfrac{e^{-\eta L_{i,t-1}}}{\sum_{i=1}^{N} e^{-\eta L_{o,t-1}}} \right) e^{-\eta l_{i,t}} &\leq e^{\eta \hat{l}_t}
> \end{aligned}
> $$
> TODO: Complete this.

# August 25, 2025 (Class 7)

## Stock Portfolio Optimization

We have $N$ stock options, and $\delta_N$ is the set of all distribution over $[N]$. We take initial wealth as 1, without loss of generality.

We define,
$$
r_{i,t} = \dfrac{\text{closing value of stock i on day t}}{\text{opening value of stock i on day t}}
$$

$$
\begin{aligned}
    (P_t)_{t\leq T}: \text{Action sequence, the distribution of wealth on day t} \\
    (r_t)_{t\leq T}: \text{Market (reward) sequence, the return of each stock on day t} \\
\end{aligned}
$$

We have the wealth at stopping day $T$,
$$
W_T = \prod_{t=1}^{T} \langle P_t, r_t \rangle
$$

We have the max possible wealth as,
$$
W_T^* = \max_{P \in \delta_N} \prod_{t=1}^{T} \langle P_t, r_t \rangle
$$
and the best constant distribution as,
$$
P^* = \arg\max_{P \in \delta_N} \prod_{t=1}^{T} \langle P_t, r_t \rangle
$$

$$
\begin{aligned}
    \log\left(\dfrac{W_T}{W_T^*}\right) &= \sum_{i=1}^{T} \log(\langle P_t, r_t \rangle) - \sum_{i=1}^{T}\log(\langle P^*, r_t \rangle) \\
    l(P_t, r_t) &= -\log(\langle P_t, r_t \rangle`1')
\end{aligned}
$$

# September 1, 2025 (Class 8)

# September 4, 2025 (Class 9)

We have an online convex optimization setting

Let $\mathcal{K}$ be the set of values $x_t$ which the algorith can choose, and $\mathcal{F}$ be the set of all convex loss functions.

$$
\begin{array}{l}
\textbf{Algorithm:} \ \text{Online Convex Optimization} \\
\textbf{input: } \mathcal{K} :=\text{set of values}, \mathcal{F}:=\text{set of convex loss functions} \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Algorithm selects action } x_t \in \mathcal{K} \\
\quad - \ \text{Environment selects a loss function } f_t \in \mathcal{F} \\
\quad - \ \text{ALG incurs loss } f_t(x_t) \\
\textbf{end for}\\
\end{array}
$$

Do note, the env only gives $f_t(x_t)$ and $\nabla f_t(x_t)$, not $f_t$ itself.

## Online gradient descent

$$
\begin{array}{l}
\textbf{Algorithm:} \ \text{Online Gradient Descent} \\
\textbf{input: } \mathcal{K} :=\text{set of values}, \mathcal{F}:=\text{set of convex loss functions} \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Algorithm selects action } x_t \in \mathcal{K} \\
\quad - \ \text{Environment selects a loss function } f_t \in \mathcal{F} \\
\quad - \ \text{ALG incurs loss } f_t(x_t) \\
\quad - \ \text{Update }  x_{t+1} \leftarrow \Pi_\mathcal{K}(x_t - \eta_t \nabla f_t(x_t)) \\
\textbf{end for}\\
\end{array}
$$

### Regret guarantee on online gradient descent
We have,
$$
R_T(OGD) \leq \dfrac{3}{2} DG \sqrt{T},
$$
where
$$
\begin{aligned}
    G &:= \sup_{f\in\mathcal{F}} \sup_{x\in\mathcal{K}} \|\nabla f(x)\| \\
    D &:= \sup_{x,x' \in\mathcal{K}} \|x-x'\|_2 \\
\end{aligned}
$$

> [!note]- Proof
> We define
> $$
> \nabla_t := \nabla f_t(x)
> $$
> Also, $x^*\in\mathcal{K}$ as
> $$
> x^* = \arg\min_{x\in\mathcal{K}} \sum_{i=1}^{T} f_i(x).
> $$
>
> From the first order condition of convexity,
> $$
> \begin{aligned}
>     f_t(x_t) - f_t(x^*) &\leq \nabla^T_t(x_t - x^*) \\
>     \sum_{t=1}^{T} f_t(x_t) - \sum_{t=1}^{T} f_t(x^*) &\leq \sum_{t=1}^{T} \nabla^T_t (x_t - x^*) \\
>     \implies R_T(OGD) &\leq \sum_{t=1}^{T} \nabla^T_t (x_t - x^*).
> \end{aligned}
> $$
>
> Now,
> $$
> \begin{aligned}
>     \|x^* - x_{t+1}\| &= \|x^* - \Pi_\mathcal{K}(x_t - \eta_t\nabla_t) \| \\
>     &\leq \|x^* - x^t + \eta_t \nabla_t \|, \quad \text{by Pythogorean theorem} \\
>     \|x^* - x_{t+1}\|^2 &\leq \|x^* - x_t\|^2 + \eta^2_t \|\nabla_t\|^2 + 2\eta_t \left\langle x^* - x_t, \nabla_t \right\rangle  \\
>     - 2\eta_t \left\langle x^* - x_t, \nabla_t \right\rangle &\leq \|x^* - x_t\|^2 - \|x^* - x_{t+1}\|^2 + \eta^2_t \|\nabla_t\|^2 \\
>     2 \left\langle x_t - x^*, \nabla_t \right\rangle &\leq \dfrac{1}{\eta_t} \left( \|x^* - x_t\|^2 - \|x^* - x_{t+1}\|^2 \right) + \eta_t \|\nabla_t\|^2 \\
> \end{aligned}
> $$
>
> From the above two results, we have
> $$
> \begin{aligned}
>     2 R_T(OGD) &\leq \sum_{t=1}^{T} \left( \dfrac{\|x^* - x_t\|^2 - \|x^* - x_{t+1}\|^2}{\eta_t} \right) + \sum_{t=1}^{T} \eta_t \|\nabla_t\|^2 \\
>     &= \dfrac{\|x^* - x_1\|^2}{\eta_1} + \sum_{t=2}^{T} \|x^* - x_t\|^2 \left(\dfrac{1}{\eta_t} - \dfrac{1}{\eta_{t-1}}\right) - \dfrac{\|x^* - x_{T+1}\|^2}{\eta_T} + \sum_{t=1}^{T} \eta_t \|\nabla_t\|^2 \\
>     &\leq \dfrac{\|x^* - x_1\|^2}{\eta_1} - \dfrac{D^2}{\eta_1} + \dfrac{D^2}{\eta_T} - \dfrac{\|x^* - x_{T+1}\|^2}{\eta_T} + G^2 \sum_{t=1}^{T} \eta_t \\
>     &\leq \dfrac{D^2}{\eta_T} + G^2 \sum_{t=1}^{T} \eta_t
> \end{aligned}
> $$
>
> Putting $\eta_t = \frac{D}{G\sqrt{t}}$, we have
> $$
> \begin{aligned}
>      2 R_T(OGD) &\leq D^2 \dfrac{G\sqrt{T} }{D} + G^2 \dfrac{D}{G} \sum_{t=1}^{T} \dfrac{1}{\sqrt{t}} \\
>               &\leq DG\sqrt{T} + 2 DG\sqrt{T} \\
>     \implies R_T(OGD) &\leq \dfrac{3}{2} DG \sqrt{T}
> \end{aligned}
> $$

### Regret guarantee on online gradient descent for strongly convex loss function

With $\eta = 1/(\alpha t)$, we have
$$
R_T(OGD) \leq \dfrac{G^2}{2\alpha} (1+\log(T))
$$

> [!note]- Proof
> From $\alpha$-strong convexity property we have
> $$
> 2(f_t(x_t) - f_t(x^*)) \le 2\nabla_t^T(x_t - x^*) - \alpha \|x_t - x^*\|^2
> $$
> We will use the upper bound on the first term from [[AI4010 Online Learning#Regret guarantee on online gradient descent|previous]] proof. We have
> TODO: check and correct this.
> $$
> \begin{aligned}
>     2R_T(\text{OGD}) &= \sum_{t=1}^{T} 2(f_t(x_t) - f_t(x^*)) \\
>     &\le \sum_{t=1}^{T} \left( \frac{\|x_t - x^*\|^2 - \|x_{t+1} - x^*\|^2}{\eta_t} - \alpha \|x_t - x^*\|^2 \right) + G^2 \sum_{t=1}^{T} \eta_t - \frac{\|x_{T+1} - x^*\|^2}{\eta_T} \\
>     &\le D^2 \underbrace{\sum_{t=1}^{T} \left(\frac{1}{\eta_t} - \frac{1}{\eta_{t-1}} - \alpha \right)}_{=0} + G^2 \sum_{t=1}^{T} \eta_t \\
>     &= \frac{G^2}{\alpha} \sum_{t=1}^{T} \frac{1}{t} \\
>     &\le \frac{G^2}{\alpha}(1 + \log(T))
> \end{aligned}
> $$

## Follow the leader (FTL)

$$
\begin{array}{l}
\textbf{Algorithm:} \ \text{Follow The Leader (FTL)} \\
\textbf{Input:} \ \text{A convex set of possible actions (decision set) } \mathcal{K}. \\
\\
\textbf{for} \ t = 1, 2, 3, \dots, T \ \textbf{do} \\
\quad \text{1. Play the action } x_t \text{ that minimizes the cumulative loss observed so far:} \\
\quad \qquad x_t := \arg\min_{x \in \mathcal{K}} \sum_{s=1}^{t-1} f_s(x) \\
\quad \quad \text{(Note: For the first round, } t=1, \text{ the sum is empty, so any action } x_1 \in \mathcal{K} \text{ can be chosen.)} \\
\\
\quad \text{2. The environment reveals the loss function for the current round, } f_t. \\
\\
\quad \text{3. The algorithm incurs and observes the loss } f_t(x_t). \\
\textbf{end for}
\end{array}
$$

### FTL-BTL lemma

<span class="blue">**Lemma** (*FTL-BTL lemma[^1]*):</span>
Let $x_1, x_2, \dots$ be the sequence of points chosen by FTL. Then,
for any $u\in\mathcal{K}$ and for and stopping time $T$, we have
$$
\sum_{t=1}^{T} f_t(x_{t+1}) \leq \sum_{t=1}^{T} f_t(u)
$$

> [!note]- Proof
> TODO: using induction

TODO:
Follow the Regularized Leader
For linear loss

## Follow the regularized leader (FTRL)

<span class="blue">**Remark**:</span>
The regularizers considered are bounded,
$\alpha$-strongly convex functions.

$$
\begin{array}{l}
\textbf{Algorithm 11:} \ \text{FTRL Algorithm for general loss function} \\
\textbf{Input: } \text{convex set } \mathcal{K}, \text{function class } \mathcal{F}, \text{regularization function } R \\
\textbf{Initialize: } x_1 = \arg\min_{x\in\mathcal{K}}R(x) \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Algorithm plays } x_t \in \mathcal{K} \\
\quad - \ \text{Environment reveals } f_t \in \mathcal{F} \\
\quad - \ \text{Algorithm incurs a loss } f_t(w_t) \in \mathbb{R} \\
\quad - \ \text{Update} \\
\qquad \qquad x_{t+1} := \arg\min_{x \in \mathcal{K}} \left[ \sum_{s=1}^t \langle \nabla_s, x \rangle + \frac{1}{\eta} R(x) \right] \\
\textbf{end for}\\
\end{array}
$$

### FTRL with linear loss function and negative entropic regularizer

# September 8, 2025 (Class 10)

## Some mathematical preliminaries

<span class="blue">**Definition** (*Bregman divergence*):</span>
We define the Bregman divergence, with respect to function $R$, as
$$
B_R(x \| y) = R(x) - R(Y) - \left\langle \nabla R(x), x - y \right\rangle
$$

<span class="blue">**Remark**:</span>
For twice differentiable functions, the Bregman divergence is equal to the second derivative at an intermediate point.

> [!note]- note
> For $R(x) = \dfrac{1}{2}\|x\|_{L_2}^2$, we have
> $$
> B_R(x \| y) = \dfrac{1}{2}\|x-y\|^2.
> $$
> For $R(x) = \sum_{i=1}^{d} x_i \log x_i$, $\sum x_i = 1$ and $d = 2$, we have
> $$
> B_R(x \| y) = D_{KL}(x \| y)
> $$

> [!note]- Properties of Bregman divergence
> - It is strictly convex in the first argument
> - Non-negative $B_R(x \| y) \geq 0$. The proof follows from Taylors theorem.
> - Asymmetric i.e. $B_R(x \| y) \neq B_R(y \| x)$.
> - Non-convex in the second argument. Example $R(x) = -\log(x)$ and $(B_R(x \| y) = \log(y) - \log(x) - \frac{x-y}{y}$
> - $\frac{\partial B_R(x \| y)}{\partial x} = \nabla R(x) - \nabla R(y)$.
> - Cosine inequality
> $$
> B_R(x \| y) + B_R(y \| z) = B_R(x \| z) + \left\langle x-y, \nabla R(z) - \nabla R(y) \right\rangle
> $$

<span class="blue">**Definition** (*Dual norm*):</span>
Let $\|\cdot\|_*$ be a norm on the vector space $\mathcal{K} \subseteq \mathbb{R}^n$,
then the function $\|\cdot\|^*$ defined as
$$
\|x\|^* = \sup_{y \in \mathcal{K}, \|y\|_* \leq 1} \langle x,y \rangle = \sup_{y \in \mathcal{K}} \left\langle x , \dfrac{y}{\|y\|_*} \right\rangle,
$$

is called a dual norm.

<span class="blue">**Definition** (*Norm induced by a symmetric positive definite matrix*):</span>
Let $A \in S^n_{++}[^2]$ be a matrix.
We define the norm induced by $A$ as
$$
\|x\|_A = \sqrt{x^TAx}
$$

<span class="blue">**Lemma**:</span>
Let $\|x\|_A$ be a norm where $A \in S^n_{++}$. We have the dual norm
$$
\|x\|_A^* = \sqrt{x^TA^{-1}x}
$$

> [!note]- Proof

# September 11, 2025 (Class 11)
## FTRL for general loss functions

$$
\begin{array}{l}
\textbf{Algorithm:} \ \text{FTRL Algorithm for general loss function} \\
\textbf{Input: } \text{convex set } \mathcal{K}, \text{function class } \mathcal{F}, \text{regularization function } R \\
\textbf{Initialize: } x_1 = \arg\min_{x\in\mathcal{K}}R(x) \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Algorithm plays } x_t \in \mathcal{K} \\
\quad - \ \text{Environment reveals } f_t \in \mathcal{F} \\
\quad - \ \text{Algorithm incurs a loss } f_t(w_t) \in \mathbb{R} \\
\quad - \ \text{Update} \\
\qquad \qquad x_{t+1} := \arg\min_{x \in \mathcal{K}} \left[ \sum_{s=1}^t \langle \nabla_s, x \rangle + \frac{1}{\eta} R(x) \right] \\
\textbf{end for}\\
\end{array}
$$

<span class="blue">**Lemma**:</span>
Let $x_1, x_2, \dots$ be a sequence of points chosen by FTRL, then for any
$u \in \mathcal{K}$ and $t \ge 1$, we have
$$
\sum_{s=1}^{t} f_s(x_{s+1}) - \sum_{s=1}^{t}f_s(u) \leq \dfrac{R(u) - R(x_1)}{\eta}
$$

> [!note]-

### Regret upper bound of FTRL
We have the regret upper bound as
$$
R_T(FTRL) \leq \eta \sum_{t=1}^{T} \left(\|\nabla_t\|^*_t\right)^2 + \dfrac{R(u) - R(x_1)}{\eta}
$$

> [!note]- Proof
> TODO

# September 15, 2025 (Class 12)

## Online Mirror Descent (OMD)
$$
\begin{array}{l}
\textbf{Algorithm: Online Mirror Descent (OMD)} \\
\textbf{Input:} \ \text{convex set } \mathcal{K}, \text{ function class } \mathcal{F}, \text{ regularization function } R \\
\textbf{Initialize:} \ x_1 = \arg\min_{x \in \mathcal{K}} R(x) \text{ and } y_1 \text{ such that } \nabla R(y_1) = 0 \text{ ;} \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad \text{- Algorithm plays } x_t \in \mathcal{K} \text{ ;} \\
\quad \text{- Environment reveals } f_t \in \mathcal{F} \text{ ;} \\
\quad \text{- Algorithm incurs a loss } f_t(x_t) \in \mathbb{R} \text{ ;} \\
\quad \text{- Update} \\
\quad \qquad y_{t+1} \quad \text{such that} \quad \nabla R(y_{t+1}) = \nabla R(y_t) - \eta \nabla_t \quad \text{[Lazy version]} \\
\quad \qquad y_{t+1} \quad \text{such that} \quad \nabla R(y_{t+1}) = \nabla R(x_t) - \eta \nabla_t \quad \text{[Agile version]} \\
\\
\quad \qquad \text{- } x_{t+1} = \arg\min_{x \in \mathcal{K}} B_R(x \| y_{t+1}) \\
\textbf{end} \\
\end{array}
$$

### Equivalence of lazy OMD and FTRL

<span class="blue">**Theorem** (*Equivalence of lazy OMD and FTRL*):</span>
Let $\mathcal{F}$ be the class of loss functions. Then the lazy OMD and FTRL
algorithms play the same points,
$$
\arg\min_{x\in\mathcal{K}}(B_R(x\|y)) = \arg\min_{x\in\mathcal{K}} \left( \eta \sum_{s=1}^{t-1} \nabla_s^T x + R(x) \right)
$$

> [!note]- Proof
> TODO

### Agile OMD

<span class="blue">**Theorem**:</span>
Let $\mathcal{K}$ be a convex set and $x' = \Pi_{\mathcal{K}}B_R(x\|y)$ be a Bregman
projection of some $y\in\mathbb{R}^n$ on $\mathcal{K}$ and $u\in\mathcal{K}$. Then
$$
B_R(y\|u) \ge B_R(y\|x) + B_R(x\|u)
$$

<span class="blue">**Theorem** (*Regret bound of Agile OMD*):</span>
For $\forall u\in\mathcal{K}$, we have
$$
R_T(OMD) \leq \frac{\eta}{2} \sum_{t=1}^{T} \left(\|\nabla\|_t^*\right)^2 + \frac{D_R^2}{\eta}
$$

# September 22, 2025 (Class 13)

## Bandits setting
$$
\begin{array}{l}
\textbf{Algorithm:} \ \text{Multi-Armed Bandits setting} \\
\textbf{input: } n := \text{number of arms} \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad - \ \text{Algorithm picks an arm } i_t \in [n] \\
\quad - \ \text{Environment reveals loss } l_{i_t,t} \in [0,1] \\
\textbf{end for}\\
\end{array}
$$

## Naive application of online gradient descent for bandit setting

$$
\begin{array}{l}
\textbf{Algorithm:} \ \text{Online gradient descent for bandit setting} \\
\textbf{input: } n := \text{number of arms}, \delta \in (0,1)  \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad b_t \sim \text{Bern}(\delta) \\
\quad \textbf{if} \ b_t = 1 \ \textbf{then} \\
\quad \quad \text{- } i_t \sim \text{Unif}([n]) \quad \text{Exploration} \\
\quad \quad \text{- } \hat{\ell}_{i,t} =
\begin{cases}
\frac{n}{\delta} \ell_{i,t} & \text{if } i = i_t \\
0 & \text{otherwise}
\end{cases} \\
\quad \quad \text{- Set } \hat{f}_{t} = \hat{\ell}_{i,t} \cdot x_{i,t} \text{ for all } i \in [n], \text{ i.e. } \hat{f}_t = \langle \hat{\ell}_t, x \rangle \\
\quad \quad \text{- } x_{t+1} = \text{OGD}(\hat{f}_1, \hat{f}_2, \dots, \hat{f}_t) \\
\quad \textbf{end if} \\
\quad \textbf{else if} \ b_t = 0 \ \textbf{then} \\
\quad \quad \text{- } i_t \sim x_t \quad \text{Exploitation} \\
\quad \quad \text{- } x_{t+1} = x_t, \hat{\ell}_t = 0 \text{ and } \hat{f}_t = 0 \\
\quad \textbf{end if} \\
\textbf{end for}
\end{array}
$$

<span class="blue">**Lemma**:</span>
$\mathbb{E}[l_{i_t,t}] \leq \mathbb{E}[\langle \hat{l}_t, x_t \rangle] + \delta$

> [!note]- Proof
> TODO

### Regret upper bound of OGD-MAB
We have,
$$
\mathbb{E}\left[ R_T(OGD-MAB) \right] \leq 4(nT)^{2/3},
$$
where we chose $\delta = n^{2/3} T^{-1/3}$

> [!note]- Proof
> $$
> \begin{aligned}
>     \mathbb{E}[R_T(OGD-MAB)] &= \mathbb{E} \left[ \sum_{t=1}^{T} l_{i_t,t} - \sum_{t=1}^{T} l_{i^*,t} \right] \\
>     &= \mathbb{E} \left[ \sum_{t=1}^{T} l_{i_t,t} - \sum_{t=1}^{T} \hat{l}_{i^*,t} \right] \\
>     &\le \mathbb{E} \left[ \sum_{t=1}^{T} \langle l_t, x_t \rangle - \sum_{t=1}^{T} \hat{l}_{i^*,t} \right] + \delta T \\
>     &= \mathbb{E}[R_T(OGD)] + \delta T \\
>     &\le \dfrac{3}{2} GD\sqrt{\delta T} + \delta T, \qquad G = \sup \|\hat{l}\| \le n/\delta, D \le 2 \\
>     &\le \dfrac{3n}{\delta} \sqrt{\delta T} + \delta T \\
>     &\le \dfrac{3n}{\delta} \sqrt{n}
> \end{aligned}
> $$

# September 25, 2025 (Class 14)

## EXP3-$\gamma$
$$
\begin{array}{l}
\textbf{Algorithm : EXP3-$\gamma$} \\
\textbf{Input:} \ \text{Number of arms } n, \gamma \in (0, 1) \\
\textbf{Initialize:} \ w_{i,1} = 1 \text{ for all } i \in [n] \\
\textbf{for} \ t = 1, 2, \dots \ \textbf{do} \\
\quad \text{- } p_{i,t} = (1-\gamma)\frac{w_{i,t}}{\sum_{j=1}^{n}w_{j,t}} + \frac{\gamma}{n} \\
\quad \text{- Draw } i_t \sim p_t \text{ where } p_t =
\begin{pmatrix}
p_{1,t} & p_{2,t} & \cdots &  p_{n,t}
\end{pmatrix}^T \\

\quad \text{- Observe } r_{i_t,t}, \text{ the reward at time } t \text{ (from arm } i_t) \\

\quad \text{- } \hat{r}_{i,t} = \mathbb{I}\{i_t = i\}\dfrac{r_{i_t,t}}{p_{i_t,t}} \\

\quad \text{- } w_{i,t+1} = w_{i,t} \cdot e^{\eta \hat{r}_{i,t}} \\
\textbf{end} \\
\end{array}
$$

<span class="blue">**Theorem**:</span>
For any $\gamma \in (0,1)$,
any reward sequence $(r_t)_{t\geq 1}$ with $r_t \in [0,1]^n$, we have
$$
\mathbb{E}[R_T(EXP3-\gamma)] = \max_{i}\sum_{t=1}^{T} r_{i,t} - \mathbb{E}\left[\sum_{t=1}^{T} r_{i_t,t}\right] \leq 2\gamma T + \dfrac{n\log(n)}{\gamma}.
$$
Furthermore, taking $\gamma = \sqrt{\dfrac{n\log(n)}{2T}}$,
$$
\mathbb{E}[R_T(EXP3-\gamma)] \le 2\sqrt{2Tn\log(n)}
$$

> [!note]- Proof
> Let $W_t = \sum_{i=1}^{n}w_{i,t}$.   
> Upper bounding $\log(W_{T+1}/W_1)$,
> $$
> \begin{aligned}
>     \frac{W_{t+1}}{W_t} &= \sum_{i=1}^{n} \frac{w_{i,t+1}}{W_t} = \sum_{i=1}^{n} \left(\frac{w_{i,t}}{W_t}\right) e^{\gamma \hat{r}_{i,t}/n} \\
>     &= \sum_{i=1}^{n} \frac{p_{i,t} - \gamma/n}{1-\gamma} \cdot \exp\left(\frac{\gamma \hat{r}_{i,t}}{n}\right) \\
>     &\le \sum_{i=1}^{n} \frac{p_{i,t} - \gamma/n}{1-\gamma} \cdot \exp\left(\frac{\gamma \hat{r}_{i,t}}{n}\right) \\
>     &\le \sum_{i=1}^{n} \frac{p_{i,t} - \gamma/n}{1-\gamma} \left(1 + \frac{\gamma}{n}\hat{r}_{i,t} + \left(\frac{\gamma}{n}\right)^2 \hat{r}_{i,t}^2 \right) \\
>     & \hspace{5cm} (\text{Using } e^x \le 1 + x + x^2 \text{ for all } x \in [0, 1]) \\[2ex]
>     &\le \frac{1}{1-\gamma} \sum_{i=1}^{n} p_{i,t} \left(1 + \frac{\gamma}{n}\hat{r}_{i,t} + \left(\frac{\gamma}{n}\right)^2 \hat{r}_{i,t}^2 \right) \\
>     &\le \frac{1}{1-\gamma} \left(\underbrace{\sum_{i=1}^{n} p_{i,t}}_{=1} + \frac{\gamma}{n} \underbrace{\sum_{i=1}^{n} p_{i,t} \hat{r}_{i,t}}_{=r_{i_t,t}} + \left(\frac{\gamma}{n}\right)^2 \sum_{i=1}^{n}\underbrace{p_{i,t} \hat{r}_{i,t}}_{\le 1} \hat{r}_{i,t} \right) \\
>     % &\le \underbrace{\sum_{i=1}^{n} \frac{p_{i,t} - \gamma/n}{1-\gamma}}_{=1} + \frac{\gamma/n}{1-\gamma} \underbrace{\sum_{i=1}^{n} p_{i,t} \hat{r}_{i,t}}_{=r_{i_t,t}} + \frac{(\gamma/n)^2}{1-\gamma} \sum_{i=1}^{n} p_{i,t} \hat{r}_{i,t}^2 \\[2ex]
>     % & \hspace{5cm} \left(\sum_{i=1}^{n} p_{i,t} \hat{r}_{i,t}^2 = \sum_{i=1}^{n} \underbrace{p_{i,t} \hat{r}_{i,t}}_{\le 1} \hat{r}_{i,t} \le \sum_{i=1}^{n} \hat{r}_{i,t}\right) \\[2ex]
>     % &= 1 + \frac{\gamma/n}{1-\gamma} r_{i_t,t} + \frac{(\gamma/n)^2}{1-\gamma} \sum_{i=1}^{n} \hat{r}_{i,t} \\
>     \log \left( \frac{W_{t+1}}{W_t} \right) &\le \frac{1}{1-\gamma} \left(  \frac{\gamma}{n} r_{i_t,t} + \left(\frac{\gamma}{n}\right)^2 \sum_{i=1}^{n} \hat{r}_{i,t}\right), \quad \text{using } \log(1+x) \le x \text{ and } \frac{1}{1-\gamma} \ge 1 \\
> \implies \log \left( \frac{W_{T+1}}{W_1} \right) &\le \frac{1}{1-\gamma} \left(\frac{\gamma}{n} \sum_{t=1}^{T} r_{i_t,t} + \left(\frac{\gamma}{n}\right)^2 \sum_{t=1}^{T} \sum_{i=1}^{n} \hat{r}_{i,t}\right), \quad \text{summing from } t=1 \text{ to } T
> \end{aligned}
> $$
>
> Lower bounding $\log(W_{T+1}/W_1)$,
> $$
> \begin{aligned}
>     \log \left( \frac{W_{T+1}}{W_1} \right) &\ge \log \left( \frac{w_{i,T+1}}{W_1} \right) \\
> &= \log(e^{\gamma/n \sum_{t=1}^{T} \hat{r}_{i,t}}) - \log(n), \quad \because W_1 = n \\
> &= \frac{\gamma}{n} \sum_{t=1}^{T} \hat{r}_{i,t} - \log(n)
> \end{aligned}
> $$
>
> Let $i^*$ be the best arm in hindsight. Combining the above upper and lower bounds for $i^*$,
>
> $$
> \begin{aligned}
>     \frac{\gamma}{n} \sum_{t=1}^{T} \hat{r}_{i^*,t} - \log(n) &\le \frac{1}{1-\gamma} \left(\frac{\gamma}{n} \sum_{t=1}^{T} r_{i_t,t} + \left(\frac{\gamma}{n}\right)^2 \sum_{t=1}^{T} \sum_{i=1}^{n} \hat{r}_{i,t}\right) \\
>     \frac{\gamma}{n} \sum_{t=1}^{T} r_{i^*,t} - \log(n) &\le \frac{1}{1-\gamma} \left(\frac{\gamma}{n} \mathbb{E}\left[\sum_{t=1}^{T} r_{i_t,t}\right] + \left(\frac{\gamma}{n}\right)^2 \sum_{t=1}^{T} \sum_{i=1}^{n} r_{i,t}\right), \quad \because\mathbb{E}[\hat{r}_{i,t}] = r_{i,t} \\
>     (1-\gamma)\sum_{t=1}^{T} r_{i^*,t} - \mathbb{E}\left[\sum_{t=1}^{T} r_{i_t,t}\right]  &\le \frac{(1-\gamma)n\log(n)}{\gamma} + \left(\frac{\gamma}{n}\right) \sum_{t=1}^{T} \underbrace{\sum_{i=1}^{n} r_{i,t}}_{\le n} \\
>     \sum_{t=1}^{T} r_{i^*,t} - \mathbb{E}\left[\sum_{t=1}^{T} r_{i_t,t}\right]  &\le \frac{(1-\gamma)n\log(n)}{\gamma} + \gamma T + \gamma \sum_{t=1}^{T} r_{i^*,t}  \\
>     \mathbb{E}[R_T(EXP3-\gamma)] &\le \dfrac{n\log(n)}{\gamma} + 2\gamma T, \quad \because r_{i^*,t} \leq 1
> \end{aligned}
> $$
>
> Taking $\gamma = \sqrt{\dfrac{n\log(n)}{2T}}$,
> $$
> \mathbb{E}[R_T(EXP3-\gamma)] \le 2\sqrt{2Tn\log(n)}
> $$
>
> <span class="blue">**Remark**:</span>
> Using a tighter bound of $e^x$ in the upper bounding gives a better constant.

# October 6, 2025 (Class 15)

## Stochastic Multi Armed Bandits

<span class="blue">**Lemma**:</span>
Let $N_{i,T}$ be the number if times the arm $i$
has been pulled till time $T$ by an algorithm and let $\nabla_i = \mu_{i^*} - \mu_i$
be the suboptimality gap. Then,
$$
R_T(ALG) = \sum_{i=1}^{N} \nabla_i \mathbb{E}[N_{i.T}]
$$

> [!note]- Proof
> $$
> N_{i,T} = \sum_{t=1}^{T} \mathbb{I}(i_t = i)
> $$
>
> We have,
> $$
> \begin{aligned}
>     \sum_{i=1}^{N} \nabla_i \mathbb{E}[N_{i.T}] &= \mathbb{E} \left[ \sum_{i=1}^{N} \left( \mu_{i^*} - \mu_i \right) \left( \sum_{t=1}^{T} \mathbb{I}(i_t = i) \right) \right] \\
>     &= \mathbb{E} \left[ \sum_{i=1}^{N} \mu_{i^*} \sum_{t=1}^{T} \mathbb{I}(i_t = i) - \sum_{i=1}^{N} \mu_i \sum_{t=1}^{T} \mathbb{I}(i_t = i)\right] \\
>     &= \mu_{i^*} \left( \sum_{t=1}^{T} \sum_{i=1}^{N} \mathbb{E}\left[ \mathbb{I}(i_t = i) \right] \right) - \mathbb{E}\left[\sum_{t=1}^{T} \sum_{i=1}^{N} \mu_i \mathbb{I}(i_t = i)\right] \\
>     &= \mu_{i^*}T - \sum_{t=1}^{T} \mu_{i_t}, \quad \quad \quad \because \sum_{i=1}^{N} \mathbb{E}\left[ \mathbb{I}(i_t = i) \right] = 1 \\
>     \sum_{i=1}^{N} \nabla_i \mathbb{E}[N_{i.T}] &= R_T(ALG)
> \end{aligned}
> $$

# October 10, 2025 (Class 16)

## Exploration separate algorithm

We have, from the [[Hoeffding's Inequality]],
$$
\begin{aligned}
    Pr\{ |\hat{\mu}_{i,t} - \mu_i| \ge \varepsilon_{i,t} \} &\le 2 \exp(-2N_{i,t}\varepsilon_{i,t}^2)\\
    Pr\{ \hat{\mu}_{i,t} - \mu_i \ge \varepsilon_{i,t} \} &\le   \exp(-2N_{i,t}\varepsilon_{i,t}^2)\\
\end{aligned}
$$
where
$$
\begin{aligned}
    N_{i,t} &:= \text{times arm(i) is pulled till time(t)} \\
    \hat{\mu}_{i,t} &:= \text{emperical average till time (t)}.
\end{aligned}
$$
We define
$$
\begin{aligned}
    \delta &:= \exp(-2N_{i,t}\varepsilon_{i,t}^2) \\
    \implies \varepsilon_{i,t} &= \sqrt{\dfrac{\log(1/\delta)}{2N_{i,t}}}
\end{aligned}
$$

### Regret analysis of exploration separate algorithm

$$
\begin{aligned}
    R_T(ALG) &= \sum_{i=1}^{N} \nabla_i \mathbb{E}[N_{i,t}] \\
    &= \sum_{i=1}^{N} \nabla_i \mathbb{E}[N_{i,t'}] + \sum_{i=1}^{N} \nabla_i \mathbb{E}[N_{i,t'+1:T}] \\
\end{aligned}
$$

We have,
$$
\begin{aligned}
    \underbrace{j}_{r.v.} &= \arg\max_{i\in [N]} \hat{\mu}_{i,t'} \\
    i^* &= \arg\max_{i\in[N]} \mu_i \\
    \delta = 1/T^4 &\implies \varepsilon_{i,t'} = \sqrt{\frac{2\log T}{N_{i,t'}}}
\end{aligned}
$$

Using the above,
$$
\begin{aligned}
    R_T(ALG) &= \sum_{i=1}^{N} \nabla_i \dfrac{\alpha T}{N} + (T - t') \sum_{i=1}^{N} \mathbb{I}(i=j)\nabla_j\\
    &\le \alpha T + T \sum_{i=1}^{N} (\mu_{i^*} - \mu_i) \mathbb{I}(i=j), \qquad(\nabla_i < 1; t' > 0)
\end{aligned}
$$

Now, we have
$$
\begin{aligned}
    \mu_j &\ge \hat{\mu_j} - \varepsilon_j \qquad \text{w.p. atleast } (1 - 1/T^4)\\
    \mu_{i^*} - \mu_j &\le \mu_{i^*} - \hat{\mu}_j + \varepsilon_j
\end{aligned}
$$

TODO: complete this.

Instance independent (distribution free) regret   
Instance dependent (distribution dependent) regret   
UCB1
## See also

## References

[^1]: Follow the leader, be the leader lemma
[^2]: symmetric positive definite matrix