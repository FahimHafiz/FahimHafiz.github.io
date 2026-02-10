---
layout: post
title: "Paper on spatial transcriptomics imputation published in Briefings in Bioinformatics!"
date: 2026-02-02 00:01:13
excerpt: "Paper on spatial transcriptomics imputation published in Briefings in Bioinformatics!"
---
## Thrilled to announce my latest publication in *Briefings in Bioinformatics*!

Our study, **Spatial information matters: are traditional imputation methods effective for spatial transcriptomics data?**, explores the critical role of spatial context in improving imputation for high-resolution spatially resolved transcriptomics (SRT).

### 🔍 Why this matters  
SRT technologies provide near single-cell resolution, unlocking unprecedented biological insights. Yet, these datasets are often sparse and plagued by **dropout events**, making accurate interpretation challenging. Traditional imputation methods fall short when applied to emerging SRT platforms.

### 💡 What we built  
We benchmarked **seven state-of-the-art imputation methods** across **five SRT platforms** and **23 datasets**. Our findings revealed that no single method consistently excels—highlighting the need for spatially aware approaches.  

To address this, we developed **SpaMean-Impute**, a novel imputation method that integrates spatial information to better recover missing values and detect valid dropouts.

### 🧪 Key Results
- 📈 **Performance gains over SOTA methods**:  
  - **+16.15% ARI**  
  - **+18.45% NMI**  
  - **+18.96% AMI**  
  - **+13.98% HOMO**  
- ⚡ **Efficiency boost**: ~33× faster and ~1500 MB less memory usage compared to deep learning-based imputation methods.

### 🌐 Impact  
SpaMean-Impute demonstrates how leveraging spatial context can significantly improve both accuracy and efficiency in SRT data analysis—paving the way for more reliable biological discoveries.

Grateful to my co-authors **Riasat Azim** and **Swakkhar Shatabda** for their collaboration and insights. Excited to see how this work contributes to advancing computational biology!

Check out the full paper and source code here:  
Paper Link: [https://doi.org/10.1093/bib/bbag027](https://doi.org/10.1093/bib/bbag027)  

Source Code: [https://github.com/FahimHafiz/SpaMean-Impute](https://github.com/FahimHafiz/SpaMean-Impute)
