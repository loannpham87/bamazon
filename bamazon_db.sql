DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE animals_db;

CREATE TABLE products (
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price INTEGER(10) NOT NULL,
stock_quantity INTEGER(10) NOT NULL,
item_id INT NOT NULL AUTO_INCREMENT,
PRIMARY KEY (item_id) 
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Workshop Knife", "Power and Hand Tools", 52.99, 4011),
("Echo Show", "Electronics", 179.99, 3900),
("Button-Up Dress Shirt", "Clothing", 29.75, 24),
("Swim Goggles, 2-Pair", "Sports Equipment", 6.99, 1650),
("Speed Cube 3x3", "Toys", 5.24, 1332),
("Biotin", "Health and Personal Care", 14.90, 4027),
("Automatic Vacuum", "Electronics", 25.49, 35),
("iphone Glass Screen Protector", "Electronics", 6.99, 42214),
("Motion Activated Sprinkler", "Home Improvement", 54.99, 1719),
("Echo Input", "Electronics", 19.99, 1137);