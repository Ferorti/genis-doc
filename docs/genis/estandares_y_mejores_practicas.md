GENis fue diseñado desde su origen (2014) según los cuatro principios de su [Declaración de principios](declaracion_de_principios.md): transparencia, colaboración, seguridad y software libre/abierto. Las recomendaciones de la **Sociedad Internacional de Genética Forense (ISFG)** sobre transparencia, disponibilidad y reproducibilidad orientaron el principio de transparencia. Esta página reúne los estándares técnicos, científicos y de seguridad concretos que el sistema sigue.

---

## Estándares de genética forense

| Organismo | Aplicación en GENis |
|---|---|
| **ISFG** (International Society for Forensic Genetics), Comisión de ADN | Transparencia, disponibilidad y reproducibilidad de los cálculos bioestadísticos forenses. Orienta el principio de transparencia (ver [Declaración de principios](declaracion_de_principios.md)). |
| **ENFSI** (European Network of Forensic Science Institutes) | Algoritmos de coincidencia en exigencia alta, media y baja ("*Guidelines for Best Practice in DNA Analysis*" y "*DNA Database Management*"). |
| **INTERPOL** | Referencia para el diseño de interoperabilidad entre bases de datos genéticas nacionales/regionales. |
| **NRC II** (National Research Council, EE.UU.) | Recomendaciones 4.1 y 4.10 para el cálculo de probabilidades de genotipo a partir de frecuencias alélicas poblacionales. |

### Recomendaciones de validación de software

La Comisión de ADN de la ISFG publicó recomendaciones para validar programas que realizan cálculos bioestadísticos en genética forense (*Forensic Science International: Genetics* 25, 2016, 191–197). Dos de ellas orientaron el diseño de GENis:

- **Reproducibilidad independiente (n.º 1).** El software debe acompañarse de un manual del usuario y describir su método, su genética poblacional y su modelo de datos, de modo que todos los cálculos puedan reproducirse por otros medios (fórmulas, otro software, otros enfoques estadísticos) y publicarse en revistas especializadas. En GENis, esto se cumple con los [Anexos técnicos I a III](../anexos/anexo_i_algoritmo_de_busqueda_de_coincidencias_de_str.md) y con las publicaciones de [Trayectoria y validación](trayectoria_y_validacion.md#publicaciones-cientificas).
- **Código abierto (n.º 7).** Para asegurar la disponibilidad continua del software, el código debe estar en un repositorio seguro (por ejemplo, GitHub) y los algoritmos describirse con detalle suficiente para permitir su reimplementación. GENis se publica bajo AGPL-3.0 en el [repositorio de la Fundación Sadosky](https://github.com/fundacion-sadosky/genis).

## Estándares de seguridad de la información

Según el [Anexo V: Marco de seguridad y protección de datos personales](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md):

- **ISO/IEC 27001**: Sistema de gestión de seguridad de la información (marco de referencia para las políticas de despliegue institucional).
- **OWASP ASVS** (Application Security Verification Standard): Estándar de verificación de seguridad de aplicaciones.
- **AGPL-3.0**: Licencia que garantiza la auditabilidad independiente del código fuente (ver [Anexo V: Licencia](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md#7-licencia)).

### Principios de "seguridad por diseño" aplicados

- Autenticación de **doble factor** obligatoria para todos los usuarios.
- **Control de acceso basado en roles** con granularidad para separar funciones administrativas, operativas y de revisión.
- **Auditoría con integridad criptográfica**, orientada a sostener la cadena de custodia forense.
- **Cifrado a nivel de aplicación**, complementario al cifrado de transporte (TLS).
- Opción de **registro en blockchain** para reforzar la integridad de los perfiles genéticos.

Las recomendaciones para el despliegue institucional (secretos, red, entorno, cuentas, respaldo, auditoría y personas) se detallan en el [Anexo V: Recomendaciones técnicas para el despliegue](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md#4-recomendaciones-tecnicas-para-el-despliegue).

## Estándares de bienes públicos digitales

El ciclo de desarrollo de GENis se guio explícitamente por:

- El **Estándar de Bienes Públicos Digitales** (Digital Public Goods Standard) de la Digital Public Goods Alliance (DPGA).
- Los **Principios de Desarrollo Digital** (Principles for Digital Development) de la Digital Impact Alliance (DIA).

## Buenas prácticas de ingeniería de software

- Metodologías ágiles de desarrollo, con un equipo multidisciplinario de más de 100 expertos desde 2014 (academia, industria y gobierno).
- Cobertura de tests automatizados con umbral objetivo de 80% (`sbt test`, `sbt coverage`) y linting de estilo (`sbt scalastyle`).
- Separación estricta entre el motor de negocio (`app/` / `modules/core`) y el frontend, con contratos de API estables entre ambos.
- Transparencia algorítmica: los modelos de cálculo de LR están documentados públicamente en los [Anexos técnicos I a III](../anexos/anexo_i_algoritmo_de_busqueda_de_coincidencias_de_str.md) para permitir su reproducción independiente por peritos de parte.

## Tecnologías y herramientas

GENis se construye íntegramente con tecnologías de código abierto y herramientas de desarrollo ágil:

| Ámbito | Componentes |
|---|---|
| Aplicación | Scala, Play, Slick, AngularJS, Bootstrap |
| Datos e infraestructura | PostgreSQL, MongoDB, Hadoop, Debian |
| Desarrollo y calidad | Scrum, Agilefant, GitLab, Jenkins, TestLink, Selenium |
| Seguridad | Touchpoints, OpenSSL, cifrado AES de 256 bits, autenticación multifactor con Google Authenticator, gestor de contraseñas |

## Referencias normativas citadas en la documentación

- GNU Affero General Public License, version 3. Free Software Foundation, 2007.
- OWASP Application Security Verification Standard (ASVS), versión vigente.
- ISO/IEC 27001: Information security management systems: requirements.
- ENFSI, *Guidelines for Best Practice in DNA Analysis* y *DNA Database Management Review and Recommendations* (DNA-GDL-004, 2023).
- Coble, M. D. et al. DNA Commission of the ISFG: recommendations on the validation of software programs performing biostatistical calculations for forensic genetics applications. *Forensic Science International: Genetics* 25 (2016) 191–197.
- Declaración de Principios de GENis. Fundación Sadosky.
