DROP DATABASE IF EXISTS TlacuBazar;
CREATE DATABASE IF NOT EXISTS TlacuBazar;
USE TlacuBazar;

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

CREATE TABLE `User` (
  `idUser` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(50) UNIQUE,
  `firstName` VARCHAR(50),
  `lastName` VARCHAR(100),
  `isVendor` BOOLEAN DEFAULT FALSE,
  `phone` VARCHAR(50),
  `cacaoBalance` DECIMAL(13,2),
  `readUserCourse` BOOLEAN DEFAULT FALSE,
  `readVendorCourse` BOOLEAN DEFAULT FALSE,
  `fkAddress` INT,
  FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`idAddress`)
);

CREATE TABLE `UserAddress` (
    `fkUser` INT NOT NULL,
    `fkAddress` INT NOT NULL,
	PRIMARY KEY (fkUser, fkAddress),
    FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
    FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`idAddress`) ON DELETE CASCADE
);

CREATE TABLE `StatusEnum` (
  `idStatusEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(50)
);

CREATE TABLE `CategoryEnum` (
  `idCategoryEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `category` TEXT NOT NULL
);

CREATE TABLE `Store` (
  `idStore` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50),
  `description` TEXT,
  `phone` VARCHAR(50),
  `link` VARCHAR(50),
  `image` VARCHAR(70),
  `isServiceStore` BOOLEAN,
  `acceptsCacao` BOOLEAN,
  `fkAddress` INT NOT NULL,
  `fkStatusEnum`INT NOT NULL,
  `fkVendor` INT NOT NULL,
  `fkCategoryEnum` INT NOT NULL,
  FOREIGN KEY (`fkAddress`) REFERENCES `Address` (`idAddress`),
  FOREIGN KEY (`fkVendor`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkCategoryEnum`) REFERENCES `CategoryEnum` (`idCategoryEnum`) ON DELETE CASCADE
);

CREATE TABLE `PaymentMethodEnum` (
  `idPaymentMethodEnum` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `paymentMethod` VARCHAR(30)
);

CREATE TABLE `StorePaymentMethod` (
  `fkStore` INT NOT NULL,
  `fkPaymentMethodEnum` INT NOT NULL,
  PRIMARY KEY (fkStore, fkPaymentMethodEnum),
  FOREIGN KEY (`fkStore`) REFERENCES `Store` (`idStore`)  ON DELETE CASCADE,
  FOREIGN KEY (`fkPaymentMethodEnum`) REFERENCES `PaymentMethodEnum` (`idPaymentMethodEnum`) ON DELETE CASCADE
);


CREATE TABLE `Product` (
  `idProduct` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(70),
  `description` TEXT,
  `image` VARCHAR(70),
  `quantityInStock` INT,
  `metric` VARCHAR(30) DEFAULT 'unidades',
  `buyPrice` DECIMAL(13,2),
  `maxCacaoBuyPrice` DECIMAL(13,2),
  `fkStore` INT NOT NULL,
  `fkCategoryEnum` INT NOT NULL,
  FOREIGN KEY (`fkStore`) REFERENCES `Store` (`idStore`) ON DELETE CASCADE,
  FOREIGN KEY (`fkCategoryEnum`) REFERENCES `CategoryEnum` (`idCategoryEnum`) ON DELETE CASCADE
);

CREATE TABLE `Order` (
  `idOrder` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `orderDate` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `comments` TEXT DEFAULT '',
  `fkUser` INT NOT NULL,
  `fkStore` INT NOT NULL,
  `fkStatusEnum`INT NOT NULL,
  `fkPaymentMethodEnum` INT NOT NULL,
  FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkStore`) REFERENCES `Store` (`idStore`) ON DELETE CASCADE,
  FOREIGN KEY (`fkStatusEnum`) REFERENCES `StatusEnum` (`idStatusEnum`) ON DELETE CASCADE,
  FOREIGN KEY (`fkPaymentMethodEnum`) REFERENCES `PaymentMethodEnum` (`idPaymentMethodEnum`) ON DELETE CASCADE
);

