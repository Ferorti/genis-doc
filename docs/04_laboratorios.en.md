# Laboratories

GENis's architecture allows it to be used not only in central or reference laboratories, but also in **decentralized operational instances**, configured as nodes within a network.

This design enables the deployment of GENis in **rapid-processing laboratories**, such as those located at **border crossings**, **airports**, **ports**, **mobile units**, or **rapid-response centers**, where it is necessary to perform preliminary genetic comparisons within short timeframes.

In these contexts, the lower-level instance can operate with a limited set of roles and categories, allowing the upload of profiles, the execution of local searches, and the early detection of matches. The relevant profiles can subsequently be **replicated to a higher-level instance**, where the consolidation, validation, and comprehensive analysis of the information take place.

This decentralized scheme does not replace the central instances, but rather complements them, allowing a **rapid response in the field** without compromising the traceability, security, or overall consistency of the genetic database.

The definition of user roles, enabled categories, and search rules in these operational instances must comply with the regulations in force and the institutional protocols of each jurisdiction, ensuring that final decisions and conclusive expert analyses are carried out at the corresponding levels.

To do this, they must be registered through the **Configuration/Laboratories** menu. On the **New Laboratory** tab, all its data can be entered:

![](images/sec04/p034_f01.png)

![](images/sec04/p034_f02.png)

![](images/sec04/p035_f01.png)

The code is a unique identifier for each laboratory that will be used to generate the internal genetic profile codes in GENis, ensuring their uniqueness.

For each laboratory, the Drop-in and Drop-out parameters that will later be used for the default LR calculations must be defined.

On the Laboratories tab, you can access the list of existing laboratories:

![](images/sec04/p035_f02.png)

To change a laboratory's data, click the **Modify** button ![](images/sec04/p035_f03.png) and save the changes by clicking **Save**:

![](images/sec04/p036_f01.png)

The profile identification code in GENis is made up of a prefix and a sequential number.

The prefix includes the laboratory code defined by the user, together with other identifiers specific to the system configuration (such as country or instance).

For example, in a code such as AR-A-SBMCIF-XXXX, "SBMCIF" corresponds to the laboratory code (suggested by the laboratory), while the rest of the prefix is generated automatically by the system.
The numeric suffix (XXXX) is assigned automatically and sequentially by GENis for each new profile. This ensures the unique identification of each profile within the system.
