const { hash } = require('bcrypt');
const userModel = require('../models/users');
const hashing = require('../utils/hash');

const controller = {
  async getAllUsers(req, res) {
    try {
      const users = await userModel.getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getUserByUsename(req, res) {
    try {
      const { username } = req.params;
      const user = await userModel.getUserByUsename(username);

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async getUserById(req, res) {
    try {
      const { userId } = req.params;
      const user = await userModel.getUserById(userId);

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async addUser(req, res) {
    try {
      const { username, password, email } = req.body;
      const hashedPw = await hashing(password);
      const newUser = await userModel.addUser({
        username,
        hashedPw,
        email,
      });
      res.json(newUser);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async updateUser(req, res) {
    try {
      const { userId } = req.params;
      const { username, password, email } = req.body;
      const updatedUser = await userModel.updateUser(userId, {
        username,
        password,
        email,
      });

      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async deleteUser(req, res) {
    try {
      const { userId } = req.params;
      const deletedUser = await userModel.deleteUser(userId);

      if (deletedUser) {
        res.json({ success: true });
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = controller;
