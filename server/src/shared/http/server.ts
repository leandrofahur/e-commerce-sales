import express from 'express';
import cors from 'cors';
import routes from './routes';
import checkServer from '../middleware/checkServer';

const app = express();

app.use(cors());
app.use(express.json());
app.use(checkServer);
app.use(routes);

app.listen('5000', () => {
  console.log('⚡︎ Server up and running on port 5000');
});
