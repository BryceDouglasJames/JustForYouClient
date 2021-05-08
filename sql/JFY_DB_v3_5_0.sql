-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 09, 2021 at 01:49 AM
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
  `AID` int(11) NOT NULL,
  `CAID` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `question` varchar(200) NOT NULL,
  `answer` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`answer`)),
  `answer_weight` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`answer_weight`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`AID`, `CAID`, `title`, `question`, `answer`, `answer_weight`) VALUES
(3, 1, 'Another test', 'Hey, this is some question. Can you see it?', '{\"1\":\"YES\", \"2\":\"NO\", \"3\":\"MAYBE\", \"4\":\"HAAA\"}', '{\"1\":\"50\", \"2\":\"50\", \"3\":\"50\", \"4\":\"50\"}'),
(4, 1, 'So this is a mental question', 'Hey there is this working or what', '{\"1\":\"HEYAAAA\", \"2\":\"AYOOOOOO\"}', '{\"1\":\"23\",\"2\":\"76\"}'),
(5, 4, 'HEYYY FIT GUY', 'Oh bioy youre fit, can i get a number??', '{\"1\":\"NO\"}', '{\"1\":\"67\"}'),
(6, 2, 'GENRAL RELATIVE', 'HI IS YOUR RELATIVE GENERAL OR NO, CHOOSE WISELY', '{\"1\":\"YES\",\"2\":\"YES\",\"3\":\"YES\",\"4\":\"YES\"}', '{\"1\":\"40\",\"2\":\"55\",\"3\":\"90\",\"4\":\"30\"}'),
(7, 3, 'You on a diet?', 'Diet Test', '{\"1\":\"Take that back :(\"}', '{\"1\":\"99\"}'),
(8, 2, 'Hand Washing', 'How many times a day do you wash your hands?', '{\"1\":\"Rarely\", \"2\":\"Sometimes\", \"3\":\"Often\", \"4\":\"Always\"}', '{\"1\":\"56\", \"2\":\"68\", \"3\":\"50\", \"4\":\"79\"}'),
(9, 2, 'Todays Health', 'How would you rate your health and today/how well did you sleep?', '{\"1\":\"Pretty poor\", \"2\":\"Fair\", \"3\":\"Good\", \"4\":\"Excellent!\"}', '{\"1\":\"55\", \"2\":\"68\", \"3\":\"72\", \"4\":\"90\"}'),
(10, 2, 'Parental Relation', 'How satisfied are with your relationship with your parents/guardians?', '{\"1\":\"Not Satisfied at all\", \"2\":\"Not satisfied\", \"3\":\"Satisfied\", \"4\":\"Totally satisfied\"}', '{\"1\":\"70\", \"2\":\"70\", \"3\":\"85\", \"4\":\"89\"}'),
(11, 2, 'Family Time', 'How many days a week do you usually spend time with your close friends and family?', '{\"1\":\"0 - 1 day(s)\", \"2\":\"2 - 3 days\", \"3\":\"4 - 5 daysM\", \"4\":\"6 - 7 days\"}', '{\"1\":\"37\", \"2\":\"56\", \"3\":\"73\", \"4\":\"81\"}'),
(12, 1, 'Therapist', 'Do you have access to a therapist? If Yes, when was the last time you visited your therapist?', '{\"1\":\"Today or yesterday\",\"2\":\"More than two days ago\",\"3\":\"More than seven days ago\",\"4\":\"I never attended a therapy sessions\"}', '{\"1\":\"82\",\"2\":\"74\",\"3\":\"67\",\"4\":\"60\"}'),
(13, 1, 'Feeling Down', 'Over the past 2 weeks, how often have you felt down, depressed, or hopeless? \r\n', '{\"1\":\"Not at all\",\"2\":\"Several days\",\"3\":\"More days than not\",\"4\":\"Nearly every day \"}', '{\"1\":\"91\",\"2\":\"81\",\"3\":\"78\",\"4\":\"60\"}'),
(14, 1, 'Terrible Occurrence', 'How often do you experience a terrible occurrence that impacts you significantly?', '{\"1\":\"Never\",\"2\":\"Sometimes\",\"3\":\"Often\",\"4\":\"Always\"}\r\n', '{\"1\":\"93\",\"2\":\"83\",\"3\":\"72\",\"4\":\"45\"}\r\n'),
(15, 1, 'Stress Level', 'Please select the choice that best describes how much distress you have been experiencing in the past week including today.', '{\"1\":\"No distress\",\"2\":\"Moderate distress\",\"3\":\"Extreme distress\",\"4\":\"Decline to answer\"}\r\n', '{\"1\":\"88\",\"2\":\"80\",\"3\":\"71\",\"4\":\"50\"}\r\n'),
(16, 4, 'Sitting', 'Over the course of the day how much time did you spend sitting?\r\n', '{\"1\":\"0-4 hours\",\"2\":\"4-8 hours\",\"3\":\"8-11 hours\",\"4\":\"More than 11 hours\"}', '{\"1\":\"83\",\"2\":\"74\",\"3\":\"57\",\"4\":\"43\"}'),
(17, 4, 'Fitness Rate', 'On a scale of 1-10 how would you rate your physical fitness?\r\n', '{\"1\":\"1\",\"2\":\"2-4\",\"3\":\"5-7\",\"4\":\"8-10\"}', '{\"1\":\"45\",\"2\":\"57\",\"3\":\"78\",\"4\":\"84\"}'),
(20, 4, 'Alternative Transportation', 'I use alternate types of transportation whenever possible (e.g. walking or bike-riding)?', '{\"1\":\"Never\",\"2\":\"Rarely\",\"3\":\"Sometimes\",\"4\":\"Often\",\"5\":\"All the time\"}', '{\"1\":\"53\",\"2\":\"59\",\"3\":\"67\",\"4\":\"79\", \"5\":\"95\"}'),
(21, 4, 'Heart Rate', 'Did you have a small, moderate, or large increase, or no increase at all in your heart rate or breathing during physical activities?', '{\"1\":\"Small\",\"2\":\"Moderate\",\"3\":\"Large\",\"4\":\"None\"}', '{\"1\":\"66\",\"2\":\"72\",\"3\":\"84\",\"4\":\"50\"}'),
(22, 3, 'Vegetables Serving', 'How often do you eat a serving of vegetables?', '{\"1\":\"1 per day\",\"2\":\"2-4 per day\",\"3\":\"3-4 per day\",\"4\":\"4-more per day\", \"5\":\"Can\'t eat them...\"}', '{\"1\":\"67\",\"2\":\"78\",\"3\":\"86\",\"4\":\"92\",\"5\":\"50\"}'),
(23, 3, 'Sweet Drinks', 'How many sodas and sugar sweetened drinks (regular, not diet) did you drink each day?', '{\"1\":\"0 drink per day\",\"2\":\"1 drink per day\",\"3\":\"2 drinks per day\",\"4\":\"3 or more sweet drinks\"}', '{\"1\":\"94\",\"2\":\"80\",\"3\":\"63\",\"4\":\"54\"}'),
(24, 3, 'Breakfast', 'How often do you eat breakfast, more than just a roll and a cup of coffee? ', '{\"1\":\"Eat breakfast every day\",\"2\":\"Eat breakfast most mornings\",\"3\":\"Eat breakfast two or three times per week\",\"4\":\"Seldom or never eat breakfast\"}', '{\"1\":\"87\",\"2\":\"76\",\"3\":\"70\",\"4\":\"62\"}'),
(25, 3, 'Eating Choices', 'How difficult has it been for you to make healthy eating choices this week?\r\n', '{\"1\":\"Very easy\",\"2\":\"Easy\",\"3\":\"Neither easy nor difficult\",\"4\":\"Difficult\", \"5\":\"Very difficult\"}', '{\"1\":\"91\",\"2\":\"83\",\"3\":\"77\",\"4\":\"66\", \"5\":\"60\"}');

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
(2, 'General Health'),
(3, 'Diet Health'),
(4, 'Fitness');

