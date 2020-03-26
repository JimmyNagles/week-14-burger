  -- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "burgers_db" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB burgers_db for all the rest of the script
  USE burgers_db;

  CREATE TABLE menu(
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT  false,
    PRIMARY KEY (id)
  );
