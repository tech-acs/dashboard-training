## Dashboard Development Training

UNECA's Field Monitoring Dashboard is an operational monitoring tool that visually presents, in real time, key performance indicators (KPIs), coverage metrics, and data quality indicators to enable effective tracking, supervision, and timely decision-making throughout digital census and survey operations.

Before using it, developers are expected to implement their desired indicators and other artifacts based on their own database structure (questionnaires).

This repository is a good starting point for learning on how to implement and use the dashboard.

### Requirements
- Git
- Docker
- Visual Studio Code
- Visual Studio Code Extensions
    - [Database Client](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2)
    - [Laravel](https://marketplace.visualstudio.com/items?itemName=laravel.vscode-laravel)
- Chrome browser

## Setup
1. Clone this repository and `cd` into it

    `git clone https://github.com/tech-acs/dashboard-training`

2. Install dependencies (composer and npm packages)

```
docker run --rm \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd):/var/www/html" \
  -w /var/www/html \
  laravelsail/php83-composer:latest \
  composer setup
```

> Note: If you want to change any of the network ports used by the containers, or want to modify default values set in the .env file, now is the time to do it,

3. Start the application (Laravel Sail)

    `./vendor/bin/sail up`

4. Migrate the main application database

   `./vendor/bin/sail artisan migrate`
 
5. Create an administrator account (management account) 

    `./vendor/bin/sail artisan adminify`

6. Open `http://localhost` in your browser and login with the administrator's username and password you created in the previous step

## Starting and Stopping Sail
- Run `./vendor/bin/sail up`
- Run `./vendor/bin/sail down`

## Executing Commands
- To run any artisan command, run `./vendor/bin/sail artisan <command>`

## Interacting with the Databases
- Via Adminer

- Via VS Code Database Client extension

## Accessing Mail
