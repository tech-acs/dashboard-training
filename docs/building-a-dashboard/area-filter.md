---
outline: deep
---

# Area Filter
The Geographic Area Filter is a hierarchical navigation tool that allows users to narrow down dashboard data from a broad national perspective to highly localized granularities. This system uses a parent-child relationship between levels, ensuring that data remains contextually accurate as the user zooms into specific regions.

To accommodate different user workflows, the system operates in two synchronized modes: Hierarchical Drill-Down and Global Search.

## 1. Hierarchical Drill-Down (Cascading)
This mode is ideal for users exploring data through a structured administrative lens.
* **Top-Down Logic:** Each selection filters the subsequent level. Choosing a primary region automatically populates the next dropdown with only the relevant sub-areas.
* **Data Integrity:** This cascading effect prevents "mismatched" geographic selections, ensuring users only view valid administrative paths.
* **Flexible Depth:** Users can choose to apply filters at any tier—viewing data for an entire territory or narrowing the scope down to the most granular local level.

## 2. Search & Jump
For users who know exactly which area they need, the **Search Mode** bypasses the hierarchy for immediate results.
* **Level-Agnostic Discovery:** Users can search for any area name across the entire database, regardless of which administrative level it belongs to.
* **Instant Jump:** Selecting a search result instantly focuses the dashboard on that specific area, skipping the manual step-by-step drill-down process.


A key appeal of this feature is the **Bi-Directional Sync** between modes. Switching between Search and Drill-Down never resets the user's progress. If a user searches for a specific local area and selects it, switching back to the drill-down view will show the entire "breadcrumb" path pre-selected in the dropdowns.

> **Note on Administrative Flexibility:** While different regions use varying terminology (e.g., Provinces, Districts, or Wards), the tool is built on a dynamic schema. It automatically adapts its labels and hierarchy depth to match the specific geographic structure of the country being viewed.
