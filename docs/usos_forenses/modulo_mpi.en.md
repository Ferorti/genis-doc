# Missing persons search module (MPI)

The GENis missing persons search module (MPI) is intended for identifying people whose whereabouts or identity are unknown. It is mainly applied in three situations:

- Child abduction.
- Human trafficking.
- Missing persons.

![](../images/sec22/modulo_mpi_f01.png)

## How it works

The module is based on **genetic kinship**. Instead of comparing the profile of the person being sought, which is usually unavailable, it works with the profiles of their relatives:

1. **Registration of relatives' DNA.** Profiles of biological relatives of the sought person are loaded and act as references.
2. **Matching against traces and remains.** Those profiles are compared with the ones obtained from traces, remains or other samples of persons not yet identified.

When the comparison detects kinship compatibility, a match is generated that must be reviewed to guide identification.

## National Bank of Genetic Data

The registration of relatives' DNA is linked to the **Banco Nacional de Datos Genéticos (BNDG)**, the Argentine institution that safeguards the samples of family groups searching for missing persons or for appropriated children. The profiles in those records are the ones GENis matches against new traces and remains.

## Further reading

Case creation, pedigrees and kinship match management are detailed in [Missing persons search](../busqueda_de_perfiles/busqueda_de_personas.md). The foundations of the Bayesian-network kinship engine are described in [Forensic genetics](../genis/genetica_forense.md).
