# Base system installation

## Information required before starting the installation

Before starting the installation, it is advisable for the installer to gather the following information from the lab manager or their technical contact.

- Indicate whether the lab network has a DHCP server.
- Indicate whether the lab network has an internal DNS server.
- Indicate the (fixed) IP address to be used by the GENis server.
- Indicate the network parameters (subnet mask, gateway) used on the lab network.
- Indicate whether the lab network uses a proxy server to access the Internet.
- Indicate whether the lab network has a host naming scheme. What is it?
  - Indicate the hostname chosen by the technical contact.
- Indicate who will take on the role of system administrator.
- Indicate who will define the usernames and passwords for the services.

Additionally, if the lab has Internet access and the installation is to be carried out this way, keep the following information in mind:

- Indicate whether the proxy server requires a username and password to allow traffic through.

Finally, if the installation will be carried out using optical media, or there is no Internet access, the following specific information must be gathered beforehand:

## Installing the Debian Operating System

Debian Operating System images are distributed in two formats, CD and DVD. The images can be obtained from various sources, either as a direct download or via P2P download tools using the BitTorrent protocol.

For the purposes of this document, it is assumed that the lab manager has received or downloaded a full DVD set of the Debian 9.4 release images and/or an installation CD that allows the installation to be carried out by downloading the packages from the Internet during the installation process.

While the process does not vary greatly between the two, there are benefits and trade-offs to each procedure. The choice of procedure will depend on the characteristics of each lab.

### Installing the Debian Operating System from the Internet

1.- Insert the installation DVD or USB device labeled **“debian-9.4.0-amd64-netinst.iso”** into the machine or virtual machine.

<u>**Note:**</u> Make sure the machine's BIOS settings are configured so that the system boots from the optical drive. This varies from machine to machine.

2.- When the computer boots, the Welcome screen is displayed. Select the Install option (*Graphical install*) and press **[Enter]**.

![](images/sec03/p008_f01.png)

3.- On this screen, select the language to use during the system installation. Choose the one you prefer and press **[Enter]**. You can choose any language, since this choice does not change the language of the operating system itself. For the purposes of this document, English will be selected.

![](images/sec03/p009_f01.png)

5.- Select the continent of the country where the installation is being carried out. In this case, South America, and press **[Enter]**.

![](images/sec03/p009_f02.png)

6.- Select the country where the installation is being carried out. In this case, Argentina, and press **[Enter]**.

![](images/sec03/p010_f01.png)

7.- Since the Debian installer does not include a specific locale definition for Argentina, the program offers several alternative options. In this case, take the default option (*United States – en_US.UTF-8*) and press **[Enter]**.

![](images/sec03/p010_f02.png)

8.- Select the keyboard layout that matches the keyboard you are using for the installation and press **[Enter]**.

<u>**Note:**</u> For the purposes of this document, a Spanish keyboard layout will be selected.

![](images/sec03/p011_f01.png)

9.- The installer will attempt to auto-configure the network parameters before continuing. Wait until it finishes.

![](images/sec03/p011_f02.png)

<u>**Note:**</u> Depending on network conditions (i.e., whether the server detects the presence of a DHCP server), auto-configuration may not work, and a screen to configure the server's network parameters may appear instead. In any case, this can be changed after the installation is complete.

10.- Select a name to identify the machine on the network. Take into account any naming scheme that exists on the lab network and apply the existing convention. Delete the name offered by the installer (debian) and type in the chosen name. Press **[Enter]** to continue.

<u>**Note:**</u> For this document, **“GENis-Host”** will be used as the machine name.

![](images/sec03/p012_f01.png)

11.- Select and type the name of the domain the machine will belong to. If the lab network has a DNS server for local name resolution, it is advisable to configure this domain name so that it matches the local domain of the lab network. If there is no local name resolution, this parameter is not relevant and can be set to any non-routable domain name. Press **[Enter]** when done.

<u>**Note:**</u> For the purposes of this document, no domain name will be specified.

![](images/sec03/p013_f01.png)

12.- Set the password for the privileged user (i.e., the “root” user). Keep this password safe for future use during configuration. Once configuration is complete, change the password (explained further below) and store it in a secure location. Press **[Enter]** to continue.

<u>**Note:**</u> For the purposes of this document, no root user password will be specified at this step.

![](images/sec03/p013_f02.png)

14.- Set the full name for the system's first user. This user is a regular (non-privileged) user for operating the system. For deployment purposes, this is a user that will be used to carry out configuration tasks and, later, to administer the system. Press **[Enter]** to proceed.

