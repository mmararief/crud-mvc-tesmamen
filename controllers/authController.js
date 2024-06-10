
const jwt = require('jsonwebtoken');
const { getUserByUsername } = require('../models/user');


const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await getUserByUsername(username);

  if (!user || user.password !== password) {
    return res.status(400).json({ error: 'Invalid email or password' });
  }

  const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });
  res.redirect('/dashboard');
};

const logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};


module.exports = {
  login,
  logout,
};
