# RAID configuration

1.- To configure a RAID scheme on a new Linux installation, manual disk and partitioning scheme configuration must be chosen

![](images/sec05/p045_f01.png)

2.- Each of the disks must be selected and an empty partition created on it, so that they can later be added to a new RAID scheme

![](images/sec05/p045_f02.png)

![](images/sec05/p046_f01.png)

3.- Once the partitions have been created, a new RAID must be created based on the disks installed in the Server.

![](images/sec05/p046_f02.png)

4.- We must indicate that we want to save the changes and continue with the configuration

![](images/sec05/p047_f01.png)

5.- We will indicate that we want to configure a new multiple device (MD) scheme

![](images/sec05/p047_f02.png)

6.- Depending on the type of array we want to configure, we must choose among the different RAID types offered by the wizard; for the purposes of this document it will be a RAID 5

![](images/sec05/p048_f01.png)

7.- The number of disks that will take part in it must be indicated; for a RAID 5, a minimum of 3 disks is required

![](images/sec05/p048_f02.png)

8.- The number of "spare devices" must be indicated; for the purposes of this document the value will be 0

![](images/sec05/p049_f01.png)

9.- All the disks that will take part in the array must be selected; at this stage all the disks connected to the Server, whether physical or virtual, are displayed

![](images/sec05/p049_f02.png)

10.- The changes made in the previous steps must be confirmed

![](images/sec05/p050_f01.png)

11.- We must indicate that we have finished the RAID configuration section; from this point on we will see a virtual volume, which is the sum of the selected physical devices

![](images/sec05/p050_f02.png)

12.- We will select the guided partitioning option

![](images/sec05/p051_f01.png)

13.- We will select the option to use the entire disk together with the volume encryption option

![](images/sec05/p051_f02.png)

14.- We will select the device shown first in the list, which corresponds to the RAID array created in the previous steps

![](images/sec05/p052_f01.png)

15.- The option "all files in one partition" must be selected

![](images/sec05/p052_f02.png)

16.- We will confirm that we want to save the changes for this configuration

![](images/sec05/p053_f01.png)

17.- The wizard will perform a security wipe of the volumes before starting to copy the files; this step can be skipped since it takes a while to complete, but it is the safest option

![](images/sec05/p053_f02.png)

18.- We will be asked for the passphrase to decrypt the volume every time the machine starts. It is advisable to use a non-trivial password

![](images/sec05/p054_f01.png)

19.- Once the previous steps are completed, a summary of the entire configuration to be applied to the volumes will be presented; if we are satisfied, we accept it so that the changes are made

![](images/sec05/p054_f02.png)

![](images/sec05/p055_f01.png)

20.- Once the changes are confirmed, the file copy will begin and the installation will proceed normally, as if we were performing a standard-type installation.

![](images/sec05/p055_f02.png)

21.- Toward the end of the installation, in the section asking on which device the boot loader (GRUB) will be installed, the device named SBA must be indicated; in later steps this boot loader will be installed on each disk that is part of the array. This allows the system to boot from any of the disks that remain functional if one device fails

![](images/sec05/p056_f01.png)

![](images/sec05/p056_f02.png)

22.- The installation finished successfully and we need to restart the Server; as with a normal installation with encrypted volumes, we will be asked for the password in order to mount the volume

![](images/sec05/p057_f01.png)

![](images/sec05/p057_f02.png)

23.- We can check the RAID status at any time with the following command:

```bash
sudo mdadm -D /dev/md0
```

![](images/sec05/p058_f01.png)

24.- As indicated in previous steps, the boot loader (GRUB) must be installed on each of the disks that are part of the array; this is done with the following command:

```bash
sudo grub-install /dev/xxx
```

Note: where xxx is the name of each device

![](images/sec05/p058_f02.png)
