# Gestor de coincidencias y cálculos forense

El **Gestor de Coincidencias** se divide en tarjetas que agrupan las coincidencias por perfil.

En una primera pantalla, se muestra la coincidencia con el perfil con el que dio el LR más alto y en una segunda pantalla, los perfiles se agrupan según su categoría (evidencia, referencia y número de aportantes inferido). Las agrupaciones mostradas dependen también de la categoría del perfil agrupador, las cuales se describen en las siguientes secciones..

## Perfil agrupador

Cuando se de alta un perfil genético en una categoría, se lanzan los procesos de búsqueda como se definieron para esa categoría. El perfil ingresado puede encontrar uno o más perfiles coincidentes. En el momento de acceder al gestor de coincidencias, este perfil que encontró otros perfiles coincidentes con él se denomina **perfil agrupador**.

## Sistemas compartidos

Cuando un mismo perfil posee más de un análisis autosómico aceptado (por ejemplo, análisis obtenidos con diferentes kits), GENis utiliza en la búsqueda la totalidad de los marcadores disponibles entre todos los análisis cargados lo que se conoce como: *perfil compuesto, perfil acumulativo, perfil consolidado, perfil consenso*.

Esto permite que un perfil pueda sumar información proveniente de distintos sistemas genéticos, aumentando la potencia de discriminación en la comparación.

La combinación solo se aplica dentro del mismo perfil y nunca entre perfiles distintos.

Los análisis deben estar aceptados, pertenecer a categorías habilitadas para búsqueda y no presentar conflictos de marcadores

## Porcentaje de alelos compartidos

El "porcentaje de alelos compartidos" es una medida utilizada por GENis para cuantificar el grado de coincidencia entre dos perfiles genéticos, comparando marcador por marcador la proporción de alelos que ambos comparten.

La evaluación se realiza tomando un perfil como **perfil agrupador (Q)** y otro como **perfil comparado (P)**, y calculando para cada marcador la fracción de alelos del perfil agrupador que se encuentran presentes en el otro perfil. El resultado final corresponde al **promedio** de dichas fracciones sobre todos los marcadores comparados.

### 1. Caso: Q = Evidencia y P = Evidencia

Cuando ambos perfiles son evidencias, GENis evalúa qué proporción de los alelos presentes en Q (evidencia agrupadora) se encuentran también en P (evidencia comparada).

La fórmula es:

![](images/sec16/p129_f01.png)

Ejemplo ilustrativo (Evidencia–Evidencia)

Marcador D8S1179:

- Q: {12, 13}
- P: {12, 14, 15}

Coincidentes = {12}

![](images/sec16/p130_f01.png)

Este porcentaje se calcula en cada marcador y luego se obtiene el promedio.

### 2. Caso: Q = Evidencia y P = Referencia

Cuando P es una referencia (perfil diploide), GENis evalúa qué proporción de los alelos de la **referencia** se encuentran contenidos dentro de la evidencia.

La fórmula aplicada es:

![](images/sec16/p130_f02.png)

Ejemplo ilustrativo (Evidencia–Referencia)

Marcador D8S1179:

- P (Referencia): {12, 14}
- Q (Evidencia): {12, 14, 15, 19}

Coincidentes = {12, 14}

![](images/sec16/p130_f03.png)

El porcentaje indica en qué medida la evidencia contiene la información genética de la referencia.

## Estados

Cuando GENis encuentra una coincidencia entre dos perfiles, la misma debe ser confirmada o descartada. Dado que los perfiles intervinientes pueden pertenecer a diferentes usuarios responsables de ellos, la confirmación o descarte de una coincidencia se establece en base a un sistema de votación. Para que la confirmación o el descarte sean definitivos, ambos usuarios responsables deben haber realizado la misma operación sobre la coincidencia, es decir, confirmarla o descartada.

Es por eso que el estado de una coincidencia depende del estado del perfil agrupador y del perfil coincidente. Los estados posibles para cada uno son:

**Pendiente**: estado inicial cuando la coincidencia aún no ha sido valorada para ser confirmada o descartada.

**Descartado**: la coincidencia entre ambos perfiles ha sido descartada por los responsables de cada perfil involucrado.

