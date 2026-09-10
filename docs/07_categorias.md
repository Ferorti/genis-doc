# Categorías

Todos los perfiles genéticos que se incorporan en GENis deben pertenecer a una categoría. La definición y de las categorías son fundamentales para el funcionamiento del sistema. En ellas se definen: parámetros de admisibilidad de perfiles genéticos, reglas de asociación, reglas de búsquedas y una lista de alias posibles para la carga masiva en el caso de venir dada la categoría en el archivo correspondiente en el campo **Specimen Category**.

**Nota: La guía de ENFSI (“Guideline for DNA Database Management Review and Recommendations”, 2023) indica que:**

- **El primer paso para establecer una base de datos forense es definir el propósito legal lo que condiciona, qué categorías de individuos se incluirán (imputados, condenados, detenidos, sospechosos, desaparecidos, restos humanos, familiares, etc.).**

- **En la sección “3. INCLUSION CRITERIA” se explica que los criterios para incluir un perfil dependen de: la fuente del perfil, el tipo de muestra, las condiciones legales, etc.**

- **Se menciona que la inclusión debe ser regulada por legislación específica y que las categorías deben estar claramente definidas en la normativa nacional (o provincial en nuestro caso), en caso de que las categorías creadas estén habilitadas para replicar en instancia superior, las características de las mismas deben estar validadas por dicha instancia, en caso contrario deben cumplir con las normativas del laboratorio y/o provinciales.**

**Se ejemplifica con la siguiente imagen categorías y características convenidas entre un RNDG y una provincia.**

| Nombre de Categoria | Descripción | Alias |
| --- | --- | --- |
| EvidenciaCompleta | Evidencia un aportante | Forensic unknown |
| EvidenciaParcial | Evidencia amplificacion parcial | Forensic Partial |
| EvidenciaMezcla | Evidencia al menos dos aportantes | Forensic Mixture |
| Víctima | Víctima | |

| ID Categoría | Cantidad mínima de Marcadores | Cantidad máxima de multialélicos | Cantidad máx de alelos por marcador |
| --- | --- | --- | --- |
| Condenado | 15 | 2 | 2 |
| Imputado | 15 | 2 | 2 |
| Evidencia Completa | 15 | 2 | 2 |
| Evidencia Parcial | 9 | 0 | 2 |
| Evidencia Mezcla* | 15 | 2 | 4 |
| Víctima | 15 | 1 | 2 |

***Previo al uso del sistema GENis, es indispensable que la comunidad de expertos decidan cómo deben definirse las categorías y las reglas de búsqueda, dado que cuando se repliquen perfiles entre diferentes instancias será recomendable que las mismas reglas apliquen a todas ellas.***

Como veremos más adelante, por cuestiones de lógica de funcionamiento del sistema GENis es siempre necesario especificar si en una categoría se almacenarán perfiles provenientes de individuos de referencia (muestras indubitadas) o de evidencias forenses.

Para una mayor claridad y facilidad en la administración de las categorías, las mismas se crean perteneciendo a grupos. Por ejemplo, puede definirse un grupo llamado “Muestras de referencia indubitadas” en el que se incorporarán las categorías que almacenarán perfiles provenientes de muestras de referencia; y otro grupo llamado “Evidencias” en el que se incorporarán las categorías que poseerán perfiles genéticos provenientes de evidencias obtenidas de escenas del hecho.

**Nota:** Tener en cuenta que para las agrupaciones MPI/DVI no se pueden agregar, borrar ni editar categorías ni grupos (Ver detalle en la sección siguiente). Para acceder a la administración de las categorías seleccionar en el menú Configuración/Categorías:

![](images/sec07/p048_f01.png)

## Definición de categorías

Para los módulos de búsqueda de personas (MPI / DVI), se definieron categorías fijas que no se pueden eliminar ni modificar. Estas categorías son las siguientes:

**MPI (Identificación de personas buscadas)**

1. **Muestras Ante Mortem (AM)**
   - a. Persona que busca conocer su identidad biológica. (Individuo INNV)
   - b. Individuos de Referencia (IR): Pariente/s de la/s personas desaparecidas.
   - c. Elementos Personales de la persona desaparecida (ER).
2. **Muestras Post Mortem (PM)**
   - a. Elementos Personales hallados de la persona desaparecida (ENN).
   - b. Restos Biológicos no identificados (RNN).
   - c. Personas fallecidas no identificadas (INN).
   - d. Personas fallecidas cuya identidad quiere analizarse (PFNI).

**DVI (Identificación de víctimas de desastre)**

1. **Muestras Ante Mortem (AM)**
   - a. Individuos de Referencia (IR): Pariente/s de la/s personas buscadas.

     En esta categoría ingresan los perfiles que se asociarán a un pedigrí (IR_DVI).
2. **Muestras Post Mortem (PM)**
   - a. Elementos Personales hallados de la persona desaparecida (ENN_DVI).
   - b. Restos Biológicos no identificados (RNN_DVI).
   - c. Personas fallecidas no identificadas (INN_DVI).
   - d. Personas fallecidas cuya identidad quiere analizarse (PFNI_DVI).

Validaciones a tener en cuenta para las agrupaciones:

**Para MPI/DVI:**

- No se pueden agregar nuevas categorías.
- No se pueden borrar ni editar categorías ni grupos.
- Solo se pueden modificar los parámetros de las reglas de alta de análisis.
- No se pueden agregar nuevas reglas de búsqueda ni modificar las existentes.

**Para Forense:**

- Se pueden crear nuevos grupos.
- Se pueden agregar nuevas categorías
- Se pueden editar grupos y categorías (se pueden modificar todas las solapas)
- En la solapa **Reglas de Búsqueda** solo me permite agregar categorías pertenecientes al grupo **Forense**.

