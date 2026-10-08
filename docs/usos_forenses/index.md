# Usos forenses

GENis es una solución informática forense: un software de **gestión de perfiles genéticos forenses** que cubre el recorrido que sigue la información genética desde que se obtiene en el laboratorio hasta que se utiliza para investigar. Esa capacidad de contrastar perfiles de distintos hechos, lugares y momentos es la base sobre la que se apoya la cooperación judicial entre instituciones y entre países.

![](../images/sec22/cooperacion_f01.png)

## Del material biológico a la comparación

El flujo de trabajo se organiza en dos etapas complementarias:

| Etapa | Qué ocurre | Dónde ocurre |
|---|---|---|
| **Secuenciación** | A partir de material biológico (cabello, sangre, fluidos, tejido óseo, entre otros) se obtiene el perfil genético mediante el equipo de laboratorio, que lo traduce a datos digitales. | Laboratorio, fuera de GENis |
| **Almacenamiento y comparación** | El perfil se carga en un servidor, se almacena y se compara de forma automática contra el resto de los perfiles de la base. | GENis |

GENis no interpreta señales de laboratorio ni realiza la secuenciación: recibe perfiles ya determinados, los gestiona y los coteja. Los perfiles que se comparan corresponden a dos grandes grupos: **muestras de referencia** de sujetos conocidos y **evidencias** halladas en escenas de crimen, cuyo aportante se desconoce. Esta distinción se detalla en [Genética forense](../genis/genetica_forense.md#categorias-y-clasificacion-de-perfiles).

## Módulos que sustentan la cooperación

La cooperación regional se apoya en dos módulos de GENis, cada uno orientado a un tipo de problema:

- [**Módulo forense**](modulo_forense.md): vincula evidencias entre sí y con sujetos de referencia para identificar reincidentes y unificar investigaciones.
- [**Módulo de búsqueda de personas (MPI)**](modulo_mpi.md): cotejo de familiares con rastros y restos en casos de secuestro de menores, trata de personas y personas desaparecidas.

## Intercambio entre instancias

Para que la comparación trascienda a una única institución, las instancias de GENis se conectan entre sí mediante una arquitectura federada: cada nodo conserva la propiedad y administración de sus perfiles y comparte solo lo necesario para detectar coincidencias. Las condiciones de armonización y el circuito de envío, revisión y notificación se describen en [Interconexión de instancias](../busqueda_de_perfiles/interconexion_de_instancias.md).