**Confirmado**: la coincidencia entre ambos perfiles ha sido confirmada por los responsables de cada perfil involucrado.

**Conflicto**: la coincidencia ha sido confirmada por uno de los responsables y descartada por otro.

### Ventana de Comparación

Al momento de valorar una coincidencia entre dos perfiles se realiza un cálculo de LR por default que depende del tipo de perfiles involucrados en la misma. En esa ventana podrán observarse ambos perfiles y el LR total y el LR para cada marcador individual. Podrán modificarse la base de datos de frecuencia y la probabilidad de drop-in y drop-out para obtener un nuevo resultado.

Dentro del menú de Notificaciones, accediendo a la coincidencia, se presenta la siguiente pantalla de comparación de perfiles:

![](images/sec16/p132_f01.png)

![](images/sec16/p132_f02.png)

A través del botón de **Imprimir Reporte**, se genera un PDF con la información que se ve en pantalla:

![](images/sec16/p133_f01.png)

## Escenario

Cuando en la coincidencia participa una evidencia, se podrán generar escenarios en los que el usuario podrá modificar los parámetros de cálculo. Podrá determinar el o los perfiles participantes de cada hipótesis, la cantidad de desconocidos, la base de frecuencias, el valor de theta, la probabilidad de drop-in y la de drop-out.

Hacer click en **Agregar escenario**:

![](images/sec16/p134_f01.png)

Los escenarios de cálculo poseen dos solapas:

**Escenario de Cálculo**: desde donde el usuario genera y parametriza las hipótesis. Si bien Genis puede generar un cálculo de LR esto no reemplaza la utilización de software de cálculos para la valoración de aportantes y probabilidad de drop-out.

![](images/sec16/p135_f01.png)

**Comparación**: herramienta para detectar fácilmente de modo visual las diferencias y coincidencias entre los perfiles.

![](images/sec16/p135_f02.png)

**Resultado**: presenta el LR total y por marcador más los parámetros que se utilizaron para obtener el resultado.

![](images/sec16/p136_f01.png)

En esta pantalla es posible Validar y Guardar el calculo o solo Guardarlo para verificar después.

## Parámetros por default

Para el cálculo de LR por default se utilizan los parámetros de probabilidad de drop-in y dropout correspondientes al laboratorio responsable del perfil agrupador.

Nota técnica – Recomendaciones internacionales sobre parámetros de drop-out y drop-in.

- De acuerdo con las recomendaciones de la **DNA Commission de la ISFG (2012, 2016)**, de **SWGDAM** y de las guías de **ENFSI**, las probabilidades de drop-out y drop-in utilizadas en el cálculo de razones de verosimilitud (LR) deben estar **respaldadas por estudios de validación propios del laboratorio** que los emplea.

Estos estudios deben ser representativos de:

- el kit STR utilizado,
- las condiciones analíticas y de amplificación,
- la plataforma instrumental,
- los rangos de cantidad de ADN,
- y el umbral operativo de detección del laboratorio.

En este sentido, cada laboratorio es responsable de **documentar y justificar** los valores o modelos utilizados para drop-out y drop-in, ya sea como valores fijos, rangos de uso o modelos derivados (por ejemplo, regresiones Pr(D)–RFU).

## Visualización de parámetros utilizados en GENis

En el contexto del módulo de coincidencias, GENis permite visualizar los valores de drop-out y drop-in aplicados al cálculo del LR directamente desde:

- la ventana de comparación, y
- la pantalla de escenarios.

Esto asegura transparencia respecto de los parámetros involucrados en el cálculo y permite al analista verificar que corresponden a los valores definidos y validados por su laboratorio.

## Acceso al gestor de coincidencias

De acuerdo a las reglas de búsqueda definidas para cada categoría, al encontrarse una coincidencia de perfiles genéticos, el usuario recibe una notificación de nuevas coincidencias:

![](images/sec16/p138_f01.png)

Se puede acceder al análisis y valoración estadística de las coincidencias desde las notificaciones o bien desde el menú seleccionando **Coincidencias/Forense**.

