---

---
### Stochastic Process
A stochastic or random process, denoted by $\{s_t\}_{t\in T}$, can be defined as a collection of
random variables that is indexed by some mathematical set $T$

- Index set $T$ has the interpretation of time.
- The set $T$ is typically $\mathbb{N}$ or $\mathbb{R}$.

## Markov chain

### State transition probability

For a markov state $s$ and a successor state $s'$, the state transition probability is defined as
$$
\mathcal{P}_{ss'} = \Pr\{s_{t+1} = s' | s_t = s\}
$$

We define the state transition probability matrix as
$$
\mathcal{P} = \begin{bmatrix}
\mathcal{P}_{ss'}
\end{bmatrix}
$$

## Markov Reward Process (MRP)
A Markov Reward Process (MRP) is a Markov chain with an additional reward function. It is defined by the tuple $\langle \mathcal{S}, \mathcal{P}, \mathcal{R}, \gamma\rangle$, where:

- $\mathcal{S}$ is the state space.
- $\mathcal{P}$ is the state transition probability matrix.
- $\mathcal{R}$ is the reward function, with $\mathcal{R}(s_t) = r_{t+1}$ being the reward for being in state $s_t$ at time $t$.
- $\gamma \in [0, 1)$ is the discount factor, which determines the importance of future rewards.

## Policy evaluation

### Value function with respect to a policy

We define $V^{\pi}(s)$ as the expected return (cumulative future reward) when starting from state $s$ and following policy $\pi$:
$$
V^{\pi}(s) = \mathbb{E}_\pi\left[\sum_{k=0}^{\infty} \gamma^k r_{t+k+1} | s_t = s\right]
$$

### Decomposition of state value function

The state value function can be decomposed into the immediate reward and the expected value of the next state,
$$
V^{\pi}(s) = \mathbb{E}_\pi\left[r_{t+1} + \gamma V^{\pi}(s_{t+1}) | s_t = s\right]
$$

Expanding the expectation, with $\mathcal{R}_{ss'}^a = \mathcal{R}(s,a,s')$, we have
$$
\begin{aligned}
    \mathbb{E}_\pi\left[r_{t+1} | s_t = s\right] &= \sum_{a} \pi(a|s)  \sum_{s'} \mathcal{P}_{ss'}^a \mathcal{R}_{ss'}^a \\
    \mathbb{E}_\pi\left[\gamma V^\pi(s_{t+1}) | s_t = s\right] &= \sum_{a} \pi(a|s)  \sum_{s'} \mathcal{P}_{ss'}^a V^\pi(s') \\
    \implies V^\pi(s) &= \sum_{a} \pi(a|s)  \sum_{s'} \mathcal{P}_{ss'}^a \left(\mathcal{R}_{ss'}^a + \gamma V^\pi(s')\right) \\
\end{aligned}
$$

The above is called the **Bellman Evaluation operator**.

### Matrix formulation of Bellman Evaluation equation
We define,
$$
\begin{aligned}
    \mathcal{P}^\pi(s'|s) &:= \sum_{a\in \mathcal{A}}\pi(a|s)\mathcal{P}^a_{ss'} \\
    \mathcal{R}^\pi(s) &:= \sum_{a\in \mathcal{A}}\pi(a|s)\sum_{s'}\mathcal{P}^a_{ss'}\mathcal{R}_{ss'}^a = \mathbb{E}(r_{t+1} | s_t = s) \\
\end{aligned}
$$

Using the above definitions, for finite state MDP, we can rewrite the Bellman Evaluation equation in matrix form as
$$
V^\pi = \mathcal{R}^\pi + \gamma \mathcal{P}^\pi V^\pi
$$
or in explicit form,
$$
V^\pi = \left(I - \gamma \mathcal{P}^\pi\right)^{-1} \mathcal{R}^\pi
$$

## Relation between Markov Decision Process and Markov Reward Process

MDP + Policy = MRP

## Optimal policy
We define a partial ordering over policies,
$$
\pi \geq \pi', \iff V^\pi(s) \geq V^{\pi'}(s) \quad \forall s \in \mathcal{S}.
$$

### Theorem: Existence of optimal policy
For any MDP, there exists an optimal policy $\pi_*$ such that
$$
V^{\pi_*}(s) \geq V^\pi(s) \quad \forall \pi \in \Pi, \forall s \in \mathcal{S}.
$$
and all optimal policies achieve the same value function, i.e.,
$$
V_*(s) = V^{\pi_*'}(s) \quad \forall \pi_*' \in \Pi_*.
$$

## Action value function

We define the action value function $Q^\pi(s, a)$ as the expected return when starting from state $s$, taking action $a$, and then following policy $\pi$:
$$
Q^\pi(s, a) = \mathbb{E}_\pi\left[\sum_{k=0}^{\infty} \gamma^k r_{t+k+1} | s_t = s, a_t = a\right]
$$
We can decompose the action value function as follows
$$
Q^\pi(s, a) = \mathbb{E}_\pi\left[r_{t+1} + \gamma V^\pi(s_{t+1}) | s_t = s, a_t = a\right]
$$
Expanding the expectation, we have
$$
Q^\pi(s,a) = \sum_{s'} \mathcal{P}_{ss'}^a \left(\mathcal{R}_{ss'}^a + \gamma \sum_{a'} \pi(a'|s') Q^\pi(s', a')\right)
$$

## Relationship between state ($V^\pi(\cdot)$) and action ($Q^\pi(\cdot, \cdot)$) value functions
The relationship between the state value function and the action value function is given by
$$
V^\pi(s) = \sum_{a \in \mathcal{A}} \pi(a|s) Q^\pi(s, a)
$$
and
$$
Q^\pi(s, a) = \sum_{s' \in \mathcal{S}} \mathcal{P}_{ss'}^a \left(\mathcal{R}_{ss'}^a + \gamma V^\pi(s')\right)
$$

As seen previously, all optimal policies achieve the optimal action value function,
$$
Q_*(s, a) = \max_{\pi \in \Pi} Q^\pi(s, a)
$$
and
$$
Q_*(s,a) = Q^{\pi_*}(s, a) \quad \forall \pi_* \in \Pi_*
$$

## Greedy policy

For a given $Q^\pi(\cdot, \cdot)$, define $\pi'(s)$ as,
$$
\pi'(s) = \text{greedy}(Q) = \begin{cases}
        1 & \text{if } a = \arg\max_{a' \in \mathcal{A}} Q^\pi(s, a') \\
        0 & \text{otherwise}
    \end{cases}
$$

For a given $V^\pi(\cdot)$, define $\pi'(s)$ as,
$$
\pi'(s) = \text{greedy}(V) = \begin{cases}
        1 & \text{if } a = \arg\max_{a \in \mathcal{A}} \left[\sum_{s' \in \mathcal{S}} \mathcal{P}_{ss'}^a \left(\mathcal{R}_{ss'}^a + \gamma V^\pi(s')\right)\right] \\
        0 & \text{otherwise}
    \end{cases}
$$

## Relationship between optimal state ($V_*(\cdot)$) and optimal action ($Q_*(\cdot, \cdot)$) value functions
We have
$$
\begin{aligned}
    V_*(s) &= \max_{a \in \mathcal{A}} Q_*(s, a) \\
    Q_*(s, a) &= \sum_{s' \in \mathcal{S}} \mathcal{P}_{ss'}^a \left(\mathcal{R}_{ss'}^a + \gamma V_*(s')\right)
\end{aligned}
$$

## Policy Iteration
We have
$$
\pi_0 \xrightarrow{E} v_{\pi_0} \xrightarrow{I} \pi_1 \xrightarrow{E} \dots \xrightarrow{I} \pi_* \xrightarrow{E} v_*,
$$
where $E$ is **Policy Evaluation** and $I$ is **Policy Improvement**.

The full algorithm is as follows
$$
\begin{array}{l}
\textbf{Algorithm: } \ \text{Policy Iteration} \\
\hline
\textbf{Input: } \text{An MDP } \langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma\rangle \text{ and an initial policy } \pi_0 \\
\textbf{Output: } \text{An optimal policy } \pi^* \\
\\
\text{1. } \textbf{Initialization} \\
\quad \text{Set } k \leftarrow 0 \\
\\
\text{2. } \textbf{Repeat} \\
\quad \text{a. } \textit{(Policy Evaluation)} \\
\quad \quad \text{Compute the value function of the current policy } \pi_k \text{ by solving the} \\
\quad \quad \text{Bellman expectation equation for all } s \in \mathcal{S}: \\
\quad \quad V^{\pi_k}(s) \leftarrow \sum_{a\in\mathcal{A}}\pi_k(a|s) \sum_{s'\in\mathcal{S}} P^a_{ss'} \ [R^a_{ss'} + \gamma V^{\pi_k}(s')] \\
\\
\quad \text{b. } \textit{(Policy Improvement)} \\
\quad \quad \text{Improve the policy by acting greedily with respect to } V^{\pi_k} \text{ for all } s \in \mathcal{S}: \\
\quad \quad \pi_{k+1}(s) \leftarrow \underset{a \in \mathcal{A}}{\arg\max} \left( \sum_{s'\in\mathcal{S}} P^a_{ss'} [R^a_{ss'} + \gamma V^{\pi_k}(s')] \right) \\
\\
\quad \text{c. } \text{Set } k \leftarrow k+1 \\
\\
\quad \textbf{Until } \pi_k(s) = \pi_{k-1}(s) \text{ for all } s \in \mathcal{S} \text{ (policy is stable)} \\
\\
\text{3. } \textbf{Return } \pi^* \leftarrow \pi_k
\end{array}
$$

## Value Iteration

$$
\begin{array}{l}
\textbf{Algorithm: } \ \text{Value Iteration} \\
\hline
\textbf{Input: } \text{An MDP } \langle \mathcal{S}, \mathcal{A}, \mathcal{P}, \mathcal{R}, \gamma\rangle \text{ and an value function } V_0 \\
\textbf{Output: } \text{An optimal policy } \pi^* \\
\\
\text{1. } \textbf{Initialization} \\
\quad \text{Set } k \leftarrow 0 \\
\\
\text{2. } \textbf{Repeat} \\
\quad \text{a. } \text{for } s\in \mathcal{S} \\
\quad \quad V_{k+1}(s) \leftarrow \max_{a\in\mathcal{A}} \left[ \sum_{s' \in \mathcal{S}} \mathcal{P}^a_{ss'} \left( \mathcal{R}^a_{ss'} + \gamma V_k(s') \right) \right] \\
\\
\quad \text{b. } \text{Set } k \leftarrow k+1 \\
\\
\quad \textbf{Until } V_k(s) = V_{k-1}(s) \text{ for all } s \in \mathcal{S} \text{ (value function is stable)} \\
\\
\text{3. } \textbf{Return } \pi^* \leftarrow \arg\max_{a\in\mathcal{A}} \left[ \sum_{s' \in \mathcal{S}} \mathcal{P}^a_{ss'} \left( \mathcal{R}^a_{ss'} + \gamma V_k(s') \right) \right]
\end{array}
$$

### Value function space
Let
$$
\mathcal{V} = \{ f : \mathcal{S} \to \mathbb{R} \mid \sup_{s\in\mathcal{S}} |f(s)| < \infty\},
$$
be the space of all value functions.

### Bellman Evaluation Operator
We define Bellman Evaluation Operator $\mathcal{L}^\pi : \mathcal{V} \to \mathcal{V}$ as,
$$
\mathcal{L}^\pi (v) = \mathcal{R}^\pi + \gamma\mathcal{P}^\pi v
$$

### Bellman Optimality Operator
We define Bellman Optimality Operator $\mathcal{L} : \mathcal{V} \to \mathcal{V}$ as,
$$
\mathcal{L} (v) = \max_{a\in\mathcal{A}} \left[   \mathcal{R}^a + \gamma\sum_{s'\in\mathcal{S}}  \mathcal{P}^a_{ss'} v   \right]
$$

## Prediction and Control in Reinforcement Learning

# Pictures

<img src="s1.png"/>
<img src="s2.png"/>
<img src="s3.png"/>
<img src="s4.png"/>
<img src="s5.png"/>
<img src="s6.png"/>
<img src="s7.png"/>
<img src="s8.png"/>
<img src="s9.png"/>
<img src="s10.png"/>
<img src="s11.png"/>
<img src="s12.png"/>
<img src="s13.png"/>
<img src="s14.png"/>
<img src="s15.png"/>
<img src="s16.png"/>
<img src="s17.png"/>
<img src="s18.png"/>
<img src="s19.png"/>
<img src="s20.png"/>
<img src="s21.png"/>
<img src="s22.png"/>
<img src="s23.png"/>
<img src="s24.png"/>
<img src="s25.png"/>
<img src="s26.png"/>
<img src="s27.png"/>
<img src="s28.png"/>

### See also

### References