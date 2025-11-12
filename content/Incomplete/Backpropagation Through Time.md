---
title:
draft:
tags:
---
Starting assumption

$$
\begin{aligned}
    h_t &= f_{hh} \left( W_{hx} x_t + W_{hh} h_{t-1} \right) \\
    o_t &= f_{ho} \left( W_{ho} h_t \right) \\
    \mathcal{L} &= \dfrac{1}{T} \sum_{t=1}^{T} l (o_t , y_t)
\end{aligned}
$$