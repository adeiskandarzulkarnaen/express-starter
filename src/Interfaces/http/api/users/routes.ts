import { Router } from 'express';
import UserHandler from './handler';


const routes = (handler: UserHandler): Router => {
  const router = Router();

  router.post('/users', handler.postUserHandler);

  return router;
};

export default routes;
