# July 28, 2025 (Class 1)

Course Logistics

# July 29, 2025 (Class 2)

Paper reading: Nature Review "Deep Learning", LeCun et al.

# August 1, 2025 (Class 3)

Continued paper reading: Nature Review "Deep Learning", LeCun et al.

# August 4, 2025 (Class 4)

## Supervised Learning Setting

### Data

Let $\underbar{x} \in \mathcal{X}$ be the input data, where $\mathcal{X}$ is the input space, and $y \in \mathcal{Y}$ is the corresponding label, where $\mathcal{Y}$ is the label space.
We define
$$
\begin{aligned}
    \mathcal{D}_{train} &= {(\underbar{x}_i^t, y_i^t)}_{i=1}^N \\
    \mathcal{D}_{val} &= {(\underbar{x}_i^v, y_i^v)}_{i=1}^M \\
\end{aligned}
$$

#### Setting: $(\underbar{x}, y) \in p(\underbar{x}, y)$, where $p$ is a fixed but unknown distribution over $\mathcal{X} \times \mathcal{Y}$.

### Model/Machine
A parameterized function $f(\underbar{x} ; \theta)$ that maps an input data point $\underbar{x}$ to a label $\widehat{y}$.
$$
f : \mathcal{X} \times \mathcal{H} \to \mathcal{Y}
$$
where $\mathcal{H}$ is the parameter space, and $\theta$ are the parameters of the model.

$$
f(\underbar{x}:\theta) = f_L^{(\theta_L)} \circ f_{L-1}^{(\theta_{L-1})} \circ \ldots \circ f_1^{(\theta_1)}
$$
In several settings, we have a template or a building block model.

#### Multi-Layer Perceptron (MLP)
$$
f = \sigma(\underbar{W} \underbar{x} + \underbar{b})
$$
where $\sigma$ is a non-linear activation function, $\underbar{W}$ is the weight matrix, and $\underbar{b}$ is the bias vector.

#### Convolutional Neural Network (CNN)
$$
f = \sigma(\text{Conv}(\underbar{W}, \underbar{x}) + \underbar{B})
$$
where $\sigma$ is a non-linear activation function, $\text{Conv}$ is the convolution operation, $\underbar{W}$ is the filter/kernel, and $\underbar{B}$ is the bias term.

#### Transformer
$$
f = \text{Transformer}(\underbar{x}, \theta)
$$

#### Recurrent Neural Network (RNN)
$$
f^t = \sigma(\underbar{W} \cdot \underbar{x}^t + R \cdot f^{t-1} )
$$
where $\sigma$ is a non-linear activation function, $\underbar{W}$ is the weight matrix, $R$ is the recurrent weight matrix, and $f^{t-1}$ is the output from the previous time step.

### Optimization
We want to find the parameters $\theta$ such that the model

- Low training loss, i.e. on $\mathcal{D}_{train}$
- Generalizes well, i.e. low validation loss on $\mathcal{D}_{val}$

Let per sample distance be defined as
$$
d: \underbar{y} \times \underbar{y} \to \mathbb{R}
$$
Let the loss $\mathcal{L}(\theta)$ be defined as
$$
\mathcal{L}(\theta) = \frac{1}{N} \sum_{i=1}^N d(f(\underbar{x}_i ; \theta), y_i)
$$

We want to find the optimal parameters $\theta^*$ such that
$$
\theta^* = \arg\min_{\theta \in \mathcal{H}} \mathcal{L}(\theta)
$$

# August 5, 2025 (Class 5)

# August 8, 2025 (Class 6)

# August 11, 2025 (Class 7)

# August 12, 2025 (Class 8)

# August 18, 2025 (Class 9)

# August 19, 2025 (Class 10)

# August 21, 2025 (Class 11)

# August 25, 2025 (Class 12)

# August 26, 2025 (Class 13)

# August 29, 2025 (Class 14)

# September 1, 2025 (Class 15)

# September 2, 2025 (Class 16)

# September 4, 2025 (Class 17)

## Momentum
The momentum update rule is defined as,
$$
\begin{aligned}
    \mathbf{\upsilon} &\leftarrow \alpha \mathbf{\upsilon} - \epsilon \nabla_\theta \left( \dfrac{1}{m} \sum_{i=1}^{m} L\left( f(x^{(i)}; \theta ), y^{(i)} \right) \right) \\
    \theta &\leftarrow \theta + \mathbf{\upsilon}.
\end{aligned}
$$

<div class="alg-container">

<div class="alg-header">

$$\textbf{Algorithm 2}\ \text{ Stochastic gradient descent (SGD) with momentum }$$

</div>

