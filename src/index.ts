import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path = require('path');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/static', express.static(path.join(__dirname, '..', 'static')));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
