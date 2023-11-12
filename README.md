# Project: Airlines Data Visualization

## Overview
Airlines Data Visualization is an engaging project that presents a story about US airline on-time performance through visualization. 
This project uses Python Flask-powered API, Pandas, HTML/CSS, JavaScript, D3, and PostgreSQL database. I am going to take the following approach:
  1. Problem definition
  2. Data
  3. ETL using Jupyter Notebook
  4. Databse using PostgreSQL
  5. Creating API using Python, Flask and SQLAlchemy
  6. Interactivity using JavaScript and D3 for data visualization
  7. Web developement using HTML/CSS

## 1. Problem Definition
Given a historic flight data in the USA, can we create a visualization that empower air traveleres to make informed decision about their choice of airline ?

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

## 4. Databse using PostgreSQL
I created three database tables in PostgreSQL and manually imported CSV files created during the ETL phase. To resolve an issue with the size of the 'carrier_name' in my bar graph, I decided to update the table using SQL, as shown below:

![Screen Shot 2023-09-23 at 7 13 59 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/e51e4ab9-ea8f-4c93-8f21-35927bbd3e47)

## 5. Creating API
I created an API to request and retrieve data from the database tables, returning JSON data. Below is some of the result of an api call to the databse:

![total_flights](https://github.com/dilqvl62/Airlines_Data_Visualization/assets/107519883/b3e348a2-5d38-44fe-9452-dc698d9f6c03) ![monthly_delays](https://github.com/dilqvl62/Airlines_Data_Visualization/assets/107519883/69e1004f-8ce0-4db1-9116-28ce711ef668)

## 6. Visualization 

* Airline delays by reason
  
I created a side-by-side bar graph to visualize the top 11 total flights alongside delay reasons. A dropdown menu allows you to select a reason, and the orange bars adjust in size to reflect the number of delayed flights for the selected reason.

![Screen Shot 2023-09-23 at 7 53 00 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/59bfff1d-e2df-4645-b36d-8c9dcb8fbbfa)

* Monthly Duration Delays by Airline

I created a scatter plot to visualize the total hours of delay by month for various reasons among the top 11 airlines

![Screen Shot 2023-09-23 at 8 11 31 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/cd65ad6c-90f1-41e8-8b9a-fa94aaf82293)

I implemented a dropdown menu that allows you to select an airline, enabling the visualization of its total hours of delay by month for various reasons among the top 11 airlines

![Screen Shot 2023-09-23 at 8 16 53 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/d2a9645c-16c8-4f6a-8c1a-1d8dc43f7747)

* Canceled flights percentage Map

I've successfully created a map visualizing the top ten busiest airports and the percentage of cancelled flights from April 2022 to April 2023. The size of the marker corresponds to the cancellation percentage, with larger markers indicating higher percentages.


![Screen Shot 2023-09-23 at 8 21 56 PM](https://github.com/dilqvl62/Choose_your_flight/assets/107519883/6c8309c0-6504-4e02-a97c-8097ef7f66cc)


  

  




