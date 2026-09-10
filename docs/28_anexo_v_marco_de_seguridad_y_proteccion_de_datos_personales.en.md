# 28. Annex V: Security and personal data protection framework

## Security and personal data protection framework

This annex brings together the security and personal data protection recommendations applicable to the deployment and operation of GENis. It is aimed both at the technical team responsible for the installation and at institutional authorities and end users, and it describes the conditions under which the system was designed to operate and the practices that every user institution implements so that its specific deployment complies with those conditions.

## 1. Introduction

GENis is a system that processes highly sensitive data whose integrity and confidentiality ultimately determine the quality of the expert evidence. The security of a system of this kind is a property of the whole: it depends on the software, the environment in which it is deployed, and the people who operate it. The recommendations that follow are organized around these three dimensions, starting with the software's design premises and moving on to the operational practices that the institution implements.

## 2. System design

GENis incorporates, by design, a set of security mechanisms that, in relevant respects, exceed the usual standard of comparable software used in forensic contexts. Two-factor authentication is mandatory for all users. Role-based access control offers sufficient granularity to separate administrative, operational, and review functions.

The audit log incorporates cryptographic integrity mechanisms aimed at supporting the chain of custody. Sensitive information is encrypted at the application level, in addition to transport encryption. And distribution under the AGPL license enables independent code auditing by any user institution or accredited third party.

## 3. Recommended deployment context

GENis was designed to operate within the institutional perimeter, not as an application exposed to public networks. The recommended deployment relies on four simultaneous conditions. The instance is located on a segregated network segment, accessible only from authorized workstations within the organization. An intermediate institutional server, usually called a reverse proxy, handles transport encryption and the security headers that protect the user's browser. Support services (corporate directory for authentication, time synchronization, encrypted backup, monitoring, key and certificate management) are provided by the organization's infrastructure. Physical controls over the server are adjusted to the criticality of the service.

## 4. Technical recommendations for deployment

Before putting any instance into production, all secrets distributed with the source code are regenerated. Due to the project's free-software nature, GENis ships with a development configuration that includes cryptographic material, initial administrative passwords, and other values for internal use; these values are public by construction and are replaced with unique, locally generated values before the first production use. This replacement is the condition without which the rest of the security model loses its meaning, and it is, in practice, the most preventable cause of compromise in similar systems.

The service's exposure is organized through an institutional reverse proxy that terminates transport encryption with certificates issued by a trusted authority, configures the HTTP security headers expected by modern browsers, and restricts access to authorized source addresses. The application instance, the database services, and the auxiliary services are not exposed outside the authorized network segment.

Hardening of the environment is continuous: an up-to-date host operating system with a minimum of exposed services, encrypted disk, reliable time synchronization (on which the integrity of the audit log depends), and a formalized dependency-update plan.

Day-to-day operation is supported by an account management policy that includes periodic review of the user roster and assigned permissions, an encrypted backup scheme stored off the main site with a tested recovery plan, monitoring of relevant events with alerts, and a documented incident-response plan. Periodic external audits, combining deployment review and code review, are recommended practice.

All of the above only holds if personnel with access to the system receive training at least annually, accounts are deactivated immediately upon end of employment, and confidentiality agreements are in place regarding the handling of genetic data. The effective separation between administrative roles and operational forensic-analysis roles is the practice that gives full meaning to the role-based access control that the software provides.

| Area | Recommendation |
| --- | --- |
| Initial deployment | Regenerate all distributed secrets before putting into production |
| Service exposure | Institutional reverse proxy with TLS and standard security headers |
| Network | Segregated segment, with no exposure to the Internet or external networks |
| Environment and services | Operating system hardening, disk encryption, time synchronization; do not expose auxiliary interfaces |
| Accounts | Institutional policy for account creation, deactivation, and changes, with periodic roster review |
| Backup and monitoring | Encrypted off-site backup, alerts, and incident-response plan |
| Audit | Periodic external review, combining deployment and code |
| People | Annual training, confidentiality agreements, separation of duties |

## 5. Recommendations for end users

GENis's end users are the last line of the security architecture, and the practices suggested here are not mere formalities: each addresses a compromise vector documented in experience with comparable systems.

The second authentication factor is kept on a device under the user's exclusive control, without sharing it, photographing it, or storing it in files accessible to third parties. Credentials are never shared under any circumstances, not even among members of the same team, since every action recorded in the system is linked to the authenticated user and forms part of the chain of custody. The active session is closed when stepping away from the workstation, even for brief periods. Any anomalous behavior (unexpected access, unusual alerts, messages requesting credentials outside the usual flow) is reported to the institutional security area without delay. The duties of forensic personnel are often publicly known through subpoenas, official communications, and publications, making them preferred targets of targeted social engineering; verifying the authenticity of any request received through non-institutional channels is an essential practice.

## 6. Personal data protection

Genetic data constitute a particularly sensitive category under the main personal data protection frameworks. Their processing generally requires an explicit legal basis, a declared purpose with limited retention periods, reinforced security measures, and effective mechanisms for data subjects to exercise their rights. GENis provides the technical mechanisms that support these requirements: encryption of sensitive information, separation of cryptographic material per user, detailed logging of accesses and operations, and role-based access control that allows implementing the principle of purpose-based minimization. The legal and organizational decisions that frame the processing (legal basis, identity of the data controller, declared purpose, retention periods, handling of rights requests, international transfers, deletion or anonymization at the close of the case) are institutional and are documented in the records and procedures that each organization maintains in compliance with the regulations applicable to its jurisdiction.

## 7. License

GENis is distributed under the AGPL-3.0 license. In accordance with that license, the software is provided as is, without warranty of any kind, express or implied. The recommendations contained in this annex describe the set of practices under which the system was designed to operate; regulatory compliance in each jurisdiction, the configuration of the deployment environment, the training of personnel with access to the system, and the operational integrity of the service are the responsibility of the institution that deploys and operates GENis.

The project's development team commits to maintaining the codebase under principles of open science and reproducibility, to addressing reported vulnerabilities through a documented responsible-disclosure process, and to publishing patches and new versions following the project's improvement plan.

This annex is reviewed with each major GENis version and, in any case, at least annually.

## References

- GNU Affero General Public License, version 3. Free Software Foundation, 2007. https://www.gnu.org/licenses/agpl-3.0.html
- OWASP Application Security Verification Standard (ASVS), current version. Open Web Application Security Project. https://owasp.org/www-project-application-security-verification-standard/
- ISO/IEC 27001: Information security management systems, requirements. International Organization for Standardization.
- European Network of Forensic Science Institutes (ENFSI), Guidelines for Best Practice in DNA Analysis. Current version.
