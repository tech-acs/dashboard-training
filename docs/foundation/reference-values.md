---
outline: deep
---

# Reference Values

**Reference values** are benchmark or target values used to compare your actual data against, providing a frame of reference to better understand the indicators you are viewing. They are commonly referred to as "expected values," "target values," or "population projections."

Reference values are typically sourced from previously published national data, census projections, or international organizations such as UNSC, UNFPA, or the ILO.

To import reference values, you need the data in a CSV file at the **lowest area hierarchy level** (usually EA). The file needs at least two columns:

1. A **path** column (can be generated using the formula provided at the top of the import form) that uniquely identifies each geographic area.
2. One or more columns for the reference values you are importing. It is common to have multiple columns in the same spreadsheet, each named after the indicator they represent.

## Importing Reference Values

The Reference Value Import interface provides a mechanism for bulk-loading external benchmarks into the dashboard via CSV spreadsheets. This process ensures that comparative data is precisely mapped to the correct geographic entities and indicators.

### Data Preparation Requirements

Before uploading, prepare your spreadsheet with these columns:

- **Area Codes:** Columns for all area codes in your hierarchy.
- **Calculated Path Column:** A mandatory `path` column that uniquely identifies each geographic unit. The import form provides an Excel-style formula to help you generate these values by joining codes with a dot separator (e.g., `County_code.Subcounty_code.EA_code`).

### Column Mapping and Configuration

Once a file is selected, map your spreadsheet columns to the application's internal fields:

- **Reference value for indicator:** Select the column containing the numeric benchmark values.
- **Corresponding area path:** Map the column containing the pre-calculated geographic path strings.
- **Area type:** Define the hierarchical level (e.g., EA, Sublocation) these values apply to.
- **Is additive:**
  - **Checked (Additive):** Use for benchmarks that represent totals or absolute numbers (e.g., "Total Population Target"). These values are treated as summable and will be aggregated up the hierarchy to parent areas.
  - **Unchecked (Non-Additive):** Use for rates, ratios, or percentages (e.g., "Birth Rate" or "Literacy Rate"). The system recognizes these as rates and assigns the value to the selected area without attempting to sum it into parent values.

### Multi-Indicator Imports

The interface supports importing multiple benchmarks simultaneously. Click **Add another indicator reference** to map additional columns from the same spreadsheet to different indicators in a single operation.

![Reference Values Import](../images/reference-value-import.png)

## In the Sandbox

In the training sandbox repository, under the `training` directory, you will find a file named `reference_values.csv`. It contains reference values for two indicators:

- **`population`** — Total population per EA
- **`number_of_hh`** — Number of households per EA

### Exercise

1. Navigate to the **Management** menu and select **Reference Values**.
2. Click the **Import** button.
3. Upload the file located at `./training/reference_values.csv`.
4. Map the columns as prompted by the interface.
5. Submit the import form.

Since there are thousands of EAs in the file, the import will take some time to complete. Once finished, you will receive a notification with the results.

You can then navigate to the **Reference Values** management menu to view the imported values.
