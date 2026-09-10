# Interconexión de instancias

La interconexión de instancias constituye uno de los pilares centrales del ecosistema GENis, ya que permite que distintos nodos —por ejemplo, laboratorios provinciales, un nodo nacional, o nodos judiciales— cooperen en la búsqueda de coincidencias genéticas sin compartir directamente sus bases completas. Se trata de una arquitectura federada: cada institución conserva la propiedad y administración de sus perfiles, pero GENis habilita un mecanismo estandarizado para enviar, recibir y procesar información genética de manera segura, trazable y científicamente coherente.

Este esquema replica, en escala nacional, los principios de redes internacionales como **Prüm** en la Unión Europea, **NDIS/CODIS** en EE. UU. y los lineamientos de **ISFG** y **ENFSI** para intercambio transinstitucional. Al igual que en esos sistemas, la interconexión en GENis requiere que exista una armonización mínima entre las instancias para que los perfiles puedan interpretarse correctamente y las coincidencias tengan sentido científico.

## Funcionamiento general del intercambio

Cuando un laboratorio necesita compartir un perfil genético con otra instancia —por ejemplo, enviar un perfil provincial a la instancia nacional— GENis genera un paquete que contiene:

- el análisis autosómico,
- el análisis mitocondrial si está disponible,
- la categoría del perfil (Evidencia, Víctima, IR, etc.),
- la metadata autorizada,
- y la información del responsable del perfil.

Ese paquete viaja de la instancia emisora a la instancia receptora, donde ingresa primero a una cola de revisión. Allí se valida:

- que el perfil esté completo,
- que su categoría exista en la instancia superior,
- que el nombre del kit coincida exactamente,
- que los marcadores del kit estén definidos,
- y que la estructura de alelos sea compatible.

Una vez aprobado, el perfil se integra a la base de la instancia superior y automáticamente pasa a formar parte de los procesos de coincidencia definidos por categoría.

Cuando ocurre una coincidencia, la instancia superior notifica a la inferior, que puede visualizarla, descartarla o avanzar según sus protocolos legales.

![](images/sec21/p239_f01.png)

## Condiciones necesarias para que la interconexión funcione

Para que dos instancias puedan interoperar sin errores, es imprescindible que compartan un conjunto mínimo de configuraciones fundamentales. GENis no intenta resolver diferencias semánticas entre laboratorios: exige que ambos hablen exactamente el mismo “idioma operativo”. Esto coincide con lo establecido por ISFG (2023) y ENFSI-QCLD (2022) para redes criminalísticas federadas.

Las condiciones de armonización incluyen:

- **Categorías idénticas:** el nombre debe coincidir literalmente; una diferencia mínima (“Víctima” vs. “victima”) invalida el perfil.
- **Marcadores definidos de manera uniforme:** GENis no interpreta equivalencias (Penta E ≠ PentaE).
- **Alias de kits coincidentes:** si un laboratorio usa “GF6C” y el otro “GlobalFiler6C”, el perfil será rechazado.
- **Reglas de coincidencia equivalentes:** los niveles de exigencia (alta, media, baja) deben estar definidos de manera simétrica.
- **Bases de frecuencias poblacionales compatibles:** este punto tiene implicancias directas sobre los cálculos de LR (ver sección siguiente).

Estas condiciones no responden a un capricho del sistema, sino a la necesidad de preservar consistencia científica. De otro modo, la instancia superior podría interpretar un mismo perfil de manera diferente que la instancia inferior, generando falsos descartes o falsos hits.

### Nota: Implicancias de las bases de frecuencias y la recomendación internacional

GENis puede identificar coincidencias sin necesidad de que todas las instancias utilicen exactamente la misma base poblacional —porque el motor de coincidencias trabaja principalmente con compatibilidad alélica, reglas categoriales y umbrales internos. Sin embargo, **el cálculo del LR que muestra la instancia superior sí depende de la base de frecuencias que tenga configurada.**

Esto genera un fenómeno importante:

- La instancia inferior verá el LR,
- pero no podrá reproducirlo si su base poblacional es distinta,
- y el LR tampoco será comparable con los LR internos de la instancia inferior.

La normativa internacional es clara en este punto. Según:

- **ISFG 2023 – Recommendations on Statistical Genetics for Forensic Databases,**
- **ENFSI-QCLD 2022 – Best Practices for DNA Database Management,**
- **EU Prüm 2018 Technical Annex,**
- **NDIS (EE.UU.) 2023 Operational Procedures Manual,**

todas coinciden en que:

**“Para cualquier red de intercambio de perfiles, los laboratorios conectados deben utilizar bases de frecuencia armonizadas, administradas centralmente y actualizadas de manera uniforme, a fin de garantizar reproducibilidad estadística y consistencia entre nodos.”**

