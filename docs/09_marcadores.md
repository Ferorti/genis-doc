# Marcadores

Para acceder a los marcadores ir al menú **Configuración/Marcadores**:

![](images/sec09/p061_f01.png)

Se tienen dos solapas: **Agregar Marcador**, para agregar marcadores nuevos y la solapa **Marcadores** con toda la lista de los marcadores existentes.

## Agregar marcadores

Para agregar un nuevo marcador ubicarse en la primera solapa **Agregar Marcador**.

Los campos con asterisco (*) son mandatorios

![](images/sec09/p061_f02.png)

![](images/sec09/p062_f01.png)

- **Cromosoma:** Cromosoma en el que se encuentra el marcador (1-22, X, Y, XY, MT). Según el valor que ingrese en el **Cromosoma** se tiene los valores de alelo mínimo y máximo. Si el cromosoma tiene los valores 1 a 22, X o Y, aparecerá os valores de alelos mínimos y máximo. Si el marcador tiene cromosoma XY o MT, no se ingresa ninguna validación.

Por default el **valor de alelo mínimo** es 0 y el **valor de alelo máximo** es 99.

No se permitirá ingresar valores nulos o vacíos. En validación por rangos se valida que el valor máximo sea mayor o igual al valor mínimo. Se validará que el valor sea un valor entero entre 0 y 99.

En el caso del **Tipo de análisis Autosomal**, se tiene la posibilidad de ligar los marcadores:

- **Mínima cantidad de alelos:** mínima cantidad de alelos a ingresar en un análisis de referencia.

- **Máxima cantidad de alelos:** Máxima cantidad de alelos a ingresar en un análisis de referencia.

- **Requerido:** debe chequearse el casillero si se quiere que el marcador sea requerido. Caso contrario el marcador quedará como aceptado. Tanto los marcadores de tipo **Requerido** como los del tipo **Aceptado** participarán en el proceso de Matching. La cantidad mínima de marcadores deberá validarse contra la totalidad de marcadores **Requeridos** solamente.

## Modificar/eliminar marcadores

La solapa **Marcadores**, me muestra todos los marcadores existentes ordenados alfabéticamente:

![](images/sec09/p063_f01.png)

Se tiene la posibilidad de modificar un marcador existente haciendo click en el ícono

![](images/sec09/p063_f02.png)

Solo se podrán modificar los campos: alias, casillero Requerido, y los valores mínimos y máximos de alelos:

![](images/sec09/p063_f03.png)

Para eliminar un marcador, presionar el botón de eliminar

## Valores alélicos fuera de escala

Si el valor alélico ingresado para el marcador se encuentra fuera de las escaleras alélicas definidas, el análisis será aceptado y los alelos fuera de rango quedarán marcados de un color diferente:

![](images/sec09/p064_f01.png)

## Agregar marcadores sueltos

Se pueden agregar marcadores sueltos a un perfil existente. Tener en cuenta que para poder agregar marcadores sueltos, el rol debe tener la configurada la opción (ver [Configuración de roles](03_roles.md#configuracion-de-roles)).

Para agregar un marcador suelto ir al perfil donde se quiere agregar el marcador y seleccionar **Agregar Análisis**. En el menú debajo a la izquierda **Agregar un marcador**, seleccionar el marcador que se desea agregar:

![](images/sec09/p065_f01.png)

![](images/sec09/p065_f02.png)

## Microvariantes

![](images/sec09/p066_f01.png)

Para el caso de los marcadores autosomales y de cromosoma Y, en el caso de que un alelo se encuentre registrado con microvariantes de la forma “.x”, por ejemplo 12.x, deberá hacer match contra cualquier microvariante de 12, es decir, valores que se encuentren entre 12 y 13 no inclusive. La “x” funciona como un valor comodín.

Si se ingresan dos alelos con la forma .X, por ejemplo 10.X y 10.X son considerados como dos alelos distintos, no como homocigota.

En el caso de que un alelo se encuentre registrado con valores fuera de ladder, se utilizará para la comparación el valor límite de la escala alélica del marcador. Por ejemplo, si el alelo fue ingresado como “10” pero la escala alélica definida para el marcador fue <11, 11-20,20>, el alelo ingresado se comparará como “<11” y hará match solo con otros valores alélicos de la forma “<11”.

En el resultado del match, se deberá mostrar tanto el valor del alelo ingresado originalmente como el utilizado para la comparación. Siguiendo el ejemplo anterior, debiera mostrar para ese marcador el valor “10/<11” (siendo “10” el valor originalmente ingresado y “<11” el valor utilizado para la comparación).
