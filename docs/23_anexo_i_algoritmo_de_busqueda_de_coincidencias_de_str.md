# Anexo I - Algoritmo de búsqueda de coincidencias de STR

## Anexo I – Algoritmo de búsqueda de coincidencias de STR

GENis integra **dos motores de búsqueda conceptualmente distintos**, diseñados para responder a problemas forenses diferentes:

- El **motor Forense (STR)** está orientado a la **detección de coincidencias operativas** entre perfiles (referencias y evidencias), utilizando reglas de comparación por locus y criterios de búsqueda inspirados en estándares internacionales (p. ej., ENFSI).

- El **motor MPI (Búsqueda de Personas)** está orientado a **identificación por parentesco** y búsqueda en grandes bases de personas/familias, mediante un enfoque probabilístico formal basado en **Redes Bayesianas**, que permite obtener y validar **Likelihood Ratios (LR)** en pedigríes complejos.

## Motor forense (STR): algoritmos de búsqueda y “exigencia”

En el módulo forense, GENis implementa búsquedas de coincidencias para perfiles STR utilizando **reglas de comparación por marcador y niveles de exigencia**. Estas reglas son consistentes con el concepto internacional de “search stringencies” (alta / moderada / baja) utilizado en sistemas de bases de datos de ADN y descrito por ENFSI para la gestión de bases.

De manera conceptual:

- **Exigencia alta (High stringency):** requiere que todos los alelos presentes en un perfil estén presentes en el otro perfil de manera compatible en cada locus comparado. Es el modo más estricto y se usa cuando se espera una coincidencia prácticamente completa. ENFSI
- **Exigencia media (Moderate stringency):** permite coincidencias locus a locus considerando el locus con menor cantidad de alelos como “conjunto mínimo” que debe estar contenido en el otro. Es el modo típico para comparar perfiles simples con mezclas o para contemplar situaciones compatibles con drop-out aparente. ENFSI
- **Exigencia baja (Low stringency):** requiere al menos un alelo compartido por locus comparado. ENFSI describe este modo como útil para búsquedas tipo parentesco simple (p. ej., padre-hijo) en algunos sistemas; en GENis puede utilizarse como criterio amplio para exploración/cribado según configuración local.

### Algoritmo “Mezcla–Mezcla”

Además de los modos de exigencia tradicionales, GENis incorpora un algoritmo denominado **Mezcla–Mezcla**, cuyo objetivo operativo es detectar si dos evidencias compatibles con mezcla podrían compartir un mismo aportante (p. ej., “el mismo perfil genético estaría presente en dos evidencias de dos aportantes”). Esta funcionalidad es útil como herramienta de priorización y vinculación investigativa entre evidencias de hechos distintos.

**Nota técnica:** el algoritmo mezcla–mezcla no equivale a un software de interpretación probabilística de mezclas (PG). No realiza deconvolución, no asigna aportantes, ni reemplaza herramientas periciales como LRmix / EuroForMix / STRmix. Su función es **operativa dentro del motor de coincidencias**.

## Motor MPI (búsqueda de personas): redes bayesianas y LR por pedigrí

El módulo MPI trabaja con un problema distinto: la evidencia central no es “perfil vs perfil” sino **“familia/pedigrí vs candidatos”**.

GENis modela cada familia como una **Red Bayesiana** que integra:

- la estructura del pedigrí,
- los genotipos observados,
- y parámetros como modelo mutacional (cuando se activa).

A partir de esto, GENis calcula distribuciones de probabilidad del genotipo del individuo buscado y permite estimar **Likelihood Ratios** para grandes volúmenes de candidatos, con validación frente a herramientas reconocidas (p. ej., Familias y forrel), demostrando buen desempeño.

- -ENFSI, Guideline for DNA Database Management – Review and Recommendations (aprobada 05.10.2023). ENFSI
- -Chernomoretz et al., GENis, an open-source multi-tier forensic DNA information system (Forensic Science International: Reports, 2020). Repositorio CONICET
- -Chernomoretz et al., Bayesian networks for DNA-based kinship analysis: Functionality and validation of the GENis missing person identification module (FSI: Genetics Supplement Series, 2022).

## Locus o marcador

Un locus es una posición dentro del genoma. En el contexto de este documento, Locus y Marcador significan lo mismo. Ejemplo: los valores posibles de Locus son D3S1358, TPOX, TH01.

## Alelo

Un alelo es un valor de alguna de las siguientes formas:

- número x ≥ 1 con dos decimales (es decir, es un número de la forma con n
![](images/sec23/p261_f01.png)
![](images/sec23/p261_f02.png)
N)
- [x] dónde x es un número como en el ítem anterior obligatorio para el matching

## Genotipo

Un Genotipo es una dupla Locus → (Alelo, Alelo,…). Por ejemplo un Genotipo es D3S1358 → (28.5, 22).

## Genotipificación

Una genotipificación es una lista de genotipos donde no se repiten los locus de cada elemento.

## Perfil genético

Un perfil genético es una estructura que se compone de:

- Un identificador único id
- Una genotipificación

## Igualdad de alelos

Dados dos alelos x e y, definimos la función **equalₐ: Alelo×Alelo→Bool** de la siguiente manera:

- **equalₐ (x; y) = x == y**
- **equalₐ ([x]; y) = x == y**
- **equalₐ (x; [y]) = x == y**
- **equalₐ ([x]; [y]) = x == y**
- **en otro caso = false**

## Coincidencia en exigencia alta de genotipos

Dados dos Genotipos **X=M₁ → ( x₁,x₂,…,xₙ)** e **Y= M₂ →( y₁,y₂,…,yₘ)** definimos **X =ₘ Y** si y solo si se satisfacen estas condiciones:

- **M₁= M₂**
- **n = m**
- **∃ una permutación x₁',x₂',…,xₙ' de x₁,x₂,…,xₙ tal que ∀ i:1,…,n:equalₐ (xᵢ',yᵢ)**

## Coincidencia en exigencia media o moderada de genotipos

Dados dos Genotipos **X=M₁ → ( x₁,x₂,…,xₙ)** e **Y= M₂ →( y₁,y₂,…,yₘ)** definimos **X⊂ₘY** si y solo si se satisfacen estas condiciones.

- **M₁= M₂**
- **n = m**
- **∃ una permutación x₁',x₂',…,xₙ' de la colección formada por x₁,x₂,…,xₙ seguida de m — n alelos tal que ∀ i:1,…,n:equalₐ (xᵢ',yᵢ)**

## Coincidencia en exigencia baja de locus

Dados dos locus **X=(M₁,x₁,x₂)** e **Y=(M₂,y₁,y₂)** definimos **X≈ₘY** si y solo si se satisfacen estas condiciones

- **M₁= M₂**
- **x₁=x₂ V x₁=y₂ V y₁=x₂ V x₂=y₂**
