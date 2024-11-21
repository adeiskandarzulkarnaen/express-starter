/* eslint-disable @typescript-eslint/no-unused-vars */

import 'dotenv/config';
import express, { Express, Request, Response, NextFunction } from 'express';

import InvariantError from './src/Commons/exceptions/InvariantError';
import DomainErrorTranslator from './src/Commons/exceptions/DomainErrorTranslator';
import ClientError from './src/Commons/exceptions/ClientError';


import errorhandler from './src/Commons/middleware/errorhandler';

const start = () => {
  const app: Express = express();
  app.use(express.json());
  // app.disable('x-powered-by');

  app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
      status: 'success',
      message: 'hallo asri'
    });
  });

  app.get('/error', (req: Request, res: Response) => {
    throw new Error('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY');
    // throw new InvariantError('aku sayang asri');
  });

  app.use(errorhandler);

  const port = 3000;
  app.listen(port, () => {
    console.log(`Server up and running on port ${port}...`);
  });
};


start();

