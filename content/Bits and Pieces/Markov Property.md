According to the Markov property, a stochastic process $X_t$ is said to satisfy the Markov property with respect to a filtration $\mathcal{F}_t$ if the conditional distribution of $X_t$ given the past $\mathcal{F}_{t-1}$ depends only on the present state $X_{t-1}$. Formally, this can be expressed as:
$$
\mathbb{P}(X_t \in A | \mathcal{F}_{t-1}) = \mathbb{P}(X_t \in A | X_{t-1})
$$
for all measurable sets $A$.
This means that the future state $X_t$ is conditionally independent of the past states given the present state $X_{t-1}$.
### Markov chains
A Markov chain is a sequence of random variables $(X_t)_{t \in \mathbb{N}}$ that satisfies the Markov property. The transition probabilities of a Markov chain are given by:
$$
\mathbb{P}(X_{t+1} = x | X_t = y) = p(y, x)
$$
where $p(y, x)$ is the transition probability from state $y$ to state $x$.
The Markov property implies that the future state $X_{t+1}$ depends only on the present state $X_t$ and not on the past states.

### See also

### References