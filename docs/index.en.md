# GENis 5.1.15

GENis software is a computer tool developed by the [Fundación Dr. Manuel Sadosky](https://www.fundacionsadosky.org.ar) that allows comparing genetic profiles obtained from biological samples collected at different crime or disaster scenes, thereby linking events that occurred at different times and places, increasing the chances of identifying offenders, missing persons, or victims of disasters.

For a detailed explanation of how to install GENis and configure the required software, see the [GENis installation manual](https://github.com/fundacion-sadosky/genis/files/9739746/instalacion.pdf). Below is a summary of the steps for a basic configuration, along with instructions on how to run the system in development and production environments. The files referenced can be found under the */utils* directory.

For information on how the system works, see the [GENis user manual](https://github.com/fundacion-sadosky/genis/files/9739748/manual.pdf).

## Hardware Requirements

### Processor
- Minimum: 64-bit quad-core processor at 3 GHz (Intel Core i5/i7, Xeon E, or equivalent AMD)
- Recommended: 8 cores or more

### Memory
- Minimum required: 8 GB RAM
- Recommended minimum: 16 GB RAM

### Storage
- 64 GB SSD reserved for the operating system and base applications
- 500 GB for data storage (SSD recommended for better performance)

### Connectivity
- Gigabit Ethernet (1 Gbps) network card or higher

---

## Setting up a GENis runtime environment

GENis is developed in Scala; running the application requires JRE 8, and continuing its development requires JDK 8 and Sbt.

### Other requirements
- PostgreSQL 9.4.4
- MongoDB 2.6
- OpenLDAP

### LDAP configuration

Reconfigure ldap by entering **genis.local** as the domain name and organization name:

```bash
sudo dpkg-reconfigure slapd 
```

Load the initial configuration data:

```bash
ldapadd -x -D cn=admin,dc=genis,dc=local -H ldap://:389 -W -f X-GENIS-LDAPConfig_Base_FULL.ldif -v
```

Check that the data was loaded:
```bash
ldapsearch -x -b "dc=genis,dc=local" -H ldap://:389 -D "cn=admin,dc=genis,dc=local" -W "objectclass=*"
```

### PostgreSQL configuration
Create a postgres user and the GENis databases:
```bash
sudo adduser genissqladmin
sudo -u postgres createuser -d -e -S -R genissqladmin
sudo -u postgres psql -c "ALTER USER genissqladmin PASSWORD '********';"
sudo -u genissqladmin createdb -e genisdb
sudo -u genissqladmin createdb -e genislogdb 
```
### MongoDB configuration
Create the initial configuration collections:
```bash
sh < "MongoSetup.sh"
```
### Initial system data
After running the system, the data schema will already have been created, and the initial system data and region-specific data must be loaded.
```bash
sudo -u genissqladmin psql -d genisdb -f dml.sql
sudo -u genissqladmin psql -d genisdb -f locales/AR.sql
```
## Running GENis in a development environment

### Adjusting system parameters

Copy the file *application-dev-template.conf* to *application-dev.conf*. Edit the database and ldap connection parameters as needed, and specify the export path for profiles and lims files. Also generate the *application.secret*, which is used to sign the session cookie, and place it in the `application { secret = "..." }` entry of the file:
```bash
openssl rand -base64 48 | tr -d '\n'
```
This value is not versioned and must not be shared between environments. In development, if left empty, Play derives one automatically; in production, its absence aborts startup. The *logger-dev-template.xml* file can also be copied to *logger-dev.xml* to reconfigure the logger in development.

### Running GENis

In the application's root directory, run (not all parameters are always necessary, they are included for illustration purposes):
```bash
sbt run --java-home /usr/lib/jvm/java-8-openjdk-amd64
-Xms512M -Xmx10g -Xss1M -XX:+CMSClassUnloadingEnabled
-Dconfig.file=./application-dev.conf 
-Dlogger.file=./logger-dev.xml 
-Dhttps.port=9443 -Dhttp.port=9000
```

In the browser, go to http://localhost:9000/. 
If this is the first time the application is run, you will be asked whether to run the evolutions scripts to create the data schema. To stop the application, press `Ctrl + C` in the console.

## Downloading, distributing, and running GENis in production
You can download the latest version of GENis from the releases section. To update the system, see [`UPGRADING.md`](https://github.com/fundacion-sadosky/genis/blob/main/UPGRADING.md).
To generate a new version of GENis, update the version number in the *build.sbt* file, delete the *target* folder, and run

```bash
sbt dist
```

A zip file will be generated in the *target/universal* folder with everything needed to run the system in production.
To run GENis:
- unzip the zip file under */usr/share*
- grant execution permission to the bin/genis script 
    ```sudo chmod +x bin/genis```
- modify the system configuration parameters. The ldap database connections are found in */conf/storage.conf*, and the laboratory data and file export paths are in */conf/genis-misc.conf*

- run the system:
```bash
sudo ./bin/genis -v 
-DapplyEvolutions.default=true
-DapplyDownEvolutions.default=true
-DapplyEvolutions.logDb=true
-DapplyDownEvolutions.logDb=true
-Dhttp.port=9000 -Dhttps.port=9443 
-Dconfig.file=./conf/application.conf &
```
The RUNNING_PID file contains the process number used to stop the system. 
```bash
cat RUNNING_PID
sudo kill -9 pid
sudo rm –rf RUNNING_PID
```
 
## Initial system user

GENis uses an authentication mechanism based on TOPT.
During system configuration, the user '*setup*' is created, with password '*pass*' and TOPT secret '*ETZK6M66LFH3PHIG*'.
Feel free to use this account for development purposes, but in production request a new administrator account on the login screen, then log in with the '*setup*' user to enable it, and finally deactivate the '*setup*' user.
If you have trouble logging into the system, you may need to install the NTP service as indicated in the [GENis installation manual](https://github.com/fundacion-sadosky/genis/files/9739746/instalacion.pdf).
To obtain the password from the TOPT, you can use https://gauth.apps.gbraad.nl/

## Other utilities
Under */utils* you will find scripts with the latest versions of the system configuration data, maintenance utilities, and files with sample data for testing.
The *cleanDatabases.sh* script is used to delete transactional data, profiles, matches, pedigrees, notifications, etc., without affecting configuration data.
```bash
sudo sh cleanDatabases.sh
```
