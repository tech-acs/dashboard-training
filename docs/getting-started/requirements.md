---
outline: deep
---

# Requirements
As the Dashboard Starter Kit is built on top of the latest Laravel version (v13), it requires PHP version 8.3 or greater. Any other requirements of Laravel are also [requirements](https://laravel.com/docs/installation#server-requirements) here.

## Production Environment
In a proper production environment, make sure you fulfill the following requirements:

- [Php 8.3](https://www.php.net/manual/en/install.php)
- All php extensions [required by Laravel](https://laravel.com/docs/deployment#server-requirements)
- [Nginx](https://nginx.org/en/docs/install.html) or [Apache](https://httpd.apache.org/docs/2.4/install.html)
- [Redis](https://redis.io/docs/latest/get-started/)
- [PostgreSQL (>= 16)](https://www.postgresql.org/download/)
- [PostGIS](https://postgis.net/install/)
- Hardware with at least 32GB RAM and 8 processor cores (for production)

## Training Sandbox
While the production requirements listed above ensure the stability and scale of live environments, we have streamlined the learning process for this training. To save you the overhead of manual configuration, we have packaged the entire stack into a Docker-based training sandbox (using Laravel Sail). This containerized environment replicates the core production architecture with a single command, allowing you to dive straight into the hands-on exercises.

However, you still need to make sure you have fulfilled the following minimal software requirements:
- Git
- Docker
- Visual Studio Code (or any other IDE)
- Visual Studio Code Extensions (optional)
    - [Database Client](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2)
    - [Official Laravel VSCode Extension](https://marketplace.visualstudio.com/items?itemName=laravel.vscode-laravel)
- Chrome browser
