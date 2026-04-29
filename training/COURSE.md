# UNECA's Field Monitoring Dashboard Development Training
**Course Goal:** To empower developers, statisticians, and data scientists to build, customize, and deploy real-time monitoring dashboards for large-scale field data collection (Censuses and Surveys).

This training is designed to take a participant from a fresh installation to deploying a production-ready census/survey dashboard.

## Primer
*Objective: Provide some helpful foundation in git, PHP, web servers, CSPro, and database basics*

1.  **Git Basics**
    * Understanding the basics of version control (Git).
    * Setting up a local repository and pushing changes.
2.  **Github**
    * Setting up a GitHub account and repository.
    * Cloning, pushing changes, pull requests, and merging.
3. **PHP Basics**
    * Understanding the basics of PHP
4. CSPro Basics
    * Understanding the basics of CSPro and questionnaire design.
    * Understanding the "Breakout" database structure.

## 📅 Module 1: Introduction & Core Concepts
*Objective: Understand the kit and basic configuration.*

1.  **Overview of the toolkit**
    * The Architecture: Laravel (PHP), Jetstream, and Tailwind CSS.
    * Built-in features: Geospatial capabilities, role-based access control, 2FA, Query Builder, and more.
2.  **Architecture Overview**
    * Database: PostgreSQL.
    * Data sources: MySQL (CSPro), SqLite, MS SQL, and PostgreSQL
    * Web server: Nginx (with PHP-FPM) or Apache.
    * Queue processing, task scheduling, etc.
3. **Core Concepts**
    * Area Hierarchy
    * Data sources
    * Summary cards
    * Indicators
    * pages
    * Map Indicators
    * Area Insights
4. **Configuration**
    * Data source configuration
    * Area hierarchy configuration
    * Reference values importation
    * Setting up the environment variables

## 📊 Module 2: CSPro Databases & Artefact Creation
*Objective: Connect your dashboard to live or static data.*

1.  **Data Sources**
    * Working with CSPro breakout databases
    * Structure of the "Breakout" database
    * Built-in query builder
2.  **Artefacts**
    * Interview Stats
    * Pages & Artefact Organization
    * Scorecards
    * Gauges
    * Indicators
    * Reports
    * Map Indicators
    * Reference Value Synthesizers

## 📈 Module 3: Customization and Advanced Configurations
*Objective: The core of the course—turning rows of data into visual insights.*

1.  **Anatomy of an Indicator**
    * Creating Indicator classes using the CLI.
    * Writing SQL queries to fetch specific metrics (e.g., Household completion rate).
2.  **Visualizing Data**
    * Choosing chart types (Bar, Line, Pie, Gauge).
    * Customizing chart options using the built-in wrappers.
3.  **Map Integration**
    * Setting up Leaflet/Mapbox for spatial distribution of progress.
    * Heatmaps and thematic mapping by administrative area.

## 🛠️ Module 4: Customization & Branding
*Objective: Making the dashboard fit the organizational identity.*

1.  **UI/UX Customization**
    * Modifying the sidebar and navigation.
    * Changing themes and colors using Tailwind CSS.
2.  **Multi-language Support**
    * Setting up translations (English, French, Portuguese) for indicator labels.
3.  **Report Generation**
    * Enabling PDF exports and automated email summaries.

## 🔐 Module 5: User Management & Security
*Objective: Controlling who sees what.*

1.  **Roles and Permissions**
    * Admin vs. Manager vs. Field Supervisor roles.
2.  **System Health**
    * Monitoring logs and background jobs.

## 🚀 Module 6: Deployment & Maintenance
*Objective: Moving from localhost to the web.*

1.  **Production Readiness**
    * Optimization (Route/Config caching).
    * Setting up Redis for performance.
2.  **Deployment Strategies**
    * Deploying via Docker/Laravel Sail.
    * Continuous Integration (CI) with GitHub Actions.
3.  **Maintenance**
    * Updating the kit when new features are released.

---

### 📝 Recommended "Learning by Doing" Project
Throughout the training, participants should build a **"Sample Census Progress Dashboard"** with the following requirements:
* **KPI 1:** Total population counted vs. Target.
* **KPI 2:** Average interviews per day (Trend line).
* **Map:** A choropleth map showing completion rates by province.
* **User:** A "Regional Manager" account that can only see data for their specific region.

### 📚 Resource Links (For the Course Portal)
* **Documentation:** [Chimera Docs](https://tech-acs.github.io/chimera-docs/)
* **Source Code:** [Chimera Starter Kit GitHub](https://github.com/tech-acs/chimera-starter-kit)
* **Community Support:** Discord/GitHub Discussions link.
