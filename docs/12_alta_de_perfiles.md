# 12. ALTA DE PERFILES

## ALTA DE PERFILES

El proceso de **alta de perfiles** corresponde al conjunto de acciones mediante las cuales un perfil genético es incorporado formalmente a la base de datos del sistema GENis, quedando disponible para su almacenamiento, comparación y eventual replicación a instancias superiores. Esta etapa constituye un punto crítico en términos de trazabilidad, responsabilidad técnica y validez del registro, ya que define el vínculo entre la muestra biológica, el perfil genético generado y su representación digital dentro del sistema.

Para el alta de un nuevo perfil:

1. Acceder al menú **"Perfiles"**.
2. Seleccionar la opción **"Nuevo Perfil"**.
3. Completar los campos requeridos según la categoría del perfil.
4. Finalizar el proceso presionando **"Guardar"**, momento en el cual el sistema registra el perfil en la base de datos.

## CONSIDERACIONES SOBRE DATOS FILIATORIOS, CÓDIGO DE LABORATORIO Y RESPONSABLE DEL PERFIL

### a) Datos filiatorios y categoría del perfil

Durante el alta de perfiles, resulta fundamental diferenciar entre aquellos perfiles que representan a personas identificadas y aquellos correspondientes a evidencias o muestras de origen desconocido, ya que esto determina la necesidad y pertinencia de la carga de datos filiatorios.

Los campos que se muestran con asterisco (*) son los campos mandatorios.

La carga de datos filiatorios completos (nombre, apellido, documento u otros datos identificatorios) es opcional, según la categoría, pero es importante en aquellas categorías donde el perfil corresponde a una persona conocida, tales como:

- personas imputadas o condenadas,
- referencias voluntarias,
- donantes para identificación en contextos MPI/DVI,
- personas identificadas post mortem.

En estas categorías, los datos filiatorios permiten garantizar la trazabilidad legal del perfil y su correcta vinculación con la identidad jurídica del individuo.

En cambio, en categorías correspondientes a evidencias biológicas, restos no identificados o perfiles de origen desconocido, los datos filiatorios no deben ser cargados, debiendo utilizarse únicamente el código de laboratorio como identificador principal del perfil.

### b) Código de laboratorio como identificador único del perfil

El campo **"Código de laboratorio"** constituye el identificador principal del perfil genético dentro del sistema GENis y cumple un rol central en la trazabilidad y gestión de la base de datos.

Las recomendaciones internacionales para la administración de bases de datos genéticas criminales (ENFSI, ISFG, buenas prácticas derivadas del modelo Prüm) sugieren que cada perfil sea identificado mediante un **código único, estable y no reutilizable**, independiente de los datos filiatorios de la persona, permitiendo:

- asegurar la trazabilidad genética del registro a lo largo del tiempo,
- evitar duplicaciones o ambigüedades,
- facilitar la interoperabilidad entre nodos,
- preservar la confidencialidad de los datos personales.

Se recomienda que dicho código funcione como un **identificador genético único**, asignado por el laboratorio y mantenido de manera constante en todos los procesos de carga, análisis, validación y replicación del perfil en la red.

Asimismo, se sugiere que el código no contenga información personal explícita y que su formato sea normalizado dentro de cada institución o red de bases de datos.

### c) Campo "Responsable" y su alcance funcional

El campo desplegable **"Responsable"** identifica a la persona que asume la responsabilidad técnica del perfil genético dentro del sistema GENis. Este rol no se limita exclusivamente al acto físico de carga del perfil, sino que representa la figura que avala su incorporación a la base de datos y garantiza su validez técnica.

El significado del campo **"Responsable"** debe interpretarse en relación con los roles asignados al usuario dentro del sistema, pudiendo abarcar distintas funciones según el esquema organizativo del laborato:

- responsable del alta manual del perfil,
- responsable de la validación técnica del perfil previo a su incorporación,
- responsable de autorizar la carga masiva de perfiles,
- supervisor o coordinador del nodo que aprueba la integración del lote a la base de datos.

De este modo, el **"Responsable"** puede representar:

- quien realizó la carga directa del perfil,
- quien supervisó técnicamente su contenido,
- o quien autorizó formalmente su incorporación.

En procesos de carga masiva, este campo adquiere particular relevancia, ya que todos los perfiles incluidos en el lote heredarán el mismo responsable, permitiendo:

- auditar posteriormente el origen del conjunto de registros,
- identificar la persona que validó el alta del lote,
- establecer la trazabilidad institucional del proceso.

Por otro lado es importante señalar la diferencia entre:

- **Usuario que carga los datos o "Alta del perfil"**
- **Usuario que carga el perfil** (operador técnico)
- **Responsable técnico del perfil** (quien avala su incorporación),

Luego de ingresar todos los datos solicitados, se genera un código GENis único de la muestra. Este código sirve para identificar ese perfil dentro de la base de perfiles y es único entre las diferentes bases que se interconecten:

![](images/sec12/p086_f01.png)

También se envía una notificación de que se creó un nuevo perfil para indicar que está pendiente de incorporarle algún análisis.

![](images/sec12/p086_f02.png)

Para ingresar el resultado de un análisis genético, ir al menú **Perfiles**/Listado de perfiles y presionar Agregar Análisis:

![](images/sec12/p087_f01.png)

## CARGA DE ANÁLISIS MITOCONDRIAL

El análisis de ADN mitocondrial (mtDNA) en GENis permite incorporar al sistema los haplotipos obtenidos para un perfil determinado. La carga debe realizarse siguiendo una estructura estandarizada que garantice la correcta interpretación de los rangos y mutaciones ingresadas, así como la ejecución confiable del proceso de matching mitocondrial.

Antes de cargar un análisis mitocondrial, es necesario asegurarse de que:

- La categoría del perfil tenga correctamente configuradas sus reglas de búsqueda, incluyendo el número máximo de mismatches permitidos.
- El usuario conozca la estructura de carga basada en rangos y mutaciones, dado que el mtDNA funciona por diferencias respecto al rCRS.

Para verificar esto, acceder a Configuración → Categorías y revisar:

- Nombre de la categoría
- "Cantidad máxima de marcadores no coincidentes"
- Si la categoría "Notifica coincidencias"

## ACCESO A LA CARGA DEL ANÁLISIS

1. Ir a **Perfiles** → **Listado de perfiles**.
2. En la fila del perfil deseado, hacer clic en **+** en la columna *Agregar análisis*.
3. Dentro del perfil, seleccionar la solapa **Mitocondrial**.

![](images/sec12/p088_f01.png)

## CARGA DE RANGOS Y MUTACIONES

1. Hacer clic en **Agregar Rango**.
2. Completar los campos solicitados:

![](images/sec12/p089_f01.png)

**Consideraciones importantes:**

- Se pueden cargar hasta **4 rangos por análisis**.
- Cada rango ingresado debe ser **válido** respecto de las mutaciones registradas.
- Es obligatorio **ingresar al menos una mutación** dentro del rango.
- El sistema no permitirá guardar rangos inconsistentes o vacíos.

## DOBLE CARGA CIEGA

GENis exige una doble carga ciega para minimizar errores:

1. El usuario ingresa los rangos y sus mutaciones por primera vez.
2. Presiona **Verificar carga**.
3. El sistema muestra nuevamente los campos vacíos para que el usuario vuelva a ingresarlos.
4. Ambos ingresos deben coincidir exactamente.

![](images/sec12/p090_f01.png)

## ALTA EFECTIVA

El botón **Guardar** permanecerá deshabilitado hasta que:

- La doble carga coincida, y
- Todos los rangos y mutaciones estén correctamente validados.

Al presionar **Guardar**:

- Se realiza el **alta efectiva** del análisis mitocondrial en el perfil.
- Se ejecutan automáticamente las **reglas de matching** configuradas para la categoría.

![](images/sec12/p090_f02.png)

## CARGA DE ANÁLISIS AUTOSOMAL

La carga de un análisis autosomal en GENis consiste en ingresar los alelos obtenidos en laboratorio para cada marcador incluido en un kit STR. El sistema requiere una estructura fija por kit y una **doble carga** ciega para evitar errores en la transcripción de alelos.

Antes de cargar un análisis autosómico, verificar que:

- La categoría tenga configuradas sus **reglas de búsqueda**.
- El kit que se usará esté **previamente cargado en el sistema** con su lista de marcadores correspondiente.

### Acceso a la carga del análisis

1. Ir a **Perfiles** → **Listado de perfiles**.
2. En la fila del perfil, hacer clic en **+** en la columna *Agregar análisis*.
3. Dentro del perfil, seleccionar la solapa **Autosomal**.

### Selección de kit y carga de alelos