<u>**Note:**</u> For the purposes of this document, **“Usuario de GENis”** will be used as the user's full name.

![](images/sec03/p014_f01.png)

15.- Set the username for this user. When done, press **[Enter]** to continue.

<u>**Note:**</u> For the purposes of this document, ***“genis-user”*** will be used as the username for this account.

![](images/sec03/p014_f02.png)

16.- Set the password for this user (in this case “*genis-user*”). When done, press **[Enter]** to proceed.

<u>**Note:**</u> For the purposes of this document, ***“genis-demo-install”*** will be used as the password for the “*genis-user*” user.

![](images/sec03/p015_f01.png)

19.- The screen for configuring the storage partitioning scheme is displayed. Select the option to have the system guide the process by setting up logical volume management with encryption (*Guided – use entire disk and setup encrypted LVM*) and press **[Enter]**.

![](images/sec03/p015_f02.png)

20.- Select the disk to use for the installation and press **[Enter]** to continue.

<u>**Note:**</u> This selection will largely depend on the deployment scenario. If there is more than one disk, select the one with the largest amount of available space. Since only one disk is available for the purposes of building this document, the selection is trivial.

![](images/sec03/p016_f01.png)

21.- Select the scheme with all files in a single partition; while the LVM partitioning scheme is more recommended for dealing with space issues via volume manipulation on machines with plenty of storage, it is not required.

Using one partitioning scheme or the other does not affect how GENis operates.

![](images/sec03/p017_f01.png)

22.- Confirm the selection so that the installer writes the partition scheme and applies the changes to the disk. To do this, select the **<Yes>** option and press **[Enter]**.

![](images/sec03/p017_f02.png)

23.- The system will initialize the disk and write the partition configuration. Wait…

![](images/sec03/p018_f01.png)

24.- In order to implement disk encryption, the system requires a passphrase. Choose a passphrase of at least 20 characters. It is advisable that it have some meaning so it can be remembered easily. Enter the phrase in the text field and press **[Enter]** to continue.

<u>**IMPORTANT:**</u> It is important not to forget this passphrase, since it is required to boot the system every time the server is shut down or restarted. If strictly necessary, write it down and store it in a secure location.

<u>**Note:**</u> For the purposes of this document, ***“genis-demo-install-encripcion”*** will be used as the passphrase for unlocking the disk.

![](images/sec03/p018_f02.png)

26.- The installer presents the proposed partition scheme based on the options chosen. While the scheme presented is likely to be adequate, in any case, check that the volumes meet the sizing criteria and/or comply with the minimum requirements (see below). Once you have confirmed that the scheme is adequate, accept the partition proposal (*Finish partitioning and write changes to disk*) and press **[Enter]**.

![](images/sec03/p019_f01.png)

28.- The installer will proceed to format the disk, create the logical volume, and assign the selected partitions. After this, it will begin installing the packages that make up the kernel and core files of the Base Operating System. This operation may take several minutes depending on the speed of the machine. Wait…

![](images/sec03/p020_f01.png)

![](images/sec03/p020_f02.png)

29.- Depending on the installation method chosen (in this case, installation from the Internet), once the volume formatting is complete and the operating system kernel is installed, the installer will ask where to fetch the remaining packages from in order to complete the operating system installation. Select the option corresponding to Argentina and press **[Enter]** to continue.

![](images/sec03/p021_f01.png)

30.- Select the closest mirror to download the installation files from. For Argentina, any of the options is equally valid. Press **[Enter]** to continue.

<u>**Note:**</u> For the purposes of this document, the mirror hosted at the Centro de Comunicación Científica of the UBA will be used (*ftp.ccc.uba.ar*).

![](images/sec03/p021_f02.png)

31.- If the lab network uses some kind of HTTP proxy server to access the Internet, enter its address in the field provided and press **[Enter]**. If no such proxy server is used, simply skip this step by pressing **[Enter]**.

![](images/sec03/p022_f01.png)

32.- We will be asked which packages we want to install as part of the installation process; since as lightweight an operating system installation as possible is required, it will only be necessary to install the **SSH Server** and **Standard System Utilities** packages.

![](images/sec03/p022_f02.png)

35.- Wait while the corresponding packages are installed.

![](images/sec03/p023_f01.png)

36.- If this is the only operating system installed, the installer will suggest using GRUB to manage system boot. This will depend on each lab's scenario. If that is the case, select **<Yes>** and then press **[Enter]**. For the purposes of this document, **sda** will be used.

![](images/sec03/p023_f02.png)

![](images/sec03/p024_f01.png)

37.- The installer completes the server configuration and prepares the machine for its first boot. After removing the installation DVD from the optical drive, press **[Enter]**.

