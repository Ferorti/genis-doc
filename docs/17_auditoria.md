# 17. AUDITORÍA

## AUDITORÍA Y TRAZABILIDAD EN GENIS

GENis incorpora un sistema de auditoría integral diseñado para garantizar la trazabilidad de las operaciones realizadas sobre la base de datos genética y sus elementos asociados. Estas funcionalidades se alinean con las recomendaciones actuales de organismos internacionales (ISFG, ENFSI, SWGDAM) y con los requisitos de sistemas de gestión de calidad utilizados en laboratorios forenses (por ejemplo, ISO/IEC 17025 e ISO/IEC 27001).

A continuación se resumen las principales características del módulo de auditoría y su relación con dichas recomendaciones:

### Registro detallado de operaciones (audit trail)

GENis mantiene un **registro centralizado de eventos** que almacena, como mínimo, la siguiente información para cada acción relevante:

- Usuario que ejecuta la acción (según sus credenciales personales).
- Fecha y hora exacta de la operación.
- Tipo de acción realizada (alta, modificación, baja lógica, aceptación/rechazo de análisis, cambios de configuración, búsquedas, exportaciones, etc.).
- Objeto afectado (perfil, análisis, categoría, usuario, parámetro de configuración, etc.).
- En las operaciones críticas, valores anteriores y nuevos.

Este nivel de detalle permite reconstruir el historial de un perfil genético o de una configuración del sistema, en concordancia con la exigencia de **trazabilidad completa** de los registros que plantean las normas internacionales para bases de datos de ADN.

### Trazabilidad de usuarios y no repudio

El acceso al sistema se realiza mediante credenciales individuales y **roles de usuario** claramente diferenciados (administrador, operador, responsable, auditor, entre otros). GENis vincula cada operación registrada en la auditoría a un usuario específico, lo que asegura:

- **Responsabilidad individual** sobre las acciones realizadas.
- Imposibilidad de "diluir" la autoría de cambios en cuentas genéricas.
- Condiciones de **no repudio**: un usuario no puede negar razonablemente haber ejecutado una acción que figura en el registro de auditoría.

Esta filosofía es coherente con los principios de **seguridad de la información y control de accesos** establecidos en estándares como ISO/IEC 27001, así como con las guías de buenas prácticas para bases de datos genéticas de uso criminal.

### Integridad de los registros y baja lógica

GENis implementa el concepto de **baja lógica** de perfiles, lo que significa que:

- Los perfiles y registros asociados no se eliminan físicamente de la base de datos.
- Se marcan como inactivos o dados de baja, manteniendo su historial en la auditoría.

Este enfoque favorece la **conservación de la historia de cambios**, permite revisar decisiones pasadas y se ajusta a la idea de **no borrar trazas de actividad**, recomendada en sistemas de bases de datos sensibles. La gestión de la **fecha de caducidad** y de las bajas se apoya en este esquema, dejando registro de quién decide la baja y en qué momento, sin pérdida de información histórica.

### Seguridad, acceso y soporte a auditorías externas

Además del registro de eventos, GENis incorpora mecanismos de seguridad que refuerzan la confiabilidad de la auditoría:

- **Modelo de roles y permisos** configurable, que limita qué operaciones puede ejecutar cada tipo de usuario.
- Registro de cambios de configuración del sistema y de la administración de usuarios.

Estas características facilitan la realización de **auditorías internas y externas** (por ejemplo, en el marco de acreditación según ISO/IEC 17025 o evaluaciones regulatorias), ya que:

- Permiten presentar evidencia documental de quién realizó cada acción y bajo qué perfil de permisos.
- Hacen posible verificar la aplicación de políticas de acceso, de actualización de datos y de baja de perfiles.

### Alineación con recomendaciones internacionales

En conjunto, las funcionalidades de auditoría de GENis responden a los principios que aparecen de forma consistente en las recomendaciones internacionales para bases de datos genéticas de uso criminal, entre ellos:

- **Trazabilidad completa** de operaciones sobre perfiles y configuraciones.
- **Identificación inequívoca de usuarios** y registro de fecha/hora de cada acción.
- **Conservación del historial** de cambios (baja lógica en lugar de borrado físico).
- **Separación de funciones y roles**, evitando concentrar privilegios en una única cuenta.
- Posibilidad de **revisar y auditar** el funcionamiento del sistema de manera transparente.

Es importante remarcar que GENis **proporciona las herramientas técnicas** necesarias para cumplir con estos principios, pero el **cumplimiento efectivo de las normas y regulaciones vigentes** depende de las políticas, procedimientos y controles que establezca cada institución usuaria (por ejemplo, manuales de calidad, protocolos de acceso, plazos de retención de datos y programas de auditoría periódica).

GENis permite auditar todas las actividades realizadas sobre el sistema accediendo al menú
Monitoreo/Historial de Operaciones:

![](images/sec17/p164_f01.png)

El registro de todas las operaciones realizadas por los usuarios es inalterable y se divide en lotes. Para garantizar que un lote es correcto, presionar en ![](images/sec17/p164_f02.png) y se obtiene la comprobación mediante el siguiente mensaje en pantalla:

![](images/sec17/p165_f01.png)

Para realizar análisis o control de las operaciones realizadas por los usuarios sobre el sistema se presiona en el ![](images/sec17/p165_f02.png) botón y se accede a la siguiente pantalla:

![](images/sec17/p165_f03.png)

Se pueden realizar búsquedas sobre el lote de operaciones por usuario, fecha, operación y resultado (Ok o Error).
También puede recorrerse el lote con los controles ubicados en la parte inferior de la pantalla.

### Trazabilidad del perfil genético

Además del registro global de auditoría del sistema, GENis implementa un mecanismo de trazabilidad específica a nivel de cada perfil genético.
Desde la lista de perfiles, los usuarios autorizados pueden acceder a la opción de trazabilidad asociada a un perfil individual, que permite visualizar el historial completo de acciones realizadas sobre dicho registro.

El historial de un perfil genético puede incluir, entre otros eventos:

- creación del perfil (alta inicial),
- identificación del usuario responsable de la carga,
- incorporación de análisis genéticos (autosomal, mitocondrial u otros),
- procesos de verificación y aceptación de análisis
- modificaciones posteriores del perfil o de sus datos asociados,
- cambios de categoría o de estado,
- replicaciones a instancias superiores de la base de datos,
- bajas lógicas y eventuales reactivaciones, cuando correspondan.

Cada uno de estos eventos se encuentra asociado de manera explícita a:

- un usuario identificado,
- una fecha y hora de ejecución,
- y el tipo de acción realizada.

Este nivel de trazabilidad permite reconstruir el ciclo de vida completo del perfil genético dentro del sistema, desde su creación hasta su baja lógica, constituyendo un elemento central para auditorías internas y externas, revisiones de calidad y el cumplimiento de los requisitos de trazabilidad establecidos por normas y recomendaciones internacionales aplicables a bases de datos genéticas de uso criminal.

![](images/sec17/p167_f01.png)
