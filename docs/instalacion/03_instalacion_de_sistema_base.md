# Instalación de sistema base

## Información requerida antes de comenzar la instalación

Es recomendable que antes de comenzar con la instalación, el instalador releve u obtenga la siguiente información del responsable del laboratorio o su contacto técnico.

- Indicar si la red del laboratorio cuenta con un servidor DHCP.
- Indicar si la red del laboratorio cuenta con un servidor DNS interno.
- Indicar la dirección IP (fija) a utilizar por el servidor GENis.
- Indicar los parámetros de red (máscara, Gateway) utilizados en la red del laboratorio.
- Indicar si la red del laboratorio utiliza un servidor proxy para acceder a Internet
- Indicar si la red del laboratorio tiene un esquema de nombres de host. ¿Cuál es?
  - Indicar el nombre de host elegido por el contacto técnico.
- Indicar quién tomará el rol de administrador del sistema.
- Indicar quién definirá los nombres de usuario y las claves para los servicios

Adicionalmente, si el laboratorio cuenta con acceso a Internet, y se desea realizar la instalación de esta manera, tener en cuenta la siguiente información:

- Indicar si el servidor proxy utiliza usuarios y contraseñas para permitir el tráfico.

Finalmente, si la instalación se realizará con medios ópticos, o no se cuenta con un acceso a Internet, la siguiente información específica debe conseguirse de antemano:

## Instalación del Sistema Operativo Debian

Las imágenes del Sistema Operativo Debian se distribuyen en dos formatos, CD y DVD. Las imágenes se pueden obtener de distintos lugares, ya sea como descarga directa o mediante herramientas de descarga P2P mediante el protocolo BitTorrent.

A los efectos de este documento, se contempla que el responsable de laboratorio ha recibido o descargado un set de DVD con las imágenes completas del reléase 9.4 de Debian y/o un CD de instalación que permite realizar la instalación haciendo la descarga de los paquetes desde Internet durante el proceso de instalación.

Si bien el proceso no varía sobremanera entre uno u otro, y existen beneficios y compromisos para cada procedimiento. La elección del procedimiento a utilizar dependerá de las características de cada laboratorio.

### Instalación del Sistema Operativo Debian desde Internet

1.- Inserte el DVD o dispositivo USB de Instalación con la etiqueta **“debian-9.4.0-amd64-netinst.iso”** en el equipo o máquina virtual

<u>**Nota:**</u> Asegúrese que los parámetros del BIOS del equipo están configurados para que el sistema inicie desde la unidad óptica. Esto varía de equipo a equipo.

2.- Al arrancar la computadora, se le presentará la pantalla de Bienvenida. Seleccione la opción de Instalar (*Graphical install*) y presione **[Enter]**.

![](images/sec03/p008_f01.png)

3.- En esta pantalla se selecciona el idioma a utilizar durante la instalación del sistema. Seleccione el que prefiera y presione **[Enter]**. Puede elegir cualquiera puesto que esta elección no modifica el idioma del sistema operativo. Para los fines de este documento, se seleccionará el inglés (*English*).

![](images/sec03/p009_f01.png)

5.- Seleccione el Continente del País donde se realiza la instalación. Para este caso es América del Sur (*South América*) y presione **[Enter]**.

![](images/sec03/p009_f02.png)

6.- Seleccione el País donde se realiza la instalación. En este caso Argentina y presione **[Enter]**.

![](images/sec03/p010_f01.png)

7.- Puesto que el instalador de Debian no contempla una definición de localización específica para Argentina, el programa provee diferentes opciones alternativas. Para este caso, tome la opción predeterminada (*United States – en_US.UTF-8*) y presione **[Enter]**.

![](images/sec03/p010_f02.png)

8.- Seleccione la configuración de teclado de manera que concuerde con el teclado que está utilizando para la instalación y presione **[Enter]**.

<u>**Nota:**</u> A los efectos de este documento, se seleccionará un teclado con configuración española (*Spanish*).

![](images/sec03/p011_f01.png)

9.- El instalador intentará realizar una autoconfiguración de los parámetros de la red antes de continuar. Espere hasta que finalice.

![](images/sec03/p011_f02.png)

<u>**Nota:**</u> En función de las condiciones de la red (i.e. si el servidor detecta la presencia de un DHCP), es posible que la autoconfiguración no funcione y se presente una pantalla para configurar los parámetros de red del servidor. En cualquier caso, esto es modificable luego de finalizada la instalación.

