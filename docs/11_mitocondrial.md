# Mitocondrial

El ADN mitocondrial (mtDNA) es un marcador genético de especial utilidad en genética forense debido a su **elevado número de copias por célula**, su **transmisión estrictamente materna** y su **mayor resistencia a la degradación** en comparación con el ADN nuclear. Estas características lo convierten en un recurso valioso para el análisis de muestras muy **degradadas**, como huesos antiguos, cabellos sin raíz, restos humanos de larga data o evidencias biológicas con escaso ADN nuclear.

En el ámbito de una base de datos forense, el mtDNA permite ampliar las posibilidades de comparación cuando:

- los perfiles STR autosómicos no pueden obtenerse,
- el material genético disponible es escaso o fragmentado,
- se trata de identificar restos donde la línea materna es relevante (por ejemplo, en contextos de MPI/DVI).

Representación del haplotipo mitocondrial
En genética forense, los perfiles de mtDNA se expresan como una **lista de diferencias respecto a la secuencia de referencia rCRS** (revised Cambridge Reference Sequence). Cada haplotipo se registra mediante:

- la posición dentro de la región control (HVS-I, HVS-II u otras regiones analizadas), y
- la base alternativa observada en la muestra.

Ejemplo de haplotipo (IUPAC):
**16093C 16223T 263G 309.1C 315.1C**

El sistema GENis no realiza alineamientos ni interpreta cromatogramas; por lo tanto, **las diferencias deben ser previamente determinadas por el analista** en su software de secuenciación. Luego, el haplotipo final se carga en el sistema tal como se reporta en el informe pericial.

El sistema analiza hasta 4 rangos con sus mutaciones correspondientes.

Las comparaciones se realizan dentro del rango definido de 16024 a 16569 y de 1 a 576 Y se utiliza el IUPAC (Heteroplasmias de posición).
Los puntos no concluyentes 16193, 309, 455, 463, 573 no son tenido en cuenta en genis debido a que:

- **mutan con muchísima frecuencia**,
- están sujetas a **expansiones o contracciones de repeticiones** (309, 455, 463, 573),
-  suelen presentar **heteroplasmia de longitud**,
-  no son estables entre tejidos de una misma persona,
no aportan valor discriminante real.

## Formato de carga

Los formatos admitidos para la carga de las mutaciones son las siguientes:

- **Inserciones:** se agrega una letra

![](images/sec11/p078_f01.png)

- **Sustitución o Cambio nucleotídico:** consiste en el cambio de una letra por otra

![](images/sec11/p078_f02.png)

- **Deleciones:** ausencia de una letra

![](images/sec11/p078_f03.png)

## Match

El sistema GENis compara haplotipos mitocondriales utilizando un modelo basado en diferencias entre posiciones (mismatches). El match mitocondrial se realiza siempre en **modo de alta exigencia**, es decir, considerando todas las posiciones informativas del haplotipo, excepto aquellas correspondientes a regiones altamente variables (309, 455, 463, 573 y 16193), que no se usan para excluir perfiles.

Cada haplotipo puede contener hasta **cuatro rangos** o segmentos analizados. Durante la comparación, GENis suma todas las diferencias entre los dos perfiles en todos los rangos. El resultado final es el **total de mismatches**, que se compara con el **umbral máximo permitido** configurado en la categoría del perfil.

Dos perfiles se consideran coincidentes cuando:

mismatches totales≤umbral permitido por categoría

Si un individuo posee más de un análisis mitocondrial cargado, GENis realiza comparaciones cruzadas entre todos ellos; alcanza con que **un solo par de haplotipos** cumpla la condición de coincidencia para declarar un match global entre los perfiles. En el Gestor de Matches, el sistema agrupa las coincidencias por perfil, mostrando qué haplotipos fueron responsables del match.

En el caso de que se haya dado un match, en el gestor de matches, las tarjetas agrupan las coincidencias por perfil.

![](images/sec11/p080_f01.png)

Haciendo click sobre el ícono del ojo, se puede ver el detalle de las coincidencias por perfil.

![](images/sec11/p080_f02.png)
