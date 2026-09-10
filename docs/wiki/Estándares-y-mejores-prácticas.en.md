GENis was designed from its inception (2014) based on four pillars set by the **International Society for Forensic Genetics (ISFG)**: adoption of international standards, agile development methodologies, open-source technologies, and information security. This page brings together the concrete technical, scientific and security standards that the system follows.

---

## Forensic genetics standards

| Organization | Application in GENis |
|---|---|
| **ISFG** (International Society for Forensic Genetics) — DNA Commission | Transparency, availability and reproducibility of forensic biostatistical calculations. Guides the system's four design pillars (see [[Gobernanza]]). |
| **ENFSI** (European Network of Forensic Science Institutes) | Matching algorithms at high, medium and low stringency ("*Guidelines for Best Practice in DNA Analysis*" and "*DNA Database Management*"). |
| **INTERPOL** | Reference for the design of interoperability between national/regional genetic databases. |
| **NRC II** (National Research Council, USA) | Recommendations 4.1 and 4.10 for calculating genotype probabilities from population allele frequencies. |

## Information security standards

According to **Annex V** of the User Manual ("Security Framework and Personal Data Protection"):

- **ISO/IEC 27001** — Information security management system (reference framework for institutional deployment policies).
- **OWASP ASVS** (Application Security Verification Standard) — Application security verification standard.
- **AGPL-3.0** — License that guarantees independent auditability of the source code (see [[Licencia del software]]).

### "Security by design" principles applied

- Mandatory **two-factor authentication** for all users.
- **Role-based access control** with granularity to separate administrative, operational and review functions.
- **Auditing with cryptographic integrity**, aimed at upholding the forensic chain of custody.
- **Application-level encryption**, complementary to transport encryption (TLS).
- Optional **blockchain logging** to reinforce the integrity of genetic profiles (see [[Arquitectura del software]]).

### Deployment recommendations (summary of Annex V)

| Area | Recommendation |
|---|---|
| Initial deployment | Regenerate all secrets distributed with the code before production |
| Service exposure | Institutional reverse proxy with TLS and standard security headers |
| Network | Segregated segment, with no direct exposure to the Internet |
| Environment | OS hardening, disk encryption, reliable time synchronization (NTP) |
| Accounts | Periodic creation/removal and review of the user roster |
| Backup | Encrypted backup off the main site, with a tested recovery plan |
| Audit | Periodic external review of deployment and code |
| People | Annual training, confidentiality agreements, separation of duties |

## Digital public goods standards

GENis's development cycle was explicitly guided by:

- The **Digital Public Goods Standard** of the Digital Public Goods Alliance (DPGA).
- The **Principles for Digital Development** of the Digital Impact Alliance (DIA).

## Software engineering best practices

- Agile development methodologies, with a multidisciplinary team of more than 100 experts since 2014 (academia, industry and government).
- Automated test coverage with a target threshold of 80% (`sbt test`, `sbt coverage`) and style linting (`sbt scalastyle`) — see [[Tests y validaciones]].
- Strict separation between the business engine (`app/` / `modules/core`) and the frontend, with stable API contracts between the two.
- Algorithmic transparency: the LR calculation models are publicly documented in the User Manual (Annexes I–III) to allow independent reproduction by party experts.

## Normative references cited in the documentation

- GNU Affero General Public License, version 3. Free Software Foundation, 2007.
- OWASP Application Security Verification Standard (ASVS), current version.
- ISO/IEC 27001: Information security management systems — requirements.
- ENFSI, *Guidelines for Best Practice in DNA Analysis* and *DNA Database Management Review and Recommendations* (2023).
- GENis Statement of Principles — Fundación Sadosky.
