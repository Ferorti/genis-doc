# 24. Profile matching

## Profile matching at high stringency

Given two profiles ***P=(id1,p1,p12,…,pn)*** and ***Q=(id2,q1,q2,…,qn)*** and where the

***pi,pj*** are Loci:

Let ***R=loci(P)∩loci(Q)*** and let ***r=mw*** be an element of ***R***.

Abusing subscript notation, we will call ***pr (resp qr)*** the locus of

***P (resp Q)*** corresponding to marker ***r***. Note that here the subscript is

the locus.

We define ***P=ₚQ*** if and only if ∀ ***m∈R:pₘ=qₘ***

## Profile matching at medium or moderate stringency

Given two profiles ***P=(id1,p1,p12,…,pn)*** and ***Q=(id2,q1,q2,…,qn)*** where the ***pi,qi***

are Loci.

Let us assume that the loci of ***P*** contain fewer alleles than those of ***Q***.

Let ***R = loci (P) ∩ loci (Q)*** and let ***r=mw*** be an element of ***R***.

Abusing subscript notation, we will call ***pn (resp qr)*** the locus of

***P (resp Q)*** corresponding to marker ***r***. Note that here the subscript is

the Locus.

We define ***P⊂ₚQ*** if and only if ∀ ***m∈R:pₘ⊂ₘqₘ***

## Profile matching at low stringency

Given two profiles ***P=(id1,p1,p12,…,pn)*** and ***Q=(id2,q1,q2,…,qn)*** where the ***pi,qj***

are Loci.

Let ***R = loci(P) ∩ loci(Q)*** and let ***r=mw*** be an element of ***R***.

Abusing subscript notation, we will call ***pr (resp qr)*** the locus of

***P (resp Q)*** corresponding to marker ***r***. Note that here the subscript is

the Locus.

We define ***P≈ₚQ*** if and only if ∀ ***m∈R:pₘ≈ₘqₘ***

## Matching between two contributor profiles

Given two mixture profiles ***M*** and ***M'***, we say that ***M≈ₘₘM'*** if and only if ∃ ***S,***

***V, V'*** with ***1≤ S≤2 ,1≤ V≤2 and 1≤ V'≤2*** such that

- ***M/(V∪S)=∅ [ [V and S explain M] ]***
- ***M'/(V'∪S)=∅ [ [V' and S explain M'] ]***
- ***S ⊆ M ∩ M' [ [S is in M∩M'] ]***

Note that V and V' may or may not be given.