1. Seleccionar el **Kit** a utilizar (el mismo nombre que aparece en GeneMapper).
2. El formulario mostrará automáticamente la lista de marcadores.
3. Cargar los alelos correspondientes para cada uno.

### Consideraciones:

- Con el botón **+** el usuario puede agregar alelos adicionales si el marcador lo requiere (p. ej., sistemas con ≥3 alelos, tri-allelicos).
- Los alelos que se encuentren fuera del rango permitido por el kit serán marcados automáticamente en color para alertar al usuario.

## DOBLE CARGA CIEGA

1. Completar la primera carga y presionar **Verificar carga**.
2. El sistema solicitará ingresar nuevamente todos los alelos.
3. Ambos ingresos deben coincidir exactamente para habilitar el botón **Guardar**.

![](images/sec12/p092_f01.png)

## CARGA DE ARCHIVOS ADJUNTOS Y ELECTROFEROGRAMAS

GENis permite adjuntar evidencia documental asociada al análisis:

1. Ir a **Ver análisis del perfil**.
2. En la solapa del kit, al final de los marcadores, se encuentran los botones para cargar:

- Archivos adjuntos (PDF, informes, planillas)
- Electroferogramas (fsa, png, jpg, etc.)

Una vez cargados, pueden visualizarse desde la misma solapa:

![](images/sec12/p093_f01.png)

Una vez cargado los archivos se pueden visualizar los electroferogramas:

![](images/sec12/p093_f02.png)
![](images/sec12/p093_f03.png)

## CARGA MASIVA

La carga masiva permite tomar la salida de GeneMapper en un archivo de texto para realizar el alta de perfiles genéticos.

El sistema realiza 2 validaciones:

1. **Validación de formato:** se revisa que el archivo tenga toda la información necesaria y con el formato correcto.
2. **Validación cualitativa:** se revisa que el perfil cumpla con las restricciones configuradas para la categoría a la que se está asociando el perfil.

Un usuario administrativo puede ingresar los datos de la muestra y los datos filiatorios en el caso de tratarse de una muestra de referencia, para que luego de haber sido procesada la misma, pueda cargarse en GENis utilizando el procedimiento de carga masiva que se detalla a continuación.

Para esto, el código interno de la muestra debe coincidir con el **Sample Name** en el archivo de carga masiva.

## GENERACIÓN DEL ARCHIVO PARA CARGA MASIVA DESDE GENEMAPPER / GENEMAPPER ID-X

La carga masiva de perfiles en GENis requiere un archivo **.txt tabulado** con una estructura específica. Para ello, es necesario configurar un **Table Setting dedicado al archivo de carga masiva** en GeneMapper / GeneMapper ID-X y completar correctamente los campos que GENis valida al momento de la importación.

A continuación, se describen los pasos recomendados para generar correctamente el archivo.

### 1. CONFIGURACIÓN DEL TABLE SETTING EN GENEMAPPER / ID-X

1. Abrir GeneMapper ID-X e ingresar a:

**Tools → GeneMapper ID-X Manager → Table Settings**

2. Crear un nuevo Table Setting destinado exclusivamente a la exportación para GENis, o duplicar uno existente seleccionandolo y hacer click en "save as" de esta forma se duplicara el seleccionado.

3. Abrir el nuevo Table setting y en la pestaña **Samples**, seleccionar únicamente las siguientes columnas:

- **Sample Name**
- **Specimen Category**
- **UD1**
- **UD2**

4. En la pestaña Genotypes, activar únicamente:

- **Marker**
- **Allele 1 a Allele 8**

(GENis requiere un mínimo de 8 columnas de alelos en la cabecera, aunque algunos marcadores no utilicen todos esos campos).

5. Guardar el Table Setting.

**Nota:**
Si bien puede incluirse mas columnas que sirvan al usuario al momento de revisar el archivo Size, Height, Peak Area, Dye, Panel, Mutation u otras GENis no interpreta estos parámetros en carga masiva.

### 2. COMPLETAR LOS CAMPOS UD1 Y UD2 EN EL PROYECTO

Antes de exportar el archivo:

- En la pestaña **Samples** del proyecto, completar:
  - **UD1** → Nombre del usuario o responsable del perfil (campo obligatorio para GENis).
  - **UD2** → Alias del kit utilizado, escrito exactamente igual que en GENis.

