# Production deployment

For a production installation, consult the [GENis installation manual](https://raw.githubusercontent.com/wiki/fundacion-sadosky/genis/files/GENis.-.Installation.Procedure.pdf) for the correct configuration of the system user account and other required services such as NTP and the Java 8 runtime environment. Download the [latest GENis release](https://github.com/fundacion-sadosky/genis/releases/latest) from the repository in zip format, unzip it under */usr/share* and grant execution permissions to the application.

```bash
unzip genis-5.1.9.zip
cd genis
chmod +x ./bin/genis
```

Adjust the service connection parameters by editing the *./conf/storage.conf* file.

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

Enter the laboratory data by editing the *./conf/genis_misc.conf* file, for example:

```properties
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

Load the system initial data and configure the users as indicated in later sections.

## Creating a systemd service (recommended for production)

Create /etc/systemd/system/genis.service:
```ini
[Unit]
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
sudo systemctl enable genis  # So that it starts automatically
```
Check status:
```bash
sudo systemctl status genis
```
