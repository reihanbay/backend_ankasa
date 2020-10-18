-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2020 at 06:32 AM
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
-- Database: `ankasa`
--

-- --------------------------------------------------------

--
-- Table structure for table `airlines`
--

CREATE TABLE `airlines` (
  `id_airlines` int(11) NOT NULL,
  `name_airlines` varchar(255) NOT NULL,
  `price_child` varchar(255) NOT NULL,
  `price_adult` varchar(255) NOT NULL,
  `code` varchar(50) NOT NULL,
  `id_route_origin` int(11) NOT NULL,
  `id_route_destination` int(11) NOT NULL,
  `init_origin` varchar(50) NOT NULL,
  `init_destination` varchar(50) NOT NULL,
  `time_from` varchar(50) NOT NULL,
  `time_destination` varchar(50) NOT NULL,
  `terminal` varchar(50) NOT NULL,
  `class_airlines` enum('Economy','Business','First Class','') NOT NULL,
  `facilities` varchar(50) NOT NULL,
  `time_departure` varchar(255) NOT NULL,
  `image` text NOT NULL,
  `createAt` datetime DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `airlines`
--

INSERT INTO `airlines` (`id_airlines`, `name_airlines`, `price_child`, `price_adult`, `code`, `id_route_origin`, `id_route_destination`, `init_origin`, `init_destination`, `time_from`, `time_destination`, `terminal`, `class_airlines`, `facilities`, `time_departure`, `image`, `createAt`, `updateAt`) VALUES
(4, 'Garuda Indonesia  ', '500000', '1000000', 'AB-221', 2, 5, 'IDN', 'IDN', '12:50', '12:51', 'A', 'Economy', 'Wifi, Snack, Toilet', 'Monday, 12 Oct 2020', 'image-1602993495325-garuda indonesia.png', '2020-10-18 10:58:15', '2020-10-18 10:58:15'),
(5, 'Lion Air ', '300000', '700000', 'LA-014', 2, 5, 'IDN', 'IDN', '12:50', '12:51', 'C', 'Economy', 'Toilet', 'Monday, 12 Oct 2020', 'image-1602993691580-lion air.jpg', '2020-10-18 11:01:31', '2020-10-18 11:01:31'),
(6, 'Batik Air ', '500000', '800000', 'BA-064', 2, 5, 'IDN', 'IDN', '12:50', '12:51', 'E', 'Economy', 'Toilet, Wifi', 'Monday, 12 Oct 2020', 'image-1602993830112-batik air.jpg', '2020-10-18 11:03:50', '2020-10-18 11:03:50'),
(7, 'Citilink', '150000', '500000', 'CT-457', 2, 5, 'IDN', 'IDN', '12:50', '12:51', 'D', 'Economy', 'Toilet', 'Monday, 12 Oct 2020', 'image-1602993968119-citilink.png', '2020-10-18 11:06:08', '2020-10-18 11:06:08');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id_booking` int(11) NOT NULL,
  `id_airlines` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `total_price` varchar(255) NOT NULL,
  `status` enum('Waiting For Payment','Eticket Issued','','') NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`id_booking`, `id_airlines`, `id_user`, `total_price`, `status`, `createAt`, `updateAt`) VALUES
(5, 4, 2, '1000000', 'Waiting For Payment', '2020-10-18 11:16:20', '2020-10-18 11:16:20'),
(6, 4, 2, '1000000', 'Eticket Issued', '2020-10-18 11:16:54', '2020-10-18 11:16:54'),
(8, 7, 3, '800000', 'Waiting For Payment', '2020-10-18 11:17:50', '2020-10-18 11:17:50'),
(9, 7, 3, '800000', 'Eticket Issued', '2020-10-18 11:18:08', '2020-10-18 11:18:08');

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id_customer` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_routes` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `phone` int(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `post_code` int(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id_customer`, `id_user`, `id_routes`, `username`, `phone`, `address`, `post_code`, `image`, `createAt`, `updateAt`) VALUES
(5, 3, 11, 'rosyidadina', 819999999, 'Surabaya', 8070, 'image-1602995409773-PhotoGrid_1513923111543.jpg', '2020-10-18 11:11:35', '2020-10-18 11:11:35'),
(6, 2, 2, 'rizkimuhammad', 810888888, 'Jakarta', 8000, 'image-1602994403994-rizki.jpg', '2020-10-18 11:13:24', '2020-10-18 11:13:24'),
(7, 4, 8, 'ilhamaliyudin', 81033333, 'Bali', 8080, 'image-1602995097539-ilham.jpg', '2020-10-18 11:24:57', '2020-10-18 11:24:57'),
(8, 5, 5, 'reihanbayzaky', 81033333, 'Yogyakarta', 3000, 'image-1602995361516-reihan.jpg', '2020-10-18 11:26:03', '2020-10-18 11:26:03');

