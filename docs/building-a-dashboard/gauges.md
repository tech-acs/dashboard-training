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

Navigate to the **Management** menu, select **Gauges**, then press the **CREATE NEW** button and fill out the form as required.

Gauges usually display three things: a title, a subtitle, and a value (with a unit or reference value).

## Implementing Gauges

You will need to write code in your generated gauge file so that it queries and returns the values you intend.

You have flexibility in how you implement your gauge, as long as you set the appropriate public class properties with their desired values. The `getData()` method must return a Laravel `Collection` containing an object with a key called `value`, which is the value to display. You should also make sure the `$unit`, `$outOf`, and `$colorThresholds` properties are set. The generated stub file will include all of these as commented-out examples.

- **`$this->outOf`** — The mathematical denominator. It defines the "perfect score" or the target/maximum value for the gauge.

- **`$this->colorThresholds`** — The semantic styling engine. It maps numerical values to CSS classes (Tailwind colors) to provide immediate "good/bad" status feedback.

- **`$this->unit`** — The display suffix. While `$outOf` handles the math, `$unit` handles the visual text rendered in the center of the gauge.

## In the Sandbox

### Progress

Use these values to create a gauge that displays the progress of household collection against a reference target:

- **Data source:** Kenya Census
- **Gauge name:** `KenyaCensus/Progress`
- **Title:** Progress

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

Replace the TODO section and uncomment/modify the properties as follows:

```php
<?php

namespace App\Livewire\Gauge\KenyaCensus;

use Illuminate\Support\Number;
use Illuminate\Support\Collection;
use Uneca\Chimera\Livewire\GaugeComponent;
use Uneca\Chimera\Services\BreakoutQueryBuilder;

class Progress extends GaugeComponent
{
    // public string $unit = '%';
    public array $colorThresholds = [50 => 'text-red-500', 70 => 'text-amber-500', 101 => 'text-green-500'];
    // public int $outOf = 100;

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
4. Uses color thresholds to show red (< 50%), amber (50–70%), and green (> 70%) status.

After completing the implementation, go to the Gauge management interface, edit the gauge, and publish it. You can then view it on the Area Insights page.