10.- Seleccione un nombre para identificar el equipo en la red. Tenga en cuenta el esquema de nombres que exista en la red del laboratorio y aplique el criterio existente. Borre el nombre que el instalador ofrece (debían) e ingrese el nombre seleccionado por teclado. Presione **[Enter]** para continuar.

<u>**Nota:**</u> Para este documento se utilizará como nombre de Equipo **“GENis-Host”**.

![](images/sec03/p012_f01.png)

11.- Seleccione y escriba el nombre del dominio al que pertenecerá el equipo. Si la red del laboratorio cuenta con un servidor DNS para la resolución de nombres locales, es conveniente configurar este nombre de dominio de manera que concuerde con el dominio local de la red del laboratorio. En el caso de que no existe resolución por nombre de manera local, este parámetro no es relevante y puede configurarse con un nombre de dominio no ruteable cualquiera. Presione **[Enter]** al finalizar.

<u>**Nota:**</u> A los fines de este documento no se indicará un nombre de dominio

![](images/sec03/p013_f01.png)

12.- Establezca la contraseña del usuario privilegiado (i.e. el usuario “root”). Resguarde esta contraseña para utilizarla a futuro durante la configuración. Al finalizar la configuración, cambie la contraseña (se explica cómo hacerlo más adelante) y resguárdela en lugar seguro. Presione **[Enter]** para seguir.

<u>**Nota:**</u> A los fines de este documento no se indicará una password de usuario root en este paso

![](images/sec03/p013_f02.png)

14.- Establezca el nombre completo del usuario para el primer usuario del sistema. Este usuario es un usuario común (no privilegiado) para operar con el sistema. A los efectos del despliegue, es un usuario que se estará utilizando para realizar las configuraciones y, posteriormente, administrar el sistema. Presione **[Enter]** para seguir adelante.

<u>**Nota:**</u> A los fines de este documento se usará **“Usuario de GENis”** como nombre completo del usuario.

![](images/sec03/p014_f01.png)

15.- Establezca el nombre de usuario para este usuario. Al finalizar, presione **[Enter]** para continuar.

<u>**Nota:**</u> A los fines de este documento se usará ***“genis-user”*** como nombre de usuario para esta cuenta.

![](images/sec03/p014_f02.png)

16.- Establezca la contraseña para este usuario (en este caso “*genis-user*”). Al finalizar, presione **[Enter]** para seguir adelante.

<u>**Nota:**</u> A los fines de este documento, se estará utilizando ***“genis-demo-install”*** como contraseña del usuario “*genis-user*”.

![](images/sec03/p015_f01.png)

19.- Se presenta la pantalla para la configuración del esquema de particiones del almacenamiento. Seleccione la opción para que el sistema guíe el proceso configurando la gestión de volúmenes lógicos con encriptación (*Guided – use entire disk and setup encrypted LVM*) y presione **[Enter]**

![](images/sec03/p015_f02.png)

20.- Seleccione el disco que utilizará para la instalación y presione **[Enter]** para continuar.

<u>**Nota:**</u> Esta selección será ampliamente dependiente del escenario de despliegue. En caso de contar con más de un disco, seleccione el que tenga la mayor cantidad de espacio disponible En función de que para la construcción de este documento se cuenta con un solo disco, la selección es trivial.

![](images/sec03/p016_f01.png)

21.- Seleccione el esquema de todos los archivos en una partición, si bien el esquema de particionamiento LVM es más recomendado para lidiar con problemas de espacio mediante la manipulación de volúmenes en equipos con bastante almacenamiento no es necesario.

El usar uno u otro esquema de particionamiento no afecta al funcionamiento de GENis

![](images/sec03/p017_f01.png)

22.- Confirme la selección para que el instalador escriba el esquema de particiones y aplique los cambios en el disco. Para esto, seleccione la opción **<Yes>** y presione **[Enter]**.

![](images/sec03/p017_f02.png)

23.- El sistema inicializará el disco y escribirá la configuración de particiones. Espere…

![](images/sec03/p018_f01.png)

