import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import checkServer from '../middleware/checkServer';
import { errors } from 'celebrate';
import '@shared/typeorm';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());
app.use(checkServer);

app.listen('5000', () => {
  console.log('⚡︎ Server up and running on port 5000');
});
