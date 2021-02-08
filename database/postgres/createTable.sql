DROP TABLE IF EXISTS Images;

CREATE TABLE Images(id SERIAL PRIMARY KEY, modelId INT, imageUrl VARCHAR(100));
COPY Images(modelId, imageUrl)
FROM '/home/jvanboch/my_git/repos/SDC/somebirds-product-images/database/model2.csv'
WITH (format csv, header)
;


-- INSERT INTO Images
-- SELECT id::int, modelId, imageUrl
-- FROM image_data;
--sudo psql postgres -h 127.0.0.1 -d sbgallery -f createTable.sql
-- \COPY Images FROM PROGRAM 'awk FNR-1 /home/jvanboch/my_git/repos/SDC/somebirds-product-images/database/test*.csv | cat' DELIMITER ',' CSV HEADER;

--psql --host=ec2-54-193-118-157.us-west-1.compute.amazonaws.com --port=5432 --username=student --password --dbname=sbGallery -f createTable.sql
