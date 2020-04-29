DROP DATABASE IF EXISTS TlacuBazar;
CREATE DATABASE IF NOT EXISTS TlacuBazar;
USE TlacuBazar;

CREATE TABLE `Users` (
  `idUser` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(50),
  `lastName` VARCHAR(100),
  `isVendor` BOOLEAN,
  `phone` VARCHAR(50),
  `cacaoBalance` DECIMAL(13,2)
);

CREATE TABLE `CityEnum` (
  `idCity` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(15)
);

CREATE TABLE `PostalCodeEnum` (
  `idPostalCode` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `postalCode` VARCHAR(15)
);

CREATE TABLE `Addresses` (
  `idAddress` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(50),
  `city` INT NOT NULL,
  `postalCode` INT NOT NULL,
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`city`) REFERENCES `CityEnum` (`idCity`),
  FOREIGN KEY (`postalCode`) REFERENCES  `PostalCodeEnum` (`idPostalCode`),
  FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`) ON DELETE CASCADE
);

CREATE TABLE `DeliveryMethodEnum` (
  `idDeliveryMethod` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `deliveryMethod` VARCHAR(50)
);

CREATE TABLE `Stores` (
  `idStore` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  `address` VARCHAR(50),
  `city` VARCHAR(50),
  `postalCode` VARCHAR(15),
  `isServiceStore` BOOLEAN,
  `acceptsCacao` BOOLEAN,
  `fkVendor` INT NOT NULL,
  FOREIGN KEY (`fkVendor`) REFERENCES `Users` (`idUser`) ON DELETE CASCADE
);

CREATE TABLE `DeliveryMethods` (
  `fkStore` INT NOT NULL,
  `fkDeliveryMethodEnum` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Stores` (`idStore`) ON DELETE CASCADE,
  FOREIGN KEY (`fkDeliveryMethodEnum`) REFERENCES `DeliveryMethodEnum` (`idDeliveryMethod`) ON DELETE CASCADE
);

CREATE TABLE `Products` (
  `idProduct` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70),
  `description` TEXT,
  `quantityInStock` SMALLINT,
  `buyPrice` DECIMAL(13,2),
  `maxCacaoBuyPrice` DECIMAL(13,2),
  `fkStore` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Stores` (`idStore`) ON DELETE CASCADE
);

CREATE TABLE `StatusEnum` (
  `idStatus` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15)
);

CREATE TABLE `Orders` (
  `idOrder` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `orderDate` DATE,
  `status` INT NOT NULL,
  `comments` TEXT,
  `totalPrice` DECIMAL(13,2),
  `totalMaxCacaoPrice` DECIMAL(13,2),
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`status`) REFERENCES `StatusEnum` (`idStatus`) ON DELETE CASCADE
);

CREATE TABLE `OrderDetails` (
  `idOrderDetails` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `quantityOrdered` INT,
  `fkOrder` INT NOT NULL,
  `fkProduct` INT NOT NULL,
  FOREIGN KEY (`fkOrder`) REFERENCES `Orders` (`idOrder`) ON DELETE CASCADE,
  FOREIGN KEY (`fkProduct`) REFERENCES `Products` (`idProduct`) ON DELETE CASCADE
);

CREATE TABLE `Payments` (
  `idPayment` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `paymentDate` DATE,
  `amount` DECIMAL(13,2),
  `cacaoAmount` DECIMAL(13,2),
  `fkClient` INT NOT NULL,
  `fkVendor` INT NOT NULL,
  `fkOrder` INT NOT NULL,
  FOREIGN KEY (`fkClient`) REFERENCES `Users` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkVendor`) REFERENCES `Users` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkOrder`) REFERENCES `Orders` (`idOrder`) ON DELETE CASCADE
);

CREATE TABLE `ProductReviews` (
  `idProductReview` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `stars` TINYINT(1) NOT NULL,
  `review` TEXT,
  `fkProduct` INT NOT NULL,
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`fkProduct`) REFERENCES `Products` (`idProduct`) ON DELETE CASCADE,
  FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`) ON DELETE CASCADE
);

