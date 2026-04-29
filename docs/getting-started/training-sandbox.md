---
outline: deep
---

# Training Sandbox

We have prepared a **standardized development sandbox specifically for the Dashboard Development Training**.
It is an isolated, Docker-based environment (using Laravel Sail) designed for rapid prototyping and dashboard development. Includes pre-wired database connections (data included) and a local server environment to ensure a consistent experience across all workstations.

It enables trainees to skip the setup and start building their first components in seconds.

### Setup
1. Clone the sandbox repository and `cd` into it

```
git clone https://github.com/tech-acs/dashboard-training
```

2. Install dependencies (composer and npm packages)

::: code-group
```bash [Linux / macOS / WSL]
docker run --rm \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd):/var/www/html" \
  -w /var/www/html \
  laravelsail/php83-composer:latest \
  composer setup
```
```PowerShell [Windows]
docker run --rm `
  -v "${PWD}:/var/www/html" `
  -w /var/www/html `
  laravelsail/php83-composer:latest `
  composer setup
```
:::

> [!IMPORTANT]
> If you want to change any of the network ports used by the containers or want to modify default values set in the .env file, now is the time to do it.

3. Start the application (Laravel Sail)
::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail up
```
```PowerShell [Windows]
bash vendor/bin/sail up
```
:::

4. Install npm packages and build assets
::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail npm install && ./vendor/bin/sail npm run build
```
```PowerShell [Windows]
bash vendor/bin/sail npm install && bash vendor/bin/sail npm run build
```
:::

5. Migrate the main application database
::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail artisan migrate
```
```PowerShell [Windows]
bash vendor/bin/sail artisan migrate
```
:::

6. Create an administrator account (management account)
::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail artisan adminify
```
```PowerShell [Windows]
bash vendor/bin/sail artisan adminify
```
:::

7. Open `http://localhost` in your browser and login with the administrator's username and password you created in the previous step.

### Starting and Stopping Laravel Sail

Sail provides a Docker-based local development environment.
- **Start Sail:** Run `./vendor/bin/sail up -d` (or `bash vendor/bin/sail up -d` on Windows) to start containers in the background.
- **Stop Sail:** Run `./vendor/bin/sail down` (or `bash vendor/bin/sail down` on Windows) to stop and remove the containers.

### Executing Commands

To run any artisan or npm command, prefix it with Sail's executable:
- **Linux / macOS / WSL:** `./vendor/bin/sail artisan <command>`
- **Windows:** `bash vendor/bin/sail artisan <command>`

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

