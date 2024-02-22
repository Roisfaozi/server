const { addBooking } = require('../src/models/bookings');

module.exports = async () => {
  try {
    const dumy = [
      {
        user_id: 1,
        schedule_id: 1,
        seat_id: 1,
      },
      {
        user_id: 2,
        schedule_id: 2,
        seat_id: 5,
      },
      {
        user_id: 3,
        schedule_id: 3,
        seat_id: 8,
      },
      {
        user_id: 4,
        schedule_id: 1,
        seat_id: 12,
      },
      {
        user_id: 1,
        schedule_id: 4,
        seat_id: 15,
      },
      {
        user_id: 2,
        schedule_id: 5,
        seat_id: 18,
      },
      {
        user_id: 3,
        schedule_id: 2,
        seat_id: 21,
      },
      {
        user_id: 4,
        schedule_id: 3,
        seat_id: 24,
      },
      {
        user_id: 1,
        schedule_id: 6,
        seat_id: 27,
      },
      {
        user_id: 2,
        schedule_id: 4,
        seat_id: 30,
      },
      {
        user_id: 3,
        schedule_id: 7,
        seat_id: 33,
      },
      {
        user_id: 9,
        schedule_id: 8,
        seat_id: 36,
      },
      {
        user_id: 1,
        schedule_id: 5,
        seat_id: 39,
      },
      {
        user_id: 2,
        schedule_id: 9,
        seat_id: 42,
      },
      {
        user_id: 8,
        schedule_id: 10,
        seat_id: 45,
      },
      {
        user_id: 4,
        schedule_id: 6,
        seat_id: 48,
      },
      {
        user_id: 5,
        schedule_id: 10,
        seat_id: 51,
      },
      {
        user_id: 2,
        schedule_id: 5,
        seat_id: 54,
      },
      {
        user_id: 3,
        schedule_id: 2,
        seat_id: 57,
      },
      {
        user_id: 6,
        schedule_id: 8,
        seat_id: 60,
      },
    ];

    for await (const data of dumy) {
      console.log(data.user_id);
      await addBooking(data.user_id, data.schedule_id, data.seat_id);
    }

    console.log(`${dumy.length} genre created`);
  } catch (error) {
    throw error;
  }
};
