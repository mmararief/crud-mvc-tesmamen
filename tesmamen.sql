-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2024 at 07:57 AM
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
-- Database: `tesmamen`
--

-- --------------------------------------------------------

--
-- Table structure for table `praktikan`
--

CREATE TABLE `praktikan` (
  `npm` varchar(191) NOT NULL,
  `nama` varchar(191) NOT NULL,
  `kelas` varchar(191) NOT NULL,
  `kehadiran` varchar(191) NOT NULL,
  `lp` int(11) NOT NULL,
  `la` int(11) NOT NULL,
  `ujian` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `praktikan`
--

INSERT INTO `praktikan` (`npm`, `nama`, `kelas`, `kehadiran`, `lp`, `la`, `ujian`) VALUES
('10122845', 'Muhammad ammar', '2KA12', '1', 5, 5, 100),
('123123', 'qweqwe', 'wqweqw', '213123', 123, 123, 213);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `password` varchar(191) NOT NULL,
  `username` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `password`, `username`) VALUES
(1, 'ammar', 'ammar');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('264feb30-e842-45c5-a992-597720216722', '618e7c8601d23a9bbee10c21cdfcbe300fa5f7556cdb17ee9308ef3051b34890', '2024-06-10 02:22:42.788', '20240610022242_init', NULL, NULL, '2024-06-10 02:22:42.766', 1),
('69236fb1-4d3b-43f0-8147-1e0ccda41951', '589b51e8ddc3b97039b8ee4c14ccb03f49af0f06d54c8a868573dafcbf920431', '2024-06-10 01:59:50.282', '20240610015950_init', NULL, NULL, '2024-06-10 01:59:50.255', 1),
('ecbdbb0e-d94e-42c2-aead-da767866856d', '8738f7b18131dc4db48a0bfbdb8f925245a182ceade5b1f57503222666d983ea', '2024-06-10 02:25:01.505', '20240610022501_init', NULL, NULL, '2024-06-10 02:25:01.495', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `praktikan`
--
ALTER TABLE `praktikan`
  ADD PRIMARY KEY (`npm`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `User_username_key` (`username`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
