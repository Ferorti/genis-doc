GENis está organizado en **tres módulos forenses**, cada uno pensado para un problema distinto:

| Módulo | Pregunta que responde |
|---|---|
| **Identificación forense de personas** | ¿Este perfil (sospechoso, condenado) coincide con evidencia de una escena, o con otro perfil de referencia? |
| **MPI** (búsqueda de personas desaparecidas) | ¿Alguno de estos individuos no identificados es el pariente buscado en este árbol familiar? |
| **DVI** (identificación de víctimas de desastre) | Igual que MPI, aplicado a la identificación de restos en contextos de desastre. |

Esta página describe el motor de genética forense que sostiene a los tres: el modelo de kits y marcadores, las categorías de perfiles, el motor de coincidencias STR, el cálculo de likelihood ratio, el soporte de ADN mitocondrial y el motor de parentesco por redes bayesianas de MPI/DVI.

---

## Kits y marcadores

Cada perfil genético se genotipa con uno o más **kits** comerciales, y cada kit define un conjunto de **marcadores** (loci).

- Cada kit tiene asociado un **parámetro representativo K**: la cantidad de marcadores que ese kit aporta para evaluar admisibilidad.
- Cada marcador se carga indicando cromosoma, rango alélico válido, y si es **requerido** o solo **aceptado** para el matching.
- El sistema interpreta **microvariantes** (alelos con sufijo `.x`, que actúan como comodín dentro de un rango) y **valores fuera de la escalera alélica** del marcador, conservando en el resultado tanto el valor cargado como el usado para comparar.

## Categorías y clasificación de perfiles

Todo perfil pertenece a una **categoría**, que es el mecanismo central de configuración del sistema: define si corresponde a una **muestra de referencia** (indubitada) o a una **evidencia forense**, y de esa distinción se derivan:

- **Criterios de admisibilidad**: cantidad mínima de marcadores con alelos, máximo de marcadores con trisomía (usado también para inferir número de aportantes en evidencias), y máximo de alelos por marcador.
- **Reglas de asociación**: por ejemplo, vincular el perfil de una víctima con la evidencia de una mezcla en la que es aportante conocido, para optimizar la búsqueda.
- **Reglas de búsqueda**: contra qué otras categorías se compara automáticamente un perfil nuevo, y con qué nivel de exigencia.

Los módulos **MPI** y **DVI** trabajan con un conjunto de categorías fijas que no pueden editarse ni eliminarse, organizadas en dos grupos — **Ante Mortem** (perfiles de referencia de la persona buscada: individuos de referencia, elementos personales, personas que buscan su identidad biológica) y **Post Mortem** (restos y personas fallecidas no identificadas) — con subtipos como IR, ER, INN, RNN, ENN y PFNI.

## Bases de datos de frecuencias alélicas

La valoración estadística de una coincidencia (probabilidad de match aleatorio y likelihood ratio) requiere conocer con qué frecuencia aparece cada alelo en la población de referencia. GENis administra estas tablas como archivos cargables, a los que se asocia un **coeficiente theta** de co-ancestría/subestructura poblacional.

Cuando la tabla no trae frecuencias mínimas para alelos poco muestreados, GENis ofrece cuatro métodos para estimarlas:

| Método | Fórmula de f-mínima | Depende de |
|---|---|---|
| Manual | valor fijo | — |
| NRC II | 5 / (2N) | N (tamaño muestral) |
| Weir | α / (N + α) | N, α (heterogeneidad poblacional) |
| Budowle–Monson–Chakraborty | (C + α) / (2N + α + C) | N, α, C (el más conservador) |

## Motor de coincidencias STR: niveles de exigencia

GENis compara perfiles marcador por marcador usando un esquema de **tres niveles de exigencia (stringency)** recomendado por ENFSI:

- **Exigencia alta**: todos los alelos de un perfil deben estar presentes, de forma compatible, en el otro perfil en cada locus comparado. Es el modo más estricto, pensado para una coincidencia prácticamente completa.
- **Exigencia media/moderada**: el locus con menos alelos ("conjunto mínimo") debe estar contenido en el otro. Es el modo típico para comparar un perfil simple contra una mezcla, o para tolerar drop-out aparente.
- **Exigencia baja**: alcanza con que ambos loci compartan al menos un alelo. Es un criterio amplio, útil para búsquedas tipo parentesco simple o cribado exploratorio.

El nivel de exigencia debe elegirse según el objetivo de la búsqueda: cuanto más baja la exigencia, más coincidencias fortuitas ("adventicias") produce, sin relación con parentesco real.

Adicionalmente, GENis implementa un **algoritmo Mezcla–Mezcla**, que evalúa si dos evidencias de dos aportantes cada una podrían compartir un aportante en común, como herramienta de vinculación investigativa entre hechos distintos. Este algoritmo no es un software de interpretación probabilística de mezclas: no hace deconvolución ni asigna aportantes, solo prioriza vínculos dentro del motor de búsqueda.

## Valoración estadística: el Likelihood Ratio (LR)

