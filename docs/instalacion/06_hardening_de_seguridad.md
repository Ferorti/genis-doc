# Hardening de seguridad

### Deshabilitar acceso del usuario root mediante SSH

Es altamente recomendado deshabilitar el acceso del usuario privilegiado mediante SSH, para esto es necesario editar el archivo de configuración localizado en **/etc/ssh/sshd.conf** y alterar el siguiente valor:

```
#PermitRootLogin no
```

![](images/sec06/p059_f01.png)

Para que se apliquen los cambios se debe ingresar el siguiente comando:

```
sudo service ssh restart
```

### Configurar una contraseña “fuerte” para el usuario root

Es recomendable configurar una contraseña no trivial y lo suficientemente fuerte para el usuario root, para hacer esto se debe tener permisos de sudo desde el usuario que se realizara esta configuración y este es el comando:

```
sudo passwd root
```

![](images/sec06/p060_f01.png)

Nota: el sistema solicita validar la contraseña 2 veces para que el cambio sea aplicado

### Configurar las opciones de Firewall en el Servidor (IPTABLES)

IPTABLES es un poderoso Firewall que se encuentra instalado en el Kernel de Linux, el objetivo de configurarlo en el entorno de la aplicación GENis es solo permitir los puertos que este usa. Dependiendo de la topología de red del laboratorio donde se encuentra instalado también es posible deshabilitar SSH para bloquear cualquier intento de acceso por este protocolo.

Se puede tener una configuración de IPTABLES ya establecida la cual se puede aplicar de manera uniforme a todos los Servidores donde se implementa, la estructura del archivo se indica a continuación:

![](images/sec06/p060_f02.png)

Nota: Este archivo se provee como parte de los scripts de instalacion

Para instalar estas reglas, primero se debe copiar el archivo por SFTP al Servidor donde se encuentra GENis y luego importarlas con el siguiente comando:

```
sudo iptables-restore < /home/genis-user/iptables-genis
```

![](images/sec06/p060_f03.png)

Desafortunadamente IPTABLES no guarda estas reglas de forma persistente, esto significa que cuando se reinicia el equipo estas se pierden. Para hacer que estos cambios sean persistentes se debe instalar el paquete iptables-persistent mediante el siguiente comando:

```
sudo apt-get install iptables-persistent
```

![](images/sec06/p061_f01.png)

Durante la instalacion de los paquetes el asistente nos pregunta si queremos guardar las reglas actuales para que sean conservadas luego de un reinicio

![](images/sec06/p061_f02.png)

Con esto ya se encuentran persistentes la reglas de IPTABLES, si se hacen modificaciones a futuro sobre las reglas se pueden guardar permanente con el siguiente comando:

```
sudo iptables-save > /etc/iptables/rules.v4
```
