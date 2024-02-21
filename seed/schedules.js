const { addSchedule } = require('../src/models/schedules');

module.exports = async () => {
  try {
    const schedulesSeed = [
      {
        premiere_id: 1,
        start_time: '2024-02-21T10:00:00Z',
        end_time: '2024-02-21T12:00:00Z',
      },
      {
        premiere_id: 2,
        start_time: '2024-02-22T14:00:00Z',
        end_time: '2024-02-22T16:00:00Z',
      },
      {
        premiere_id: 3,
        start_time: '2024-02-23T18:00:00Z',
        end_time: '2024-02-23T20:00:00Z',
      },
      {
        premiere_id: 4,
        start_time: '2024-02-24T12:00:00Z',
        end_time: '2024-02-24T14:00:00Z',
      },
      {
        premiere_id: 5,
        start_time: '2024-02-25T16:00:00Z',
        end_time: '2024-02-25T18:00:00Z',
      },
      {
        premiere_id: 6,
        start_time: '2024-02-26T20:00:00Z',
        end_time: '2024-02-26T22:00:00Z',
      },
      {
        premiere_id: 7,
        start_time: '2024-02-27T10:00:00Z',
        end_time: '2024-02-27T12:00:00Z',
      },
      {
        premiere_id: 8,
        start_time: '2024-02-28T14:00:00Z',
        end_time: '2024-02-28T16:00:00Z',
      },
      {
        premiere_id: 9,
        start_time: '2024-02-29T18:00:00Z',
        end_time: '2024-02-29T20:00:00Z',
      },
      {
        premiere_id: 10,
        start_time: '2024-03-01T12:00:00Z',
        end_time: '2024-03-01T14:00:00Z',
      },
    ];

    for await (const data of schedulesSeed) {
      console.log(data);
      await addSchedule(data.premiere_id, data.start_time, data.end_time);
    }

    console.log(`${schedulesSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
