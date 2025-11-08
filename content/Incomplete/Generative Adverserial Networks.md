---
title:
draft:
tags:
---
Let $\mathcal{Z}$ be the latent space and $\mathcal{X}$ be the data space.
We take a known prior distribution over $\mathcal{Z}$
$$
z \sim p_z(z).
$$

We have a (generator) function $G: \mathcal{Z} \to \mathcal{X}$
$$
x = G(z;\theta).
$$

This generator induces a distribution over the data space $\mathcal{X}$,
$$
p_{model} = p_G(x) = (G)_{\#pz} = p_z(G^{-1}) \left| \det [\mathbf{J}_{G^{-1}}(x)] \right|.
$$
The above explicit formula is defined if and only if the generator $G$ is invertible,
and is derived from transformation formula. See [[Transformation of Random Variables]] for detail.

In practice, $G$ is rarely invertible so we can only induce an implicit distribution, in
a sense that we cannot get the explicit formula for its density but we can sample from it.

$D(x)$ represents the discriminator's estimate of the probability that an input
$x$ came from the real data distribution $p_{data}$
(as opposed to the generator's distribution $p_G​$).

We play a mini-max game between $G$ and $D$ with value function,
$$
\min_G \max_D V(G,D) = \mathbb{E}_{x\sim p_{data}}\left[ \log D(x) \right] + \mathbb{E}_{x\sim p_{model}} \left[ \log(1-D(x)) \right]
$$
and generator's cost function
$$
C(G) = \max_D V(G,D)
$$