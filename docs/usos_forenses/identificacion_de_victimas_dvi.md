# Identificación de víctimas de desastres (DVI)

La identificación de víctimas de desastres (DVI, *Disaster Victim Identification*) está destinada a identificar a las víctimas de un evento con múltiples víctimas, comparando los restos recuperados con los perfiles de los familiares de las personas buscadas.

Comparte con la [búsqueda de personas (MPI)](busqueda_de_personas_mpi.md) el fundamento: la persona buscada no tiene un perfil propio, por lo que la comparación se hace **por parentesco**, mediante árboles familiares (pedigríes). La diferencia es que en DVI el universo de búsqueda es **cerrado**: los restos y las familias pertenecen a un mismo evento y se comparan solo entre sí.

## Cómo funciona

1. **Creación del caso.** Cada evento se gestiona como un caso de tipo DVI, que reúne dos grupos de perfiles:
    - **Perfiles de referencia (Ante Mortem):** familiares de las personas buscadas.
    - **Perfiles NN post mortem:** restos biológicos no identificados, personas fallecidas no identificadas, personas fallecidas cuya identidad quiere analizarse y elementos personales hallados.
2. **Agrupación de restos.** Cuando varios perfiles corresponden a un mismo individuo (por ejemplo, distintos fragmentos), se consolidan en un único perfil agrupador, el más completo. Así cada individuo participa una sola vez en la búsqueda, se evitan coincidencias redundantes y se compara con la mayor cantidad de alelos disponibles.
3. **Pedigríes.** Para cada familia se arma un pedigrí con sus perfiles de referencia.
4. **Búsqueda.** Al activar un pedigrí, GENis lo compara contra los perfiles post mortem activos del mismo caso.
5. **Revisión.** Las coincidencias se revisan en el gestor de coincidencias del caso y se validan mediante un escenario.

## Diferencias con MPI

| Aspecto | MPI | DVI |
|---|---|---|
| Universo de búsqueda | Abierto: cada perfil nuevo de una categoría de MPI se compara contra todos los pedigríes activos | Cerrado: la búsqueda se lanza al activar un pedigrí y abarca solo los perfiles del caso |
| Perfiles post mortem | Se cotejan desde la base general | Se asocian al caso, en una solapa propia |
| Agrupación de restos | No | Sí |
| *Screening* mitocondrial | Opcional, como filtro previo | No se utiliza: con perfiles incompletos, degradados o parciales, usarlo como filtro excluyente podría descartar asociaciones válidas |

## Profundización

- Operación de casos DVI, agrupación de restos y coincidencias: [Búsqueda de personas](../busqueda_de_perfiles/busqueda_de_personas.md#agrupaciones-de-restos-collapsing).
- Categorías fijas de DVI: [Categorías](../administracion/categorias.md#definicion-de-categorias).
- Motor de parentesco por redes bayesianas: [Fundamentos de genética forense](../genis/genetica_forense.md#comparacion-por-parentesco-redes-bayesianas).
