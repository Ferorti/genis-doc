# System requirements

## Equipment requirements

### Minimum requirements for the GENis server machine

GENis requires at least one (1) physical computer or virtual machine with the following characteristics:

- Processor:
  - 1 Intel Xeon 2 GHz (minimum) dual-core or equivalent.
- Memory:
  - Minimum Required: 3 GB RAM
  - Minimum Recommended: 12 GB RAM
- Storage:
  - 32 GB reserved for the OS and base applications.
  - 250 GB for data storage.
- Connectivity:
  - 1000 MB/s Fast Ethernet network card
- Removable storage:
  - USB port.

If a machine with these characteristics is not available, and the acquisition of new equipment is being considered, it is advisable to consider the recommended requirements below. Although these exceed the requirements mentioned above, the higher specifications will allow for a better experience with the product, as well as preparing it for the final product's recommended requirements.

### Recommended system requirements for GENis

GENis works best on a machine with the following characteristics:

- Processor:
  - Intel Core i5 or Xeon E3-1200 v3 @ 3.4 GHz with four cores or equivalent.
- Memory:
  - 12 GB RAM
- Storage:
  - 1 volume of between 1 and 5 TB effective in hardware / software RAID 5, depending on usage

**<u>Important note – Storage sizing criteria:</u>**

At the time this document was written, the average size of an object (profile/analysis) in a simulated laboratory instance is around 2 to 3 MB, depending on the storage of images (e.g. electropherograms, photos, fingerprint images, etc.).

Based on the above consideration, the following criteria is proposed for calculating storage space:

```text
1 registro ...................................................................................... 3 MB
1.000 registros .............................................................................. 3 GB
1.000.000 registros ....................................................................... 3 TB
```

- Connectivity:
  - Gigabit Ethernet network card
- Removable storage:
  - USB port.

### Additional equipment requirements for using GENis

Since the GENis v1 application uses a two-factor system for authenticating system users (Google Authenticator or FreeOTP), it is an additional requirement that **<u>each person who will use it</u>** (that is, each system user) have a device — a smartphone — capable of running the mobile app that turns the phone into a password-generating device. In GENis, this is achieved by using one of two possible applications: the first is Google Authenticator, the second is FreeOTP.

- Requirements for Google Authenticator:
  - **Android phones:** Android version 2.1 or higher.
  - **iPhone, iPod Touch, or iPad:** Apple iOS version 5.0 or higher.
- Requirements for FreeOTP:
  - **Android phones:** Android version 4.0 or higher.
  - **iPhone, iPod Touch, or iPad:** Apple iOS version 7.0 or higher.
