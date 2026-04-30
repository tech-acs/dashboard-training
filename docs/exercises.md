---
outline: deep
---

# Exercises

Now that you have arrived at the end of the course, you should be able to implement various dashboard artifacts on your own. 

The following are selected artifacts that can be implemented based on the Kenya Census data. You can explore the dictionary included in the `training` directory to figure out which tables and columns you need to use to source the data for your artifact.

All of these artifacts are already implemented in the [demo dashboard](https://datalab.uneca.org/kenya-demo) using the same dataset and you are welcome to view them there to see what the end results of these exerciese should look like.

## Scorecards

### Total population
> Difficulty: Easy :grinning:

This scorecard shall display the total population of a given area. It should be a whole number that is properly formatted according to the current locale.

::: details Hint
To source data for this scorecard, please have a look at the `housing_rec` record/table and within it the `total_household_members` column.
:::

### Average interview time
> Difficulty: Intermediate :neutral_face:

This scorecard shall display the average interview duration for a given area in minutes. It should be a number rounded to one decimal place.

::: details Hint
Have a look at the `hh_end_interview_time` and `hh_start_interview_time` items in the `housing_rec` record.
:::

### Birth rate
> Difficulty: Hard :hot_face:

This scorecard shall display the total population of a given area. It should be a whole number that is properly formatted according to the current locale.

::: details Hint
Consider how you can get number of babies (0 year olds) from the `pop_rec` record and then make sure you know how demographic birth rate is calculated. The `housing_rec` record will have to be involved too.
:::

## Indicators

### Percentage of population enumerated against target
> Difficulty: Easy :grinning:

This indicator will display the percentage of the population that has so far been enumerated when compared to what is expected to be.

::: details Hint

:::

### Male to female ratio
> Difficulty: Intermediate :neutral_face:

This indicator will display the male to female ratio (number of males per 100 females) in barchart form where the x-axis has the areas.

::: details Hint
The `housing_rec` record has two items called `total_number_of_males` and `total_number_of_females`. Use these two and apply the proper way of calculating demographic male to female ratio.
:::

### Population pyramid
> Difficulty: Hard :hot_face:

This indicator displays a population pyramid which shows the distribution of five year age groups of the population. This will be fairly complex to implement and will require some "hacks".

::: details Hint
The data will be sourced from the `housing_rec` and `pop_rec` records. Item p12 (age) and item p11 (sex) will be crucial. You will have to form the age groups and will have to negate the male count so that it goes on the left side of the y-axis.
:::


## Map Indicators

### MI 1

## Gauges

### G 1

## Reports

### R 1