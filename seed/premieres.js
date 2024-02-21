const { addPremiere } = require('../src/models/premieres');

module.exports = async () => {
  try {
    const premieresSeed = [
      {
        movie_id: 1,
        location_id: 1,
        date: '2022-02-28T17:00:00.000Z',
        time: '19:00:00',
        total_seat: 200,
        premiere_name: 'Cinepolis',
      },
      {
        movie_id: 2,
        location_id: 11,
        date: '2022-03-01T17:00:00.000Z',
        time: '18:30:00',
        total_seat: 180,
        premiere_name: 'Platinum Cineplex',
      },
      {
        movie_id: 3,
        location_id: 3,
        date: '2022-03-02T17:00:00.000Z',
        time: '20:00:00',
        total_seat: 220,
        premiere_name: 'XXI Cinema',
      },
      {
        movie_id: 4,
        location_id: 1,
        date: '2022-03-04T17:00:00.000Z',
        time: '21:15:00',
        total_seat: 190,
        premiere_name: 'Cinepolis',
      },
      {
        movie_id: 5,
        location_id: 11,
        date: '2022-03-06T17:00:00.000Z',
        time: '20:30:00',
        total_seat: 210,
        premiere_name: 'XXI Cinema',
      },
      {
        movie_id: 6,
        location_id: 3,
        date: '2022-03-09T17:00:00.000Z',
        time: '19:45:00',
        total_seat: 180,
        premiere_name: 'Flicks Studio',
      },
      {
        movie_id: 7,
        location_id: 1,
        date: '2022-03-11T17:00:00.000Z',
        time: '18:00:00',
        total_seat: 200,
        premiere_name: 'XXI Cinema',
      },
      {
        movie_id: 8,
        location_id: 11,
        date: '2022-03-14T17:00:00.000Z',
        time: '17:30:00',
        total_seat: 190,
        premiere_name: 'CGV Cinemas',
      },
      {
        movie_id: 9,
        location_id: 3,
        date: '2022-03-17T17:00:00.000Z',
        time: '19:30:00',
        total_seat: 210,
        premiere_name: 'CGV Cinemas',
      },
      {
        movie_id: 10,
        location_id: 1,
        date: '2022-03-19T17:00:00.000Z',
        time: '20:45:00',
        total_seat: 200,
        premiere_name: 'Cinepolis',
      },
    ];

    for await (const data of premieresSeed) {
      console.log(data);
      await addPremiere(
        data.movie_id,
        data.location_id,
        data.date,
        data.time,
        data.total_seat,
        data.premiere_name
      );
    }

    console.log(`${premieresSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
