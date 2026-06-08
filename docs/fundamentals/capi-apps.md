---
outline: deep
---

# CAPI Apps: Data Collection in the Field

**CAPI (Computer-Assisted Personal Interviewing) Apps** are specialized tools built using CSPro that run on mobile devices. These apps replace traditional paper questionnaires, allowing for real-time validation, skip logic, and instant data transmission to central servers.

## CSEntry: The Engine on the Tablet

**CSEntry** is the Android application that executes the logic you defined in your CSPro `.ent` and `.dcf` files. For your dashboard to display real-time data, field staff must use CSEntry to collect and sync data.

- **Offline First:** CSEntry is designed for remote areas with limited connectivity. It collects data without an internet connection and stores it locally in a `.csdb` file.
- **Validation:** It ensures data quality at the point of collection. For example, a "Year of Birth" of `1850` would be flagged immediately, ensuring the data arriving at your server is already clean.

## The Synchronization Workflow

The "magic" of a real-time dashboard happens because of the **Sync** process. You must configure your CAPI app to communicate with a central server (usually **CSWeb**).

1. **Deployment:** Deploy your CAPI apps to the field tablets.
2. **Collection:** Interviewers complete forms in the field using CSEntry.
3. **Synchronization:** Using the `syncconnect()` and `syncdata()` functions in CSPro logic, the app uploads local data to the CSWeb server.
4. **Dashboard Intake:** The CSWeb Breakout Process monitors the server's database and transforms the data into a relational format that the dashboard can query.

## Key Components for Dashboard Integration

To make your CAPI app "dashboard-friendly," pay attention to these elements during development:

| Component | Importance for Dashboard |
| :--- | :--- |
| **GPS Coordinates** | Enables the dashboard to generate spatial maps and visualize data geographically. |
| **Case IDs** | Unique identifiers (such as Household IDs) ensure data is not duplicated on the dashboard. |
| **App Metadata** | Tracking `Start Time` and `End Time` allows the dashboard to display metrics like "Average Interview Duration." |
| **Sync Logic** | Frequent syncing ensures the dashboard reflects the true, up-to-date progress of the field operation. |

## Best Practices for Dashboard-Ready Apps

- **Standardized Coding:** Use consistent value sets (e.g., `1` for Yes, `2` for No) across all sections to simplify dashboard calculations.
- **Paradata:** Capture hidden metadata (interviewer ID, device battery level, sync timestamps) to monitor fieldwork quality via the dashboard.
- **Version Control:** Ensure all tablets are running the same version of the CAPI app, otherwise the dashboard may encounter "Schema Mismatch" errors.

## Resources

- **CSPro CAPI Guide:** [Getting Started with CAPI (PDF)](https://www2.census.gov/software/cspro/documentation/cspro-capi-getting-started.pdf)
- **CSEntry on Google Play:** [Download Link](https://play.google.com/store/apps/details?id=gov.census.cspro.csentry)
- **CSWeb:** [CSWeb Help](https://www.csprousers.org/help/CSWeb/get_help.html)

> **Note for Trainees:** During this workshop, we will be using a pre-configured dataset. Your goal is to understand how data moves from **CSEntry** → **CSWeb** → **Breakout Database** → **Dashboard** for visualization.
