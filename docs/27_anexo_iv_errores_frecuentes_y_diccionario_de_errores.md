# Anexo IV: Errores frecuentes y diccionario de errores

Durante la operación cotidiana de GENis pueden presentarse mensajes de error asociados a validaciones internas del sistema, restricciones de estado, permisos de usuario o inconsistencias en los datos ingresados. Estos mensajes cumplen una función preventiva y de control, orientada a preservar la integridad de la base de datos, la trazabilidad de los perfiles y la coherencia científica de las búsquedas y comparaciones.

El presente anexo reúne un **listado de los errores más frecuentes observados en la práctica**, con una breve explicación de su significado operativo y el contexto en el que suelen aparecer. Este listado no reemplaza la documentación técnica completa del sistema, sino que actúa como una **guía rápida de referencia para el usuario**, facilitando la identificación del problema y la toma de decisiones adecuadas.

Para el detalle completo y actualizado de todos los mensajes de error definidos en GENis, se remite al **diccionario oficial de errores** disponible en el repositorio público del proyecto, el cual constituye la fuente primaria de referencia técnica.

## Errores más frecuentes

**1. E0101 – Perfil no encontrado**

Indica que el perfil solicitado no existe en la base de datos o no es accesible para el usuario actual. Suele aparecer al intentar modificar, asociar o eliminar un perfil inexistente o ya dado de baja.

**2. E0104 – No se puede pasar del estado {0} al estado {1}**

Error de transición de estado. Ocurre cuando se intenta cambiar el estado de un perfil o entidad sin cumplir las condiciones previas requeridas por el sistema.

**3. E0106 – No se puede actualizar un perfil en estado {0}**

El perfil se encuentra en un estado que impide modificaciones (por ejemplo, asociado a coincidencias, escenarios o pedigríes activos).

**4. E0112 – No se pueden agregar análisis a un perfil con coincidencias confirmadas o pendientes**

Protege la integridad de las coincidencias ya generadas. Obliga a resolver primero las coincidencias antes de modificar el perfil.

**5. E0126 – El perfil está asociado a un pedigrí activo o en construcción**

Impide la eliminación o modificación de perfiles que participan en pedigríes en uso dentro del módulo MPI/DVI.

**6. E0129 – El perfil tiene matches de MPI/DVI pendientes**

Indica que existen coincidencias aún no descartadas o confirmadas, bloqueando ciertas operaciones.

**7. E0201 – El pedigrí no tiene asociada una base de frecuencias**

Error frecuente al activar un pedigrí sin haber configurado previamente la base de frecuencias poblacionales requerida para el cálculo.

**8. E0204 – El usuario no tiene permisos para confirmar la coincidencia**

Error de autorización. El rol del usuario no habilita la acción solicitada.

**9. E0211 – El caso contiene pedigríes activos**

Impide cerrar o dar de baja un caso que aún tiene pedigríes en estado activo.

**10. E0302 – El formato de las líneas no coincide con la cabecera**

Error típico en carga masiva. Indica inconsistencia entre la estructura del archivo y su encabezado.

**11. E0305 – Faltan parámetros en la cabecera del archivo**

El archivo de carga masiva no contiene todos los campos obligatorios.

**12. E0610 – No están configuradas las opciones estadísticas por defecto**

Indica que faltan configuraciones estadísticas mínimas necesarias para búsquedas o cálculos automáticos.

**13. E0643 – El usuario no tiene permisos para modificar el pedigrí**

Restricción por rol o por estado del pedigrí.

**14. E0724 – La instancia superior rechazó el perfil**

Error de interconexión entre instancias. El perfil no cumple con los criterios de replicación definidos.

**15. E0802 – La sesión es inválida o ha expirado**

Error de autenticación. Requiere volver a iniciar sesión.

El diccionario oficial completo de mensajes de error de GENis, actualizado y mantenido por el equipo de desarrollo, se encuentra disponible en el repositorio público del proyecto en GitHub:

https://github.com/fundacion-sadosky/genis/blob/main/conf/messages

Este repositorio contiene la definición exhaustiva de todos los códigos de error, advertencias y mensajes informativos utilizados por el sistema, y debe considerarse la fuente primaria ante dudas técnicas o situaciones no contempladas en el presente anexo.
