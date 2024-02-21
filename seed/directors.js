const { addDiretor } = require('../src/models/directors');

module.exports = async () => {
  try {
    const directorsSeed = [
      { name: 'David Yates' },
      { name: 'Ruben Fleischer' },
      { name: 'Jon Watts' },
      { name: 'Jon Favreau' },
      { name: 'Chad Stahelski' },
      { name: 'Cate Shortland' },
      { name: 'Robert Zemeckis' },
      { name: 'Christopher Nolan' },
      { name: 'Quentin Tarantino' },
      { name: 'Francis Ford Coppola' },
      { name: 'Lana Wachowski and Lilly Wachowski' },
      { name: 'David Fincher' },
      { name: 'Peter Jackson' },
      { name: 'Frank Darabont' },
    ];

    for await (const data of directorsSeed) {
      console.log(data.name);
      await addDiretor(data.name);
    }

    console.log(`${directorsSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
