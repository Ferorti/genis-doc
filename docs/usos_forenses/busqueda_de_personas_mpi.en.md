# Missing persons search (MPI)

Missing persons search (MPI, *Missing Person Identification*) is intended for identifying people whose whereabouts or identity are unknown. It is mainly applied in three situations:

- Child abduction.
- Human trafficking.
- Missing persons.

![](../images/sec22/modulo_mpi_f01.png)

## How it works

MPI is based on **genetic kinship**. Instead of comparing the profile of the person being sought, which is usually unavailable, it works with the profiles of their relatives:

1. **Registration of relatives' DNA.** Profiles of biological relatives of the sought person are loaded, act as references and are organized into a family tree (pedigree) within a case.
2. **Matching against traces and remains.** When the pedigree is activated, GENis compares it with the profiles of traces, remains or other samples of persons not yet identified. The search is **open**: every new profile entered into the database under an MPI category is compared against all active pedigrees.

When the comparison detects kinship compatibility, a match is generated that must be reviewed and validated through a scenario to guide identification. As an optional prior filter, the search can use mitochondrial DNA from the maternal line (mitochondrial screening).

## Relatives' DNA registries

An example of a relatives' DNA registry is the **Banco Nacional de Datos Genéticos (BNDG)**, the Argentine institution that safeguards the samples of family groups searching for missing persons or for appropriated children. The foundation of the GENis kinship engine was validated with real pedigrees from that bank (see [Forensic genetics foundations](../genis/genetica_forense.md#kinship-comparison-bayesian-networks)).

## Further reading

- Operation of cases, pedigrees, matches and scenarios: [Missing persons search](../busqueda_de_perfiles/busqueda_de_personas.md).
- Fixed MPI categories (Ante Mortem and Post Mortem): [Categories](../administracion/categorias.md#category-definition).
- Bayesian-network kinship engine: [Forensic genetics foundations](../genis/genetica_forense.md#kinship-comparison-bayesian-networks).
- Differences with disaster victim identification: [DVI](identificacion_de_victimas_dvi.md#differences-with-mpi).