CREATE TABLE `StoreReviews` (
  `idProductReview` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `stars` TINYINT(1) NOT NULL,
  `review` TEXT,
  `fkStore` INT NOT NULL,
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Stores` (`idStore`) ON DELETE CASCADE,
  FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`) ON DELETE CASCADE
);

INSERT INTO `DeliveryMethodEnum` (`deliveryMethod`) VALUES ('En automóvil');
INSERT INTO `DeliveryMethodEnum` (`deliveryMethod`) VALUES ('Transporte público');
INSERT INTO `DeliveryMethodEnum` (`deliveryMethod`) VALUES ('A pie');
INSERT INTO `DeliveryMethodEnum` (`deliveryMethod`) VALUES ('En bicicleta');

INSERT INTO `StatusEnum` (`status`) VALUES ('Esperando envío');
INSERT INTO `StatusEnum` (`status`) VALUES ('Pausada');
INSERT INTO `StatusEnum` (`status`) VALUES ('Enviada');
INSERT INTO `StatusEnum` (`status`) VALUES ('Recibida');
INSERT INTO `StatusEnum` (`status`) VALUES ('Pagada');
INSERT INTO `StatusEnum` (`status`) VALUES ('Cancelada');

INSERT INTO `Users` (`firstName`, `lastName`, `isVendor`, `phone`, `cacaoBalance`) VALUES ('Alejandro', 'Moral', FALSE, '7771414141', 0.0);
INSERT INTO `Users` (`firstName`, `lastName`, `isVendor`, `phone`, `cacaoBalance`) VALUES ('Milagros', 'Ramírez', TRUE, '7774004040', 0.0);

INSERT INTO `CityEnum` (`city`) VALUES ('Acatlipa');
INSERT INTO `CityEnum` (`city`) VALUES ('Jojutla');

INSERT INTO `PostalCodeEnum` (`postalCode`) VALUES ('62589');
INSERT INTO `PostalCodeEnum` (`postalCode`) VALUES ('62900');

INSERT INTO `Addresses` (`address`, `city`, `postalCode`, `fkUser`) VALUES ('Revolución Benito Juárez 42', 1, 1, 1);
INSERT INTO `Addresses` (`address`, `city`, `postalCode`, `fkUser`) VALUES ('Caudillo del Sur 500', 1, 1, 2);
INSERT INTO `Addresses` (`address`, `city`, `postalCode`, `fkUser`) VALUES ('Avenida Universidad 404', 2, 2, 1);

INSERT INTO `Stores` (`name`, `address`, `city`, `postalCode`, `isServiceStore`, `acceptsCacao`, `fkVendor`) VALUES ('Manzanas4Dayz', 'Margarita Maza 202', 1, 1, FALSE, TRUE, 2);
INSERT INTO `Stores` (`name`, `address`, `city`, `postalCode`, `isServiceStore`, `acceptsCacao`, `fkVendor`) VALUES ('Nutrición Milagros', 'Margarita Maza 202', 1, 1, TRUE, FALSE, 2);

INSERT INTO `DeliveryMethods` (`fkStore`, `fkDeliveryMethodEnum`) VALUES (1, 3);
INSERT INTO `DeliveryMethods` (`fkStore`, `fkDeliveryMethodEnum`) VALUES (2, 3);
INSERT INTO `DeliveryMethods` (`fkStore`, `fkDeliveryMethodEnum`) VALUES (2, 4);

INSERT INTO `Products` (`name`, `description`, `quantityInStock`, `buyPrice`, `maxCacaoBuyPrice`, `fkStore`) VALUES ('Manzana Roja', 'Clásica y tradicional manzana roja', 10, 3.43, 0.686, 1);
INSERT INTO `Products` (`name`, `description`, `quantityInStock`, `buyPrice`, `maxCacaoBuyPrice`, `fkStore`) VALUES ('Manzana Verde', 'La alternativa de siempre: manzana verde', 14, 2.5, 0.5, 1);
INSERT INTO `Products` (`name`, `description`, `quantityInStock`, `buyPrice`, `maxCacaoBuyPrice`, `fkStore`) VALUES ('Pera', 'Fantástica pera de máxima calidad', 7, 5.99, 1.198, 1);
