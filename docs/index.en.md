![GENis logo](images/assets/logo_blanco.svg#only-light){ .genis-logo .off-glb }
![GENis logo](images/assets/logo_negro.svg#only-dark){ .genis-logo .off-glb }

# GENis { .sr-only }


GENis is an open computer system, developed by the [Fundación Dr. Manuel Sadosky](https://www.fundacionsadosky.org.ar), for the storage, exchange and comparison of genetic profiles for forensic purposes. It allows comparing profiles obtained from biological samples collected at different crime or disaster scenes, linking events that occurred at different times and places and increasing the chances of identifying offenders, missing persons or victims of disasters.

The system integrates forensic genetics and bioinformatics tools, with the aim of facilitating the systematic comparison of genetic profiles, ensuring the traceability of information and strengthening the technical and evidentiary quality of the results obtained.

## Origin

The development of GENis is part of an institutional process of coordination among judicial bodies, the scientific community and the technology sector of Latin America, aimed at providing countries with their own tool for managing forensic genetic databases. Since its conception, the system was designed based on the real operational requirements of forensic laboratories and judicial bodies, and taking as a reference current international standards and recommendations in the field.

In particular, the architecture and operation of GENis are aligned with the recommendations of the **International Society for Forensic Genetics (ISFG)**, the **European Network of Forensic Science Institutes (ENFSI)** and **INTERPOL**, among other reference bodies. These guidelines are reflected both in the admissibility and match-search criteria and in the transparency of the calculation models, the system's auditability and the protection of the stored genetic information.

**A guiding principle in the design of GENis is the transparency of the statistical models and search algorithms, understood as a necessary condition for the independent reproducibility of results and their proper evaluation in the expert and judicial fields. In this sense, GENis adopts an open-source architecture**, which allows access to its conceptual models, facilitates technical audits and enables its adaptation to different regulatory and organizational frameworks.

## What GENis does

GENis allows the entry and management of autosomal STR, Y-chromosome, X-chromosome and mitochondrial DNA genetic profiles. The system is highly configurable, making it possible to define profile categories, admission rules, search parameters and comparison criteria in accordance with the regulations and policies of each jurisdiction or laboratory.

Its core is a **matching engine** that supports three forensic uses: criminal investigation, missing persons search (MPI) and disaster victim identification (DVI). They are described in [Forensic uses](usos_forenses/index.md).

In addition, GENis incorporates security, access control, audit and traceability mechanisms that record in detail all actions performed on profiles, analyses, matches and scenarios. These features are essential for meeting the quality, integrity and control requirements demanded by the international standards and recommendations applicable to forensic genetic databases.

## How this manual is organized

This manual describes how GENis works, addressing both the conceptual and the operational aspects necessary for its correct use. It is aimed at forensic geneticists, technical operators, database managers, legislators, the academic community and NGOs.

| Tab | Content |
|---|---|
| **GENis** | What the system is, what it is used for ([Forensic uses](usos_forenses/index.md)), which functions it offers ([System functionalities](genis/funcionalidades_del_sistema.md)), what its calculations are based on ([Forensic genetics foundations](genis/genetica_forense.md)) and the principles and standards it was designed under. |
| **Installation** | Setting up the services with containers, production deployment, backup and server hardening. Starts at [Container installation](instalacion/instalacion_de_contenedores.md). |
| **Administration** | Institutional and catalog configuration: accounts, roles, laboratories, categories, kits, markers and frequencies. Starts at [Requesting an account](administracion/solicitar_una_cuenta.md). |
| **Profile search** | Daily operation: profile registration and deactivation, matches, missing persons search and instance interconnection. Starts at [Profile registration](busqueda_de_perfiles/alta_de_perfiles.md). |
| **Technical annexes** | Formal development of the algorithms and statistical models, error dictionary and security framework. Starts at [Annex I](anexos/anexo_i_algoritmo_de_busqueda_de_coincidencias_de_str.md). |
