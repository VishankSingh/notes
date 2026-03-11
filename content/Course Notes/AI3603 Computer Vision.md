---
title:
draft:
tags: Computer_Vision
---


# Edge Detection

In image processing, an edge represents a discontinuity or rapid transition in the image
intensity function, $I(x, y)$. Mathematically, edges are defined as the locus of points
where the gradient magnitude, $\|\nabla I(x, y)\|$, is locally maximized.
## 1D Analysis via Scanlines
Consider a 1D intensity profile $f(x) = I(x, y_0)$ extracted along a horizontal scanline.

- **Intensity Function $f(x)$:** An edge is characterized by a steep
    step or ramp.
- **First Derivative $f'(x)$:** The spatial derivative transforms
    intensity ramps into distinct local extrema.

**Core Principle:** Image edges correspond to the local extrema (maxima or
minima) of $\frac{df}{dx}$.

![[AI3603 Computer Vision_tikz_0.svg]]

## The Effects of Noise
Real-world images are corrupted by high-frequency sensor noise $\eta(x)$, yielding an
observed signal $\tilde{f}(x) = f(x) + \eta(x)$.

### Noise Amplification
Because differentiation acts as a high-pass filter, it heavily amplifies the noise
component. The derivative of the noise, $\frac{d\eta}{dx}$, often eclipses the true
signal derivative, making direct extrema extraction ill-posed.

### Smoothing
To regularize the problem, $\tilde{f}(x)$ is pre-conditioned via convolution with a
low-pass smoothing kernel $g(x)$, typically a Gaussian
$g(x, \sigma) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{x^2}{2\sigma^2}\right)$.
Edge locations are then identified by:
$$
x_{\text{edge}} = \operatorname*{arg\,local\,max}_{x} \left| \frac{d}{dx}(\tilde{f} * g) \right|
$$

<span class="blue"><strong>Theorem</strong> (<em>Derivative Theorem of Convolution</em>):</span>
Because differentiation is linear and shift-invariant, it commutes with the convolution operator,
$$
\frac{d}{dx}(f * g) = f * \frac{dg}{dx} .
$$
**Computational Advantage:** We can pre-compute the derivative of the smoothing
kernel, $\frac{dg}{dx}$, and convolve the image directly with this filter. This reduces
a sequential two-step process (smoothing, then differentiating) into a single linear
filtering operation.

## Tradeoff: Smoothing vs. Localization
The choice of the Gaussian standard deviation, $\sigma$, governs the scale of edge
detection and presents a fundamental uncertainty principle:

- **Small $\sigma$ (Fine Scale):** Yields high spatial localization and
    preserves fine detail, but provides poor noise attenuation, resulting in a high
    false-positive rate.
- **Large $\sigma$ (Coarse Scale):** Provides strong noise suppression
    and extracts dominant macro-structures, but causes poor spatial localization (edge
    displacement) and blurring of fine details.

## Designing an Edge Detector
To formalize performance, a robust differential edge detector (such as the Canny edge
detector) optimizes three specific criteria:

1. **Good Detection (High SNR):** Maximize the probability of detecting
    true edges while minimizing false positives triggered by noise artifacts.
2. **Good Localization:** Minimize the variance of the edge position
    estimate (detected pixels must be as close as possible to the true physical edge).
3. **Single Response:** Ensure the detector produces exactly one
    localized pixel for each true edge, actively suppressing thick, multi-pixel
    responses (e.g., via non-maximum suppression).

### Advanced Cues
Beyond scalar intensity gradients, modern computer vision systems integrate diverse cues
to robustly identify boundaries:

- Multimodal gradients (e.g., abrupt changes in color vectors or texture statistics).
- Gestalt priors such as continuity, collinearity, and closure.
- Semantic, top-down priors (e.g., matching edge fragments to expected shapes of
    known objects).

## Canny Edge Detector

[[Canny Edge Detector]]

# Blob Detection

In computer vision, a \textbf{blob} is defined as a contiguous region of pixels exhibiting
spatial coherence in properties such as intensity, color, or texture, distinct from the
surrounding background. Blob detection algorithms aim to localize these distinct
structures, which often correspond to objects or object parts in a scene.