Accediendo desde el menú de **Coincidencias**, en la primera pantalla se observa un buscador de perfiles. Se puede realizar la búsqueda de perfil tanto por el **Código GENis** como por el **Código de Laboratorio**, y se busca por el código completo.

Nota:

- Tener en cuenta que si se da de baja un perfil que tiene matches pendientes, las coincidencias que tenía el perfil, antes de que sea dado de baja, se pueden confirmar o descartar, pero el perfil no participa en búsquedas nuevas, es decir, no se generan nuevas coincidencias
- Dentro del **Gestor de Coincidencias**, si se quiere realizar una búsqueda por un perfil que fue dado de baja, se debe buscar solamente por el **Código GENis**, dado que puede ocurrir que **el Código de Laboratorio** de un perfil dado de baja, coincida con el de un perfil activo.

El listado de coincidencias se obtiene como consecuencia de la búsqueda según los filtros agregados. Por omisión, el listado se muestra ordenado desde la coincidencia más reciente a la más antigua por defecto:

![](images/sec16/p139_f01.png)

El listado se presenta como una serie de tarjetas con los siguientes datos: Código de Laboratorio, usuario responsable del perfil, categoría a la que pertenece el perfil, fecha de la última coincidencia, cantidad inferida de aportantes.

El perfil contra el cual se valoran las coincidencias se denomina perfil **agrupador**.

A la derecha se puede observar la cantidad de coincidencias por los estados globales. Estos estados se forman a partir de los estados de cada uno de los responsables de los perfiles, y pueden ser: Pendiente, Confirmado, Descartado o Conflicto, como se explicaron anteriormente.

Presionando sobre la flecha de la derecha, se despliega la coincidencia con la que obtuvo mejor LR y un resumen de los datos del perfil coincidente, como alelos compartidos, sistemas compartidos, cantidad máxima de marcadores no coincidentes:

![](images/sec16/p140_f01.png)

**Nota:** se considera mejor LR al que obtuvo el número más grande.

Para poder ver del detalle de las coincidencias y poder confirmarlas o descartarlas, presionar en el botón **Ver todos**, el cual accede a una nueva pantalla cuya configuración depende de si el perfil agrupador corresponde a una evidencia forense o a una muestra de referencia:

![](images/sec16/p141_f01.png)

## Perfil agrupador: referencia

 Cuando el perfil agrupador corresponde al de una muestra de referencia, los perfiles contra los que se encontraron coincidencias se agrupan entre Referencias y Evidencias.

 No deberían encontrarse coincidencias entre perfiles de referencia excepto que una muestra indubitada se ingrese debido a que una persona se presentó con otra identidad o se cargó en dos categorías diferentes (imputados-condenados) o en el caso de gemelos idénticos.

 Al expandir las Evidencias se observa los perfiles contra los cuales la referencia obtuvo coincidencias acordes a los algoritmos de búsqueda establecidos entre las categorías.

![](images/sec16/p142_f01.png)

En la agrupación de las evidencias, para cada perfil podemos ver:
1. Código de Laboratorio.
2. Categoría.
3. Sistemas compartidos.
4. Porcentaje de alelos compartidos.

## Perfil agrupador: referencia

 Cuando el perfil agrupador corresponde al de una muestra de referencia, los perfiles contra los que se encontraron coincidencias se agrupan entre Referencias y Evidencias.

 No deberían encontrarse coincidencias entre perfiles de referencia excepto que una muestra indubitada se ingrese debido a que una persona se presentó con otra identidad o se cargó en dos categorías diferentes (imputados-condenados) o en el caso de gemelos idénticos.

 Al expandir las Evidencias se observa los perfiles contra los cuales la referencia obtuvo coincidencias acordes a los algoritmos de búsqueda establecidos entre las categorías.

![](images/sec16/p143_f01.png)

En la agrupación de las evidencias, para cada perfil podemos ver:
1. Código de Laboratorio.
2. Categoría.
3. Sistemas compartidos.
4. Porcentaje de alelos compartidos.
5. LR
6. Cantidad máxima de marcadores no coincidentes
7. Valoración del estado del perfil agrupador
8. Valoración del estado del perfil coincidente
9.
![](images/sec16/p144_f01.png)
Ver escenarios
10.
![](images/sec16/p144_f02.png)
Agregar un nuevo escenario
11.
![](images/sec16/p144_f03.png)
Descartar
12. Acceder a la ventana de comparación.
13. Replicar estado de coincidencia a instancia superior.