Cuando se ingresa un perfil a la base, para correr el match, primero se verifica el agrupador de categorías al que pertenece la categoría:

- Si es un perfil con una categoría perteneciente al agrupador **Forense**, solo se corre el match con las categorías de Forense.
- Si es un perfil con una categoría perteneciente al agrupador **MPI**, solo corre el match con las categorías de MPI, es decir, busca contra todos los pedigrís activos de MPI.
- Si es un perfil con una categoría perteneciente al agrupador **DVI**, no se lanzará ninguna búsqueda, es decir, esta búsqueda se lanza al activar los pedigrís dentro del caso con los perfiles del caso.

## Creación y edición de grupos de categorías forense

Ingresando en el menú **Configuración/Categorías**, presionar el botón **Agregar Grupo** en el menú de la izquierda, para definir una agrupación de categorías:

Tener en cuenta que solo se podrán agregar grupos para la categoría **Forense**.

![](images/sec07/p050_f01.png)

Presionar **Agregar** y se observa el grupo creado:

![](images/sec07/p051_f01.png)

Para editar los datos del grupo presionar en ✎ y desde allí será posible modificar cualquiera de los campos disponibles o eliminar la agrupación en el caso de que no existan categorías asociadas.

## Creación de una nueva categoría

Para crear una nueva categoría, seleccionar **Agregar Categoría** del menú de la izquierda:

![](images/sec07/p051_f02.png)

En el campo **Id**, ingresar un identificador único de la categoría que no puede contener espacios ni caracteres especiales como ser acentos, comillas, etc.

Ingresar luego el nombre de la categoría y opcionalmente una descripción. Finalmente se define si en la categoría que se está creando se almacenarán perfiles genéticos provenientes de muestras de referencia o de evidencias forenses.

Ejemplo:

![](images/sec07/p052_f01.png)

Al presionar **Agregar** se accede a la pantalla de configuración de todas las opciones de la categoría.

![](images/sec07/p052_f02.png)

Una vez agregada la evidencia se procede a su configuración:

- **Alias**: corresponde al código del Genmapper. El alias puede contener espacios y comas. Luego de ingresarlo, seleccionar enter o tab. Para borrarlo usar el teclado o la x. No se admite alias repetidos, es decir, si el alias esta utilizado por otra categoría no podrá tener un alias duplicado.

Se podrán habilitar los siguientes casilleros:

- **Habilitar ingreso de datos filiatorios:** debe chequearse el casillero si para la categoría se pueden ingresan los datos de la persona de la cual se tomó la muestra de referencia.

- **Réplica contra instancias superiores:** debe chequearse el casillero si la instancia de GENis se encuentra conectada a una instancia superior, y en dicho caso los perfiles deben ser transferidos en búsqueda de coincidencia con otros provenientes de otras instancias/laboratorios.

- **Admite carga manual:** permitir realizar carga manual de perfiles con esta categoría.

## Alta de análisis

En esta solapa se establecen los criterios de admisibilidad de los perfiles que podrán ser incorporados a la categoría:

- **Cantidad mínima de marcadores con alelos:** por default observamos el valor K que se corresponde con la cantidad de marcadores **representativos** que provea el kit con el que se haya procesado la muestra. Puede definirse una fórmula tomando K como referencia, por ejemplo: K/2. Esto indicará que al menos la mitad (o el redondeo superior) de los marcadores que provee el kit con el que se haya procesado la muestra debe contener valores alélicos.

- **Cantidad máxima de marcadores con trisomías:** para las muestras de referencia, especifica la cantidad de marcadores que pueden contener más de dos alelos. Para las evidencias se utiliza para inferir la cantidad de aportantes a la muestra.

- **Cantidad máxima de alelos por marcador:** para el caso de las categorías del tipo Evidencia, indica la cantidad de alelos que puedo tener como máximo en cada marcador.

## Asociación de perfiles

Esta solapa se encuentra disponible solamente para las categorías definidas como evidencias y permite seleccionar la otra categoría a la cual deberán asociarse los perfiles de aportantes múltiples. Su utilidad radica en permitir asociar los perfiles de referencia de las víctimas a las evidencias optimizando de este modo las búsquedas de coincidencias:

![](images/sec07/p055_f01.png)

Debe seleccionarse la categoría correspondiente y la cantidad máxima de marcadores no coincidentes entre la evidencia y el perfil de referencia para tolerar posibles drop-ins, drop-outs o alelos nulos.

Para efectivizar el alta, debe presionarse el botón ![](images/sec07/p055_f02.png) y luego **Guardar**.

![](images/sec07/p055_f03.png)

## Reglas de búsqueda

En esta solapa deben configurarse las reglas de búsqueda de coincidencias entre perfiles incorporados a la categoría.

En **Categoría** se selecciona la categoría contra la cual se lanzará una búsqueda de coincidencias cada vez que se incorpore un nuevo perfil a la categoría que se está configurando.

En **Exigencia**, si se selecciona **Mezcla Mezcla** no se establece la exigencia dado que está diseñado para ejecutarse entre perfiles provenientes de evidencias forenses de dos aportantes. Las otras opciones a seleccionarse correspondiente a la exigencia son: alta, media o baja. **La corrección por N** permite que el sistema no considere como incompatibles aquellos marcadores en los que uno de los perfiles presenta ausencia de información (N). De este modo, la falta de datos en un marcador no implica automáticamente un descarte en la comparación.

![](images/sec07/p056_f01.png)

Las reglas de búsqueda son bidireccionales, es decir que al darse de alta una regla de una categoría contra otra, esa regla se verá luego en la segunda contra la primera con los mismos parámetros.
