# Disaster victim identification (DVI)

Disaster victim identification (DVI) is intended for identifying the victims of a mass-casualty event, comparing the recovered remains with the profiles of the relatives of the sought persons.

It shares its foundation with [missing persons search (MPI)](busqueda_de_personas_mpi.md): the sought person has no profile of their own, so the comparison is **kinship-based**, using family trees (pedigrees). The difference is that in DVI the search universe is **closed**: the remains and the families belong to the same event and are compared only with each other.

## How it works

1. **Case creation.** Each event is managed as a DVI case, which gathers two groups of profiles:
    - **Reference profiles (Ante Mortem):** relatives of the sought persons.
    - **Post mortem NN profiles:** unidentified biological remains, unidentified deceased persons, deceased persons whose identity is to be analyzed, and personal belongings found.
2. **Grouping of remains.** When several profiles correspond to the same individual (for example, different fragments), they are consolidated into a single grouping profile, the most complete one. This way each individual takes part in the search only once, redundant matches are avoided, and the comparison uses the largest number of available alleles.
3. **Pedigrees.** A pedigree is built for each family with its reference profiles.
4. **Search.** When a pedigree is activated, GENis compares it against the active post mortem profiles of the same case.
5. **Review.** Matches are reviewed in the case's match manager and validated through a scenario.

## Differences with MPI

| Aspect | MPI | DVI |
|---|---|---|
| Search universe | Open: every new profile in an MPI category is compared against all active pedigrees | Closed: the search is launched when a pedigree is activated and covers only the case's profiles |
| Post mortem profiles | Matched from the general database | Associated with the case, in a dedicated tab |
| Grouping of remains | No | Yes |
| Mitochondrial screening | Optional, as a prior filter | Not used: with incomplete, degraded or partial profiles, using it as an exclusion filter could discard valid associations |

## Further reading

- Operation of DVI cases, grouping of remains and matches: [Missing persons search](../busqueda_de_perfiles/busqueda_de_personas.md#remains-grouping-collapsing).
- Fixed DVI categories: [Categories](../administracion/categorias.md#category-definition).
- Bayesian-network kinship engine: [Forensic genetics foundations](../genis/genetica_forense.md#kinship-comparison-bayesian-networks).