## Perfil agrupador: evidencia

Debemos distinguir la cantidad de aportantes inferidos en la evidencia que actúa como perfil agrupador en dos o distinto de dos.

En el caso de que el número de aportantes inferidos de la evidencia sea distinto de dos (1 o mayor que 2), la agrupación es:

1. Referencias o Evidencias Cantidad de Aportantes Inferidos = 1
2. Evidencias Cantidad de Aportantes Inferidos > 1

![](images/sec16/p145_f01.png)

Cuando el número de aportantes inferidos es dos en un perfil agrupador pertenece a una categoría del tipo evidencia es dos, se presentan los perfiles con los que encontró coincidencias agrupados del siguiente modo:

1. Referencias o Evidencias Cantidad de Aportantes Inferidos = 1
2. Evidencias Cantidad de Aportantes Inferidos = 2
3. Evidencias Cantidad de Aportantes Inferidos > 2

![](images/sec16/p146_f01.png)

En este ejemplo el perfil Evi02C1 es el perfil agrupador y observamos quién es el usuario responsable del mismo, el laboratorio, la categoría a la que pertenece y la cantidad de aportantes inferidos.

**Perfil agrupador con aportantes inferidos <> 2 y sus coincidencias con Referencias o Evidencias Cantidad de Aportantes Inferidos = 1**

El perfil agrupador es una evidencia con un número de aportantes inferido igual a uno que produjo una coincidencia con perfiles evidencias que también tienen un único aportante inferido o con un perfil de referencia:

![](images/sec16/p146_f02.png)

Desde aquí puede accederse a la creación de escenarios o a la ventana de comparación.

**Perfil agrupador con aportantes inferidos <> 2 y sus coincidencias con Evidencias Cantidad de Aportantes Inferidos > 1**

Este caso se presenta cuando el perfil agrupador posee una cantidad inferida de aportantes diferente de dos (1 o mayor que 2) y se encuentran coincidencias con evidencias de cantidad de aportantes inferidos mayor que uno.

![](images/sec16/p147_f01.png)

Lo mismo que en el punto anterior, puede accederse a la creación de escenarios o a la pantalla de comparación.

**Perfil agrupador con aportantes inferidos = 2 y sus coincidencias con Referencias o Evidencias Cantidad de Aportantes Inferidos = 1**

Seleccionando **Referencias o Evidencias Cantidad de Aportantes Inferidos = 1**, se despliega una lista de perfiles contra los cuales el perfil agrupador, en este caso Caso3-Mezcla, tuvo coincidencias según los parámetros de Reglas de Búsqueda definidos para la categoría del perfil agrupador.

![](images/sec16/p148_f01.png)

En la agrupación de las evidencias, para cada perfil podemos ver:

1. Código Laboratorio
2. Categoría.
3. Sistemas compartidos.
4. Porcentaje de alelos compartidos.
5. LR
6. Numero de no coincidencias
7. Validación del estado del perfil agrupador
8. Validación del estado del perfil coincidente
9.
![](images/sec16/p148_f02.png)
Acceder a la ventana de comparación.

En este caso, para valorar las coincidencias estadísticamente hay dos opciones:

1. **Presionando**
![](images/sec16/p148_f03.png)
**a la derecha del perfil coincidente**: en esta opción el usuario accederá a la comparación únicamente entre el perfil agrupador y el coincidente. Llamamos a esta pantalla **ventana de comparación**:

![](images/sec16/p149_f01.png)

Presionando en el lápiz ubicado a la derecha del LR, se puede modificar las opciones de cálculo en cuanto a la base de frecuencias a utilizar y los parámetros de drop-in y drop-out.

![](images/sec16/p149_f02.png)

2. **Agregar escenarios de cálculo**: en este caso se accede a la creación de un nuevo escenario de cálculo presionando el botón **Agregar escenario**.

![](images/sec16/p150_f01.png)

