import { Request, Response, NextFunction } from 'express';
import ClientError from '@commons/exceptions/ClientError';
import DomainErrorTranslator from '@commons/exceptions/DomainErrorTranslator';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorhandler(err: Error, req: Request, res: Response, next: NextFunction): void {
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


export default errorhandler;
