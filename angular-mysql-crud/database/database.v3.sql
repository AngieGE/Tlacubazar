DROP DATABASE IF EXISTS TlacuBazar;
CREATE DATABASE IF NOT EXISTS TlacuBazar;
USE TlacuBazar;

CREATE TABLE `User` (
  `idUser` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) UNIQUE,
  `firstName` VARCHAR(50),
  `lastName` VARCHAR(100),
  `isVendor` BOOLEAN,
  `phone` VARCHAR(50),
  `cacaoBalance` DECIMAL(13,2)
);

CREATE TABLE `AddressEnum` (
    `idAddressEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(50)
);

/*CREATE TABLE `PostalCodeEnum` (
  `idPostalCodeEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `postalCode` VARCHAR(15)
  `fkSuburbEnum` INT NOT NULL,
  FOREIGN KEY (`fkSuburbEnum`) REFERENCES `SuburbEnum` (`idSuburbEnum`)
);*/

CREATE TABLE `StateEnum` (
    `idStateEnum` INT PRIMARY KEY  NOT NULL AUTO_INCREMENT,
    `state` VARCHAR(50)
);

CREATE TABLE `CityEnum` (
  `idCityEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `city` VARCHAR(50),
  `fkStateEnum` INT NOT NULL,
  FOREIGN KEY (`fkStateEnum`) REFERENCES `StateEnum` (`idStateEnum`)
);

CREATE TABLE `SuburbEnum` (
  `idSuburbEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `suburb` VARCHAR(50),
  `postalCode` INT NOT NULL,
  `fkCityEnum` INT NOT NULL,
  FOREIGN KEY (`fkCityEnum`) REFERENCES `CityEnum` (`idCityEnum`)
);

CREATE TABLE `Address` (
  `idAddress` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `fkAddressEnum` INT NOT NULL,
  `fkStateEnum` INT NOT NULL,
  `fkCityEnum` INT NOT NULL,
  `fkSuburbEnum` INT NOT NULL,
  FOREIGN KEY (`fkAddressEnum`) REFERENCES `AddressEnum` (`idAddressEnum`),
  FOREIGN KEY (`fkStateEnum`) REFERENCES `StateEnum` (`idStateEnum`),
  FOREIGN KEY (`fkCityEnum`) REFERENCES `CityEnum` (`idCityEnum`),
  FOREIGN KEY (`fkSuburbEnum`) REFERENCES `SuburbEnum` (`idSuburbEnum`)
);

CREATE TABLE `UserAdress` (
    `fkUser` INT NOT NULL,
    `fkAddress` INT NOT NULL,
    FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
    FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`idAddress`) ON DELETE CASCADE
);

CREATE TABLE `DeliveryMethodEnum` (
  `idDeliveryMethod` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `deliveryMethod` VARCHAR(50)
);

CREATE TABLE `Store` (
  `idStore` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  `fkAddress` INT NOT NULL,
  `isServiceStore` BOOLEAN,
  `acceptsCacao` BOOLEAN,
  `fkVendor` INT NOT NULL,
  FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`idAddress`),
  FOREIGN KEY (`fkVendor`) REFERENCES `User` (`idUser`) ON DELETE CASCADE
);

CREATE TABLE `DeliveryMethod` (
  `fkStore` INT NOT NULL,
  `fkDeliveryMethodEnum` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Store` (`idStore`) ON DELETE CASCADE,
  FOREIGN KEY (`fkDeliveryMethodEnum`) REFERENCES `DeliveryMethodEnum` (`idDeliveryMethod`) ON DELETE CASCADE
);

CREATE TABLE `Product` (
  `idProduct` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70),
  `description` TEXT,
  `quantityInStock` SMALLINT,
  `buyPrice` DECIMAL(13,2),
  `maxCacaoBuyPrice` DECIMAL(13,2),
  `fkStore` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Store` (`idStore`) ON DELETE CASCADE
);

CREATE TABLE `StatusEnum` (
  `idStatusEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(15)
);

CREATE TABLE `Order` (
  `idOrder` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `orderDate` DATE,
  `status` INT NOT NULL,
  `comments` TEXT,
  `totalPrice` DECIMAL(13,2),
  `totalMaxCacaoPrice` DECIMAL(13,2),
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`status`) REFERENCES `StatusEnum` (`idStatusEnum`) ON DELETE CASCADE
);

CREATE TABLE `OrderDetails` (
  `idOrderDetails` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `quantityOrdered` INT,
  `fkOrder` INT NOT NULL,
  `fkProduct` INT NOT NULL,
  FOREIGN KEY (`fkOrder`) REFERENCES `Order` (`idOrder`) ON DELETE CASCADE,
  FOREIGN KEY (`fkProduct`) REFERENCES `Product` (`idProduct`) ON DELETE CASCADE
);

CREATE TABLE `Payment` (
  `idPayment` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `paymentDate` DATE,
  `amount` DECIMAL(13,2),
  `cacaoAmount` DECIMAL(13,2),
  `fkClient` INT NOT NULL,
  `fkVendor` INT NOT NULL,
  `fkOrder` INT NOT NULL,
  FOREIGN KEY (`fkClient`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkVendor`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkOrder`) REFERENCES `Order` (`idOrder`) ON DELETE CASCADE
);

CREATE TABLE `ProductReview` (
  `idStoreReview` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `stars` TINYINT(1) NOT NULL,
  `review` TEXT,
  `fkProduct` INT NOT NULL,
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`fkProduct`) REFERENCES `Product` (`idProduct`) ON DELETE CASCADE,
  FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE
);

CREATE TABLE `StoreReview` (
  `idStoreReview` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `stars` TINYINT(1) NOT NULL,
  `review` TEXT,
  `fkStore` INT NOT NULL,
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Store` (`idStore`) ON DELETE CASCADE,
  FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE
);

