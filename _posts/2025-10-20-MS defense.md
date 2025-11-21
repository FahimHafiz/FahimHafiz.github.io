---
layout: post
title: "Defended my master's in CSE thesis on Spatial Transcriptomics!"
date: 2025-10-20 00:1:13
excerpt: "Defended my master's in CSE thesis on Spatial Transcriptomics!"
---
## Finally, I defened my master's thesis on Spatial Transcrtiptomics!

New technologies in Spatially Resolved Transcriptomics (SRT) Data have achieved
near single-cell resolution while consisting of spatial data that has an immense impact
in discovering various biological insights. High-resolution SRT data are sparse and con-
tain dropouts, which may hinder the accurate interpretation of spatial domains. Hence,
computationally available imputation methods are often necessary to impute the dropouts
from such datasets. Numerous state-of-the-art (SOTA) imputation methods already ex-
ist that are used in general tabular data, dedicated single-cell RNA data, as well as the
SRT datasets. However, there is no benchmarking of these imputation methods on these
newer SRT technologies’ datasets. In this work, we select seven SOTA imputation meth-
ods and provide detailed benchmarking results on five SRT technologies consisting of 23
datasets. We show that there are no single imputation methods that consistently out-
perform others, demonstrating poor imputation capability in most cases, and also poor
performance in identifying valid dropouts. Thus, analyzing these SOTA methods’ per-
formance, we propose a new imputation method, **‘SpaMean-Impute’**, designed for SRT
datasets that utilize spatial information while mitigating dropouts. Furthermore, the pro-
posed method can detect valid dropouts, unlike the SOTA benchmarked methods. Due to
integration of spatial information-based dropout location detection, ‘SpaMean-Impute’
only imputes a valid location while preserving the inherent biological relations of the
datasets, unlike SOTA methods. Our proposed method outperforms the SOTA impu-
tation methods across evaluation metrics such as: Adjusted Rand Index(ARI), Normal-
ized Mutual Information (NMI), Adjusted Mutual Information(AMI), and Homogeneity
(HOMO). In case of ARI, the proposed method outperforms the SOTA methods on av-
erage 16.15%, whereas 18.45% improvement in NMI, 18.96% improvement in AMI, and
13.98% improvement in the case of HOMO. Furthermore, the proposed method is com-
putationally efficient compared to other SOTA methods. For example, compared to the
SOTA deep-learning-based imputation methods, the proposed method is approximately
33 times faster and requires, on average, 1500 MB less memory during imputation. 

Full Presentation:

[Fahim's Master's presentation](https://drive.google.com/file/d/1bPS52Br1yaV9hDxIQxJx5qyiE8VTwx__/view?usp=sharing)

Source Code: 

[https://github.com/FahimHafiz/SpaMean-Impute](https://github.com/FahimHafiz/SpaMean-Impute)
