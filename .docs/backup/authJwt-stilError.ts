import { expressjwt } from 'express-jwt';
import config from '@commons/config';
import AuthorizationError from '@commons/exceptions/AuthorizationError';


const jwtAuth = (): ReturnType<typeof expressjwt> => {
  if (!config.jwt.secret) {
    throw new Error('JWT secret is not defined in the configuration.');
  }

  return expressjwt({
    secret: config.jwt.secret,
    algorithms: ['HS256'],
    credentialsRequired: true,
    onExpired: () => {
      throw new AuthorizationError("unauthorize'");
    },
  });
};

export default jwtAuth;
