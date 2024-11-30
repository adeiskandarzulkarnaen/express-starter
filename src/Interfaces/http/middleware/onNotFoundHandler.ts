import { Request, Response, NextFunction } from 'express';


function onNotFoundHandler(req: Request, res: Response, next: NextFunction): void {
  res.status(404).json({
    error: 'Not Found',
    message: 'the requested resource does not exist'
  });
};

export default onNotFoundHandler;
