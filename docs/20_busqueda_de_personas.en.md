# 20. Missing persons search

## Missing persons search

This chapter covers two modules:

- Missing Persons Search (MPI)
- Disaster Victim Search (DVI)

Person investigations are situations in which the genetic profiles of certain human remains are compared against profiles obtained from many different biological samples, which introduces a level of complexity that goes beyond the challenges of conventional kinship analysis in forensic science.

## Creating a case

The first step in working with pedigrees is to register a case.

To generate a new case, within the MPI/DVI menu, click the **New Case** button:

![](images/sec20/p178_f01.png)

When creating a new case, a screen opens on the Case Data tab, where two mandatory fields must be completed:

- **Case code:** the name that identifies the case. It must be unique, meaning there cannot be two cases with the same name (even if the case is in the Deleted status).
- **Case type:** MPI or DVI. Depending on what is entered in this field, the case's tabs change:

![](images/sec20/p179_f01.png)

For MPI, the following tabs are available:

- Case Data
- Reference Profiles
- Pedigree
- Match Manager

For DVI, the following tabs are available:

- Case Data
- Reference Profiles
- NN Post-Mortem Profiles
- Remains Grouping
- Match Manager
- Pedigree

The details of each tab are covered in the following chapters.

Once the case is created, it appears in the case list, on the main screen of the MPI/DVI menu:

![](images/sec20/p180_f01.png)

By default, cases in the Open status are shown. You can filter by status, case type, and case code (you do not need to type the full code — entering part of it performs the search).

To enter the case, click the ![](images/sec20/p180_f02.png) eye icon, which allows you to open the case.

Once the case is saved, the tabs can be filled in and the metadata entered. The Case Code and Case Type remain in a read-only status and cannot be modified:

## Case statuses

There are three possible statuses a case can go through:

- **Open:** the initial status the case is in when created, and the one it remains in while it is being worked on. From the Open status, it can move to the Deleted or Closed status.
- **Closed:** To close a case, click the Close button in the case list. None of the pedigrees belonging to the case may have pending matches; otherwise, the case cannot be closed and a warning message will appear indicating there are pending matches. If there are no pending matches, the following warning message will appear before proceeding to close the case:

![](images/sec20/p181_f01.png)

Keep in mind that if the option to deactivate the profiles associated with the case is checked, they will only be deactivated in the database if they are not associated with other cases and have no pending matches.

When a case is in the **Closed** status, no action can be taken on it — it remains read-only. All the information it contains can still be viewed.

**Deactivate:** There is a **Deactivate** option that removes the case. To be able to deactivate a case, the following conditions must be met:

- There must be no pending matches
- There must be no pedigrees in the **Confirmed** status.

Before deactivating it, a warning message appears (the same message shown when closing a case), and if the **Deactivate profiles associated with the case** option is checked, they will only be deactivated in the database if they are not associated with other cases and have no pending matches.

When the case is deleted, it appears grayed out in the list, with no possibility of accessing it.

## Case metadata

Within a case, on the **Case Data** tab, you can add metadata.

To add metadata, click the **New** button, and the following screen appears:

![](images/sec20/p183_f01.png)

The **Alias** field is mandatory and not editable. The alias is unique — you cannot have two identical aliases within the same case.
Clicking **View/Edit data** allows you to add more information.

Within the **Information on the person being sought** box, the list of all metadata loaded for the case appears. Records are sorted by the alias field.

## Information on the person being sought / family group

The "Information on the person being sought / family group" section allows descriptive metadata for the MPI case to be recorded, linked to the person of interest and their family context.
This information serves an **administrative, documentary, and traceability function**, and is intended to facilitate the organization, understanding, and follow-up of the case by the system's users.
The data entered in this section **does not take part in the automatic search processes**, nor in building the pedigree, nor in the LR calculation, nor in the generation or validation of matches.
Its use is exclusively informational and non-genetic.
However, this metadata is relevant as **contextual support** for the human interpretation of results and for internal or external audits, allowing the objective and scope of the case to be understood.

![](images/sec20/p184_f01.png)

## Associating profiles with a case

The next step, after the case has been created, is to associate the profiles that will be used when the pedigree nodes are generated.
Depending on the case type (MPI or DVI), the following tabs are available for associating profiles:

**MPI**

- Reference Profiles

**DVI**

- Reference Profiles
- NN Post-Mortem Profiles

