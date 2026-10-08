# Módulo de búsqueda de personas (MPI)

El módulo de búsqueda de personas (MPI) de GENis está destinado a la identificación de personas cuyo paradero o identidad se desconoce. Se aplica principalmente en tres situaciones:

- Secuestros de menores.
- Trata de personas.
- Personas desaparecidas.

![](../images/sec22/modulo_mpi_f01.png)

## Cómo funciona

El módulo se basa en el **parentesco genético**. En lugar de comparar el perfil de la persona buscada, que habitualmente no está disponible, se trabaja con el de sus familiares:

1. **Registro del ADN de los familiares.** Se cargan los perfiles de familiares biológicos de la persona buscada, que actúan como referencia.
2. **Cotejo con rastros y restos.** Esos perfiles se comparan con los obtenidos de rastros, restos u otras muestras de personas aún no identificadas.

Cuando el cotejo detecta compatibilidad de parentesco, se genera una coincidencia que debe ser revisada para orientar la identificación.

## Banco Nacional de Datos Genéticos

El registro de ADN de familiares se vincula con el **Banco Nacional de Datos Genéticos (BNDG)**, institución argentina que resguarda las muestras de grupos familiares que buscan a personas desaparecidas o a niños apropiados. Los perfiles de esos registros son los que GENis coteja contra nuevos rastros y restos.

## Profundización

El armado de casos, los pedigríes y la gestión de coincidencias de parentesco se detallan en [Búsqueda de personas](../busqueda_de_perfiles/busqueda_de_personas.md). Los fundamentos del motor de parentesco por redes bayesianas se describen en [Genética forense](../genis/genetica_forense.md).
