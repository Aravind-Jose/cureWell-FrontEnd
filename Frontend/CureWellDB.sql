create database capstoneproject

use capstoneproject


create table Doctor
( DoctorID int constraint pk_DoctorID primary key identity(1001,1),
DoctorName varchar(25) constraint notnull_DoctorName not null
)

insert into Doctor values
( 'Albert'),
('Olivia'),
('Susan')


create table Specialization
(
SpecializationCode char(3) constraint pk_SpecializationCode primary key,
SpecializationName varchar(20) constraint notnull_SpecializationName not null,
)

insert into Specialization values
('GYN', 'Gynecologist'),
('CAR','Cardiologist'),
('ANE','Anesthesiologist')

 
create table DoctorSpecialization
(
    DoctorID int,
    SpecializationCode char(3),
    SpecializationDate date constraint notnull_SpecializationDate not null,
    constraint pk_DoctorSpecialization primary key (DoctorID, SpecializationCode),
    foreign key (DoctorID) references Doctor(DoctorID),
    foreign key (SpecializationCode) references Specialization(SpecializationCode)
)

insert into DoctorSpecialization values
('1001', 'ANE','2010-01-01'),
('1002','CAR','2010-01-01'),
('1003','CAR','2010-01-01')

 

create table Surgery
(
SurgeryID int constraint pk_SurgeryID primary key identity(5000,1),
DoctorID int foreign key references Doctor(DoctorID)constraint notnull_DoctorId not null,
SurgeryDate Date constraint notnull_SurgeyDate not null,
StartTime decimal(4,2)  not null,
EndTime decimal(4,2)  not null,
SurgeryCategory char(3) constraint notnull_SurgeryCategory not null
)

insert into Surgery values
( '1001','2011-01-01', '09.00','14.00', 'ANE'),
( '1002','2015-01-01', '10.00','16.00', 'CAR')


select * from Doctor
select * from Specialization
select *from DoctorSpecialization
select * from Surgery