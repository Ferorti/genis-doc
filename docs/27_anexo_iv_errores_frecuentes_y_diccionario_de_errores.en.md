# Annex IV: Frequent errors and error dictionary

During the day-to-day operation of GENis, error messages may appear related to internal system validations, status restrictions, user permissions, or inconsistencies in the data entered. These messages serve a preventive and control function, aimed at preserving the integrity of the database, the traceability of profiles, and the scientific consistency of searches and comparisons.

This annex brings together a **list of the most frequent errors observed in practice**, with a brief explanation of their operational meaning and the context in which they usually appear. This list does not replace the system's complete technical documentation, but rather serves as a **quick reference guide for the user**, making it easier to identify the problem and make appropriate decisions.

For the complete and up-to-date detail of all error messages defined in GENis, refer to the **official error dictionary** available in the project's public repository, which constitutes the primary source of technical reference.

## Most frequent errors

**1. E0101 – Profile not found**

Indicates that the requested profile does not exist in the database or is not accessible to the current user. It usually appears when trying to modify, associate, or delete a nonexistent or already deregistered profile.

**2. E0104 – Cannot transition from status {0} to status {1}**

Status transition error. Occurs when attempting to change the status of a profile or entity without meeting the prior conditions required by the system.

**3. E0106 – Cannot update a profile in status {0}**

The profile is in a status that prevents modifications (for example, associated with active matches, scenarios, or pedigrees).

**4. E0112 – Cannot add analyses to a profile with confirmed or pending matches**

Protects the integrity of matches already generated. Requires resolving the matches first before modifying the profile.

**5. E0126 – The profile is associated with an active or under-construction pedigree**

Prevents the deletion or modification of profiles participating in pedigrees in use within the MPI/DVI module.

**6. E0129 – The profile has pending MPI/DVI matches**

Indicates that there are matches not yet ruled out or confirmed, blocking certain operations.

**7. E0201 – The pedigree has no frequency database associated with it**

A common error when activating a pedigree without having previously configured the population frequency database required for the calculation.

**8. E0204 – The user does not have permission to confirm the match**

Authorization error. The user's role does not enable the requested action.

**9. E0211 – The case contains active pedigrees**

Prevents closing or deregistering a case that still has pedigrees in active status.

**10. E0302 – The format of the lines does not match the header**

A typical error in bulk uploads. Indicates an inconsistency between the file's structure and its header.

**11. E0305 – Missing parameters in the file header**

The bulk upload file does not contain all the mandatory fields.

**12. E0610 – The default statistical options are not configured**

Indicates that the minimum statistical configurations needed for automatic searches or calculations are missing.

**13. E0643 – The user does not have permission to modify the pedigree**

Restriction based on role or on the pedigree's status.

**14. E0724 – The higher-level instance rejected the profile**

Interconnection error between instances. The profile does not meet the defined replication criteria.

**15. E0802 – The session is invalid or has expired**

Authentication error. Requires logging in again.

The complete official dictionary of GENis error messages, updated and maintained by the development team, is available in the project's public repository on GitHub:

https://github.com/fundacion-sadosky/genis/blob/main/conf/messages

This repository contains the exhaustive definition of all error codes, warnings, and informational messages used by the system, and should be considered the primary source in case of technical questions or situations not covered in this annex.
