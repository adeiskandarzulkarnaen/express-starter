import { Router } from 'express';
import { Container } from 'instances-container';
import UserHandler from './handler';
import routes from './routes';


const usersRoute = (container: Container): Router => {
  const userHandler = new UserHandler(container);
  return routes(userHandler);
};

export default usersRoute;