![](images/sec03/p024_f02.png)

38.- The system boots. Since, as part of the logical volume configuration, disk encryption was set up, the boot process asks for the password configured earlier in order to mount the volumes and complete the boot process. Enter the password and press **[Enter]**.

![](images/sec03/p025_f01.png)

39.- Once the system finishes booting, the authentication screen is displayed. Enter the credentials for the user configured during installation (or the *root* user) to log in.

![](images/sec03/p025_f02.png)

40.- The operating system installation has been completed successfully.

### Installing and configuring the Internet time service (NTP)

NTP is a service and protocol that allows a machine's clock to be synchronized against time servers located on the Internet, so that the machine maintains globally accurate time.

This service will be required to enable the TOPT-based (*Time-Based One Time Passwords*) authentication mechanism used by GENis.

1.- Log in to the machine with the regular user created during installation (***genis-user***).

**Note:** For the sake of simplifying the reading and understanding of this document, the regular user created during installation will be referred to by the name used for the sample installation that guides this document, that is, ***genis-user***. It should go without saying that it is not essential for the user in the lab's installation to keep this name, and it is recommended that, in any case, the naming scheme and conventions used by the lab for generating usernames be followed.

2.- Start the installation of the ntp package. To do this, run the following command:

```bash
sudo apt-get install ntp
```

To proceed with the installation, enter the genisadminuser user's password when prompted.

4.- The system will ask for confirmation to install the package. Press [Y].

![](images/sec03/p026_f01.png)

![](images/sec03/p027_f01.png)

5.- The service installs and starts. To check which servers it is synchronizing against, run the following command:

```bash
ntpq -p
```

![](images/sec03/p027_f02.png)

6.- It is good practice to have the ntp service get the time from servers as close as possible to the server being configured. To do this, certain parameters in the *ntp.conf* file located in the */etc* directory must be modified. To do this, run the following command:

```bash
sudo nano /etc/ntp.conf
```

After entering the password for the ***genis-user*** user, the file is displayed in the nano text editor:

8.- Look for (you can navigate through the document using the arrow keys) the following section:

```text
# pool.ntp.org maps to about 1000 low-stratum NTP servers.  Your server will
# pick a different set every time it starts up.  Please consider joining the
# pool: <http://www.pool.ntp.org/join.html>
server 0.debian.pool.ntp.org iburst
server 1.debian.pool.ntp.org iburst
server 2.debian.pool.ntp.org iburst
server 3.debian.pool.ntp.org iburst
```

… and modify the lines starting with "server" as follows:

```text
# pool.ntp.org maps to about 1000 low-stratum NTP servers.  Your server will
# pick a different set every time it starts up.  Please consider joining the
# pool: <http://www.pool.ntp.org/join.html>
server 0.ar.pool.ntp.org
server 0.south-america.pool.ntp.org
server 3.south-america.pool.ntp.org
```

![](images/sec03/p028_f01.png)

9.- Once you have made the required edits, save the file. To do this, press **[CTRL]+[X]** and, at the confirmation prompt, press **[Y]**. When the editor proposes the file name (*/etc/ntp.conf*), press **[Enter]**.

10.- For the new configuration to take effect, the service needs to be restarted. Restart the service by running the following command:

```bash
sudo service ntp restart
```

11.- To verify that the configuration has taken effect and that it is using the new servers, run the following command:

```bash
ntpq -p
```

![](images/sec03/p029_f01.png)

## Installing and Configuring the LDAP Directory

LDAP is a directory service based on a subset of the X.500 standard that allows storing and managing identities, as well as different attributes associated with them. At the same time, LDAP specifies the protocol used to perform operations against the directory.

GENis uses OpenLDAP as its LDAP directory tool. OpenLDAP is an implementation of the protocols and recommendations that make up the current (v3) definition of LDAP. This service is required to store users and their attributes, and is fundamental to the identification, authentication, and authorization mechanisms used by GENis.

### Installing the OpenLDAP Package

1.- Log in to the machine with the ***genis-user*** user (not necessary if you did not log out at the end of the previous task).

2.- Start the installation of the **slapd** and **ldap-utils** packages. The **slapd** package installs the binaries needed to run OpenLDAP. The **ldap-utils** package is needed to perform administration tasks against the directory from the command line. To do this, run the following command:

```bash
sudo apt-get install slapd ldap-utils
```

![](images/sec03/p029_f02.png)

3.- Once the package installation is complete, the installer triggers the directory's basic configuration. For this configuration, the system requires you to enter a password for the directory administrator. This is a user separate from the privileged user or the system user used for normal tasks. Enter a password and press **[Enter]**.

