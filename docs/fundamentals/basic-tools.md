---
outline: deep
---

# Basic Tools

Welcome to **UNECA's Dashboard Development Training** using our Field Monitoring Dashboard starter kit. Before we dive into PHP logic or CSPro data schemas, we need to ensure your environment is equipped with the industry-standard tools used to build, manage, and deploy modern web applications.

## Version Control: Git & GitHub

Version control allows you to track changes, collaborate with other developers, and revert to previous versions of your code if something breaks.

- **Git:** The local version control engine that tracks your file changes.
- **GitHub:** The cloud platform where repositories (code projects) are hosted and collaboration is managed.

> **Key Concept:** You will use `git clone` to pull the training sandbox to your local machine and `git push` to save your customizations.

**Resources:**

- [Git Handbook (GitHub Guides)](https://guides.github.com/introduction/git-handbook/)
- [Interactive Git Branching Tutorial](https://learngitbranching.js.org/)
- [Oh Shit, Git!?!](https://ohshitgit.com/)

## The Command Line Interface (CLI)

While you might be used to graphical interfaces, knowing your way around the terminal is essential. You will use the CLI to install dependencies, run database migrations, create artefacts, and clear caches.

- **Windows Users:** We recommend using **Git Bash** (installed with Git) or **Windows Subsystem for Linux (WSL2)**.
- **Mac/Linux Users:** Your native terminal is sufficient.

**Essential Commands:**

- `cd` — Change directory
- `ls` — List files in the current directory
- `mkdir` — Create a new directory
- `php artisan` — Run Laravel-specific commands (prefixed with `./vendor/bin/sail` in this training)

## Package Management

Modern dashboards are assembled using packages — reusable components of code. We use two primary package managers:

| Tool                  | Purpose                                            | Primary File       |
| :-------------------- | :------------------------------------------------- | :----------------- |
| **Composer**          | Manages PHP and Laravel dependencies (the backend) | `composer.json`    |
| **NPM**               | Manages JavaScript and CSS dependencies (the frontend) | `package.json` |

**Resources:**

- [Introduction to Composer](https://getcomposer.org/doc/00-intro.md)
- [NPM Docs: Getting Started](https://docs.npmjs.com/about-npm)

## Databases & Management Tools

The dashboard stores its configuration and data in relational databases. While Laravel handles the connection, you will need a tool to inspect tables and run queries.

- **Engine:** The training sandbox uses **PostgreSQL** (with PostGIS for spatial data) and **MySQL** (for the sample census data).
- **GUI Tools:** To visualize your data without writing raw SQL, we recommend:
  - **Adminer** — Web-based, included in the sandbox
  - **DBeaver** — Universal, open source
  - **TablePlus** — Fast and modern
  - **VS Code Database Client** — Integrated directly into your editor

## Integrated Development Environment (IDE)

You need a code editor that understands PHP and Laravel syntax.

- **Recommended:** [Visual Studio Code (VS Code)](https://code.visualstudio.com/)
- **Recommended Extensions:**
  - **PHP Intelephense** — Intelligent PHP code completion
  - **Official Laravel VS Code Extension** — Laravel-specific IntelliSense
  - **Tailwind CSS IntelliSense** — Tailwind class autocomplete

## WSL (Windows Subsystem for Linux)

If you are on Windows, we strongly recommend using WSL for the best Docker experience. Please see the [WSL on Windows](/getting-started/wsl) page for detailed setup instructions.

## Learning Resources

- **Dashboard Starter Kit Documentation:** [Dashboard Starter Kit Docs](https://tech-acs.github.io/chimera-docs/)
- **VS Code for PHP:** [Setting up VS Code for PHP](https://code.visualstudio.com/docs/languages/php)
- **SQL Basics:** [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
