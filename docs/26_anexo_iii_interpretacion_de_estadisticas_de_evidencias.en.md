# Annex III - Interpretation of evidence statistics

## Annex III – Interpretation of evidence statistics

This annex describes the **statistical and probabilistic** framework used by GENis for the quantitative assessment of genetic evidence, particularly in contexts involving **DNA mixtures and multiple contribution hypotheses**. Its purpose is to give the user a conceptual understanding of the calculations performed by the system, without intending to replace specialized statistical training or formal expert interpretation.

GENis implements an approach based on the **Likelihood Ratio (LR)**, widely accepted in forensic genetics, which allows comparing the relative plausibility of two alternative hypotheses given the same genetic evidence.

In general terms, the LR is defined as:

![](images/sec26/p276_f01.png)

where ***H<sub>f</sub> and H<sub>d</sub>*** represent two competing hypotheses, typically associated with the **participation or non-participation of certain individuals in the evidentiary sample**. An LR value greater than 1 indicates that the evidence is more probable under the hypothesis in the numerator than under the one in the denominator, while values lower than 1 indicate the opposite.

## General framework of hypotheses and contributors

In a general case, the hypotheses considered by GENis contemplate the possible genetic contribution to an evidentiary sample ***M*** by:

- individuals with known profiles ***S<sub>1</sub>,S<sub>2</sub>,…,S<sub>n</sub>***.
- and a set of unknown contributors ***D1,D2,…,Dm***.

This approach makes it possible to treat in a unified way both **single-source problems** (identification) and **analysis of mixtures with multiple contributors**, without requiring that the exact number of contributors be known a priori.

To formalize this approach, the following sets are used:

- ***R***: set of alleles observed in the evidence.
- ***T***: set of alleles contributed by the individuals who, according to the hypothesis being evaluated, contributed to the sample.
- ***V***: set of alleles belonging to known individuals who, according to the hypothesis, did not contribute to the sample.
- ***U<sub>j</sub>***: set of alleles corresponding to the j-th possible scenario of unknown contributors.

The probability of the evidence under a given hypothesis is then expressed as:

![](images/sec26/p277_f01.png)

where the sum runs over all compatible scenarios of unknown contributors.

## Consideration of allelic frequencies and population substructure

To estimate the probabilities associated with the different scenarios, GENis uses the **population allelic frequencies** corresponding to the database selected by the user. Likewise, possible **subpopulation structure** is taken into account through the parameter θ, in accordance with the classic Balding–Nichols models.

The probability of observing a given set of alleles is calculated by taking into account the multiplicity of each allele and its population frequency, allowing corrections for inbreeding or genetic structure to be incorporated when applicable.

## Modeling of drop-out and drop-in

GENis explicitly incorporates the phenomena of **drop-out** and **drop-in**, which are fundamental in mixture analysis:

- *Drop-out* is the term used for the absence, in the observed profile, of an allele that was in fact contributed by a real contributor.
- *Drop-in* is the term used for the appearance of an allele in the evidence that does not come from any of the contributors under consideration, typically attributable to contamination.

Let:

- δ be the set of alleles contributed but not observed (drop-out),
- χ be the set of alleles observed but not explained (drop-in),
- ρ be the set of alleles correctly observed.

The probability of observing the evidence ***R*** given a set of contributors is then modeled as a combination of these events, weighted by the probabilities ***Pout*** and ***Pin***, configured for the corresponding laboratory.

This approach allows GENis to evaluate complex mixture scenarios probabilistically, even when the user has not explicitly defined the number of contributors or the exact composition of the mixture.

## Statistical assessment of associations between evidence mixtures

The annex also describes the particular case of **association between two evidentiary mixtures**, in which the hypothesis that both share one or more common contributors is assessed. This type of analysis is used, for example, in the **Mixture-Mixture** algorithm, applicable when both pieces of evidence have two inferred contributors.

In this context, hypotheses of the following type are compared:

- H1: both mixtures share at least one common contributor,
- H2: the mixtures come from completely independent sets of contributors.

The assessment is carried out by means of an LR built from the scenarios compatible with each hypothesis, following the same general probabilistic framework.

## Scope and interpretation of the results

It is important to note that the statistical values generated by GENis, including the LRs calculated within this framework, must be interpreted as **support tools for the assessment and prioritization of matches**, and not as substitutes for full expert analysis.

GENis does not implement semicontinuous or continuous peak-intensity models, nor does it optimize drop-out parameters from the data of each case, as specialized expert software does (for example LRmix, EuroForMix, or STRmix). Consequently, the results obtained must be understood within the scope and limitations of the system.

## Implementation of the calculation

GENis considers as the ensemble of sets ***{Uj}*** of alleles corresponding to the ***x*** unknown contributors proposed by hypothesis ***H***, all possible permutations of ***2x*** alleles taken with repetition from the ***k*** allelic values of the system analyzed.

![](images/sec26/p280_f01.png)

To estimate the probabilities ***P(U<sub>j</sub> |T,V) and P(T,V)*** from [4], we will use the following:

This expression allows estimating the probability of observing an allele

