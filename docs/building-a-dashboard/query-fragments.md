---
outline: deep
---

# Query Fragment

The `QueryFragments` class serves as the **Geographic Routing Engine** for your data source. While the `BreakoutQueryBuilder` provides the structural "skeleton" of the SQL query, this class provides the "spatial intelligence" required to drill down into specific administrative levels.

## Core Functionality
The class translates a hierarchical `filterPath` (when using the Area Filter tool) into specific SQL `SELECT` and `WHERE` clauses. It ensures that as a user navigates deeper into the geographic tree, the query automatically shifts its focus to the next logical administrative level.

## Key Features and Advantages

### 1. Dynamic Drill-Down Logic
The class uses a "top-down" conditional structure. It detects the lowest level currently selected in the filter and automatically sets the **next level down** as the `area_code`.
E.g., if you are looking at a **County**, the class sets the `area_code` to be **Subcounty**. This enables "drill-down" reporting where clicking on a region automatically fetches its children without the developer writing separate queries for every level.

### 2. Data Normalization via `LPAD`
CSPro data often stores geographic codes as integers, which can lose leading zeros (e.g., `1` instead of `01`).
It uses `LPAD(column, length, '0')` to ensure codes are treated as standardized strings. This prevents join failures when comparing database integers against standardized geographic codes from your `Areas`.

### 3. Context-Aware Filtering
The class maintains the "parental context" in the `WHERE` clause.
* **Example:** If filtering by a specific **district**, the generated query doesn't just filter by `district_code`; it includes the IDs for the `County`, `Subcounty`, and `Division` as well. This ensures data integrity, especially in cases where code IDs might repeat 

## How it Plugs into the Query Builder
This class acts as a "Plugin" for the `BreakoutQueryBuilder`. When the builder is initialized:
1.  It calls `getSqlFragments($filterPath)`.
2.  `XQueryFragments` returns an array containing the `area_code` definition and the matching geographic conditions. (where X is the name of your data source)
3.  The Builder merges these into its `$columns` and `$conditions` arrays, which will later be turned into the WHERE and SELECT clauses of the query.

## Logic Walkthrough
| If the Filter Path is... | The `selectColumns` becomes... | The `whereConditions` filters by... |
| :--- | :--- | :--- |
| **Empty** (National Level) | `county` (The top-level units) | Nothing (returns all counties) |
| **County "01"** | `subcounty` | `county = '01'` |
| **Sublocation "10"** | `ea` (Enumeration Area) | `county`, `subcounty`, `division`, `location`, `sublocation` |

## Advantages for the Developer
* **Single Source of Truth:** The mapping between database columns (like `division`) and their administrative meaning is defined in one place.
* **Abstraction of Complexity:** The developer simply passes a `$filterPath` string; they don't need to manually calculate which levels are parents or children.
* **Scalability:** If the administrative structure changes (e.g., adding a "Ward" level), you only need to update this fragment class rather than every individual indicator in the dashboard.

In short, this class is the **bridge** that tells the Query Builder exactly "where" in the country the data should be pulled from based on the user's current view.

## In the sandbox

When creating your data source, a `QueryFragments` class will have been automatically created for you. It is located in the `app/Services/` directory and will be named `KenyaCensusQueryFragments.php`.

As per the schema of the Kenya Census database, here is what your `QueryFragments` class should look like:

```php
<?php

namespace App\Services\QueryFragments;

use Uneca\Chimera\Services\AreaTree;

class KenyaCensusQueryFragments
{
    public function getSqlFragments(string $filterPath) : array
    {
        public function getSqlFragments(string $filterPath) : array
    {
        $filter = AreaTree::pathAsFilter($filterPath);
        $fromTables = [];

        if (!blank($filter['Sublocation'] ?? null)) {
            $selectColumns = ["LPAD(ea, 3, '0') AS area_code"];
            $whereConditions = [
                "LPAD(county, 2, '0') = '{$filter['County']}'",
                "LPAD(subcounty, 2, '0') = '{$filter['Subcounty']}'",
                "LPAD(division, 2, '0') = '{$filter['Division']}'",
                "LPAD(location, 2, '0') = '{$filter['Location']}'",
                "LPAD(sublocation, 2, '0') = '{$filter['Sublocation']}'"
            ];

        }  elseif (!blank($filter['Location'] ?? null)) {
            $selectColumns = ["LPAD(sublocation, 2, '0') AS area_code"];
            $whereConditions = ["LPAD(county, 2, '0') = '{$filter['County']}'", "LPAD(subcounty, 2, '0') = '{$filter['Subcounty']}'", "LPAD(division, 2, '0') = '{$filter['Division']}'", "LPAD(location, 2, '0') = '{$filter['Location']}'"];

        }  elseif (!blank($filter['Division'] ?? null)) {
            $selectColumns = ["LPAD(location,2,'0') AS area_code"];
            $whereConditions = ["LPAD(county, 2, '0') = '{$filter['County']}'", "LPAD(subcounty, 2, '0') = '{$filter['Subcounty']}'", "LPAD(division, 2, '0') = '{$filter['Division']}'"];

        }  elseif (!blank($filter['Subcounty'] ?? null)) {
            $selectColumns = ["LPAD(division, 2, '0') AS area_code"];
            $whereConditions = ["LPAD(county, 2, '0') = '{$filter['County']}'", "LPAD(subcounty, 2, '0') = '{$filter['Subcounty']}'"];

        }  elseif (!blank($filter['County'] ?? null)) {
            $selectColumns = ["LPAD(subcounty, 2, '0') AS area_code"];
            $whereConditions = ["LPAD(county, 2, '0') = '{$filter['County']}'"];

        }else {
            $selectColumns = ["LPAD(county, 2, '0') AS area_code"];
            $whereConditions = [];
        }

        return [$selectColumns, $whereConditions, $fromTables];
    }
    }
}
```
