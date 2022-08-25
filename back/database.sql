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
create table etudiants(
    id serial primary key,
    nom varchar(200) not null,
    number integer unique not null,
    opt varchar(20) not null,
    ns integer not null,
    organisme varchar(255) not null,
    sup integer,
    president integer,
    jury1 integer,
    jury2 integer,
    Date date,
    heure  date
    
);

create table etudiants(
    id serial primary key,
    nom varchar(200) not null,
    number integer unique not null,
    opt varchar(20) not null,
    ns integer not null,
    organisme varchar(255) not null,
  
    
);

create table superviseurs(
    id serial primary key,
    e_id integer,
    sup_id integer ,
     
    CONSTRAINT fk_etudiant
      FOREIGN KEY(sup_id) 
	  REFERENCES customers(sup)
    
);