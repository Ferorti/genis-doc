This section describes the main functionalities of GENis, organized by operational modules. Each module lists the manual pages where its operation is detailed.


## User management and access control

This module allows administering access to the system and ensuring that operations are performed only by authorized users.

- Request, activation and deactivation of user accounts.
- Login and credential management.
- Second-factor authentication (TOTP).
- Password reset.
- Recording and auditing of system access.

See: [Requesting an account](../administracion/solicitar_una_cuenta.md).


## Role and permission management

Defines the access profiles and the actions allowed within the system, according to the responsibilities assigned to each user.

- Creation, modification and deletion of roles.
- Assignment of permissions associated with each role.
- Access control to the system's functionalities according to the assigned role.

See: [Roles](../administracion/roles.md).


## Institutional configuration and system catalogs

This module allows parameterizing GENis according to the institutional and forensic context in which it is used.

- Laboratory management.
- Management of geneticists and technical actors.
- Management of biological material types.
- Management of categories and subcategories.
- Definition of search rules.
- Management of genetic analysis kits.
- Management of genetic markers, including microvariants and off-ladder allelic values.
- Management of frequency databases.

See: [Laboratories](../administracion/laboratorios.md), [Geneticists](../administracion/genetistas.md), [Types of biological materials](../administracion/tipos_de_materiales_biologicos.md), [Categories](../administracion/categorias.md), [Kits](../administracion/kits.md), [Markers](../administracion/marcadores.md), [Frequency databases](../administracion/bases_de_datos_de_frecuencias.md) and [Mitochondrial](../administracion/mitocondrial.md).


## Genetic profile management

Allows registering, storing and managing human genetic profiles and their associated information.

- Registration of genetic profiles.
- Loading of autosomal analyses.
- Loading of mitochondrial analyses.
- Association of profiles with evidence.
- Evidence tagging.
- Bulk profile upload.
- Multi-level approval workflows.
- Profile rejection.
- Deactivation of genetic profiles.

See: [Profile registration](../busqueda_de_perfiles/alta_de_perfiles.md) and [Profile deactivation](../busqueda_de_perfiles/baja_de_perfiles.md).


## Profile comparison and search

Provides automatic mechanisms for comparing the genetic profiles stored in the system.

- Comparison of genetic profiles.
- Automatic match search.
- Support for comparison in multi-tier schemes (local, regional and national).

See: [Profile comparator](../busqueda_de_perfiles/comparador_de_perfiles.md), [Profile matching](../busqueda_de_perfiles/coincidencia_de_perfiles.md) and [Instance interconnection](../busqueda_de_perfiles/interconexion_de_instancias.md).


## Match and forensic result management

This module allows analyzing, reviewing and managing the results of genetic comparisons.

- Display of detected matches.
- Management of match statuses.
- Association of matches with different forensic scenarios.
- Access to the associated statistical results.
- Notification to geneticists when matches are detected.

See: [Match manager and forensic calculations](../busqueda_de_perfiles/gestor_de_coincidencias_y_calculos_forense.md) and [Notifications](../administracion/notificaciones.md).


## Missing persons search and victim identification (MPI and DVI)

Allows managing [missing persons search (MPI)](../usos_forenses/busqueda_de_personas_mpi.md) and [disaster victim identification (DVI)](../usos_forenses/identificacion_de_victimas_dvi.md) cases, based on kinship comparison.

- Case creation and follow-up.
- Association of reference profiles and, in DVI, post mortem profiles.
- Pedigree construction and consistency check.
- Kinship search, with optional mitochondrial screening in MPI.
- Match management and validation through scenarios.
- Grouping of remains of the same individual (DVI).

These modules use predefined categories that cannot be deleted or modified.

See: [Missing persons search](../busqueda_de_perfiles/busqueda_de_personas.md).


## Export and exchange of information

Facilitates the controlled export of genetic profiles and associated information, according to institutional settings.

- Export of genetic profiles.
- Export of associated information for institutional exchange.

See: [Profile exporter](../busqueda_de_perfiles/exportador_de_perfiles.md) and [Instance interconnection](../busqueda_de_perfiles/interconexion_de_instancias.md).


## Auditing, traceability and information integrity

This module ensures control and traceability of the operations performed within the system.

- Detailed recording of the actions performed by users.
- Separation between operational information and audit data.
- Full traceability of system operations.
- Optional mechanisms for verifying profile integrity through cryptographic signatures and immutable records.

See: [Audit](../administracion/auditoria.md), [Reports](../administracion/reportes.md) and [Annex V](../anexos/anexo_v_marco_de_seguridad_y_proteccion_de_datos_personales.md).
