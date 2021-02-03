USE sbGallery;
set global local_infile = 1;
LOAD DATA LOCAL INFILE '/home/jvanboch/my_git/repos/SDC/somebirds-product-images/database/model1.csv' INTO
TABLE Images FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
(id, modelId, imageUrl);

