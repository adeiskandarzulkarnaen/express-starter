import { Request, Response, NextFunction } from 'express';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
function notfoundpathhandler(req: Request, res: Response, next: NextFunction): void {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource does not exist'
  });
};

export default notfoundpathhandler;
