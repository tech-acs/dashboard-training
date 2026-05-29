---
outline: deep
---

# Map Indicators

Map indicators display indicator data on top of a spatial (geographic) map. Once you create, implement, and publish them, they will be available on the map pages you create and assign them to. Users can select their preferred base map during use.

## Creating Map Indicators

There are two ways to create map indicators: a CLI command and a web form.

### Method 1: CLI Command

Run the `php artisan chimera:make-map-indicator` command and follow the prompts. This works best on Linux/macOS/WSL environments.

### Method 2: Web Form

Navigate to the **Manage dashboard** menu, select **Map indicators**, then press the **CREATE NEW** button and fill out the form as required. The included stub is used to create the `MapIndicator` class file in the `app/MapIndicators` directory.

:::caution
The **Map indicator name** must be in **CamelCase** (e.g., `KenyaCensus/TotalPopulation`). It becomes both the PHP class name and the file name, and will create subdirectories if you use forward slashes.
:::

Like regular indicators, map indicators can be organized into different pages. You can assign a map indicator to appear on one or more pages via the edit form.

:::note
Unlike regular indicators, map indicators **do not** offer an "Include sample code" option. The generated stub always starts empty.
:::

## Implementing Map Indicators

You need to implement the `getData()` method so that it returns a `Collection`. At minimum, your collection must include these two keys:

- **`area_code`** — Matched against the geographic shape codes to color the correct region on the map.
- **`value`** — Used for coloring and displayed when you hover over each area.

Additionally, including the following two keys unlocks extra functionality:

- **`display_value`** — Replaces the raw `value` text shown in the map tooltip (useful for formatted strings like "42.3%").
- **`info`** — Rendered in an information box on the bottom-right of the map when the area is clicked.

If your query uses different column names, override the mapping properties on your class:

```php
public string $valueField = 'value';
public string $displayValueField = 'display_value';
public string $areaCodeField = 'area_code';      // Used for shape matching, not data transformation
public string $infoTextField = 'info';
```

### Color Bins and Palettes

:::danger
`$bins` is **mandatory**. If you do not define `$bins` in your class, the constructor will abort with an error. Always provide at least two values (e.g., `[0, 50, 100]`).
:::

You should configure the following properties:

```php
public array $bins = [0, 30, 70, 100];
public const SELECTED_COLOR_CHART = 'rag';
```

The default color palette is **`nephritis`** (a green gradient). Override `SELECTED_COLOR_CHART` to choose a different palette (E.g. `rag`).

In the example above, areas on the map will be colored according to the bins you have provided:

- Values below 30 → Red
- Values between 30 and 70 → Amber
- Values above 70 → Green

You have 8 color palettes to choose from. The first 7 palettes each have 10 colors arranged from lightest (lowest values) to darkest (highest values). If you have fewer bins than colors in your selected palette, the system uses as many as needed starting from the lightest. You cannot have more bins than available colors.

### Available Color Palettes

**alizarin**

![alizarin](../images/color-palettes/alizarin.png)

**wisteria**

![wisteria](../images/color-palettes/wisteria.png)

**peter-river**

![peter-river](../images/color-palettes/peter-river.png)

**nephritis**

![nephritis](../images/color-palettes/nephritis.png)

**sunflower**

![sunflower](../images/color-palettes/sunflower.png)

**pumpkin**

![pumpkin](../images/color-palettes/pumpkin.png)

**silver**

![silver](../images/color-palettes/silver.png)

**rag**

![rag](../images/color-palettes/rag.png)

You can also modify the built-in color palettes by overriding the given constants in your class.

> **Tip:** The intended use of these palettes is for you to decide on appropriate bins. Even if you have target values to compare against, you should do that in your `getData()` method and return the "ranked" values via the `value` column so that your areas are colored accordingly.

## Editing and Publishing Map Indicators

After creating a map indicator, you can edit it via **Manage dashboard** 🡒 **Map indicators** (`/manage/map_indicator`). The edit form includes:

- **Title**, **Description**, and **Contextual Help Text** — Multilingual fields for metadata.
- **Page** — Assign the map indicator to one or more map pages.
- **Rank** — Controls the display order when multiple indicators appear on the same page.
- **Status** — Toggle between **Draft** and **Published** using the switch.

## In the Sandbox

### Total Population

Use these values to create a map indicator that displays the total population of a given area as a percentage of the reference population:

- **Data source:** Kenya Census
- **Name:** `KenyaCensus/TotalPopulation`
- **Title:** Total Population
- **Description:** Total population of households in a given area, shown as a percentage of the reference population.

After creating the map indicator, navigate in your IDE to the `app/MapIndicators/KenyaCensus` directory and open the `TotalPopulation.php` file.

You should see the following code:

```php
<?php

namespace App\MapIndicators\KenyaCensus;

use Illuminate\Support\Collection;
use Uneca\Chimera\MapIndicator\MapIndicatorBaseClass;
use Uneca\Chimera\Services\BreakoutQueryBuilder;

class TotalPopulation extends MapIndicatorBaseClass
{
    // public string $valueField = 'value';
    // public string $displayValueField = 'display_value';
    // public string $areaCodeField = 'area_code';
    // public string $infoTextField = 'info';

    // public array $bins = [0, 35, 65, 100];
    // public const SELECTED_COLOR_CHART = 'rag';

    public function getData(string $filterPath): Collection
    {
        return collect();
    }
}
```

Replace the file contents with the following implementation:

```php
<?php

namespace App\MapIndicators\KenyaCensus;

use Illuminate\Support\Collection;
use Uneca\Chimera\MapIndicator\MapIndicatorBaseClass;
use Uneca\Chimera\Services\BreakoutQueryBuilder;

class TotalPopulation extends MapIndicatorBaseClass
{
    // public string $valueField = 'value';
    // public string $displayValueField = 'display_value';
    // public string $infoTextField = 'info';

    public array $bins = [0, 0.35, 0.65, 1];
    public const SELECTED_COLOR_CHART = 'rag';

    public function getData(string $filterPath): Collection
    {
        return (new BreakoutQueryBuilder($this->mapIndicator->data_source, $filterPath))
            ->select(['SUM(total_household_members) AS value'])
            ->from(['housing_rec'])
            ->groupBy(['area_code'])
            ->lastlyAreaLeftJoinData(referenceValueToInclude: 'population')
            ->get()
            ->map(function ($r) {
                // Convert the population value to a percentage of the reference value
                $r->value = round(($r->value / $r->ref_value) * 100, 2);
                return $r;
            });
    }
}
```

After implementing the map indicator, publish it and assign it to a map page. You can then navigate to that page to see the choropleth map in action.