![](images/sec03/p030_f01.png)

**Note:** For the purposes of this document, "***contraseña-temporal***" will be used as the directory administrator's password.

5.- The system asks you to confirm the password. Enter the same password again and press **[Enter]**.

![](images/sec03/p030_f02.png)

6.- Once the password has been entered correctly twice, the installer configures and starts the service.

![](images/sec03/p031_f01.png)

7.- As part of the OpenLDAP installation, the installer performs the initial configuration with a basic directory structure based on a default schema. For the purposes of GENis v1, this schema will suffice. The following command must be run, specifying again the parameters for the new schema, using "**genis.local**" as the local domain.

```bash
sudo dpkg-reconfigure slapd
```

8.- You must indicate that you do not want to skip the OpenLDAP configuration.

![](images/sec03/p031_f02.png)

9.- You must specify **genis.local** as the DNS domain name.

![](images/sec03/p032_f01.png)

10.- As the organization name, **genis.local** must also be specified.

![](images/sec03/p032_f02.png)

11.- You must specify a password for administering the directory; the one entered now replaces the one previously specified in this document. It is recommended that it not be a trivial password.

Note: for the purposes of this document, the password "***password-ldap-genis***" will be used.

![](images/sec03/p032_f03.png)

12.- The password entered in the previous step must be confirmed again.

![](images/sec03/p033_f01.png)

13.- MDB must be used as the database backend for OpenLDAP.

![](images/sec03/p033_f02.png)

14.- You must indicate that you do not want the database to be removed when OpenLDAP is reconfigured.

![](images/sec03/p033_f03.png)

15.- We indicate that we want to move the old databases.

![](images/sec03/p034_f01.png)

16.- After the previous steps, the installer will reconfigure OpenLDAP with the desired values, after which the user and group structure for GENis can be imported.

![](images/sec03/p034_f02.png)

### Configuring the Directory for GENis

Version 1 of GENis does not have an integrated tool for creating or managing user accounts. However, it is possible to preload GENis with generic test user accounts or, better still, with specific user accounts for each lab user.

This configuration can be done directly from the command line, entering the parameters for each user account, or by using a directory interchange format file that can be understood by the LDAP directory (also known as LDIF format). If only a few accounts need to be created, command-line configuration may be the most advisable approach; on the other hand, configuration via file import usually has several advantages, such as reducing the chances of data entry errors and making user account creation a much faster process.

In addition, to carry out part of the GENis directory configuration, an additional machine capable of connecting to the GENis server is required in order to perform directory administration tasks and, if the file import option is chosen, to upload the file from. Additionally, if an LDIF interchange file is used, this additional machine will need a text editor to generate the file.

**Note:** For the purposes of this document, the "***X-GENIS-LDAPConfig_Base_FULL.ldif***" structure will be used, which contains the entire user and group structure required for GENis to function correctly. It is provided as part of this document and must be copied to the server where GENis will run.

4.- Open the SCP client (WinSCP) and move the file to the server offline.

![](images/sec03/p035_f01.png)

5.- To import the file, run the command:

```bash
sudo ldapadd -x -D cn=admin,dc=genis,dc=local -W -f X-GENIS-LDAPConfig_Base_FULL.ldif
```

6.- You will need to enter the directory password to complete the file import.

![](images/sec03/p035_f02.png)

7.- Once the password is entered, all structures will be imported into the new directory.

![](images/sec03/p035_f03.png)

## Installing and Configuring the Java Runtime Environment

The Java Runtime Environment consists of a Java Virtual Machine (JVM), the core Java platform classes, and platform support libraries. The Java Runtime Environment is the portion of software required to run Java code.

Although the GENis application is developed in Scala, the Java Runtime Environment is required in order to run the GENis application.

### Installing the Java Runtime Environment 8 Package

1.- Log in to the machine with the ***genis-user*** user (not necessary if you did not log out at the end of the previous task).

2.- Start the installation of the **openjdk-8-jre** package. This is the package that installs the Java Runtime Environment 8 product. To do this, run the following command:

```bash
sudo apt-get install openjdk-8-jre
```

![](images/sec03/p036_f01.png)

![](images/sec03/p036_f02.png)

3.- The installation will start and download all the necessary packages from the Internet; after a few minutes it will finish successfully.

![](images/sec03/p037_f01.png)

4.- To verify that the installation was successful, run the following command:

```bash
java -version
```

![](images/sec03/p037_f02.png)

## Installing the Relational Database

PostgreSQL is a relational database engine. GENis uses PostgreSQL to store part of the profile information, specifically information associated with cases and personal (family) data, application information, and operation logs.

