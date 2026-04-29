---
outline: deep
---

# PHP and Laravel: The Dashboard Engine

The starter kit is a specialized package built for **Laravel**, which is the most popular **PHP** framework in the world. Think of PHP as the raw material and Laravel as the power tools that make building complex systems faster and more secure.

## Why PHP and Laravel?

While many data scientists use Python or R, web-based dashboards require a robust "backend" to handle user authentication, database management, and API integrations.

* **Modern PHP:** Forget the old PHP of the 2000s. Modern PHP (8.x+) is fast, type-safe, and highly performant.
* **The Laravel Ecosystem:** Laravel provides "out of the box" solutions for common tasks like routing, security, and data caching.

## The MVC Architecture

Laravel follows the **Model-View-Controller** pattern. Understanding this is key to knowing where to find files in your Chimera repo:

| Component | Role | Chimera Context |
| :--- | :--- | :--- |
| **Model** | Data & Logic | Represents your survey indicators and map shapes. |
| **View** | Presentation | The HTML/CSS (Blade templates) the user sees. |
| **Controller** | The Brain | Connects the Model to the View; handles the "request." |

## Artisan: Your Command-Line Assistant

Laravel comes with a built-in CLI tool called **Artisan**. You will use it constantly during the workshop.

**Common Commands:**

* `php artisan migrate`: Updates your database schema.
* `php artisan chimera:summary`: A custom Chimera command to see dashboard health.
* `php artisan optimize:clear`: Clears the cache when things get "stuck."

## Key Laravel Concepts for Chimera

To master the starter kit, keep an eye on these specific features:

* **Migrations:** Version control for your database.
* **Routes:** Defining the URLs for your dashboard pages (`routes/web.php`).
* **Middleware:** Handling security (e.g., ensuring only "Admin" users can edit indicators).

## Learning Resources

* **Video Tutorial:** [Laravel From Scratch (2026 Edition)](https://laracasts.com/series/laravel-from-scratch-2026) - *The gold standard for learning.*
* **Learn Laravel:** [Kickstart your journey with two mini video courses](https://laravel.com/learn)
* **Laravel Documentation:** [The Official Docs](https://laravel.com/docs)
* **PHP Official Manual:** [PHP: The Right Way](https://phptherightway.com/)