INSERT INTO `DeliveryMethodEnum` (`deliveryMethod`) VALUES ('En automóvil'), ('Transporte público'), ('A pie'), ('En bicicleta'), ('Recoger pedido');

INSERT INTO `StatusEnum` (`status`) VALUES ('Esperando envío'), ('Pausada'), ('Enviada'), ('Recibida'), ('Pagada'), ('Cancelada');

INSERT INTO `User` (`email`, `firstName`, `lastName`, `isVendor`, `phone`, `cacaoBalance`) VALUES ('alejandro.m@gmail.com', 'Alejandro', 'Moral', FALSE, '7771414141', 0.0), ('milagros@manzanas4dayz.com.mx', 'Milagros', 'Ramírez', TRUE, '7774004040', 0.0);

INSERT INTO `AddressEnum` (`address`) VALUES ('Revolución 42'), ('Caudillo del Sur 500'), ('Avenida Universidad 404');


/*STATES*/
INSERT INTO `StateEnum` (`idStateEnum`,`state`) VALUES (1, 'Morelos');

/*CITIES*/
INSERT INTO `CityEnum` (`idCityEnum`, `city`, `fkStateEnum`) VALUES 
			(1, 'Amacuzac',1), (2, 'Atlatlahuacan', 1), (3,'Axochiapan',1), (4,'Ayala',1),
			(5,'Coatlán del río',1), (6,'Cuautla',1), (7,'Cuernavaca',1), (8,'Emiliano Zapata',1),
			(9,'Jantetelco',1), (10,'Jiutepec',1), (11,'Jojutla de juarez',1), (12,'Jonacatepec',1),
			(13,'Mazatepec',1), (14,'Miacatlán',1), (15,'Ocuituco',1), (16,'Puente de Ixtla',1),
			(17,'Temixco',1), (18,'Temoac',1), (19,'Tepalcingo',1), (20,'Tepoztlan',1),
			(21,'Tetecala',1), (22,'Tetela del volcán',1), (23,'Tlalnepantla',1), (24,'Tlaltizapán',1),
			(25,'Tlaquiltenango',1), (26,'Tlayacapan',1), (27,'Totolapan',1), (28,'Xochitepec',1),
			(29,'Yautepec',1), (30,'Yecapixtla',1), (31,'Zacatepec de hidalgo',1), (32,'Zacualpan de amilpas',1);

/*SUBURBS & POSTAL CODE*/
INSERT INTO `SuburbEnum` (`idSuburbEnum`,`suburb`,`postalCode`,`fkCityEnum`) VALUES
		 	(1,'Amacuzac',62640, 1), (2, 'Barreal',62643, 1), (3, 'Benito Juarez',62654, 1),
			(4,'Acapatzingo', 62493, 7), (5, 'Adolfo Lopez Mateos', 62115, 7), (6, 'Adolfo Ruiz Cortines',62159, 7),
			(7,'Álamos',62905, 11), (8, 'Azuchilera',62914, 11), (9, 'Benito Juarez',62900, 11);

			
INSERT INTO `Address` (`fkAddressEnum`, `fkStateEnum`, `fkCityEnum`, `fkSuburbEnum`) VALUES 
			(1, 1, 1, 1), (2, 1, 7, 5), (3, 1, 11, 9);

INSERT INTO `UserAdress` (`fkUser`, `fkAddress`) VALUES (1, 1), (1, 3), (2, 2);

INSERT INTO `Store` (`name`, `fkAddress`, `isServiceStore`, `acceptsCacao`, `fkVendor`) VALUES ('Manzanas4Dayz', 3, FALSE, TRUE, 2), ('Nutrición Milagros', 3, TRUE, FALSE, 2);

INSERT INTO `DeliveryMethod` (`fkStore`, `fkDeliveryMethodEnum`) VALUES (1, 3), (2, 3), (2, 4);

INSERT INTO `Product` (`name`, `description`, `quantityInStock`, `buyPrice`, `maxCacaoBuyPrice`, `fkStore`) VALUES ('Manzana Roja', 'Clásica y tradicional manzana roja', 10, 3.43, 0.686, 1), ('Manzana Verde', 'La alternativa de siempre: manzana verde', 14, 2.5, 0.5, 1), ('Pera', 'Fantástica pera de máxima calidad', 7, 5.99, 1.198, 1);
