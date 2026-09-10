# Requerimientos del sistema

## Requerimientos de Equipamiento

### Requerimientos mínimos del equipo servidor para GENis

GENis requiere como mínimo una (1) computadora física o máquina virtual con las siguientes características:

- Procesador:
  - 1 Intel Xeon 2 GHz (mínimo) con doble núcleo o equivalente.
- Memoria:
  - Mínimo Requerido: 3 GB RAM
  - Mínimo Recomendado: 12 GB RAM
- Almacenamiento:
  - 32 GB reservados para el SO y aplicaciones de base.
  - 250GB para almacenamiento de datos.
- Conectividad:
  - Placa de Red Fast Ethernet de 1000 MB/s
- Almacenamiento Extraíble:
  - Puerto USB.

En caso de no contar con un equipo de estas características, y se esté evaluando la adquisición de equipamiento nuevo, es aconsejable contemplar los requerimientos recomendados debajo de estas líneas. Si bien éstos son superiores a los mencionados más arriba, las características superiores le permitirán tener una mejor experiencia con el producto, así como prepararlo para los requerimientos recomendados del producto final.

### Requerimientos recomendados del sistema para GENis

GENis funciona mejor en un equipo con las siguientes características:

- Procesador:
  - Intel Core i5 o Xeon E3-1200 v3 @ 3.4 GHz con cuatro núcleos o equivalente.
- Memoria:
  - 12 GB RAM
- Almacenamiento:
  - 1 volumen de entre 1 y 5 TB efectivo en RAID 5 por hardware / Software de acuerdo al uso

**<u>Nota Importante – Criterio para el almacenamiento:</u>**

Al momento de la escritura de este documento, el tamaño promedio de un objeto (perfil/análisis) en una instancia de laboratorio simulada ronda entre los 2 y los 3 MB, dependiendo del almacenamiento de imágenes (ej. electroferogramas, fotos, imagen de huellas, etc.).

En función de la consideración anterior, se plantea el siguiente criterio para calcular el espacio de almacenamiento:

```text
1 registro ...................................................................................... 3 MB
1.000 registros .............................................................................. 3 GB
1.000.000 registros ....................................................................... 3 TB
```

- Conectividad:
  - Placa de Red Gigabit Ethernet
- Almacenamiento Extraíble:
  - Puerto USB.

### Requerimientos de equipamiento adicional para usar GENis

En función de que la aplicación GENis v1 hace uso de un sistema de doble factor para la autenticación de los usuarios del sistema (Google Authenticator ó FreeOTP), es un requerimiento adicional que **<u>cada persona que vaya a hacer uso del mismo</u>** (esto es, cada usuario del sistema) cuente con un dispositivo, un teléfono inteligente, o Smartphone, capaz de correr la aplicación móvil que permite hacer del teléfono un dispositivo que genera contraseñas. Esto, en GENis, se logra mediante el uso de una de dos posibles aplicaciones, la primera es Google Authenticator, la segunda FreeOTP.

- Requerimientos para Google Authenticator:
  - **Teléfonos Android:** Android versión 2.1 o superior.
  - **iPhone, iPod Touch, o iPad:** Apple iOS versión 5.0 o superior.
- Requerimientos para FreeOTP:
  - **Teléfonos Android:** Android versión 4.0 o superior.
  - **iPhone, iPod Touch, o iPad:** Apple iOS versión 7.0 o superior.
