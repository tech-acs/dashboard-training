---
outline: deep
---

# Architectural Overview

The Dashboard Starter Kit is a well-designed Laravel package that provides a solid starting point for building census or survey management dashboards. In addition to foundational features such as login, registration, email verification, two-factor authentication, and session management, it provides reactive charts, area-based filters, map-based indicators, and much more.

It is designed using Tailwind CSS and makes heavy use of Laravel Livewire for reactive components. It is built on top of the Laravel Jetstream package.

## Built-in Capabilities

- Reactive, interactive charts powered by Plotly.js
- Area-based geographic filters with drill-down and search capabilities
- Map-based indicators with choropleth coloring
- Permission and role-based user management
- Two-factor authentication
- Invitation-based user registration
- Session management
- CSPro-aware query builder for breakout databases
- Usage analytics and query performance monitoring
- WCAG 3 / APCA compliant color palettes for accessible data visualization
- Email and in-app notifications
- Multilingual (i18n) support
- Excel and CSV report export
- Queueable background jobs
- Scheduled tasks for caching and report generation

## Databases

The application uses **PostgreSQL** as its primary database, with the **PostGIS** extension for spatial/geographic support and the **ltree** extension for hierarchical data storage. It can also connect to multiple types of databases in parallel to use as data sources (e.g., MySQL, SQLite, SQL Server).

## Charting

The dashboard uses **Plotly.js**, a JavaScript library for interactive, browser-based data visualization. Charts are reactive — they automatically update when the area filter changes — and can be designed using the built-in chart designer tool.

## Maps

**Leaflet.js** is the JavaScript library used for interactive maps. It supports various tile layers (base maps) and is compatible with ArcGIS shapefile formats for geographic boundaries.
