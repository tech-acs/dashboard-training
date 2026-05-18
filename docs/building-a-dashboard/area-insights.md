---
outline: deep
---

# Area Insights

The **Area Insights** page is a dynamic, powerful tool designed to provide a comprehensive snapshot of field operations and thematic indicators for any geographic area. It translates complex datasets into actionable intelligence through a combination of grading gauges, scorecards, and interactive visualizations.

## Overview

Area Insights gives you a unified view of all indicators, scorecards, and gauges that are configured to display at the area level, filtered by the geographic area you select. This makes it an essential tool for:

- **Field supervisors** monitoring data collection progress across regions
- **Data analysts** comparing indicators across different administrative levels
- **Decision makers** who need a quick, at-a-glance view of key metrics for a specific area

## The Area Filter

At the top of the Area Insights page is the **Area Filter** (also called the filter bar). This is your primary navigation tool for drilling down from a national overview to highly localized views.

### How It Works

The filter uses your configured **area hierarchy** (e.g., Country > Subcounty > Division > Location > Sublocation > EA) and supports two interaction modes that stay synchronized:

1. **Drill-Down (Cascading)** — Select a parent area (e.g., County), and the next dropdown is automatically populated with its child areas (e.g., Subcounties within that County). Continue drilling down to any level.

2. **Search & Jump** — Type any area name into the search box to find it instantly across all levels. Selecting a result jumps directly to that area and populates the cascading dropdowns with the full breadcrumb path.

> **Key Feature:** The two modes are bi-directionally synced. If you use search to jump to a specific EA, switching back to drill-down mode will show the full hierarchy path already selected.

## What You Will See

Once you select an area, the Area Insights page displays:

- **Grading Gauges** — Visual progress indicators that compare actual values against reference or target values, with color-coded thresholds for quick status assessment.
- **Scorecards** — High-level numeric summaries (e.g., total population, total households) displayed as prominent cards at the top of the page.
- **Indicators (Charts)** — All published chart indicators that are configured for area-level display, rendered as interactive Plotly charts.

## Configuring Artefacts for Area Insights

Not all artefacts appear on Area Insights by default. When you create or edit an indicator, gauge, or scorecard, you can specify whether it should display on:

- **Regular pages only** — The artefact appears only on the pages you assign it to.
- **Area Insights only** — The artefact appears only on the Area Insights page.
- **Both** — The artefact appears on assigned pages and on Area Insights.

This is controlled through the artefact's edit form in the Management menu.

## Hierarchical Compatibility

Some indicators may not make sense at every level of the hierarchy. For example, a national-level market share chart would be meaningless at the EA level. Use the **Unsupported Area Levels** setting on each indicator to hide it at levels where it would be irrelevant or cluttered. See [Hierarchical Compatibility](/building-a-dashboard/hierarchical-compatibility) for details.

## Using Area Insights in Practice

1. Navigate to **Area Insights** from the main navigation bar.
2. Use the filter bar to select your area of interest — either by drilling down through the hierarchy or by searching for a specific area name.
3. Review the gauges, scorecards, and charts displayed for that area.
4. Compare metrics across areas by changing your selection in the filter bar — the page updates reactively without requiring a full reload.

![Area Insights](../images/area-insights.png)
