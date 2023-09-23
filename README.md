# Project: Choose_your_flight

## Overview
Choose_Your_flight is an engaging project that presents a story about US airline on-time performance through visualization. 
This project uses Python Flask-powered API, Pandas, HTML/CSS, JavaScript, D3, and PostgreSQL database. I am going to take the following approach:
  1. Problem definition
  2. Data
  3. ETL using Jupyter Notebook
  4. Databse using PostgreSQL
  5. Creating API using Python, Flask and SQLAlchemy
  6. Interactivity using JavaScript and D3 for data visualization
  7. Web developement using HTML/CSS

## 1. Problem Definition
Given a historic flight in the USA, can we create a visualization that empower air traveleres to make informed decision about their choice of airline ?

## 2. Data
I obtained the data from [the Bureau of Transportation Statistics Website](https://www.transtats.bts.gov/OT_Delay/OT_DelayCause1.asp).
I went to the bottom of the page and selected all carrier, all airport with the date from April 2022 to April 2023, which gave me 19,707 rows and 21 columns as Raw Data.

For more details about the columns name and their representation [check out this link:](https://www.openintro.org/data/index.php?data=airline_delay)

**Note:** To open the link in a new tab, you can right-click the link and select "Open Link in New Tab" in your browser.

## 3. ETL using Jupyter Notebook
**1. Extracting** 
I employed the ETL approach, starting with data extraction. I loaded the raw data into a pandas DataFrame.
Next, I performed data exploration'

**2. Transforming and Loading** 

Top 11 airlines in the USA and total delay reason for each airline  

![Screen Shot 2023-09-23 at 2 06 26 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/e64244ec-50ce-4991-af47-b4ed0dadb85e)

![Screen Shot 2023-09-23 at 1 55 49 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/a8307a02-bf63-4cf6-bf59-bda31daa253a)