-- --------------------------------------------------------

--
-- Table structure for table `moderator`
--

CREATE TABLE `moderator` (
  `MODID` int(11) NOT NULL,
  `REQID` int(11) NOT NULL,
  `POSTID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `requestslog`
--

CREATE TABLE `requestslog` (
  `REQID` int(11) NOT NULL,
  `Time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Method` varchar(10) NOT NULL,
  `Path` varchar(100) NOT NULL,
  `Error` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `responses`
--

CREATE TABLE `responses` (
  `REID` int(11) NOT NULL,
  `UID` int(11) DEFAULT NULL,
  `AID` int(11) DEFAULT NULL,
  `CAID` int(11) DEFAULT NULL,
  `UserChoice` int(11) NOT NULL,
  `ChoiceWeight` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `responses`
--

INSERT INTO `responses` (`REID`, `UID`, `AID`, `CAID`, `UserChoice`, `ChoiceWeight`) VALUES
(30, 21, 3, 4, 4, 50),
(31, 21, 3, 4, 1, 50),
(32, 21, 3, 4, 1, 50),
(33, 21, 3, 4, 1, 50),
(34, 21, 3, 4, 4, 50),
(35, 21, 3, 4, 3, 50),
(36, 21, 3, 4, 4, 50),
(37, 21, 3, 4, 1, 50),
(38, 21, 3, 4, 2, 50),
(39, 21, 3, 4, 4, 50),
(40, 21, 3, 4, 4, 50),
(41, 21, 3, 4, 3, 50),
(42, 21, 3, 4, 4, 50),
(43, 21, 3, 4, 4, 50),
(44, 21, 3, 4, 1, 50),
(45, 21, 3, 4, 1, 50),
(46, 21, 4, 1, 2, 76),
(47, 21, 6, 2, 3, 90),
(48, 21, 3, 1, 2, 50),
(49, 21, 6, 2, 1, 40),
(50, 21, 5, 4, 1, 67),
(51, 21, 5, 4, 1, 67),
(52, 21, 3, 1, 1, 50),
(53, 21, 4, 1, 1, 23),
(55, 49, 3, 1, 3, 50),
(56, 49, 6, 2, 3, 90),
(57, 49, 7, 3, 1, 99),
(58, 50, 9, 2, 3, 72),
(59, 50, 6, 2, 1, 40),
(60, 51, 20, 4, 3, 67),
(61, 51, 12, 1, 4, 60),
(62, 51, 25, 3, 4, 66),
(63, 51, 11, 2, 2, 56),
(64, 50, 13, 1, 3, 78);

-- --------------------------------------------------------

--
-- Table structure for table `suggestions`
--

CREATE TABLE `suggestions` (
  `SUGID` int(11) NOT NULL,
  `CAID` int(11) NOT NULL,
  `Suggestion` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `suggestions`
--

INSERT INTO `suggestions` (`SUGID`, `CAID`, `Suggestion`) VALUES
(5, 2, 'Manage your weight periodically'),
(6, 2, 'Cut down on your salt'),
(7, 2, 'Be more kind to yourself and make time for yourself.'),
(8, 2, 'Plan ahead with a weekly or daily goal in order to reduce stress '),
(9, 2, 'Make time for family and loved ones. Or even give them a call and see how they are.'),
(10, 4, 'Do 150 minutes of moderate-intensity aerobic activity every week. Fit it in where you can, such as by cycling to work.'),
(11, 4, 'Keep your sleep schedule consistent. Aim for a minimum of 6 hours of sleep'),
(12, 4, 'Be mindful of how much time you spend sitting. Aim for 4 hours a day or less if possible.\r\n'),
(13, 4, 'Try and take a hike. Walk at different speeds throughout the trail and monitor your heart rate and calories burned.'),
(14, 4, 'Understand the basics towards building muscles. It is very important you do so to avoid injuries!'),
(15, 1, '\"You don\'t have to see the whole staircase, just take the first step.\" - Martin Luther King, Jr. '),
(16, 1, 'Show some love to someone in your life, human or animal.'),
(17, 1, ' Sometimes, we don\'t need to add new activities to get more pleasure. Focus on doing what you love.'),
(18, 1, 'Has something been bothering you? Let it all out…on paper. Writing about upsetting experiences can reduce symptoms of depression.'),
(19, 1, 'Try laughing more and listening to other people and what they have to say. It can make a world of difference.'),
(20, 3, 'Do not skip breakfast. Skipping breakfast will not help you lose weight and it puts you back to sleep.'),
(21, 3, 'Drink plenty of water or other calorie-free beverages.'),
(22, 3, 'Be Choosy About Bed Time Snacks. If you eat too much junk, you will wake up feeling sick. Acid reflux can arise. Choose smart.\r\n'),
(23, 3, 'Dining Out? Try Kid Portions! Sometimes eating so much food in one sitting can lessen your appetite. Try eating on a consistent schedule. \r\n'),
(24, 3, 'Swap Pasta for Veggies if you can. Trust me, it is worth it.\r\n');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `PROVID` varchar(50) NOT NULL,
  `UID` int(11) NOT NULL,
  `DOB` date NOT NULL,
  `Weight` int(3) NOT NULL,
  `Height` int(4) NOT NULL,
  `Activity` varchar(20) NOT NULL,
  `Disease` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `BMI` float DEFAULT NULL,
  `ProfilePic` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`PROVID`, `UID`, `DOB`, `Weight`, `Height`, `Activity`, `Disease`, `BMI`, `ProfilePic`) VALUES
('dXd1', 49, '2012-06-12', 123, 69, 'heavy', 'None', 18.2, NULL),
('QnJ5Y2U=', 51, '1999-12-14', 184, 75, 'light', 'None', 23, NULL),
('SG9wZQ==', 42, '2020-01-01', 69, 69, 'heavy', 'None', NULL, 'C:fakepath	estpng.png'),
('SGV5VGhlcmU=', 21, '2021-04-09', 180, 74, 'moderate', 'None', 23.1, NULL),
('VGVzdA==', 50, '2020-10-02', 123, 121, 'light', 'None', 5.9, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `userposts`
--

CREATE TABLE `userposts` (
  `POSTID` int(11) NOT NULL,
  `UID` int(11) DEFAULT NULL,
  `CID` int(11) DEFAULT NULL,
  `title` varchar(50) NOT NULL,
  `author` varchar(50) DEFAULT NULL,
  `likes` int(11) NOT NULL DEFAULT 0,
  `image` varchar(255) DEFAULT NULL,
  `body` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userposts`
--

INSERT INTO `userposts` (`POSTID`, `UID`, `CID`, `title`, `author`, `likes`, `image`, `body`, `created_at`, `updated_at`) VALUES
(17, 42, 2, 'asasas', 'Hope', 3, '', 'ssss', '2021-05-03 22:59:45', '2021-04-26 03:02:08'),
(19, 42, 4, '!!!', 'Hope', 1, '', 'HI!!!', '2021-05-05 09:17:20', '2021-04-26 03:14:28'),
(37, 21, 3, 'HEYYY', 'HeyThere', 2, '', 'Hello :_)', '2021-05-08 19:42:54', '2021-05-04 10:41:46'),
(38, 21, 4, 'YOOO', 'HeyThere', 0, '', 'Hey!', '2021-05-04 10:47:08', '2021-05-04 10:47:08'),
(39, 21, 4, 'Fitness gang', 'HeyThere', 0, '', 'OIIII', '2021-05-04 22:12:53', '2021-05-04 22:12:53'),
(41, 49, 3, 'AHAAA', 'uwu', 2, '', ':3', '2021-05-08 19:42:57', '2021-05-05 12:27:07'),
(42, 49, 2, 'PEROSNAL', 'uwu', 0, '', 'ANOTHER TEST', '2021-05-05 12:29:33', '2021-05-05 12:29:33');

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `UID` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `NewUser` tinyint(1) NOT NULL,
  `last_login` timestamp NULL DEFAULT current_timestamp(),
  `last_logout` timestamp NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`UID`, `name`, `email`, `Password`, `NewUser`, `last_login`, `last_logout`) VALUES