24.- A los efectos de implementar la encriptación del disco, el sistema requiere una frase clave. Elija una frase clave o “*passphrase*” de al menos 20 caracteres. Es recomendable que tenga algún sentido para poder recordarla fácilmente. Ingres la frase en el campo de texto y presione **[Enter]** para continuar.

<u>**IMPORTANTE:**</u> Es importante que no olvide esta frase puesto que es necesaria para arrancar el sistema cada vez que el servidor sea apagado o reiniciado. En caso de ser estrictamente necesario, escríbala y guárdela en un lugar seguro.

<u>**Nota:**</u> A los fines de este documento, se utilizará ***“genis-demo-install-encripcion”*** como frase clave para el desbloqueo del disco.

![](images/sec03/p018_f02.png)

26.- El instalador presenta la propuesta para el esquema de particiones en función de las opciones elegidas. Si bien es probable es que el esquema presentado sea adecuado, en cualquier caso, evalúe que los volúmenes mantengan el criterio de ocupación y/o cumplan con los requerimientos mínimos (ver debajo). Una vez que haya evaluado que el esquema es adecuado, acepte la propuesta de particiones (*Finish partitioning and write changes to disk*) y presione **[Enter]**.

![](images/sec03/p019_f01.png)

28.- El instalador procederá a dar formato al disco, generar el volumen lógico y asignar las particiones seleccionadas. Luego de esto y comenzará a instalar los paquetes que hacen al núcleo y archivos principales del Sistema Operativo Base. Esta operación puede tardar varios minutos en función de la velocidad del equipo. Espere…

![](images/sec03/p020_f01.png)

![](images/sec03/p020_f02.png)

29.- En función del proceso de instalación elegido (esto es, instalación desde Internet), una vez que se completa el formato delos volúmenes y el núcleo del sistema operativo se encuentra instalado, el programa de instalación requiere se le indique de dónde debe tomar los paquetes restantes para completar la instalación del sistema operativo. Seleccione la opción correspondiente a la República Argentina (*Argentina*) y presione **[Enter]** para continuar.

![](images/sec03/p021_f01.png)

30.- Seleccione la fuente más cercana para bajar los archivos de instalación. Para el caso de Argentina, cualquiera de las opciones es igualmente válida. Presione **[Enter]** para continuar.

<u>**Nota:**</u> A los fines de este documento, se utilizará la fuente alojada en el Centro de Comunicación Científica de la UBA. (*ftp.ccc.uba.ar*).

![](images/sec03/p021_f02.png)

31.-En el caso que la red del laboratorio utilice algún tipo de proxy server HTTP para acceder a Internet, ingrese la dirección del mismo en el campo especificado y presione **[Enter]**. En caso de no utilizar un proxy server de este tipo, simplemente omita el paso presionando **[Enter]**.

![](images/sec03/p022_f01.png)

32.- Se nos preguntará que paquetes deseamos instalar como parte del proceso de instalacion, teniendo en cuenta que se requiere una instalacion lo más liviana posible del sistema operativo solo será necesario instalar los paquetes de **SSH Server** y **Standard System Utilities**

![](images/sec03/p022_f02.png)

35.- Espere mientras se instalan los paquetes correspondientes.

![](images/sec03/p023_f01.png)

36.- En el caso que esta sea el único Sistema Operativo instalado, el instalador propone que se utilice GRUB para la gestión del arranque del sistema. Esto dependerá del escenario de cada laboratorio. En caso que así lo fuera, seleccione **<Yes>** y luego presione **[Enter]**. Para el propósito de este documento se utilizará **sda**)

![](images/sec03/p023_f02.png)

![](images/sec03/p024_f01.png)

37.- El instalador completa la configuración del servidor y dispone el equipo para el primer arranque. Luego de retirar el DVD de instalación de la unidad óptica, presione **[Enter]**.

![](images/sec03/p024_f02.png)

38.- El sistema arranca. Puesto que, como parte de la configuración de los volúmenes lógicos, se ha configurado la encriptación del disco, el proceso de arranque pide la contraseña configurada anteriormente para poder montar los volúmenes y completar el proceso de arranque. Ingrese la contraseña y presione **[Enter]**.

![](images/sec03/p025_f01.png)

39.- Cuando el sistema completa el arranque, el sistema presenta la pantalla de autenticación. Ingrese las credenciales del usuario configurado durante la instalación (o del usuario *root*) para iniciar la sesión.

![](images/sec03/p025_f02.png)

