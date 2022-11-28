-- Local database definition.

DROP DATABASE IF EXISTS local_db;

CREATE DATABASE local_db;

USE local_db;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
                       username varchar(30) NOT NULL UNIQUE PRIMARY KEY,
                       password varchar(30) NOT NULL
);

INSERT INTO users VALUES('edgars', 'edgars');
INSERT INTO users VALUES('simon', 'simon');
INSERT INTO users VALUES('veli', 'matti');