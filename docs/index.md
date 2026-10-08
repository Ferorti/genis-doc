![Logo GENis](images/assets/logo_blanco.svg#only-light){ .genis-logo .off-glb }
![Logo GENis](images/assets/logo_negro.svg#only-dark){ .genis-logo .off-glb }

# GENis { .sr-only }


GENis es un sistema informático abierto, desarrollado por la [Fundación Dr. Manuel Sadosky](https://www.fundacionsadosky.org.ar), para el almacenamiento, intercambio y comparación de perfiles genéticos con fines forenses. Permite contrastar perfiles provenientes de muestras biológicas obtenidas en distintas escenas de crimen o de desastres, vinculando eventos ocurridos en diferente tiempo y lugar y aumentando las probabilidades de individualización de delincuentes, personas desaparecidas o víctimas de siniestros.

El sistema integra herramientas de genética forense y bioinformática con el objetivo de facilitar el cotejo sistemático de perfiles genéticos, asegurar la trazabilidad de la información y fortalecer la calidad técnica y probatoria de los resultados obtenidos.

## Origen

El desarrollo de GENis se inscribe en un proceso institucional de articulación entre organismos judiciales, la comunidad científica y el sector tecnológico de América Latina, orientado a dotar a los países de una herramienta propia para la gestión de bases de datos genéticos forenses. Desde su concepción, el sistema fue diseñado a partir de requerimientos operativos reales de laboratorios forenses y organismos judiciales, y tomando como referencia estándares y recomendaciones internacionales vigentes en la materia.

En particular, la arquitectura y el funcionamiento de GENis se encuentran alineados con las recomendaciones de la **Sociedad Internacional de Genética Forense (ISFG)**, la **European Network of Forensic Science Institutes (ENFSI)** e **INTERPOL**, entre otros organismos de referencia. Estos lineamientos se reflejan tanto en los criterios de admisibilidad y búsqueda de coincidencias como en la transparencia de los modelos de cálculo, la auditabilidad del sistema y la protección de la información genética almacenada.

**Un principio rector en el diseño de GENis es la transparencia de los modelos estadísticos y algoritmos de búsqueda, entendida como una condición necesaria para la reproducibilidad independiente de los resultados y su adecuada evaluación en el ámbito pericial y judicial. En este sentido, GENis adopta una arquitectura de código abierto**, lo que permite el acceso a sus modelos conceptuales, facilita auditorías técnicas y habilita su adaptación a distintos marcos normativos y organizacionales.

## Qué hace GENis

GENis permite el ingreso y la gestión de perfiles genéticos autosomales STR, cromosoma Y, cromosoma X y ADN mitocondrial. El sistema es altamente configurable, posibilitando la definición de categorías de perfiles, reglas de admisión, parámetros de búsqueda y criterios de comparación acordes a la normativa y a las políticas de cada jurisdicción o laboratorio.

Su eje central es un **motor de búsqueda de coincidencias** que da soporte a tres usos forenses: la investigación criminal, la búsqueda de personas desaparecidas (MPI) y la identificación de víctimas de desastres (DVI). Se describen en [Usos forenses](usos_forenses/index.md).

Complementariamente, GENis incorpora mecanismos de seguridad, control de accesos, auditoría y trazabilidad, que registran de manera detallada todas las acciones realizadas sobre perfiles, análisis, coincidencias y escenarios. Estas características resultan fundamentales para el cumplimiento de los requisitos de calidad, integridad y control exigidos por las normas y recomendaciones internacionales aplicables a bases de datos genéticas forenses.

## Cómo está organizado este manual

Este manual describe el funcionamiento de GENis, abordando tanto los aspectos conceptuales como los operativos necesarios para su correcta utilización. Está dirigido a genetistas forenses, operadores técnicos, responsables de bases de datos, legisladores, comunidad académica y ONGs.

| Solapa | Contenido |
|---|---|
| **GENis** | Qué es el sistema, para qué se usa ([Usos forenses](usos_forenses/index.md)), qué funciones ofrece ([Funcionalidades del sistema](genis/funcionalidades_del_sistema.md)), en qué se basan sus cálculos ([Fundamentos de genética forense](genis/genetica_forense.md)) y bajo qué principios y estándares fue diseñado. |
| **Instalación** | Puesta en marcha de los servicios con contenedores, despliegue en producción, resguardo y endurecimiento del servidor. Comienza en [Instalación de contenedores](instalacion/instalacion_de_contenedores.md). |
| **Administración** | Configuración institucional y de catálogos: cuentas, roles, laboratorios, categorías, kits, marcadores y frecuencias. Comienza en [Solicitar una cuenta](administracion/solicitar_una_cuenta.md). |
| **Búsqueda de perfiles** | Operación diaria: alta y baja de perfiles, coincidencias, búsqueda de personas e interconexión de instancias. Comienza en [Alta de perfiles](busqueda_de_perfiles/alta_de_perfiles.md). |
| **Anexos técnicos** | Desarrollo formal de los algoritmos y modelos estadísticos, diccionario de errores y marco de seguridad. Comienza en el [Anexo I](anexos/anexo_i_algoritmo_de_busqueda_de_coincidencias_de_str.md). |
