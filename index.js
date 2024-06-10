const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middlewares/authMiddleware');
const { getPraktikanAll } = require('./controllers/praktikanController');
const praktikanRoutes = require('./routes/praktikanRoutes');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.use('/auth', authRoutes);
app.use('/praktikan',authMiddleware, praktikanRoutes);
app.get('/', (req, res) => {
  res.render('login');
});
app.get('/dashboard', authMiddleware, getPraktikanAll);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
