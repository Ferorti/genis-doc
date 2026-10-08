Esta sección describe las funcionalidades principales de GENis, organizadas por módulos operativos. Cada módulo indica las páginas del manual donde se detalla su operación.


## Gestión de usuarios y control de acceso

Este módulo permite administrar el acceso al sistema y garantizar que las operaciones se realicen únicamente por usuarios autorizados.

- Solicitud, activación y desactivación de cuentas de usuario.
- Inicio de sesión y gestión de credenciales.
- Autenticación con segundo factor (TOTP).
- Blanqueo de contraseñas.
- Registro y auditoría de accesos al sistema.

Ver: [Solicitar una cuenta](../administracion/solicitar_una_cuenta.md).


## Gestión de roles y permisos

Define los perfiles de acceso y las acciones permitidas dentro del sistema, de acuerdo con las responsabilidades asignadas a cada usuario.

- Creación, modificación y eliminación de roles.
- Asignación de permisos asociados a cada rol.
- Control de acceso a las distintas funcionalidades del sistema según el rol asignado.

Ver: [Roles](../administracion/roles.md).


## Configuración institucional y catálogos del sistema

Este módulo permite parametrizar GENis según el contexto institucional y forense en el que se utiliza.

- Gestión de laboratorios.
- Gestión de genetistas y actores técnicos.
- Gestión de tipos de materiales biológicos.
- Gestión de categorías y subcategorías.
- Definición de reglas de búsqueda.
- Gestión de kits de análisis genético.
- Gestión de marcadores genéticos, incluyendo microvariantes y valores alélicos fuera de escala.
- Gestión de bases de datos de frecuencias.

Ver: [Laboratorios](../administracion/laboratorios.md), [Genetistas](../administracion/genetistas.md), [Tipos de materiales biológicos](../administracion/tipos_de_materiales_biologicos.md), [Categorías](../administracion/categorias.md), [Kits](../administracion/kits.md), [Marcadores](../administracion/marcadores.md), [Bases de datos de frecuencias](../administracion/bases_de_datos_de_frecuencias.md) y [Mitocondrial](../administracion/mitocondrial.md).


## Gestión de perfiles genéticos

Permite registrar, almacenar y administrar perfiles genéticos humanos y la información asociada a los mismos.

- Alta de perfiles genéticos.
- Carga de análisis autosómicos.
- Carga de análisis mitocondriales.
- Asociación de perfiles con evidencias.
- Etiquetado de evidencias.
- Carga masiva de perfiles.
- Flujos de aprobación con múltiples niveles.
- Rechazo de perfiles.
- Baja de perfiles genéticos.

Ver: [Alta de perfiles](../busqueda_de_perfiles/alta_de_perfiles.md) y [Baja de perfiles](../busqueda_de_perfiles/baja_de_perfiles.md).


## Comparación y búsqueda de perfiles

Proporciona mecanismos automáticos para el contraste de perfiles genéticos almacenados en el sistema.

- Comparación de perfiles genéticos.
- Búsqueda automática de coincidencias.
- Soporte para comparación en esquemas multi-nivel (local, regional y nacional).

Ver: [Comparador de perfiles](../busqueda_de_perfiles/comparador_de_perfiles.md), [Coincidencia de perfiles](../busqueda_de_perfiles/coincidencia_de_perfiles.md) e [Interconexión de instancias](../busqueda_de_perfiles/interconexion_de_instancias.md).


## Gestión de coincidencias y resultados forenses

Este módulo permite analizar, revisar y administrar los resultados derivados de las comparaciones genéticas.

- Visualización de coincidencias detectadas.
- Gestión de estados de las coincidencias.
- Asociación de coincidencias con distintos escenarios forenses.
- Acceso a los resultados estadísticos asociados.
- Notificación a genetistas ante la detección de coincidencias.

Ver: [Gestor de coincidencias y cálculos forense](../busqueda_de_perfiles/gestor_de_coincidencias_y_calculos_forense.md) y [Notificaciones](../administracion/notificaciones.md).


## Búsqueda de personas e identificación de víctimas (MPI y DVI)

Permite gestionar los casos de [búsqueda de personas (MPI)](../usos_forenses/busqueda_de_personas_mpi.md) y de [identificación de víctimas de desastres (DVI)](../usos_forenses/identificacion_de_victimas_dvi.md), basados en la comparación por parentesco.

- Creación y seguimiento de casos.
- Asociación de perfiles de referencia y, en DVI, de perfiles post mortem.
- Construcción de pedigríes y chequeo de consistencia.
- Búsqueda por parentesco, con *screening* mitocondrial opcional en MPI.
- Gestión de coincidencias y validación mediante escenarios.
- Agrupación de restos de un mismo individuo (DVI).

Estos módulos usan categorías predefinidas que no pueden ser eliminadas ni modificadas.

Ver: [Búsqueda de personas](../busqueda_de_perfiles/busqueda_de_personas.md).


## Exportación e intercambio de información

Facilita la exportación controlada de perfiles genéticos y de la información asociada, de acuerdo con configuraciones institucionales.

- Exportación de perfiles genéticos.
- Exportación de información asociada para su intercambio institucional.

Ver: [Exportador de perfiles](../busqueda_de_perfiles/exportador_de_perfiles.md) e [Interconexión de instancias](../busqueda_de_perfiles/interconexion_de_instancias.md).


## Auditoría, trazabilidad e integridad de la información

Este módulo garantiza el control y la trazabilidad de las operaciones realizadas dentro del sistema.

- Registro detallado de las acciones realizadas por los usuarios.
- Separación entre información operativa y datos de auditoría.
- Trazabilidad completa de las operaciones del sistema.
- Mecanismos opcionales de verificación de integridad de perfiles mediante firmas criptográficas y registros inmutables.

Ver: [Auditoría](../administracion/auditoria.md), [Reportes](../administracion/reportes.md) y [Anexo V](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md).