40.- La instalación del sistema operativo ha sido completada con éxito.

### Instalación y configuración del servicio de hora de Internet (NTP)

NTP es un servicio y protocolo que permite sincronizar la hora de un equipo contra servidores de hora ubicados en Internet de manera que el equipo mantenga precisión de la hora a nivel global.

Este servicio será necesario para permitir el uso del mecanismo de autenticación basado en TOPT (*Time-Based One Time Passwords*) que utiliza GENis.

1.- Ingrese al equipo con el usuario común generado durante la instalación (***genis-user***)

**Nota:** A los efectos de simplificar la lectura y entendimiento del documento, al usuario común generado durante la instalación se lo referirá por el nombre utilizado para la instalación de prueba que guía el documento, esto es ***genis-user***. Huelga indicar que no es imprescindible que el usuario en la instalación del laboratorio mantenga este nombre y es recomendable que, en cualquier caso, mantenga el esquema y nomenclatura utilizados por el laboratorio para la generación de nombres de usuarios.

2.- Inicie la instalación del paquete ntp. Para eso, ejecute el siguiente comando:

```
sudo apt-get install ntp
```

Para poder avanzar con la instalación, ingrese la contraseña del usuario genisadminuser cuando le sea requerida.

4.- El sistema pedirá confirmación para instalar el paquete. Presione [Y]

![](images/sec03/p026_f01.png)

![](images/sec03/p027_f01.png)

5.-El servicio se instala e inicia. Para verificar contra que servidores está sincronizando, ejecute el siguiente comando:

```
ntpq -p
```

![](images/sec03/p027_f02.png)

6.- Es una buena práctica hacer que el servicio ntp tome la hora desde servidores lo más cercanos posible al servidor que se está configurando. Para eso se deben modificar ciertos parámetros del archivo *ntp.conf* que se encuentra en el directorio */etc*. Para esto, ejecute el siguiente comando:

```
sudo nano /etc/ntp.conf
```

Después de ingresar la contraseña del usuario ***genis-user***, se presenta el archivo en el editor de texto nano:

8.- Busque (puede moverse por el documento utilizando las flechas) la siguiente sección:

```
# pool.ntp.org maps to about 1000 low-stratum NTP servers.  Your server will
# pick a different set every time it starts up.  Please consider joining the
# pool: <http://www.pool.ntp.org/join.html>
server 0.debian.pool.ntp.org iburst
server 1.debian.pool.ntp.org iburst
server 2.debian.pool.ntp.org iburst
server 3.debian.pool.ntp.org iburst
```

… y modifique las líneas que comienzan con "server" de la siguiente manera:

```
# pool.ntp.org maps to about 1000 low-stratum NTP servers.  Your server will
# pick a different set every time it starts up.  Please consider joining the
# pool: <http://www.pool.ntp.org/join.html>
server 0.ar.pool.ntp.org
server 0.south-america.pool.ntp.org
server 3.south-america.pool.ntp.org
```

![](images/sec03/p028_f01.png)

9- Una vez que haya completado la edición requerida, grabe el archivo. Para esto, presione **[CTRL]+[X]** y en el pedido de confirmación presione **[Y]**. Cuando el editor proponga el nombre de archivo (*/etc/ntp.conf*) presione **[Enter]**.

10.- Para que la nueva configuración tome efecto, es necesario reiniciar el servicio. Reinicie el servicio ejecutando el siguiente comando:

```
sudo service ntp restart
```

11.- Para verificar que la configuración ha tomado efecto y que se encuentra utilizando los nuevos servidores, ejecute el siguiente comando:

```
ntpq -p
```

![](images/sec03/p029_f01.png)

## Instalación y Configuración del Directorio LDAP

LDAP es un servicio de directorios basado en un subconjunto del estándar X.500 que permite almacenar y administrar identidades, así como diferentes atributos asociados a éstas. Al mismo tiempo, LDAP especifica el protocolo utilizado para realizar operaciones contra el mencionado directorio.

GENis utiliza OpenLDAP como herramienta de directorio LDAP. OpenLDAP es una implementación de los protocolos y recomendaciones que hacen a la definición actual (v3) de LDAP. Este servicio es necesario para almacenar los usuarios y sus atributos y fundamental para el funcionamiento de los mecanismos de identificación, autenticación y autorización que utiliza GENis.

