const { addCast } = require('../src/models/casts');

module.exports = async () => {
  try {
    const dumy = [
      { name: 'Eddie Redmayne' },
      { name: 'Katherine Waterston' },
      { name: 'Dan Fogler' },
      { name: 'Alison Sudol' },
      { name: 'Ezra Miller' },
      { name: 'Samantha Morton' },
      { name: 'Jon Voight' },
      { name: 'Carmen Ejogo' },
      { name: 'Colin Farrell' },
      { name: 'Tom Holland' },
      { name: 'Mark Wahlberg' },
      { name: 'Sophia Ali' },
      { name: 'Antonio Banderas' },
      { name: 'Tati Gabrielle' },
      { name: 'Patricia Meeden' },
      { name: 'Geoffrey Cantor' },
      { name: 'Sarah Petrick' },
      { name: 'Michael Keaton' },
      { name: 'Robert Downey Jr.' },
      { name: 'Marisa Tomei' },
      { name: 'Jon Favreau' },
      { name: 'Gwyneth Paltrow' },
      { name: 'Zendaya' },
      { name: 'Donald Glover' },
      { name: 'Jacob Batalon' },
      { name: 'Laura Harrier' },
      { name: 'Tony Revolori' },
      { name: 'Bokeem Woodbine' },
      { name: 'Tyne Daly' },
      { name: 'Donald Glover' },
      { name: 'Seth Rogen' },
      { name: 'Chiwetel Ejiofor' },
      { name: 'Alfre Woodard' },
      { name: 'Billy Eichner' },
      { name: 'John Kani' },
      { name: 'John Oliver' },
      { name: 'Beyoncé Knowles-Carter' },
      { name: 'James Earl Jones' },
      { name: 'Keanu Reeves' },
      { name: 'Halle Berry' },
      { name: 'Ian McShane' },
      { name: 'Laurence Fishburne' },
      { name: 'Mark Dacascos' },
      { name: 'Asia Kate Dillon' },
      { name: 'Lance Reddick' },
      { name: 'Anjelica Huston' },
      { name: 'Saïd Taghmaoui' },
      { name: 'Jerome Flynn' },
      { name: 'Jason Mantzoukas' },
      { name: 'Scarlett Johansson' },
      { name: 'Florence Pugh' },
      { name: 'David Harbour' },
      { name: 'O-T Fagbenle' },
      { name: 'Olga Kurylenko' },
      { name: 'William Hurt' },
      { name: 'Ray Winstone' },
      { name: 'Rachel Weisz' },
      { name: 'Anne Hathaway' },
      { name: 'Octavia Spencer' },
      { name: 'Stanley Tucci' },
      { name: 'Chris Rock' },
      { name: 'Jahzir Bruno' },
      { name: 'Kristin Chenoweth' },
      { name: 'Codie-Lei Eastick' },
      { name: 'Charles Edwards' },
      { name: 'John David Washington' },
      { name: 'Robert Pattinson' },
      { name: 'Elizabeth Debicki' },
      { name: 'Dimple Kapadia' },
      { name: 'Michael Caine' },
      { name: 'Kenneth Branagh' },
      { name: 'Aaron Taylor-Johnson' },
      { name: 'Clémence Poésy' },
      { name: 'Himesh Patel' },
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
