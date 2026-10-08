# Resguardo y recuperación de las bases de datos

## Resguardo:
Generar un script de resguardo llamado backup.sh:

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

## Recuperación:
Generar un script de recuperación llamado restore.sh:
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
