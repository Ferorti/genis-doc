GENis is organized into **three forensic modules**, each designed for a distinct problem:

| Module | Question it answers |
|---|---|
| **Forensic identification of persons** | Does this profile (suspect, convicted person) match evidence from a scene, or another reference profile? |
| **MPI** (missing persons search) | Is any of these unidentified individuals the relative being sought in this family tree? |
| **DVI** (disaster victim identification) | Same as MPI, applied to identifying remains in disaster contexts. |

This page describes the forensic genetics engine that underpins all three: the kit and marker model, profile categories, the STR matching engine, the likelihood ratio calculation, mitochondrial DNA support, and the MPI/DVI kinship engine based on Bayesian networks.

---

## Kits and markers

Each genetic profile is genotyped with one or more commercial **kits**, and each kit defines a set of **markers** (loci).

- Each kit has an associated **representative parameter K**: the number of markers that kit contributes for evaluating admissibility.
- Each marker is loaded with its chromosome, valid allelic range, and whether it is **required** or only **accepted** for matching.
- The system interprets **microvariants** (alleles with a `.x` suffix, which act as a wildcard within a range) and **values outside the marker's allelic ladder**, keeping both the loaded value and the value used for comparison in the result.

## Profile categories and classification

Every profile belongs to a **category**, which is the system's central configuration mechanism: it defines whether the profile corresponds to a **reference sample** (undisputed) or to **forensic evidence**, and from that distinction the following are derived:

- **Admissibility criteria**: minimum number of markers with alleles, maximum number of markers with trisomy (also used to infer the number of contributors in evidence), and maximum alleles per marker.
- **Association rules**: for example, linking a victim's profile to evidence from a mixture in which they are a known contributor, to optimize the search.
- **Search rules**: which other categories a new profile is automatically compared against, and at what stringency level.

The **MPI** and **DVI** modules work with a fixed set of categories that cannot be edited or deleted, organized into two groups — **Ante Mortem** (reference profiles of the person being sought: reference individuals, personal items, people searching for their biological identity) and **Post Mortem** (remains and unidentified deceased persons) — with subtypes such as IR, ER, INN, RNN, ENN and PFNI.

## Allele frequency databases

The statistical evaluation of a match (random match probability and likelihood ratio) requires knowing how frequently each allele appears in the reference population. GENis manages these tables as loadable files, to which a **theta coefficient** of population co-ancestry/substructure is associated.

When the table does not provide minimum frequencies for poorly sampled alleles, GENis offers four methods to estimate them:

| Method | Minimum-frequency formula | Depends on |
|---|---|---|
| Manual | fixed value | — |
| NRC II | 5 / (2N) | N (sample size) |
| Weir | α / (N + α) | N, α (population heterogeneity) |
| Budowle–Monson–Chakraborty | (C + α) / (2N + α + C) | N, α, C (the most conservative) |

## STR matching engine: stringency levels

GENis compares profiles marker by marker using a **three-level stringency** scheme recommended by ENFSI:

- **High stringency**: all alleles of one profile must be present, in a compatible way, in the other profile at every locus compared. This is the strictest mode, intended for a near-complete match.
- **Medium/moderate stringency**: the locus with fewer alleles (the "minimum set") must be contained in the other. This is the typical mode for comparing a simple profile against a mixture, or for tolerating apparent drop-out.
- **Low stringency**: it suffices for both loci to share at least one allele. This is a broad criterion, useful for simple-kinship-type searches or exploratory screening.

The stringency level should be chosen according to the search objective: the lower the stringency, the more chance ("adventitious") matches it produces, unrelated to actual kinship.

Additionally, GENis implements a **Mixture–Mixture algorithm**, which evaluates whether two pieces of evidence, each from two contributors, might share a common contributor, as an investigative linkage tool between separate cases. This algorithm is not mixture probabilistic-interpretation software: it does not perform deconvolution or assign contributors, it only prioritizes links within the search engine.

## Statistical evaluation: the Likelihood Ratio (LR)

GENis calculates the LR over a DNA mixture model that defines sets of alleles observed in the evidence, contributed by known or unknown contributors, and not contributed by excluded known individuals; the LR is the ratio between the probability of the evidence under the hypothesis considered and under the alternative hypothesis, summing over all possible scenarios of unknown contributors compatible with the evidence.