### Instalación del Paquete OpenLDAP

1.- Ingrese al equipo con el usuario ***genis-user*** (no es necesario si al final de la tarea anterior no salió del sistema).

2.- Inicie la instalación de los paquetes **slapd** y **ldap-utils**. El paquete **slapd** instala los binarios necesarios para la ejecución de OpenLDAP. El paquete **ldap-utils** es necesario para realizar tareas de administración sobre el directorio desde la línea de comandos. Para esto, ejecute el siguiente comando:

```
sudo apt-get install slapd ldap-utils
```

![](images/sec03/p029_f02.png)

3.- Una vez que se completa la instalación de los paquetes, El instalador dispara la configuración básica del directorio. Para esta configuración, el sistema requiere que ingrese una contraseña para el administrador del directorio. Este es un usuario separado del usuario privilegiado o el usuario del sistema utilizado para las tareas normales. Ingrese una contraseña y presione **[Enter]**

![](images/sec03/p030_f01.png)

**Nota:** A los fines de este documento, se utilizará "***contraseña-temporal***" como contraseña del administrador del directorio.

5.- El sistema pide que confirme la contraseña. Ingrese nuevamente la contraseña definida y presione **[Enter]**.

![](images/sec03/p030_f02.png)

6.- Una vez que se haya ingresado correctamente la contraseña dos veces, el instalador configura y arranca el servicio.

![](images/sec03/p031_f01.png)

7.- Como parte de la instalación de OpenLDAP, el instalador realiza la configuración inicial con una estructura de directorio básica basada en un esquema (*schema*) predeterminado. A los efectos de GENis v1, este esquema será suficiente. Se deberá ejecutar el siguiente comando indicando nuevamente los parámetros del nuevo esquema, denominado "**genis.local**" como dominio local

```
sudo dpkg-reconfigure slapd
```

8.- Se debe indicar que no se desea omitir la configuración de open ldap

![](images/sec03/p031_f02.png)

9.- Se debe indicar como DNS **genis.local**

![](images/sec03/p032_f01.png)

10.- Como organization name se debe indicar también **genis.local**

![](images/sec03/p032_f02.png)

11.- Se debe indicar una contraseña para la administración del directorio, esta que se ingresara ahora remplaza a la anterior indicada en este documento, se recomienda que sea una contraseña no trivial.

Nota: para fines de este documento se utilizará la contraseña "***password-ldap-genis***"

![](images/sec03/p032_f03.png)

12.- Se debe validar nuevamente la contraseña ingresada en el paso anterior

![](images/sec03/p033_f01.png)

13.- Se debe utilizar MDB como base de datos a utilizar para OpenLDAP

![](images/sec03/p033_f02.png)

14.- Se debe indicar que no deseamos que la base de datos sea borrada cuando se reconfigure OpenLDAP

![](images/sec03/p033_f03.png)

15.- Indicamos que deseamos mover las bases de datos anteriores

![](images/sec03/p034_f01.png)

16.- Luego de los pasos anteriores el instalador reconfigurará OpenLDAP con los valores deseados, con eso se podrá importar la estructura de usuarios y grupos para GENis

![](images/sec03/p034_f02.png)

### Configuración del Directorio para GENis

La versión 1 de GENis no cuenta con una herramienta integrada para el alta o la gestión de las cuentas de usuario. No obstante, es posible precargar GENIS con cuentas de usuarios de prueba genéricos o, mejor aún, con cuentas de usuario específicas para cada usuario del laboratorio.

Esta configuración puede ser realizada directamente desde la línea de comandos, ingresando los parámetros para cada cuenta de usuario, o mediante el uso de un archivo con formato de intercambio de directorio que pueda ser entendido por el directorio LDAP (también conocido como formato LDIF). En el caso que las cuentas a generar sean pocas, es posible que la configuración por línea de comandos sea la más recomendable; por el otro lado, la configuración mediante la importación de archivos suele contar con varias ventajas, como disminuir las posibilidades de errores en el ingreso de los datos, y hacer de la generación de cuentas de usuario un proceso mucho más rápido.

Además, para realizar parte de la configuración del directorio de GENis, es necesario contar con un equipo adicional que pueda conectarse al servidor de GENis a los efectos de realizar las tareas de administración del directorio y, en caso de optar por la opción del archivo de intercambio, desde donde subir el archivo. Adicionalmente, en caso de utilizar un archivo de intercambio LDIF, será necesario que este equipo adicional cuente con un editor de texto desde donde generar el archivo.

