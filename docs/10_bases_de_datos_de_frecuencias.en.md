# Frequency databases

GENis must have an Allelic Frequency Database (Population Database) because this information is **essential and indispensable for the statistical assessment of matches** between genetic profiles.

This population database is used for:

1. **Estimating rarity and random match probability:** It is used to estimate **Random Match Probabilities (RMP)** and, crucially, to calculate the **Likelihood Ratio (LR)**. The goal is to determine the frequency with which a given DNA profile is expected to occur in a population. Having high-quality information in this database is important for making a **reliable frequency estimate** for a random match.
2. **Default LR calculation in GENis:** The system performs automatic default LR calculations so that the analyst can "quickly assess the value that a match finding may have."
3. **Scenario analysis:** The allelic frequency database is a parameter that can be modified and selected when **generating calculation scenarios**, together with the **co-ancestry coefficient (Theta)**.
4. **Minimum frequency calculations:** GENis allows Frequency Databases to be configured to calculate minimum frequencies (if these are not included) using models such as **NRC II**, which requires entering the value **N** (number of individuals analyzed in the population of interest).
5. **Profiles and haplotypes:** The database contains collections of DNA profiles from anonymous individuals and is important for estimating the expected frequency of mitochondrial DNA (mtDNA) haplotypes observed in forensic cases.

To register frequency databases, go to the Settings/Statistical Parameters/Allelic Frequencies menu.

![](images/sec10/p069_f01.png)

You must select the comma-delimited text file (CSV). The format of these files must contain the word "**alelo**" in the first column of the header. Then, in the first row, the marker names, and in the first column, the allele values.

If the file contains minimum frequencies, they must be included in the last row of the file, with the word "**fmin**" as the allele value.

An example of this type of file is shown below:

![](images/sec10/p070_f01.png)

To enter a new frequency database, select the file, the name to be given to the database, and the theta value.

The Theta value corresponds to the population's inbreeding coefficient. Only values greater than or equal to zero are accepted.

![](images/sec10/p070_f02.png)

Click **Save**.

![](images/sec10/p071_f01.png)

If the minimum frequency is not provided, the following screen will be presented so the user can select the calculation mode:

![](images/sec10/p071_f02.png)

**1) Value:** the user can enter a minimum frequency value for each of the genetic markers.

![](images/sec10/p072_f01.png)

![](images/sec10/p072_f02.png)

Clicking the button to the right of the entered value ![](images/sec10/p072_f03.png) will autofill the rest of the fields with the same value.

The values entered must contain periods; commas must not be entered.

**2) NRC II (National Research Council II):** This method, based on the recommendations of the National Research Council, requires the user to enter the **number of individuals (N)** analyzed on which the frequency table was based. This approach is used to ensure that an allele has been sampled sufficiently (historically, at least five times) to be reliably used in statistical calculations

![](images/sec10/p072_f04.png)

**3) Weir:** A Beta-binomial Bayesian estimator method; this method incorporates population heterogeneity and uses an alpha parameter (a parameter representing variation between subpopulations, typical values between 1 and 2 or somewhat higher depending on population structure) that models population substructures.

![](images/sec10/p073_f01.png)

**4) Budowle, Monson, Chakraborty:** Theta-corrected method + constant C. This is the most conservative and mathematically most complete method. Where N is the sample size, alpha is the Bayesian parameter, and C is the constant used to compensate for the total absence of the allele in the sample (it can take values of 5, 10, etc., depending on the level of conservatism).

![](images/sec10/p073_f02.png)

There is always a Frequency Database set as Default:

![](images/sec10/p074_f01.png)

| Method | fmin when the allele does NOT appear | Dependencies | Conservatism |
| --- | --- | --- | --- |
| Manual | fmin = fixed value | none | Depends on the user |
| NRC II | 5 / (2N) | N | Medium-high |
| Weir | α / (N + α) | N, α | Medium (depends on α) |
| Budowle–Monson–Chakraborty | (C + α) / (2N + α + C) | N, α, C | High (the most conservative) |
