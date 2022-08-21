-- users table 
create table users(
    user_id serial primary key,
    nom varchar(200) not null,
    email varchar(255) unique not null,
    password varchar(255) not null,
    jury Boolean,
    sup Boolean,
    adm Boolean,
     created_at date default current_date
);