**Nota:** A los fines de este documento, se utilizará la estructura "***X-GENIS-LDAPConfig_Base_FULL.ldif***" la cual contiene toda la estructura de usuarios y grupos para que GENis funcione correctamente. Esta se proporciona como parte de este documento y debe ser copiada al Servidor donde se ejecutará GENis

4.- Abra el cliente SCP (WinSCP) y mueva el archivo de manera offline al servidor

![](images/sec03/p035_f01.png)

5.- Para importar el archivo, ejecute el comando:

```
sudo ldapadd -x -D cn=admin,dc=genis,dc=local -W -f X-GENIS-LDAPConfig_Base_FULL.ldif
```

6.- Se deberá ingresar la contraseña del directorio para completar la importación del archive

![](images/sec03/p035_f02.png)

7.- Ingresada la contraseña se importarán todas las estructuras al nuevo directorio

![](images/sec03/p035_f03.png)

## Instalación y Configuración del Ambiente de Ejecución Java

El ambiente de Ejecución JAVA o *Java Runtime Environment* consiste en una Máquina Virtual Java (JVM), las clases básicas de la plataforma Java y librerías de soporte de la plataforma. El ambiente de Ejecución Java es la porción del software necesaria para correr código Java.

Si bien la aplicación GENis se encuentra desarrollada en Scala, el ambiente de ejecución Java es necesario para correr la aplicación GENis.

### Instalación del Paquete Java Runtime Environment 8

1.- Ingrese al equipo con el usuario ***genis-user*** (no es necesario si al final de la tarea anterior no salió del sistema).

2.- Inicie la instalación del paquete **openjdk-8-jre**. Este es el paquete que instala el producto Java Runtime Environment 8. Para eso, ejecute el siguiente comando:

```
sudo apt-get install openjdk-8-jre
```

![](images/sec03/p036_f01.png)

![](images/sec03/p036_f02.png)

3.- La instalacion iniciara y descargara todos los paquetes necesarios desde Internet, pasados unos minutos finalizara con éxito

![](images/sec03/p037_f01.png)

4.- Para verificar que la instalación ha sido satisfactoria, ejecute el siguiente comando:

```
java –version
```

![](images/sec03/p037_f02.png)

## Instalación de la Base de Datos Relacional

PostgreSQL es un motor de bases de datos relacional. GENis utiliza PostgreSQL para almacenar parte de la información de los perfiles, específicamente información asociada a las causas y datos filiatorios, información de la aplicación y registros de operaciones.

### Instalación de PostgreSQL 9.6

1.- Ingrese al equipo con el usuario genis-user (no es necesario si al final de la tarea anterior no salió del sistema).

2.- Inicie la instalación del paquete postgresql-9.6. Este es el paquete que instala el producto PostgreSQL Para eso, ejecute el siguiente comando:

```
sudo apt-get install postgresql
```

![](images/sec03/p038_f01.png)

### Configuración de PostgreSQL para GENis

Una vez que el motor de base de datos se encuentra instalado, es necesario realizar un conjunto de configuraciones para que pueda servir su propósito. Es necesario crear al menos un usuario y un conjunto de bases de datos para almacenar la información.

1.- En primer lugar, es necesario crear un usuario que será el que GENis usará para las conexiones con la base de datos. Para este caso, usaremos: **_genissqladmin_** con contraseña **_contraseña-sql-demo_**. Ejecute el siguiente comando:

```
sudo adduser genissqladmin
```

2.- Para poder avanzar, ingrese la contraseña del usuario genisadminuser. Luego completar con la contraseña para este nuevo usuario y, a discreción el resto de los datos (son opcionales), que pide la herramienta adduser. Confirmar la creación del usuario al finalizar presionando [Y]

![](images/sec03/p038_f02.png)

Puesto que el usuario “postgres” puede ejecutar operaciones sobre la base de datos, las siguientes tareas se tienen que realizar con este usuario.

