---
outline: deep
---

# Gauges

Gauges provide a clear visualization of a single metric relative to a predefined goal or maximum value. Unlike standard bar charts, gauges focus on proportionality and achievement. In addition to the numeric representation, color scales are used to communicate status at a glance without requiring much cognitive effort.

![Gauge](../images/gauges.png)

## Creating Gauges

There are two ways to create gauges: a CLI command and a web form.

### Method 1: CLI Command

Run the `php artisan chimera:make-gauge` command and follow the prompts. This works best on Linux/macOS/WSL environments.

### Method 2: Web Form

Navigate to the **Manage dashboard** menu, select **Gauges**, then press the **CREATE NEW** button and fill out the form as required.

:::caution
The **Gauge name** must be in **CamelCase** (e.g., `KenyaCensus/Progress`). It becomes both the PHP class name and the file name, and will create subdirectories if you use forward slashes.
:::

Gauges display three things: a title, a subtitle, and a value (with a unit or reference value). Both **Title** and **Subtitle** are required fields when creating a gauge.

## Implementing Gauges

You will need to write code in your generated gauge file so that it queries and returns the values you intend.

You have flexibility in how you implement your gauge, as long as the `getData()` method returns a Laravel `Collection` containing an object with a key called `value`, which is the value to display.

The base class already provides sensible defaults for the display properties. You only need to override them if you want different behavior:

- **`$this->outOf`** — The mathematical denominator. It defines the "perfect score" or the target/maximum value for the gauge. **Default: `100`**

- **`$this->unit`** — The display suffix shown in the center of the gauge. **Default: `'%'`**

- **`$this->colorThresholds`** — The semantic styling engine. Maps value thresholds to Tailwind CSS color classes to provide immediate "good/bad" status feedback. **Default: `[70 => 'text-red-500', 90 => 'text-amber-500', 101 => 'text-green-500']`**

The color assignment works by finding the **first threshold where your value is less than or equal to the threshold**. For example, with thresholds `[50 => 'red', 70 => 'amber', 101 => 'green']`:
- A value of `42` → matches `≤ 50` → **red**
- A value of `65` → matches `≤ 70` → **amber**  
- A value of `85` → matches `≤ 101` → **green**
- A value greater than all thresholds → **gray**

## Editing and Publishing Gauges

After creating a gauge, you can edit it via **Manage dashboard** 🡒 **Gauges** (`/manage/gauge`). The edit form includes:

- **Title** and **Sub-title** — Multilingual fields.
- **Rank** — Controls display order when multiple gauges appear together.
- **Unsupported area levels** — Hide the gauge at geographic levels where it would be irrelevant.
- **Status** — Toggle between **Draft** and **Published** using the switch.

:::note
Gauges only render on the **Area Insights** page. They do not appear on regular indicator pages or the home page.
:::

## In the Sandbox

### Progress

Use these values to create a gauge that displays the progress of household collection against a reference target:

- **Data source:** Kenya Census
- **Gauge name:** `KenyaCensus/Progress`
- **Title:** Progress
- **Subtitle:** Household Collection

After creating the gauge, navigate in your IDE to the `app/Livewire/Gauge/KenyaCensus` directory and open the `Progress.php` file.

You should see the following code:

```php
<?php

namespace App\Livewire\Gauge\KenyaCensus;

use Illuminate\Support\Collection;
use Uneca\Chimera\Livewire\GaugeComponent;
use Uneca\Chimera\Services\BreakoutQueryBuilder;

class Progress extends GaugeComponent
{
    // public string $unit = '%';
    // public array $colorThresholds = [30 => 'text-red-500', 40 => 'text-amber-500', 50 => 'text-green-500'];
    // public int $outOf = 100;

    public function getData(string $filterPath): Collection
    {
        try {
            // TODO: Implement getData() method.
        } catch (\Exception $exception) {
            return collect();
        }
    }
}
```

Replace the TODO section and uncomment only the properties you want to change. In this example, we override `$colorThresholds` while using the default `$unit` (`%`) and `$outOf` (`100`):

```php
<?php

namespace App\Livewire\Gauge\KenyaCensus;

use Illuminate\Support\Number;
use Illuminate\Support\Collection;
use Uneca\Chimera\Livewire\GaugeComponent;
use Uneca\Chimera\Services\BreakoutQueryBuilder;

class Progress extends GaugeComponent
{
    public array $colorThresholds = [50 => 'text-red-500', 70 => 'text-amber-500', 101 => 'text-green-500'];

    public function getData(string $filterPath): Collection
    {
        try {
            return (new BreakoutQueryBuilder($this->gauge->data_source, $filterPath))
                ->select(['COUNT(*) AS total_households'])
                ->from(['housing_rec'])
                ->groupBy(['area_code'])
                ->lastlyAreaLeftJoinData(referenceValueToInclude: 'number_of_hh')
                ->get()
                ->map(function ($item) {
                    $item->value = Number::format(safeDivide($item->total_households, $item->ref_value) * 100, 1);
                    return $item;
                });
        } catch (\Exception $exception) {
            return collect();
        }
    }
}
```

This implementation:

1. Queries the total number of households per area from the `housing_rec` table.
2. Uses `lastlyAreaLeftJoinData()` with `referenceValueToInclude: 'number_of_hh'` to include the reference (target) values.
3. Calculates the percentage of households collected against the reference target.
4. Overrides `$colorThresholds` so values ≤ 50 appear red, ≤ 70 appear amber, and ≤ 101 appear green.

After completing the implementation, go to the Gauge management interface, edit the gauge, toggle the **Status** switch to Published, and click **Submit**. You can then view it on the Area Insights page.
