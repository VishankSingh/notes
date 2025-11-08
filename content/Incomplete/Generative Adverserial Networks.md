---
title:
draft:
tags:
---
$D$ and $G$ play a two player zero-sum mini-max game with the value function $V(G,D)$,
$$
\min_G \max_D V(G,D) = \mathbb{E}_{x\sim p_{data}} [\log D(x)] + \mathbb{E}_{z\sim p_z} [\log(1-D(G(z)))]
$$