These tabs allow you to associate the profiles that can then be assigned to the pedigree nodes.

## Reference profiles tab

This tab only allows you to associate profiles belonging to the following categories:

**For MPI**

- Person seeking to learn their biological identity. (INNV Individual)
- Reference Individuals (IR)

**For DVI**

- Reference Individuals (IR_DVI)

You can associate a specific profile or an entire batch.

## NN post-mortem profiles tab

For the DVI case type, in addition to the Reference Profiles tab, there is the NN Post-Mortem Profiles tab.

This tab allows you to associate profiles belonging to the DVI Post Mortem categories:

- Personal items found belonging to the missing person (ENN)
- Unidentified biological remains (RNN)
- Unidentified deceased persons (INN)
- Deceased persons whose identity is to be analyzed (PFNI)

## Associating a batch

To associate a batch, click the **Associate Batch** button, and a screen appears that lets you search for the batch by ID or by name:

![](images/sec20/p187_f01.png)

![](images/sec20/p187_f02.png)

Keep the following considerations in mind:

- More than one batch can be associated at a time, as long as they have similar names, e.g.: FAM1, FAM2, since the association is based on what is searched for on screen.
- To make the batch association effective, the checkbox must be checked:
- **Only** (as the caption indicates) Reference profiles will be associated (IR and INNV for MPI, and IR_DVI for DVI); that is, if a batch contains profiles belonging to other categories, only the profiles from the allowed categories will be associated.
- For DVI cases that have both tabs (Reference Profiles and NN Post-Mortem Profiles), profiles will be associated to one tab or the other depending on the category they belong to. Example: if a profile with the ER category is loaded on the **Reference Profiles** tab, this profile will automatically be loaded on the **NN Post-Mortem Profiles** tab.
- Keep in mind that for DVI cases, if there is an active pedigree and a new batch is associated, **only** the profiles corresponding to the **Reference Profiles** tab will be associated. In order for the profiles belonging to the **NN Post-Mortem Profiles** tab to also be exportable, change the pedigree status to **Under Construction**, import the batch, and reactivate them.

## Associating profiles

The same rules that apply to associating a batch apply to associating profiles. To search for the profile to associate, you can search by the following fields:

- GENis Code
- Laboratory Code
- Category ID
- Responsible party

The Associated column indicates whether this profile is already associated with the case, in which case it cannot be associated again. The same profile can be associated with several cases, but a profile that is already associated with a case cannot be associated with it again:
To make the profile association effective, the checkbox must be checked: ![](images/sec20/p188_f01.png)

Keep in mind that profiles already associated cannot be checked again.

## Removing profiles from the case

You can remove a specific profile by clicking the trash-can icon, or select the profiles you want to remove and click the **Remove selected** button:

![](images/sec20/p189_f01.png)

Validations

- A profile that is associated with a pedigree cannot be removed
- Keep in mind that if you want to remove a profile that is a parent (see section **20.22 Remains Grouping**), the children associated with the grouping profile will move to the **Active** status.

## Creating the genogram or pedigree

The next step is to build the pedigree.

To create a new pedigree, go to the **Pedigree** tab within a case, and click the **New Pedigree** button:

![](images/sec20/p190_f01.png)

When entering the pedigree genogram, Mother and Father nodes are generated by default, since these nodes are required by the family algorithm:
The candidate nodes for the mother/father combo boxes are filtered according to the sex of the nodes already entered.

![](images/sec20/p190_f02.png)

The mandatory **Pedigree Name** field must be completed. If this field is not filled in, the **Save** button will remain grayed out.

While the pedigree is in construction mode, the following notice appears: *"This pedigree is in construction mode, and therefore does not take part in searches."*

## Assigning nodes to a pedigree

Assigning nodes within the pedigree allows you to assign profiles that are associated within the case. Depending on the case type, it behaves as follows:

**For DVI:**

- Profiles can be associated both from the **Reference Profiles** tab (IR_DVI) and from the NN Post-Mortem Profiles tab (PFNI_DVI, ENN_DVI, RNN_DVI, INN_DVI) that are within the case. Keep in mind that only profiles in the Active status can be associated (see section **20.22 Remains Grouping**)

**For MPI:**

- Profiles from the **Reference Profiles** tab can be associated.

To associate profiles with the nodes, click the icon, and the list of profiles associated with the case appears:

