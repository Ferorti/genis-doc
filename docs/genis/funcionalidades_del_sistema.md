Esta sección describe el funcionamiento de GENis y sus funcionalidades principales, organizadas por módulos operativos.


## Gestión de usuarios y control de acceso

Este módulo permite administrar el acceso al sistema y garantizar que las operaciones se realicen únicamente por usuarios autorizados.


- Solicitud, activación y desactivación de cuentas de usuario.
- Inicio de sesión y gestión de credenciales.
- Autenticación con segundo factor (TOTP).
- Blanqueo de contraseñas.
- Registro y auditoría de accesos al sistema.



## Gestión de roles y permisos

Define los perfiles de acceso y las acciones permitidas dentro del sistema, de acuerdo con las responsabilidades asignadas a cada usuario.

- Creación, modificación y eliminación de roles.
- Asignación de permisos asociados a cada rol.
- Control de acceso a las distintas funcionalidades del sistema según el rol asignado.


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

**Nota**: En los módulos de búsqueda de personas (MPI) y de identificación de víctimas de desastres (DVI), existen categorías predefinidas que no pueden ser eliminadas ni modificadas.


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


## Comparación y búsqueda de perfiles

Proporciona mecanismos automáticos para el contraste de perfiles genéticos almacenados en el sistema.


- Comparación de perfiles genéticos.
- Búsqueda automática de coincidencias.
- Soporte para comparación en esquemas multi-nivel (local, regional y nacional).


## Gestión de coincidencias y resultados forenses

Este módulo permite analizar, revisar y administrar los resultados derivados de las comparaciones genéticas.


- Visualización de coincidencias detectadas.
- Gestión de estados de las coincidencias.
- Asociación de coincidencias con distintos escenarios forenses.
- Acceso a los resultados estadísticos asociados.
- Notificación a genetistas ante la detección de coincidencias.


## Exportación e intercambio de información

Facilita la exportación controlada de perfiles genéticos y de la información asociada, de acuerdo con configuraciones institucionales.


- Exportación de perfiles genéticos.
- Exportación de información asociada para su intercambio institucional.



## Módulos especializados de identificación (MPI y DVI)

GENis incorpora módulos especializados para escenarios forenses específicos, con funcionalidades y restricciones propias.

---

### Identificación de Personas Desaparecidas (MPI)

El módulo de **Missing Person Identification (MPI)** está orientado a la búsqueda e identificación de personas desaparecidas mediante el contraste de perfiles genéticos.

#### Particularidades
- Gestión de perfiles de referencia y perfiles asociados a personas desaparecidas.
- Comparación genética en el marco de investigaciones de búsqueda de personas.
- Uso de categorías y reglas específicas definidas para este tipo de casos.
- Restricciones sobre la modificación de categorías predefinidas.

>[Link a la publicación científica](https://www.sciencedirect.com/science/article/pii/S1875176822000506)

---

### Identificación de Víctimas de Desastres (DVI)

El módulo de **Disaster Victim Identification (DVI)** está diseñado para operar en escenarios de desastres con múltiples víctimas.

#### Particularidades
- Gestión de perfiles genéticos asociados a víctimas de desastres.
- Comparación sistemática de perfiles en contextos de identificación masiva.
- Uso de categorías específicas adaptadas a escenarios DVI.
- Restricciones explícitas sobre la modificación de categorías y estructuras predefinidas.

>[Link a la publicación científica](https://www.sciencedirect.com/science/article/pii/S2665910720300815)

---

## Auditoría, trazabilidad e integridad de la información

Este módulo garantiza el control y la trazabilidad de las operaciones realizadas dentro del sistema.

- Registro detallado de las acciones realizadas por los usuarios.
- Separación entre información operativa y datos de auditoría.
- Trazabilidad completa de las operaciones del sistema.
- Mecanismos opcionales de verificación de integridad de perfiles mediante firmas criptográficas y registros inmutables.

