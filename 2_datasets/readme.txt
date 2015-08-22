These are patent training datasets from a range of source and projects. 

The datasets have different sources and present different issues when importing and cleaning data in Open Refine, R or other tools. For example they have different numbers of blank rows at the top, different date formats, different field names etc. The purpose of this is to illustrate the variety of data formats that an analyst will encounter. 

The dataset repository is located on Github here: https://github.com/poldham/opensource-patent-analytics/tree/master/2_datasets

Please check the repository for updated and additional datasets. 

To download a file from the repository click on a file name until you see View Raw. Then download the file from the Raw button OR if accessing remotely into R or another programme then copy the raw URL. 

A raw Github URL looks something like this

https://github.com/poldham/opensource-patent-analytics/blob/master/2_datasets/pizza_medium_clean/pizza.csv?raw=true

Note the raw=true at the end. 

##Understanding the datasets

Each folder should contain a zipped file marked raw. This is the data as it was originally downloaded from the database. Synthetic biology data from Thomson Innovation is an exception and is only made available in processed form. 

Other files in the folders are working copies and have generally been cleaned in various ways. Details of actions taken are provided in the code book or read me text file found in each folder. 

The synthetic biology dataset was developed by Paul Oldham as part of a separate project but is made available as an illustration of the content of files from Thomson Innovation compared with other sources. 

Paul Oldham
updated 20/08/2015