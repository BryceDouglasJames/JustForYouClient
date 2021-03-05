-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 05, 2021 at 06:31 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--
-- Creation: Feb 24, 2021 at 07:12 PM
-- Last update: Mar 05, 2021 at 05:15 PM
--

CREATE TABLE `usertable` (
  `user_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`user_id`, `name`, `email`, `pass`) VALUES
(36, 'fierybore', 'TestEamil@gmail.com', 'Hello'),
(38, 'fierybore', 'Hello@Hello.com', 'hello'),
(43, 'FaceToFaceBryce', 'asasasas', 'adsdasdasd'),
(44, 'fierybore', 'dsasd', 'ddddddd'),
(45, 'Test', 'asdasdasdasfadf', 'dafafsadfsafdsdaf'),
(46, 'Test', 'asdasdasdasfadf', 'dafafsadfsafdsdaf'),
(47, 'brycejames', 'afdsfadfa', 'dsadasdsadasdf'),
(48, 'asdf', 'fffff', 'ffff'),
(49, 'brycejames', 'asdadasdsadf', 'fffffffff'),
(50, 'IReallyHopeThisWorks', 'BRYCEQWQWQ', 'askjdhkasjdhsakjd'),
(51, 'Bryce', 'Test@Test.com', 'brewe'),
(52, 'XAMPP', 'askldjaskldj', 'lkasjdaslkdjklsad');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
