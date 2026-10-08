# Anexo V: Marco de seguridad y protección de datos personales

Este anexo reúne las recomendaciones de seguridad y protección de datos personales aplicables al despliegue y operación de GENis. Está dirigido tanto al equipo técnico responsable de la instalación como a las autoridades institucionales y usuarios finales, y describe las condiciones bajo las cuales el sistema fue concebido para operar y las prácticas que toda institución usuaria implementa para que su despliegue concreto se ajuste a esas condiciones.

## 1. Introducción

GENis es un sistema que procesa datos de alta sensibilidad cuya integridad y confidencialidad condicionan, en última instancia, la calidad de la prueba pericial. La seguridad de un sistema de este tipo es una propiedad del conjunto: depende del software, del entorno donde se despliega y de las personas que lo operan. Las recomendaciones que siguen se organizan a través de las tres dimensiones, comenzando por las premisas de diseño del software y avanzando hacia las prácticas operativas que la institución implementa.

## 2. Diseño del sistema

GENis incorpora, por diseño, un conjunto de mecanismos de seguridad que en aspectos relevantes exceden el estándar habitual del software comparable utilizado en contextos forenses. La autenticación de doble factor es obligatoria para todos los usuarios. El control de acceso basado en roles ofrece granularidad suficiente para separar funciones administrativas, operativas y de revisión.

El registro de auditoría incorpora mecanismos de integridad criptográfica orientados a sostener la cadena de custodia. La información sensible se cifra a nivel de aplicación, complementariamente al cifrado de transporte. Y la distribución bajo licencia AGPL-3.0 habilita la auditoría independiente del código por cualquier institución usuaria o tercero acreditado.

## 3. Contexto de despliegue recomendado

GENis fue concebido para operar dentro del perímetro institucional, no como aplicación expuesta a redes públicas. El despliegue recomendado se sostiene en cuatro condiciones simultáneas. La instancia se ubica en un segmento de red segregado, accesible únicamente desde estaciones de trabajo autorizadas dentro del organismo. Un servidor intermedio institucional, habitualmente denominado proxy inverso, se encarga del cifrado de transporte y de las cabeceras de seguridad que protegen al navegador del usuario. Los servicios de soporte (directorio corporativo para autenticación, sincronización temporal, respaldo cifrado, monitoreo, gestión de claves y certificados) son provistos por la infraestructura del organismo. Los controles físicos sobre el servidor se ajustan a la criticidad del servicio.

## 4. Recomendaciones técnicas para el despliegue

Antes de la puesta en producción de cualquier instancia, se regeneran todos los secretos distribuidos con el código fuente. Por la naturaleza de software libre del proyecto, GENis se entrega con una configuración de desarrollo que incluye material criptográfico, contraseñas administrativas iniciales y demás valores de uso interno; estos valores son públicos por construcción y se sustituyen por valores únicos generados localmente antes del primer uso productivo. Esta sustitución es la condición sin la cual el resto del modelo de seguridad pierde su sentido y constituye, en la práctica, la causa más prevenible de compromiso en sistemas similares.

La exposición del servicio se organiza a través de un proxy inverso institucional que termina el cifrado de transporte con certificados emitidos por una autoridad confiable, configura las cabeceras de seguridad HTTP esperadas por los navegadores modernos y restringe el acceso a las direcciones de origen autorizadas. La instancia de la aplicación, los servicios de bases de datos y los servicios auxiliares no se exponen fuera del segmento de red autorizado.

El endurecimiento del entorno es continuo: sistema operativo huésped actualizado y con un mínimo de servicios expuestos, disco cifrado, sincronización temporal confiable (de la cual depende la integridad del registro de auditoría) y plan formalizado de actualización de dependencias.

La operación cotidiana se sostiene con una política de gestión de cuentas que contempla revisión periódica del padrón de usuarios y de los permisos asignados, un esquema de respaldo cifrado almacenado fuera del sitio principal con plan de recuperación probado, monitoreo de eventos relevantes con alertas y un plan documentado de respuesta a incidentes. La auditoría externa periódica, que combine revisión de despliegue y revisión de código, es práctica recomendada.

Todo lo anterior se sostiene únicamente si el personal con acceso al sistema recibe capacitación con frecuencia al menos anual, las cuentas se dan de baja inmediatamente al cese de funciones y existen acuerdos de confidencialidad sobre el manejo de datos genéticos. La separación efectiva entre roles administrativos y roles operativos de análisis forense es la práctica que da pleno sentido al control de acceso por roles que el software ofrece.

