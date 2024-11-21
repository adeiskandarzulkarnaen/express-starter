/* eslint-disable @typescript-eslint/no-unused-vars */

import { Request, Response, NextFunction } from 'express';


function notfoundpathhandler(req: Request, res: Response, next: NextFunction): void {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource does not exist'
  });
};

export default notfoundpathhandler;
