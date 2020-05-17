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
  `cacaoBalance` DECIMAL(13,2),
  `fkAddress` DECIMAL(13,2),
  FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`fkAddress`)
);

CREATE TABLE `AddressEnum` (
    `idAddressEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(50)
);

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

CREATE TABLE `UserAddress` (
    `fkUser` INT NOT NULL,
    `fkAddress` INT NOT NULL,
    FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
    FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`idAddress`) ON DELETE CASCADE
);

CREATE TABLE `DeliveryMethodEnum` (
  `idDeliveryMethod` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `deliveryMethod` VARCHAR(50)
);

CREATE TABLE `StatusEnum` (
  `idStatusEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50)
);

CREATE TABLE `Store` (
  `idStore` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  `description` TEXT,
  `image` VARCHAR(70),
  `fkAddress` INT NOT NULL,
  `isServiceStore` BOOLEAN,
  `acceptsCacao` BOOLEAN,
  `fkStatusEnum`INT NOT NULL,
  `fkVendor` INT NOT NULL,
  `fkCategoryEnum` INT NOT NULL,
  FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`idAddress`),
  FOREIGN KEY (`fkVendor`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkCategoryEnum`) REFERENCES `CategoryEnum` (`idCategoryEnum`) ON DELETE CASCADE
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
  `image` VARCHAR(70),
  `quantityInStock` SMALLINT,
  `buyPrice` DECIMAL(13,2),
  `maxCacaoBuyPrice` DECIMAL(13,2),
  `fkStore` INT NOT NULL,
  `fkCategoryEnum` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Store` (`idStore`) ON DELETE CASCADE,
  FOREIGN KEY (`fkCategoryEnum`) REFERENCES `CategoryEnum` (`idCategoryEnum`) ON DELETE CASCADE
);

CREATE TABLE `Order` (
  `idOrder` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `orderDate` DATE,
  `fkStatusEnum`INT NOT NULL,
  `comments` TEXT,
  `totalPrice` DECIMAL(13,2),
  `totalMaxCacaoPrice` DECIMAL(13,2),
  `fkUser` INT NOT NULL,
  FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkStatusEnum`) REFERENCES `StatusEnum` (`idStatusEnum`) ON DELETE CASCADE
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
  `idProductReview` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
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

CREATE TABLE `CategoryEnum` (
  `idCategoryEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `category` TEXT NOT NULL
);

INSERT INTO `DeliveryMethodEnum` (`deliveryMethod`) VALUES ('En automóvil'), ('Transporte público'), ('A pie'), ('En bicicleta'), ('Recoger pedido');

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

INSERT INTO `UserAddress` (`fkUser`, `fkAddress`) VALUES (1, 1), (1, 3), (2, 2);

INSERT INTO `Store` (`name`, `description`, `image`,`fkAddress`, `isServiceStore`, `acceptsCacao`, `fkStatusEnum`,`fkVendor`, `fkCategoryEnum`) VALUES 
					('Manzanas4Dayz', "Tienda de todos tipos de manzanas", NULL, 3, FALSE, TRUE, 7,2, 2), 
					('Nutrición Milagros', "Productos nutrimentales, bajos en grasa.", NULL, 3, TRUE, FALSE, 8, 2, 2);

INSERT INTO `DeliveryMethod` (`fkStore`, `fkDeliveryMethodEnum`) VALUES (1, 3), (2, 3), (2, 4);

INSERT INTO `Product`(`name`, `description`, `image`, `quantityInStock`, `buyPrice`, `maxCacaoBuyPrice`, `fkStore`, `fkCategoryEnum`) VALUES 
					('Manzana Roja', 'Clásica y tradicional manzana roja',NULL, 10, 3.43, 0.686, 1, 2), 
					('Manzana Verde', 'La alternativa de siempre: manzana verde', NULL, 14, 2.5, 0.5, 1, 2), 
					('Pera', 'Fantástica pera de máxima calidad', NULL, 7, 5.99, 1.198, 1, 2);

/*State enum*/
INSERT INTO `StatusEnum` VALUES (1, 'ESPERANDO_ENVIO');
INSERT INTO `StatusEnum` VALUES (2, 'PAUSADA');
INSERT INTO `StatusEnum` VALUES (3, 'ENVIADA');
INSERT INTO `StatusEnum` VALUES (4, 'RECIBIDA');
INSERT INTO `StatusEnum` VALUES (5, 'PAGADA');
INSERT INTO `StatusEnum` VALUES (6, 'CANCELADA');
INSERT INTO `StatusEnum` VALUES (7, 'STORE_EN_ESPERA');
INSERT INTO `StatusEnum` VALUES (8, 'STORE_ACEPTADA');
INSERT INTO `StatusEnum` VALUES (9, 'STORE_RECHAZADA');

/*Category enum*/
INSERT INTO `CategoryEnum` VALUES (1, 'Abarrotes');
INSERT INTO `CategoryEnum` VALUES (2, 'Alimentos');
INSERT INTO `CategoryEnum` VALUES (3, 'Arte y Artesanias');
INSERT INTO `CategoryEnum` VALUES (4, 'Automotriz');
INSERT INTO `CategoryEnum` VALUES (5, 'Bebé');
INSERT INTO `CategoryEnum` VALUES (6, 'Belleza y cuidado personal');
INSERT INTO `CategoryEnum` VALUES (7, 'Cine y TV');
INSERT INTO `CategoryEnum` VALUES (8, 'Computación');
INSERT INTO `CategoryEnum` VALUES (9, 'Educación');
INSERT INTO `CategoryEnum` VALUES (10, 'Electrónica');
INSERT INTO `CategoryEnum` VALUES (11, 'Equipaje');
INSERT INTO `CategoryEnum` VALUES (12, 'Herramientas y mejoramiento del hogar');
INSERT INTO `CategoryEnum` VALUES (13, 'Hogar');
INSERT INTO `CategoryEnum` VALUES (14, 'Hogar y cocina');
INSERT INTO `CategoryEnum` VALUES (15, 'Industrial y científico');
INSERT INTO `CategoryEnum` VALUES (16, 'Inmuebles');
INSERT INTO `CategoryEnum` VALUES (17, 'Insumos para mascotas');
INSERT INTO `CategoryEnum` VALUES (18, 'Juguetes y juegos');
INSERT INTO `CategoryEnum` VALUES (19, 'Libros');
INSERT INTO `CategoryEnum` VALUES (20, 'Moda');
INSERT INTO `CategoryEnum` VALUES (21, 'Videojuegos');
