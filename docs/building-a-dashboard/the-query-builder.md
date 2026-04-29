---
outline: deep
---

# The Query Builder

In the Understanding CSPro Data section, we covered the basics of how data is organized in the "breakout" database. As the joining (linking) of the various tables is done in a constant and predictable manner, we have built that into what we call the **BreakoutQueryBuilder**

The BreakoutQueryBuilder class is a sophisticated **Data Access Layer** designed specifically to bridge the gap between the breakout database and a modern dashboard application.

It acts as a fluent "Wrapper" that automates the tedious parts of joining CSPro’s hierarchical tables while integrating geographic metadata.

## Core Functionality
The class automates the construction of SQL queries that follow the CSPro Breakout schema logic. Specifically:
1.  **Automatic "Boilerplate" Joins:** It automatically joins the `level-1` table with the `cases` table.
2.  **CSPro Metadata Filtering:** It handles the filtering of "deleted" cases and "partial saves" by default, ensuring your analytics only show finalized, valid data.
3.  **Geographic Enrichment:** It performs "post-query" joining, where it merges the raw SQL result with a geographic `Areas` to ensure that areas with zero data still appear in the final report and that proper area names are displayed instead of their cryptic codes.

## Key Features and Advantages

### 1. Fluent Interface (Method Chaining)
As can be seen in the example below, it provides a "human-readable" way to build queries. You don't have to manually write the complex `INNER JOIN` strings every time you want to access a record thereby reducing syntax errors and making the code much easier to maintain.

### 2. Intelligence through `QueryFragmentFactory`
In the constructor, it uses a factory to determine which columns and tables are required based on a `filterPath`.
This allows the builder to dynamically know your geographic hierarchy (e.g., if the user is looking at a specific Province, the builder automatically adds the necessary `WHERE` clauses for that path).

### 3. Handling the "Empty Area" Problem
In standard SQL, a `GROUP BY` won't show an area if there are 0 records for it. This class solves this via:
* **`lastlyAreaLeftJoinData`:** After getting the data from SQL, it compares the result to an `Area`. If a district is missing from the data, it injects a "skeleton" row with zeroes.
* **`lastlyAreaCrossJoinData`:** Useful for matrices (e.g., Age Group vs. Region). It ensures every combination exists in the final collection, even if the count is zero.

### 4. Safety and Cleanliness
* **Soft-Delete Awareness:** Automatically adds `cases.deleted = 0`.
* **Partial Save Awareness:** Automatically adds `cases.partial_save_mode IS NULL`.
* **X-Ray Debugging:** Includes a logging mechanism (`xRay`) to trace the raw SQL and the transformation process, which is invaluable for debugging complex census indicators.

### 5. Logic Separation
It separates the **Database Querying** from the **Data Enrichment**.
* **Advantage:** The SQL engine does the heavy lifting (aggregating millions of rows), and PHP handles the final "beautification" (mapping area names and calculating averages).


## Example Usage

```php
(new BreakoutQueryBuilder($dataSource, $filterPath))
    ->select(['SUM(total_household_members) AS population', 'COUNT(*) AS households'])
    ->from(['housing_rec']) // Automatically joins housing_rec -> level-1 -> cases
    ->groupBy(['area_code'])
    ->lastlyAreaLeftJoinData() // Ensures districts with 0 houses still show up in the list
    ->get()
```

### Summary of Benefits
| Feature | Benefit |
| :--- | :--- |
| **Encapsulation** | You don't need to know the internal structure of CSPro `level-1-id` linking. |
| **Consistency** | Every indicator in your app will filter deleted/partial cases the same way. |
| **Completeness** | Reports will show all geographic areas, not just those with data. |
| **Developer Velocity** | Writing a new indicator takes minutes instead of hours of SQL debugging. |

This class is essentially a "Mini-ORM" (Object-Relational Mapper) specifically tuned for the unique quirks of census data management.