## The Laplacian Operator
To detect regions bounded by rapid intensity transitions, we analyze the second spatial
derivative of the image. The isotropic 2D analog of the second derivative is the
\textbf{Laplacian operator}.

For a continuous 2D image intensity function $f(x, y)$, the Laplacian, $\nabla^2 f$, is
defined as the trace of the Hessian matrix (the sum of the unmixed second-order partial
derivatives):
$$ \nabla^2 f = \frac{\partial^2 f}{\partial x^2} + \frac{\partial^2 f}{\partial y^2} $$

## Laplacian of Gaussian (LoG)
Because second-derivative operators severely amplify high-frequency spatial noise, direct
application to raw images is ill-posed. The signal must first be regularized via
convolution with a Gaussian low-pass filter, $G_\sigma(x, y)$.

By the associative property of convolution, we can pre-compute the \textbf{Laplacian of
Gaussian (LoG)} filter and convolve it directly with the image:
$\nabla^2 (f * G_\sigma) = f * \nabla^2 G_\sigma$.

Defining the 2D Gaussian with variance $\sigma^2$:
$$ G_\sigma(x,y) = \frac{1}{2\pi\sigma^2} e^{-\frac{x^2+y^2}{2\sigma^2}} $$

Applying the Laplacian operator analytically yields the LoG filter:
$$ \nabla^2 G_\sigma(x, y) = \frac{x^2 + y^2 - 2\sigma^2}{\sigma^4} G_\sigma(x, y) $$

The 3D morphology of the LoG operator resembles an inverted "Mexican hat." It is
characterized by a prominent central peak surrounded by an isotropic negative annulus that
asymptotically approaches zero.

## Discrete Approximation of the LoG
For digital images, the continuous Laplacian is approximated using finite differences.
The second-order partial derivatives are modeled in 1D as:
$$
\begin{aligned}
  \frac{\partial^2 f}{\partial x^2} &\approx f(x+1, y) - 2f(x, y) + f(x-1, y) \\
  \frac{\partial^2 f}{\partial y^2} &\approx f(x, y+1) - 2f(x, y) + f(x, y-1)
\end{aligned}
$$

These linear operations correspond to convolution with the following 1D spatial kernels:

- **x-kernel:** $\begin{bmatrix} 1 & -2 & 1 \end{bmatrix}$
- **y-kernel:** $\begin{bmatrix} 1 \\ -2 \\ 1 \end{bmatrix}$

Superimposing these orthogonal kernels yields the standard 4-connected discrete Laplacian
approximation:
$$
\begin{bmatrix} 0 & 0 & 0 \\ 1 & -2 & 1 \\ 0 & 0 & 0 \end{bmatrix} + \begin{bmatrix} 0 & 1 & 0 \\ 0 & -2 & 0 \\ 0 & 1 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 1 & -4 & 1 \\ 0 & 1 & 0 \end{bmatrix}
$$

## Blob Detection Strategy

Detecting blobs via the LoG operator relies on finding the spatial extrema of the filter
response:

- **Convolution \& Extrema:** The image is convolved with the LoG kernel.
    The spatial coordinates $(x,y)$ of local extrema in the response correspond to blob
    centers.
- **Template Matching:** The LoG kernel inherently acts as a matched
    filter. It yields a maximal response when its central region aligns with a blob of
    corresponding scale (radius $r \approx \sqrt{2}\sigma$) and contrasting background.
- **Polarity Independence:** Dark blobs on bright backgrounds produce
    strong positive extrema, while bright blobs on dark backgrounds yield strong negative
    extrema. Both designate valid blob detections.

# Corner Detection

## Harris Corner Detector

[[Harris Corner Detector]]

## Multi-Scale Detection

# Image Descriptors

## MOPS (Multi Scale Oriented Patches)

## SIFT (Scale Invariant Feature Transform)

## GIST

## HoG (Histograms of Oriented Gradients)

## SURF (Speeded Up Robust Features)

# Feature Matching