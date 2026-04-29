## Dashboard Development Training

UNECA's Field Monitoring Dashboard is an operational monitoring tool that visually presents, in real time, key performance indicators (KPIs), coverage metrics, and data quality indicators to enable effective tracking, supervision, and timely decision-making throughout digital census and survey operations.

Before using it, developers are expected to implement their desired indicators and other artifacts based on their own database structure (questionnaires).

This repository is a good starting point for learning how to implement and use the dashboard.

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

**Linux / macOS / WSL:**
```bash
docker run --rm \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd):/var/www/html" \
  -w /var/www/html \
  laravelsail/php83-composer:latest \
  composer setup
```

**Windows (PowerShell):**
```powershell
docker run --rm `
  -v "${PWD}:/var/www/html" `
  -w /var/www/html `
  laravelsail/php83-composer:latest `
  composer setup
```

> [!IMPORTANT]
> If you want to change any of the network ports used by the containers or want to modify default values set in the .env file, now is the time to do it.
> From here on, make sure you use the appropriate format of the commands for your enviroment. What's given is for Linux.

3. Start the application (Laravel Sail)

```bash [Linux / macOS / WSL]
./vendor/bin/sail up
```

4. Install npm packages and build assets

```bash [Linux / macOS / WSL]
./vendor/bin/sail npm install && ./vendor/bin/sail npm run build
```

5. Migrate the main application database

```bash [Linux / macOS / WSL]
./vendor/bin/sail artisan migrate
```

6. Create an administrator account (management account)

```bash [Linux / macOS / WSL]
./vendor/bin/sail artisan adminify
```

7. Open `http://localhost` in your browser and login with the administrator's username and password you created in the previous step.

### Starting and Stopping Laravel Sail

Sail provides a Docker-based local development environment.
- **Start Sail:** Run `./vendor/bin/sail up -d` (or `bash vendor/bin/sail up -d` on Windows) to start containers in the background.
- **Stop Sail:** Run `./vendor/bin/sail down` (or `bash vendor/bin/sail down` on Windows) to stop and remove the containers.

### Executing Commands

To run any artisan or npm command, prefix it with Sail's executable:
`./vendor/bin/sail artisan <command>`

### Interacting with the Databases

The application includes a database accessible during development. You can manage it using:
- **Adminer:** Navigate to [http://localhost:89](http://localhost:89) for a web-based database management GUI. Use the database credentials from your `.env` file to log in.
- **VS Code Database Client:** Install the recommended extension and connect to `127.0.0.1` using the port and credentials from your `.env` file.
- **External Clients:** Use graphical tools like DBeaver, HeidiSQL, or TablePlus to connect using your `.env` credentials.

### Previewing Emails

The application uses Mailpit to intercept and display outgoing system emails (like password resets) locally, preventing them from being sent to real users.
- **Access Mailbox:** Go to [http://localhost:8025](http://localhost:8025) in your browser to view all intercepted emails.

### Going Deeper on Laravel Sail
This training repository is built on top of Laravel Sail, a Docker-based local development environment for Laravel. For more information about Laravel Sail, please visit the [Laravel Sail documentation](https://laravel.com/docs/sail).