### Installing PostgreSQL 9.6

1.- Log in to the machine with the genis-user user (not necessary if you did not log out at the end of the previous task).

2.- Start the installation of the postgresql-9.6 package. This is the package that installs the PostgreSQL product. To do this, run the following command:

```bash
sudo apt-get install postgresql
```

![](images/sec03/p038_f01.png)

### Configuring PostgreSQL for GENis

Once the database engine is installed, a number of configuration steps must be carried out for it to serve its purpose. At least one user and a set of databases must be created to store the information.

1.- First, a user must be created for GENis to use for connections to the database. In this case, we will use **_genissqladmin_** with the password **_contraseña-sql-demo_**. Run the following command:

```bash
sudo adduser genissqladmin
```

2.- To proceed, enter the genisadminuser user's password. Then fill in the password for this new user and, at your discretion, the rest of the data requested by the adduser tool (these are optional). Confirm the user creation at the end by pressing [Y].

![](images/sec03/p038_f02.png)

Since the “postgres” user can perform operations on the database, the following tasks must be carried out using this user.

3.- The next step is to create a database user to be used by GENis for the operations it performs against the database. Once the user has been created, a password must be set for it. In this case, to match the connection user, we will use **_genissqladmin_** with the password **_contraseña-sql-demo_**. Run the commands below one after the other:

```bash
sudo -u postgres createuser -d -e -S -R genissqladmin
```

![](images/sec03/p039_f01.png)

```bash
sudo -u postgres psql -c "ALTER USER genissqladmin PASSWORD 'contraseña-sql-demo';"
```

![](images/sec03/p039_f02.png)

4.- Now two databases need to be created. For this, the “genissqladmin” user will be used so that it is identified as the owner of the databases. The first is for storing information the application uses for its operation; the second is for storing the application's transaction logs. Run the following commands one after the other:

```bash
sudo -u genissqladmin createdb -e genisdb
```

```bash
sudo -u genissqladmin createdb -e genislogdb
```

![](images/sec03/p039_f03.png)

## Installing the Non-Relational Database

MongoDB is a non-relational database engine; GENis uses MongoDB to store profile information.

### Installing the MongoDB Package

1.- Log in to the machine with the genisadminuser user (not necessary if you did not log out at the end of the previous task).

Installing MongoDB requires some configuration before the actual package installation can take place. Since MongoDB 3.4 is not included in the standard repositories, the server's repository list must be updated.

2.- On Debian 9 operating systems, the dirmngr package must be installed so that public keys can be imported; it is installed using the following command:

```bash
sudo apt-get install dirmngr
```

![](images/sec03/p040_f01.png)

3.- Next, the public key used to sign the packages must be imported. To do this, run the following command:

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```

![](images/sec03/p040_f02.png)

4.- Once the public key has been imported, the file the operating system uses to look up sources (/etc/sources.list) must be modified so it can be located and downloaded. To do this, run the following command:

```bash
echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

![](images/sec03/p041_f01.png)

5.- On Debian 9 installations, the Debian 8 “Jessie” repositories must be added for the MongoDB installation to work; edit the /etc/apt/sources.list file and add the following line at the end:

```text
deb http://ftp.debian.org/debian jessie-backports main
```

![](images/sec03/p041_f02.png)

6.- Once the repository is configured, the sources need to be updated. To do this, run the following command:

```bash
sudo apt-get update
```

![](images/sec03/p041_f03.png)

7.- Now it is time to trigger the installation. Run the following command:

```bash
sudo apt-get install -y mongodb-org
```

![](images/sec03/p042_f01.png)

8.- Once the installation is complete, Mongo starts the services automatically. To verify that the configuration is correct, run the following command:

```bash
sudo service mongod start
```

![](images/sec03/p042_f02.png)

9.- For MongoDB to start on boot, the following command must be run:

```bash
sudo systemctl enable mongod.service
```

![](images/sec03/p042_f03.png)

10.- For certain features in GENis to work, the following data collections must be created; they can be created manually or via a script called “MongoSetup” which is provided along with this document.

```bash
mongo pdgdb --eval "db.createCollection('profiles')"
mongo pdgdb --eval "db.createCollection('matches')"
mongo pdgdb --eval "db.createCollection('electropherograms')"
mongo pdgdb --eval "db.createCollection('scenarios')"
mongo pdgdb --eval "db.profiles.createIndex({categoryId:1})"
mongo pdgdb --eval "db.createCollection('pedigrees')"
mongo pdgdb --eval "db.createCollection('pedigreeMatches')"
```
