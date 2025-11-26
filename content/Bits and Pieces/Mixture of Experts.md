The mixture of experts (MoE) is a machine learning technique that combines multiple models (experts) to improve performance on a task. Each expert specializes in different aspects of the data, and a gating mechanism decides which expert to use for a given input. This approach allows for more flexible and powerful models, especially in complex tasks where different data patterns may require different handling.
It can be formulated as
$$
\boldsymbol{y} = \sum_{k=1}^{K} g_k(\boldsymbol{x}) \cdot \boldsymbol{f}_k(\boldsymbol{x})
$$
where $g_k(\boldsymbol{x})$ is the gating function for expert $k$ and $\boldsymbol{f}_k(\boldsymbol{x})$ is the output of expert $k$.
The gating function $g_k(\boldsymbol{x})$ typically outputs a probability distribution over the experts, indicating how much each expert should contribute to the final output, but it may also be a more complex function that selects a single expert based on the input $\boldsymbol{x}$. In both cases, the gating function should be a non-negative, differentiable function.

### See also

### References