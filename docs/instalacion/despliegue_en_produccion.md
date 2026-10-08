# Despliegue en producción

En una instalación con fines de producción se debe consultar el [manual de instalación de GENis](https://raw.githubusercontent.com/wiki/fundacion-sadosky/genis/files/instalacion.pdf) para la correcta configuración de la cuenta de usuario del sistema y otros servicios necesarios como NTP el entorno de ejecución de Java 8. Se debe descargar el [último release de GENis](https://github.com/fundacion-sadosky/genis/releases/latest) desde el repositorio en formato zip, descomprimirlo bajo */usr/share* y otorgar permisos de ejecución a la aplicación.

```bash
unzip genis-5.1.9.zip
cd genis
chmod +x ./bin/genis
```

Adecuar los parámetros de conexión a los servicios editando el archivo *./conf/storage.conf*.

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

Ingresar los datos del laboratorio editando el archivo *./conf/genis_misc.conf*, por ejemplo:

```properties
...
laboratory {
  country = "AR"
  province = "C"
  code = "SHDG"
}
```

Correr la aplicación.

```bash
sudo ./bin/genis -v
-DapplyEvolutions.default=true
-DapplyDownEvolutions.default=true
-DapplyEvolutions.logDb=true
-DapplyDownEvolutions.logDb=true
-Dhttp.port=9000 -Dhttps.port=9443
-Dconfig.file=./conf/application.conf &
```

Cargar los datos iniciales del sistema y configurar los usuarios como se indica en secciones posteriores.

## Crear un servicio systemd (recomendado para producción)

Crea /etc/systemd/system/genis.service:
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
Luego:
```bash
sudo systemctl daemon-reload
sudo systemctl start genis
sudo systemctl enable genis  # Para que inicie automáticamente
```
Ver estado:
```bash
sudo systemctl status genis
```