<div class="alg-body">

$$
\begin{array}{rl}
& \textbf{Require: }\text{Learning rate $\epsilon$, momentum parameter $\alpha$.} \\
& \textbf{Require: }\text{Initial parameter $\boldsymbol{\theta}$, initial velocity $\boldsymbol{v}$.} \\
1: & \textbf{while }\text{stopping criterion not met}\textbf{ do} \\
2: & \quad \text{Sample a minibatch of $m$ examples from the training set $\{\boldsymbol{x}^{(1)}, \dots, \boldsymbol{x}^{(m)}\}$ with corresponding targets $\boldsymbol{y}^{(i)}$.} \\
3: & \quad \text{Compute gradient estimate: $\boldsymbol{g} \leftarrow \frac{1}{m} \nabla_{\boldsymbol{\theta}} \sum_i L(f(\boldsymbol{x}^{(i)}; \boldsymbol{\theta}), \boldsymbol{y}^{(i)})$} \\
4: & \quad \text{Compute velocity update: $\boldsymbol{v} \leftarrow \alpha\boldsymbol{v} - \epsilon\boldsymbol{g}$} \\
5: & \quad \text{Apply update: $\boldsymbol{\theta} \leftarrow \boldsymbol{\theta} + \boldsymbol{v}$} \\
6: & \textbf{end while} \\
\end{array}
$$

</div>

</div>

## Nesterov Momentum

The Nesterov momentum rule is defined as,
$$
\begin{aligned}
    \mathbf{\upsilon} &\leftarrow \alpha \mathbf{\upsilon} - \epsilon \nabla_\theta \left( \dfrac{1}{m} \sum_{i=1}^{m} L\left( f(x^{(i)}; \theta + \alpha \upsilon ), y^{(i)} \right) \right) \\
    \theta &\leftarrow \theta + \mathbf{\upsilon}.
\end{aligned}
$$

# September 8, 2025 (Class 18)

# September 9, 2025 (Class 19)

# AdaGrad (Adaptive Gradient)

<div class="alg-container">

<div class="alg-header">

$$\textbf{Algorithm 3}\ \text{ The AdaGrad algorithm }$$

</div>

<div class="alg-body">

$$
\begin{array}{rl}
1: & \text{\textbf{Require:} Global learning rate $\epsilon$} \\
2: & \text{\textbf{Require:} Initial parameter $\boldsymbol{\theta}$} \\
3: & \text{\textbf{Require:} Small constant $\delta$, perhaps $10^{-7}$, for numerical stability} \\
4: & \text{Initialize gradient accumulation variable $\boldsymbol{r} = \mathbf{0}$} \\
5: & \textbf{while }\text{stopping criterion not met}\textbf{ do} \\
6: & \quad \text{Sample a minibatch of $m$ examples from the training set $\{\boldsymbol{x}^{(1)}, \dots, \boldsymbol{x}^{(m)}\}$ with corresponding targets $\boldsymbol{y}^{(i)}$.} \\
7: & \quad \text{Compute gradient: $\boldsymbol{g} \leftarrow \frac{1}{m} \nabla_{\boldsymbol{\theta}} \sum_i L(f(\boldsymbol{x}^{(i)}; \boldsymbol{\theta}), \boldsymbol{y}^{(i)})$} \\
8: & \quad \text{Accumulate squared gradient: $\boldsymbol{r} \leftarrow \boldsymbol{r} + \boldsymbol{g} \odot \boldsymbol{g}$} \\
9: & \quad \text{Compute update: $\Delta \boldsymbol{\theta} \leftarrow -\frac{\epsilon}{\delta+\sqrt{\boldsymbol{r}}} \odot \boldsymbol{g}$. \quad (Division and square root applied element-wise)} \\
10: & \quad \text{Apply update: $\boldsymbol{\theta} \leftarrow \boldsymbol{\theta} + \Delta \boldsymbol{\theta}$} \\
11: & \textbf{end while} \\
\end{array}
$$

</div>

</div>

## RMSProp

<div class="alg-container">

<div class="alg-header">

$$\textbf{Algorithm 4}\ \text{ The RMSProp algorithm }$$

</div>

<div class="alg-body">

