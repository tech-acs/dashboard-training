---
outline: deep
---

# Permissions & Roles

Managing access within the dashboard is built on a simple "who sees what" logic. By assigning users specific Roles, you ensure that they can only view/interact with the data relevant to their responsibilities. This hierarchical approach simplifies administration: instead of managing individual settings for every person, you define the roles once and apply them to as many users as needed.

## Permissions

Permissions are the fundamental building blocks of your dashboard's security. They represent the granular "view rights" for every specific artifact within the system.

- **Visibility Control:** A permission determines whether a specific artifact (indicator, scorecard, etc.) is visible to a user. If the permission for a specific artifact is not granted, that artifact will be completely hidden from the user's dashboard view.
- **Artifact Categories:** Permissions are organized by type to make management easier. This includes indicators, map indicators, reports, scorecards, gauges and even pages.

## Roles

A Role is a collection of permissions bundled together under a single title, such as "Supervisor" or "Data Analyst."

The Role editor interface allows administrators to toggle access on or off for an entire group. When you switch a toggle to the "on" position, that specific permission becomes active for anyone assigned to that role.

Roles make system-wide changes effortless. If you want to grant all Supervisors access to a new "Total Population" indicator, you only need to update the role in the Role Manager; the change will immediately reflect across all users who are assigned that role.