GENis calcula el LR sobre un modelo de mezclas de ADN que define conjuntos de alelos observados en la evidencia, aportados por contribuyentes conocidos o desconocidos, y no aportados por conocidos excluidos; el LR resulta del cociente entre la probabilidad de la evidencia bajo la hipótesis considerada y bajo la hipótesis alternativa, sumando todos los escenarios posibles de aportantes desconocidos compatibles con la evidencia.

El cálculo incorpora:

- **Estructura poblacional** (parámetro θ, converge al equilibrio de Hardy-Weinberg cuando θ=0).
- **Drop-out**: desaparición de un alelo realmente aportado (por desbalance heterocigoto u otros artefactos de amplificación).
- **Drop-in**: aparición de un alelo ajeno a los contribuyentes considerados, típicamente por contaminación.

Las probabilidades de drop-out/drop-in usadas por default se configuran por laboratorio, siguiendo las recomendaciones de ISFG, SWGDAM y ENFSI para que cada laboratorio las respalde con sus propios estudios de validación (kit, plataforma, umbral de detección).

Cuando se comparan dos evidencias de mezcla, GENis puede estimar la probabilidad de que ambas compartan un aportante común, contrastando esa hipótesis contra la alternativa de que los contribuyentes de cada mezcla sean completamente independientes.

### LR operativo, no pericial

El LR que informa GENis no equivale al LR de software periciales especializados (LRmix Studio, EuroForMix, STRmix), que implementan modelos semicontinuos o continuos con hipótesis formales de acusación/defensa y modelan intensidad de picos (RFU). A diferencia de esos modelos, GENis no requiere necesariamente un perfil de referencia para plantear una hipótesis, no distingue formalmente hipótesis de fiscalía/defensa como un modelo pericial, y produce un **LR operativo** cuyo propósito es ordenar y priorizar coincidencias dentro del sistema, no expresar peso probatorio en sentido judicial. Toda valoración probatoria formal debe hacerse con software validado para uso pericial, dado que GENis no incorpora información de RFU, variación de drop-out por marcador, cuantificación continua de mezcla ni modelado de stutter, degradación o inhibición.

## ADN mitocondrial (mtDNA)

GENis admite perfiles de ADN mitocondrial como complemento a los marcadores STR autosomales, útil cuando el material genético está muy degradado (huesos antiguos, cabello sin raíz) o cuando interesa la línea materna, como en MPI/DVI.

- Los haplotipos se cargan como diferencias respecto de la secuencia de referencia **rCRS**, ya determinadas externamente por el analista — GENis no alinea secuencias ni interpreta cromatogramas.
- Se admiten hasta 4 rangos de posiciones por haplotipo, dentro de las regiones 16024–16569 y 1–576.
- Ciertas posiciones altamente mutables o inestables entre tejidos (16193, 309, 455, 463, 573) se excluyen del cálculo de exclusión, por no aportar valor discriminante confiable.
- El match mitocondrial se calcula siempre en modo de **alta exigencia**: se suman los mismatches entre haplotipos y se comparan contra el umbral máximo configurado en la categoría del perfil.

## Módulo MPI/DVI: identificación por parentesco con redes bayesianas

El motor de búsqueda de personas resuelve un problema distinto al de coincidencia STR directa: en vez de comparar "perfil contra perfil", compara un **pedigrí familiar** (con genotipos parcialmente conocidos) contra candidatos no identificados.

GENis modela cada familia como una **red bayesiana**, que integra la estructura del pedigrí y los genotipos disponibles para inferir la tabla de probabilidad condicional del genotipo de la persona buscada; esto permite calcular el LR de forma eficiente incluso para bases de personas no identificadas muy grandes, porque las probabilidades del genotipo buscado se calculan una sola vez por familia.

El mismo fundamento fue validado de forma independiente en el paquete R **`fbnet`**, contrastando sus LR contra los paquetes de referencia *Familias* y *forrel* sobre 24 pedigríes reales del Banco Nacional de Datos Genéticos argentino, con errores medios por debajo del 0,2% en la mayoría de los casos. Un trabajo posterior propone métricas de teoría de la información (divergencia de Kullback-Leibler, entropía) para cuantificar cuánto aporta un pariente disponible a la identificación de la persona buscada, implementadas en el paquete R **`forensIT`**; esto permite, por ejemplo, priorizar a qué pariente conviene genotipar cuando hay varias opciones con igual poder de exclusión.

## Referencias

- Chernomoretz, A. et al. (2020). *GENis, an open-source multi-tier forensic DNA information system.* Forensic Science International: Reports, 2, 100132. https://doi.org/10.1016/j.fsir.2020.100132
- Marsico, F. et al. (2024). *The Missing Person problem through the lens of information theory.* Forensic Science International: Genetics, 70, 103025. https://doi.org/10.1016/j.fsigen.2024.103025
- Martínez, C. et al. (2019). *First-degree familial relationships coincidences in a population database of Jujuy (Argentina)...* Forensic Science International: Genetics Supplement Series, 7, 714–715.
- Chernomoretz, A. et al. (2022). *Bayesian networks for DNA-based kinship analysis...* Forensic Science International: Genetics Supplement Series, 8, 131–132.
