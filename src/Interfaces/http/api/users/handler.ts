import { Request, Response,  NextFunction } from 'express';
import { Container } from 'instances-container';
import { eRegisteredUser } from '@domains/users/entities/RegisteredUser';
import AddUserUseCase from '@applications/use_case/AddUserUseCase';


class UserHandler {
  private container: Container;
  constructor(container: Container) {
    this.container = container;

    this.postUserHandler = this.postUserHandler.bind(this);
  };

  async postUserHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const addUserUseCase: AddUserUseCase = this.container.getInstance(AddUserUseCase.name);
      const addedUser: eRegisteredUser = await addUserUseCase.execute(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          user: {
            ...addedUser
          },
        },
      });
    } catch (error) {
      next(error);
    }
  }
};


export default UserHandler;
