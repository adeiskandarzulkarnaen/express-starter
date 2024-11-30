import { Router } from 'express';
import { Container } from 'instances-container';
import UserHandler from './handler';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = (handler: UserHandler, container: Container): Router => {
  const router = Router();

  router.post('/users', ...handler.postUserHandlers);
  router.get('/users', ...handler.getUserHandlers);

  return router;
};

export default routes;
