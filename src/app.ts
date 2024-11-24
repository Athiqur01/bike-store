import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { bikeRoute } from './app/modules/bike/bike.route';
import { orderRoute } from './app/modules/order/order.route';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

//Application Routes
app.use('/api', bikeRoute);
app.use('/api', orderRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('got data');
});

export default app;