Por lo tanto, aunque GENis funcione con bases diferentes para la parte operacional de coincidencia, **para cumplir normativa internacional y asegurar coherencia científica**, se recomienda firmemente:

1. usar la misma base poblacional nacional para todas las provincias.
2. distribuir actualizaciones desde un repositorio unificado,
3. asegurar que los LR interinstancia puedan reproducirse en cualquier nodo.

## Notificación de coincidencias entre instancias

Cuando la instancia superior encuentra una coincidencia con un perfil proveniente de una instancia inferior, el proceso es automático:

1. se genera un match,
2. se envía una notificación a la instancia inferior,
3. el laboratorio inferior visualiza la tarjeta de coincidencia,
4. puede descartar o puede confirmar,
5. la confirmación (hit) sincroniza el estado entre ambas instancias,
6. todo queda registrado en la auditoría de ambos nodos.

Este flujo es equivalente al procedimiento que plantea Prüm: el país que recibe la coincidencia responde con un “match positivo confirmado” o “sin coincidencia”.

## Gestión de perfiles importados y control de calidad

Al llegar perfiles desde instancias inferiores, la instancia superior no los incorpora automáticamente: primero los revisa. Si detecta errores —cabeceras inválidas, marcadores inconsistentes, kits inexistentes, categorías desconocidas— deberá rechazar el perfil.

La decisión es deliberada: la instancia nacional debe actuar como un **filtro de calidad**, evitando que una mala configuración local contamine el ecosistema completo.

Esta política de control es consistente con las prácticas de:

- **CODIS/NDIS**, que exige revisión humana obligatoria para cada perfil proveniente de laboratorios estatales.
- **Prüm**, que requiere verificación manual de cada intercambio antes de incorporarlo al sistema nacional.

GENis sigue la misma filosofía.

La comunicación entre los nodos de la red GENis es estrictamente vertical. Esto implica que los nodos **Laboratorios** se comunican solamente con el registro del cual dependen. Los **Registros Provinciales** se comunican con el **Registro Nacional** y los **Laboratorios** que dependen de él. El **Registro Nacional** se comunica con los **Registros Provinciales** y con los **Laboratorios** que dependan del (en caso de que exista alguno).

## Interconexión de instancias

Dentro de una instancia inferior, para poder realizar la configuración de una instancia superior, ir al menú **Configuración/Interconexión de Instancias/Instancia Superior:**

![](images/sec21/p244_f01.png)

Se tienen dos solapas:

**Conectividad:** en esta solapa se deberá ingresar la IP de la instancia superior. Se tiene un botón para chechear la conexión:

![](images/sec21/p244_f02.png)

**Mapeo de Categorías:** permite configurar las categorías que tendrán los perfiles que se exporten a la instancia superior. El botón Autoconfigurar permite que si encuentra las mismas categorías en ambas instancias, selecciona automáticamente la opción en el combo box:

![](images/sec21/p245_f01.png)

A la **Instancia Superior** le llega una notificación de que la **Instancia Inferior** está pendiente de aprobación. Haciendo click sobre la notificación, o desde el menú **Monitoreo/Instancias Inferiores**, se puede aprobar la Instancia Inferior:

![](images/sec21/p245_f02.png)

![](images/sec21/p245_f03.png)

## Replicar perfiles

Para poder realizar la interconexión entre instancias, la categoría a la que pertenece el perfil deberá tener chequeado el casillero de **Replicar a instancias superiores**, caso contrario el perfil no se podrá interconectar con ningún laboratorio:

![](images/sec21/p246_f01.png)

Si se tiene esta opción habilitada, tanto en la carga masiva como en la carga manual se tendrán habilitada la opción de replicar a una instancia superior, de lo contrario esta opción estará grisada:

**Carga masiva:**

![](images/sec21/p246_f02.png)

**Carga manual:**

![](images/sec21/p247_f01.png)

Cada laboratorio deberá subir sus perfiles a su instancia la cual automáticamente se replicarán en la instancia superior.

Según se determine por la subcategoría a la que pertenece el perfil, el mismo se enviará a la instancia superior con los siguientes datos asociados:

- Código del sistema del perfil.
- Categoría/subcategoría.
- Tipo de análisis que se incluyen en el perfil.
- Fecha de alta del perfil en el sistema.

Cuando se carga un electroferograma o archivo asociado a un perfil y ese perfil se replica entre instancias, también se replicar el electroferograma y/o adjunto y se pueden visualizar los mismos.

## Aprobación/rechazo de perfiles en instancia superior

Supongamos el ejemplo que el **Laboratorio 1** realiza una carga masiva de una mezcla, la cual se replica a la instancia superior:

![](images/sec21/p248_f01.png)

En el **Laboratorio 2** se realiza una carga masiva de un perfil sospechoso, el cual se replica a la instancia superior:

![](images/sec21/p248_f02.png)

