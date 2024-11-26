import { Router } from 'express';
import { Container } from 'instances-container';
import UserHandler from './handler';
import routes from './routes';


const userRoutes = (container: Container): Router => {
  const userHandler = new UserHandler(container);
  return routes(userHandler, container);
};

export default userRoutes;
