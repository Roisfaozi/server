--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: bookings; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.bookings (
    booking_id integer NOT NULL,
    user_id integer NOT NULL,
    schedule_id integer NOT NULL,
    seat_id integer NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.bookings OWNER TO rois;

--
-- Name: bookings_booking_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.bookings_booking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.bookings_booking_id_seq OWNER TO rois;

--
-- Name: bookings_booking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.bookings_booking_id_seq OWNED BY public.bookings.booking_id;


--
-- Name: casts; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.casts (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.casts OWNER TO rois;

--
-- Name: casts_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.casts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.casts_id_seq OWNER TO rois;

--
-- Name: casts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.casts_id_seq OWNED BY public.casts.id;


--
-- Name: directors; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.directors (
    id integer NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.directors OWNER TO rois;

--
-- Name: directors_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.directors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.directors_id_seq OWNER TO rois;

--
-- Name: directors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.directors_id_seq OWNED BY public.directors.id;


--
-- Name: genres; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.genres (
    genre_id integer NOT NULL,
    genre_name character varying NOT NULL,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.genres OWNER TO rois;

--
-- Name: genres_genre_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.genres_genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.genres_genre_id_seq OWNER TO rois;

--
-- Name: genres_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.genres_genre_id_seq OWNED BY public.genres.genre_id;


--
-- Name: locations; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.locations (
    id integer NOT NULL,
    city character varying(255) NOT NULL,
    address character varying(255) NOT NULL
);


ALTER TABLE public.locations OWNER TO rois;

--
-- Name: locations_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.locations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.locations_id_seq OWNER TO rois;

--
-- Name: locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.locations_id_seq OWNED BY public.locations.id;


--
-- Name: movie; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.movie (
    movie_id integer NOT NULL,
    title character varying(255) NOT NULL,
    synopsis text,
    release_date date,
    duration integer,
    rating numeric(3,2),
    poster_url character varying(255),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone
);


ALTER TABLE public.movie OWNER TO rois;

--
-- Name: movie_casts; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.movie_casts (
    movie_id integer NOT NULL,
    cast_id integer NOT NULL
);


ALTER TABLE public.movie_casts OWNER TO rois;

--
-- Name: movie_directors; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.movie_directors (
    movie_id integer NOT NULL,
    director_id integer NOT NULL
);


ALTER TABLE public.movie_directors OWNER TO rois;

--
-- Name: movie_genre; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.movie_genre (
    movie_genre_id integer NOT NULL,
    movie_id integer NOT NULL,
    genre_id integer NOT NULL
);


ALTER TABLE public.movie_genre OWNER TO rois;

--
-- Name: movie_genre_movie_genre_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.movie_genre_movie_genre_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movie_genre_movie_genre_id_seq OWNER TO rois;

--
-- Name: movie_genre_movie_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.movie_genre_movie_genre_id_seq OWNED BY public.movie_genre.movie_genre_id;


--
-- Name: movie_movie_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.movie_movie_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.movie_movie_id_seq OWNER TO rois;

--
-- Name: movie_movie_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.movie_movie_id_seq OWNED BY public.movie.movie_id;


--
-- Name: pgmigrations; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.pgmigrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


ALTER TABLE public.pgmigrations OWNER TO rois;

--
-- Name: pgmigrations_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.pgmigrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pgmigrations_id_seq OWNER TO rois;

--
-- Name: pgmigrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.pgmigrations_id_seq OWNED BY public.pgmigrations.id;


--
-- Name: premieres; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.premieres (
    id integer NOT NULL,
    movie_id integer NOT NULL,
    location_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    total_seat integer NOT NULL,
    premiere_name character varying(50)
);


ALTER TABLE public.premieres OWNER TO rois;

--
-- Name: premieres_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.premieres_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.premieres_id_seq OWNER TO rois;

--
-- Name: premieres_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.premieres_id_seq OWNED BY public.premieres.id;


--
-- Name: schedules; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.schedules (
    id integer NOT NULL,
    premiere_id integer NOT NULL,
    start_time timestamp without time zone NOT NULL,
    end_time timestamp without time zone NOT NULL
);


ALTER TABLE public.schedules OWNER TO rois;

--
-- Name: schedules_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.schedules_id_seq OWNER TO rois;

--
-- Name: schedules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;


--
-- Name: seat; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.seat (
    seat_id integer NOT NULL,
    premiere_id integer,
    "row" integer,
    col integer,
    seat_name character varying(20),
    status character varying(20),
    CONSTRAINT seat_status_check CHECK (((status)::text = ANY ((ARRAY['available'::character varying, 'booked'::character varying, 'reserved'::character varying])::text[])))
);


ALTER TABLE public.seat OWNER TO rois;

--
-- Name: seat_seat_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.seat_seat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.seat_seat_id_seq OWNER TO rois;

--
-- Name: seat_seat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.seat_seat_id_seq OWNED BY public.seat.seat_id;


--
-- Name: tickets; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.tickets (
    id integer NOT NULL,
    booking_id integer NOT NULL,
    seat_number integer NOT NULL,
    price numeric(10,2) NOT NULL,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE public.tickets OWNER TO rois;

--
-- Name: tickets_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.tickets_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.tickets_id_seq OWNER TO rois;

--
-- Name: tickets_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.tickets_id_seq OWNED BY public.tickets.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: rois
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying(255),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone,
    role character varying(50) DEFAULT 'user'::character varying
);


ALTER TABLE public.users OWNER TO rois;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: rois
--

CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_user_id_seq OWNER TO rois;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: rois
--

ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;


--
-- Name: bookings booking_id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.bookings ALTER COLUMN booking_id SET DEFAULT nextval('public.bookings_booking_id_seq'::regclass);


--
-- Name: casts id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.casts ALTER COLUMN id SET DEFAULT nextval('public.casts_id_seq'::regclass);


--
-- Name: directors id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.directors ALTER COLUMN id SET DEFAULT nextval('public.directors_id_seq'::regclass);


--
-- Name: genres genre_id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.genres ALTER COLUMN genre_id SET DEFAULT nextval('public.genres_genre_id_seq'::regclass);


--
-- Name: locations id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.locations ALTER COLUMN id SET DEFAULT nextval('public.locations_id_seq'::regclass);


--
-- Name: movie movie_id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie ALTER COLUMN movie_id SET DEFAULT nextval('public.movie_movie_id_seq'::regclass);


--
-- Name: movie_genre movie_genre_id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_genre ALTER COLUMN movie_genre_id SET DEFAULT nextval('public.movie_genre_movie_genre_id_seq'::regclass);


--
-- Name: pgmigrations id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.pgmigrations ALTER COLUMN id SET DEFAULT nextval('public.pgmigrations_id_seq'::regclass);


--
-- Name: premieres id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.premieres ALTER COLUMN id SET DEFAULT nextval('public.premieres_id_seq'::regclass);


--
-- Name: schedules id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);


--
-- Name: seat seat_id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.seat ALTER COLUMN seat_id SET DEFAULT nextval('public.seat_seat_id_seq'::regclass);


--
-- Name: tickets id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.tickets ALTER COLUMN id SET DEFAULT nextval('public.tickets_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);


--
-- Data for Name: bookings; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.bookings (booking_id, user_id, schedule_id, seat_id, created_at) FROM stdin;
1	1	1	1	2024-02-26 00:51:30.146472
2	2	2	5	2024-02-26 00:51:30.151041
3	3	3	8	2024-02-26 00:51:30.152011
4	4	1	12	2024-02-26 00:51:30.152768
5	1	4	15	2024-02-26 00:51:30.153602
6	2	5	18	2024-02-26 00:51:30.15409
7	3	2	21	2024-02-26 00:51:30.154668
8	4	3	24	2024-02-26 00:51:30.1551
9	1	6	27	2024-02-26 00:51:30.155562
10	2	4	30	2024-02-26 00:51:30.156154
11	3	7	33	2024-02-26 00:51:30.156626
12	9	8	36	2024-02-26 00:51:30.157044
13	1	5	39	2024-02-26 00:51:30.157391
14	2	9	42	2024-02-26 00:51:30.157795
15	8	10	45	2024-02-26 00:51:30.15826
16	4	6	48	2024-02-26 00:51:30.158597
17	5	10	51	2024-02-26 00:51:30.158899
19	3	2	57	2024-02-26 00:51:30.159648
20	6	8	60	2024-02-26 00:51:30.159962
18	2	8	54	2024-02-26 00:51:30.159279
\.


--
-- Data for Name: casts; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.casts (id, name) FROM stdin;
1	Eddie Redmayne
2	Katherine Waterston
3	Dan Fogler
4	Alison Sudol
5	Ezra Miller
6	Samantha Morton
7	Jon Voight
8	Carmen Ejogo
9	Colin Farrell
10	Tom Holland
11	Mark Wahlberg
12	Sophia Ali
13	Antonio Banderas
14	Tati Gabrielle
15	Patricia Meeden
16	Geoffrey Cantor
17	Sarah Petrick
18	Michael Keaton
19	Robert Downey Jr.
20	Marisa Tomei
21	Jon Favreau
22	Gwyneth Paltrow
23	Zendaya
24	Donald Glover
25	Jacob Batalon
26	Laura Harrier
27	Tony Revolori
28	Bokeem Woodbine
29	Tyne Daly
30	Seth Rogen
31	Chiwetel Ejiofor
32	Alfre Woodard
33	Billy Eichner
34	John Kani
35	John Oliver
36	Beyonc├⌐ Knowles-Carter
37	James Earl Jones
38	Keanu Reeves
39	Halle Berry
40	Ian McShane
41	Laurence Fishburne
42	Mark Dacascos
43	Asia Kate Dillon
44	Lance Reddick
45	Anjelica Huston
46	Sa├»d Taghmaoui
47	Jerome Flynn
48	Jason Mantzoukas
49	Scarlett Johansson
50	Florence Pugh
51	David Harbour
52	O-T Fagbenle
53	Olga Kurylenko
54	William Hurt
55	Ray Winstone
56	Rachel Weisz
57	Anne Hathaway
58	Octavia Spencer
59	Stanley Tucci
60	Chris Rock
61	Jahzir Bruno
62	Kristin Chenoweth
63	Codie-Lei Eastick
64	Charles Edwards
65	John David Washington
66	Robert Pattinson
67	Elizabeth Debicki
68	Dimple Kapadia
69	Michael Caine
70	Kenneth Branagh
71	Aaron Taylor-Johnson
72	Cl├⌐mence Po├⌐sy
73	Himesh Patel
74	John Travolta
75	Samuel L. Jackson
76	Uma Thurman
77	Bruce Willis
78	Ving Rhames
79	Tim Roth
80	Amanda Plummer
81	Harvey Keitel
82	Edward Norton
83	Brad Pitt
84	Helena Bonham Carter
85	Meat Loaf
86	Jared Leto
87	Zach Grenier
88	Elijah Wood
89	Ian McKellen
90	Viggo Mortensen
91	Sean Astin
92	Liv Tyler
93	Cate Blanchett
94	John Rhys-Davies
95	Orlando Bloom
96	Christopher Lee
97	Bernard Hill
98	Andy Serkis
99	Marlon Brando
100	Al Pacino
101	James Caan
102	Richard Castellano
103	Robert Duvall
104	Sterling Hayden
105	John Marley
106	Richard Conte
107	Diane Keaton
108	Christian Bale
109	Tom Hardy
110	Gary Oldman
111	Joseph Gordon-Levitt
112	Marion Cotillard
113	Morgan Freeman
114	Matthew Modine
115	Alon Aboutboul
116	Ben Mendelsohn
117	Burn Gorman
118	Daniel Sunjata
119	Aidan Gillen
120	Leonardo DiCaprio
121	Elliot Page
122	Ken Watanabe
123	Dileep Rao
124	Cillian Murphy
125	Tom Berenger
126	Pete Postlethwaite
127	Lukas Haas
128	Robert De Niro
129	John Cazale
130	Talia Shire
131	Lee Strasberg
132	Michael V. Gazzo
133	G.D. Spradlin
134	Richard Bright
135	Gastone Moschin
136	Bruno Kirby
137	Tim Robbins
138	Bob Gunton
139	William Sadler
140	Clancy Brown
141	Gil Bellows
142	Mark Rolston
143	James Whitmore
\.


--
-- Data for Name: directors; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.directors (id, name) FROM stdin;
1	David Yates
2	Ruben Fleischer
3	Jon Watts
4	Jon Favreau
5	Chad Stahelski
6	Cate Shortland
7	Robert Zemeckis
8	Christopher Nolan
9	Quentin Tarantino
10	Francis Ford Coppola
11	Lana Wachowski and Lilly Wachowski
12	David Fincher
13	Peter Jackson
14	Frank Darabont
\.


--
-- Data for Name: genres; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.genres (genre_id, genre_name, created_at, updated_at) FROM stdin;
1	Fantasy	2024-02-25 03:56:28.690134	2024-02-25 03:56:28.690134
2	Comedy	2024-02-25 03:56:28.692743	2024-02-25 03:56:28.692743
3	Romance	2024-02-25 03:56:28.693315	2024-02-25 03:56:28.693315
4	Thriller	2024-02-25 03:56:28.693877	2024-02-25 03:56:28.693877
5	Horror	2024-02-25 03:56:28.69431	2024-02-25 03:56:28.69431
6	Science fiction	2024-02-25 03:56:28.694683	2024-02-25 03:56:28.694683
7	Action	2024-02-25 03:56:28.695107	2024-02-25 03:56:28.695107
8	Drama	2024-02-25 03:56:28.695551	2024-02-25 03:56:28.695551
9	Adventure	2024-02-25 03:56:28.695989	2024-02-25 03:56:28.695989
10	Mystery	2024-02-25 03:56:28.696535	2024-02-25 03:56:28.696535
\.


--
-- Data for Name: locations; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.locations (id, city, address) FROM stdin;
2	Surabaya	East Java
3	Bandung	West Java
4	Medan	North Sumatra
5	Makassar	South Sulawesi
6	Yogyakarta	Yogyakarta Special Region
7	Semarang	Central Java
8	Palembang	South Sumatra
9	Denpasar	Bali
10	Banjarmasin	South Kalimantan
1	Banjar	West Java
\.


--
-- Data for Name: movie; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.movie (movie_id, title, synopsis, release_date, duration, rating, poster_url, created_at, updated_at) FROM stdin;
1	Fantastic Beasts and Where to Find Them	The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school	2016-11-16	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.779101	2024-02-25 03:56:28.779101
2	Uncharted	Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada. [11]	2022-02-16	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.784504	2024-02-25 03:56:28.784504
3	spider man homecoming	Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City. [18]	2017-07-07	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.786833	2024-02-25 03:56:28.786833
4	The Lion King	After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery. [2]	2019-07-17	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.78955	2024-02-25 03:56:28.78955
5	John Wick: Chapter 3	John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere. [29]	2019-05-17	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.793587	2024-02-25 03:56:28.793587
6	Black Widow	Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. [22]	2021-05-09	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.796409	2024-02-25 03:56:28.796409
7	The Witches	A young boy and his grandmother have a run-in with a coven of witches and their leader. [10]	2020-10-22	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.798118	2024-02-25 03:56:28.798118
8	Tenet	A secret agent embarks on a dangerous, time-bending mission to prevent the start of World War III. [14]	2021-02-10	156	7.80	https://image.com/image1.jpeg	2024-02-25 03:56:28.800192	2024-02-25 03:56:28.800192
9	Pulp Fiction	The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. [26]	1994-10-14	156	7.80	https://image.com/image5.jpeg	2024-02-25 03:56:28.803209	2024-02-25 03:56:28.803209
10	The Godfather	The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. [34]	1972-03-24	156	7.80	https://image.com/image6.jpeg	2024-02-25 03:56:28.805505	2024-02-25 03:56:28.805505
11	The Matrix	Seorang peretas komputer bernama Neo menemukan bahwa dunia yang ia kenal hanyalah sebuah simulasi yang diciptakan oleh mesin cerdas, dan bergabung dengan pemberontakan manusia melawan penindas mereka.	1999-03-31	156	7.80	https://image.com/image7.jpeg	2024-02-25 03:56:28.807729	2024-02-25 03:56:28.807729
13	Fight Club	Seorang pekerja kantor yang mengalami insomnia membentuk sebuah klub pertarungan bawah tanah dengan seorang penjual sabun yang karismatik, dan terlibat dalam skema pembuatan sabun dan terorisme anarkis.	1999-10-15	156	7.80	https://image.com/image9.jpeg	2024-02-25 03:56:28.813031	2024-02-25 03:56:28.813031
18	The Lord of the Rings: The Return of the King	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	2003-12-17	125	7.90	http://localhost:8001/image/1708890011237.jpg	2024-02-26 02:40:11.270338	2024-02-26 02:40:11.270338
19	The Lion King	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	2003-12-17	125	7.90	http://localhost:8001/image/1708890151405.jpg	2024-02-26 02:42:31.438979	2024-02-26 02:42:31.438979
20	The Shawshank Redemption	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	1994-09-23	125	7.90	http://localhost:8001/image/1708890206451.jpg	2024-02-26 02:43:26.484908	2024-02-26 02:43:26.484908
21	The Shawshank Redemption	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	1994-09-23	125	7.90	http://localhost:8001/image/1708890226975.jpg	2024-02-26 02:43:47.013058	2024-02-26 02:43:47.013058
22	The Shawshank Redemption	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	1994-09-23	125	7.90	http://localhost:8001/image/1708890371198.jpg	2024-02-26 02:46:11.202402	2024-02-26 02:46:11.202402
23	The Shawshank Redemption	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	1994-09-23	125	7.90	http://localhost:8001/image/1708890410576.jpg	2024-02-26 02:46:50.607955	2024-02-26 02:46:50.607955
24	The Godfather: Part II	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	1994-09-23	125	7.90	http://localhost:8001/image/1708890479682.jpg	2024-02-26 02:47:59.7139	2024-02-26 02:47:59.7139
25	The Godfather: Part III	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	1994-09-23	125	7.90	http://localhost:8001/image/1709087329575.jpg	2024-02-28 09:28:49.622883	2024-02-28 09:28:49.622883
28	The Godfather: Part III	Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.	1994-09-23	125	7.90	http://localhost:8001/image/1711070289755.png	2024-03-22 08:18:09.90567	2024-03-22 08:18:09.90567
12	The Lord of the Rings: The Return of the King	\N	2003-12-16	\N	\N	http://localhost:8000/image/1717982630603.jpg	2024-02-25 03:56:28.81068	2024-06-10 08:23:50.631356
\.


--
-- Data for Name: movie_casts; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.movie_casts (movie_id, cast_id) FROM stdin;
1	2
1	3
1	4
1	5
1	6
1	7
1	8
1	9
1	10
2	11
2	12
2	13
2	14
2	15
2	16
2	17
2	18
3	11
3	19
3	20
3	21
3	22
3	23
3	24
3	25
3	26
3	27
3	28
3	29
3	30
3	31
4	32
4	33
4	34
4	35
4	36
4	37
4	38
4	39
4	40
5	40
5	41
5	42
5	43
5	44
5	45
5	46
5	47
5	48
5	49
5	50
6	51
6	52
6	53
6	54
6	55
6	56
6	57
6	58
7	59
7	60
7	61
7	62
7	63
7	64
7	65
7	66
8	67
8	68
8	69
8	70
8	71
8	72
8	73
8	74
8	75
9	76
9	77
9	78
9	79
9	80
9	81
9	82
9	83
9	84
9	85
9	86
9	87
10	88
10	89
10	90
10	91
10	92
10	93
10	94
10	95
10	96
10	97
10	98
10	99
11	40
11	43
11	44
11	45
11	50
11	81
11	100
11	101
11	102
11	103
12	104
12	105
12	106
12	107
12	108
12	109
12	110
12	111
12	112
12	113
13	114
13	115
13	116
13	117
13	118
13	119
13	120
13	121
13	122
13	123
18	124
18	115
19	124
19	115
20	124
20	115
21	124
21	115
22	124
22	115
23	124
23	115
24	124
24	115
25	124
25	115
28	124
28	115
\.


--
-- Data for Name: movie_directors; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.movie_directors (movie_id, director_id) FROM stdin;
1	1
2	2
3	3
4	4
5	5
6	6
7	7
8	8
9	9
10	10
11	11
12	13
13	12
18	13
19	13
20	13
21	13
22	13
23	13
24	13
25	13
28	13
\.


--
-- Data for Name: movie_genre; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.movie_genre (movie_genre_id, movie_id, genre_id) FROM stdin;
1	1	1
2	1	2
3	2	7
4	2	9
5	3	7
6	3	1
7	4	7
8	4	9
9	5	7
10	6	7
11	6	4
12	7	7
13	7	5
14	8	7
15	8	10
16	9	9
17	9	10
18	10	1
19	10	2
20	11	3
21	11	4
22	12	5
23	12	6
24	13	7
25	13	8
26	18	9
27	18	10
28	19	1
29	19	2
30	20	3
31	20	4
32	21	3
33	21	4
34	22	3
35	22	4
36	23	3
37	23	4
38	24	5
39	24	6
40	25	5
41	25	6
42	28	5
43	28	6
\.


--
-- Data for Name: pgmigrations; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.pgmigrations (id, name, run_on) FROM stdin;
\.


--
-- Data for Name: premieres; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.premieres (id, movie_id, location_id, date, "time", total_seat, premiere_name) FROM stdin;
1	10	1	2023-03-20	20:45:00	200	Cinepolis
2	1	1	2022-02-28	19:00:00	200	Cinepolis
3	1	1	2022-02-28	19:00:00	200	Cinepolis
4	2	10	2022-03-01	18:30:00	180	Platinum Cineplex
5	3	3	2022-03-02	20:00:00	220	XXI Cinema
6	4	1	2022-03-04	21:15:00	190	Cinepolis
7	5	10	2022-03-06	20:30:00	210	XXI Cinema
8	6	3	2022-03-09	19:45:00	180	Flicks Studio
9	7	1	2022-03-11	18:00:00	200	XXI Cinema
10	8	10	2022-03-14	17:30:00	190	CGV Cinemas
12	10	1	2022-03-19	20:45:00	200	Cinepolis
13	18	3	2023-03-20	20:45:00	200	Cinepolis
11	2	1	2023-03-20	19:45:00	200	\N
14	18	3	2023-03-20	20:45:00	200	Cinepolis
\.


--
-- Data for Name: schedules; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.schedules (id, premiere_id, start_time, end_time) FROM stdin;
1	1	2024-02-21 10:00:00	2024-02-21 12:00:00
2	2	2024-02-22 14:00:00	2024-02-22 16:00:00
3	3	2024-02-23 18:00:00	2024-02-23 20:00:00
4	4	2024-02-24 12:00:00	2024-02-24 14:00:00
5	5	2024-02-25 16:00:00	2024-02-25 18:00:00
6	6	2024-02-26 20:00:00	2024-02-26 22:00:00
7	7	2024-02-27 10:00:00	2024-02-27 12:00:00
8	8	2024-02-28 14:00:00	2024-02-28 16:00:00
9	9	2024-02-29 18:00:00	2024-02-29 20:00:00
10	10	2024-03-01 12:00:00	2024-03-01 14:00:00
12	13	2024-02-26 20:00:00	2024-02-26 22:00:00
\.


--
-- Data for Name: seat; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.seat (seat_id, premiere_id, "row", col, seat_name, status) FROM stdin;
1	1	1	1	A1	available
2	2	1	1	A1	available
3	3	1	1	A1	available
4	4	1	1	A1	available
5	5	1	1	A1	available
6	6	1	1	A1	available
7	7	1	1	A1	available
8	8	1	1	A1	available
9	9	1	1	A1	available
10	10	1	1	A1	available
11	1	1	2	A2	available
12	2	1	2	A2	available
13	3	1	2	A2	available
14	4	1	2	A2	available
15	5	1	2	A2	available
16	6	1	2	A2	available
17	7	1	2	A2	available
18	8	1	2	A2	available
19	9	1	2	A2	available
20	10	1	2	A2	available
21	1	1	3	A3	available
22	2	1	3	A3	available
23	3	1	3	A3	available
24	4	1	3	A3	available
25	5	1	3	A3	available
26	6	1	3	A3	available
27	7	1	3	A3	available
28	8	1	3	A3	available
29	9	1	3	A3	available
30	10	1	3	A3	available
31	1	1	4	A4	available
32	2	1	4	A4	available
33	3	1	4	A4	available
34	4	1	4	A4	available
35	5	1	4	A4	available
36	6	1	4	A4	available
37	7	1	4	A4	available
38	8	1	4	A4	available
39	9	1	4	A4	available
40	10	1	4	A4	available
41	1	1	5	A5	available
42	2	1	5	A5	available
43	3	1	5	A5	available
44	4	1	5	A5	available
45	5	1	5	A5	available
46	6	1	5	A5	available
47	7	1	5	A5	available
48	8	1	5	A5	available
49	9	1	5	A5	available
50	10	1	5	A5	available
51	1	1	6	A6	available
52	2	1	6	A6	available
53	3	1	6	A6	available
54	4	1	6	A6	available
55	5	1	6	A6	available
56	6	1	6	A6	available
57	7	1	6	A6	available
58	8	1	6	A6	available
59	9	1	6	A6	available
60	10	1	6	A6	available
61	1	1	7	A7	available
62	2	1	7	A7	available
63	3	1	7	A7	available
64	4	1	7	A7	available
65	5	1	7	A7	available
66	6	1	7	A7	available
67	7	1	7	A7	available
68	8	1	7	A7	available
69	9	1	7	A7	available
70	10	1	7	A7	available
71	1	2	1	B1	available
72	2	2	1	B1	available
73	3	2	1	B1	available
74	4	2	1	B1	available
75	5	2	1	B1	available
76	6	2	1	B1	available
77	7	2	1	B1	available
78	8	2	1	B1	available
79	9	2	1	B1	available
80	10	2	1	B1	available
81	1	2	2	B2	available
82	2	2	2	B2	available
83	3	2	2	B2	available
84	4	2	2	B2	available
85	5	2	2	B2	available
86	6	2	2	B2	available
87	7	2	2	B2	available
88	8	2	2	B2	available
89	9	2	2	B2	available
90	10	2	2	B2	available
91	1	2	3	B3	available
92	2	2	3	B3	available
93	3	2	3	B3	available
94	4	2	3	B3	available
95	5	2	3	B3	available
96	6	2	3	B3	available
97	7	2	3	B3	available
98	8	2	3	B3	available
99	9	2	3	B3	available
100	10	2	3	B3	available
101	1	2	4	B4	available
102	2	2	4	B4	available
103	3	2	4	B4	available
104	4	2	4	B4	available
105	5	2	4	B4	available
106	6	2	4	B4	available
107	7	2	4	B4	available
108	8	2	4	B4	available
109	9	2	4	B4	available
110	10	2	4	B4	available
111	1	2	5	B5	available
112	2	2	5	B5	available
113	3	2	5	B5	available
114	4	2	5	B5	available
115	5	2	5	B5	available
116	6	2	5	B5	available
117	7	2	5	B5	available
118	8	2	5	B5	available
119	9	2	5	B5	available
120	10	2	5	B5	available
121	1	2	6	B6	available
122	2	2	6	B6	available
123	3	2	6	B6	available
124	4	2	6	B6	available
125	5	2	6	B6	available
126	6	2	6	B6	available
127	7	2	6	B6	available
128	8	2	6	B6	available
129	9	2	6	B6	available
130	10	2	6	B6	available
131	1	2	7	B7	available
132	2	2	7	B7	available
133	3	2	7	B7	available
134	4	2	7	B7	available
135	5	2	7	B7	available
136	6	2	7	B7	available
137	7	2	7	B7	available
138	8	2	7	B7	available
139	9	2	7	B7	available
140	10	2	7	B7	available
141	1	3	1	C1	available
142	2	3	1	C1	available
143	3	3	1	C1	available
144	4	3	1	C1	available
145	5	3	1	C1	available
146	6	3	1	C1	available
147	7	3	1	C1	available
148	8	3	1	C1	available
149	9	3	1	C1	available
150	10	3	1	C1	available
151	1	3	2	C2	available
152	2	3	2	C2	available
153	3	3	2	C2	available
154	4	3	2	C2	available
155	5	3	2	C2	available
156	6	3	2	C2	available
157	7	3	2	C2	available
158	8	3	2	C2	available
159	9	3	2	C2	available
160	10	3	2	C2	available
161	1	3	3	C3	available
162	2	3	3	C3	available
163	3	3	3	C3	available
164	4	3	3	C3	available
165	5	3	3	C3	available
166	6	3	3	C3	available
167	7	3	3	C3	available
168	8	3	3	C3	available
169	9	3	3	C3	available
170	10	3	3	C3	available
171	1	3	4	C4	available
172	2	3	4	C4	available
173	3	3	4	C4	available
174	4	3	4	C4	available
175	5	3	4	C4	available
176	6	3	4	C4	available
177	7	3	4	C4	available
178	8	3	4	C4	available
179	9	3	4	C4	available
180	10	3	4	C4	available
181	1	3	5	C5	available
182	2	3	5	C5	available
183	3	3	5	C5	available
184	4	3	5	C5	available
185	5	3	5	C5	available
186	6	3	5	C5	available
187	7	3	5	C5	available
188	8	3	5	C5	available
189	9	3	5	C5	available
190	10	3	5	C5	available
191	1	3	6	C6	available
192	2	3	6	C6	available
193	3	3	6	C6	available
194	4	3	6	C6	available
195	5	3	6	C6	available
196	6	3	6	C6	available
197	7	3	6	C6	available
198	8	3	6	C6	available
199	9	3	6	C6	available
200	10	3	6	C6	available
201	1	3	7	C7	available
202	2	3	7	C7	available
203	3	3	7	C7	available
204	4	3	7	C7	available
205	5	3	7	C7	available
206	6	3	7	C7	available
207	7	3	7	C7	available
208	8	3	7	C7	available
209	9	3	7	C7	available
210	10	3	7	C7	available
211	1	4	1	D1	available
212	2	4	1	D1	available
213	3	4	1	D1	available
214	4	4	1	D1	available
215	5	4	1	D1	available
216	6	4	1	D1	available
217	7	4	1	D1	available
218	8	4	1	D1	available
219	9	4	1	D1	available
220	10	4	1	D1	available
221	1	4	2	D2	available
222	2	4	2	D2	available
223	3	4	2	D2	available
224	4	4	2	D2	available
225	5	4	2	D2	available
226	6	4	2	D2	available
227	7	4	2	D2	available
228	8	4	2	D2	available
229	9	4	2	D2	available
230	10	4	2	D2	available
231	1	4	3	D3	available
232	2	4	3	D3	available
233	3	4	3	D3	available
234	4	4	3	D3	available
235	5	4	3	D3	available
236	6	4	3	D3	available
237	7	4	3	D3	available
238	8	4	3	D3	available
239	9	4	3	D3	available
240	10	4	3	D3	available
241	1	4	4	D4	available
242	2	4	4	D4	available
243	3	4	4	D4	available
244	4	4	4	D4	available
245	5	4	4	D4	available
246	6	4	4	D4	available
247	7	4	4	D4	available
248	8	4	4	D4	available
249	9	4	4	D4	available
250	10	4	4	D4	available
251	1	4	5	D5	available
252	2	4	5	D5	available
253	3	4	5	D5	available
254	4	4	5	D5	available
255	5	4	5	D5	available
256	6	4	5	D5	available
257	7	4	5	D5	available
258	8	4	5	D5	available
259	9	4	5	D5	available
260	10	4	5	D5	available
261	1	4	6	D6	available
262	2	4	6	D6	available
263	3	4	6	D6	available
264	4	4	6	D6	available
265	5	4	6	D6	available
266	6	4	6	D6	available
267	7	4	6	D6	available
268	8	4	6	D6	available
269	9	4	6	D6	available
270	10	4	6	D6	available
271	1	4	7	D7	available
272	2	4	7	D7	available
273	3	4	7	D7	available
274	4	4	7	D7	available
275	5	4	7	D7	available
276	6	4	7	D7	available
277	7	4	7	D7	available
278	8	4	7	D7	available
279	9	4	7	D7	available
280	10	4	7	D7	available
281	1	5	1	E1	available
282	2	5	1	E1	available
283	3	5	1	E1	available
284	4	5	1	E1	available
285	5	5	1	E1	available
286	6	5	1	E1	available
287	7	5	1	E1	available
288	8	5	1	E1	available
289	9	5	1	E1	available
290	10	5	1	E1	available
291	1	5	2	E2	available
292	2	5	2	E2	available
293	3	5	2	E2	available
294	4	5	2	E2	available
295	5	5	2	E2	available
296	6	5	2	E2	available
297	7	5	2	E2	available
298	8	5	2	E2	available
299	9	5	2	E2	available
300	10	5	2	E2	available
301	1	5	3	E3	available
302	2	5	3	E3	available
303	3	5	3	E3	available
304	4	5	3	E3	available
305	5	5	3	E3	available
306	6	5	3	E3	available
307	7	5	3	E3	available
308	8	5	3	E3	available
309	9	5	3	E3	available
310	10	5	3	E3	available
311	1	5	4	E4	available
312	2	5	4	E4	available
313	3	5	4	E4	available
314	4	5	4	E4	available
315	5	5	4	E4	available
316	6	5	4	E4	available
317	7	5	4	E4	available
318	8	5	4	E4	available
319	9	5	4	E4	available
320	10	5	4	E4	available
321	1	5	5	E5	available
322	2	5	5	E5	available
323	3	5	5	E5	available
324	4	5	5	E5	available
325	5	5	5	E5	available
326	6	5	5	E5	available
327	7	5	5	E5	available
328	8	5	5	E5	available
329	9	5	5	E5	available
330	10	5	5	E5	available
331	1	5	6	E6	available
332	2	5	6	E6	available
333	3	5	6	E6	available
334	4	5	6	E6	available
335	5	5	6	E6	available
336	6	5	6	E6	available
337	7	5	6	E6	available
338	8	5	6	E6	available
339	9	5	6	E6	available
340	10	5	6	E6	available
341	1	5	7	E7	available
342	2	5	7	E7	available
343	3	5	7	E7	available
344	4	5	7	E7	available
345	5	5	7	E7	available
346	6	5	7	E7	available
347	7	5	7	E7	available
348	8	5	7	E7	available
349	9	5	7	E7	available
350	10	5	7	E7	available
351	1	6	1	F1	available
352	2	6	1	F1	available
353	3	6	1	F1	available
354	4	6	1	F1	available
355	5	6	1	F1	available
356	6	6	1	F1	available
357	7	6	1	F1	available
358	8	6	1	F1	available
359	9	6	1	F1	available
360	10	6	1	F1	available
361	1	6	2	F2	available
362	2	6	2	F2	available
363	3	6	2	F2	available
364	4	6	2	F2	available
365	5	6	2	F2	available
366	6	6	2	F2	available
367	7	6	2	F2	available
368	8	6	2	F2	available
369	9	6	2	F2	available
370	10	6	2	F2	available
371	1	6	3	F3	available
372	2	6	3	F3	available
373	3	6	3	F3	available
374	4	6	3	F3	available
375	5	6	3	F3	available
376	6	6	3	F3	available
377	7	6	3	F3	available
378	8	6	3	F3	available
379	9	6	3	F3	available
380	10	6	3	F3	available
381	1	6	4	F4	available
382	2	6	4	F4	available
383	3	6	4	F4	available
384	4	6	4	F4	available
385	5	6	4	F4	available
386	6	6	4	F4	available
387	7	6	4	F4	available
388	8	6	4	F4	available
389	9	6	4	F4	available
390	10	6	4	F4	available
391	1	6	5	F5	available
392	2	6	5	F5	available
393	3	6	5	F5	available
394	4	6	5	F5	available
395	5	6	5	F5	available
396	6	6	5	F5	available
397	7	6	5	F5	available
398	8	6	5	F5	available
399	9	6	5	F5	available
400	10	6	5	F5	available
401	1	6	6	F6	available
402	2	6	6	F6	available
403	3	6	6	F6	available
404	4	6	6	F6	available
405	5	6	6	F6	available
406	6	6	6	F6	available
407	7	6	6	F6	available
408	8	6	6	F6	available
409	9	6	6	F6	available
410	10	6	6	F6	available
411	1	6	7	F7	available
412	2	6	7	F7	available
413	3	6	7	F7	available
414	4	6	7	F7	available
415	5	6	7	F7	available
416	6	6	7	F7	available
417	7	6	7	F7	available
418	8	6	7	F7	available
419	9	6	7	F7	available
420	10	6	7	F7	available
421	1	7	1	G1	available
422	2	7	1	G1	available
423	3	7	1	G1	available
424	4	7	1	G1	available
425	5	7	1	G1	available
426	6	7	1	G1	available
427	7	7	1	G1	available
428	8	7	1	G1	available
429	9	7	1	G1	available
430	10	7	1	G1	available
431	1	7	2	G2	available
432	2	7	2	G2	available
433	3	7	2	G2	available
434	4	7	2	G2	available
435	5	7	2	G2	available
436	6	7	2	G2	available
437	7	7	2	G2	available
438	8	7	2	G2	available
439	9	7	2	G2	available
440	10	7	2	G2	available
441	1	7	3	G3	available
442	2	7	3	G3	available
443	3	7	3	G3	available
444	4	7	3	G3	available
445	5	7	3	G3	available
446	6	7	3	G3	available
447	7	7	3	G3	available
448	8	7	3	G3	available
449	9	7	3	G3	available
450	10	7	3	G3	available
451	1	7	4	G4	available
452	2	7	4	G4	available
453	3	7	4	G4	available
454	4	7	4	G4	available
455	5	7	4	G4	available
456	6	7	4	G4	available
457	7	7	4	G4	available
458	8	7	4	G4	available
459	9	7	4	G4	available
460	10	7	4	G4	available
461	1	7	5	G5	available
462	2	7	5	G5	available
463	3	7	5	G5	available
464	4	7	5	G5	available
465	5	7	5	G5	available
466	6	7	5	G5	available
467	7	7	5	G5	available
468	8	7	5	G5	available
469	9	7	5	G5	available
470	10	7	5	G5	available
471	1	7	6	G6	available
472	2	7	6	G6	available
473	3	7	6	G6	available
474	4	7	6	G6	available
475	5	7	6	G6	available
476	6	7	6	G6	available
477	7	7	6	G6	available
478	8	7	6	G6	available
479	9	7	6	G6	available
480	10	7	6	G6	available
481	1	7	7	G7	available
482	2	7	7	G7	available
483	3	7	7	G7	available
484	4	7	7	G7	available
485	5	7	7	G7	available
486	6	7	7	G7	available
487	7	7	7	G7	available
488	8	7	7	G7	available
489	9	7	7	G7	available
490	10	7	7	G7	available
\.


--
-- Data for Name: tickets; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.tickets (id, booking_id, seat_number, price, created_at) FROM stdin;
1	1	101	15.99	2024-02-26 00:51:30.160509
2	2	102	20.50	2024-02-26 00:51:30.161862
3	3	103	18.75	2024-02-26 00:51:30.162178
4	4	104	14.99	2024-02-26 00:51:30.162444
5	5	105	22.00	2024-02-26 00:51:30.162691
6	6	106	19.25	2024-02-26 00:51:30.162982
7	7	107	16.50	2024-02-26 00:51:30.163244
8	8	108	21.99	2024-02-26 00:51:30.163491
9	9	109	17.50	2024-02-26 00:51:30.163706
10	10	110	24.00	2024-02-26 00:51:30.163911
11	11	111	23.50	2024-02-26 00:51:30.164135
12	12	112	18.99	2024-02-26 00:51:30.1644
13	13	113	25.50	2024-02-26 00:51:30.164692
14	14	114	16.99	2024-02-26 00:51:30.164906
15	15	115	19.99	2024-02-26 00:51:30.165217
16	16	116	22.50	2024-02-26 00:51:30.165565
19	3	103	20.75	2024-02-28 09:30:46.587727
20	3	103	20.75	2024-02-28 09:32:18.364096
21	3	103	20.75	2024-02-28 09:32:50.460293
22	3	103	20.75	2024-02-28 09:33:11.830469
23	3	103	20.75	2024-02-28 09:33:28.969236
24	3	103	20.75	2024-02-28 09:33:57.698598
25	3	103	20.75	2024-02-28 09:34:30.274259
26	3	103	20.75	2024-06-11 06:14:43.51644
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: rois
--

COPY public.users (user_id, username, password, email, created_at, updated_at, role) FROM stdin;
1	admin1	$2b$10$mYjohe2JiRGTzJN/DJMBGO9g6oyO3JmXhwD2.ROiwDXOouxzrKei2	admin1@example.com	2024-02-26 00:46:52.461148	\N	admin
2	admin2	$2b$10$lV8gf20.C.bh.NuXEefpfeyk7jy0dga7kqeoSYLnReAv5YuYohflW	admin2@example.com	2024-02-26 00:46:56.962758	\N	admin
3	admin3	$2b$10$E/hTcPN6UQrYGX4laycRruT7wECr9hkci5eq6TPMMnLwFEnRNar1W	admin3@example.com	2024-02-26 00:47:20.798816	\N	admin
4	admin4	$2b$10$FDsQnnL2XD7TyAMAXHtZvu8UXUHX741UG74xoukJRNcl9.ae1h8tS	admin4@example.com	2024-02-26 00:49:54.044301	\N	admin
5	admin5	$2b$10$hf4ODBjv.64lSPdI0twouO7zz9mAEnOf3Gu9tzlMkDM6s.54fJmYm	admin5@example.com	2024-02-26 00:49:58.476094	\N	admin
6	admin6	$2b$10$cZjFTECWlK3/V3vr.zECoeip9iiQ60l7fzlXS.V9spx2Z0FWgzNRG	admin6@example.com	2024-02-26 00:50:01.554939	\N	admin
8	user1	$2b$10$dAE9UhxR.JK7uOCe5QO/7uKuSDTluay7GEQ2Z6MyyyOyHv91xVIPG	user1@example.com	2024-02-26 00:50:22.601551	\N	admin
9	user2	$2b$10$9uuJYdzPUXInx8mtOAeZx.Uz9EUvqxUQ1l48tcBrTS1sosnEjQ5Vq	user2@example.com	2024-02-26 00:50:30.898554	\N	admin
10	user3	$2b$10$l/GcnNdwFOCjd470NnJxNOnTNij/GRAwEA.TzNY6N/lsN0IkRky76	user3@example.com	2024-02-26 00:50:37.802552	\N	admin
11	user4	$2b$10$.A0bBYaYtunXXu3YmXj9GudULEVyRtnw84o9pSXjFOs2XbUCvWdva	user4@example.com	2024-02-26 00:50:41.391592	\N	admin
12	user5	$2b$10$y3RzmbmKhtJEFbIrY9e5muSYCJXM5E12YfnoTLqSdeZAVczZQbOjK	user5@example.com	2024-02-26 00:50:44.263067	\N	admin
13	user6	$2b$10$UEA6RZnfypt1s27DvqCof.4WkS5Sd.FmQI.pwvNp.PfEi/CjaRy.S	user6@example.com	2024-02-26 00:50:47.9255	\N	admin
14	user7	$2b$10$0W2pbDwYFeWyRqWrAIoSp.ZgacinBUR6XDGpwULMNkhsX27C2KN3.	user7@example.com	2024-02-26 00:50:51.385871	\N	admin
15	user8	$2b$10$O7.27hfb4SYUy.v8Dq5Ku.25lKu1omsjVMrns0Jgg.7ZSrIUrBLZm	user8@example.com	2024-02-26 00:50:54.870107	\N	admin
18	user9	$2b$10$Zn5vAVGLjzvRvsCPpTZr0eg.jk.tvUkuPk.iG.7QIfafpE0AIdL9O	user9@example.com	2024-03-22 01:20:22.906551	\N	user
19	testuser2	$2b$10$MX76cc84iV52stGW/YeOOebSXUCI5.Bb9ffDKzQcd9yirFb.aYGP2	test@example.com	2024-06-10 08:14:31.80874	\N	user
21	user9d	$2b$10$OZ9Kyk0PwccxQORmZVotRe4oukuklPBJJc5KMTRl.PbSqg1ejLxoO	user9@example.com	2024-06-10 08:33:30.009328	\N	admin
22	kapalselam	$2b$10$6GXWXCVDTJ/dOYc0.H9V.OkeQTipHmNoYyjHXmBhuHAyA2bXC3QUy	kapal@selam.com	2024-06-14 01:45:33.447329	\N	user
\.


--
-- Name: bookings_booking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.bookings_booking_id_seq', 20, true);


--
-- Name: casts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.casts_id_seq', 143, true);


--
-- Name: directors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.directors_id_seq', 14, true);


--
-- Name: genres_genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.genres_genre_id_seq', 10, true);


--
-- Name: locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.locations_id_seq', 11, true);


--
-- Name: movie_genre_movie_genre_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.movie_genre_movie_genre_id_seq', 45, true);


--
-- Name: movie_movie_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.movie_movie_id_seq', 29, true);


--
-- Name: pgmigrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.pgmigrations_id_seq', 1, false);


--
-- Name: premieres_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.premieres_id_seq', 14, true);


--
-- Name: schedules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.schedules_id_seq', 12, true);


--
-- Name: seat_seat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.seat_seat_id_seq', 491, true);


--
-- Name: tickets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.tickets_id_seq', 27, true);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: rois
--

SELECT pg_catalog.setval('public.users_user_id_seq', 22, true);


--
-- Name: bookings bookings_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_pkey PRIMARY KEY (booking_id);


--
-- Name: casts casts_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.casts
    ADD CONSTRAINT casts_pkey PRIMARY KEY (id);


--
-- Name: directors directors_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.directors
    ADD CONSTRAINT directors_pkey PRIMARY KEY (id);


--
-- Name: genres genres_genre_name_key; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_genre_name_key UNIQUE (genre_name);


--
-- Name: genres genres_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.genres
    ADD CONSTRAINT genres_pkey PRIMARY KEY (genre_id);


--
-- Name: locations locations_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (id);


--
-- Name: movie_casts movie_casts_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_casts
    ADD CONSTRAINT movie_casts_pkey PRIMARY KEY (movie_id, cast_id);


--
-- Name: movie_directors movie_directors_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_directors
    ADD CONSTRAINT movie_directors_pkey PRIMARY KEY (movie_id, director_id);


--
-- Name: movie_genre movie_genre_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_genre
    ADD CONSTRAINT movie_genre_pkey PRIMARY KEY (movie_genre_id);


--
-- Name: movie movie_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie
    ADD CONSTRAINT movie_pkey PRIMARY KEY (movie_id);


--
-- Name: pgmigrations pgmigrations_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.pgmigrations
    ADD CONSTRAINT pgmigrations_pkey PRIMARY KEY (id);


--
-- Name: premieres premieres_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.premieres
    ADD CONSTRAINT premieres_pkey PRIMARY KEY (id);


--
-- Name: schedules schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);


--
-- Name: seat seat_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.seat
    ADD CONSTRAINT seat_pkey PRIMARY KEY (seat_id);


--
-- Name: tickets tickets_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_pkey PRIMARY KEY (id);


--
-- Name: users unique_username; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT unique_username UNIQUE (username);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: bookings bookings_schedule_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_schedule_id_fkey FOREIGN KEY (schedule_id) REFERENCES public.schedules(id);


--
-- Name: bookings bookings_seat_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_seat_id_fkey FOREIGN KEY (seat_id) REFERENCES public.seat(seat_id);


--
-- Name: bookings bookings_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.bookings
    ADD CONSTRAINT bookings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);


--
-- Name: movie_casts movie_casts_cast_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_casts
    ADD CONSTRAINT movie_casts_cast_id_fkey FOREIGN KEY (cast_id) REFERENCES public.casts(id);


--
-- Name: movie_directors movie_directors_director_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_directors
    ADD CONSTRAINT movie_directors_director_id_fkey FOREIGN KEY (director_id) REFERENCES public.directors(id);


--
-- Name: movie_directors movie_directors_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_directors
    ADD CONSTRAINT movie_directors_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movie(movie_id);


--
-- Name: movie_genre movie_genre_fk; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_genre
    ADD CONSTRAINT movie_genre_fk FOREIGN KEY (movie_id) REFERENCES public.movie(movie_id) ON DELETE CASCADE;


--
-- Name: movie_genre movie_genre_fk_1; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.movie_genre
    ADD CONSTRAINT movie_genre_fk_1 FOREIGN KEY (genre_id) REFERENCES public.genres(genre_id) ON DELETE CASCADE;


--
-- Name: premieres premieres_location_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.premieres
    ADD CONSTRAINT premieres_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.locations(id);


--
-- Name: premieres premieres_movie_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.premieres
    ADD CONSTRAINT premieres_movie_id_fkey FOREIGN KEY (movie_id) REFERENCES public.movie(movie_id);


--
-- Name: schedules schedules_premiere_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_premiere_id_fkey FOREIGN KEY (premiere_id) REFERENCES public.premieres(id);


--
-- Name: seat seat_premiere_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.seat
    ADD CONSTRAINT seat_premiere_id_fkey FOREIGN KEY (premiere_id) REFERENCES public.premieres(id);


--
-- Name: tickets tickets_booking_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: rois
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT tickets_booking_id_fkey FOREIGN KEY (booking_id) REFERENCES public.bookings(booking_id);


--
-- PostgreSQL database dump complete
--

