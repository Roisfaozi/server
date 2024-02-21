const { addPremiere } = require('../src/models/premieres');

module.exports = async () => {
  try {
    const premieresSeed = [
      {
        movie_id: 1,
        location_id: 1,
        date: '2022-03-01',
        time: '19:00',
        total_seat: 200,
      },
      {
        movie_id: 2,
        location_id: 11,
        date: '2022-03-02',
        time: '18:30',
        total_seat: 180,
      },
      {
        movie_id: 3,
        location_id: 3,
        date: '2022-03-03',
        time: '20:00',
        total_seat: 220,
      },
      {
        movie_id: 4,
        location_id: 1,
        date: '2022-03-05',
        time: '21:15',
        total_seat: 190,
      },
      {
        movie_id: 5,
        location_id: 11,
        date: '2022-03-07',
        time: '20:30',
        total_seat: 210,
      },
      {
        movie_id: 6,
        location_id: 3,
        date: '2022-03-10',
        time: '19:45',
        total_seat: 180,
      },
      {
        movie_id: 7,
        location_id: 1,
        date: '2022-03-12',
        time: '18:00',
        total_seat: 200,
      },
      {
        movie_id: 8,
        location_id: 11,
        date: '2022-03-15',
        time: '17:30',
        total_seat: 190,
      },
      {
        movie_id: 9,
        location_id: 3,
        date: '2022-03-18',
        time: '19:30',
        total_seat: 210,
      },
      {
        movie_id: 10,
        location_id: 1,
        date: '2022-03-20',
        time: '20:45',
        total_seat: 200,
      },
    ];

    for await (const data of premieresSeed) {
      console.log(data);
      await addPremiere(
        data.movie_id,
        data.location_id,
        data.date,
        data.time,
        data.total_seat
      );
    }

    console.log(`${premieresSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
