---
outline: deep
---

# Reference Value Synthesizers

Reference value synthesizers are classes designed to generate reference values from an existing data source. For example, you can generate the total number of households per area from a **listing exercise** to serve as reference values for the corresponding indicators in an **enumeration exercise**.

This is particularly useful when you have two overlapping exercises — where one exercise's actual data can serve as the target/benchmark for another.

## Creating a Synthesizer

To create a reference value synthesizer, run the following command and follow the prompts:

```bash
php artisan chimera:make-reference-value-synthesizer
```

Once the class file is created (located in `app/ReferenceValueSynthesizers/`), you will need to implement the `getData()` method.

The returned collection must have at least `area_path` and `value` keys. Using the `BreakoutQueryBuilder` with the `lastlyAreaRightJoinData()` method call will automatically include the `area_path` column.

## Using Reference Value Synthesizers

Once you have implemented your synthesizers, you can use them to generate and write reference values to the database by running:

```bash
php artisan chimera:transfer-reference-values ClassName
```

Where `ClassName` is the name of your reference value synthesizer class.

For example:

```bash
php artisan chimera:transfer-reference-values NoOfHouseholdsReferenceValue
```

This will generate reference values for the respective indicators in the enumeration exercise. If reference values are generated for EAs, the synthesizer will automatically propagate them to higher-level areas based on the additivity parameter set during class generation.

## Scheduling Regular Updates

Ideally, you would generate reference values for a proceeding exercise only once the previous exercise is completed. However, in practice, two exercises might overlap and reference values may need regular updates. To handle this, schedule the generation using Laravel's scheduler.

You may use the `withSchedule()` method in your application's `bootstrap/app.php` file:

```php
->withSchedule(function (Schedule $schedule) {
    $schedule->command('chimera:transfer-reference-values NoOfHouseholdsReferenceValue')
        ->daily()
        ->at('00:00');
})
```

Remember to import the `Schedule` class at the top of the file:

```php
use Illuminate\Console\Scheduling\Schedule;
```

> [!CAUTION]
> When generating reference values, if a reference value already exists for a given **area and indicator** pair, its value will be **overwritten** (updated).