| Ámbito | Recomendación |
| --- | --- |
| Despliegue inicial | Regenerar todos los secretos distribuidos antes de la puesta en producción |
| Exposición del servicio | Proxy inverso institucional con TLS y cabeceras de seguridad estándar |
| Red | Segmento segregado, sin exposición a Internet ni a redes externas |
| Entorno y servicios | Endurecimiento del sistema operativo, cifrado de disco, sincronización temporal; no exponer interfaces auxiliares |
| Cuentas | Política institucional de altas, bajas y modificaciones, con revisión periódica del padrón |
| Respaldo y monitoreo | Respaldo cifrado fuera del sitio, alertas y plan de respuesta a incidentes |
| Auditoría | Revisión periódica externa, combinando despliegue y código |
| Personas | Capacitación anual, acuerdos de confidencialidad, separación de funciones |

## 5. Recomendaciones para usuarios finales

Los usuarios finales de GENis son la última línea de la arquitectura de seguridad, y las prácticas que se sugieren no son formalidades: cada una atiende un vector de compromiso documentado en la experiencia con sistemas equivalentes.

El segundo factor de autenticación se mantiene en un dispositivo bajo control exclusivo del usuario, sin compartirlo, fotografiarlo ni almacenarlo en archivos accesibles a terceros. Las credenciales no se comparten bajo ninguna circunstancia, ni siquiera entre integrantes del mismo equipo, ya que cada acción registrada en el sistema queda asociada al usuario autenticado y forma parte de la cadena de custodia. La sesión activa se cierra al alejarse de la estación de trabajo, incluso por períodos breves. Cualquier comportamiento anómalo (accesos no esperados, alertas inusuales, mensajes que solicitan credenciales fuera del flujo habitual) se reporta al área de seguridad institucional sin demora. Las funciones del personal forense suelen ser de conocimiento público a través de citaciones, comunicaciones oficiales y publicaciones, siendo blancos preferenciales de ingeniería social dirigida; verificar la autenticidad de toda solicitud recibida por canales no institucionales es una práctica indispensable.

## 6. Protección de datos personales

Los datos genéticos constituyen una categoría especialmente sensible en los principales marcos normativos de protección de datos personales. Su tratamiento exige, en términos generales, una base legal explícita, una finalidad declarada con plazos de conservación acotados, medidas de seguridad reforzadas y mecanismos efectivos para el ejercicio de derechos por parte de los titulares. GENis aporta los mecanismos técnicos que habilitan estas exigencias: cifrado de la información sensible, separación de material criptográfico por usuario, registro detallado de los accesos y operaciones, y control de acceso por roles que permite implementar el principio de minimización por propósito. Las decisiones jurídicas y organizacionales que enmarcan al tratamiento (base legal, identidad del responsable, finalidad declarada, plazos, atención de derechos, transferencias internacionales, eliminación o anonimización al cierre de la causa) son institucionales y se documentan en los registros y procedimientos que cada organismo mantiene en cumplimiento de la normativa aplicable a su jurisdicción.

## 7. Licencia

GENis se distribuye bajo licencia AGPL-3.0. Conforme con dicha licencia, el software se provee tal cual, sin garantía de ningún tipo, expresa o implícita. Las recomendaciones contenidas en este anexo describen el conjunto de prácticas bajo las cuales el sistema fue concebido para operar; el cumplimiento normativo en cada jurisdicción, la configuración del entorno de despliegue, la capacitación del personal con acceso al sistema y la integridad operativa del servicio corresponden a la institución que despliega y opera GENis.

El equipo de desarrollo del proyecto se compromete a mantener la base de código bajo principios de ciencia abierta y reproducibilidad, a atender vulnerabilidades reportadas mediante un proceso documentado de divulgación responsable, y a publicar parches y nuevas versiones siguiendo el plan de mejoras del proyecto.

Este anexo se revisa con cada versión mayor de GENis y, en cualquier caso, con frecuencia al menos anual.

## Referencias

- GNU Affero General Public License, version 3. Free Software Foundation, 2007. https://www.gnu.org/licenses/agpl-3.0.html
- OWASP Application Security Verification Standard (ASVS), versión vigente. Open Web Application Security Project. https://owasp.org/www-project-application-security-verification-standard/
- ISO/IEC 27001: Information security management systems, requirements. International Organization for Standardization.
- European Network of Forensic Science Institutes (ENFSI), Guidelines for Best Practice in DNA Analysis. Versión vigente.
