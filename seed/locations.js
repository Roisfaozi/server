const { addLocation } = require('../src/models/locations');

module.exports = async () => {
  try {
    const locationsSeed = [
      // {
      //   city: 'Jakarta',
      //   address: 'Central Jakarta',
      // },
      {
        city: 'Surabaya',
        address: 'East Java',
      },
      {
        city: 'Bandung',
        address: 'West Java',
      },
      {
        city: 'Medan',
        address: 'North Sumatra',
      },
      {
        city: 'Makassar',
        address: 'South Sulawesi',
      },
      {
        city: 'Yogyakarta',
        address: 'Yogyakarta Special Region',
      },
      {
        city: 'Semarang',
        address: 'Central Java',
      },
      {
        city: 'Palembang',
        address: 'South Sumatra',
      },
      {
        city: 'Denpasar',
        address: 'Bali',
      },
      {
        city: 'Banjarmasin',
        address: 'South Kalimantan',
      },
    ];

    for await (const data of locationsSeed) {
      console.log(data.city);
      await addLocation(data.city, data.address);
    }

    console.log(`${locationsSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
