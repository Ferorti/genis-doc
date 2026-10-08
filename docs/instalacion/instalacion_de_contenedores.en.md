# Container installation

To simplify the installation of the services GENis requires, we use [Docker](https://www.docker.com/), creating containers for the PostgreSQL, LDAP and MongoDB applications. We also define a container that runs a MongoDB web client.
The environment configuration is in the *docker-compose.yml* file, where the version used for each application can also be checked. Running GENis with the Docker services and the installation procedure described below have been tested on Ubuntu 22.04.

## Prerequisites

- Server with Ubuntu 22.04 and a `genis-user` user with `sudo` permissions (this is the user used in the commands of this guide).
- System clock synchronized through NTP: the second authentication factor (TOTP) depends on the correct time.
- Java 8, required to run GENis (see [Production deployment](despliegue_en_produccion.md)).
- Hardware:
    - Processor: minimum 64-bit quad-core at 3 GHz (Intel Core i5/i7, Xeon E or AMD equivalent); 8 cores or more recommended.
    - Memory: 8 GB RAM minimum required; 16 GB RAM minimum recommended.
    - Storage: 64 GB SSD for the operating system and base applications, and 500 GB for data (SSD recommended).
    - Connectivity: Gigabit Ethernet (1 Gbps) network card or higher.

!!! warning "Default passwords"
    The passwords shown in this guide (for example **genissqladminp**, **adminp** or **pass**) are default values intended for testing and development. They must be changed in production installations.

## Installing Docker on Ubuntu 22.04

The Docker installation procedure for Ubuntu can be found [here](https://docs.docker.com/engine/install/ubuntu/).
The steps are summarized below:

```bash
# Uninstall packages that may conflict with installing docker from the official repositories
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done

# Add Docker's official GPG key
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repositories
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

# Install
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Add the genis-user user to the docker group and reboot the system
sudo usermod -a -G docker genis-user
reboot
```

## Creating the containers

The configuration of each container can be inspected in the *docker-compose.yml* file; for production installations in particular, changing the passwords used is recommended. While the containers are created, configuration scripts located in the folders ending in *_init* are run and perform the following tasks:

- In PostgreSQL, the **genissqladmin** user is created with password **genissqladminp**, along with the **genisdb** and **genislogdb** databases owned by **genissqladmin** (changing the passwords is recommended for production installations).
- In LDAP, the initial structure and the first-access user **setup** are created.
- In MongoDB, the **pdgdb** database is created with the required collections.

Assuming the docker folder was downloaded into the genis-user directory, the steps to create the containers are:

```bash
cd docker
# grant execution permission to the containers' initial configuration scripts
chmod -R 775 mongo_init/ openldap_init/ pgsql_init
# create the containers
docker compose up -d
```

You can check whether the containers are running, stop them and start them with the commands:

```bash
docker compose ps
docker compose stop
docker compose start
```

Volumes are defined so that data persists on the host system regardless of the container life cycle. They are listed with the command:

```bash
docker volume ls
```

## Checking the initial configuration and querying container data

To connect to the containers you can use the host name, **localhost**, **127.0.0.1**, or the container name if the corresponding mapping is added to the */etc/hosts* file:

```text
127.0.0.1 genis_ldap
127.0.0.1 genis_postgres
127.0.0.1 genis_mongo
127.0.0.1 genis_mongo-express
```

Once the containers are created, they can be queried with client applications to check that the initial data was loaded correctly:

- For PostgreSQL you can use [DataGrip](https://www.jetbrains.com/datagrip/) or the `psql` client inside the container:

Enter the container:

```bash
docker exec -it genis_postgres /bin/bash
```

Inside the container:

```text
su - postgres
psql
# list databases, genisdb and genislogdb are expected
\l
# list users, genissqladmin is expected
\dg
# check md5 configuration
select * from  pg_settings where name ilike '%encr%';
table pg_hba_file_rules ;
# exit the psql client
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
# check ldap data
ldapsearch -x -b "dc=genis,dc=local" -H ldap://:1389 -D "cn=admin,dc=genis,dc=local" -W "objectclass=*"
```

Exit the container with `CTRL+D`

- To query MongoDB you can use the web client by opening *http://genis_mongo-express:8081/db/pdgdb* in the browser and checking that the **pdgdb** database was created with the corresponding collections.

- If there is any error during installation, you can determine the cause and remove the containers and volumes in order to recreate them correctly with the commands (for example, for PostgreSQL):

```bash
docker logs genis_postgres
docker container rm genis_postgres
docker volume rm docker_pgsql_data
```
