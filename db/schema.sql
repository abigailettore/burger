DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE products (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);