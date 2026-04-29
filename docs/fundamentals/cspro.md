---
outline: deep
---

# CSPro: The Data Foundation

**CSPro (Census and Survey Processing System)** is the industry standard for entering, editing, and tabulating, census and survey data. In our workflow, CSPro is where the data collection begins before it is transformed for the dashboard.

## What is CSPro?

Developed by the U.S. Census Bureau, CSPro is used globally for large-scale data collection. While it is excellent for capturing data (CAPI), its native data formats are not directly "web-ready."

**The Dashboard's Role:** It acts as a translator, taking the structured output from CSPro and making it queryable for real-time analytics.

## Key Files and Formats

When working with Chimera and CSPro, you will encounter these specific file types:

* **`.ent` (Entry Application):** The logic file used for data collection.
* **`.dcf` (Data Dictionary):** This is the most important file for dashboard designers. It defines the variables, value sets (labels), and records.
* **`.csdb` (CSPro DB):** The SQLite-based format used by modern CSPro versions.

## Data Dictionary Integration

We use the **CSPro Dictionary (.dcf)** to understand what the data means.

> **Why this matters:** Without the dictionary, a value of `1` in your database is just a number. With the dictionary, we knows that `1` means "Male" and `2` means "Female," allowing the dashboard to generate human-readable charts.

## Data Flow

For a dashboard to be "live," it needs to talk to the CSPro server (CSWeb). The typical data flow looks like this:

1.  **Tablets:** Interviewers collect data offline.
2.  **CSWeb:** Data is synced to a central MySQL server via the internet.
3.  **CSWeb Breakout Process:** is a utility designed for CSPro 7.5 and later, which breaks out data from the CSPro format and transforms it into a relational databases, such as MySQL.
4.  **Field Monitoring Dashboard:** Our dashboard connects to the breakout database, reads the data, and processes them into indicators and other dashboard artefacts.

## Resources

* **CSPro Official Site:** [U.S. Census Bureau CSPro](https://www.census.gov/data/software/cspro.html)
* **CSPro Users Forum:** [Community Support](https://www.csprousers.org/forum/)
* **Learning CSPro:** [CSPro Video Tutorials (YouTube)](https://youtube.com/playlist?list=PLewV-zKXDZkgbaEoHM_pKdZI2Yem7_zgb&si=vdBkAli0giO8Hy3F)
