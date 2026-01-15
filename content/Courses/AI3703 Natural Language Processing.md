---
title:
draft:
tags:
---
# Lecture 2 (Representing Text)

## Input Representation

![[AI3703 Natural Language Processing_tikz_0.svg]]

<span class="blue"><strong>Definition</strong> (<em>Raw Term Frequency / Term count</em>):</span>
The raw count is the number of times the word $t$ appears in the document $d$,
denoted by $c(t,d)$.

<span class="blue"><strong>Definition</strong> (<em>Term Frequency</em>):</span>
$$
tf(t,d) = \begin{cases}
        1 + \log_{10}c(t,d),& \text{if } c(t,d) > 0 \\
        0, &\text{otherwise}
    \end{cases}
$$

<span class="blue"><strong>Definition</strong> (<em>Document Frequency</em>):</span>
The number of documents containing the word $t$, denoted by $df(t)$.

<span class="blue"><strong>Definition</strong> (<em>Inverse Document Frequency</em>):</span>
$$
idf(t) = \log_{10} \dfrac{N}{df(t)},
$$
where $N$ is the total number of documents in the corpus and $df(t)$ is
the document frequency.

More common form used in practice,
$$
idf(t) = \log_{10} \dfrac{N}{1+df(t)},
$$
or
$$
idf(t) = \log_{10} \left( 1 + \dfrac{N}{df(t)} \right)
$$

NLP model
Representations

Statistical idea
SVD
Truncated SVD
Term decoument matrix
LDA  (Latent Dirichlet Allocation)

# January 12, 2026 (Class 3)

## Latent Dirichlet Allocation (LDA)

LDA
generative process, example corpus

<div class="alg-container">

<div class="alg-header">

$$\textbf{Algorithm 1}\ \text{ Generative Process (Latent Dirichlet Distribution) }$$

</div>

<div class="alg-body">

$$
\begin{array}{rl}
1: & \textbf{for } \text{topic $k \in \{1,\dots, K\}$} \textbf{ do} \\
2: & \quad \text{$\phi_k \sim Dir(\beta)$ [draw distribution over words]} \\
3: & \textbf{end for} \\
4: & \textbf{for } \text{document $m\in\{1,\dots,M\}$} \textbf{ do} \\
5: & \quad \text{$\theta_m \sim Dir(\alpha)$ [draw distribution over topics]} \\
6: & \quad \textbf{for } \text{word $n\in\{1,\dots,N_m\}$} \textbf{ do} \\
7: & \quad \quad \text{$z_{mn} \sim Mult(1,\theta_m)$ [draw topic assignment]} \\
8: & \quad \quad \text{$x_{mn} \sim \phi_{z_{mn}}$} \\
9: & \quad \textbf{end for} \\
10: & \textbf{end for} \\
\end{array}
$$

</div>

</div>

<span class="blue"><strong>Definition</strong> (<em>Dirichlet Distribution</em>):</span>
$$
p(\theta\mid\alpha) = \dfrac{\Gamma(\sum_{i=1}^{k}\alpha_i)}{\prod_{i=1}^{k}\Gamma(\alpha_i)} \prod_{i=1}^{k} \theta_i^{\alpha_i - 1}
$$

Doc Topic Distribution
Word Topic Distribution

Dirichlet Distribution

$$
p(\beta, \theta, z, w) = \left(  \right)
$$

Parameter estimation using Gibbs Sampling

Supervised Topic Models

sLDA

heirarchial topic model
corelated topic model

Word Representations

# Lecture 3 (Word Representations)

## Words as vectors: Word2Vec

Representation of a word is dictated by other surrounding Words
Assume a fixed length context window. Eg: $[ w_{-1} \; w_{-1} \; c \; w_1 \; w_2 ]$

Start with random initializatio
Iterate till convergence

## Word2Vec Model: SkipGram(SG)
## Word2Vec Model: CBOW

## Objective function

$$
f_p = \dfrac{1}{T} \sum_{t=1}^{T} \sum_{-c\le j \le c} \log p(w_{t+j}\mid w_t)
$$

$$
p(w_o\mid w_1) = \dfrac{\exp(dot(v'_{w_o}, v_{w_l}))}{\sum_{w=1}^{W} \exp(dot(v'_w,v_{w_l}))}
$$

With negative sampling, the objective function becomes