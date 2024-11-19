import 'dotenv/config';
import express, { Express, Request, Response } from 'express';
// import ClientError from '@commons/exceptions/ClientError';



const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.send("ok");
});


app.listen(3000, () => {
  console.log("Server up and running...")
});