Si los valores de UD1 o UD2 no coinciden con los configurados en GENis, la carga masiva será rechazada.

### 3. CONFIGURACIÓN DE SPECIMEN CATEGORY (VÍA CODIS EXPORT MANAGER)

Para que una categoría pueda seleccionarse dentro de la columna **Specimen Category** del proyecto, primero debe crearse en GeneMapper ID-X.

1. Acceder a:

**Tools → CODIS Export Manager**

2. En la sección Specimen Types, escribir el nombre exacto de la categoría deseada, por ejemplo:

- "Condenado"
- "Víctima"
- "Referencia"
- "Caso"
- "No exportar"

3. Hacer clic en Add.

4. Confirmar con **OK**.

A partir de este momento, la categoría aparecerá en la lista desplegable de la columna **Specimen Category** dentro del proyecto.

**Advertencia:**
El nombre de la categoría debe coincidir exactamente con el nombre de categoría configurado en GENis (incluyendo mayúsculas, minúsculas y tildes).
Si no coincide, GENis no podrá interpretar la categoría y la carga masiva fallará.

### 4. EXPORTACIÓN DEL ARCHIVO DESDE GENEMAPPER / ID-X

Para generar el archivo:

1. Seleccionar las muestras a exportar dentro del proyecto.

2. Verificar que el Table Setting creado para GENis está seleccionado.

3. Ir a:

**File → Export Combined Table**

4. Elegir las siguientes opciones:

- **Una línea por marcador**
- **Incluir toda la información del marcador** (opción obligatoria; garantiza que el formato sea compatible con GENis)

5. Guardar el archivo en formato **.txt tabulado**.

La cabecera generada debe tener, como mínimo, la siguiente estructura:

**Sample Name Specimen Category UD1 UD2 Marker Allele 1 Allele 2 ... Allele 8**

Si la cabecera contiene menos de 8 columnas de alelos aparecera el mensaje aunque el perfil genético no tenga 8 alelos:

**E0305 – Faltan parámetros en la cabecera del archivo.**

![](images/sec12/p098_f01.png)

### 5. CONTROL PREVIO ANTES DE LA CARGA MASIVA EN GENIS

Se recomienda revisar el archivo .txt antes de cargarlo, verificando:

- La presencia y el orden correcto de las columnas.
- Que todas las categorías en **Specimen Category** coinciden con GENis.
- Que **UD1** y **UD2** fueron completados correctamente.
- Que no existan filas vacías ni valores fuera de formato.

Si todos los parámetros coinciden con la configuración de GENis, el archivo será aceptado sin errores.

Para mitocondrial

- Range from
- Range to
- Mutación 1… Mutación 50

Los campos deben estar separados por tabs.

El orden de las columnas se puede variar, no afecta al archivo.

Ejemplo de archivo de carga para autosomal:

![](images/sec12/p100_f01.png)

Ejemplo de archivo de carga para mitocondrial:

![](images/sec12/p100_f02.png)

Si los datos de la muestra fueron previamente ingresados, por coincidencia del código interno de la muestra, se realizará la asociación. De lo contrario el usuario deberá cargar los datos (datos de la muestra y de corresponder conforme a la categoría seleccionada, los datos filiatorios).

## PRIMER NIVEL DE APROBACIÓN

Para comenzar el proceso de carga masiva, ir al menú **Perfiles/Alta Masiva de Análisis**:

![](images/sec12/p101_f01.png)

Haciendo click sobre el ícono

![](images/sec12/p101_f02.png)

me permite bajarme un ejemplo de carga para un análisis autosomal o para un análisis mitocondrial, y muestra la nomenclatura que se debe utilizar para la carga de análisis mitocondrial:

![](images/sec12/p101_f03.png)

Al hacer click en **Nuevo Lote**, aparece la siguiente pantalla en la que se deben completar los siguientes campos:

- Tipo de análisis: seleccionar si el análisis es del tipo Autosomal o Mitocondrial.
- Archivo: haciendo click en el botón Elija archivo, me permite seleccionar el archivo deseado.
- Nombre del lote: Campo opcional que me permite identificar un lote por el nombre cuando lo quieren asociar a un caso de MPI/DVI (ver sección 20.7 Asociar Lote)

![](images/sec12/p102_f01.png)

Haciendo click en el botón **Agregar**, se agregan los perfiles que contiene el lote.

![](images/sec12/p102_f02.png)

Una vez ingresados los datos, se pueden realizar las siguientes acciones:

- Rechazar el análisis haciendo click sobre la cruz.

![](images/sec12/p102_f03.png)

- Editar el análisis antes de aprobarlo, agregando más información de la causa y de los datos de muestra mostrando la misma pantalla que se observa al momento de agregar un nuevo perfil (codigo de laboratorio,

![](images/sec12/p102_f04.png)

responsable, categoría). Esta opción no aparece si el “sample name” del archivo de esta muestra coincide con el código de laboratorio cargado para este perfil, por lo que se asociara con la información previamente cargada y se vera a la derecha del codigo de laboratorio el simbolo

- Aprobar el análisis

![](images/sec12/p103_f01.png)

También se tiene la posibilidad de aprobar todos, eliminar todos y aprobar los seleccionados.

**Nota:**

- Puede ocurrir que aparezca el símbolo

![](images/sec12/p103_f02.png)

a la derecha del código interno de la muestra, lo que indica que los metadatos del perfil a incorporar han sido previamente cargados y se han asociado automáticamente.
- Si no viene la subcategoría cargada, el perfil quedará en estado Incompleto hasta que se carga una subcategoría.

![](images/sec12/p103_f03.png)

## SEGUNDO NIVEL DE APROBACIÓN

Una vez aprobada la primera instancia, el usuario responsable de los perfiles o un superusuario (usuario que tiene permisos para operar sobre todos los perfiles de la instancia), podrá proceder a efectuar el alta efectiva. Para ello, acceder al menú **Perfiles /Aceptación masiva de Análisis**.

![](images/sec12/p104_f01.png)

El usuario responsable puede modificar la categoría, previo a su alta efectiva, con el ícono del lápiz

![](images/sec12/p104_f02.png)

en caso de que detecte que la categoría esté mal cargada.

Para proceder al alta efectiva, presionar el botón con el pulgar hacia arriba en cada uno de los análisis o bien seleccionarlos individualmente o en su conjunto y presionar en **Aceptar Seleccionados** o directamente presionar el botón **Aceptar todo**.

Se tiene el casillero **Replicar a instancia superior** para que se replique el perfil en caso de estar tildado (Ver detalle en la sección 21. Interconexión de instancias)

El ícono

![](images/sec12/p104_f03.png)

me permite ver el detalle de los alelos del perfil.
A partir del alta efectiva, se corre automáticamente el proceso de Match, lo que implica que desde ese momento el perfil participará de futuras comparación, según lo que se haya configurado en las reglas de búsquedas.

![](images/sec12/p105_f01.png)

## RECHAZAR PERFIL

En el caso de que se quiera rechazar el análisis, se deberá completar el motivo de rechazo para poder avanzar:

![](images/sec12/p106_f01.png)

Una vez que se completa el motivo, recién ahí se habilita el botón **Aceptar**.

El motivo del rechazo queda registrado junto con el análisis:

![](images/sec12/p106_f02.png)

## ERRORES QUE PUEDEN IMPEDIR LA ACEPTACIÓN DE UN ANÁLISIS

En algunos casos, un análisis cargado mediante carga masiva puede ser importado correctamente, pero **no ser aceptado** en la etapa de “Aceptación de Perfiles”. Esto se debe a validaciones adicionales que GENis realiza antes de permitir que el perfil ingrese a la base de datos y sea considerado en las búsquedas de coincidencias.

Los errores más frecuentes que impiden la aceptación son:

1. Incompatibilidad entre el kit declarado y el kit registrado en GENis

Si el alias del kit (campo UD2) no coincide exactamente con el kit configurado en GENis, el sistema no acepta los marcadores y reporta errores del tipo:

**E0686: Marcador inválido**

**E0400: No se pueden cambiar los valores de los alelos**

2. Nombres de marcadores no coincidentes

Los nombres de marcadores deben ser idénticos a los definidos en GENis. Diferencias mínimas (espacios, mayúsculas, puntos decimales) provocan rechazo del análisis.

3. Estructura incorrecta del archivo de carga masiva

GENis requiere que la cabecera incluya, como mínimo:

**Sample Name, Specimen Category, UD1, UD2, Marker, Allele1 … Allele8**

Si la cabecera tiene menos columnas de alelos o contiene columnas adicionales no reconocidas, el sistema no permite aceptar el análisis.

4. Conflicto entre análisis previo y análisis cargado