(21, 'HeyThere', 'Howdy', '79645a9814848b22ba8d4ea02dc78f02188ddd38be6f9432eec249b913bb63ad', 0, '2021-05-07 00:27:45', '2021-04-18 04:33:15'),
(42, 'Hope', 'Hope@Hope', '2771cfda27aace76aa2829cb99922c3f2b432a9d796a0dc8adcd5a3da43b4e25', 0, '2021-05-04 02:57:25', '0000-00-00 00:00:00'),
(49, 'uwu', 'uwu@uwu', '9497430a5751b9ce4f03a96f27c4e7c806a33afa937d385dc8e6fe68b8a9ec3a', 0, '2021-05-05 12:38:34', '0000-00-00 00:00:00'),
(50, 'Test', 'Test@Test', 'b3378761bcb08b0c6139e717be44acfddaf21f13f7f404124aa295dd8aeaee12', 0, '2021-05-09 00:33:41', '0000-00-00 00:00:00'),
(51, 'Bryce', 'Test@test.com', '95fb2f71759260e02f0cb8b3979fc1d7e91979105d5c2af96f3cc0c77b084ea2', 0, '2021-05-08 21:37:47', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `weeklyscores`
--

CREATE TABLE `weeklyscores` (
  `SCOREID` varchar(50) NOT NULL,
  `UID` int(11) NOT NULL,
  `Monday` float DEFAULT NULL,
  `Tuesday` float DEFAULT NULL,
  `Wednesday` float DEFAULT NULL,
  `Thursday` float DEFAULT NULL,
  `Friday` float DEFAULT NULL,
  `Saturday` float DEFAULT NULL,
  `Sunday` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `weeklyscores`
--

INSERT INTO `weeklyscores` (`SCOREID`, `UID`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`) VALUES
('Diet_dXd1', 49, 0, 0, 98, 0, 0, 0, 0),
('Diet_QnJ5Y2U=', 51, 0, 0, 0, 0, 0, 65, 0),
('Diet_SGV5VGhlcmU=', 21, 0, 0, 0, 0, 40, 80, 0),
('Diet_VGVzdA==', 50, 0, 0, 0, 0, 0, 0, 0),
('Fitness_dXd1', 49, 0, 0, 0, 0, 0, 0, 0),
('Fitness_QnJ5Y2U=', 51, 0, 0, 0, 0, 0, 66, 0),
('Fitness_SGV5VGhlcmU=', 21, 49, 50, 51, 0, 0, 80, 0),
('Fitness_VGVzdA==', 50, 0, 0, 0, 0, 0, 0, 0),
('Mental_dXd1', 49, 0, 0, 49, 0, 0, 0, 0),
('Mental_QnJ5Y2U=', 51, 0, 0, 0, 0, 0, 59, 0),
('Mental_SGV5VGhlcmU=', 21, 62, 0, 49, 0, 40, 0, 0),
('Mental_VGVzdA==', 50, 0, 0, 0, 0, 0, 77, 0),
('Personal_dXd1', 49, 0, 0, 89, 0, 0, 0, 0),
('Personal_QnJ5Y2U=', 51, 0, 0, 0, 0, 0, 55, 0),
('Personal_SGV5VGhlcmU=', 21, 89, 64, 0, 0, 0, 0, 0),
('Personal_VGVzdA==', 50, 0, 0, 0, 0, 0, 55, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`AID`),
  ADD KEY `CAID` (`CAID`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`CAID`);

--
-- Indexes for table `moderator`
--
ALTER TABLE `moderator`
  ADD PRIMARY KEY (`MODID`),
  ADD KEY `REQID` (`REQID`),
  ADD KEY `POSTID` (`POSTID`);

--
-- Indexes for table `requestslog`
--
ALTER TABLE `requestslog`
  ADD PRIMARY KEY (`REQID`);

--
-- Indexes for table `responses`
--
ALTER TABLE `responses`
  ADD PRIMARY KEY (`REID`),
  ADD KEY `UID` (`UID`,`AID`),
  ADD KEY `AID` (`AID`),
  ADD KEY `CID` (`CAID`);

--
-- Indexes for table `suggestions`
--
ALTER TABLE `suggestions`
  ADD PRIMARY KEY (`SUGID`),
  ADD KEY `CID` (`CAID`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`PROVID`),
  ADD KEY `UID` (`UID`);

--
-- Indexes for table `userposts`
--
ALTER TABLE `userposts`
  ADD PRIMARY KEY (`POSTID`),
  ADD KEY `UID` (`UID`),
  ADD KEY `CID` (`CID`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`UID`);

--
-- Indexes for table `weeklyscores`
--
ALTER TABLE `weeklyscores`
  ADD PRIMARY KEY (`SCOREID`),
  ADD KEY `UID` (`UID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `AID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `CAID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `requestslog`
--
ALTER TABLE `requestslog`
  MODIFY `REQID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `responses`
--
ALTER TABLE `responses`
  MODIFY `REID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT for table `suggestions`
--
ALTER TABLE `suggestions`
  MODIFY `SUGID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `userposts`
--
ALTER TABLE `userposts`
  MODIFY `POSTID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `UID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`CAID`) REFERENCES `categories` (`CAID`);

--
-- Constraints for table `requestslog`
--
ALTER TABLE `requestslog`
  ADD CONSTRAINT `requestslog_ibfk_1` FOREIGN KEY (`REQID`) REFERENCES `moderator` (`REQID`);

--
-- Constraints for table `responses`
--
ALTER TABLE `responses`
  ADD CONSTRAINT `responses_ibfk_1` FOREIGN KEY (`AID`) REFERENCES `answers` (`AID`),
  ADD CONSTRAINT `responses_ibfk_3` FOREIGN KEY (`CAID`) REFERENCES `categories` (`CAID`),
  ADD CONSTRAINT `responses_ibfk_4` FOREIGN KEY (`UID`) REFERENCES `usertable` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `suggestions`
--
ALTER TABLE `suggestions`
  ADD CONSTRAINT `suggestions_ibfk_1` FOREIGN KEY (`CAID`) REFERENCES `categories` (`CAID`);

--
-- Constraints for table `userdata`
--
ALTER TABLE `userdata`
  ADD CONSTRAINT `userdata_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `usertable` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `userposts`
--
ALTER TABLE `userposts`
  ADD CONSTRAINT `userposts_ibfk_3` FOREIGN KEY (`CID`) REFERENCES `categories` (`CAID`),
  ADD CONSTRAINT `userposts_ibfk_4` FOREIGN KEY (`UID`) REFERENCES `usertable` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `weeklyscores`
--
ALTER TABLE `weeklyscores`
  ADD CONSTRAINT `weeklyscores_ibfk_1` FOREIGN KEY (`UID`) REFERENCES `usertable` (`UID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
