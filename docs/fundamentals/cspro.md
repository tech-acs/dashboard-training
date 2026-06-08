---
outline: deep
---

# CSPro: The Data Foundation

**CSPro (Census and Survey Processing System)** is the industry standard software for entering, editing, processing, and tabulating census and survey data. In our workflow, CSPro is where data collection begins before the data is transformed and made available to the dashboard.

## What is CSPro?

Developed by the U.S. Census Bureau, CSPro is used globally by National Statistical Offices (NSOs) for large-scale data collection. While it is excellent for capturing data through Computer-Assisted Personal Interviewing (CAPI), its native data formats are not directly "web-ready."

**The Dashboard's Role:** The Field Monitoring Dashboard acts as a bridge, taking the structured output from CSPro and making it queryable for real-time analytics and visualization.

## Key Files and Formats

When working with the dashboard and CSPro, you will encounter these specific file types:

- **`.ent` (Entry Application):** The logic file that defines how data is collected and validated in the field.
- **`.dcf` (Data Dictionary):** This is the most important file for dashboard developers. It defines the variables, value sets (labels), records, and the overall structure of your data. Understanding the data dictionary is essential for writing correct queries.
- **`.csdb` (CSPro Database):** The SQLite-based format used by modern CSPro versions (7.5+) to store collected data on mobile devices.

## Data Dictionary Integration

We use the **CSPro Data Dictionary (`.dcf`)** to understand what the data means.

A data dictionary describes the overall organization of a data file; in other words, it gives a description of how data are stored in a file.
Think of it as the translator between a paper/digital questionnaire and the raw text file where the data actually lives.

> **Why this matters:** Without the dictionary, a value of `1` in your database is just a number. With the dictionary, we know that `1` means "Male" and `2` means "Female," allowing the dashboard to generate human-readable charts and reports.

When building indicators and queries, you will frequently reference the data dictionary to find the correct table names, column names, and value labels for your data.

## Data Flow

For a dashboard to display "live" data, it needs to receive data from the CSPro server (CSWeb). The typical data flow looks like this:

1. **Tablets (CSEntry):** Interviewers collect data offline using the CSEntry mobile application.
2. **CSWeb Server:** Data is synced from the tablets to a central MySQL server via the internet using CSWeb (receiver).
3. **CSWeb Breakout Process:** This is a utility designed for CSPro 7.5 and later, which transforms data from the CSPro hierarchical format into a relational database such as MySQL or SQL Server. Each level of the hierarchy becomes a separate table.
4. **Field Monitoring Dashboard:** Our dashboard connects to the breakout database, reads the relational data, and processes it into indicators, scorecards, gauges, and other dashboard artefacts.

## Resources

- **CSPro Official Site:** [U.S. Census Bureau CSPro](https://www.census.gov/data/software/cspro.html)
- **CSPro Users Forum:** [Community Support](https://www.csprousers.org/forum/)
- **Learning CSPro:** [CSPro Video Tutorials (YouTube)](https://youtube.com/playlist?list=PLewV-zKXDZkgbaEoHM_pKdZI2Yem7_zgb&si=vdBkAli0giO8Hy3F)
