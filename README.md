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

Transformed the Dataframe into the following tables:

* Top 11 airlines in the USA and total delay reason for each airline to create a bar graph.

![Screen Shot 2023-09-23 at 6 55 02 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/664ba53b-881f-49a9-97e0-cd41549d6e84)


![Screen Shot 2023-09-23 at 2 23 53 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/9ba6d9ec-e266-4714-80be-32b65c9a6b4d)

* Top 11 airlines in the USA grouped by carrier_name and month and total delay reason for each airline.

![Screen Shot 2023-09-23 at 2 35 23 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/846e5f25-caae-4d47-a400-ef85d89c0369)

To generate a map that show canceled flights percentage by airports, I incorporated another data set that has the latitude and longitude. I merged it with the original dataset (retaining only the relevant columns for both dataset and focussing on thetop 11 airlines in the USA)

![Screen Shot 2023-09-23 at 6 51 51 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/f6d35d9a-4b19-45ec-bd7c-d582a9afb895)


I created a Cancelled percentage column by deviding Cancelled_flights by total_arriving_flights 

![Screen Shot 2023-09-23 at 4 42 09 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/b8dcebad-b38c-41c1-b6ac-c2880b03c9f9)




