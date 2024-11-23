import express, { Express } from 'express';

/* routes */
import usersRoute from '@interfaces/http/api/users';
import errorhandler from '@interfaces/http/middleware/errorhandler';
import notfoundpathhandler from '@interfaces/http/middleware/notfoundpathhandler';
import { Container } from 'instances-container';



const createServer = (container: Container): Express => {
  const app: Express = express();
  app.use(express.json());
  app.disable('x-powered-by');

  /* use routes */
  app.use(usersRoute(container));

  app.use(notfoundpathhandler);
  app.use(errorhandler);
  return app;
};


export default createServer;
