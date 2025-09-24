

--
-- Database: `converter`
--
CREATE DATABASE IF NOT EXISTS `converter` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `converter`;

-- --------------------------------------------------------

--
-- Table structure for table `grades`
--

DROP TABLE IF EXISTS `grades`;
CREATE TABLE IF NOT EXISTS `grades` (
  `nGradeID` tinyint(4) NOT NULL AUTO_INCREMENT,
  `cDenmark` varchar(2) NOT NULL,
  `cUSA` varchar(2) NOT NULL,
  PRIMARY KEY (`nGradeID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `grades`
--

INSERT INTO `grades` (`nGradeID`, `cDenmark`, `cUSA`) VALUES
(1, '12', 'A+'),
(2, '10', 'A'),
(3, '7', 'B'),
(4, '4', 'C'),
(5, '02', 'D'),
(6, '00', 'F'),
(7, '-3', 'F');