**A<sub>i</sub>, knowing that this allele has appeared n<sub>i</sub> times in a group of n alleles from the same population**, in the general case in which we assume subpopulation structure (note that when θ=0 the results converge to those expected under the Hardy-Weinberg hypothesis).

The estimation of the probability ***P(R│T,U<sub>j</sub>)*** of observing the replicate ***R*** given the known and unknown contributors proposed by hypothesis ***H*** is obtained by taking into account the possible subpopulation structure, characterized by the parameter **Θ**, and the probabilities ***Pout*** and ***Pin*** of drop-out and drop-in respectively.

Let ***δ*** be the set of alleles that are among those contributed by contributors ***T*** and ***U<sub>j</sub>*** but are not found in sample ***R*** (i.e., alleles that underwent drop-out events),

1. Dropout is the term used for the event in which a given peak in the electropherogram disappears completely from the profile in an artifactual way. This can occur as an extreme case of heterozygous imbalance, although other researchers suggest that it may also originate from other kinds of technical problems in the amplification process.
2. It occurs in connection with possible sample contamination events at the time of preparing it for PCR amplification.
3. χ is the set of alleles that are present in the sample but not among the contributors (i.e., it groups drop-in alleles), and ρ is the set of alleles that neither underwent drop-out nor arose from contamination.

The probability sought is:

![](images/sec26/p281_f01.png)

With

![](images/sec26/p282_f01.png)

Where ***n<sub>Ai</sub>*** is the multiplicity of allele ***A<sub>i</sub>*** among the alleles ***{T,Uj}*** and ***p<sub>Ai</sub>*** is the frequency of occurrence of that allele in the population of interest.

## Statistical assessment of associations between evidentiary mixtures

Suppose that, within a system for storing evidentiary samples, there is a procedure for associating two mixtures, ***M*** and ***M´***, based, for example, on criteria of compositional similarity (i.e., matching).

In what follows, we will assume that two contributors left genetic traces in each of these samples, and we will seek to estimate the probability that both samples can be explained in accordance with hypothesis ***H<sub>3</sub>***, which contemplates that the same contributor, ***C<sub>s</sub>***, contributed to both profiles together with additional contributors, ***C*** and ***C´***, participating in mixtures ***M*** and ***M´*** respectively.

It will also be of interest to estimate the probability that both samples can be explained in accordance with an alternative hypothesis, ***H<sub>3</sub>***, according to which different pairs of contributors would explain the samples ***M*** and ***M´*** of interest. In this way

![](images/sec26/p283_f01.png)

![](images/sec26/p283_f02.png)

To statistically assess the link between ***M*** and ***M´*** we will consider the ratio

![](images/sec26/p283_f03.png)

Where ***K*** and ***K´*** denote genotyped profiles related to samples ***M*** and ***M´***. Specifically, we will consider that the genotypes ***C<sub>2</sub>*** and/or ***C´<sub>2</sub>*** associated with ***M*** and/or ***M´*** respectively could eventually be known a priori. Finally, we obtain

![](images/sec26/p283_f04.png)

In general, given the available evidence and a working hypothesis, it is possible to construct different compatible scenarios. For example, let ***M= {A<sub>1</sub>, A<sub>2</sub>, A<sub>3</sub>}***, ***M´={A<sub>1</sub>, A<sub>3</sub>, A<sub>4</sub>, A<sub>6</sub>}***, ***K={}*** and ***K´={}***. The following table illustrates the scenarios that can be proposed under hypothesis ***H<sub>3</sub>***, with three contributors.

| Scenario contributors | C1 | C2 | C´1 | C´2 |
| --- | --- | --- | --- | --- |
| ![](images/sec26/p284_f01.png) | A1,A3 | A2,A1 | A1,A3 | A4,A6 |
| ![](images/sec26/p284_f02.png) | A1,A3 | A2,A3 | A1,A3 | A4,A6 |
| ![](images/sec26/p284_f03.png) | A1,A3 | A3,A4 | A1,A3 | A4,A6 |

Likewise, the following tables report the scenarios compatible with two contributors for samples ***M*** and ***M´*** respectively.

| Scenario contributors | C1 | C2 |
| --- | --- | --- |
| ![](images/sec26/p284_f04.png) | A1,A1 | A2,A3 |
| ![](images/sec26/p284_f05.png) | A1,A2 | A1,A3 |
| ![](images/sec26/p284_f06.png) | A1,A2 | A2,A3 |
| ![](images/sec26/p284_f07.png) | A1,A2 | A3,A3 |
| ![](images/sec26/p284_f08.png) | A1,A3 | A2,A2 |
| ![](images/sec26/p284_f09.png) | A1,A3 | A2,A3 |

| Scenario contributors | C´1 | C´2 |
| --- | --- | --- |
| ![](images/sec26/p285_f01.png) | A1,A3 | A4,A6 |
| ![](images/sec26/p285_f02.png) | A1,A4 | A3,A6 |
| ![](images/sec26/p285_f03.png) | A1,A6 | A3,A4 |

Finally, the sought quantity is:

![](images/sec26/p285_f04.png)
