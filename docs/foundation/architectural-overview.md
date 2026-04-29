---
outline: deep
---

# Architectural Overview

Dashboard Starter Kit is a well designed Laravel package that provides a solid starting point for your next census or survey management dashboard. In addition to the basics such as application's login, registration, email verification, two-factor authentication, session management, etc, it provides reactive charts, area based filters, map based indicators and so much more.

It is designed using Tailwind CSS and heavily uses Laravel Livewire. It is built on top of Laravel Jetstream package.

## Built-in Capabilities
- Reactive charts
- Area based filters
- Map based indicators
- Permission and role based user management
- Two-factor authentication
- Invitation based registration
- Session management
- CSPro based query builder
- Usage analytics
- WCAG-3/APCA compliant color palettes
- Email & in-app notifications
- Multilingual support
- Excel export
- Queueable jobs
- Scheduled tasks

## Databases
The application uses PostgreSQL database with the postgis extension for spatial support and the ltree extension for hierarchical data storage.
It also connects to multiple types of databases in parallel to use as data sources.

## Charting
It uses Plotly, which is a JavaScript library for interactive, browser-based data visualization.

## Maps
Leaflet is the JavaScript library used for interactive maps. It is also compatible with ArcGIS's shapefile format.
