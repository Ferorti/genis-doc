# Datos iniciales de GENis

Al ingresar a la aplicación desde el browser por primera vez van a correr los scripts de evolutions que definen el modelo de datos. Para finalizar la instalación debemos cargar los datos iniciales de GENis y los datos propios de la región de instalación (si el país no es Argentina). Los archivos de datos iniciales de GENis y de información local se encuentran bajo la carpeta *utils* en el directorio raíz del código fuente de GENis.
Se deben copiar los scripts al contenedor **genis_postgres** para luego ejecutarlos:


Copiar los scripts al contenedor:

```bash
chmod o+rx dml.sql AR.sql
docker cp dml.sql genis_postgres:/tmp
docker cp AR.sql genis_postgres:/tmp
docker exec -it genis_postgres /bin/bash
```

Ejecutar los scripts (el password del usuario **genissqladmin** por defecto es **genissqladminp**):

```bash
su - postgres
psql -U genissqladmin -d genisdb -f /tmp/dml.sql
psql -U genissqladmin -d genisdb -f /tmp/AR.sql
```

Salir del contenedor con `CTRL+D`

## Usuario inicial del sistema

Durante la configuración del sistema se crea el usuario **setup**, con password **pass** y secret para TOPT '*ETZK6M66LFH3PHIG*'.
Se puede utilizar libremente para propósitos de desarrollo pero en producción solicite una nueva cuenta de administrador en la pantalla de login, luego ingrese con el usuario **setup** para habilitarla y finalmente inactive el usuario **setup**.
Si tuviera problemas para ingresar al sistema puede que precise instalar el servicio NTP como se indica en el [manual de instalación de GENis](https://raw.githubusercontent.com/wiki/fundacion-sadosky/genis/files/instalacion.pdf).
Para obtener el password a partir del TOPT puede utilizar https://gauth.apps.gbraad.nl/