El botón **Ver escenarios** permite acceder a escenarios de cálculo previamente guardados.

![](images/sec16/p150_f02.png)

Presionando el botón
![](images/sec16/p150_f03.png)
puede editarse el escenario.

**Perfil agrupador con aportantes inferidos = 2 y sus coincidencias con Evidencias Cantidad de Aportantes Inferidos = 2**

Desplegando esta agrupación de perfiles coincidentes con el agrupador podremos observar las coincidencias resultantes del algoritmo de búsqueda **Mezcla Mezcla** y el resultante del cálculo de LR para estos casos:

![](images/sec16/p151_f01.png)

Presionando en el botón se
![](images/sec16/p151_f02.png)
accede a la ventana de comparación:

![](images/sec16/p151_f03.png)

Las opciones estadísticas pueden modificarse presionando
![](images/sec16/p151_f04.png)
, a la derecha del LR.

En el caso de las coincidencias entre dos evidencias de dos aportantes cada una, lo único que puede modificarse es la base de datos de frecuencia utilizada para el cálculo.

**Perfil agrupador con aportantes inferidos = 2 y sus coincidencias con Evidencias Cantidad de Aportantes Inferidos > 2**

En estos casos se puede acceder a la ventana de coincidencias pero no es posible realizar cálculos estadísticos ni confirmar la coincidencia:

![](images/sec16/p152_f01.png)

![](images/sec16/p152_f02.png)

## Organización del gestor de coincidencias:

![](images/sec16/p153_f01.png)

## Interpretación del LR en GENis según el tipo de comparación

### 1. Naturaleza del cálculo de LR en GENis

El módulo forense de GENis utiliza un motor de coincidencias que e**valúa la compatibilidad probabilística entre dos perfiles genéticos**, modelando la presencia, ausencia y aparición inesperada de alelos a través de parámetros de **drop-out** y **drop-in** definidos por el laboratorio.

Sin embargo, el LR que produce GENis **no es el mismo LR** que se obtiene en software periciales como **LRmix**, **EuroForMix** o **STRmix**, los cuales implementan modelos *semicontinuos* o *continuos* basados en hipótesis formales del tipo:

- Hp: El imputado X (perfil de referencia) es contribuyente de la evidencia
- Hd: Un individuo desconocido de la población es contribuyente de la evidencia

Este enfoque requiere necesariamente un perfil de referencia para definir Hp.

Por eso, herramientas como LRmix **no calculan LR entre evidencias**, porque en ausencia de referencia no existe Hp biológicamente interpretable.

GENis, en cambio:

- no requiere una hipótesis basada en un individuo concreto,
- no distingue Hp y Hd como lo hace un modelo pericial,
- estima la compatibilidad mutua de los perfiles **sin necesidad de un individuo conocido**,
- produce un **LR operativo**, cuyo propósito es **ordenar y priorizar coincidencias dentro del sistema**, no expresar el peso probatorio en el sentido judicial.

En términos simples:
**El LR de GENis es un índice de verosimilitud para la búsqueda automatizada, no un LR judicial.**

### 2. Cómo funciona el LR operativo de GENis según el tipo de comparación

A continuación se explica cómo interpretar el valor de LR en los distintos escenarios presentados en la Sección 16.

**A. Perfil Agrupador = Referencia**
Coincidencia = Evidencia
Este es el único caso que se **parece estructuralmente** al modelo de LRmix, porque:

- existe una referencia real,
- la evidencia contiene uno o varios aportantes desconocidos,
- se evalúa si la evidencia es compatible con incluir al perfil de referencia como posible aportante.

Sin embargo, incluso en este escenario:

 El LR calculado por GENis NO es un LR semicontinuo forense porque:

- no modela picos RFU,
- no estima drop-out específico por marcador ni por contribuyente,
- no incorpora error analítico asociado a alturas de pico,
- usa parámetros globales definidos por el laboratorio.

 Interpretación del LR en este escenario:

- **LR alto:** la evidencia es compatible con incluir al individuo como posible aportante, dada una proporción de mezcla y parámetros de drop-out globales.
- **LR bajo:** la evidencia es poco compatible con incluir al individuo.

