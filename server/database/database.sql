#Create database
CREATE DATABASE heroes_db;

#Use database
USE heroes_db;

#Create tables 
CREATE TABLE houses
(
    idHouse INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    imageRoute VARCHAR(200)
);


CREATE TABLE heroes
(
    idHeroe INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    description TEXT,
    imageRoute VARCHAR(200),
    birthDate DATE,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP,
    idHouse INT(11),
    FOREIGN KEY (idHouse) REFERENCES houses(idHouse)
);

#Show table info
DESCRIBE heroes 