![](images/sec20/p192_f01.png)

![](images/sec20/p192_f02.png)

This icon also allows you to remove the profile from the node.

Keep in mind that once you start associating profiles with the nodes, that profile stops appearing on the **Profile Search** screen so it cannot be associated again.
The icon indicates that the node has an associated profile:

![](images/sec20/p193_f01.png)

![](images/sec20/p193_f02.png)

To add more nodes, use the last row. Until the "+" is clicked, the graph is not updated.

The pedigree will then be built using graphic tools, following the standard for nodes (e.g.: squares for males, circles for females, etc.).

For the profiles associated with the nodes, the following colors are used:

- Pink to represent female reference profiles.
- Blue to represent male reference profiles.
- Orange to represent DVI Post Mortem profiles:
    - Deceased persons whose identity is to be analyzed
    - Personal items found belonging to the missing person
    - Unidentified biological remains
    - Unidentified deceased persons

## Pedigree status changes

A pedigree can go through the following statuses:

| Action | Initial Status | Destination Status | Is the pedigree editable? | Is the pedigree active in searches? | Is it a manual action? | Description |
| --- | --- | --- | --- | --- | --- | --- |
| Create pedigree | - | Under construction | YES | NO | YES | First status the pedigree is created in |
| Deactivate button | Under construction | Deleted | NO | NO | YES | Can only be done if the pedigree has never gone through the Activated status. If it has already been activated once, this action cannot be performed and the following message will appear: "The pedigree cannot be deleted because it was activated at least once." |
| Activate button | Under construction | Active | NO | YES | YES | Active in searches. Before activating the pedigree, a screen appears with certain information that must be completed (see section 20.15 Search: Pedigree Activation) |
| Edit button | Active | Under construction | YES | NO | YES | This action can be performed if there is no HIT. This status can only be returned to if there are discarded matches. If there are pending matches, the following message will appear: "The pedigree cannot be edited because it has matches that have not been discarded" |
| Close button | Active | Closed | NO | NO | NO | It moves to the Closed status if the following conditions are met: There are no pending matches. It has no Hits |
| Create pedigree | Active | Confirmed | NO | NO | YES | It moves to the Confirmed status when a match scenario is validated. When validating the scenario, a warning message appears with the following confirmation: Should the pedigree remain active in searches? Yes: the pedigree moves to the Confirmed status and a copy of the current pedigree is created in the Active status, named "Copy of original pedigree name". No: it moves to the Confirmed status. The pedigree automatically moves to the Confirmed status, and so does the match. A pedigree can only have one validated scenario. Scenarios generated from the pedigree cannot be validated. |

The **Closed and Confirmed** statuses are final statuses. The pedigree and its scenarios can still be viewed, and a copy can be made, but no modification can be made nor can the pedigree be activated (read-only status).

There are two ways to view the status of a pedigree:

- From the **Pedigree** tab, the list of all pedigrees associated with the case appears, along with a column indicating the status each one is in:

![](images/sec20/p197_f01.png)

Within the Pedigree, information about its current status is available:

![](images/sec20/p197_f02.png)

To delete a pedigree, click the Delete icon within the Pedigree tab:

![](images/sec20/p198_f01.png)

When the pedigree is deleted, it is automatically removed from the case's pedigree list, with no possibility of accessing it again.

## Filters

There are several filters available for searching pedigrees within a case:

- Name: brings up all pedigrees that contain the word entered. You do not need to type the exact pedigree name, since it will bring up all pedigrees that contain that word. Example:

![](images/sec20/p199_f01.png)

- Status: this filter lets you filter by the status the pedigrees are in. The options can be: Under Construction, Active, Confirmed, Closed. Example:

![](images/sec20/p199_f02.png)

- Date From/To: allows filtering by the creation date. Example:
The filters can be combined to search for the desired information.

![](images/sec20/p200_f01.png)

## Consistency check

The consistency check makes it possible to analyze whether the pedigree is consistent, either because the pedigree is incomplete or because the profiles associated with the nodes are not related to one another.

The consistency check can be performed for both case types (MPI and DVI), and to perform it, the pedigree must be in any status other than **Confirmed** or **Closed**.

To run the consistency check, within the case go to the **Pedigree** tab and click the eye icon located in the **Consistency** column:

Illustrative example – Pedigree consistency check

Consider an MPI case in which a simple pedigree is built, made up of a father, a mother, and a child (person of interest), all with autosomal profiles loaded.