Este LR solo guía al operador sobre la **prioridad de la coincidencia** dentro de la base.

**B. Perfil Agrupador = Evidencia**
Coincidencia = Referencia
Este escenario invierte la perspectiva: la evidencia es el perfil base, y se evalúa si la referencia podría explicar sus alelos observados.

El motor funciona igual que en A pero con una diferencia conceptual:

- El software no evalúa "Hp: la referencia contribuye",
- sino "¿los alelos de la referencia pueden explicar los alelos observados en la evidencia, considerando drop-out/drop-in?"

Interpretación práctica:

- LR alto: la referencia es compatible con la evidencia desde una análisis de coincidencia técnico.
- LR bajo: la referencia no explica bien la evidencia.

Importante:
El valor sigue siendo un **LR operativo**, no probatorio, porque no se evalúan hipótesis formales Hp/Hd.

**C. Perfil Agrupador = Evidencia**
Coincidencia = Evidencia

Este es el caso más complejo, porque no hay referencia para definir Hp. Lo que hace GENis es:

1. Evalúa si los alelos de la Evidencia A pueden explicarse utilizando contribuyentes hipotéticos de la Evidencia B (y viceversa).
2. Modela la ausencia de alelos como drop-out.
3. Modela alelos inesperados como drop-in.
4. Combina estas evaluaciones en un índice de compatibilidad.

Esto produce un LR, pero NO es un LR pericial.

Interpretación practica:

- **LR alto:** Las dos evidencias son estructuralmente compatibles y podrían compartir uno o más aportantes.
- **LR medio:** Hay cierta compatibilidad pero también diferencias explicadas por drop-out o multicontribución.
- **LR bajo:** Las evidencias no comparten estructura genética compatible.

### 3. Recomendación normativa para la interpretación del LR en GENis

De acuerdo con:

- ISFG DNA Commission (2016, 2020)
- SWGDAM (2018, 2024)
- ENFSI DNA WG Best Practices (2015–2022)

**Toda valoración probabilística formal (LR judicial)
DEBE realizarse con software validado para uso pericial,
como:**

- LRmix Studio (semicontinuo)
- EuroForMix (continuo)
- STRmix (continuo)

GENis **no** reemplaza estas herramientas porque no incorpora:

- información de RFU,
- variación de drop-out por marcador,
- cuantificación continua de mezcla,
- modelado de stutter, degradación o inhibición.

Referencias técnicas sobre el motor de coincidencias y el LR operativo de GENis

El modelo de coincidencias utilizado por GENis está descrito en:
**Chernomoretz et al. (2020), "GENis, an open-source multi-tier forensic DNA information system", Forensic Science International: Reports, 2, 100132.**

Este trabajo detalla el enfoque probabilístico utilizado para evaluar compatibilidad entre perfiles, incluyendo el uso de parámetros de drop-out y drop-in, y la ponderación mediante frecuencias alélicas.

Adicionalmente, el funcionamiento exacto del motor de coincidencias puede consultarse en el código fuente abierto del proyecto (Fundación Sadosky, GENis – repositorio GitHub), donde se implementan los algoritmos de comparación, ponderación de alelos y cálculo del índice de verosimilitud ("LR operativo").

El LR informado por GENis es un **índice funcional para la búsqueda y priorización de coincidencias**, y no corresponde al LR semicontinuo o continuo utilizado por software periciales como LRmix, EuroForMix oSTRmix, de acuerdo con las recomendaciones internacionales (ISFG 2016; SWGDAM 2018/2024; ENFSI DNA WG).

## Descarte masivo de matches

Presionando la flecha de la izquierda, en el menú de **Coincidencias**, se despliega la coincidencia con mayor LR.

Haciendo click sobre **Descartar todos** automáticamente descarta todos los matchs encontrados con ese perfil:

![](images/sec16/p158_f01.png)

Aparece un cartel de confirmación del descarte masivo de todas las coincidencias:

![](images/sec16/p158_f02.png)

Accediendo al detalle de todas las coincidencias también se puede **Descartar todo**:

![](images/sec16/p159_f01.png)

![](images/sec16/p159_f02.png)
