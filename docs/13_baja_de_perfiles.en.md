# 13. Profile deactivation

## Profile deactivation

Every deactivation in GENis is logical, never physical. This means the record is not physically deleted from the database, but rather marked as inactive. A deactivated profile no longer takes part in searches, matches, replications, or automatic processes, but remains stored internally to ensure traceability, auditing, and the system's history. This procedure is consistent with international best practices for criminal genetic databases, where the physical deletion of information is not permitted for legal, technical, and quality-control reasons. The result of deactivating a profile is that it no longer takes part in search processes.

To deactivate a profile, from the menu go to Profiles/Profile List and click the button

![](images/sec13/p115_f01.png)

A dialog box appears in which the following data must be filled in:

The person requesting the deactivation and the reason must be entered.

The reason is a configurable list that can vary by laboratory.

The **Other** option enables a text box where you can enter more detail about the deactivation:

![](images/sec13/p116_f01.png)

When clicking the button to finalize the profile deactivation, the user must re-enter their TOPT code and accept:

![](images/sec13/p116_f02.png)

![](images/sec13/p117_f01.png)

## Considerations regarding the expiration date

The "Expiration Date" is **informational data** intended for the administrative management of the profile. GENis **does not perform automatic deactivations**, does not generate alerts, and does not execute any action when the profile reaches that date.

Control of this field is the sole responsibility of the user or the responsible node, and the deactivation of the profile must be performed manually through this module when appropriate. The expiration date has no functional link to the deactivation process or to other internal system processes.

## Considerations to keep in mind when deactivating a profile:

For Forensic:

- If there are pending matches associated with the deactivated profile, they are resolved as usual, even though the profile is deactivated.
- If there are pending scenarios generated that are associated with the deactivated profile, they are resolved normally.
- A profile with a scenario pending validation cannot be deactivated.
- The deactivation of a profile is not replicated between instances.
- The goal of deactivating a profile is that it no longer takes part in searches. A deactivated profile is not editable, but it can still be accessed to view its details.

For MPI/DVI:

- A profile cannot be deactivated if the following conditions apply:
  - *The profile is associated with a scenario.*
  - *The profile is associated within a case.*
  - *The profile is associated with a pedigree in Active status.*
  - *The profile has a pending match.*