Si el perfil ya tenía un análisis cargado manualmente o en otra importación, y los valores no coinciden, GENis no permite modificar los alelos existentes.

5. Alelos fuera del rango válido del kit

Alelo inválidos o híbridos mal formateados generan rechazo automático.

Si GENis no permite la aceptación, el usuario debe:

1. **Revisar los errores en el botón “Ver Errores”,**
2. **Corregir el archivo fuente o la configuración del kit,**
3. **Rechazar el análisis desde esta misma pantalla,**
4. **Repetir la carga manual o masiva con los datos corregidos.**

Esto asegura que solo entren a la base de datos perfiles validados, completos y compatibles con las reglas del sistema.

## EVIDENCIAS ASOCIADAS A LAS VÍCTIMAS

GENis permite asociar evidencias de aportantes múltiples al perfil de la víctima. Es por eso que puede configurarse una categoría que permita esta asociación.

Cuando se produce el alta de un perfil en una categoría que debe asociarse a una víctima, el alta efectiva que lanzará las búsquedas se producirá cuando se realice la asociación. El usuario recibirá una notificación de **perfil pendiente de asociación:**

![](images/sec12/p109_f01.png)

Para ello, acceder a los detalles del perfil desde las notificaciones o proceder desde la pantalla de **Perfiles/Listado de Perfiles** presionando en Ver Análisis.

Presionar en el botón **Asociar Pefiles**:

![](images/sec12/p109_f02.png)

Seleccionar el perfil correspondiente a la víctima:

![](images/sec12/p110_f01.png)

Al presionar **Aceptar** se podrá visualizar las etiquetas de los alelos correspondientes al perfil de la víctima. Para guardar la asociación, presionar en **Guardar Etiquetas**:

![](images/sec12/p110_f02.png)

![](images/sec12/p110_f03.png)

## ETIQUETADO DE EVIDENCIAS

Cuando un genetista analiza una evidencia forense de aportantes múltiples, en ocasiones puede proceder a realizar la deconvolución de la mezcla, tarea que permite identificar cuáles son los alelos correspondientes a la víctima y al sospechoso.

GENis permite que el usuario etiquete los alelos. Este etiquetado no influye en las búsquedas ni en los cálculos de los coeficientes de verosimilitud. Es simplemente una ayuda visual para que luego valoren las posibles coincidencias con otros perfiles.

Para etiquetar un perfil evidencia ir a Perfiles, seleccionar el correspondiente y presionar en (Ver Análisis).

![](images/sec12/p111_f01.png)

Seleccionar a continuación el tipo de etiqueta de se desea asignar a los alelos, presionando en

**Cambiar etiquetas** se observa las opciones:

![](images/sec12/p111_f02.png)

Una vez seleccionadas los nombres de las etiquetas (Individuo1-Individuo2 o Victma-Otro). Luego seleccionar los alelos a etiquetar presionando “Ctrl + click”:

![](images/sec12/p112_f01.png)

Una vez resaltados los alelos a etiquetar, seleccionar la etiqueta correspondiente. En este caso Víctima u Otro:

![](images/sec12/p112_f02.png)

Para salvar los cambios, presionar en **Guardar etiquetas.**

## NOTAS SOBRE EL ETIQUETADO DE EVIDENCIAS

El etiquetado de evidencias en GENis es una herramienta destinada a la clasificación y marcado de alelos cuando se trabaja con mezclas o perfiles complejos. Por esta razón, la opción de etiquetar no siempre aparece disponible.

La función solo se habilita cuando se cumplen las siguientes condiciones:

1. **La categoría del perfil debe estar configurada como categoría evidencial.**

Solo los perfiles asignados a categorías como Caso, Evidencia u otras designadas por el nodo pueden ser etiquetados. Perfiles de referencia o condenados no admiten etiquetado.

2. **El análisis autosómico debe estar aceptado.**

La función no se habilita si el análisis está solo cargado pero no aceptado en el módulo de Aceptación de Perfiles.

3. **Debe existir al menos un marcador con más de dos alelos.**

El etiquetado solo es necesario para perfiles mixtos o con marcadores con más de dos picos. Si todos los marcadores presentan uno o dos alelos, GENis considera que no requiere clasificación y no habilita el etiquetado.

Si alguna de estas condiciones no se cumple, la opción de etiquetar no estará disponible y el usuario deberá ajustar la categoría, aceptar el análisis o revisar la calidad del perfil.