The calculation incorporates:

- **Population structure** (parameter θ, converges to Hardy-Weinberg equilibrium when θ=0).
- **Drop-out**: disappearance of an allele actually contributed (due to heterozygous imbalance or other amplification artifacts).
- **Drop-in**: appearance of an allele foreign to the contributors under consideration, typically due to contamination.

The default drop-out/drop-in probabilities are configured per laboratory, following the recommendations of ISFG, SWGDAM and ENFSI, so that each laboratory backs them with its own validation studies (kit, platform, detection threshold).

When two mixture pieces of evidence are compared, GENis can estimate the probability that both share a common contributor, weighing that hypothesis against the alternative that the contributors of each mixture are completely independent.

### Operative LR, not expert LR

The LR reported by GENis is not equivalent to the LR from specialized expert software (LRmix Studio, EuroForMix, STRmix), which implement semi-continuous or continuous models with formal prosecution/defense hypotheses and model peak height intensity (RFU). Unlike those models, GENis does not necessarily require a reference profile to pose a hypothesis, does not formally distinguish prosecution/defense hypotheses the way an expert model does, and produces an **operative LR** whose purpose is to rank and prioritize matches within the system, not to express probative weight in a judicial sense. Any formal evidentiary evaluation must be carried out with software validated for expert use, since GENis does not incorporate RFU information, per-marker drop-out variation, continuous mixture quantification, or modeling of stutter, degradation or inhibition.

## Mitochondrial DNA (mtDNA)

GENis supports mitochondrial DNA profiles as a complement to autosomal STR markers, useful when the genetic material is heavily degraded (old bones, rootless hair) or when the maternal line is of interest, as in MPI/DVI.

- Haplotypes are loaded as differences relative to the **rCRS** reference sequence, already determined externally by the analyst — GENis does not align sequences or interpret chromatograms.
- Up to 4 position ranges per haplotype are supported, within the regions 16024–16569 and 1–576.
- Certain highly mutable positions or positions unstable across tissues (16193, 309, 455, 463, 573) are excluded from the exclusion calculation, as they do not provide reliable discriminant value.
- The mitochondrial match is always calculated in **high-stringency** mode: mismatches between haplotypes are summed and compared against the maximum threshold configured in the profile's category.

## MPI/DVI module: kinship identification with Bayesian networks

The person-search engine solves a problem different from direct STR matching: instead of comparing "profile against profile," it compares a **family pedigree** (with partially known genotypes) against unidentified candidates.

GENis models each family as a **Bayesian network**, which integrates the pedigree structure and available genotypes to infer the conditional probability table of the sought person's genotype; this allows the LR to be calculated efficiently even for very large databases of unidentified persons, because the probabilities for the sought genotype are calculated only once per family.

The same underlying method was independently validated in the R package **`fbnet`**, comparing its LRs against the reference packages *Familias* and *forrel* over 24 real pedigrees from the Argentine National Genetic Data Bank, with mean errors below 0.2% in most cases. A later work proposes information-theory metrics (Kullback-Leibler divergence, entropy) to quantify how much an available relative contributes to identifying the sought person, implemented in the R package **`forensIT`**; this makes it possible, for example, to prioritize which relative should be genotyped when several options have equal exclusionary power.

## References

- Chernomoretz, A. et al. (2020). *GENis, an open-source multi-tier forensic DNA information system.* Forensic Science International: Reports, 2, 100132. https://doi.org/10.1016/j.fsir.2020.100132
- Marsico, F. et al. (2024). *The Missing Person problem through the lens of information theory.* Forensic Science International: Genetics, 70, 103025. https://doi.org/10.1016/j.fsigen.2024.103025
- Martínez, C. et al. (2019). *First-degree familial relationships coincidences in a population database of Jujuy (Argentina)...* Forensic Science International: Genetics Supplement Series, 7, 714–715.
- Chernomoretz, A. et al. (2022). *Bayesian networks for DNA-based kinship analysis...* Forensic Science International: Genetics Supplement Series, 8, 131–132.
