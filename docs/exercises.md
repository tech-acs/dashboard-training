---
outline: deep
---

# Exercises

Now that you have completed the course, you should be able to implement various dashboard artefacts on your own.

The following are selected artefacts that can be implemented using the Kenya Census data. You can explore the data dictionary included in the `training` directory to figure out which tables and columns you need to source data for each artefact.

All of these artefacts are already implemented in the [demo dashboard](https://datalab.uneca.org/kenya-demo) using the same dataset. You are welcome to view them there to see what the end results of these exercises should look like.

## Scorecards

### Total Population

**Difficulty:** Easy :grinning:

This scorecard should display the total population of a given area. It should be a whole number, properly formatted according to the current locale.

::: details Hint
To source data for this scorecard, look at the `housing_rec` record/table and the `total_household_members` column.
:::

### Average Interview Time

**Difficulty:** Intermediate :neutral_face:

This scorecard should display the average interview duration for a given area in minutes. It should be a number rounded to one decimal place.

::: details Hint
Look at the `hh_end_interview_time` and `hh_start_interview_time` items in the `housing_rec` record.
:::

### Birth Rate

**Difficulty:** Hard :hot_face:

This scorecard should display the crude birth rate (number of live births per 1,000 people) for a given area.

::: details Hint
Consider how you can get the number of babies (0 year olds) from the `pop_rec` record. Then calculate the demographic birth rate. The `housing_rec` record will also be involved.
:::

## Indicators

### Percentage of Population Enumerated Against Target

**Difficulty:** Easy :grinning:

This indicator should display the percentage of the population that has been enumerated so far, compared to the expected target.

::: details Hint
Use the `BreakoutQueryBuilder` with `lastlyAreaLeftJoinData(referenceValueToInclude: 'population')` to include reference values, then calculate the percentage of actual population against the reference value.
:::

### Male to Female Ratio

**Difficulty:** Intermediate :neutral_face:

This indicator should display the male to female ratio (number of males per 100 females) in bar chart form, where the x-axis shows the areas.

::: details Hint
The `housing_rec` record has two items called `total_number_of_males` and `total_number_of_females`. Use these two and calculate the demographic male-to-female ratio properly.
:::

### Population Pyramid

**Difficulty:** Hard :hot_face:

This indicator displays a population pyramid showing the distribution of five-year age groups of the population. This is fairly complex to implement and will require some creative approaches.

::: details Hint
Data will be sourced from the `housing_rec` and `pop_rec` records. Item `p12` (age) and item `p11` (sex) are crucial. You will need to form age groups and negate the male count so that it appears on the left side of the y-axis.
:::

## Map Indicators

### Total Households

This map indicator should display the total number of households in a given area on a map. Since the included reference values contain the number of households per area, you should set a reasonable RAG (Red-Amber-Green) threshold for the indicator based on those reference values.

::: details Hint
To source data for this map indicator, look at the `housing_rec` record/table and think about how you can count the number of households. Use `lastlyAreaLeftJoinData(referenceValueToInclude: 'number_of_hh')` to include reference values for comparison.
:::

## Reports

### Enumerator Performance

This report should display the performance of all enumerators, in terms of the number of interviews completed per EA. The Excel file should include columns for the complete area hierarchy, the enumerator's ID, their expected target, and their actual performance percentage.

::: details Hint
All the data you need for this report can be found in the `level-1` record/table.
:::
