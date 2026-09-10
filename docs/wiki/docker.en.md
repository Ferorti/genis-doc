# Docker GENis

To make it easier to install the services required by GENis, we use [Docker](https://www.docker.com/), creating containers for the Postgresql, LDAP, and MongoDB applications. We also define a container that runs a MongoDB web client.
The environment configuration is located in the *docker-compose.yml* file, where you can also check the version used for each application. The operation of GENis using the Docker services and the installation procedure described below has been tested on Ubuntu 22.04.

### Installing Docker on Ubuntu 22.04
You can check the Docker installation procedure on Ubuntu [here](https://docs.docker.com/engine/install/ubuntu/). 
The steps are summarized below:

```bash
# Desinstalar paquetes que pueden ser conflictivos para Instalar docker a partir de los repositorios oficiales
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done

# Agregar la clave GPG oficial de Docker
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Agregar los repositorios
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Instalar
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Agregar el usuario genis-user al grupo docker y reiniciar el sistema 
sudo usermod -a -G docker genis-user
reboot 
```

### Creating the containers:

In the *docker-compose.yml* file you can inspect the configuration of each container, and in particular for production installations it is recommended to change the passwords used. During container creation, configuration scripts located in the folders ending in *_init* are run, performing the following tasks:

- In Postgresql, the user **genissqladmin** is created with password **genissqladminp**, along with the **genisdb** and **genislogdb** databases owned by **genissqladmin** (it is recommended to change the passwords in production installations) 
- In LDAP, the initial structure and the first-access user **setup** are created 
- In MongoDB, the **pdgdb** database is created with the required collections

Assuming you have downloaded the docker folder into the genis-user directory, the steps to create the containers are:

```bash
cd docker
# otorgar permiso de ejecución para los scripts de configuración inicial de los contenedores
chmod -R 775 mongo_init/ openldap_init/ pgsql_init
# crear los contenedores
docker compose up -d
```

You can check whether the containers are running, and stop and start them, with the commands:

```bash
docker compose ps
docker compose stop
docker compose start
```

For data persistence on the host system independent of the container lifecycle, volumes are defined. They can be listed with the command:

```bash
docker volume ls
```

### Checking the initial configuration and querying container data

To connect to the containers you can use the hostname, **localhost**, **127.0.0.1**, or the container name if you add the corresponding mapping in the */etc/hosts* file:

```text
127.0.0.1 genis_ldap
127.0.0.1 genis_postgres
127.0.0.1 genis_mongo
127.0.0.1 genis_mongo-express
```

Once the containers have been created, they can be queried with client applications to check that the initial data was loaded correctly: 

- For Postgresql you can use [DataGrip](https://www.jetbrains.com/datagrip/) or the `psql` client inside the container:

Enter the container:

```bash
docker exec -it genis_postgres /bin/bash
```

Inside the container:

```text
su - postgres
psql
# listado de bases de datos, se esperan genisdb y genislogdb
\l	
# listado de usuarios, se espera genissqladmin
\dg
# chequeo de configuración md5
select * from  pg_settings where name ilike '%encr%';
table pg_hba_file_rules ;	
# salida del cliente psql
\q	
```

Exit the container with `CTRL+D`

- For LDAP you can use [Apache Directory Studio](https://directory.apache.org/studio/) or enter the container and use the `ldapsearch` command

Enter the container:

```bash
docker exec -it genis_ldap /bin/bash
```

Inside the container:

```bash
# chequeo de datos de ldap
ldapsearch -x -b "dc=genis,dc=local" -H ldap://:1389 -D "cn=admin,dc=genis,dc=local" -W "objectclass=*"
```

Exit the container with `CTRL+D`

- To query MongoDB you can use the web client by going to *http://genis_mongo-express:8081/db/pdgdb* in the browser and checking that the **pdgdb** database was created with the corresponding collections.

- If there were an error during installation, you can determine the cause and remove the containers and volumes in order to recreate them correctly with the commands (for example, for postgresql):

```bash
docker logs genis_postgres
docker container rm genis_postgres
docker volume rm docker_pgsql_data
```

### Running GENis in a production environment

For a production installation, see the [GENis installation manual](https://github.com/fundacion-sadosky/genis/files/9739746/instalacion.pdf) for the correct configuration of the system user account and other required services, such as NTP and the Java 8 runtime environment. You must download the [latest GENis release](https://github.com/fundacion-sadosky/genis/releases/latest) from the repository as a zip file, unzip it under */usr/share*, and grant execution permissions to the application.

```bash
unzip genis-5.1.9.zip
cd genis
chmod +x ./bin/genis
```

Adjust the service connection parameters by editing the *./conf/storage.conf* file.

```text
# LDAP 
ldap {
  default {
    url = "genis_ldap"
    port = 1389
    adminPassword="adminp"
    ...
  }
}

# Pgsql
db {
  default {
    url = "jdbc:postgresql://genis_postgres:5432/genisdb"
    user = "genissqladmin"
    password ="genissqladminp"
    ...
  }
  logDb {
    url = "jdbc:postgresql://genis_postgres:5432/genislogdb"
    user= "genissqladmin"
    password = "genissqladminp"
    ...
  }
}

# mongodb
mongodb {
  uri = "mongodb://genis_mongo:27017/pdgdb"
  ...
}
```

Enter the laboratory data by editing the *./conf/genis_misc.conf* file, for example:

```text
...
laboratory {
  country = "AR"
  province = "C"
  code = "SHDG"
}
```

Run the application.

```bash
sudo ./bin/genis -v 
-DapplyEvolutions.default=true
-DapplyDownEvolutions.default=true
-DapplyEvolutions.logDb=true
-DapplyDownEvolutions.logDb=true
-Dhttp.port=9000 -Dhttps.port=9443 
-Dconfig.file=./conf/application.conf &
```

Load the initial system data and configure the users as indicated in later sections.

### Running GENis in a development environment

To run GENis in a development environment you need Java 8 (JDK), Sbt, and nodejs installed.

```bash
sudo apt install openjdk-8-jdk
sudo apt install nodejs
```

```bash
echo "deb https://repo.scala-sbt.org/scalasbt/debian all main" | sudo tee /etc/apt/sources.list.d/sbt.list
echo "deb https://repo.scala-sbt.org/scalasbt/debian /" | sudo tee /etc/apt/sources.list.d/sbt_old.list
curl -sL "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x2EE0EA64E40A89B84B2DF73499E82A75642AC823" | sudo apt-key add
sudo apt-get update
sudo apt-get install sbt
```

You must download the source code, create the *application-dev.conf* file from *application-dev-template.conf*, and edit it to point to the services set up with docker, similarly to what was described in the previous section for production. You can run the application using Sbt.

```bash
sbt run -Xms512M -Xmx10g -Xss1M -XX:+CMSClassUnloadingEnabled -Dconfig.file=./application-dev.conf -Dlogger.file=./logger-dev.xml -Dhttps.port=9443 -Dhttp.port=9000
```

Load the initial system data and configure the users as indicated below.

### Initial GENis data

The first time you access the application from the browser, the evolutions scripts that define the data model will run. To finish the installation, we must load the initial GENis data and the data specific to the installation region (if the country is not Argentina). The initial GENis data files and the local information files are located under the *utils* folder in the root directory of the GENis source code. 
The scripts must be copied to the **genis_postgres** container in order to run them:


Copy the scripts to the container:

```bash
chmod o+rx dml.sql AR.sql
docker cp dml.sql genis_postgres:/tmp
docker cp AR.sql genis_postgres:/tmp
docker exec -it genis_postgres /bin/bash
```

Run the scripts (the default password for the **genissqladmin** user is **genissqladminp**):

```bash
su - postgres
psql -U genissqladmin -d genisdb -f /tmp/dml.sql
psql -U genissqladmin -d genisdb -f /tmp/AR.sql
```

Exit the container with `CTRL+D`

### Initial system user

During system configuration, the user **setup** is created, with password **pass** and TOPT secret '*ETZK6M66LFH3PHIG*'.
It can be used freely for development purposes, but in production request a new administrator account on the login screen, then log in with the **setup** user to enable it, and finally deactivate the **setup** user.
If you have trouble logging into the system, you may need to install the NTP service as indicated in the [GENis installation manual](https://github.com/fundacion-sadosky/genis/files/9739746/instalacion.pdf).
To obtain the password from the TOPT, you can use https://gauth.apps.gbraad.nl/

### Database backup and recovery

#### Backup:
Generate a backup script named backup.sh:

```bash
#!/bin/bash

# Set date variable in YYYYMMDD format
DATE=$(date +%Y%m%d)

# Backup LDAP
docker exec genis_ldap sh -c 'ldapsearch -x -H ldap://localhost:1389 -D "cn=admin,dc=genis,dc=local" -w adminp -b "dc=genis,dc=local" -LLL' > /home/genis-user/backups/ldap_backup_${DATE}.ldif

# Backup PostgreSQL databases
docker exec -e PGPASSWORD=genissqladminp genis_postgres pg_dump -U genissqladmin -h postgres -d genisdb -F c -b -v -f /backups/genisdb_backup_${DATE}.dump
docker exec -e PGPASSWORD=genissqladminp genis_postgres pg_dump -U genissqladmin -h postgres -d genislogdb -F c -b -v -f /backups/genislogdb_backup_${DATE}.dump
docker cp genis_postgres:/backups/genisdb_backup_${DATE}.dump /home/genis-user/backups/
docker cp genis_postgres:/backups/genislogdb_backup_${DATE}.dump /home/genis-user/backups/

# Backup MongoDB
docker exec genis_mongo mongodump --db pdgdb --out /tmp/mongodump_${DATE}
docker cp genis_mongo:/tmp/mongodump_${DATE} /home/genis-user/backups/mongodump_pdgdb_${DATE}

```

#### Recovery:
Generate a recovery script named restore.sh:
```bash
#!/bin/bash

# Usage: ./restore.sh <YYYYMMDD>
# Example: ./restore.sh 20230601
if [ -z "$1" ]; then
  echo "Usage: $0 <backup_date in YYYYMMDD>"
  exit 1
fi

DATE=$1

# Paths to backup files
LDAP_BACKUP="/home/genis-user/backups/ldap_backup_${DATE}.ldif"
PG_DUMP_GENISDB="/home/genis-user/backups/genisdb_backup_${DATE}.dump"
PG_DUMP_GENISLOGDB="/home/genis-user/backups/genislogdb_backup_${DATE}.dump"
MONGO_ARCHIVE="/home/genis-user/backups/mongodump_pdgdb_${DATE}.gz"

# Restore LDAP
if [ -f "$LDAP_BACKUP" ]; then
  echo "Restoring LDAP data..."
  # Copy LDIF into container
  docker cp "$LDAP_BACKUP" genis_ldap:/tmp/ldap_restore.ldif
  # Run ldapadd inside the container
  docker exec -i genis_ldap sh -c 'ldapadd -x -D "cn=admin,dc=genis,dc=local" -w adminp -f /tmp/ldap_restore.ldif'
else
  echo "LDAP backup file not found: $LDAP_BACKUP"
fi

# Restore PostgreSQL databases
# Copy dump files into the container
if [ -f "$PG_DUMP_GENISDB" ]; then
  docker cp "$PG_DUMP_GENISDB" genis_postgres:/backups/
  echo "Restoring genisdb..."
  docker exec -e PGPASSWORD=genissqladminp genis_postgres pg_restore -U genissqladmin -h postgres --clean --if-exists -d genisdb /backups/$(basename "$PG_DUMP_GENISDB")
else
  echo "PostgreSQL backup for genisdb not found: $PG_DUMP_GENISDB"
fi

if [ -f "$PG_DUMP_GENISLOGDB" ]; then
  docker cp "$PG_DUMP_GENISLOGDB" genis_postgres:/backups/
  echo "Restoring genislogdb..."
  docker exec -e PGPASSWORD=genissqladminp genis_postgres pg_restore -U genissqladmin -h postgres --clean --if-exists -d genislogdb /backups/$(basename "$PG_DUMP_GENISLOGDB")
else
  echo "PostgreSQL backup for genislogdb not found: $PG_DUMP_GENISLOGDB"
fi

# Restore MongoDB
if [ -f "$MONGO_ARCHIVE" ]; then
  echo "Restoring MongoDB..."
  # Drop existing database
  docker exec genis_mongo mongosh --eval 'db.dropDatabase()' --quiet pdgdb
  # Restore from archive
  docker exec genis_mongo mongorestore --archive=/tmp/mongodump_${DATE}.gz --gzip
  # Copy archive into container
  docker cp "$MONGO_ARCHIVE" genis_mongo:/tmp/mongodump_${DATE}.gz
else
  echo "MongoDB backup archive not found: $MONGO_ARCHIVE"
fi

echo "Restore process completed."
```

### Other utilities and examples 

Two useful scripts are included for development that delete the contents of the profile and match tables in the databases; they can be run with:

```bash
docker exec -i genis_mongo sh < "utils/clean-mongo-db.sh"
docker exec -i genis_postgres sh < "utils/clean-pgsql-db.sh"
```

If you need to run an ldif file in ldap, for example *file.ldiff*, you must copy the script to the container and run it.

Copy the script to the container:

```bash
chmod o+rx file.ldiff
docker cp file.ldiff genis_ldap:/tmp
docker exec -it genis_ldap /bin/bash
```

Run the script:

```bash
ldapadd -x -D cn=admin,dc=genis,dc=local -H ldap://:1389 -W -f /tmp/file.ldiff -v
```
you will be asked for the password of the **admin** user, which can be found in *docker-compose.yml* and is **adminp** by default.

Exit the container with `CTRL+D`.

### Creating a systemd service (recommended for production)
Create /etc/systemd/system/genis.service:
```text
ini[Unit]
Description=GENis Forensic System
After=network.target

[Service]
Type=simple
User=root
WorkingDirectory=/usr/share/genis
ExecStart=/usr/share/genis/bin/genis \
  -v \
  -DapplyEvolutions.default=true \
  -DapplyDownEvolutions.default=true \
  -DapplyEvolutions.logDb=true \
  -DapplyDownEvolutions.logDb=true \
  -Dhttp.port=9000 \
  -Dhttps.port=9443 \
  -Dconfig.file=/usr/share/genis/conf/application.conf \
  -Dlogger.file=/usr/share/genis/conf/logger.xml
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target

```
Then:
```bash
sudo systemctl daemon-reload
sudo systemctl start genis
sudo systemctl enable genis  # Para que inicie automáticamente
```
Check status:
```bash
sudo systemctl status genis
```
