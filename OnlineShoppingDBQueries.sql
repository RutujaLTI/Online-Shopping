--drop database OnlineShopping
create database OnlineShopping

use OnlineShopping

create table Users
(
UserId int identity(1,1) primary key,
UserName varchar(100),
UserEmail varchar(100) unique,
UserPhone varchar(100) unique,
UserPassword varchar(100),
UserRole varchar(10) default 'User' check (UserRole in ('User','Retailer') ),
IsActive varchar(3) default 'Yes'
)



create table Category
(
CategoryId int identity(1,1) primary key,
CategoryName varchar(255) not null
)


create table Retailers
(
RetailerId int foreign key references Users(UserId) primary key,
RetailerRevenue decimal default 0
)


create table Products
(
ProductId int identity(101,1) primary key,
ProductName varchar(100),
ProductDescription varchar(8000),
ProductPrice decimal,
ProductStock int,
ProductImg1 varchar(1000),
ProductImg2 varchar(1000),
ProductImg3 varchar(1000),
ProductImg4 varchar(1000),
ProductBrand varchar(255),
CategoryId int foreign key references Category(CategoryId),
RetailerId int foreign key references Users(UserId),
ProductStatus varchar(100),
ProductRemark varchar(8000)
)

create table Orders
(
OrderId int identity(1000,1) primary key,
UserId int foreign key references Users(UserId),
OrderTotal decimal,
OrderAddress varchar(8000),
OrderDate date
)

create table OrderDetails
(
OrderId int foreign key references Orders(OrderId),
ProductId int foreign key references Products(ProductId),
Quantity int,
Price decimal,
primary key(OrderId,ProductId)
)


create table Cart
(
UserId int foreign key references Users(UserId),
ProductId int foreign key references Products(ProductId),
Quantity int,
primary key(UserId,ProductId)
)

create table Wishlist
(
UserId int foreign key references Users(UserId),
ProductId int foreign key references Products(ProductId),
primary key(UserId,ProductId)
)

-------------------------------------------------------------------- Stored Procedures------------------------------------------

--User Module--

--select * from Users

create proc proc_signup(@name varchar(100),@email varchar(100),@phone varchar(100),@password varchar(100))
as
insert into Users (UserName,UserEmail,UserPhone,UserPassword) values(@name,@email,@phone,@password);

create proc proc_login_check(@username varchar(100),@password varchar(100))
as
select * from Users where UserEmail=@username and UserPassword=@password

create proc proc_edit_user(@id int,@name varchar(100),@email varchar(100),@phone varchar(100))
as
update Users set UserName=@name,UserEmail=@email,UserPhone=@phone where UserId=@id;

create proc proc_change_password(@id int,@password varchar(255))
as
update Users set UserPassword=@password where UserId=@id;

create proc proc_deactivate_account(@id int,@password varchar(255))
as
update Users set IsActive='No' where UserId=@id and UserPassword=@password;

-----------------------------
--Retailer module

create proc proc_add_retailer(@name varchar(100),@email varchar(100),@phone varchar(100))
as
insert into Users (UserName,UserEmail,UserPhone,UserPassword,UserRole) values(@name,@email,@phone,'newuser123','Retailer');


---------------------------------

--Category module

create proc proc_add_category(@category varchar(255))
as
begin
	insert into Category(CategoryName) values(@category);
end

create proc proc_remove_category(@category varchar(255))
as
begin
	delete from Category where CategoryName=@category;
end


----------------------------------

--Wishlist module

create proc proc_add_to_wishlist(@userid int, @productid int)
as
begin
	insert into Wishlist (UserId,ProductId) values(@userid,@productid);
end

create proc proc_remove_from_wishlist(@userid int, @productid int)
as
begin
	delete from Wishlist where UserId=@userid and ProductId=@productid;
end

---------------------------------------

--Cart module--

create proc add_to_cart(@userid int,@productid int,@quantity int)
as
insert into Cart values(@userid,@productid,@quantity)

create proc remove_from_cart(@userid int,@productid int)
as
delete from cart where UserId=@userid and ProductId=@productid

create proc modify_quantity_in_cart(@userid int,@productid int,@quantity int)
as
update cart set Quantity=@quantity where UserId=@userid and ProductId=@productid

---------------------------------------------

--Product module--

create proc proc_insert_products(@name varchar(100),@description varchar(8000),@price decimal,@stock int,@img1 varchar(1000),
@img2 varchar(1000),@img3 varchar(1000),@img4 varchar(1000),@brand varchar(255),@categoryid int,@retailerid int)
as
begin
	insert into Products (ProductName,ProductDescription,ProductPrice,ProductStock,ProductImg1,ProductImg2,ProductImg3,ProductImg4,ProductBrand,CategoryId,RetailerId) 
	values(@name,@description,@price,@stock,@img1,@img2,@img3,@img4,@brand,@categoryid,@retailerid);
end

---------------------------------------------

--Orders module--

create proc place_order(@userid int,@total decimal,@address varchar(8000),@date date)
as
insert into Orders (UserId,OrderTotal,OrderAddress,OrderDate) values (@userid,@total,@address,@date)

-----------------------------------------------

--Order details--

create proc place_order_add_orderdetails(@orderid int,@productid int,@quantity int,@price decimal)
as
insert into OrderDetails (OrderId,ProductId,Quantity,Price) values (@orderid,@productid,@quantity,@price)

