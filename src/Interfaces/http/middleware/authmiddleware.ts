// import jwt from 'jsonwebtoken';
// import { Request, Response, NextFunction } from 'express';
// import AuthenticationError from '../exceptions/AuthenticationError';


// function authmiddleware(req: Request, res: Response, next: NextFunction) {
//   try {
//     const { authorization } = req.headers;
//     if (!authorization) throw new AuthenticationError('No Access Token');

//     const token = authorization.split(' ')[1];

//     req.auth = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
//     next();
//   } catch (error) {
//     next(error);
//   }
// }

// export default authmiddleware;
