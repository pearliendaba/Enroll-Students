Create Table Student(
    StudentID int(6) primary key auto_increment,
    StudentName varchar(30) ,
    Email varchar(30),
    Date_Registered timestamp;
    Date_Edited timestamp;
);

Create Table Module(
    ModuleID int(6) primary key auto_increment,
    ModuleName varchar(30)
    
);

Create Table Enrollment(
    EnrollID int(6) primary key auto_increment,
    StudentID int(6),
    ModuleID int(6)


);

ALTER TABLE Enrollment
ADD CONSTRAINT FK_StudentID
FOREIGN KEY (StudentID) REFERENCES Student(StudentID);

ALTER TABLE Enrollment
ADD CONSTRAINT FK_ModuleID
FOREIGN KEY (ModuleID) REFERENCES Module(ModuleID);