During the consistency check, GENis verifies that the pedigree structure is valid (for example, correct assignment of sexes and parental relationships) and evaluates, for each genetic marker, whether the alleles observed in the child can be explained from the parents' genotypes according to the rules of Mendelian inheritance.

For example, if for a given marker the father has alleles 12 and 14, the mother has alleles 9 and 11, and the child has alleles 11 and 14, the marker is compatible and contributes to the consistency of the pedigree.

On the other hand, if the child has alleles that cannot be derived from either parent, the system will detect an inconsistency.

When the pedigree does not have an associated mutation model, direct genetic incompatibilities lead to an inconsistent pedigree result. On the other hand, if a mutation model is configured, certain incompatibilities may be considered within the probabilistic model, affecting the calculated probabilities without necessarily invalidating the pedigree.

The consistency check does not confirm kinship relationships or identities; rather, it makes it possible to verify that the pedigree is genetically viable for use in the probabilistic inference and match search processes of the MPI module.

![](images/sec20/p202_f01.png)

![](images/sec20/p202_f02.png)

On the **Pedigree Consistency** screen, the graph with the nodes is shown, and below it, the allele detail for each of the pedigree's nodes.

Press the **Check Consistency** button, and the result of whether the pedigree is consistent or not automatically appears:

![](images/sec20/p203_f01.png)

If changes are made to the pedigree, the previous consistency check is removed, and the consistency check can be run again on the modified pedigree.

## Search: pedigree activation

To activate a pedigree, click the Activate button within the pedigree:

![](images/sec20/p203_f02.png)

Before activating the pedigree, the following parameters must be specified:

![](images/sec20/p204_f01.png)

- **Run mitochondrial screening:** enables the search using mitochondrial analysis (see details in the next section, 20.16 Mitochondrial Screening)

- **Number of mismatches allowed for mitochondrial:** this parameter is enabled when the Run mitochondrial screening field is checked.

- **LR:** indicates the minimum LR threshold. During the matching process, the LR of the pedigree in question is calculated against all candidate profiles (profiles from pedigree categories other than IR). If that LR exceeds the threshold, the match is reported.
- **Frequency database:** this database is used for the pedigree's matching process.

- **Mutation model:** indicates whether the pedigree will be activated without any model, or allows selecting one of the mutation models:
    - No mutations
    - Equal
    - Stepwise

The same applies when a profile is registered in a pedigree category — it is matched against all pedigrees that are in the Active status (it does not matter if the person is believed to have already been found; that pedigree keeps being compared, just in case).

Note on the continuity of searches

While a pedigree is in the **Active** status, GENis uses it as a query for the match search, both at the time of its activation and each time new profiles belonging to MPI search categories are added.

This behavior allows a pedigree to continue being compared over time, even after a scenario has already been validated, in cases where the user decides to keep the search active. Automatic comparisons stop only when the pedigree moves to a final status (Confirmed or Closed).

The parameters set when activating a pedigree determine the behavior of match searches in the MPI module and must be selected according to the case type and the search objectives.

*Mitochondrial screening* acts as an initial compatibility filter and does not by itself constitute confirmation of kinship. The *number of mismatches allowed* establishes the degree of tolerance in this preliminary comparison.

The *LR threshold* defines the minimum criterion for reporting matches and serves an operational prioritization function, not a definitive expert-interpretation one.

Selecting a *mutation model* allows for the possibility of mutations to be considered in the kinship analysis, which can modify the sensitivity of the search and the LR values obtained.

The conceptual and operational detail of each of these parameters is developed in the corresponding specific sections.

To be able to activate a pedigree, it must first be **Saved** so that the **Activate** option becomes enabled. A *compatibility match* is launched. An LR is calculated against all candidate profiles, and those with an LR greater than the threshold are reported as a match in the *Compatibility* grouping.

When the pedigree is activated, the person search process can be seen starting, and once the search is finished, the following notice appears:

![](images/sec20/p206_f01.png)

![](images/sec20/p206_f02.png)

Once the pedigree is activated, the **View activation parameters** button becomes available, allowing you to see the parameters that were defined when the pedigree was activated:

![](images/sec20/p207_f01.png)

These parameters are for viewing only — they are grayed out and cannot be modified.

## Mitochondrial screening