$$
\begin{array}{rl}
& \textbf{Require: }\text{Global learning rate $\epsilon$, decay rate $\rho$.} \\
& \textbf{Require: }\text{Initial parameter $\boldsymbol{\theta}$} \\
& \textbf{Require: }\text{Small constant $\delta$, usually $10^{-6}$, used to stabilize division by small numbers.} \\
1: & \text{Initialize accumulation variables $\boldsymbol{r} = 0$} \\
2: & \textbf{while }\text{stopping criterion not met}\textbf{ do} \\
3: & \quad \text{Sample a minibatch of $m$ examples from the training set $\{\boldsymbol{x}^{(1)}, \dots, \boldsymbol{x}^{(m)}\}$ with corresponding targets $\boldsymbol{y}^{(i)}$.} \\
4: & \quad \text{Compute gradient: $\boldsymbol{g} \leftarrow \frac{1}{m} \nabla_{\boldsymbol{\theta}} \sum_i L(f(\boldsymbol{x}^{(i)}; \boldsymbol{\theta}), \boldsymbol{y}^{(i)})$} \\
5: & \quad \text{Accumulate squared gradient: $\boldsymbol{r} \leftarrow \rho \boldsymbol{r} + (1 - \rho)\boldsymbol{g} \odot \boldsymbol{g}$} \\
6: & \quad \text{Compute parameter update: $\Delta \boldsymbol{\theta} = - \frac{\epsilon}{\sqrt{\delta + \boldsymbol{r}}} \odot \boldsymbol{g}$. \quad ($\frac{1}{\sqrt{\delta + \boldsymbol{r}}}$ applied element-wise)} \\
7: & \quad \text{Apply update: $\boldsymbol{\theta} \leftarrow \boldsymbol{\theta} + \Delta \boldsymbol{\theta}$} \\
8: & \textbf{end while} \\
\end{array}
$$

</div>

</div>

## Adam (Adaptive Moments)

<div class="alg-container">

<div class="alg-header">

$$\textbf{Algorithm 5}\ \text{ The Adam algorithm }$$

</div>

<div class="alg-body">

$$
\begin{array}{rl}
& \textbf{Require: }\text{Step size $\epsilon$ (Suggested default: 0.001)} \\
& \textbf{Require: }\text{Exponential decay rates for moment estimates, $\rho_1$ and $\rho_2$ in $[0, 1)$. (Suggested defaults: 0.9 and 0.999 respectively)} \\
& \textbf{Require: }\text{Small constant $\delta$ used for numerical stabilization. (Suggested default: $10^{-8}$)} \\
& \textbf{Require: }\text{Initial parameters $\boldsymbol{\theta}$} \\
1: & \text{Initialize 1st and 2nd moment variables $\boldsymbol{s} = \mathbf{0}, \boldsymbol{r} = \mathbf{0}$} \\
2: & \text{Initialize time step $t = 0$} \\
3: & \textbf{while }\text{stopping criterion not met}\textbf{ do} \\
4: & \quad \text{Sample a minibatch of $m$ examples from the training set $\{\boldsymbol{x}^{(1)}, \dots, \boldsymbol{x}^{(m)}\}$ with corresponding targets $\boldsymbol{y}^{(i)}$.} \\
5: & \quad \text{Compute gradient: $\boldsymbol{g} \leftarrow \frac{1}{m} \nabla_{\boldsymbol{\theta}} \sum_i L(f(\boldsymbol{x}^{(i)}; \boldsymbol{\theta}), \boldsymbol{y}^{(i)})$} \\
6: & \quad \text{$t \leftarrow t + 1$} \\
7: & \quad \text{Update biased first moment estimate: $\boldsymbol{s} \leftarrow \rho_1 \boldsymbol{s} + (1 - \rho_1)\boldsymbol{g}$} \\
8: & \quad \text{Update biased second moment estimate: $\boldsymbol{r} \leftarrow \rho_2 \boldsymbol{r} + (1 - \rho_2)\boldsymbol{g} \odot \boldsymbol{g}$} \\
9: & \quad \text{Correct bias in first moment: $\hat{\boldsymbol{s}} \leftarrow \frac{\boldsymbol{s}}{1 - \rho_1^t}$} \\
10: & \quad \text{Correct bias in second moment: $\hat{\boldsymbol{r}} \leftarrow \frac{\boldsymbol{r}}{1 - \rho_2^t}$} \\
11: & \quad \text{Compute update: $\Delta \boldsymbol{\theta} = -\epsilon \frac{\hat{\boldsymbol{s}}}{\sqrt{\hat{\boldsymbol{r}}} + \delta}$ \quad (operations applied element-wise)} \\
12: & \quad \text{Apply update: $\boldsymbol{\theta} \leftarrow \boldsymbol{\theta} + \Delta \boldsymbol{\theta}$} \\
13: & \textbf{end while} \\
\end{array}
$$

</div>

</div>

## Generative Adversarial Networks
See [[Generative Adversarial Networks]].

## Variational Autoencoders
See [[Variational Autoencoders]]

### See also

### References