3.- El siguiente paso es crear un usuario de la base de dato para ser usado por GENis en las operaciones que éste haga sobre la misma. Una vez que se haya creado el usuario, es necesario indicar una contraseña para el mismo. En este caso, y para hacerlo coincidir con el usuario de conexión, usaremos: **_genissqladmin_** con contraseña **_contraseña-sql-demo_**. Ejecute los comandos debajo uno a continuación del otro:

```
sudo -u postgres createuser -d -e -S -R genissqladmin
```

![](images/sec03/p039_f01.png)

```
sudo -u postgres psql -c "ALTER USER genissqladmin PASSWORD 'contraseña-sql-demo';"
```

![](images/sec03/p039_f02.png)

4.- Ahora es necesario crear dos bases de datos. Para esto se utilizará el usuario “genissqladmin” de manera que sea identificado como el propietario de las bases. La primera es para almacenar información que la aplicación utilizará para su operación, la segunda es para el almacenamiento de los registros de transacciones de la aplicación. Ejecute los siguientes comandos uno a continuación del otro:

```
sudo -u genissqladmin createdb -e genisdb
```

```
sudo -u genissqladmin createdb -e genislogdb
```

![](images/sec03/p039_f03.png)

## Instalación de la Base de Datos No Relacional

MongoDB es un motor de bases de datos no relacional, GENis utiliza MongoDB para almacenar la información de los perfiles.

### Instalación del Paquete MongoDB

1.- Ingrese al equipo con el usuario genisadminuser (no es necesario si al final de la tarea anterior no salió del sistema).

La instalación de MongoDB requiere de cierta configuración antes de poder realizar la instalación de los paquetes propiamente dicha. Puesto que MongoDB 3.4 no se encuentra en los repositorios habituales, es necesario actualizar la lista de repositorios del servidor

2.- En sistemas operativos Debian 9 es necesario instalar el paquete dirmngr para que se puedan importar las claves públicas, el mismo se instala mediante el siguiente comando:

```
sudo apt-get install dirmngr
```

![](images/sec03/p040_f01.png)

3.- Luego, es necesario importar la clave pública utilizada para firmar los paquetes. Para eso, ejecute el siguiente comando:

```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```

![](images/sec03/p040_f02.png)

4.- Una vez que se ha importado la clave pública, es necesario modificar el archivo desde el sistema operativo busca las fuentes (/etc/sources.list) para poder ubicarlo y descargarlo. Para eso, ejecute el siguiente comando:

```
echo "deb http://repo.mongodb.org/apt/debian jessie/mongodb-org/3.4 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

![](images/sec03/p041_f01.png)

5.- En instalaciones con Debian 9 es necesario añadir los repositorios de Debian 8 “Jessie” para que funcione la instalacion de MongoDB, se debe editar el archivo /etc/apt/sources.list y añadir la siguiente línea al final:

```
deb http://ftp.debian.org/debian jessie-backports main
```

![](images/sec03/p041_f02.png)

6.- Una vez que el repositorio se encuentra configurado, es necesario actualizar las fuentes. Para eso ejecute el siguiente comando:

```
sudo apt-get update
```

![](images/sec03/p041_f03.png)

7.- Ahora es momento de disparar la instalación. Ejecute el siguiente comando:

```
sudo apt-get install -y mongodb-org
```

![](images/sec03/p042_f01.png)

8.- Una vez que se completa la instalación, Mongo inicia los servicios automáticamente. Para verificar que la configuración es correcta, ejecute el siguiente comando:

```
sudo service mongod start
```

![](images/sec03/p042_f02.png)

9.- Para que MongoDB inicie durante el inicio se debe ejecutar el siguiente comando:

```
sudo systemctl enable mongod.service
```

![](images/sec03/p042_f03.png)

10.- Para que funcionen ciertas características en GENis se deben crear las siguientes colleciones de datos, se pueden crear de manera manual o mediante un script denominado “MongoSetup” el cual se proporciona junto a este documento

```
mongo pdgdb --eval "db.createCollection('profiles')"
```

```
mongo pdgdb --eval "db.createCollection('matches')"
```

```
mongo pdgdb --eval "db.createCollection('electropherograms')"
```

```
mongo pdgdb --eval "db.createCollection('scenarios')"
```

```
mongo pdgdb --eval "db.profiles.createIndex({categoryId:1})"
```

```
mongo pdgdb --eval "db.createCollection('pedigrees')"
```

```
mongo pdgdb --eval "db.createCollection('pedigreeMatches')"
```
