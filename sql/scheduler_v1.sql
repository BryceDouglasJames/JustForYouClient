-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2021 at 02:56 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scheduler`
--
DROP DATABASE IF EXISTS `scheduler`;
CREATE DATABASE IF NOT EXISTS `scheduler` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `scheduler`;

-- --------------------------------------------------------

--
-- Table structure for table `buildings`
--
-- Creation: Jan 30, 2021 at 02:19 AM
--

DROP TABLE IF EXISTS `buildings`;
CREATE TABLE `buildings` (
  `BID` int(11) NOT NULL,
  `s_name` varchar(4) NOT NULL,
  `l_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `b_rooms`
--
-- Creation: Jan 30, 2021 at 02:23 AM
--

DROP TABLE IF EXISTS `b_rooms`;
CREATE TABLE `b_rooms` (
  `BRID` int(11) NOT NULL,
  `BID` int(11) NOT NULL,
  `room` int(11) NOT NULL,
  `sub_room` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_activity`
--
-- Creation: Feb 08, 2021 at 02:04 AM
--

DROP TABLE IF EXISTS `user_activity`;
CREATE TABLE `user_activity` (
  `UAID` int(11) NOT NULL,
  `UFID` int(11) NOT NULL,
  `u_login` tinyint(1) NOT NULL,
  `date_login` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_info`
--
-- Creation: Feb 08, 2021 at 01:58 AM
-- Last update: Feb 08, 2021 at 02:48 AM
--

DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `UFID` int(11) NOT NULL,
  `u_name` varchar(20) NOT NULL,
  `u_password` varchar(50) NOT NULL,
  `u_fname` varchar(25) NOT NULL,
  `u_lname` varchar(25) NOT NULL,
  `u_email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_info`
--

INSERT INTO `user_info` (`UFID`, `u_name`, `u_password`, `u_fname`, `u_lname`, `u_email`) VALUES
(2, 'deni', '123456', 'Anthony', 'Denizard', 'denizara@newpaltz.edu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`BID`);

--
-- Indexes for table `b_rooms`
--
ALTER TABLE `b_rooms`
  ADD PRIMARY KEY (`BRID`),
  ADD KEY `BID` (`BID`);

--
-- Indexes for table `user_activity`
--
ALTER TABLE `user_activity`
  ADD PRIMARY KEY (`UAID`),
  ADD KEY `UFID` (`UFID`);

--
-- Indexes for table `user_info`
--
ALTER TABLE `user_info`
  ADD PRIMARY KEY (`UFID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buildings`
--
ALTER TABLE `buildings`
  MODIFY `BID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `b_rooms`
--
ALTER TABLE `b_rooms`
  MODIFY `BRID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_activity`
--
ALTER TABLE `user_activity`
  MODIFY `UAID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_info`
--
ALTER TABLE `user_info`
  MODIFY `UFID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `b_rooms`
--
ALTER TABLE `b_rooms`
  ADD CONSTRAINT `b_rooms_ibfk_1` FOREIGN KEY (`BID`) REFERENCES `buildings` (`BID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_activity`
--
ALTER TABLE `user_activity`
  ADD CONSTRAINT `user_activity_ibfk_1` FOREIGN KEY (`UFID`) REFERENCES `user_info` (`UFID`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
