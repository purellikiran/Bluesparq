-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2021 at 03:46 PM
-- Server version: 10.1.35-MariaDB
-- PHP Version: 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `task_allocation`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `task_name` varchar(255) NOT NULL,
  `task_description` varchar(255) NOT NULL,
  `priority` text NOT NULL,
  `target_date` text NOT NULL,
  `created_date` text NOT NULL,
  `user_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `task_name`, `task_description`, `priority`, `target_date`, `created_date`, `user_id`) VALUES
(1, 'ddasss', 'fawwwww', 'Medium', '2021-02-26', 'undefined', 3),
(2, 'Task1', 'ddaeee', 'Low', '26-02-2021', 'undefined', 5),
(3, 'task2', 'Desc', 'Medium', '27-02-2021', '25-02-2021', 8);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(8) NOT NULL,
  `name` varchar(50) NOT NULL,
  `phone` int(11) NOT NULL,
  `address` text NOT NULL,
  `city` text NOT NULL,
  `state` text NOT NULL,
  `zip` int(10) NOT NULL,
  `type` varchar(1) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `phone`, `address`, `city`, `state`, `zip`, `type`, `status`) VALUES
(1, 'admin@tech.com', '12345678', 'Smith', 999999999, 'Address', 'Mumbai', 'State', 1234567, 'M', 1),
(3, 'John@tech.com', '12345678', 'John', 999999999, 'Address', 'City', 'State', 1234567, 'U', 1),
(4, 'dc@test.com', 'f31otodn', 'kkjj', 2147483647, 'adress', 'city', 'state', 245566, 'U', 1),
(5, 'dddc@test.com', 'ragfcaya', 'kkjj', 2147483647, 'adress', 'city', 'state', 245566, 'U', 1),
(6, 'root@tec.com', 'nn0xyuhh', 'Root', 2147483647, 'adress', 'city', 'state', 245563, 'U', 1),
(8, 'dddaac@test.com', 'b3ejgl04', 'kkjj', 2147483647, 'adress', 'city', 'state', 245566, 'U', 1),
(9, 'dadddc@test.com', 'm6x67l5p', 'kkjj', 2147483647, 'adress', 'city', 'state', 245566, 'U', 1),
(10, 'daddaaadc@test.com', 'p590h1ua', 'kkjjsssss', 2147483647, 'adress', 'city', 'state', 245566, 'U', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
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
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
