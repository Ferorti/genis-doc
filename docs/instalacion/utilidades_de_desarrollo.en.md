# Development utilities

This page gathers what is needed to work with GENis in a development environment: how to run the application from the source code, and auxiliary scripts to clean and load data.

## Running GENis in a development environment

### Prerequisites

- The PostgreSQL, LDAP and MongoDB containers created and running, as explained in [Container installation](instalacion_de_contenedores.md).
- The `/etc/hosts` entries for the container names (`genis_ldap`, `genis_postgres`, `genis_mongo`), if the configuration uses them. They are detailed on the same page.
- Java 8 (JDK), sbt and nodejs.

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

### Configuration

Download the [source code](https://github.com/fundacion-sadosky/genis), create the *application-dev.conf* file from *application-dev-template.conf* and edit it so it points to the services started with Docker. The connection parameters are the same ones edited in a production deployment (see [Production deployment](despliegue_en_produccion.md)):

```properties
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

### Running

The application can be run with sbt:

```bash
sbt run -Xms512M -Xmx10g -Xss1M -XX:+CMSClassUnloadingEnabled -Dconfig.file=./application-dev.conf -Dlogger.file=./logger-dev.xml -Dhttps.port=9443 -Dhttp.port=9000
```

When the application is opened from the browser for the first time, the evolutions scripts that create the data model are run. Then load the system initial data and configure the users as indicated in [GENis initial data](datos_iniciales.md).

## Cleaning the databases

Two scripts useful for development are included in the *utils* folder of the source code. They delete the contents of the profile and match tables in the databases and can be run with:

```bash
docker exec -i genis_mongo sh < "utils/clean-mongo-db.sh"
docker exec -i genis_postgres sh < "utils/clean-pgsql-db.sh"
```

## Loading an ldif file

If an ldif file needs to be run in ldap, for example *file.ldiff*, the script must be copied to the container and run.

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
You will be prompted for the password of the **admin** user, which can be found in *docker-compose.yml* and is **adminp** by default.

Exit the container with `CTRL+D`.
