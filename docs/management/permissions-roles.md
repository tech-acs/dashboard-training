---
outline: deep
---

# Permissions & Roles

Managing access within the dashboard is built on a simple "who sees what" logic. By assigning users specific **Roles**, you ensure that they can only view and interact with the data relevant to their responsibilities. This hierarchical approach simplifies administration: instead of managing individual settings for every person, you define roles once and apply them to as many users as needed.

## Permissions

Permissions are the fundamental building blocks of your dashboard's security. They represent the granular "view rights" for every specific artefact within the system.

- **Visibility Control:** A permission determines whether a specific artefact (indicator, scorecard, map indicator, gauge, report, or page) is visible to a user. If the permission is not granted, the artefact will be completely hidden from that user's view.
- **Artifact Categories:** Permissions are organized by type to make management easier. Each category of artefact has its own set of permissions.

## Roles

A **Role** is a collection of permissions bundled together under a single title, such as "Viewer," "Supervisor," or "Data Analyst."

The Role editor interface allows administrators to toggle access on or off for entire groups. When you switch a toggle to the "on" position, that specific permission becomes active for anyone assigned to that role.

### Managing Roles

1. Navigate to **Management** → **Access Control** → **Roles**.
2. Create a new role or edit an existing one.
3. Use the toggles to grant or revoke permissions for each artefact.
4. Save your changes.

Roles make system-wide changes effortless. If you want to grant all Supervisors access to a new "Total Population" indicator, you only need to update the role in the Role Manager — the change will immediately reflect across all users assigned that role.

### Assigning Roles to Users

When inviting or editing a user, you can assign one or more roles to their account. A user inherits the combined permissions of all roles they are assigned.
