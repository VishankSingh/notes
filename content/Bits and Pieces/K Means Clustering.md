---

---
The K-Means Clustering algorithm is a popular unsupervised learning method used to partition a set of data points into $k$ distinct clusters. The algorithm aims to minimize the within-cluster variance, which is the sum of squared distances between each point and the centroid of its assigned cluster.
We have a data set $\{x_i\}_{i=1}^n$ consisting of $n$ data points in a $m$-dimensional space with distance metric $d$.
The K-Means Clustering algorithm can be described as follows:

**Initialization**: Initialize $k$ means $\{m_j\}_{j=1}^k$ to random points in the data space.  
**Assignment**: Each data point $x_i$ is assigned to the cluster whose mean is closest, i.e.,
$$
\hat{k}_i = \arg\min_{j=1,\ldots,k} d(x_i, m_j).
$$
We define *responsibility* of cluster $j$ for point $i$ as
$$
r_{ij} = \begin{cases}
        1 & \text{if } \hat{k}_i = j, \\
        0 & \text{otherwise.}
    \end{cases}
$$
**Update**: The means are updated as follows:
$$
m_j = \frac{1}{\sum_{i=1}^n r_{ij}} \sum_{i=1}^n r_{ij} x_i,
$$
where $m_j$ is the mean of cluster $j$.

**Repeat** steps Assignment and Update until convergence, i.e., until the means do not change significantly or the assignments of points to clusters remain stable.

To note, random Initialization is never used in practice, as it can lead to poor clustering results. Instead, methods like K-Means++ ([arthur2007kmeanspp](https://theory.stanford.edu/~sergei/papers/kMeansPP-soda.pdf)) are often used to select initial means that are more likely to lead to better clustering outcomes.

### See also
