## Dashboard Development Training

UNECA's Field Monitoring Dashboard is an operational monitoring tool that visually presents, in real time, key performance indicators (KPIs), coverage metrics, and data quality indicators to enable effective tracking, supervision, and timely decision-making throughout digital census and survey operations.

Before using it, developers are expected to implement their desired indicators and other artifacts based on their own database structure (questionnaires).

This repository is a good starting point for learning on how to implement and use the dashboard.

### Requirements
- Git
- PHP (>= 8.2) & Composer
- Docker
- Visual Studio Code
- Visual Studio Code Extensions
    - [Database Client](https://marketplace.visualstudio.com/items?itemName=cweijan.vscode-database-client2)
    - [Laravel](https://marketplace.visualstudio.com/items?itemName=laravel.vscode-laravel)
- Chrome browser

## Setup
- Clone the repository
- Run `composer setup`
- Run `./vendor/bin/sail up`
- Run `./vendor/bin/sail artisan migrate`
- Run `./vendor/bin/sail artisan adminify`
- Open `http://localhost:8000` in your browser
- Login with the username and password you set in the previous step

## Starting and Stopping Sail
- Run `./vendor/bin/sail up`
- Run `./vendor/bin/sail down`

## Executing Commands

## Interacting with the Databases
