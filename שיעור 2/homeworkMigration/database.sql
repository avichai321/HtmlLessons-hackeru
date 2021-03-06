USE [master]
GO

/****** Object:  Database [Mighomework]    Script Date: 29/01/2022 21:59:05 ******/
CREATE DATABASE [Mighomework]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Mighomework', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Mighomework.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Mighomework_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\Mighomework_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Mighomework].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [Mighomework] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [Mighomework] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [Mighomework] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [Mighomework] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [Mighomework] SET ARITHABORT OFF 
GO

ALTER DATABASE [Mighomework] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [Mighomework] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [Mighomework] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [Mighomework] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [Mighomework] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [Mighomework] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [Mighomework] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [Mighomework] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [Mighomework] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [Mighomework] SET  DISABLE_BROKER 
GO

ALTER DATABASE [Mighomework] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [Mighomework] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [Mighomework] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [Mighomework] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [Mighomework] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [Mighomework] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [Mighomework] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [Mighomework] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [Mighomework] SET  MULTI_USER 
GO

ALTER DATABASE [Mighomework] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [Mighomework] SET DB_CHAINING OFF 
GO

ALTER DATABASE [Mighomework] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [Mighomework] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [Mighomework] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [Mighomework] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO

ALTER DATABASE [Mighomework] SET QUERY_STORE = OFF
GO

ALTER DATABASE [Mighomework] SET  READ_WRITE 
GO

