---
outline: deep
---

# Developer Mode

**Developer Mode** is a restricted access state — modeled after "Android Developer Options" — that unlocks advanced administrative capabilities and core configuration settings. It serves as a safety barrier to prevent accidental or unauthorized changes to the dashboard's foundational logic.

## Access Requirements & Security

To maintain a secure environment, Developer Mode is protected by two layers of verification:

- **Role-Based Access:** This feature is strictly reserved for **Super Admin** accounts. Even with the correct interaction, users with lower permission tiers cannot trigger the mode.
- **The "Hidden" Trigger:** Similar to mobile OS hidden menus, Developer Mode must be manually unlocked via a specific interaction to prevent accidental activation.

## How to Enable Developer Mode

### Method 1: The "Hidden" Toggle (Production/Staging)

This method is designed for Super Admins who need to make live adjustments without touching environment variables or code.

1. Log in with a **Super Admin** account.
2. Navigate to your **User Profile** page.
3. Locate the first **horizontal divider** (the thin line separating profile sections).
4. **Click seven (7) times** in the small blank area directly above this divider.
5. A confirmation notification will appear once the mode is active.

**Session-Based Persistence:** Once enabled, Developer Mode remains active only for the duration of your **current logged-in session**. Logging out or closing the browser will automatically disable the mode.

**Manual Deactivation:** For maximum security, we recommend manually toggling the mode off once you have finished applying core configurations.

### Method 2: Environment Configuration (Local Machine)

Since a "local" environment typically means a developer's own machine, the system assumes administrative access is required by default.

- By setting `APP_ENV=local` in your `.env` file, Developer Mode is automatically enabled.
- This bypasses the need for manual clicking and ensures a streamlined workflow for engineers during the building and testing phases.

## Use Cases: When to Use Developer Mode

This mode should only be engaged when the following "Power User" actions are required:

- **Core Configuration:** Changing data source names, and importing/deleting reference values.
- **Advanced Geographic Mapping:** Adjusting the underlying administrative hierarchies or importing/deleting area levels globally.

## Visual Indicator

The dashboard visually indicates when Developer Mode is active so that users are aware of the potential impact and remember to disable it once changes are complete. It is indicated by a **blinking red warning icon**, as shown below:

![Developer Mode Indicator](../images/developer-mode-warning.png)

> [!CAUTION]
> **With great power comes great responsibility.**
>
> Actions performed in Developer Mode can impact the data integrity and performance of the entire dashboard. Always verify your changes in a staging environment before applying them to production.
