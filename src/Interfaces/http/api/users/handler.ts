import { Request, Response, NextFunction } from 'express';
import { Container } from 'instances-container';
import { eRegisteredUser } from '@domains/users/entities/RegisteredUser';
import AddUserUseCase from '@applications/use_case/AddUserUseCase';
import expressJwtAuth, { JWTRequest } from '@interfaces/http/middleware/expressJwtAuth';

// middleware


class UserHandler {
  constructor(private readonly container: Container) {
    // do something
  };

  public postUserHandlers = [
    // * put the middleware bellow

    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      try {
        const addUserUseCase: AddUserUseCase = this.container.getInstance(AddUserUseCase.name);
        const addedUser: eRegisteredUser = await addUserUseCase.execute(req.body);

        res.status(201).json({
          status: 'success',
          message: 'berhasil menambahkan user',
          data: {
            addedUser
          },
        });
      } catch (error) {
        next(error);
      }
    }
  ];

  public getUserHandlers = [
    expressJwtAuth(),
    async (req: JWTRequest, res: Response, next: NextFunction): Promise<void> => {
      try {
        res.status(201).json({
          status: 'success',
          message: 'berhasil get data user',
          data: {
            payload: req.auth
          },
        });
      } catch (error) {
        next(error);
      }
    }
  ];
};


export default UserHandler;
