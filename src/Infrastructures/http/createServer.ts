import express, { Express } from 'express';
import { Container } from 'instances-container';


/* routes */
import userRoutes from '@interfaces/http/api/users';
import authRoutes from '@interfaces/http/api/authentications';
import onErrorHandler from '@interfaces/http/middleware/onErrorHandler';
import onNotFoundHandler from '@interfaces/http/middleware/onNotFoundHandler';



const createServer = (container: Container): Express => {
  const app: Express = express();

  // * GLOBAL MIDDLEWARE
  app.use(express.json());
  app.disable('x-powered-by');


  // * ROUTING
  app.use(userRoutes(container));
  app.use(authRoutes(container));


  // * GLOBAL ERROR HANDLING
  app.use(onNotFoundHandler);
  app.use(onErrorHandler);
  return app;
};


export default createServer;