Within a pedigree belonging to a case, when activating it, there is a checkbox to indicate whether mitochondrial screening should be run, as seen in the previous section.

If this option is checked, the process proceeds as follows:

- Within the pedigree, the system looks for the profile that has mitochondrial analysis loaded (always on the maternal branch); this will be used as the basis for the search (the first one loaded is used).
- Using the analysis from the first step, it is compared against all profiles from the MPI search categories that have mitochondrial analysis loaded.
- For cases that produced a mitochondrial match, or that do not have mitochondrial analysis loaded, the autosomal search is performed.
- Only mitochondrial matches that also produced an autosomal match are saved; the others are discarded.

Within the match detail, there is a **Mitochondrial Analysis** column, where clicking the eye icon shows the detail of the ranges and variations of each profile, marking matches in green.

![](images/sec20/p208_f01.png)

![](images/sec20/p208_f02.png)

### Validations

- If mitochondrial screening is not selected, the search is performed using autosomal analysis only.
- When a new profile from an MPI search category is loaded, it is compared against all active pedigrees, but for those that have mitochondrial screening selected, the mitochondrial comparison is used as a first filter (as long as the new profile has mitochondrial analysis loaded).
- For DVI cases, the **Run mitochondrial screening and Number of mismatches allowed for mitochondrial** checkbox is always grayed out — that is, mitochondrial screening is not used for DVI cases. This decision responds to the nature of the disaster identification process, where the universe of profiles is closed, and where using mitochondrial analysis as an exclusionary filter could lead to the loss of valid associations, especially in contexts of incomplete, degraded, or partial profiles.
- In DVI, mitochondrial analysis may be available as complementary information, but identification is based primarily on autosomal analysis, remains grouping, and the comprehensive evaluation of the genetic evidence within the case.

## Mutations

When the pedigree has an associated mutation model, what is taken into account is whether any of the alleles of the person of interest differs from what it could take, based on the family's alleles, because the possibility that they mutated is considered.

This means the LR can be modified and matches can be generated that, without an associated model, would never have been generated.

The available model types are **Equal** and **Stepwise**. Both allow the **Mutation Rate** to be parameterized, while the Stepwise model also has a **Mutation Range**. All parameters have default values.

To use this functionality, first check the configuration of the **Mutation Models**. To do this, go to the **Configuration/Mutation Models** menu:

To enter a new mutation model, press the **New** button:

![](images/sec20/p210_f01.png)

Fill in the data to generate the new model:

![](images/sec20/p210_f02.png)

![](images/sec20/p210_f03.png)

The **Differentiate by sex** field allows the model to distinguish different mutation rates depending on whether it is male or female, and this can change the LR.

When activating a pedigree, you choose whether to associate a mutation model with it or to activate it without a model.

To modify a mutation model, click the ![](images/sec20/p211_f01.png) icon in the **Modify** column, which gives you access to the configured parameters:

![](images/sec20/p211_f02.png)

## Match manager (matches)

As with Forensic, there is a **Match Manager** for MPI/DVI cases.

Within each case, there is a **Match Manager** tab with the detail of the matches found:

![](images/sec20/p212_f01.png)

When there is a match, a new notification is automatically sent indicating that matches were found. The notification indicates whether the match belongs to an MPI or a DVI case:

![](images/sec20/p212_f02.png)

### Matches for MPI

For MPI cases, there are three ways to access matches:

- Within the inbox, by clicking the notification.
- Within the case, on the Match Manager tab.
- From the Matches/MPI menu.

From the matches menu, the list of pedigrees from all cases in which a match was found appears.

Matches can be viewed by profile or by pedigree:

### Pedigree - profile view

![](images/sec20/p213_f01.png)

**Note:** For the Match Manager within a case, matches can only be viewed by pedigree.

As with the Forensic Match Manager, clicking the arrow on the right, ![](images/sec20/p213_f02.png), shows the match with the highest LR:

![](images/sec20/p214_f01.png)

Clicking the **View all** button brings up the detail of the profiles found:

![](images/sec20/p214_f02.png)

From the case, on the Match Manager tab, only the matches belonging to that case are shown:

![](images/sec20/p215_f01.png)

Pedigree matches do not have a hit — they only have discards. This is because validation for pedigrees is done at the scenario level.

Each match makes it possible to create a scenario (see details on how to create a scenario in the next section).

### Matches for DVI

