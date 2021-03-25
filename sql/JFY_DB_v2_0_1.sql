-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 25, 2021 at 02:47 AM
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
  `UID` int(11) NOT NULL,
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
  `category` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`CAID`, `category`) VALUES
(1, 'Mental Health'),
(2, 'General Health');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `QUID` int(11) NOT NULL,
  `CAID` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `question` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`QUID`, `CAID`, `title`, `question`) VALUES
(1, 1, 'Help Access', 'Is help accessible to you whenever you need it? \r\n'),
(2, 2, 'Daily Exercise Time', 'During the course of today, what is your targeted time you’ll spend  doing each of these activities?'),
(3, 1, 'Bi-weekly mental check', 'Over the past 2 weeks, how often have you felt down, depressed, or hopeless?');

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `RESPID` int(11) NOT NULL,
  `QUID` int(11) NOT NULL,
  `CAID` int(11) NOT NULL,
  `response_text` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`response_text`)),
  `response_weight` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`response_weight`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`RESPID`, `QUID`, `CAID`, `response_text`, `response_weight`) VALUES
(0, 1, 1, '{\"1\":\"Maybe\",\"2\":\"Yes\",\"3\":\"No\",\"4\":\"I\'m not sure\"}', '{\"1\":\"20\",\"2\":\"20\",\"3\":\"20\",\"4\":\"20\"}');

-- --------------------------------------------------------

--
-- Table structure for table `userprovider`
--

CREATE TABLE `userprovider` (
  `UID` int(11) NOT NULL,
  `DOB` date NOT NULL,
  `Weight` int(3) NOT NULL,
  `Height` int(4) NOT NULL,
  `Activity` varchar(20) NOT NULL,
  `Disease` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `FitScore` int(3) DEFAULT NULL,
  `DietScore` int(3) DEFAULT NULL,
  `MentalScore` int(3) DEFAULT NULL,
  `PersonalScore` int(3) DEFAULT NULL,
  `BMI` int(2) DEFAULT NULL,
  `PROVID` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userprovider`
--

INSERT INTO `userprovider` (`UID`, `DOB`, `Weight`, `Height`, `Activity`, `Disease`, `FitScore`, `DietScore`, `MentalScore`, `PersonalScore`, `BMI`, `PROVID`) VALUES
(12, '2021-03-10', 123, 121, 'light', 'None', NULL, NULL, NULL, NULL, NULL, 'QnJ5Y2Vz'),
(10, '2021-03-11', 123, 121, 'moderate', 'None', NULL, NULL, NULL, NULL, NULL, 'QVlP'),
(11, '2021-03-10', 123, 121, 'moderate', 'None', NULL, NULL, NULL, NULL, NULL, 'YWFh');

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `UID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `NewUser` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`UID`, `name`, `email`, `Password`, `NewUser`) VALUES
(7, 'Bryce', 'hello', 'WORKED', 0),
(8, 'Tester', 'EmailOfSomething', 'asdf', 0),
(9, 'fierybore', 'testing', 'test', 0),
(10, 'AYO', 'ahhhh', 'ahhhhh', 0),
(11, 'aaa', 'aaa', 'aaa', 0),
(12, 'Bryces', 'aaa', 'aa', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD KEY `QUID` (`QUID`),
  ADD KEY `CAID` (`CAID`),
  ADD KEY `UID` (`UID`);

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
  ADD PRIMARY KEY (`RESPID`),
  ADD KEY `QUID` (`QUID`),
  ADD KEY `CAID` (`CAID`);

--
-- Indexes for table `userprovider`
--
ALTER TABLE `userprovider`
  ADD PRIMARY KEY (`PROVID`),
  ADD KEY `UID` (`UID`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CAID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `QUID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`QUID`) REFERENCES `questions` (`QUID`),
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`CAID`) REFERENCES `categories` (`CAID`),
  ADD CONSTRAINT `answers_ibfk_3` FOREIGN KEY (`UID`) REFERENCES `usertable` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `userprovider_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `usertable` (`UID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
