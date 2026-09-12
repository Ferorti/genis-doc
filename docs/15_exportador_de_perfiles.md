# Exportador de perfiles

El exportador de perfiles es una funcionalidad que permite exportar perfiles en el formato de importación de GENis.

Para utilizar el exportador de perfiles ir al menú Perfiles/Exportador de Perfiles:

![](images/sec15/p124_f01.png)

El exportador de perfiles es una funcionalidad que puede filtrar por categoría, laboratorio (se puede seleccionar entre los laboratorios dados de alta en la aplicación), perfil (mediante su código de laboratorio) y fecha de creación del perfil (especificada como fecha desde y fecha hasta)

Los filtros no son obligatorios, en caso de que no se seleccione ningún filtro, se exportará toda la base.

Una vez cargados los filtros deseados, se debe presionar el botón Exportar, lo cual producirá la exportación de los perfiles.

Se exportarán todos los tipos de análisis. Se generará un archivo `.zip` que contendrá un archivo `.csv` por cada tipo de análisis, y estarán paginados cada 1000 perfiles.

En caso de que un perfil tenga más de un análisis de un mismo tipo, los mismos se exportarán en distintos archivos.

Permite exportar perfiles en el formato de importación de GENis.
