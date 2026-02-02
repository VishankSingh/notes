Let $x \in \mathbb{R}^n$ and
$$
x = \frac{1}{n} \sum_{i=1}^n x_i
$$

$$
\begin{array}{ll}
\text{minimize} & f_0(x) \\
\text{subject to} & f_i(x) \leq 0, \quad i = 1, \ldots, m
\end{array}
$$

Testing if the footnotes[^1] work.

# Introduction

Let $x \in \mathbb{R}^n$ and consider the average vector
$$
\bar{x} = \frac{1}{n!} \sum_{P \in \mathcal{G}} P x.
$$

Each coordinate of $\bar{x}$ is the mean of all entries of $x$, thus:
$$
\bar{x} = \left( \frac{1}{n} \sum_{i=1}^n x_i \right) \mathbf{1} = \alpha \mathbf{1}.
$$

# Convexity and Invariance

Since $f$ is convex and permutation-invariant,
$$
f(\bar{x}) \leq f(x).
$$

Therefore, if $x$ is a minimizer, so is $\bar{x}$.

1. First item
2. Second item
3. Third item

$$
\begin{aligned}
	x + y &= z \\
	x - y &= w \\
	x \cdot y &= v
\end{aligned}
$$

<span class="red">hello $\color{red}{fdsg}$</span>

```js title="Somethingtitle" showLineNumbers{23} {1-3,5} /fp/
export function trimPathSuffix(fp: string): string {
	fp = clientSideSlug(fp)
	let [cleanPath, anchor] = fp.split("#", 2)
	anchor = anchor === undefined ? "" : "#" + anchor

	return cleanPath + anchor
}
```

![[hmm.svg]]

##### <span style="color: white;">test-para</span>

<div class="alg-container">

<div class="alg-header">

$$\textbf{Algorithm 1}\ \text{ Complex-Test-Algorithm }$$

</div>

<div class="alg-body">

$$
\begin{array}{rl}
1: & \text{\textbf{Input:} $n$, $\gamma$, $\alpha$} \\
2: & \textbf{for } \text{$i=1$ to $n$} \textbf{ do} \\
3: & \quad \textbf{if }\text{$i \bmod 2 = 0$}\textbf{ then} \\
4: & \quad \quad \text{process even number $i$} \\
5: & \quad \textbf{else if }\text{$i = 1$}\textbf{ then} \\
6: & \quad \quad \text{special case $i=1$} \\
7: & \quad \textbf{else} \\
8: & \quad \quad \text{process odd number $i$} \\
9: & \quad \textbf{end if} \\
10: & \quad \textbf{while }\text{$i < n/2$}\textbf{ do} \\
11: & \quad \quad \text{increment $i$} \\
12: & \quad \quad \text{\textbf{break}} \\
13: & \quad \textbf{end while} \\
14: & \textbf{end for} \\
15: & \textbf{repeat} \\
16: & \quad \text{compute something with $x + y$} \\
17: & \textbf{until }\text{$x > y$} \\
18: & \text{\textbf{Switch-case not supported; use If/Else chain}} \\
19: & \textbf{if }\text{$mode = 1$}\textbf{ then} \\
20: & \quad \text{do mode 1} \\
21: & \textbf{else if }\text{$mode = 2$}\textbf{ then} \\
22: & \quad \text{do mode 2} \\
23: & \textbf{else} \\
24: & \quad \text{default behavior} \\
25: & \textbf{end if} \\
26: & \text{\textbf{Try/Catch not supported; describe in comments}} \\
27: & \text{risky operation} \\
28: & \text{handle error if needed} \\
29: & \text{cleanup task} \\
30: & \text{\textbf{Parallel/Async not supported; describe in comments}} \\
31: & \text{run parallel step} \\
32: & \textbf{return }\text{final value} \\
\end{array}
$$

</div>

</div>

[[Example#test-para|test para link]]

### See also

### References

[^1]: Do they work?