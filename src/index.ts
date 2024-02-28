import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path = require('path');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/public', express.static(path.join(__dirname, '..', 'static')));

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
