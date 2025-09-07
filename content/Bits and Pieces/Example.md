---

---
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

```js title="Somethingtitle" showLineNumbers{23} {1-3,5} /fp/
export function trimPathSuffix(fp: string): string {
	fp = clientSideSlug(fp)
	let [cleanPath, anchor] = fp.split("#", 2)
	anchor = anchor === undefined ? "" : "#" + anchor

	return cleanPath + anchor
}
```

![[hmm.svg]]

### See also

### References

[^1]: Do they work?