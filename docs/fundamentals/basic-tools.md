---
outline: deep
---

# Basic Tools
Welcome to **UNECA's Dashboard Development Training** using our Field Monitoring Dashboard starter kit. Before we dive into the PHP logic or CSPro data schema, we need to ensure your environment is equipped with the industry-standard tools used to build, manage, and deploy modern web applications.

## Version Control: Git & GitHub

Version control allows you to track changes, collaborate with other developers, and "time travel" back to previous versions of your code if something breaks.

* **Git:** The local engine that tracks your file changes.
* **GitHub:** The cloud platform where we host our "repositories" (folders of code) and manage collaboration.

> **Key Concept:** You will use `git clone` to pull the 'sandbox' to your local machine and `git push` to save your customizations.

**Resources:**

* [Git Handbook (GitHub Guides)](https://guides.github.com/introduction/git-handbook/)
* [Interactive Git Branching Tutorial](https://learngitbranching.js.org/)
* [Oh Shit, Git!?!](https://ohshitgit.com/)

## The Command Line Interface (CLI)

While you might be used to pointing and clicking, knowing your way around the terminal is very useful. You will use the CLI to install dependencies, run migrations, create artefacts and clear caches.

* **Windows Users:** We recommend using **Git Bash** (installed with Git) or **Windows Subsystem for Linux (WSL2)**.
* **Mac/Linux Users:** Your native Terminal is perfect.

**Essential Commands to Know:**

* `cd` (Change Directory)
* `ls` (List files)
* `mkdir` (Make directory)
* `php artisan` (Laravel-specific commands)

## Package Management

Modern dashboards aren't built from scratch; they are assembled using "packages." We use two primary managers:

| Tool                  | Purpose | Primary File |
|:----------------------| :--- | :--- |
| **Composer**          | Manages PHP & Laravel dependencies (the "brains"). | `composer.json` |
| **NPM / Yarn / Bun** | Manages JavaScript & CSS (the "beauty"). | `package.json` |

**Resources:**

* [Introduction to Composer](https://www.google.com/search?q=https://getcomposer.org/doc/00-intro.md)
* [NPM Docs: Getting Started](https://www.google.com/search?q=https://docs.npmjs.com/about-npm)

## Databases & Management Tools

The dashboard stores its configuration and data in relational databases. While Laravel handles the connection, you need a tool to "see" inside your tables.

* **Engine:** Usually **PostgreSQL** or **MySQL**.
* **GUI Tools:** To visualize your data without writing raw SQL, we recommend:
    * **DBeaver:** (Universal, Open Source)
    * **TablePlus:** (Fast, Modern)
    * **Adminer:** (Web-based, often included in local stacks)

## Integrated Development Environment (IDE)

You need a text editor that understands PHP and Laravel syntax.

* **Recommended:** [Visual Studio Code (VS Code)](https://www.google.com/search?q=https://code.visualstudio.com/)
* **Recommended Extensions:**
    * *PHP Intelephense*
    * *Official Laravel VS Code Extension*
    * *Tailwind CSS IntelliSense*

## Quick Reference Links

* **Dashboard Starter Kit Documentation:** [Official Docs](https://tech-acs.github.io/chimera-docs/)
* **Documentation for VS Code:** [Setting up for PHP](https://code.visualstudio.com/docs/languages/php)
* **SQL Basics:** [W3Schools SQL Tutorial](https://www.w3schools.com/sql/)
