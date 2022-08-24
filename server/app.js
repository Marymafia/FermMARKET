require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
const CategoryRouter = require('./routes/CategoryRouter');
// const axios = require('axios');

const UserRouter = require('./routes/UserRouter');
const Categoryes = require('./routes/CategoryesAllRouter');
const CardCategorie = require('./routes/CardsCategoriesRouter');
const BestRouter = require('./routes/BestRouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// nv'
app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(session({
  name: 'Ferma',
  store: new FileStore({}),
  secret: 'jdkjelkwjelk',
  saveUninitialized: false,
  resave: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
  },
}));

app.use('/api/user', UserRouter);

app.use('/api', Categoryes);
app.use('/api/products', CardCategorie);
app.use('/api/category', CategoryRouter);
app.use('/api/addBest', BestRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
