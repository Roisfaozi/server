const { registerUser } = require('../src/controllers/auth');

module.exports = async () => {
  try {
    const seatSeed = [
      {
        username: 'admin1',
        password: 'adminpass1',
        email: 'admin1@example.com',
        role: 'admin',
      },
      {
        username: 'admin2',
        password: 'adminpass2',
        email: 'admin2@example.com',
        role: 'admin',
      },
      {
        username: 'admin3',
        password: 'adminpass3',
        email: 'admin3@example.com',
        role: 'admin',
      },
      {
        username: 'user1',
        password: 'userpass1',
        email: 'user1@example.com',
        role: 'user',
      },
      {
        username: 'user2',
        password: 'userpass2',
        email: 'user2@example.com',
        role: 'user',
      },
      {
        username: 'user3',
        password: 'userpass3',
        email: 'user3@example.com',
        role: 'user',
      },
      {
        username: 'admin4',
        password: 'adminpass4',
        email: 'admin4@example.com',
        role: 'admin',
      },
      {
        username: 'user4',
        password: 'userpass4',
        email: 'user4@example.com',
        role: 'user',
      },
      {
        username: 'admin5',
        password: 'adminpass5',
        email: 'admin5@example.com',
        role: 'admin',
      },
      {
        username: 'user5',
        password: 'userpass5',
        email: 'user5@example.com',
        role: 'user',
      },
      {
        username: 'user6',
        password: 'userpass6',
        email: 'user6@example.com',
        role: 'user',
      },
      {
        username: 'admin6',
        password: 'adminpass6',
        email: 'admin6@example.com',
        role: 'admin',
      },
      {
        username: 'user7',
        password: 'userpass7',
        email: 'user7@example.com',
        role: 'user',
      },
      {
        username: 'admin7',
        password: 'adminpass7',
        email: 'admin7@example.com',
        role: 'admin',
      },
      {
        username: 'user8',
        password: 'userpass8',
        email: 'user8@example.com',
        role: 'user',
      },
    ];

    for await (const data of seatSeed) {
      await registerUser(data.username, data.password, data.email, data.role);
    }

    console.log(`${seatSeed.length} genre created`);
  } catch (error) {
    throw error;
  }
};
