---
outline: deep
---

# Upgrading Versions

The Dashboard Starter Kit is a well-maintained Laravel package that is regularly updated with new features and bug fixes. To keep your installation up to date, you can run the Composer update command.

## Updating the Package

```bash
composer update uneca/dashboard-starter-kit
```

After updating the package, you may need to run the built-in update command to update the application's published resources.

## The Update Command

The `chimera:update` command helps keep your installation in sync with the latest version of the Dashboard Starter Kit.

> [!NOTE]
> You will not need to run this command unless it is specified in the release notes for a new version.

```bash
php artisan chimera:update [options]
```

### Available Options

- **`--all`:** Runs all update tasks (similar to a fresh installation — rarely needed).
- **`--chimera-config`:** Re-publishes the `chimera.php` config file. Needed when new configuration options are added.
- **`--migrations`:** Re-publishes any new database migrations added since your installation.
- **`--packages`:** Installs any new Composer packages added since your installation.
- **`--action-classes`:** Copies available action classes from the package to the `app/Actions` directory.
- **`--jetstream-modifications`:** Re-publishes customized Laravel Jetstream views and actions.
- **`--assets`:** Re-publishes resources (JS, CSS, stubs, `tailwind.config.js`, and `vite.config.js`).
- **`--color-palettes`:** Re-publishes the color palettes directory.
- **`--stubs`:** Re-publishes stubs used by the various `chimera:make` commands.
- **`--npm`:** Updates the application's `package.json` with required npm packages.
- **`--copy-env`:** Publishes `.env.example` and `.env` files and generates a new app key.

### Example

To re-publish all JS, CSS, and image files (useful when a new version has modified frontend assets):

```bash
php artisan chimera:update --assets
```

::: warning
When you re-publish previously published resources, changes you made to those resources after installation will likely be overwritten. Under normal circumstances, you should not have modified these resources, but be aware that this can happen.

For example, the `--copy-env` option would overwrite your existing `.env` file. If you have credentials stored there that you have not saved elsewhere, they will be lost.
:::
