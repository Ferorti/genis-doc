This section describes how GENis works and its main functionalities, organized by operational modules.


## User management and access control

This module allows administering access to the system and ensuring that operations are carried out only by authorized users.


- Requesting, activating and deactivating user accounts.
- Login and credential management.
- Two-factor authentication (TOTP).
- Password reset.
- Logging and auditing of system access.



## Role and permission management

Defines the access profiles and actions allowed within the system, according to the responsibilities assigned to each user.

- Creation, modification and deletion of roles.
- Assignment of permissions associated with each role.
- Access control for the system's different functionalities according to the assigned role.


## Institutional configuration and system catalogs

This module allows parameterizing GENis according to the institutional and forensic context in which it is used.

- Laboratory management.
- Management of geneticists and technical actors.
- Management of biological material types.
- Management of categories and subcategories.
- Definition of search rules.
- Management of genetic analysis kits.
- Management of genetic markers, including microvariants and off-scale allelic values.
- Management of frequency databases.

**Note**: In the missing persons search (MPI) and disaster victim identification (DVI) modules, there are predefined categories that cannot be deleted or modified.


## Genetic profile management

Allows registering, storing and administering human genetic profiles and the information associated with them.

- Creation of genetic profiles.
- Loading of autosomal analyses.
- Loading of mitochondrial analyses.
- Association of profiles with evidence.
- Tagging of evidence.
- Bulk loading of profiles.
- Multi-level approval workflows.
- Rejection of profiles.
- Deactivation of genetic profiles.


## Profile comparison and search

Provides automatic mechanisms for contrasting genetic profiles stored in the system.


- Comparison of genetic profiles.
- Automatic match search.
- Support for multi-level comparison schemes (local, regional and national).


## Match and forensic result management

This module allows analyzing, reviewing and administering the results derived from genetic comparisons.


- Viewing of detected matches.
- Management of match statuses.
- Association of matches with different forensic scenarios.
- Access to associated statistical results.
- Notification of geneticists when matches are detected.


## Export and exchange of information

Facilitates the controlled export of genetic profiles and associated information, in accordance with institutional configurations.


- Export of genetic profiles.
- Export of associated information for institutional exchange.



## Specialized identification modules (MPI and DVI)

GENis incorporates specialized modules for specific forensic scenarios, with their own functionalities and restrictions.

---

### Missing Persons Identification (MPI)

The **Missing Person Identification (MPI)** module is aimed at the search for and identification of missing persons through the comparison of genetic profiles.

#### Particulars
- Management of reference profiles and profiles associated with missing persons.
- Genetic comparison within the framework of missing-persons search investigations.
- Use of categories and rules specifically defined for this type of case.
- Restrictions on the modification of predefined categories.

>[Link to the scientific publication](https://www.sciencedirect.com/science/article/pii/S1875176822000506)

---

### Disaster Victim Identification (DVI)

The **Disaster Victim Identification (DVI)** module is designed to operate in disaster scenarios with multiple victims.

#### Particulars
- Management of genetic profiles associated with disaster victims.
- Systematic comparison of profiles in mass-identification contexts.
- Use of specific categories adapted to DVI scenarios.
- Explicit restrictions on the modification of predefined categories and structures.

>[Link to the scientific publication](https://www.sciencedirect.com/science/article/pii/S2665910720300815)

---

## Auditing, traceability and information integrity

This module guarantees the control and traceability of operations performed within the system.

- Detailed logging of actions performed by users.
- Separation between operational information and audit data.
- Complete traceability of system operations.
- Optional mechanisms for verifying profile integrity through cryptographic signatures and immutable records.

