GENis was designed from its inception (2014) according to the four principles of its [Declaration of principles](declaracion_de_principios.md): transparency, collaboration, security and free/open source software. The recommendations of the **International Society for Forensic Genetics (ISFG)** on transparency, availability and reproducibility guided the transparency principle. This page brings together the concrete technical, scientific and security standards that the system follows.

---

## Forensic genetics standards

| Organization | Application in GENis |
|---|---|
| **ISFG** (International Society for Forensic Genetics), DNA Commission | Transparency, availability and reproducibility of forensic biostatistical calculations. Guides the transparency principle (see [Declaration of principles](declaracion_de_principios.md)). |
| **ENFSI** (European Network of Forensic Science Institutes) | Matching algorithms at high, medium and low stringency ("*Guidelines for Best Practice in DNA Analysis*" and "*DNA Database Management*"). |
| **INTERPOL** | Reference for the design of interoperability between national/regional genetic databases. |
| **NRC II** (National Research Council, USA) | Recommendations 4.1 and 4.10 for calculating genotype probabilities from population allele frequencies. |

### Software validation recommendations

The ISFG DNA Commission published recommendations for validating programs that perform biostatistical calculations in forensic genetics (*Forensic Science International: Genetics* 25, 2016, 191–197). Two of them guided the design of GENis:

- **Independent reproducibility (no. 1).** The software must come with a user manual and describe its method, its population genetics and its data model, so that all calculations can be reproduced by other means (formulas, other software, other statistical approaches) and published in specialized journals. GENis meets this through [Technical annexes I to III](../anexos/anexo_i_algoritmo_de_busqueda_de_coincidencias_de_str.md) and the publications listed in [Track record and validation](trayectoria_y_validacion.md#scientific-publications).
- **Open source (no. 7).** To ensure the continued availability of the software, the code must be placed in a secure repository (for example, GitHub) and the algorithms described in enough detail to allow reimplementation. GENis is published under AGPL-3.0 in the [Fundación Sadosky repository](https://github.com/fundacion-sadosky/genis).

## Information security standards

According to [Annex V: Security and personal data protection framework](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md):

- **ISO/IEC 27001**: Information security management system (reference framework for institutional deployment policies).
- **OWASP ASVS** (Application Security Verification Standard): Application security verification standard.
- **AGPL-3.0**: License that guarantees independent auditability of the source code (see [Annex V: License](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md#7-license)).

### "Security by design" principles applied

- Mandatory **two-factor authentication** for all users.
- **Role-based access control** with granularity to separate administrative, operational and review functions.
- **Auditing with cryptographic integrity**, aimed at upholding the forensic chain of custody.
- **Application-level encryption**, complementary to transport encryption (TLS).
- Optional **blockchain logging** to reinforce the integrity of genetic profiles.

Recommendations for institutional deployment (secrets, network, environment, accounts, backup, audit and people) are detailed in [Annex V: Technical recommendations for deployment](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md#4-technical-recommendations-for-deployment).

## Digital public goods standards

GENis's development cycle was explicitly guided by:

- The **Digital Public Goods Standard** of the Digital Public Goods Alliance (DPGA).
- The **Principles for Digital Development** of the Digital Impact Alliance (DIA).

## Software engineering best practices

- Agile development methodologies, with a multidisciplinary team of more than 100 experts since 2014 (academia, industry and government).
- Automated test coverage with a target threshold of 80% (`sbt test`, `sbt coverage`) and style linting (`sbt scalastyle`).
- Strict separation between the business engine (`app/` / `modules/core`) and the frontend, with stable API contracts between the two.
- Algorithmic transparency: the LR calculation models are publicly documented in the [Technical annexes I to III](../anexos/anexo_i_algoritmo_de_busqueda_de_coincidencias_de_str.md) to allow independent reproduction by party experts.

## Technologies and tools

GENis is built entirely with open-source technologies and agile development tools:

| Area | Components |
|---|---|
| Application | Scala, Play, Slick, AngularJS, Bootstrap |
| Data and infrastructure | PostgreSQL, MongoDB, Hadoop, Debian |
| Development and quality | Scrum, Agilefant, GitLab, Jenkins, TestLink, Selenium |
| Security | Touchpoints, OpenSSL, 256-bit AES encryption, multifactor authentication with Google Authenticator, password manager |

## Normative references cited in the documentation

- GNU Affero General Public License, version 3. Free Software Foundation, 2007.
- OWASP Application Security Verification Standard (ASVS), current version.
- ISO/IEC 27001: Information security management systems: requirements.
- ENFSI, *Guidelines for Best Practice in DNA Analysis* and *DNA Database Management Review and Recommendations* (DNA-GDL-004, 2023).
- Coble, M. D. et al. DNA Commission of the ISFG: recommendations on the validation of software programs performing biostatistical calculations for forensic genetics applications. *Forensic Science International: Genetics* 25 (2016) 191–197.
- GENis Statement of Principles. Fundación Sadosky.
