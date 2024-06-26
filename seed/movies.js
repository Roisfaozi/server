const { addMovie } = require('../src/models/movies');

module.exports = async () => {
  try {
    const dumy = [
      // {
      //   title: "Fantastic Beasts and Where to Find Them",
      //   poster_url: "http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png",
      //   synopsis:
      //     "The adventures of writer Newt Scamander in New York's secret community of witches and wizards seventy years before Harry Potter reads his book in school",
      //   release_date: "2016-11-16",
      //   duration: 156,
      //   rating: 7.8,
      //   genre: [1, 2],
      //   director: [1],
      //   casts: [2, 3, 4, 5, 6, 7, 8, 9, 10],
      // },
      {
        title: 'Uncharted',
        synopsis:
          'Street-smart Nathan Drake is recruited by seasoned treasure hunter Victor "Sully" Sullivan to recover a fortune amassed by Ferdinand Magellan, and lost 500 years ago by the House of Moncada. [11]',
        poster_url:
          'http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png',
        release_date: '2022-02-16',
        duration: 156,
        rating: 7.8,
        genre: [7, 9],
        director: [2],
        casts: [11, 12, 13, 14, 15, 16, 17, 18],
      },
      {
        title: 'spider man homecoming',
        synopsis:
          'Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, and finds himself on the trail of a new menace prowling the skies of New York City. [18]',
        poster_url:
          'http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png',
        release_date: '2017-07-07',
        duration: 156,
        rating: 7.8,
        genre: [7, 1],
        director: [3],
        casts: [11, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      },
      {
        title: 'The Lion King',
        synopsis:
          'After the murder of his father, a young lion prince flees his kingdom only to learn the true meaning of responsibility and bravery. [2]',
        poster_url:
          'http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png',
        release_date: '2019-07-17',
        duration: 156,
        rating: 7.8,
        genre: [7, 9],
        director: [4],
        casts: [32, 33, 34, 35, 36, 37, 38, 39, 40],
      },
      {
        title: 'John Wick: Chapter 3',
        synopsis:
          "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere. [29]",
        poster_url:
          'http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png',
        release_date: '2019-05-17',
        duration: 156,
        rating: 7.8,
        genre: [7],
        director: [5],
        casts: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      },
      {
        title: 'Black Widow',
        synopsis:
          'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. [22]',
        poster_url:
          'http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png',
        release_date: '2021-05-09',
        duration: 156,
        rating: 7.8,
        genre: [7, 4],
        director: [6],
        casts: [51, 52, 53, 54, 55, 56, 57, 58],
      },
      {
        title: 'The Witches',
        synopsis:
          'A young boy and his grandmother have a run-in with a coven of witches and their leader. [10]',
        release_date_date: '2020-10-22',
        duration: 156,
        rating: 7.8,
        poster_url:
          'http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png',
        release_date: '2020-10-22',
        duration: 156,
        rating: 7.8,
        genre: [7, 5],
        director: [7],
        casts: [59, 60, 61, 62, 63, 64, 65, 66],
      },
      {
        title: 'Tenet',
        synopsis:
          'A secret agent embarks on a dangerous, time-bending mission to prevent the start of World War III. [14]',
        poster_url:
          'http://res.cloudinary.com/dfs7nermk/image/upload/v1675766691/kehdlqdfdhzr8zqkfe4y.png',
        release_date: '2021-02-10',
        duration: 156,
        rating: 7.8,
        genre: [7, 10],
        director: [8],
        casts: [67, 68, 69, 70, 71, 72, 73, 74, 75],
      },
      {
        title: 'Pulp Fiction',
        synopsis:
          'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption. [26]',
        poster_url: 'https://image.com/image5.jpeg',
        release_date: '1994-10-14',
        duration: 156,
        rating: 7.8,
        genre: [9, 10],
        director: [9],
        casts: [76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87],
      },
      {
        title: 'The Godfather',
        synopsis:
          'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. [34]',
        poster_url: 'https://image.com/image6.jpeg',
        release_date: '1972-03-24',
        duration: 156,
        rating: 7.8,
        genre: [1, 2],
        director: [10],
        casts: [88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
      },
      {
        title: 'The Matrix',
        synopsis:
          'Seorang peretas komputer bernama Neo menemukan bahwa dunia yang ia kenal hanyalah sebuah simulasi yang diciptakan oleh mesin cerdas, dan bergabung dengan pemberontakan manusia melawan penindas mereka.',
        poster_url: 'https://image.com/image7.jpeg',
        release_date: '1999-03-31',
        duration: 156,
        rating: 7.8,
        genre: [3, 4],
        director: [11],
        casts: [40, 43, 44, 45, 50, 81, 100, 101, 102, 103],
      },
      {
        title: 'Forrest Gump',
        synopsis:
          'Seorang pria sederhana dengan IQ rendah namun niat baik menjalani kehidupan yang luar biasa, menjadi saksi dan berperan dalam beberapa peristiwa penting dalam sejarah Amerika Serikat.',
        poster_url: 'https://image.com/image8.jpeg',
        release_date: '1994-07-06',
        duration: 156,
        rating: 7.8,
        genre: [5, 6],
        director: [13],
        casts: [104, 105, 106, 107, 108, 109, 110, 111, 112, 113],
      },
      {
        title: 'Fight Club',
        synopsis:
          'Seorang pekerja kantor yang mengalami insomnia membentuk sebuah klub pertarungan bawah tanah dengan seorang penjual sabun yang karismatik, dan terlibat dalam skema pembuatan sabun dan terorisme anarkis.',
        poster_url: 'https://image.com/image9.jpeg',
        release_date: '1999-10-15',
        duration: 156,
        rating: 7.8,
        genre: [7, 8],
        director: [12],
        casts: [114, 115, 116, 117, 118, 119, 120, 121, 122, 123],
      },
      // {
      //   title: 'The Lord of the Rings: The Return of the King',
      //   poster_url: 'https://image.com/image10.jpeg',
      //   release_date: '2003-12-17',
      //   genre: [9, 10],
      //   director: [13],
      //   casts: [
      //     124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137,
      //     138, 139, 140, 141, 142, 143, 144,
      //   ],
      // },
      // {
      //   title: 'The Lion King',
      //   poster_url: 'https://image.com/image11.jpeg',
      //   release_date: '1994-06-24',
      //   genre: [1, 2],
      // },
      // {
      //   title: 'The Shawshank Redemption',
      //   poster_url: 'https://image.com/image12.jpeg',
      //   release_date: '1994-09-23',
      //   genre: [3, 4],
      // },
      // {
      //   title: 'The Godfather: Part II',
      //   poster_url: 'https://image.com/image13.jpeg',
      //   release_date: '1974-12-20',
      //   genre: [5, 6],
      // },
      // {
      //   title: 'The Dark Knight Rises',
      //   poster_url: 'https://image.com/image14.jpeg',
      //   release_date: '2012-07-20',
      //   genre: [7, 8],
      // },
      // {
      //   title: 'The Lord of the Rings: The Fellowship of the Ring',
      //   poster_url: 'https://image.com/image15.jpeg',
      //   release_date: '2001-12-19',
      //   genre: [9, 10],
      // },
      // {
      //   title: 'Inception',
      //   poster_url: 'https://image.com/image16.jpeg',
      //   release_date: '2010-07-16',
      //   genre: [1, 2],
      // },
      // {
      //   title: 'The Matrix',
      //   poster_url: 'https://image.com/image17.jpeg',
      //   release_date: '1999-03-31',
      //   genre: [3, 4],
      // },
      // {
      //   title: 'Forrest Gump',
      //   poster_url: 'https://image.com/image18.jpeg',
      //   release_date: '1994-07-06',
      //   genre: [5, 6],
      // },
      // {
      //   title: 'The Dark Knight',
      //   poster_url: 'https://image.com/image19.jpeg',
      //   release_date: '2008-07-18',
      //   genre: [7, 8],
      // },
      // {
      //   title: 'The Lion King',
      //   poster_url: 'https://image.com/image20.jpeg',
      //   release_date: '1994-06-24',
      //   genre: [9, 10],
      // },
      // {
      //   title: 'Pulp Fiction',
      //   poster_url: 'https://image.com/image21.jpeg',
      //   release_date: '1994-10-14',
      //   genre: [1, 2],
      // },
      // {
      //   title: 'Fight Club',
      //   poster_url: 'https://image.com/image22.jpeg',
      //   release_date: '1999-10-15',
      //   genre: [3, 4],
      // },
      // {
      //   title: 'The Lord of the Rings: The Two Towers',
      //   poster_url: 'https://image.com/image23.jpeg',
      //   release_date: '2002-12-18',
      //   genre: [5, 6],
      // },
      // {
      //   title: 'The Godfather',
      //   poster_url: 'https://image.com/image24.jpeg',
      //   release_date: '1972-03-24',
      //   genre: [7, 8],
      // },
      // {
      //   title: 'The Dark Knight Rises',
      //   poster_url: 'https://image.com/image25.jpeg',
      //   release_date: '2012-07-20',
      //   genre: [9, 10],
      // },
      // {
      //   title: 'Inception',
      //   poster_url: 'https://image.com/image26.jpeg',
      //   release_date: '2010-07-16',
      //   genre: [1, 2],
      // },
      // {
      //   title: 'Forrest Gump',
      //   poster_url: 'https://image.com/image27.jpeg',
      //   release_date: '1994-07-06',
      //   genre: [3, 4],
      // },
      // {
      //   title: 'The Matrix',
      //   poster_url: 'https://image.com/image28.jpeg',
      //   release_date: '1999-03-31',
      //   genre: [5, 6],
      // },
      // {
      //   title: 'The Godfather: Part II',
      //   poster_url: 'https://image.com/image29.jpeg',
      //   release_date: '1974-12-20',
      //   genre: [7, 8],
      // },
      // {
      //   title: 'The Shawshank Redemption',
      //   poster_url: 'https://image.com/image30.jpeg',
      //   release_date: '1994-09-23',
      //   genre: [9, 10],
      // },
    ];

    for await (const data of dumy) {
      console.log(data);
      await addMovie(data);
    }

    console.log(`${dumy.length} movie created`);
  } catch (error) {
    throw error;
  }
};
