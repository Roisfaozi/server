const { addTicket } = require('../src/models/ticket');

module.exports = async () => {
  try {
    const seatSeed = [
      {
        booking_id: 1,
        seat_number: 101,
        price: 15.99,
      },
      {
        booking_id: 2,
        seat_number: 102,
        price: 20.5,
      },
      {
        booking_id: 3,
        seat_number: 103,
        price: 18.75,
      },
      {
        booking_id: 4,
        seat_number: 104,
        price: 14.99,
      },
      {
        booking_id: 5,
        seat_number: 105,
        price: 22.0,
      },
      {
        booking_id: 6,
        seat_number: 106,
        price: 19.25,
      },
      {
        booking_id: 7,
        seat_number: 107,
        price: 16.5,
      },
      {
        booking_id: 8,
        seat_number: 108,
        price: 21.99,
      },
      {
        booking_id: 9,
        seat_number: 109,
        price: 17.5,
      },
      {
        booking_id: 10,
        seat_number: 110,
        price: 24.0,
      },
      {
        booking_id: 11,
        seat_number: 111,
        price: 23.5,
      },
      {
        booking_id: 12,
        seat_number: 112,
        price: 18.99,
      },
      {
        booking_id: 13,
        seat_number: 113,
        price: 25.5,
      },
      {
        booking_id: 14,
        seat_number: 114,
        price: 16.99,
      },
      {
        booking_id: 15,
        seat_number: 115,
        price: 19.99,
      },
      {
        booking_id: 16,
        seat_number: 116,
        price: 22.5,
      },
    ];

    for await (const data of seatSeed) {
      await addTicket(data.booking_id, data.seat_number, data.price);
    }

    console.log(`${seatSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
