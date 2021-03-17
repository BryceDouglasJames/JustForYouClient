-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 17, 2021 at 12:39 AM
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
-- Database: `jfy_db`
--
CREATE DATABASE IF NOT EXISTS `jfy_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `jfy_db`;

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `ANID` int(11) NOT NULL,
  `QUID` int(11) NOT NULL,
  `CAID` int(11) NOT NULL,
  `answer` int(11) NOT NULL,
  `answer_weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `CAID` int(11) NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `QUID` int(11) NOT NULL,
  `CAID` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `question` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `QUID` int(11) NOT NULL,
  `CAID` int(11) NOT NULL,
  `response_text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`response_text`)),
  `response_weight` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`response_weight`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userprovider`
--

CREATE TABLE `userprovider` (
  `UID` int(11) NOT NULL,
  `ANID` int(11) NOT NULL,
  `DOB` date NOT NULL,
  `Weight` int(3) NOT NULL,
  `Height` int(4) NOT NULL,
  `BMI` int(2) NOT NULL,
  `Activity` varchar(20) NOT NULL,
  `Disease` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Disease`)),
  `FitScore` int(3) NOT NULL,
  `DietScore` int(3) NOT NULL,
  `MentalScore` int(3) NOT NULL,
  `PersonalScore` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `UID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`ANID`),
  ADD KEY `QUID` (`QUID`),
  ADD KEY `CAID` (`CAID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CAID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`QUID`),
  ADD KEY `CAID` (`CAID`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD KEY `QUID` (`QUID`),
  ADD KEY `CAID` (`CAID`);

--
-- Indexes for table `userprovider`
--
ALTER TABLE `userprovider`
  ADD KEY `UID` (`UID`),
  ADD KEY `AID` (`ANID`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `ANID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CAID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `QUID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`QUID`) REFERENCES `questions` (`QUID`),
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`CAID`) REFERENCES `categories` (`CAID`);

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`CAID`) REFERENCES `questions` (`CAID`);

--
-- Constraints for table `responses`
--
ALTER TABLE `responses`
  ADD CONSTRAINT `responses_ibfk_3` FOREIGN KEY (`QUID`) REFERENCES `questions` (`QUID`),
  ADD CONSTRAINT `responses_ibfk_4` FOREIGN KEY (`CAID`) REFERENCES `categories` (`CAID`);

--
-- Constraints for table `userprovider`
--
ALTER TABLE `userprovider`
  ADD CONSTRAINT `userprovider_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `usertable` (`UID`) ON DELETE CASCADE,
  ADD CONSTRAINT `userprovider_ibfk_2` FOREIGN KEY (`ANID`) REFERENCES `answers` (`ANID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