For DVI cases, keep in mind that when new profiles are entered into the database, matches are not searched for against active pedigrees (as happens for MPI); that is, when a DVI pedigree is activated, the search is performed against the active profiles within the DVI case to which the pedigree belongs.

## Scenarios

Scenarios make it possible to evaluate the probability of the pedigree, or of a subset of it. There are two types of scenarios:

- Scenarios generated from the pedigree
- Scenario to validate the pedigree (when a match occurs)

### Scenarios generated from the pedigree

While a pedigree is in the Active status, N scenarios can be generated, running all the tests considered necessary.

To generate a new scenario, select the nodes you want to generate the scenario from, either from the menu on the left or from the node graph on the right by holding ctrl+click and selecting more than one node:

![](images/sec20/p216_f01.png)

Once the nodes are selected, the **New Scenario** button becomes enabled (stops being grayed out); fill in the short name and description, then press the **Accept** button:

![](images/sec20/p217_f01.png)

Once the **Accept** button is pressed, a new tab is added next to the original pedigree:

![](images/sec20/p217_f02.png)

The PI1, Mother, and Father nodes are copied automatically regardless of whether they were selected or not.

Associate a profile with the person of interest (PI1), and press the **Save** button.

Once a profile is associated, you have the option to change the frequency database and calculate the LR:

The Print button shows a report with the alleles of the profiles, with the option to print it or download a file to your computer.

Example:

There is also the option to delete the scenario by pressing the **Delete** button. Keep in mind that the following profiles can be associated with a scenario:

- For DVI:
    - Only profiles from the NN Post-Mortem Profiles tab within the case can be associated with the unknown.
    - Profiles can be associated in both the Active status and the Grouped status (see details in section 20.22 Remains Grouping)
- For MPI
    - Any MPI category profile can be associated with the unknown, except the IR category.

### Scenario to validate the match

A pedigree can only have one **validated scenario**, which is generated from the matches screen. To add a scenario, within the **Matches/MPI** menu, or within the **Match Manager** of each case, go to the card of the profile that produced the match and click the + icon:

![](images/sec20/p218_f01.png)

Add a name and a description:

![](images/sec20/p219_f01.png)

A new tab is automatically added, which lets you change the frequency database, calculate the LR, and print the profile comparison detail:

![](images/sec20/p219_f02.png)

Keep in mind that for this type of scenario, the person of interest has the matching profile associated with it, which cannot be modified.

To validate the scenario, click the **Validate** button. The

following warning message appears:

![](images/sec20/p220_f01.png)

**Active**, named **Copy "original pedigree name"**.

If that option is not checked, the pedigree simply moves to the **Confirmed** status.

![](images/sec20/p220_f02.png)

## Pedigree copy

Within each pedigree, there is the option to make a copy of it.

To make a copy of a pedigree, first select the nodes you want to copy.

You can select them from the menu on the left by checking the boxes for the nodes you want to copy, or by selecting nodes on the graph using ctrl + click:

![](images/sec20/p221_f01.png)

Once nodes are selected, the **Copy** button is enabled. If nothing is selected, the button will remain grayed out and will become available once **at least one node** is selected.

The person of interest, mother, and father are **always copied** to the new pedigree, even if they were not selected.

Once the **Copy** button is pressed, a new screen opens with the selected nodes. To save the new pedigree, the mandatory **Pedigree Name** field must be completed; otherwise the **Save** button will appear grayed out. The **Cancel** button cancels the pedigree copy and returns to the previous screen of the original pedigree:

![](images/sec20/p222_f01.png)

Once saved, it is automatically added to the list of pedigrees belonging to the case:

![](images/sec20/p222_f02.png)

The new pedigree is created in the first status, which is the **Under Construction** status.

A pedigree copy can be made in any status except the **Deleted** status, since the pedigree cannot be accessed in that case.

Keep in mind that if you are modifying the original pedigree, select the nodes to copy and click the **Copy** button before saving the changes to the original pedigree — these changes will be lost, and a warning screen will appear asking whether you want to proceed with the copy, given that the latest changes will be lost:

![](images/sec20/p223_f01.png)

The **Cancel** button returns to the previous editing screen of the original pedigree, and the Accept button opens the pedigree copy screen.

## Pedigree traceability

Pedigree traceability makes it possible to save certain actions associated with it. The actions that are recorded are the following:

