Password for Add Page is AdminLogin123

When inputing image name into text box on add page, please refer to one of the images below
flip.png
iphone10.png
iphone12.png
j4.png
s8.png

create DATABASE Phone;
 
 USE Phone;
 
 create table Phone (
 id int auto_increment primary key,
 Make varchar(20),
 Model varchar(20),
 Price int,
 image varchar (255),
 about varchar(255)

 );

DROP TABLE Phone;

SELECT * from Phone;