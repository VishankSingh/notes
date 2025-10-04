---
title:
draft:
tags:
---
An update rule for [[Gradient Descent]], defined as
$$
\begin{aligned}
    \Delta w^{(\tau)} &\leftarrow \alpha \Delta  w^{(\tau - 1)} - \epsilon \nabla_\theta \left( \frac{1}{m} \sum_{i=1}^{m} L\left(f(x^{(i)};\theta), y^{(i)}\right) \right) \\
    \theta &\leftarrow \theta + \Delta w
\end{aligned}
$$