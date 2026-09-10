# CONFIGURACION DE RAID

1.- Para la configuración de un esquema de RAID en una nueva instalacion de Linux se debe elegir a la hora de configurar los discos y el esquema de particionamiento de manera manual

![](images/sec05/p045_f01.png)

2.- Se debe seleccionar cada uno de los discos y crear una partición vacía para posteriormente poder añadirlos a un nuevo esquema de RAID

![](images/sec05/p045_f02.png)

![](images/sec05/p046_f01.png)

3.- Concluida la creacion de las particiones se debe crear un nuevo RAID en base a los discos que se encuentran instalados en el Servidor.

![](images/sec05/p046_f02.png)

4.- Se debe indicar que queremos guardar los cambios y proseguir con la configuración

![](images/sec05/p047_f01.png)

5.- Indicaremos que queremos configurar un nuevo esquema de múltiples dispositivos (MD)

![](images/sec05/p047_f02.png)

6.- Dependiendo del tipo de arreglo que deseemos configurar se deberá optar por los diferentes tipos de RAID que ofrece el asistente, para el propósito de este documento será un RAID 5

![](images/sec05/p048_f01.png)

7.- Se deben indicar la cantidad de discos que participaran de este, para un RAID 5 un mínimo de 3 discos es requerido

![](images/sec05/p048_f02.png)

8.- Se debe indicar la cantidad de “spare devices”, para el propósito de este documento el valor será 0

![](images/sec05/p049_f01.png)

9.- Se debe seleccionar todos los discos que participaran del arreglo, en esta etapa se visualizan todos los discos conectados al Servidor de manera física o virtual

![](images/sec05/p049_f02.png)

10.- Se deben confirmar los cambios realizados en los pasos anteriores

![](images/sec05/p050_f01.png)

11.- Se debe indicar que terminamos la configuración del apartado de lo que respecta a RAID, a partir de este punto veremos un volumen virtual el cual es la suma de los dispositivos físicos seleccionados

![](images/sec05/p050_f02.png)

12.- Seleccionaremos la opción de particionamiento guiado

![](images/sec05/p051_f01.png)

13.- Seleccionaremos la opción de usar el disco entero junto con la opción de encriptación del volumen

![](images/sec05/p051_f02.png)

14.- Seleccionaremos el dispositivo que se muestra primero en la lista y que corresponde al arreglo RAID que fue creado en los pasos anteriores

![](images/sec05/p052_f01.png)

15.- Se debe seleccionar la opción todos los archivos en una sola partición

![](images/sec05/p052_f02.png)

16.- Confirmaremos que queremos guardar los cambios de esta configuración

![](images/sec05/p053_f01.png)

17.- El asistente hará un borrado de seguridad de los volúmenes antes de empezar la copia de los archivos, este paso puede omitirse dado que toma cierto tiempo en realizarse, pero es la opción más segura

![](images/sec05/p053_f02.png)

18.- Se nos preguntara por la clave para la desencriptacion del volumen cada vez que el equipo inicia. Es recomendable usar una contraseña no trivial

![](images/sec05/p054_f01.png)

19.- Concluidos los pasos anteriores se nos presentara un resumen de toda la configurar a realizar sobre los volúmenes, si estamos conformes aceptamos para que realice los cambios

![](images/sec05/p054_f02.png)

![](images/sec05/p055_f01.png)

20.- Confirmado los cambios empezará la copia de archivos y la instalacion se desarrollará de manera normal como si estuviéramos haciendo una instalacion del tipo estándar.

![](images/sec05/p055_f02.png)

21.- Llegando al final de la instalacion, en la sección que pregunta sobre que dispositivo se instalara el gestor de arranque (GRUB) se debe indicar el dispositivo denominado SBA, en pasos posteriores se instalara este gestor sobre cada disco que forma parte del arreglo. Esto permite que ante la falla de un dispositivo se pueda iniciar desde cualquiera de los discos que se encuentran en funcionamiento

![](images/sec05/p056_f01.png)

![](images/sec05/p056_f02.png)

22.- La instalacion termino con éxito y necesitamos reiniciar el Servidor, al igual que en una instalacion normal con volúmenes encriptados se nos preguntara por la contraseña para poder montar el volumen

![](images/sec05/p057_f01.png)

![](images/sec05/p057_f02.png)

23.- Podremos ver el estado del RAID en todo momento mediante el siguiente comando:

```
sudo mdadm -D /dev/md0
```

![](images/sec05/p058_f01.png)

24.- Como se indicó en pasos anteriores es necesario instalar el gestor de arranque (GRUB) en cada uno de los discos que forman parte del arreglo, esto se realiza mediante el siguiente comando:

```
sudo grub-install /dev/xxx
```

Nota: donde xxx es el nombre de cada dispositivo

![](images/sec05/p058_f02.png)