- Status changes
- Match generation
- Discarding/confirming matches
- Editing the pedigree
- Generating scenarios
- Copying the pedigree

To view the traceability of a **Pedigree**, go to the Pedigree tab and press the traceability icon:

![](images/sec20/p224_f01.png)

## Remains grouping (collapsing)

For DVI case types, there is a **Remains Grouping** tab, which allows you to perform collapsing.

**Collapsing** consists of grouping several profiles, leaving only one to represent all of them, taking the most complete one as the **grouping profile**, and leaving the rest of the profiles associated with the main profile in an inactive status.

*Remains Grouping* (*Collapsing*) thus serves an essential function:

1. **Operational consolidation of the case**

GENis makes it possible to *consolidate* several profiles (ENN, RNN, INN, PFNI) that correspond to **the same individual**, so that the system treats that set as **a single primary genetic entity** within the case. This prevents each fragment of the same individual from competing with or being repeatedly compared in the Match Manager.

2. **Organization and noise reduction in the search**

Without collapsing, the search engine would compare each fragmented profile as if it were a different individual.

Grouping prevents:

- Multiplication of irrelevant matches
- False candidates generated by partial profiles
- Saturation of the autosomal compatibility search

3. **Selection of the most informative profile**

The grouping profile acts as a **single representative**, allowing:

- More robust comparisons
- Use of the greatest possible number of available alleles
- Automatic discarding of redundant profiles without deleting them

4. **Preservation of traceability**

All child profiles remain associated with the parent, preserving their original information. This allows:

- Full audit capability
- Later review by experts
- Maintaining the link to the place/condition of discovery

5. **Integration with pedigrees and scenarios**

Only **active** profiles can take part in pedigrees and scenarios. When collapsing, GENis ensures that:

- Only one profile per individual enters the inference process,
- Preventing kinship inconsistencies generated by multiple remains.

This grouping profile **is not an assembly** of parts from incomplete profiles, nor a genetic combination generated by the system. GENis does not merge alleles or build "composite" profiles.

**Criteria used to choose the grouping profile**

The system applies a **structural**, not statistical, criterion, based exclusively on the completeness of the profile:

1. **Number of autosomal markers present.**

The profile with the highest number of informative markers is selected as the grouping profile.

2. **Total number of alleles observed.**

With an equal number of markers, the one with more loaded alleles is chosen.

3. **Internal tie-breaking criterion.**

If two or more profiles have exactly the same completeness, GENis uses an internal ordering (load ID / registration order) to choose a single parent profile.

**Technical note:**

- GENis **does not use allele frequencies**, probabilities, or LR calculations to select the grouping profile.
- The process is **administrative and database management** in nature, not a genetic evaluation.
- Child profiles remain stored and associated, without losing any information or alleles.
- The grouping profile is simply the **most complete** one, not the "most probable" one.

Two types of grouping can be performed: Automatic Grouping and Manual Grouping.

**Automatic grouping** is performed on all profiles loaded in the NN Post-Mortem Profiles tab.

Internally, collapsing is an upload-time matching process.

To run automatic grouping, within the case, go to the **Remains Grouping** tab and click the **Automatic Grouping** button:

![](images/sec20/p227_f01.png)

The following notice will appear indicating the process is running:

![](images/sec20/p227_f02.png)

When the process finishes, a notification is received in the Inbox with the result of the run. There are two possible outcomes:

- No results were found,
- Results were found, and they will appear on the **Remains Grouping** tab.

![](images/sec20/p227_f03.png)

If groupings were found, they can be accessed by clicking the notification or by opening the **Remains Grouping** tab within the case:

![](images/sec20/p228_f01.png)

Pressing the **View more** button gives you access to the detail of each grouping:

![](images/sec20/p228_f02.png)

The arrow in the **Compare** column lets you view the comparison detail between the two profiles:

![](images/sec20/p229_f01.png)

Profile grouping works like a match — that is, the matches for each profile are grouped and represented by a card.

To confirm a grouping, first select which profiles you want to group. To do this, click the checkboxes to select the corresponding profiles:

![](images/sec20/p229_f02.png)

The **Confirm** button will remain grayed out until at least one profile is checked.

Once the grouping is confirmed, the profile on which the confirmation was performed becomes a parent, or grouping, profile, which remains active on the **NN Post-Mortem Profiles** tab. The rest of the profiles remain associated with the grouping profile in a Grouped status:

