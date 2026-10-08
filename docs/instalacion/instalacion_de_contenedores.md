# Instalación de contenedores

Con la finalidad de facilitar la instalación de los servicios requeridos por GENis utilizamos [Docker](https://www.docker.com/) creando contenedores para las aplicaciones Postgresql, LDAP y MongoDB. Definimos además un contenedor que corre un cliente web de MongoDB.
La configuración del entorno se encuentra en el archivo *docker-compose.yml* donde además se puede consultar la versión utilizada de cada aplicación. El funcionamiento de GENis utilizando los servicios con Docker y el procedimiento de instalación descripto a continuación se ha probado sobre Ubuntu 22.04.

## Prerrequisitos

- Servidor con Ubuntu 22.04 y un usuario `genis-user` con permisos de `sudo` (es el usuario que se utiliza en los comandos de esta guía).
- Reloj del sistema sincronizado mediante NTP: el segundo factor de autenticación (TOTP) depende de la hora correcta.
- Java 8, necesario para ejecutar GENis (ver [Despliegue en producción](despliegue_en_produccion.md)).
- Los requisitos de hardware se detallan en [Requerimientos del sistema](requerimientos_del_sistema.md).

!!! warning "Contraseñas por defecto"
    Las contraseñas que aparecen en esta guía (por ejemplo **genissqladminp**, **adminp** o **pass**) son valores por defecto pensados para pruebas y desarrollo. En instalaciones de producción deben modificarse.

## Instalación de Docker en Ubuntu 22.04

Se puede consultar el procedimiento de instalación de Docker en Ubuntu [aquí](https://docs.docker.com/engine/install/ubuntu/).
A continuación se resumen los pasos:

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

## Creación de los contenedores

En el archivo *docker-compose.yml* se puede inspeccionar la configuración de cada contenedor y en particular para instalaciones de producción se recomienda modificar los passwords utilizados. Durante la creación de los contenedores se ejecutan scripts de configuración que se encuentran en las carpetas que finalizan con *_init* y realizan las siguientes tareas:

- En Postgresql se crea el usuario **genissqladmin** con password **genissqladminp** y las bases **genisdb** y **genislogdb** con owner **genissqladmin** (se recomienda modificar los passwords en instalaciones de producción)
- En LDAP se crean la estructura inicial y el usuario de primer acceso **setup**
- En MongoDB se crea la base de datos **pdgdb** con las colecciones necesarias

Suponiendo que ha descargado la carpeta docker en el directorio genis-user, los pasos para crear los contenedores son:

```bash
cd docker
# otorgar permiso de ejecución para los scripts de configuración inicial de los contenedores
chmod -R 775 mongo_init/ openldap_init/ pgsql_init
# crear los contenedores
docker compose up -d
```

Se puede chequear si los contenedores se encuentran corriendo, detenerlos e iniciarlos con los comandos:

```bash
docker compose ps
docker compose stop
docker compose start
```

Para la persistencia de los datos en el sistema anfitrión independientemente del ciclo de vida del contenedor se definen volúmenes. Se listan con el comando:

```bash
docker volume ls
```

## Chequeo de configuración inicial y consulta de datos de los contenedores

Para conectarse a los contenedores se puede utilizar el nombre de host, **localhost**, **127.0.0.1** o bien el nombre del contenedor si se ingresa el mapeo correspondiente en el archivo */etc/hosts*:

```text
127.0.0.1 genis_ldap
127.0.0.1 genis_postgres
127.0.0.1 genis_mongo
127.0.0.1 genis_mongo-express
```

Una vez creados los contenedores se pueden consultar con aplicaciones cliente para revisar la correcta carga de los datos iniciales:

- Para Postgresql se puede utilizar [DataGrip](https://www.jetbrains.com/datagrip/) o bien el cliente `psql` dentro del contenedor:

Ingresar al contenedor:

```bash
docker exec -it genis_postgres /bin/bash
```

Dentro del contenedor:

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

Salir del contenedor con `CTRL+D`

- Para LDAP se puede utilizar [Apache Directory Studio](https://directory.apache.org/studio/) o ingresar al contenedor y utilizar el comando `ldapsearch`

Ingresar al contenedor:

```bash
docker exec -it genis_ldap /bin/bash
```

Dentro del contenedor:

```bash
# chequeo de datos de ldap
ldapsearch -x -b "dc=genis,dc=local" -H ldap://:1389 -D "cn=admin,dc=genis,dc=local" -W "objectclass=*"
```

Salir del contenedor con `CTRL+D`

- Para consultar MongoDB se puede utilizar el cliente web ingresando a *http://genis_mongo-express:8081/db/pdgdb* desde el browser y revisar que se hayan creado la base **pdgdb** con las colecciones correspondientes.

- Si hubiera algún error en la instalación se puede determinar la causa y eliminar los contenedores y volúmenes a fin de recrearlos correctamente con los comandos (por ejemplo para postgresql):

```bash
docker logs genis_postgres
docker container rm genis_postgres
docker volume rm docker_pgsql_data
```
