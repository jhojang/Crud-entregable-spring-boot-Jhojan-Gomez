-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-08-2020 a las 02:39:50
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` bigint(20) NOT NULL,
  `apellido` varchar(255) DEFAULT NULL,
  `create_at` date DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- DAtos de prueba para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `apellido`, `create_at`, `email`, `nombre`) VALUES
(1, 'Lopez', '2020-08-21', 'ernesto@gmail.com', 'Ernesto'),
(3, 'Gonzales', '2020-08-21', 'juan@gmail.com', 'Pablo'),
(4, 'Murillo', '2020-08-21', 'adrian@gmail.com', 'Adrian'),
(5, 'Tamayo', '2020-08-21', 'roberto@gmail.com', 'Roberto'),
(8, 'Lopez', '2020-08-21', 'augusto@gmail.com', 'Augusto'),
(9, 'Cespedes', '2020-08-21', 'darwin@gmail.com', 'Darwin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
