In Bayesian statistics, we treat parameters $\boldsymbol{\theta}$ as unknown random variables, and the data $\mathcal{D}$ as fixed. The goal is to compute the posterior distribution $p(\boldsymbol{\theta} | \mathcal{D})$ using Bayes' theorem:

$$
p(\boldsymbol{\theta} | \mathcal{D}) = \frac{p(\mathcal{D} | \boldsymbol{\theta}) p(\boldsymbol{\theta})}{p(\mathcal{D})}
$$
where $p(\mathcal{D} | \boldsymbol{\theta})$ is the likelihood (representing our beliefs about what data we expect to see for each setting of the parameters), $p(\boldsymbol{\theta})$ is the prior distribution (representing our beliefs about the parameters before seeing the data), and $p(\mathcal{D})$ is the marginal likelihood or evidence.
$p(\boldsymbol{\theta} | \mathcal{D})$ is called the posterior distribution, which represents our updated beliefs about the parameters after observing the data.

### See also

### References