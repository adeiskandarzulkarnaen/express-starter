import 'dotenv/config';
import { Express } from 'express';
import container from '@infrastructures/container';
import createServer from '@infrastructures/http/createServer';

const start = async () => {
  const app: Express = createServer(container);

  const port = process.env.PORT;
  app.listen(port, () => {
    console.log(`Server up and running on port ${port}...`);
  });
};

start();
