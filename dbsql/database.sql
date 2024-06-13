create table if not exists movie
(
    movie_id     serial
        primary key,
    title        varchar(255) not null,
    synopsis     text,
    release_date date,
    duration     integer,
    rating       numeric(3, 2),
    poster_url   varchar(255),
    created_at   timestamp default now(),
    updated_at   timestamp
);

alter table movie
    owner to rois;

create table if not exists directors
(
    id   serial
        primary key,
    name varchar(255) not null
);

alter table directors
    owner to rois;

create table if not exists casts
(
    id   serial
        primary key,
    name varchar(255) not null
);

alter table casts
    owner to rois;

create table if not exists movie_directors
(
    movie_id    integer not null
        references movie,
    director_id integer not null
        references directors,
    primary key (movie_id, director_id)
);

alter table movie_directors
    owner to rois;

create table if not exists movie_casts
(
    movie_id integer not null,
    cast_id  integer not null
        references casts,
    primary key (movie_id, cast_id)
);

alter table movie_casts
    owner to rois;

create table if not exists locations
(
    id      serial
        primary key,
    city    varchar(255) not null,
    address varchar(255) not null
);

alter table locations
    owner to rois;

create table if not exists premieres
(
    id            serial
        primary key,
    movie_id      integer not null
        references movie,
    location_id   integer not null
        references locations,
    date          date    not null,
    time          time    not null,
    total_seat    integer not null,
    premiere_name varchar(50)
);

alter table premieres
    owner to rois;

create table if not exists schedules
(
    id          serial
        primary key,
    premiere_id integer   not null
        references premieres,
    start_time  timestamp not null,
    end_time    timestamp not null
);

alter table schedules
    owner to rois;

create table if not exists users
(
    user_id    serial
        primary key,
    username   varchar(50)  not null
        constraint unique_username
            unique,
    password   varchar(255) not null,
    email      varchar(255),
    created_at timestamp   default now(),
    updated_at timestamp,
    role       varchar(50) default 'user'::character varying
);

alter table users
    owner to rois;

create table if not exists genres
(
    genre_id   serial
        primary key,
    genre_name varchar not null
        unique,
    created_at timestamp default now(),
    updated_at timestamp
);

alter table genres
    owner to rois;

create table if not exists movie_genre
(
    movie_genre_id serial
        primary key,
    movie_id       integer not null
        constraint movie_genre_fk
            references movie
            on delete cascade,
    genre_id       integer not null
        constraint movie_genre_fk_1
            references genres
            on delete cascade
);

alter table movie_genre
    owner to rois;

create table if not exists seat
(
    seat_id     serial
        primary key,
    premiere_id integer
        references premieres,
    row         integer,
    col         integer,
    seat_name   varchar(20),
    status      varchar(20)
        constraint seat_status_check
            check ((status)::text = ANY
                   ((ARRAY ['available'::character varying, 'booked'::character varying, 'reserved'::character varying])::text[]))
);

alter table seat
    owner to rois;

create table if not exists bookings
(
    booking_id  serial
        primary key,
    user_id     integer not null
        references users,
    schedule_id integer not null
        references schedules,
    seat_id     integer not null
        references seat,
    created_at  timestamp default now()
);

alter table bookings
    owner to rois;

create table if not exists tickets
(
    id          serial
        primary key,
    booking_id  integer        not null
        references bookings,
    seat_number integer        not null,
    price       numeric(10, 2) not null,
    created_at  timestamp      not null
);

alter table tickets
    owner to rois;

