---
outline: deep
---

# Configuration

The dashboard is designed to be easily customizable, but you do not need to change any default settings to get started. Configuration is managed through two primary methods:

1. **Environment variables** — Set in the `.env` file for low-level application settings.
2. **Settings UI** — Accessible via the **Settings** page in the Management section for runtime-configurable options.

## Environment Variables

### Database and Queue

The database connection variables are set during the initial sandbox setup:

- `DB_CONNECTION=pgsql` — Database driver (PostgreSQL)
- `DB_HOST` — Your database host name or IP address
- `DB_PORT` — Your database port (5432 is the default for PostgreSQL)
- `DB_DATABASE` — Your database name
- `DB_USERNAME` — Your database username
- `DB_PASSWORD` — Your database password

In addition, you should set the following variables:

- `APP_NAME="Your Dashboard Name"` — The name displayed in the browser title bar and throughout the application.
- `QUEUE_CONNECTION=redis` — Uses Redis for queue processing, which is required for scheduled reports and background jobs.

### Mail

If you intend to send emails for registration invites, notifications, password recovery, etc., you need to configure the mail server details.

This can be configured on the **Settings** page under the **Mail settings** section. If mail is enabled via the UI, the dashboard will attempt to send all emails through the SMTP server you configure. Otherwise, the `MAIL_MAILER` setting in your `.env` file will be used.

Ensure that the SMTP server details you enter are correct and tested to avoid errors in dashboard operation.

## Dashboard Features

### Settings Accessible from the Settings Page

- **`APP_OWNER_NAME`** — The name of the organization that owns the dashboard. Displayed in the footer across all pages (default: `ECA`).
- **`APP_OWNER_URL`** — The URL of the organization's website. Used as a link in the footer (default: `#`).
- **`INDICATORS_PER_PAGE`** — Controls the number of indicators shown per page. Set to an even integer (default: `2`).
- **`RECORDS_PER_PAGE`** — Controls the number of rows shown in various tables throughout the dashboard (default: `20`).
- **`MAP_CENTER_LAT`** — The latitude the map pans to when first loaded (default: `9.005401`, coordinates for Addis Ababa).
- **`MAP_CENTER_LON`** — The longitude the map pans to when first loaded (default: `38.763611`).
- **`MAP_STARTING_ZOOM`** — The initial zoom level when navigating to the map page (default: `7`).
- **`FEATURED_INDICATORS_PER_DATA_SOURCE`** — The number of featured indicators displayed per data source on the home page (default: `2`).
- **`MAIL_ENABLED`** — Set to `true` if you intend to send emails through the system (default: `false`). When enabled, configure all SMTP details.

### Settings Configured via the `.env` File

- **`CACHE_TTL_SECONDS=1800`** — The number of seconds that database query results are cached (default: 30 minutes).
- **`APP_TIMEZONE=UTC`** — The timezone for the census/survey exercise. Use valid PHP timezone identifiers as listed in the [PHP documentation](https://www.php.net/manual/en/timezones.php).
- **`SECURE=false`** — Set to `true` if your dashboard is served over HTTPS (default: `false`).
- **`ENFORCE_2FA=false`** — Set to `true` to require users to enable two-factor authentication (default: `false`).
- **`INVITATION_TTL_HOURS=72`** — The number of hours that user registration invitation links remain valid (default: `72`).
- **`REQUIRE_ACCOUNT_APPROVAL=false`** — Set to `true` to require manager approval before new accounts can be used (default: `false`).
- **`LONG_QUERY_TIME=10`** — The app will log queries that exceed this time threshold (in seconds) for performance monitoring (default: `10`).
