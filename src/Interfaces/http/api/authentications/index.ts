import { Router } from 'express';
import { Container } from 'instances-container';
import AuthHandler from './handler';
import routes from './routes';


const authRoutes = (container: Container): Router => {
  const authHandler = new AuthHandler(container);
  return routes(authHandler, container);
};

export default authRoutes;
