/* istanbul ignore file */

import { createContainer } from 'instances-container';

// external agency
import bcrypt from 'bcrypt';
import prismaClient from './database/prisma/prismaClient';


// service (repository, helper, manager, etc)
import UserRepositoryPrisma from './repository/UserRepositoryPrisma';
import BcryptPasswordHash from './security/BcryptPasswordHash';


// use case
import AddUserUseCase from '@applications/use_case/AddUserUseCase';
import UserRepository from '@domains/users/UserRepository';
import PasswordHash from '@applications/security/PasswordHash';


// creating container
const container = createContainer();


// registering services and repository
container.register([
  {
    key: UserRepository.name,
    Class: UserRepositoryPrisma,
    parameter: {
      injectType: 'parameter',
      dependencies: [
        { concrete: prismaClient }
      ]
    }
  },
  {
    key: PasswordHash.name,
    Class: BcryptPasswordHash,
    parameter: {
      injectType: 'parameter',
      dependencies: [
        { concrete: bcrypt }
      ]
    }
  }
]);


// registering use cases
container.register([
  {
    key: AddUserUseCase.name,
    Class: AddUserUseCase,
    parameter: {
      injectType: 'parameter',
      dependencies: [
        {
          internal: UserRepository.name
        },
        {
          internal: PasswordHash.name
        },
      ]
    }
  }
]);

export default container;
