Intellectual property right :Patent							Indicator :5 - Patent grants by technology						Source: WIPO statistics database. Last updated: March 2015

Downloaded by: Paul Oldham
Date: 04/06/2015
URL: http://ipstats.wipo.int/ipstatv2/index.htm?tab=patent
See wipo_technology_search.png for search criteria 

Actions in Excel

1. Deleted top rows and moved text to this read me (above, top 3)
2. Moved Office, Office(Code), Origin, Technology headers to top row, deleted blank row, removed bracket in column heading. To lower case and '_' for space
3. Filled blank spaces with NA with find and replace
4. Renamed then split technology_original into technology_number and technology. trimmed technology
5. Renamed worksheet to grants_tech
6. Renamed from "patent_5 - Patent grants by technology_Resident and non-resident count by filing office_1980_2013" to wipo_grants_technology.csv
7. Added Type column and the following categories
a) country
b) region
c) instrument (for regional patent offices)
d) income (for lower, upper etc groupings)
8. Added tech_sum as sum of technology counts by year
7. Named raw file as raw_. Zipped archive. 

In R the data was transformed from wide to long format using gather from tidyr. 

30/07/2015

Problems were encountered importing the data into Plotly. It is possible they arose from the NAs or from the categorical variables. 

In response the data was processed again in R but removing the NAs in the year values. filter from `dplyr` was used to filter by region, instrument etc to generate new tables. Those tables loaded into Plotly without a problem. 
																																																																										