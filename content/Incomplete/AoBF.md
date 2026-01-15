---
title:
draft:
tags:
---
<span class="blue"><strong>Definition</strong> (<em>Boolean function</em>):</span>
Let $\mathbb{F}_2$ denote the finite field of two elements (isomorphic to $\mathbb{Z}/2\mathbb{Z}$). A Boolean function is a map:
$$
f: \mathbb{F}_2^n \to \mathbb{F}_2
$$
The alternate form maps the multiplicative group of units $\{-1, 1\}$ (isomorphic to the additive group $\mathbb{F}_2$ via $x \mapsto (-1)^x$) to itself:
$$
f: \{-1,1\}^n \to \{-1,1\} \subset \mathbb{R}
$$

<span class="blue"><strong>Definition</strong> (<em>Hamming cube</em>):</span>
The $n$-dimensional Hamming cube, denoted as $Q_n$ or $H_n$, is the vector space $\mathbb{F}_2^n$. It consists of all $n$-tuples of elements from $\mathbb{F}_2$:
$$
\mathbb{F}_2^n = \{(x_1, \dots, x_n) \mid x_i \in \mathbb{F}_2 \}
$$

<span class="blue"><strong>Definition</strong> (<em>Hamming distance</em>):</span>
Let $x, y \in \mathbb{F}_2^n$. The Hamming distance is the [[metric]] $d_H: \mathbb{F}_2^n \times \mathbb{F}_2^n \to \mathbb{N} \cup \{0\}$ defined by the Hamming weight of the difference vector:
$$
d_H(x, y) = \| x - y \| = \text{wt}(x + y)
$$
where addition is performed in $\mathbb{F}_2$ (bitwise XOR) and $\|v\|$ (or $\text{wt}(v)$) denotes the number of non-zero components in the vector $v$.

### Fourier expansion of Boolean functions

<span class="blue"><strong>Note</strong>:</span>
From here on, it is convenient to switch the domain from $\mathbb{F}_2^n$ to $\{-1, 1\}^n$. We consider real-valued functions $f:\{-1,1\}^n \to \mathbb{R}$.

To analyze Boolean functions using Fourier analysis, we view the set of all functions $f: \{-1, 1\}^n \to \mathbb{R}$ as a vector space of dimension $2^n$, denoted as $L^2(\{-1, 1\}^n)$. We equip this space with an inner product defined by the expectation over the uniform distribution.

<span class="blue"><strong>Definition</strong> (<em>Inner Product</em>):</span>
For functions $f, g: \{-1, 1\}^n \to \mathbb{R}$, the inner product is defined as:
$$
\langle f, g \rangle \coloneqq \underset{x \sim \{-1, 1\}^n}{\mathbb{E}}[f(x)g(x)] = \frac{1}{2^n} \sum_{x \in \{-1, 1\}^n} f(x)g(x)
$$

We also use the notation $\|f\|_2 \coloneqq \sqrt{\langle f, f \rangle}$, and more generally
$$
\|f\|_p \coloneqq \mathbb{E}\left[ \left| f(x) \right|^p \right]^{1/p}.
$$

The Fourier basis for this space consists of the parity functions (or characters). While often indexed by subsets $S \subseteq [n]$, we can equivalently index them using vectors $S \in \mathbb{F}_2^n$.

<span class="blue"><strong>Definition</strong> (<em>Character Functions</em>):</span>
For a subset indicator $S \in \mathbb{F}_2^n$, the character function $\chi_S: \{-1, 1\}^n \to \{-1, 1\}$ is defined as:
$$
\chi_S(x) \coloneqq \prod_{i : S_i = 1} x_i
$$
Note that $\chi_\mathbf{0}(x) \equiv 1$ (where $\mathbf{0}$ is the zero vector).

<span class="blue"><strong>Lemma</strong> (<em>Orthonormality</em>):</span>
The set of functions $\{\chi_S\}_{S \in \mathbb{F}_2^n}$ forms an orthonormal basis for the space of real-valued functions on the hypercube. That is:
$$
\langle \chi_S, \chi_T \rangle =
    \begin{cases}
        1 & \text{if } S = T \\
        0 & \text{if } S \neq T
    \end{cases}
$$

<span class="blue"><strong>Theorem</strong> (<em>Fourier expansion of Boolean functions</em>):</span>
Every function $f: \{-1, 1\}^n \to \mathbb{R}$ can be uniquely expressed as a linear combination of the character functions:
$$
f(x) = \sum_{S \in \mathbb{F}_2^n} \hat{f}(S) \chi_S(x)
$$
The real numbers $\hat{f}(S)$ are called the *Fourier coefficients* of $f$ and are given by projecting $f$ onto the basis functions:
$$
\hat{f}(S) = \langle f, \chi_S \rangle = \underset{x \sim \{-1, 1\}^n}{\mathbb{E}}[f(x)\chi_S(x)]
$$

<span class="blue"><strong>Theorem</strong> (<em>Parseval's Identity</em>):</span>
For any $f: \{-1, 1\}^n \to \mathbb{R}$, the energy of the function is preserved in the Fourier domain:
$$
\langle f, f \rangle = \underset{x}{\mathbb{E}}[f(x)^2] = \sum_{S \in \mathbb{F}_2^n} \hat{f}(S)^2
$$
For Boolean functions where $f(x) \in \{-1, 1\}$, it follows that $\sum \hat{f}(S)^2 = 1$.