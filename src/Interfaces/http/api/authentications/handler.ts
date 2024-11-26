import AuthLoginUseCase from '@applications/use_case/AuthLoginUseCase';
import { NextFunction, Request, Response } from 'express';
import { Container } from 'instances-container';


class AuthHandler {
  constructor(private readonly container: Container) {
    this.postAuthHandler = this.postAuthHandler.bind(this);
  }

  async postAuthHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const authLoginUseCase: AuthLoginUseCase = this.container.getInstance(AuthLoginUseCase.name);
      const { accessToken } = await authLoginUseCase.execute(req.body);

      res.status(201).json({
        status: 'success',
        message: 'berhasil login!',
        data: {
          accessToken,
        }
      });
    } catch (error) {
      next(error);
    }
  }
};

export default AuthHandler;
