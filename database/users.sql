-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2023 at 07:15 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `id` int(11) NOT NULL,
  `task` varchar(20) NOT NULL,
  `time` time NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`id`, `task`, `time`, `created_by`, `created_date`) VALUES
(11, 'excersice', '18:51:00', 0, '0000-00-00'),
(13, 'shan', '11:06:00', 0, '0000-00-00'),
(18, 'smt', '11:52:00', 0, '0000-00-00'),
(20, 'Ganesh', '11:10:00', 0, '0000-00-00'),
(21, '29', '00:00:10', 0, '0000-00-00'),
(22, '29', '00:00:10', 0, '0000-00-00'),
(23, '29', '00:00:10', 0, '0000-00-00'),
(24, '29', '00:00:10', 0, '0000-00-00'),
(25, '29', '00:00:10', 0, '0000-00-00'),
(26, '29', '00:00:10', 0, '0000-00-00'),
(27, 'ganesh', '00:00:10', 0, '0000-00-00'),
(28, 'ganesh', '00:00:10', 0, '0000-00-00'),
(29, 'ganesh', '00:00:10', 0, '0000-00-00'),
(30, 'ganesh', '00:00:10', 0, '0000-00-00'),
(31, 'ganesh', '00:00:10', 0, '0000-00-00'),
(32, 'ganesh', '00:00:10', 0, '0000-00-00'),
(33, 'ganesh', '00:00:10', 0, '0000-00-00'),
(34, 'ganesh', '00:00:10', 0, '0000-00-00'),
(35, 'palecha', '00:00:10', 0, '0000-00-00'),
(36, 'sleep', '00:00:10', 0, '0000-00-00'),
(37, 'jump', '10:00:00', 0, '0000-00-00'),
(38, 'eat', '08:30:00', 7, '0000-00-00'),
(39, 'drive', '08:30:00', 7, '0000-00-00'),
(40, 'ride', '10:20:00', 8, '0000-00-00'),
(41, 'deep sleep', '04:00:00', 8, '0000-00-00'),
(42, 'light sleep', '04:00:00', 8, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(60) NOT NULL,
  `name` varchar(50) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `email` varchar(60) NOT NULL,
  `user_type` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_date` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `name`, `gender`, `email`, `user_type`, `password`, `created_date`) VALUES
(1, 'yssyogesh', 'Yogesh singh', 'male', 'yssyogesh@makitweb.com', '', '', '2023-01-16'),
(2, 'sonarika', 'Sonarika Bhadoria', 'female', 'bsonarika@gmail.com', '', '', '2023-01-16'),
(3, 'vishal', 'Vishal sahu', 'male', 'vishal@yahoo.com', '', '', '2023-01-16'),
(4, 'sunil', 'sunil', 'male', 'sunil521@gmail.com', '', '', '2023-01-16'),
(5, 'shantanupalecha', 'shantanu', 'male', 'shantanu@gmail.com', 'Admin', '123456', '2023-01-16'),
(6, 'palecha', 'pal', 'M', 'palecha@gmail.com', 'User', '$2b$10$eDDKoVXFJchPsKtegY8XOuXgqam8M7URLLfKwnWjXAIlcsf0lTp9O', '2023-01-17'),
(7, 'shantanupalecha', 'shantanu', 'male', 'smtp@gmail.com', 'Admin', '$2b$10$09tRYgAc3i8mHDxaE0uB/uJMIVPgQRjtLl2Oealpx8IY9CChkasQC', '2023-01-17'),
(8, 'shantanupalecha', 'admin', 'male', 'shantanup@gmail.com', 'Admin', '$2b$10$1eD9TP0dl95ThJmuZyMVH.h01lznZdWEJdBByu97eGmI/UHMZG/3C', '2023-01-17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
