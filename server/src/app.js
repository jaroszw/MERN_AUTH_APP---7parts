import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config/config.js';
import api from './routes/index.js';

export const app = express();
const { db } = config;
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

mongoose
  .connect(db.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Mongo DB Coected'))
  .catch((err) => console.log(err.message));

app.use('/api/v1', api);

app.get('/', (req, res) => {
  console.log('Reqeust received');
  res.json({ message: 'Server is running' });
});

export default app;
