# GENis initial data

When the application is opened from the browser for the first time, the evolutions scripts that define the data model are run. To finish the installation, the GENis initial data and the data specific to the installation region (if the country is not Argentina) must be loaded. The GENis initial data and local information files are located in the *utils* folder in the root directory of the GENis source code.
The scripts must be copied to the **genis_postgres** container and then run:


Copy the scripts to the container:

```bash
chmod o+rx dml.sql AR.sql
docker cp dml.sql genis_postgres:/tmp
docker cp AR.sql genis_postgres:/tmp
docker exec -it genis_postgres /bin/bash
```

Run the scripts (the default password of the **genissqladmin** user is **genissqladminp**):

```bash
su - postgres
psql -U genissqladmin -d genisdb -f /tmp/dml.sql
psql -U genissqladmin -d genisdb -f /tmp/AR.sql
```

Exit the container with `CTRL+D`

## Initial system user

During system configuration the **setup** user is created, with password **pass** and TOTP secret '*ETZK6M66LFH3PHIG*'.
It can be used freely for development purposes, but in production request a new administrator account on the login screen, then log in with the **setup** user to enable it, and finally deactivate the **setup** user.
If you have trouble logging into the system, you may need to install the NTP service as indicated in the [GENis installation manual](https://raw.githubusercontent.com/wiki/fundacion-sadosky/genis/files/GENis.-.Installation.Procedure.pdf).
To obtain the password from the TOTP secret you can use https://gauth.apps.gbraad.nl/
