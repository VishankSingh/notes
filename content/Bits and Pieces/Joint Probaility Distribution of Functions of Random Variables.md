---

---
Let $X_1$ and $X_2$ be jointly continuous random variables with joint probability distribution density function
$f_{X_1, X_2}$.

Let $Y_1 = g_1(X_1, X_2)$ and $Y_2 = g_2(X_1, X_2)$.

Assumptions,

- $g_1$ and $g_2$ are continuously differentiable functions.
- $g_1$ and $g_2$ can be uniquely solved for $X_1$ and $X_2$ in terms of $Y_1$ and $Y_2$.
- The Jacobian matrix of the transformation is non-singular.

The joint probability distribution of $Y_1$ and $Y_2$ is given by the change of variables formula,
$$
f_{Y_1, Y_2}(y_1, y_2) = f_{X_1, X_2}(x_1, x_2) \left| \frac{\partial (x_1, x_2)}{\partial (y_1, y_2)} \right|,
$$
where $\left| \frac{\partial (x_1, x_2)}{\partial (y_1, y_2)} \right|$ is the absolute value of the determinant of the Jacobian matrix of the transformation from $(X_1, X_2)$ to $(Y_1, Y_2)$.
The Jacobian matrix is given by,
$$
\begin{pmatrix}
    \dfrac{\partial g_1}{\partial x_1} & \dfrac{\partial g_1}{\partial x_2} \\
    \dfrac{\partial g_2}{\partial x_1} & \dfrac{\partial g_2}{\partial x_2}
\end{pmatrix}
$$

Can be extended to a general case of random vectors.

### See also

### References