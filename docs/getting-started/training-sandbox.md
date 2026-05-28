---
outline: deep
---

# Training Sandbox

We have prepared a **standardized development sandbox specifically for the Dashboard Development Training**.
It is an isolated, Docker-based environment (using Laravel Sail) designed for rapid prototyping and dashboard development. It includes pre-configured database connections with sample data and a local server environment to ensure a consistent experience across all workstations.

It enables trainees to skip the complex setup process and start building their first components quickly.

::: info
Before you begin, if you are running Windows, make sure you have Docker Desktop installed and running. Please refer to the [WSL on Windows](/getting-started/wsl) section for detailed instructions.
:::

## Setup

Once you have setup WSL and ensured everything is working properly (Ubuntu is default, etc.), start wsl by typing `wsl` in the terminal. This will drop you inside your WSL environment (Ubuntu). There, navigate to your home directory by typing `cd ~` and follow the steps below:

### 1. Clone the sandbox repository

Clone the repository and navigate into it:

```bash
git clone https://github.com/tech-acs/dashboard-training
cd dashboard-training
```

### 2. Install dependencies

Install the PHP and JavaScript dependencies using Composer:

::: code-group
```bash [Linux / macOS / WSL]
docker run --rm \
  -u "$(id -u):$(id -g)" \
  -v "$(pwd):/var/www/html" \
  -w /var/www/html \
  laravelsail/php83-composer:latest \
  composer setup
```

```powershell [Windows]
docker run --rm `
  -v "${PWD}:/var/www/html" `
  -w /var/www/html `
  laravelsail/php83-composer:latest `
  composer setup
```
:::

> [!IMPORTANT]
> If you want to change any of the network ports used by the containers (in case of conflicts), now is the time to do it before starting the application. Just open the `.env` file, make your changes, and save it.

### 3. Start the application (Laravel Sail)

::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail up
```

```powershell [Windows]
bash vendor/bin/sail up
```
:::

### 4. Install npm packages and build assets

::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail npm install && ./vendor/bin/sail npm run build:dev
```

```powershell [Windows]
bash vendor/bin/sail npm install && bash vendor/bin/sail npm run build:dev
```
:::

### 5. Migrate the database

::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail artisan migrate
```

```powershell [Windows]
bash vendor/bin/sail artisan migrate
```
:::

### 6. Create an administrator account

::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail artisan adminify
```

```powershell [Windows]
bash vendor/bin/sail artisan adminify
```
:::

### 7. Access the application

Open `http://127.0.0.1:80/start` or `http://localhost:80/start` in your browser and you should see the sandbox start page.

> [!INFO]
> If you have changed `APP_PORT` from the default `80` to another value in your `.env` file, visit `http://127.0.0.1:<YOUR_PORT>/start` instead.

## Starting and Stopping Laravel Sail

Sail provides a Docker-based local development environment.

- **Start Sail:** Run `./vendor/bin/sail up -d` (or `bash vendor/bin/sail up -d` on Windows) to start containers in the background.
- **Stop Sail:** Run `./vendor/bin/sail down` (or `bash vendor/bin/sail down` on Windows) to stop and remove the containers.

## Executing Commands

To run any artisan or npm command, prefix it with Sail's executable:

- **Linux / macOS / WSL:** `./vendor/bin/sail artisan <command>`
- **Windows:** `bash vendor/bin/sail artisan <command>`

> [!IMPORTANT]
> Throughout the rest of this course, whenever you see a command like `php artisan SomeCommand`, replace it with `./vendor/bin/sail artisan SomeCommand` (or the Windows equivalent).

## Interacting with the Databases

The application includes databases accessible during development. You can manage them using:

- **Adminer:** A web-based database management GUI. Use the database credentials from your `.env` file to log in. Access it via the menu on the sandbox start page or visit [http://localhost:89](http://localhost:89).
- **VS Code Database Client:** Install the recommended extension and connect to `127.0.0.1` using the port and credentials from your `.env` file.
- **External Clients:** Use graphical tools like DBeaver, HeidiSQL, or TablePlus to connect using your `.env` credentials.

## Previewing Emails

The application uses Mailpit to intercept and display outgoing system emails (like password resets and invitations) locally, preventing them from being sent to real users.

- **Access Mailbox:** Visit [http://localhost:8025](http://localhost:8025) in your browser to view all intercepted emails. You can also access this via the menu on the sandbox start page.

## Rebuilding the Sandbox

Sometimes you may want to completely rebuild your Sail images to ensure all packages and software are up to date and all saved data (volumes) are erased. You can accomplish this using the following commands:

::: code-group
```bash [Linux / macOS / WSL]
./vendor/bin/sail down -v
./vendor/bin/sail build --no-cache
./vendor/bin/sail up
```

```powershell [Windows]
bash vendor/bin/sail down -v
bash vendor/bin/sail build --no-cache
bash vendor/bin/sail up
```
:::

> [!NOTE]
> The `-v` flag ensures that all volumes are removed, and the `--no-cache` flag ensures that the latest version of the images is pulled from the Docker Hub registry during the rebuild.

## Going Deeper on Laravel Sail

This training repository is built on top of Laravel Sail, a Docker-based local development environment for Laravel. For more information about Laravel Sail, please visit the [official Laravel Sail documentation](https://laravel.com/docs/sail).
