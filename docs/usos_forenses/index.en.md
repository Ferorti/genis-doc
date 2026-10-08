# Forensic uses

GENis is a forensic software solution: a **forensic genetic profile management** system that covers the path genetic information follows from the moment it is obtained in the laboratory until it is used in an investigation. This ability to compare profiles from different events, places and times is the foundation of judicial cooperation between institutions and between countries.

![](../images/sec22/cooperacion_f01.png)

## From biological material to comparison

The workflow is organized in two complementary stages:

| Stage | What happens | Where |
|---|---|---|
| **Sequencing** | From biological material (hair, blood, fluids, bone tissue, among others) the genetic profile is obtained with laboratory equipment, which translates it into digital data. | Laboratory, outside GENis |
| **Storage and comparison** | The profile is loaded onto a server, stored and automatically compared against the rest of the profiles in the database. | GENis |

GENis does not interpret laboratory signals or perform sequencing: it receives already determined profiles, manages them and matches them. The compared profiles fall into two large groups: **reference samples** from known subjects and **evidence** found at crime scenes, whose contributor is unknown. This distinction is detailed in [Forensic genetics](../genis/genetica_forense.md#profile-categories-and-classification).

## Modules that support cooperation

Regional cooperation relies on two GENis modules, each aimed at a different type of problem:

- [**Forensic module**](modulo_forense.md): links evidence to other evidence and to reference subjects in order to identify repeat offenders and unify investigations.
- [**Missing persons search module (MPI)**](modulo_mpi.md): matching of relatives against traces and remains in cases of child abduction, human trafficking and missing persons.

## Exchange between instances

So that comparison goes beyond a single institution, GENis instances connect with each other through a federated architecture: each node keeps ownership and administration of its profiles and shares only what is needed to detect matches. The harmonization conditions and the submission, review and notification circuit are described in [Instance interconnection](../busqueda_de_perfiles/interconexion_de_instancias.md).
