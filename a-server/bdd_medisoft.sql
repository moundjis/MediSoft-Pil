-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2025 at 10:01 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_meditest`
--

-- --------------------------------------------------------

--
-- Table structure for table `employes`
--

CREATE TABLE `employes` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `date_de_naissance` datetime NOT NULL,
  `nas` varchar(9) NOT NULL,
  `courriel` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  `id_role` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employes`
--

INSERT INTO `employes` (`id`, `nom`, `prenom`, `date_de_naissance`, `nas`, `courriel`, `password`, `telephone`, `adresse`, `id_role`, `createdAt`, `updatedAt`) VALUES
(3, 'Jean', 'Dupont', '1985-05-15 00:00:00', '987654321', 'jean.dupont@gmail.com', '$2a$10$2q8y.nvNdr80gYGNkfk8K.qXo1zLlYBLXqKCESvzCVWIdMuWyeJ66', '9876543210', '456 avenue Exemple', 1, '2025-03-14 15:34:45', '2025-03-14 15:34:45'),
(6, 'Martin', 'Sophie', '1992-08-22 00:00:00', '987654320', 'sophie.martin@email.com', '$2a$10$dzFa2mzlNGMaeuCGIfxWRezOaXEDxRwzD9EKWM8LgwA2fJX7HnXMu', '0987654321', '456 avenue Exemple, Ville', 2, '2025-03-14 15:55:55', '2025-03-14 15:55:55'),
(7, 'Benali', 'Rachid', '1985-04-15 00:00:00', '678901234', 'rachid.benali@email.com', '111', '0656789012', 'Rue Didouche Mourad, Alger', 2, '2025-03-14 16:20:13', '2025-03-14 16:28:45'),
(8, 'Michelles', 'Franc', '1985-05-15 00:00:00', '087654320', 'michelle@gmail.com', '$2a$10$J05X5cWXbmFV3K8O55YW8.noN0yc/eotWMPyqqEsiA/l3fcOyCdvO', '9876543210', '456 avenue Exemple', 1, '2025-03-14 17:37:52', '2025-03-14 17:37:52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employes`
--
ALTER TABLE `employes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nas` (`nas`),
  ADD UNIQUE KEY `courriel` (`courriel`),
  ADD UNIQUE KEY `nas_2` (`nas`),
  ADD UNIQUE KEY `courriel_2` (`courriel`),
  ADD UNIQUE KEY `nas_3` (`nas`),
  ADD UNIQUE KEY `courriel_3` (`courriel`),
  ADD UNIQUE KEY `nas_4` (`nas`),
  ADD UNIQUE KEY `courriel_4` (`courriel`),
  ADD UNIQUE KEY `nas_5` (`nas`),
  ADD UNIQUE KEY `courriel_5` (`courriel`),
  ADD UNIQUE KEY `nas_6` (`nas`),
  ADD UNIQUE KEY `courriel_6` (`courriel`),
  ADD UNIQUE KEY `nas_7` (`nas`),
  ADD UNIQUE KEY `courriel_7` (`courriel`),
  ADD UNIQUE KEY `nas_8` (`nas`),
  ADD UNIQUE KEY `courriel_8` (`courriel`),
  ADD UNIQUE KEY `nas_9` (`nas`),
  ADD UNIQUE KEY `courriel_9` (`courriel`),
  ADD UNIQUE KEY `nas_10` (`nas`),
  ADD UNIQUE KEY `courriel_10` (`courriel`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employes`
--
ALTER TABLE `employes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `employes`
--
ALTER TABLE `employes`
  ADD CONSTRAINT `employes_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
