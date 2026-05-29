---
outline: deep
---

# Hierarchical Compatibility (Unsupported Area Levels)

This feature allows dashboard creators to control exactly where a visualization appears within the geographic hierarchy. It prevents charts, scorecards, and gauges from displaying data at scales where they would be irrelevant, cluttered, or statistically insignificant.

## How It Works

In any hierarchical dataset (e.g., **Country > State > District > City**), data behaves differently at each level. The **Unsupported area levels** setting acts as a conditional filter for an artefact's visibility based on the user's current "zoom" or drill-down level.

## Why Use It?

- **Data Relevancy:** Some metrics only make sense at a high level. For example, a "National Market Share" pie chart is useful at the Country level but becomes meaningless if you have already filtered down to a single District.
- **Preventing Visual Noise:** A scatter plot showing 10,000 data points might look great at a Country level but appear empty or "broken" at a District level if that specific district only has two data points.
- **Query Prevention:** When a level is marked as unsupported, the component skips its data query entirely and displays the inapplicable message instead.

## The User Experience

When a user drills down to a level that is unsupported for a given artefact:

1. The dashboard detects the change in **Level of Detail**.
2. The restricted artefact displays a message such as:
   - *"The current area level is inapplicable to this indicator"*
   - *"The current area level is inapplicable to this scorecard"*
   - *"The current area level is inapplicable to this gauge"*

![Hierarchical compatibility](../images/hierarchical-compatibility.png)

## Configuring Unsupported Area Levels

When editing an **indicator**, **scorecard**, or **gauge**, you will find the **Unsupported area levels** field. Select the geographic levels at which the artefact should **not** be displayed. For example, you might exclude the EA level for a chart that requires a minimum sample size to be statistically meaningful.

:::info 
For **indicators only**, the EA (Enumeration Area) level is **automatically treated as unsupported**, even if you do not select it. This is hardcoded in the indicator model. If you need an indicator to display at the EA level, this is not currently possible.
This automatic restriction does **not** apply to scorecards or gauges.
:::

:::tip
If no unsupported levels are selected for a scorecard or gauge, it will be visible at **all** hierarchy levels.
:::
