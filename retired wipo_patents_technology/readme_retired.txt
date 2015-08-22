Wipo technology trends version, 

This data was separated into new columns in R and then gather was used to transform from wide to long format with NA retained for blank entries by year.

The files would not load into Plotly (for reasons that are not clear). An alternative approach was adopted removing the NAs for blank years. This also would not load into Plotly due to parsing problems. The issue may arise from categorical variables (Region, Country, Instrument, Income). To find a solution the data was filtered in R (dplyr) into separate tables. Those tables replace the originals in this folder. 