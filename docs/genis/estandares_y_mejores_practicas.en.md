GENis was designed from its inception (2014) according to the four principles of its [Declaration of principles](declaracion_de_principios.md): transparency, collaboration, security and free/open source software. The recommendations of the **International Society for Forensic Genetics (ISFG)** on transparency, availability and reproducibility guided the transparency principle. This page brings together the concrete technical, scientific and security standards that the system follows.

---

## Forensic genetics standards

| Organization | Application in GENis |
|---|---|
| **ISFG** (International Society for Forensic Genetics), DNA Commission | Transparency, availability and reproducibility of forensic biostatistical calculations. Guides the transparency principle (see [Declaration of principles](declaracion_de_principios.md)). |
| **ENFSI** (European Network of Forensic Science Institutes) | Matching algorithms at high, medium and low stringency ("*Guidelines for Best Practice in DNA Analysis*" and "*DNA Database Management*"). |
| **INTERPOL** | Reference for the design of interoperability between national/regional genetic databases. |
| **NRC II** (National Research Council, USA) | Recommendations 4.1 and 4.10 for calculating genotype probabilities from population allele frequencies. |

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

## Normative references cited in the documentation

- GNU Affero General Public License, version 3. Free Software Foundation, 2007.
- OWASP Application Security Verification Standard (ASVS), current version.
- ISO/IEC 27001: Information security management systems: requirements.
- ENFSI, *Guidelines for Best Practice in DNA Analysis* and *DNA Database Management Review and Recommendations* (2023).
- GENis Statement of Principles. Fundación Sadosky.
