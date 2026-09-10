# Annex II - Match manager and default statistical calculations

## Annex II – Match manager and default statistical calculations

### Introduction

GENis allows the entry and management of genetic profiles from both reference samples and forensic evidence, including evidence for which it is not possible to determine a priori the number of individuals who contributed to the analyzed genetic material. This situation is common in forensic casework, particularly in complex or low-quality samples, where the geneticist cannot establish with certainty the number of contributors based solely on the electropherogram.

However, in order to run the automatic processes of comparison, match organization, and statistical estimation, the system must formalize certain minimal assumptions. In this context, GENis implements mathematical and statistical procedures that make it possible to infer operational parameters, such as the most probable number of contributors, and to calculate indicative statistical values (default LR), which facilitate the prioritization and navigation of the matches found.

This annex describes the logical, mathematical, and statistical basis of these procedures, with the aim of making the system's internal operation transparent. The calculations presented here **do not replace formal expert analysis**, but rather constitute automatic tools to support the management of large volumes of genetic information.

## Inference of the number of contributors to an evidence sample

GENis is able to provide an estimate of the most probable number of contributors, denoted ***n\****, for an evidentiary genetic profile ***R***. This estimate is obtained by maximizing, as a function of the number of contributors, the probability that the evidence originates from a set of ***x*** unknown contributors:

![](images/sec25/p269_f01.png)

*Where **Uⱼ(x)** is the set of alleles corresponding to the j-th possible configuration of **x** unknown contributors.*

This procedure evaluates, for different values of ***x***, the explanatory power of each hypothesis in relation to the alleles observed in the evidence. The goal is not to establish a definitive conclusion about the actual number of contributors, but to select the value most consistent with the available evidence, so as to allow the matching algorithms and automatic statistical calculations to function correctly.

The inference of the number of contributors serves, in particular, three operational functions within the system:

1. It allows matches to be grouped consistently in the manager, distinguishing between grouping profiles of reference type and evidence type.
2. It enables the automatic calculation of default LR values under simplified hypotheses.
3. It determines when the specific Mixture–Mixture comparison algorithm can be run, which only applies when both pieces of evidence have two inferred contributors.

## Default LR calculation

With the aim of giving the analyst an initial assessment of the possible statistical weight of a match, GENis performs automatic likelihood ratio (LR) calculations under predefined assumptions. These calculations make it possible to rank matches within the manager and guide subsequent analysis.

The likelihood ratio is defined as follows:

![](images/sec25/p270_f01.png)

*where **Hf** and **Hd** represent two alternative hypotheses to be contrasted, typically related to the participation or non-participation of certain individuals in the evidentiary sample.*

In a general case, the hypotheses consider the possible contribution to sample ***M*** of individuals with known profiles ***S₁,S₂,…,Sₙ*** and of unknown contributors ***D₁,D₂,…,Dₘ***. This approach allows both single-source problems and mixture analyses with multiple contributors to be treated in a unified way.

## Definition of sets and problem formulation

To estimate the probability ***P(evidence|H)***, the notation introduced by *Curran* et al. is adopted. The following sets are defined:

- ***R***: set of alleles observed in the evidentiary sample.
- ***T***: set of alleles corresponding to individuals who, according to hypothesis ***H***, contributed to the sample.
- ***V***: set of alleles corresponding to individuals with a known profile who, according to ***H***, are not contributors.
- ***Uⱼ***: set of alleles corresponding to the ***j-th*** possible group of unknown contributors under hypothesis ***H***.
- ***x***: number of unknown contributors stipulated by the hypothesis.

The goal is to compute:

![](images/sec25/p271_f01.png)

where the index ***j*** runs over the different possible sets of unknown contributors that could explain the evidence.

Following the approach proposed in *Curran* (2005), this expression makes it possible to formally integrate all the genetic configurations compatible with the hypothesis under consideration.

## Implementation of the calculation in GENis

GENis considers the ensemble of sets ***{Uj}*** to be all possible permutations of ***2x*** alleles taken with repetition from the ***k*** allelic values observed in the analyzed system:

![](images/sec25/p271_f02.png)

To estimate the probabilities ***P(Uj│T,V)*** and ***P(T,V)***, the expression used is the one that calculates the probability of observing an allele ***Ai***, given that this allele has appeared ***ni*** times in a group of ***n*** alleles from the same population, taking into account possible subpopulation structure:

![](images/sec25/p272_f01.png)

When ***θ=0***, the results converge to those expected under the Hardy–Weinberg hypothesis.

## Incorporation of drop-out, drop-in, and population structure

The estimation of the probability ***P(R│T,Uj)*** of observing replicate ***R***, given the known and unknown contributors proposed by hypothesis ***H***, takes into account:

- the possible subpopulation structure, characterized by the parameter ***θ***
- the probability of drop-out
- the probability of drop-in

The following sets are defined:

- ***δ***: set of alleles contributed by the contributors ***T ∪ Uⱼ*** that are not observed in sample ***R*** (alleles with drop-out).
- ***χ***: set of alleles observed in ***R*** that do not belong to the contributors (alleles with drop-in).
- ***ρ***: set of alleles that did not undergo drop-out or drop-in events.

The probability sought is:

![](images/sec25/p272_f02.png)

*where **nAi** is the multiplicity of allele **Ai** among the alleles of **T ∪ Uj**, and **pAi** is the population frequency of the allele.*

## Automatic calculations according to match type

Depending on the type of grouping profile, the type of matching profile, and the number of inferred contributors, GENis applies different default statistical calculation schemes, summarized in the following table:

![](images/sec25/p273_f01.png)

These calculations are indicative and operational in nature, and should not be interpreted as substitutes for a thorough expert analysis using specialized software.

## Statistical assessment of associations between evidentiary mixtures

When two evidentiary mixtures ***M*** and ***M´*** are compared, GENis makes it possible to assess the probability that both can be explained under the hypothesis of a common contributor ***Cs*** together with additional, different contributors in each sample.

This hypothesis is contrasted against an alternative hypothesis in which different pairs of contributors would explain the mixtures. The likelihood ratio is defined as:

![](images/sec25/p274_f01.png)

This approach makes it possible to statistically assess associations between pieces of evidence, facilitating the identification of possible links between different scenes or events.

## Scope and limitations

The calculations and derivations presented in this annex constitute the formal basis for the statistical operation of the GENis match manager. Their purpose is to provide automatic and consistent support for match management in large-scale genetic databases.

However, the values obtained should always be interpreted as **indicative indicators**, and not as definitive expert conclusions. For the formal forensic interpretation of complex evidence, GENis should be used as a complement to specialized continuous probabilistic analysis software.
