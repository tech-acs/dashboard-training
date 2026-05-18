---
outline: deep
---

# Requirements

The Dashboard Starter Kit is built on top of the latest Laravel version (v13), which requires PHP version 8.3 or greater. All other [Laravel server requirements](https://laravel.com/docs/installation#server-requirements) also apply.

## Production Environment

In a production environment, ensure you meet the following requirements:

- [PHP 8.3](https://www.php.net/manual/en/install.php) or higher
- All PHP extensions [required by Laravel](https://laravel.com/docs/deployment#server-requirements)
- [Nginx](https://nginx.org/en/docs/install.html) or [Apache](https://httpd.apache.org/docs/2.4/install.html) web server
- [Redis](https://redis.io/docs/latest/get-started/) for caching and queue management
- [PostgreSQL (>= 16)](https://www.postgresql.org/download/) with the PostGIS extension
- Hardware with at least 32GB RAM and 8 processor cores (for production workloads)

## Training Sandbox

While the production requirements listed above ensure the stability and scalability of live environments, we have streamlined the learning process for this training. To save you the overhead of manual configuration, we have packaged the entire stack into a Docker-based training sandbox (using Laravel Sail). This containerized environment replicates the core production architecture with a single command, allowing you to dive straight into hands-on exercises.

You only need the following minimal software installed on your machine:

- **Git** — For cloning the training repository
- **Docker** (Docker Desktop on Windows/macOS, or Docker Engine on Linux)
- **Visual Studio Code** (or any other IDE of your choice)
- **A modern browser** (Chrome, Firefox, Edge, etc.)

### Recommended VS Code Extensions (Optional)

- [Database Client](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2) — For browsing databases directly within VS Code
- [Official Laravel VS Code Extension](https://marketplace.visualstudio.com/items?itemName=laravel.vscode-laravel) — For Laravel-specific IntelliSense and tooling
