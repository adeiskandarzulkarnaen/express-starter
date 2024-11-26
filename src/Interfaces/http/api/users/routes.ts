import { Router } from 'express';
import { Container } from 'instances-container';
import UserHandler from './handler';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = (handler: UserHandler, container: Container): Router => {
  const router = Router();

  router.post('/users', handler.postUserHandler);

  return router;
};

export default routes;