CREATE TABLE `OrderProduct` (
  `idOrderProduct` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `cacaoAmount` DECIMAL(13,2) NOT NULL DEFAULT 0,
  `amount` DECIMAL(13,2) NOT NULL DEFAULT 1,
  `date` DATETIME  DEFAULT CURRENT_TIMESTAMP,
  `fkUser` INT NOT NULL,
  `fkProduct` INT NOT NULL,
  `fkStatusEnum`INT NOT NULL DEFAULT 1,
  FOREIGN KEY (`fkUser`) REFERENCES `User` (`idUser`) ON DELETE CASCADE,
  FOREIGN KEY (`fkProduct`) REFERENCES `Product` (`idProduct`) ON DELETE CASCADE,
  FOREIGN KEY (`fkStatusEnum`) REFERENCES `StatusEnum` (`idStatusEnum`) ON DELETE CASCADE
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

/*USER*/
INSERT INTO `User` (`email`, `firstName`, `lastName`, `isVendor`, `phone`, `cacaoBalance`) VALUES ('alejandro.m@gmail.com', 'Alejandro', 'Moral', FALSE, '7771414141', 0.0), ('milagros@manzanas4dayz.com.mx', 'Milagros', 'Ramírez', TRUE, '7774004040', 0.0);

/*ADDRESS ENUM*/
INSERT INTO `AddressEnum` (`address`) VALUES 
	('Revolución 42'), ('Caudillo del Sur 500'), ('Avenida Universidad 404'), ('Privada Ajusco #6'),
	('Calle Elias 23'), ('Subida Chalma Num 33'), ('Calle guadalupe 88'), ('Privada Rosario');

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
    /*AMACUZAC 1*/
	(1,'Amacuzac',62640, 1),
    (2, 'Barreal',62643, 1),
    (3, 'Benito Juarez',62654, 1),
	(4,'Bungalows',62644, 1),
    (5, 'Cajones',62653, 1),
    (6, 'Campo Nuevo',62653, 1),
	
	/*CUERNAVACA 7*/
    (7,'Acapatzingo', 62493, 7),
    (8, 'Adolfo Lopez Mateos', 62115, 7),
    (9, 'Adolfo Ruiz Cortines',62159, 7),
	(10,'Ahuatepec', 62300, 7),
    (11, 'Chapultepec', 62450, 7),
    (12, 'Cuauhtémoc',62200, 7),
	(13,'Cuernavaca Centro', 62000, 7),
    (14, 'Insurgentes', 62200, 7),
    (15, 'Los Volcanes',62350, 7),
	
	/*JOJUTLA 11*/
    (16,'Álamos',62905, 11),
    (17, 'Azuchilera',62914, 11),
    (18, 'Benito Juarez',62900, 11);

			
INSERT INTO `Address` (`fkAddressEnum`, `fkStateEnum`, `fkCityEnum`, `fkSuburbEnum`) VALUES 
    (1, 1, 1, 1), 
    (2, 1, 7, 5),
    (3, 1, 11, 7),
	(4, 1, 1, 2), 
    (5, 1, 7, 4),
    (6, 1, 11, 8),
	(7, 1, 7, 6),
    (8, 1, 11, 9);

INSERT INTO `UserAddress` (`fkUser`, `fkAddress`) VALUES (1, 1), (1, 3), (2, 2);

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

/*Status enum*/
INSERT INTO `StatusEnum` VALUES
    (1, 'EN_CARRITO'),
    (2, 'ESPERANDO_ENVIO'),
    (3, 'ENVIADA'),
    (4, 'RECIBIDA'),
    (5, 'CANCELADA'),
    (6, 'STORE_EN_ESPERA'),
    (7, 'STORE_ACEPTADA'),
    (8, 'STORE_RECHAZADA');

/*Payment method enum*/
INSERT INTO `PaymentMethodEnum` (`idPaymentMethodEnum`,`paymentMethod`) VALUES 
	(1, 'Tarjeta'), 
	(2, 'Efectivo');

/* Store  */
INSERT INTO `Store` (`idStore`, `name`, `description`, `image`,`fkAddress`, `isServiceStore`, `acceptsCacao`, `fkStatusEnum`,`fkVendor`, `fkCategoryEnum`) VALUES 
    (1, 'Manzanas All Day', 'Tienda de todos tipos de manzanas', NULL, 1, FALSE, TRUE, 8, 2, 1),
    (2, 'Nutrición Milagros', 'Productos nutrimentales, bajos en grasa.', NULL, 2, FALSE, FALSE, 8, 2, 2),
	(3, 'Floreria Juanita', 'Tenemos todas las flores que pueda imaginar', NULL, 3, FALSE, FALSE, 8, 2, 3),
	(4, 'Tacos locos', 'tacos de canasta super ricos nuetsro taco mas famoso es el de mole, lo invitamos a probarlo.', NULL, 4, FALSE, TRUE, 8, 2, 2),
	(5, 'Carpetas Lore', 'Somos un grupo de mujeres que vendo de tamaño grande. Las telas son 100% morelenses.', NULL, 5, FALSE, TRUE, 8, 2, 13),
	(6, 'El leonsito', 'productos para cocina, echos de material quirurjico, super duradero y seguro', NULL, 6, FALSE, TRUE, 8, 2, 14),
	(7, 'Destapa baños', 'Destapamos todo suuper bien', NULL, 7, TRUE, FALSE, 8, 2, 13),
	(8, 'Clases de inglés online', 'La primera clase es gratis, tengo distintos precios y disponibilidad', NULL, 8, TRUE, FALSE, 8, 2, 9);
	
/*Store Paymentt method */
INSERT INTO `StorePaymentMethod` (`fkStore`, `fkPaymentMethodEnum`) VALUES 
	(1, 1), (1, 2),
	(2, 1), (2, 2),
	(3, 1), (3, 2),
	(4, 1), (4, 2),
	(5, 1), (5, 2),
	(6, 1), (6, 2),
	(7, 1), (7, 2),
	(8, 1), (8, 2);

INSERT INTO `Product`(`name`, `description`, `image`, `quantityInStock`, `buyPrice`, `maxCacaoBuyPrice`, `fkStore`, `fkCategoryEnum`) VALUES 
    ('Manzana Roja', 'Clásica y tradicional manzana roja', NULL, 10, 3.43, 0.686, 1, 2),
    ('Manzana Verde', 'La alternativa de siempre: manzana verde', NULL, 14, 2.5, 0.5, 1, 2),
    ('Pera', 'Fantástica pera de máxima calidad', NULL, 7, 5.99, 1.198, 5, 13),
	('Carpeta King Size', 'Carpeta amblia, lavable', NULL, 5, 340.43, 0.686, 5, 13),
    ('Carpeta estilo Indu', 'Lavable, con secado al sol', NULL, 3, 2000.5, 0.5, 5, 13),
    ('Carpeta trabajada a mano', 'Garantia de un mes', NULL, 7, 500.99, 1.198, 5, 13);


INSERT INTO `productreview` (`idProductReview`, `stars`, `review`, `fkProduct`, `fkUser`) VALUES 
	(NULL, '5', 'La manzana esta súper grande y dulce.', '1', '2'), 
	(NULL, '4', 'Muy buena calidad, siempre pido la manzana roja.', '1', '1');