![](images/sec20/p230_f01.png)

Keep the following in mind when confirming/discarding a collapsing:

- The profile grouping on which the collapsing was confirmed is deleted, as are the groupings in which the child profiles are proposed as grouped (parent) profiles.
- The children of all groupings in which they appear as children are deleted (a child can only have one parent).
- Discarding a grouping only removes that group, without affecting any other (that is, the match would be removed on one profile's side but not on the others').

This way, a profile ends up with two possible statuses:

- **Active:** the status of profiles that are grouping/parent profiles (they have associated child profiles), or profiles that have no associated profiles.
- **Grouped:** the status of child profiles that were grouped (collapsed) — that is, they have a parent profile. A grouped profile behaves like a profile that is disabled, as if it had been deactivated. It will appear grayed out and no action can be performed on it, except moving it back to the Active status (see section 20.22.3 Ungrouping profiles) and associating it with a scenario.

Clicking the eye icon in the **View associated profiles** column shows the profiles associated with the grouping profile:

![](images/sec20/p231_f01.png)

## Manual grouping

Within the **Remains Grouping** tab, click the **Manual Grouping** button, and the following screen appears:

![](images/sec20/p231_f02.png)

![](images/sec20/p232_f01.png)

To perform manual grouping, type the profile code and click the magnifying glass to add the profile. Keep in mind that to be able to add the profile, the GENis code or laboratory code **must be complete**, otherwise you will not be able to add it.

As you add profiles, the laboratory code appears, along with the allele detail for each profile below it.

![](images/sec20/p232_f02.png)

There are **Show differences** and **Show matches** buttons that indicate, in a color (red and green respectively), the alleles where the shared ones differ.

To perform manual grouping, select the grouping profile among the profiles entered, from the **Select grouping profile** combo box.

Keep the following in mind:

- Up to 5 profiles can be added.
- If you add a profile that is already a grouping (parent) profile, it will automatically be proposed as the grouping profile, and the Select grouping profile combo box will remain grayed out.
- If another profile that is also a parent is added, this latest profile becomes the parent (the last parent added is always the parent); you are allowed to add it to the list and see the differences/matches, but when clicking the Group button, the following notice will appear:

![](images/sec20/p233_f01.png)

Remove the rest of the parent profiles by clicking the "X". If you want to change the parent, remove the one currently set as the grouping profile and add the new grouping profile.

- If none of the added profiles are grouping profiles, select the grouping profile from the Select grouping profile menu. This menu contains the list of all added profiles. The **Group** button remains grayed out if there is no grouping profile selected, or until at least two profiles have been added.
- The grouping profile is distinguished from the rest with a purple box.

![](images/sec20/p234_f01.png)

- When clicking the **Group** button, a notice appears confirming that the grouping was performed:

![](images/sec20/p234_f02.png)

- The Back button returns to the Remains Grouping tab.

**Validations**

- When confirming a grouping (either manual or automatic), the child profiles must not be associated with an active or under-construction pedigree — that is, a profile associated with a pedigree cannot be deactivated.
- A grouping cannot be performed with a profile that has a pending match.
- When ungrouping a profile from a group (see next section), or adding a new remains profile, the profile must not be in any active pedigree.

## Ungrouping profiles

Within the **NN Post-Mortem Profiles** tab, **Active** profiles are shown by default. **Grouped** profiles can be viewed by checking the checkbox:

![](images/sec20/p235_f01.png)

For grouped profiles, there is a Grouping Profile column indicating which grouping profile they are associated with (parent profile).

In the list of **Active** profiles, in the **View associated profiles** column, the eye icon lets you view information about the related grouped (child) profiles, for Active profiles that have children. If an Active profile has no associated child profiles, the icon will remain grayed out:

![](images/sec20/p235_f02.png)

To ungroup profiles, click the eye icon, and a new screen appears with the associated profiles:

![](images/sec20/p236_f01.png)

This screen lets you ungroup profiles one at a time by clicking the trash-can icon, or use the **Ungroup all** option (which ungroups all child profiles on the tab). When this action is performed, the ungrouped profiles become active profiles.

**Validations**

- A profile that is associated with a pedigree cannot be removed.
- If a new grouping (collapsing) is performed again, it will only be run on Active profiles — that is, new children can be added to already existing parents.
- The parent cannot be changed. If you want to change it, you must remove the profile from the case and associate the children with the new parent.
