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
- `php artisan chimera:summary` — Displays a health overview of your Chimera dashboard.
- `php artisan optimize:clear` — Clears all caches when things get "stuck."

> [!IMPORTANT]
> In the training sandbox, all artisan commands must be prefixed with `./vendor/bin/sail` (e.g., `./vendor/bin/sail artisan migrate`). See the [Training Sandbox](/getting-started/training-sandbox) section for details.

## Key Laravel Concepts for Chimera

To master the Dashboard Starter Kit, familiarize yourself with these specific features:

- **Migrations:** Version control for your database schema.
- **Routes:** Define the URLs for your dashboard pages (`routes/web.php`).
- **Middleware:** Handle security checks (e.g., ensuring only Admin users can edit indicators).
- **Livewire:** Laravel's full-stack framework for building dynamic interfaces without writing JavaScript.
- **Queues:** Handle long-running tasks (like report generation) in the background.

## Learning Resources

- **Video Tutorial:** [Laravel From Scratch (Laracasts, 2026 edition)](https://laracasts.com/series/laravel-from-scratch-2026) — The gold standard for learning Laravel.
- **Learn Laravel:** [Kickstart your journey with mini video courses](https://laravel.com/learn)
- **Laravel Documentation:** [Official Docs](https://laravel.com/docs)
- **PHP Best Practices:** [PHP: The Right Way](https://phptherightway.com/)