-- --------------------------------------------------------

--
-- Table structure for table `routes`
--

CREATE TABLE `routes` (
  `id_routes` int(11) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `routes`
--

INSERT INTO `routes` (`id_routes`, `city`, `country`, `image`) VALUES
(2, 'Jakarta', 'Indonesia', 'image-1602907381468-jkt.jpg'),
(5, 'Yogyakarta', 'Indonesia', 'image-1602907607256-yk.jpg'),
(6, 'Paris', 'France', 'image-1602907677384-paris.jpg'),
(7, 'Tokyo', 'Japan', 'image-1602919057780-tokyo.jpg'),
(8, 'Bali', 'Indonesia', 'image-1602919140815-bali.jpg'),
(9, 'New York', 'USA', 'image-1602919563930-newyork.jpg'),
(10, 'Makkah', 'Saudi Arabia', 'image-1602920313806-makkah.jpg'),
(11, 'Surabaya', 'Indonesia', 'image-1602920411571-surabaya.jpg'),
(12, 'London', 'English', 'image-1602920756755-london.jpg'),
(13, 'Bangkok', 'Thailand', 'image-1602921349521-bangkok.jpg'),
(14, 'Singapore', 'Singapore', 'image-1602921607498-singapore.jpg'),
(15, 'Kuala Lumpur', 'Malaysia', 'image-1602921724264-kualalumpur.jpg'),
(16, 'Palembang', 'Indonesia', 'image-1602922036837-palembang.jpg'),
(17, 'Lombok', 'Indonesia', 'image-1602922133527-lombok.jpg'),
(18, 'Osaka', 'Japan', 'image-1602922355007-osaka.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `user_role` int(11) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `fullname`, `email`, `password`, `user_role`, `createAt`, `updateAt`) VALUES
(2, 'Muhammad Rizki', 'rizkimuhammad2301@gmail.com', '$2a$10$CVTv7QVqP2tNSZdxxDKEve7St9LOphvrWdyVRCDBmLuvcy.aGR0mS', 1, '2020-10-17 22:32:00', '2020-10-17 22:32:00'),
(3, 'Rosyida Widadina Ulya', 'rosyida@gmail.com', '$2a$10$UbZX1mtyHf.m3vZdK9b0pueYcX5AU.znDIG9cD9UDtD/A1i1Pf.8S', 1, '2020-10-18 11:08:19', '2020-10-18 11:08:19'),
(4, 'Ilham Aliyudin', 'ilham@gmail.com', '$2a$10$UeP8XYEmCVC9S.P7XCIjq.6..Dvx3fuZDTeP3qDUguKWc0wqJ1dPK', 1, '2020-10-18 11:22:19', '2020-10-18 11:22:19'),
(5, 'Reihan Bayzaky ', 'reihan@gmail.com', '$2a$10$UI/ia/zJQGSl1dpC0DJb9utbdKt6ibt1.vA6/mbyFwZya7Nk28umW', 1, '2020-10-18 11:22:56', '2020-10-18 11:22:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `airlines`
--
ALTER TABLE `airlines`
  ADD PRIMARY KEY (`id_airlines`),
  ADD KEY `id_route_origin` (`id_route_origin`),
  ADD KEY `id_route_destination` (`id_route_destination`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id_booking`),
  ADD KEY `id_airlines` (`id_airlines`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id_customer`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `routes`
--
ALTER TABLE `routes`
  ADD PRIMARY KEY (`id_routes`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `airlines`
--
ALTER TABLE `airlines`
  MODIFY `id_airlines` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id_booking` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id_customer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `routes`
--
ALTER TABLE `routes`
  MODIFY `id_routes` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
