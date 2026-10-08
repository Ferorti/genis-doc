# Utilidades de desarrollo

Esta página reúne lo necesario para trabajar con GENis en un entorno de desarrollo: cómo ejecutar la aplicación desde el código fuente y scripts auxiliares para limpiar y cargar datos.

## Ejecución de GENis en ambiente de desarrollo

### Requisitos previos

- Los contenedores de PostgreSQL, LDAP y MongoDB creados y funcionando, según se explica en [Instalación de contenedores](instalacion_de_contenedores.md).
- Las entradas de `/etc/hosts` para los nombres de los contenedores (`genis_ldap`, `genis_postgres`, `genis_mongo`), si la configuración los utiliza. Están detalladas en la misma página.
- Java 8 (JDK), sbt y nodejs.

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

### Configuración

Descargar el [código fuente](https://github.com/fundacion-sadosky/genis), crear el archivo *application-dev.conf* a partir de *application-dev-template.conf* y editarlo para que apunte a los servicios levantados con Docker. Los parámetros de conexión son los mismos que se editan en un despliegue de producción (ver [Despliegue en producción](despliegue_en_produccion.md)):

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

### Ejecución

Se puede correr la aplicación utilizando sbt:

```bash
sbt run -Xms512M -Xmx10g -Xss1M -XX:+CMSClassUnloadingEnabled -Dconfig.file=./application-dev.conf -Dlogger.file=./logger-dev.xml -Dhttps.port=9443 -Dhttp.port=9000
```

Al ingresar por primera vez desde el navegador se ejecutan los scripts de evolutions que crean el modelo de datos. Luego cargar los datos iniciales del sistema y configurar los usuarios como se indica en [Datos iniciales de GENis](datos_iniciales.md).

## Limpieza de las bases de datos

Se incluyen dos scripts útiles para desarrollo, en la carpeta *utils* del código fuente, que borran los contenidos de las tablas de perfiles y matches en las bases de datos, se pueden correr con:

```bash
docker exec -i genis_mongo sh < "utils/clean-mongo-db.sh"
docker exec -i genis_postgres sh < "utils/clean-pgsql-db.sh"
```

## Carga de un archivo ldif

Si se precisara correr un archivo ldif en ldap, por ejemplo *file.ldiff*, se debe copiar el script al contenedor y ejecutarlo.

Copiar el script al contenedor:

```bash
chmod o+rx file.ldiff
docker cp file.ldiff genis_ldap:/tmp
docker exec -it genis_ldap /bin/bash
```

Ejecutar el script:

```bash
ldapadd -x -D cn=admin,dc=genis,dc=local -H ldap://:1389 -W -f /tmp/file.ldiff -v
```
se solicitará el password del usuario **admin** que se puede consultar en *docker-compose.yml* y por defecto es **adminp**.

Salir del contenedor con `CTRL+D`.
