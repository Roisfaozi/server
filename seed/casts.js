const { addCast } = require('../src/models/casts');

module.exports = async () => {
  try {
    const dumy = [
      {
        name: 'Eddie Redmayne',
      },
      {
        name: 'Katherine Waterston',
      },
      {
        name: 'Dan Fogler',
      },
      {
        name: 'Alison Sudol',
      },
      {
        name: 'Ezra Miller',
      },
      {
        name: 'Samantha Morton',
      },
      {
        name: 'Jon Voight',
      },
      {
        name: 'Carmen Ejogo',
      },
      {
        name: 'Colin Farrell',
      },
      {
        name: 'Tom Holland',
      },
      {
        name: 'Mark Wahlberg',
      },
      {
        name: 'Sophia Ali',
      },
      {
        name: 'Antonio Banderas',
      },
      {
        name: 'Tati Gabrielle',
      },
      {
        name: 'Patricia Meeden',
      },
      {
        name: 'Geoffrey Cantor',
      },
      {
        name: 'Sarah Petrick',
      },
      {
        name: 'Michael Keaton',
      },
      {
        name: 'Robert Downey Jr.',
      },
      {
        name: 'Marisa Tomei',
      },
      {
        name: 'Jon Favreau',
      },
      {
        name: 'Gwyneth Paltrow',
      },
      {
        name: 'Zendaya',
      },
      {
        name: 'Donald Glover',
      },
      {
        name: 'Jacob Batalon',
      },
      {
        name: 'Laura Harrier',
      },
      {
        name: 'Tony Revolori',
      },
      {
        name: 'Bokeem Woodbine',
      },
      {
        name: 'Tyne Daly',
      },
      {
        name: 'Seth Rogen',
      },
      {
        name: 'Chiwetel Ejiofor',
      },
      {
        name: 'Alfre Woodard',
      },
      {
        name: 'Billy Eichner',
      },
      {
        name: 'John Kani',
      },
      {
        name: 'John Oliver',
      },
      {
        name: 'Beyoncé Knowles-Carter',
      },
      {
        name: 'James Earl Jones',
      },
      {
        name: 'Keanu Reeves',
      },
      {
        name: 'Halle Berry',
      },
      {
        name: 'Ian McShane',
      },
      {
        name: 'Laurence Fishburne',
      },
      {
        name: 'Mark Dacascos',
      },
      {
        name: 'Asia Kate Dillon',
      },
      {
        name: 'Lance Reddick',
      },
      {
        name: 'Anjelica Huston',
      },
      {
        name: 'Saïd Taghmaoui',
      },
      {
        name: 'Jerome Flynn',
      },
      {
        name: 'Jason Mantzoukas',
      },
      {
        name: 'Scarlett Johansson',
      },
      {
        name: 'Florence Pugh',
      },
      {
        name: 'David Harbour',
      },
      {
        name: 'O-T Fagbenle',
      },
      {
        name: 'Olga Kurylenko',
      },
      {
        name: 'William Hurt',
      },
      {
        name: 'Ray Winstone',
      },
      {
        name: 'Rachel Weisz',
      },
      {
        name: 'Anne Hathaway',
      },
      {
        name: 'Octavia Spencer',
      },
      {
        name: 'Stanley Tucci',
      },
      {
        name: 'Chris Rock',
      },
      {
        name: 'Jahzir Bruno',
      },
      {
        name: 'Kristin Chenoweth',
      },
      {
        name: 'Codie-Lei Eastick',
      },
      {
        name: 'Charles Edwards',
      },
      {
        name: 'John David Washington',
      },
      {
        name: 'Robert Pattinson',
      },
      {
        name: 'Elizabeth Debicki',
      },
      {
        name: 'Dimple Kapadia',
      },
      {
        name: 'Michael Caine',
      },
      {
        name: 'Kenneth Branagh',
      },
      {
        name: 'Aaron Taylor-Johnson',
      },
      {
        name: 'Clémence Poésy',
      },
      {
        name: 'Himesh Patel',
      },
      {
        name: 'John Travolta',
      },
      {
        name: 'Samuel L. Jackson',
      },
      {
        name: 'Uma Thurman',
      },
      {
        name: 'Bruce Willis',
      },
      {
        name: 'Ving Rhames',
      },
      {
        name: 'Tim Roth',
      },
      {
        name: 'Amanda Plummer',
      },
      {
        name: 'Harvey Keitel',
      },
      {
        name: 'Edward Norton',
      },
      {
        name: 'Brad Pitt',
      },
      {
        name: 'Helena Bonham Carter',
      },
      {
        name: 'Meat Loaf',
      },
      {
        name: 'Jared Leto',
      },
      {
        name: 'Zach Grenier',
      },
      {
        name: 'Elijah Wood',
      },
      {
        name: 'Ian McKellen',
      },
      {
        name: 'Viggo Mortensen',
      },
      {
        name: 'Sean Astin',
      },
      {
        name: 'Liv Tyler',
      },
      {
        name: 'Cate Blanchett',
      },
      {
        name: 'John Rhys-Davies',
      },
      {
        name: 'Orlando Bloom',
      },
      {
        name: 'Christopher Lee',
      },
      {
        name: 'Bernard Hill',
      },
      {
        name: 'Andy Serkis',
      },
      {
        name: 'Marlon Brando',
      },
      {
        name: 'Al Pacino',
      },
      {
        name: 'James Caan',
      },
      {
        name: 'Richard Castellano',
      },
      {
        name: 'Robert Duvall',
      },
      {
        name: 'Sterling Hayden',
      },
      {
        name: 'John Marley',
      },
      {
        name: 'Richard Conte',
      },
      {
        name: 'Diane Keaton',
      },
      {
        name: 'Christian Bale',
      },
      {
        name: 'Tom Hardy',
      },
      {
        name: 'Gary Oldman',
      },
      {
        name: 'Joseph Gordon-Levitt',
      },
      {
        name: 'Marion Cotillard',
      },
      {
        name: 'Morgan Freeman',
      },
      {
        name: 'Matthew Modine',
      },
      {
        name: 'Alon Aboutboul',
      },
      {
        name: 'Ben Mendelsohn',
      },
      {
        name: 'Burn Gorman',
      },
      {
        name: 'Daniel Sunjata',
      },
      {
        name: 'Aidan Gillen',
      },
      {
        name: 'Leonardo DiCaprio',
      },
      {
        name: 'Elliot Page',
      },
      {
        name: 'Ken Watanabe',
      },
      {
        name: 'Dileep Rao',
      },
      {
        name: 'Cillian Murphy',
      },
      {
        name: 'Tom Berenger',
      },
      {
        name: 'Pete Postlethwaite',
      },
      {
        name: 'Lukas Haas',
      },
      {
        name: 'Robert De Niro',
      },
      {
        name: 'John Cazale',
      },
      {
        name: 'Talia Shire',
      },
      {
        name: 'Lee Strasberg',
      },
      {
        name: 'Michael V. Gazzo',
      },
      {
        name: 'G.D. Spradlin',
      },
      {
        name: 'Richard Bright',
      },
      {
        name: 'Gastone Moschin',
      },
      {
        name: 'Bruno Kirby',
      },
      {
        name: 'Tim Robbins',
      },
      {
        name: 'Bob Gunton',
      },
      {
        name: 'William Sadler',
      },
      {
        name: 'Clancy Brown',
      },
      {
        name: 'Gil Bellows',
      },
      {
        name: 'Mark Rolston',
      },
      {
        name: 'James Whitmore',
      },
    ];

    for await (const data of dumy) {
      console.log(data.name);
      await addCast(data.name);
    }

    console.log(`${dumy.length} genre created`);
  } catch (error) {
    throw error;
  }
};
