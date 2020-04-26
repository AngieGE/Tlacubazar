CREATE TABLE `Users` (
  `idUser` INT PRIMARY KEY NOT NULL,
  `firstName` VARCHAR(50),
  `lastName` VARCHAR(100),
  `isVendor` BOOLEAN,
  `phone` VARCHAR(50),
  `cacaoBalance` DECIMAL(13,2)
);

CREATE TABLE `Adresses` (
  `idAdress` INT PRIMARY KEY NOT NULL,
  `adress` VARCHAR(50),
  `city` VARCHAR(50),
  `postalCode` VARCHAR(15),
  `fkUser` INT NOT NULL
);

CREATE TABLE `DeliveryMethodEnum` (
  `idDeliveryMethod` INT PRIMARY KEY NOT NULL,
  `deliveryMethod` VARCHAR(50)
);

CREATE TABLE `Stores` (
  `idStore` INT PRIMARY KEY NOT NULL,
  `name` VARCHAR(50),
  `isServiceStore` BOOLEAN,
  `acceptsCacao` BOOLEAN,
  `fkUser` INT NOT NULL
);

CREATE TABLE `DeliveryMethods` (
  `fkStore` INT NOT NULL,
  `fkDeliveryMethodEnum` INT NOT NULL
);

CREATE TABLE `Products` (
  `idProduct` INT PRIMARY KEY NOT NULL,
  `name` VARCHAR(70),
  `description` TEXT,
  `quantityInStock` SMALLINT,
  `buyPrice` DECIMAL(13,2),
  `maxCacaoBuyPrice` DECIMAL(13,2),
  `fkStore` INT NOT NULL
);

CREATE TABLE `StatusEnum` (
  `idStatus` INT PRIMARY KEY NOT NULL,
  `status` VARCHAR(15)
);

CREATE TABLE `Orders` (
  `idOrder` INT PRIMARY KEY NOT NULL,
  `orderDate` DATE,
  `status` INT NOT NULL,
  `comments` TEXT,
  `totalPrice` DECIMAL(13,2),
  `totalMaxCacaoPrice` DECIMAL(13,2),
  `fkUser` INT NOT NULL
);

CREATE TABLE `OrderDetails` (
  `idOrderDetails` INT PRIMARY KEY NOT NULL,
  `quantityOrdered` INT,
  `fkOrder` INT NOT NULL,
  `fkProduct` INT NOT NULL
);

CREATE TABLE `Payments` (
  `idPayment` INT PRIMARY KEY NOT NULL,
  `paymentDate` DATE,
  `amount` DECIMAL(13,2),
  `cacaoAmount` DECIMAL(13,2),
  `fkClient` INT NOT NULL,
  `fkVendor` INT NOT NULL,
  `fkOrder` INT NOT NULL
);

CREATE TABLE `ProductReviews` (
  `idProductReview` INT PRIMARY KEY NOT NULL,
  `stars` TINYINT(1) NOT NULL,
  `review` TEXT,
  `fkProduct` INT NOT NULL,
  `fkUser` INT NOT NULL
);

CREATE TABLE `StoreReviews` (
  `idProductReview` INT PRIMARY KEY NOT NULL,
  `stars` TINYINT(1) NOT NULL,
  `review` TEXT,
  `fkStore` INT NOT NULL,
  `fkUser` INT NOT NULL
);

ALTER TABLE `Adresses` ADD FOREIGN KEY (`idAdress`) REFERENCES `Users` (`idUser`);

ALTER TABLE `Stores` ADD FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`);

ALTER TABLE `DeliveryMethods` ADD FOREIGN KEY (`fkStore`) REFERENCES `Stores` (`idStore`);

ALTER TABLE `DeliveryMethods` ADD FOREIGN KEY (`fkDeliveryMethodEnum`) REFERENCES `DeliveryMethodEnum` (`idDeliveryMethod`);

ALTER TABLE `Products` ADD FOREIGN KEY (`fkStore`) REFERENCES `Stores` (`idStore`);

ALTER TABLE `Orders` ADD FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`);

ALTER TABLE `Orders` ADD FOREIGN KEY (`status`) REFERENCES `StatusEnum` (`idStatus`);

ALTER TABLE `OrderDetails` ADD FOREIGN KEY (`fkOrder`) REFERENCES `Orders` (`idOrder`);

ALTER TABLE `OrderDetails` ADD FOREIGN KEY (`fkProduct`) REFERENCES `Products` (`idProduct`);

ALTER TABLE `Payments` ADD FOREIGN KEY (`fkClient`) REFERENCES `Users` (`idUser`);

ALTER TABLE `Payments` ADD FOREIGN KEY (`fkVendor`) REFERENCES `Users` (`idUser`);

ALTER TABLE `Payments` ADD FOREIGN KEY (`fkOrder`) REFERENCES `Orders` (`idOrder`);

ALTER TABLE `ProductReviews` ADD FOREIGN KEY (`fkProduct`) REFERENCES `Products` (`idProduct`);

ALTER TABLE `ProductReviews` ADD FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`);

ALTER TABLE `StoreReviews` ADD FOREIGN KEY (`fkStore`) REFERENCES `Stores` (`idStore`);

ALTER TABLE `StoreReviews` ADD FOREIGN KEY (`fkUser`) REFERENCES `Users` (`idUser`);
