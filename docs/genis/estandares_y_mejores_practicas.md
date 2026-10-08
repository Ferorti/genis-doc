GENis fue diseñado desde su origen (2014) en base a cuatro pilares fijados por la **Sociedad Internacional de Genética Forense (ISFG)**: adopción de estándares internacionales, metodologías ágiles de desarrollo, tecnologías de código abierto y seguridad de la información. Esta página reúne los estándares técnicos, científicos y de seguridad concretos que el sistema sigue.

---

## Estándares de genética forense

| Organismo | Aplicación en GENis |
|---|---|
| **ISFG** (International Society for Forensic Genetics), Comisión de ADN | Transparencia, disponibilidad y reproducibilidad de los cálculos bioestadísticos forenses. Guía los cuatro pilares de diseño del sistema (ver [Declaración de principios](declaracion_de_principios.md)). |
| **ENFSI** (European Network of Forensic Science Institutes) | Algoritmos de coincidencia en exigencia alta, media y baja ("*Guidelines for Best Practice in DNA Analysis*" y "*DNA Database Management*"). |
| **INTERPOL** | Referencia para el diseño de interoperabilidad entre bases de datos genéticas nacionales/regionales. |
| **NRC II** (National Research Council, EE.UU.) | Recomendaciones 4.1 y 4.10 para el cálculo de probabilidades de genotipo a partir de frecuencias alélicas poblacionales. |

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

## Referencias normativas citadas en la documentación

- GNU Affero General Public License, version 3. Free Software Foundation, 2007.
- OWASP Application Security Verification Standard (ASVS), versión vigente.
- ISO/IEC 27001: Information security management systems: requirements.
- ENFSI, *Guidelines for Best Practice in DNA Analysis* y *DNA Database Management Review and Recommendations* (2023).
- Declaración de Principios de GENis. Fundación Sadosky.
