---
outline: deep
---

# PHP and Laravel: The Dashboard Engine

The Dashboard Starter Kit is built on **Laravel**, the most popular PHP framework in the world. Think of PHP as the raw material and Laravel as the power tools that make building complex systems faster and more secure.

## Why PHP and Laravel?

While many data scientists use Python or R, web-based dashboards require a robust backend to handle user authentication, database management, API integrations, and real-time updates.

- **Modern PHP:** Modern PHP (8.x+) is fast, type-safe, and highly performant — a far cry from the PHP of the 2000s.
- **The Laravel Ecosystem:** Laravel provides out-of-the-box solutions for common tasks such as routing, security, caching, queue management, and task scheduling.

## The MVC Architecture

Laravel follows the **Model-View-Controller (MVC)** pattern. Understanding this is key to knowing where to find files in your dashboard project:

| Component    | Role                              | Chimera Context                                      |
| :----------- | :-------------------------------- | :--------------------------------------------------- |
| **Model**    | Data & Business Logic             | Represents your survey indicators, areas, and map shapes. |
| **View**     | Presentation Layer                | The HTML/CSS (Blade templates and Livewire components) the user sees. |
| **Controller** | Request Handling & Coordination | Connects the Model to the View; handles user requests and returns responses. |

## Artisan: Your Command-Line Assistant

Laravel comes with a built-in CLI tool called **Artisan**. You will use it frequently during the workshop for tasks such as creating indicators, running migrations, and clearing caches.

**Common Commands:**

- `php artisan migrate` — Applies database schema changes.
- `php artisan chimera:make-indicator` — Create a new indicator component. Creates file from stub and adds entry in indicators table.
- `php artisan optimize:clear` — Clears all caches when things get "stuck."

> [!IMPORTANT]
> In the training sandbox, all artisan commands must be prefixed with `./vendor/bin/sail` (e.g., `./vendor/bin/sail artisan migrate`). See the [Training Sandbox](/getting-started/training-sandbox) section for details.

## Key Laravel Concepts for Chimera

To master the Dashboard Starter Kit, familiarize yourself with these specific features:

- **Eloquent ORM (Models and Relationships):** In a census dashboard, data is highly relational. For example, an Enumeration Area (EA) belongs to a District, which belongs to a Province. It is helpful to understand how Laravel handles these relationships.
- **The .env File and Laravel Configuration:** As the person developing or managing a dashboard, you’ll need to understand how Laravel reads these environment variables to affect various aspects of the dashboard.
- **Artisan Console (CLI Commands):** The starter kit introduces custom Artisan commands specific to managing your dashboard. You will regularly use the terminal to run commands that create indicators, clear application cache, etc. You don’t need to program these commands, but you must understand how to trigger them and read their terminal output.
- **Livewire Components (Basics):** The dashboard’s real-time elements (like filtering data by a specific province and seeing the charts automatically update without reloading the page) are handled by Livewire. Understanding the basic lifecycle of a Livewire component—specifically how properties (variables passed to the page) and render methods work—will allow you to troubleshoot why a specific chart or scorecard isn’t updating when a user changes a filter dropdown.

## Learning Resources

- **Video Tutorial:** [Laravel From Scratch (Laracasts, 2026 edition)](https://laracasts.com/series/laravel-from-scratch-2026) — The gold standard for learning Laravel.
- **Learn Laravel:** [Kickstart your journey with mini video courses](https://laravel.com/learn)
- **Laravel Documentation:** [Official Docs](https://laravel.com/docs)
- **PHP Best Practices:** [PHP: The Right Way](https://phptherightway.com/)
