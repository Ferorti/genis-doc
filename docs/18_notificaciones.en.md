# Notifications

## Notifications

GENis has a notifications inbox. It is an envelope icon located on the right side that shows the number of pending notifications.

To access the notification details, click on the envelope icon:

![](images/sec18/p169_f01.png)

As notifications arrive, the number on the envelope is updated.

In GENis, most notifications indicate that the user has a pending action. Until the pending action is carried out, the notification will remain in bold.

You can flag notifications that are important:

![](images/sec18/p169_f02.png)

To delete notifications, select the notifications you want to delete and click the **Delete selected** button.

## Advanced search and filters

Several filters can be applied to notifications.

The following checkboxes are available to apply a filter:

- **Pending**: shows all notifications that have a pending action.
- **Flagged**: shows notifications that were flagged as important.

Example of pending notifications:

![](images/sec18/p170_f01.png)

You can filter by a date range (from/to date) and by notification type. Example of notification type **Profile association**:

![](images/sec18/p170_f02.png)

### Notification types

There are different types of notifications, and depending on the type, they are identified with a different color.

Below are the notification types, the required actions, and when the notification is resolved (in case it has an associated action):

**General**

- **Users:** generated when a new user requests access to GENis or resets their password. It is resolved when access is granted. It is identified with a green color.
- **Bulk upload:** generated when a profile is entered in step 1 of the bulk upload, and it is resolved when it is approved in step 2. It is identified with a purple color.
- **Profiles:** generated when a profile is added to the database and does not yet have genetic data. It is resolved once an analysis is added to it. It is identified with a blue color.

**Forensic**

- **Profile association:** generated when a candidate profile for association is entered. It is resolved when the profile is associated. It is identified with an orange color.
- **Matches:** generated when a new match is found, and it is resolved when it is hit or discarded. It is identified with a violet color.

**Missing persons search**

- **Person matches:** generated when a new match is found in the missing persons search process. It is resolved when the scenario associated with this match is validated. It is identified with a purple color.
- **Pedigree scenario:** generated when the LR calculation in a pedigree scenario is completed. It is identified with a blue color.

**DVI remains grouping:**

- **Grouping search completed:** generated when an automatic grouping is performed for a DVI case and groupings were found. It is identified with a green color.
- **No groupings found:** generated when an automatic grouping is performed for a DVI case and no groupings were found. It is identified with a green color.

**Instance interconnection**

- **Lower instance:** generated when a lower instance is pending approval from a higher instance. It is identified with a gray color.
- **Match/Discard/Hit notifications:** this is the same notification as Match. Owners of the profiles that had a match/discard/hit are notified, as well as the administrator of the Higher Instance.
- **Match confirmation:** generated when a match is confirmed. The owner of the profile of the instance with which there was a match is notified, as well as the administrator of the Higher Instance. It is identified with a violet color.
- **Match discard:** generated when a match is discarded. The owner of the profile of the instance with which there was a match is notified, as well as the administrator of the Higher Instance. It is identified with a violet color.
