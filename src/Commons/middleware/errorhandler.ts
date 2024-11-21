/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response, NextFunction } from 'express';
import ClientError from '../exceptions/ClientError';
import DomainErrorTranslator from '../exceptions/DomainErrorTranslator';


function errorHandler(err: Error, req: Request, res: Response, next: NextFunction): void {
  const translatedError = DomainErrorTranslator.translate(err);
  if (translatedError instanceof ClientError) {
    res.status(translatedError.statusCode).json({
      status: 'fail',
      message: translatedError.message,
    });
    return;
  }

  console.log(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'terjadi kegagalan pada server kami'
  });
  return;
}


export default errorHandler;
