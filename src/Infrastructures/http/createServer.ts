import express, { Express } from 'express';
import { Container } from 'instances-container';


/* routes */
import userRoutes from '@interfaces/http/api/users';
import authRoutes from '@interfaces/http/api/authentications';
import errorhandler from '@interfaces/http/middleware/errorhandler';
import notfoundpathhandler from '@interfaces/http/middleware/notfoundpathhandler';



const createServer = (container: Container): Express => {
  const app: Express = express();
  app.use(express.json());
  app.disable('x-powered-by');

  /* use routes */
  app.use(userRoutes(container));
  app.use(authRoutes(container));

  app.use(notfoundpathhandler);
  app.use(errorhandler);
  return app;
};


export default createServer;
