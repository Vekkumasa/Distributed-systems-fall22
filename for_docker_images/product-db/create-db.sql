-- Local database definition.

DROP DATABASE IF EXISTS local_db;

CREATE DATABASE local_db;

USE local_db;

DROP TABLE IF EXISTS products;

CREATE TABLE products (
                       id int(10) NOT NULL PRIMARY KEY ,
                       name varchar(100) NOT NULL,
                       description text,
                       quantity int,
                       price decimal(15,2)
);

insert into products VALUES(1, 'Karhu', 'Karhu, meaning bear in Finnish, is a pale lager with a strong taste.', 10, 5.99);
insert into products VALUES(2, 'Karhu Laku Porter', 'Karhu porter is an awful beer, it tastes disgusting.', 1000, 1.99);
insert into products VALUES(3, 'Sandels', 'The regular Sandels is a pale lager, but other versions of the beer exist as well, such as a darker beer, and a wheat beer. Sandels was named the top rated beer brand in Finland in a 2015 study.', 23, 2.99);
insert into products VALUES(4, 'A. Le Coq', 'A. Le Coq Gold is a light yellow premium beer with dense bubbles. Its sweetish character is well balanced with the fresh bitterness of hops.', 9, 9.99);
insert into products VALUES(5, 'Lahden Erikois New England IPA', 'Lahden Erikois NEIPA on mehukkaasti vaaleankeltainen ja samea pintahiivaolut. Sen maku on tulvillaan kypsien trooppisten hedelmien, kuten ananaksen, mangon ja appelsiinin mehevyyttä.', 67, 20.00);