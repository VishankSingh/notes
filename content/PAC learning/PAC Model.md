---

---
The PAC model can be characterised by
$$
(\mathcal{X}, \mathcal{Y}, \mathcal{C}, \mathcal{D}, \mathcal{H}, S)
$$

where $\mathcal{X}$ is the input space, $\mathcal{Y}$ is the output space, $\mathcal{C}$
is the concept class, $\mathcal{D}$ is the distribution over the input space, $\mathcal{H}$
is the hypothesis class, and $m$ is the sample size.\\
The PAC model is a framework for understanding the learnability of a concept class $\mathcal{C}$
given a labelled sample $S = \{(x_1,y_1),\ldots,(x_m,y_m)\}$ drawn i.i.d. from a distribution $\mathcal{D}$ over
$\mathcal{X}$. The goal is to find a hypothesis $h_S:\mathcal{X}\to\mathcal{Y} \in \mathcal{H}$ that approximates
the target concept $c:\mathcal{X}\to\mathcal{Y} \in \mathcal{C}$ with small *generalization error*
denoted by $L_{\mathcal{D},c}(h)$.

**Definition: Generalization error**  
Given a hypothesis $h \in \mathcal{H}$, a target concept $c \in \mathcal{C}$, and an
underlying distribution $\mathcal{D}$, the generalization error is defined as
$$
L_{\mathcal{D},c}(h) = \mathbb{P}_{x\sim\mathcal{D}}[h(x) \neq c(x)] = \mathbb{E}_{x\sim\mathcal{D}}[\mathbb{I}(h(x) \neq c(x))]
$$

The generalization error is not directly accessible to the learner, as both $\mathcal{D}$ and $c$ are unknown.

**Definition: Empirical error**  
Given a hypothesis $h \in \mathcal{H}$, a target concept $c \in \mathcal{C}$, and a labelled sample
$S = \{(x_i, y_i)\}_{i=1}^m$ drawn from the distribution $\mathcal{D}$,
the empirical error is defined as
$$
L_{S,c}(h) = \frac{1}{m} \sum_{i=1}^{S} \mathbb{I}(h(x_i) \neq c(x_i)) = \frac{1}{m} \sum_{i=1}^{S} \mathbb{I}(h(x_i) \neq y_i)
$$

### References