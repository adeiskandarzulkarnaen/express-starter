import express, { Express } from 'express';

/* routes */
import usersRoute from '@interfaces/http/api/users';
import errorHandler from '@commons/middleware/errorhandler';
import notfoundpathhandler from '@commons/middleware/notfoundpathhandler';
import { Container } from 'instances-container';



const createServer = (container: Container): Express => {
  const app: Express = express();
  app.use(express.json());
  app.disable('x-powered-by');

  /* use routes */
  app.use(usersRoute(container));

  app.use(notfoundpathhandler);
  app.use(errorHandler);
  return app;
};


export default createServer;
