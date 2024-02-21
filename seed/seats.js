const { addSeat } = require('../src/models/seats');

module.exports = async () => {
  try {
    const seatSeed = [
      { row: 1, col: 1, seat_name: 'A1', status: 'available' },
      { row: 1, col: 2, seat_name: 'A2', status: 'available' },
      { row: 1, col: 3, seat_name: 'A3', status: 'available' },
      { row: 1, col: 4, seat_name: 'A4', status: 'available' },
      { row: 1, col: 5, seat_name: 'A5', status: 'available' },
      { row: 1, col: 6, seat_name: 'A6', status: 'available' },
      { row: 1, col: 7, seat_name: 'A7', status: 'available' },
      { row: 2, col: 1, seat_name: 'B1', status: 'available' },
      { row: 2, col: 2, seat_name: 'B2', status: 'available' },
      { row: 2, col: 3, seat_name: 'B3', status: 'available' },
      { row: 2, col: 4, seat_name: 'B4', status: 'available' },
      { row: 2, col: 5, seat_name: 'B5', status: 'available' },
      { row: 2, col: 6, seat_name: 'B6', status: 'available' },
      { row: 2, col: 7, seat_name: 'B7', status: 'available' },
      { row: 3, col: 1, seat_name: 'C1', status: 'available' },
      { row: 3, col: 2, seat_name: 'C2', status: 'available' },
      { row: 3, col: 3, seat_name: 'C3', status: 'available' },
      { row: 3, col: 4, seat_name: 'C4', status: 'available' },
      { row: 3, col: 5, seat_name: 'C5', status: 'available' },
      { row: 3, col: 6, seat_name: 'C6', status: 'available' },
      { row: 3, col: 7, seat_name: 'C7', status: 'available' },
      { row: 4, col: 1, seat_name: 'D1', status: 'available' },
      { row: 4, col: 2, seat_name: 'D2', status: 'available' },
      { row: 4, col: 3, seat_name: 'D3', status: 'available' },
      { row: 4, col: 4, seat_name: 'D4', status: 'available' },
      { row: 4, col: 5, seat_name: 'D5', status: 'available' },
      { row: 4, col: 6, seat_name: 'D6', status: 'available' },
      { row: 4, col: 7, seat_name: 'D7', status: 'available' },
      { row: 5, col: 1, seat_name: 'E1', status: 'available' },
      { row: 5, col: 2, seat_name: 'E2', status: 'available' },
      { row: 5, col: 3, seat_name: 'E3', status: 'available' },
      { row: 5, col: 4, seat_name: 'E4', status: 'available' },
      { row: 5, col: 5, seat_name: 'E5', status: 'available' },
      { row: 5, col: 6, seat_name: 'E6', status: 'available' },
      { row: 5, col: 7, seat_name: 'E7', status: 'available' },
      { row: 6, col: 1, seat_name: 'F1', status: 'available' },
      { row: 6, col: 2, seat_name: 'F2', status: 'available' },
      { row: 6, col: 3, seat_name: 'F3', status: 'available' },
      { row: 6, col: 4, seat_name: 'F4', status: 'available' },
      { row: 6, col: 5, seat_name: 'F5', status: 'available' },
      { row: 6, col: 6, seat_name: 'F6', status: 'available' },
      { row: 6, col: 7, seat_name: 'F7', status: 'available' },
      { row: 7, col: 1, seat_name: 'G1', status: 'available' },
      { row: 7, col: 2, seat_name: 'G2', status: 'available' },
      { row: 7, col: 3, seat_name: 'G3', status: 'available' },
      { row: 7, col: 4, seat_name: 'G4', status: 'available' },
      { row: 7, col: 5, seat_name: 'G5', status: 'available' },
      { row: 7, col: 6, seat_name: 'G6', status: 'available' },
      { row: 7, col: 7, seat_name: 'G7', status: 'available' },
    ];

    const premiereIds = Array.from({ length: 10 }, (_, index) => index + 1);

    for await (const data of seatSeed) {
      for await (const premiere_id of premiereIds) {
        await addSeat(
          premiere_id,
          data.row,
          data.col,
          data.seat_name,
          data.status
        );
      }
    }

    console.log(`${seatSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
