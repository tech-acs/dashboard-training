# CAPI Apps: Data Collection in the Field

**CAPI Apps** are the specialized tools built using CSPro that run on mobile devices. These apps replace traditional paper questionnaires, allowing for real-time validation, skip logic, and most importantly, instant data transmission to data servers.

## CSEntry: The Engine on the Tablet

**CSEntry** is the Android application that executes the logic you defined in your CSPro `.ent` and `.dcf` files. For your dashboard to work, field staff must use CSEntry to collect and "sync" data.

* **Offline First:** CSEntry is designed for remote areas. It collects data without an internet connection and stores it locally in a `.csdb` file.
* **Validation:** It ensures that a "Year of Birth" of `1850` is flagged immediately, ensuring the data arriving at your server is already clean.

## The Synchronization Workflow

The "magic" of a real-time dashboard happens because of the **Sync** process. You must configure your CAPI app to talk to a central server (usually **CSWeb**).

1.  **Deployment:** You deploy your CAPI apps to the tablets.
2.  **Collection:** Interviewers complete forms in the field.
3.  **Synchronization:** Using the `syncconnect()` and `syncdata()` functions in CSPro logic, the app uploads the local data to the server.
4.  **Dashboard Intake:** The breakout process monitors the server's database and updates your dashboard database regularly.

## Key Components for Dashboard Integration

To make your CAPI app "dashboard-friendly," pay attention to these elements during development:

| Component | Importance for Dashboard                                                                                |
| :--- |:--------------------------------------------------------------------------------------------------------|
| **GPS Coordinates** | Allows the dashboard to generate spatial maps.                                                          |
| **Case IDs** | Unique identifiers (like Household IDs) ensure data isn't duplicated on the dashboard.                  |
| **App Metadata** | Tracking `Start Time` and `End Time` allows the dashboard to show "Average Interview Duration" metrics. |
| **Sync Logic** | Frequent syncing ensures the dashboard reflects the true progress of the field operation.               |

## Best Practices for Chimera-Ready Apps

* **Standardized Coding:** Use consistent value sets (e.g., `1` for Yes, `2` for No) across all sections to simplify dashboard calculations.
* **Paradata:** Capture hidden metadata (interviewer ID, device battery level, sync timestamps) to monitor fieldwork quality via the dashboard.
* **Version Control:** Ensure all tablets are running the same version of the CAPI app, or the dashboard may encounter "Schema Mismatch" errors.

## Resources

* **CSPro CAPI Guide:** [Getting Started with CAPI (PDF)](https://www2.census.gov/software/cspro/documentation/cspro-capi-getting-started.pdf)
* **CSEntry on Google Play:** [Download Link](https://play.google.com/store/apps/details?id=gov.census.cspro.csentry)
* **CSWeb:** [CSWeb Help](https://www.csprousers.org/help/CSWeb/get_help.html)

-----

> **Note for Trainees:** During this workshop, we will be using a pre-configured CAPI application. Your goal is to understand how the data moving from **CSEntry** to **CSWeb** is eventually visualized in the **Chimera Dashboard**.
