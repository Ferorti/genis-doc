# Criminal investigation

In criminal investigation, GENis makes it possible to compare the genetic profiles loaded by different institutions in order to answer two investigative questions: whether two events were committed by the same person, and whether that person is already known.

![](../images/sec22/modulo_forense_f01.png)

## Profile types

It works with **references**, samples from identified subjects, and **evidence**, biological material found at a scene whose contributor is N.N. (unknown). See [Profiles of known and unknown origin](index.md#profiles-of-known-and-unknown-origin).

## How it works

GENis compares each new profile against the existing ones, even if they were provided by different institutions or countries. Depending on which type of profile matches which, the result has a different investigative meaning.

### Evidence against evidence

When the evidence from the scene of one event matches the evidence from the scene of another event, it is the **same unknown individual**, who is also a **repeat offender**. The operational consequence is the **unification of investigations**: two cases that were running separately, even in different countries, can be handled as a single line of investigation.

!!! example "Example"
    A profile found at a scene in Brazil matches the profile of evidence from a scene in Colombia. Both events are linked to the same perpetrator, still unidentified.

### Evidence against reference

When the evidence from a scene matches a reference profile, the contributor is no longer unknown: it is a **known individual** and also a **repeat offender**. The operational consequence is that the competent authority can issue an **arrest warrant**.

!!! example "Example"
    A profile found at a scene in Costa Rica matches the reference of a subject loaded in Panama. The match identifies the perpetrator of the event.

### Summary

| Match | Conclusion | Investigative result |
|---|---|---|
| Evidence with evidence | Same unknown individual, repeat offender | Unification of investigations |
| Evidence with reference | Known individual, repeat offender | Arrest warrant |

!!! note "Scope of a match"
    A match in GENis is an indication that guides the investigation and must be confirmed and assessed according to each institution's protocols. The criteria used to compare profiles and the associated statistical assessment are explained in [Forensic genetics foundations](../genis/genetica_forense.md#direct-comparison-str-matching-engine) and in [Profile matching](../busqueda_de_perfiles/coincidencia_de_perfiles.md).

## Cross references

- Profile registration: [Profile registration](../busqueda_de_perfiles/alta_de_perfiles.md)
- Match review: [Match manager and forensic calculations](../busqueda_de_perfiles/gestor_de_coincidencias_y_calculos_forense.md)
- Exchange between institutions: [Instance interconnection](../busqueda_de_perfiles/interconexion_de_instancias.md)