La instancia superior recibe los perfiles cargados de las instancias inferiores. Para poder aprobarlos/rechazarlos, ir al menú **Perfiles/Aprobación Perfiles de instancia inferior**.

El ícono del ojo ![](images/sec21/p248_f03.png) permite ver del detalle de los alelos del perfil.

![](images/sec21/p249_f01.png)

Cuando se carga un electroferograma o archivo asociado a un perfil y ese perfil se replica entre instancias, se envía también el electroferograma y/o adjunto y se pueden visualizar los mismos.

Aprobar los perfiles, haciendo click sobre el icono de aprobar o seleccionado los perfiles deseados y presionando el botón **Aprobar Seleccionados**. Aparece un cartel que confirma que se aprobaron los perfiles:

![](images/sec21/p249_f02.png)

Una vez aprobados los perfiles, los mismos pasan a formar parte de la instancia superior y se corre automáticamente el proceso match:

![](images/sec21/p250_f01.png)

El Código GENis me indica el laboratorio al que pertenece el perfil.

La instancia superior y los laboratorios reciben la notificación de que se generó un match (Ver detalle de las notificaciones de Interconexión de Instancias en la sección 18.Notificaciones):

![](images/sec21/p250_f02.png)

Nota: tener en cuenta que para que la notificación de match le llegue al perfil de la instancia superior, tiene que tener chequeado el tilde de Notificaciones interconexión de instancias dentro del menu de **Configuración/Roles:**

![](images/sec21/p250_f03.png)

Nota: Si bien es posible replicar perfiles que no contengan la misma configuracion de reglas de búsqueda es posible que no se obtengan en la instancia superior e inferior los mismos resultados.

## Replicar perfiles asociados

En la pantalla de aprobación de perfiles de instancia superior se muestra el siguiente campo:

![](images/sec21/p251_f01.png)

Cuando un perfil de evidencia tiene asociada una víctima, ambos perfiles se replican en conjunto hacia la instancia superior. La evidencia se replica en estado activo, mientras que el perfil de la víctima se replica inhabilitado. Esto implica que la víctima no participa en ningún proceso de búsqueda ni de coincidencias, y se mantiene únicamente como información administrativa del caso original.

Durante el proceso de coincidencias, tanto en la instancia local como en la instancia superior, el motor de búsqueda de GENis utiliza exclusivamente el perfil genético de la evidencia para comparar contra los perfiles candidatos. La víctima no interviene en el algoritmo de coincidencia, ya que GENis no implementa un modelo de desmezcla ni de asignación de aportantes conocidos: la evidencia es evaluada como un único perfil compuesto.

En consecuencia, las coincidencias entre una evidencia mezclada y un perfil candidato (por ejemplo, un condenado) se determinan únicamente a partir de la compatibilidad alelo por alelo entre dichos perfiles, aplicando los parámetros configurados de discrepancias, drop-out y drop-in para la categoría correspondiente. La presencia de la víctima no modifica el resultado de la coincidencia ni el cálculo de compatibilidad, y su perfil permanece excluido del proceso de búsqueda en cualquier instancia.

## Modificación de perfiles

Cuando un perfil es replicado a una instancia superior, no se le podrá realizar ninguna modificación, esto implica que se deshabilitaran los botones para agregar más información.

En el caso de que se tenga más información asociada al perfil, la única manera es dar de baja el perfil y volverlo a cargar agregando lo nuevo.

Los perfiles que pertenecen a otros laboratorios no podrán ser editados, esto implica que no se podrá: agregar análisis, replicar a otras instancias, adjuntar archivos ni tampoco se podrá ver su código interno de la muestra.

## Propagar hit y descartes entre instancias

Cuando un match es transformado en hit o descarte, el evento es replicado a las instancias involucradas. Esto será informado en la bandeja de entrada de los genetistas responsables y de los usuarios con permisos para recibir notificaciones de interconexión. Se registra el estado del hit/descarte parcial y del hit/descarte completo (ver detalle de notificaciones en la sección 18. Notificaciones).

![](images/sec21/p253_f01.png)

![](images/sec21/p253_f02.png)

## Baja de perfiles

La baja de perfiles funciona independientemente en cada instancia, es decir, cuando se da de baja un perfil en una instancia, la misma no se replica al resto de las instancias. Por lo que debe considerarse que si la baja de un perfil es por un error de carga o asignación alelica debe comunicarse a la instancia superior para que esta también proceda con la baja.

## Filtros

Dentro del listado de perfiles en la solapa **Perfiles**, se tiene el tilde **Pendientes de Replicar**, que me muestra los perfiles que no fueron replicados a una instancia superior:

![](images/sec21/p254_f01.png)

Tener en cuenta que también se deberá tener tildado el casillero de **Activos** y/o **Dados de baja**, sino la búsqueda no arroja ningún resultado.
