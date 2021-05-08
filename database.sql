create database Vibranium;

use Vibranium;

-- creating user table
create table Users(
    name varchar(40),
    age int(5),
    gender varchar(10),
    bio varchar(500),
    username varchar(50),
    mail_id varchar(40) primary key,
    password varchar(255),
    state varchar(50),
    city varchar(50),
    pinCode int(6),
    address varchar(255),
    interests varchar(1000)
);

