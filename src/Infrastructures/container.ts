/* istanbul ignore file */
import { createContainer } from 'instances-container';

// external agency
import prismaClient from './database/prisma/prismaClient';


// service (repository, helper, manager, etc)
import UserRepositoryPrisma from '@infrastructures/repository/UserRepositoryPrisma';
import BcryptPasswordHash from '@infrastructures/security/BcryptPasswordHash';
import JwtTokenManager from '@infrastructures/security/JwtTokenManager';


// use case
import AddUserUseCase from '@applications/use_case/AddUserUseCase';
import AuthLoginUseCase from '@applications/use_case/AuthLoginUseCase';

import UserRepository from '@domains/users/UserRepository';
import PasswordHash from '@applications/security/PasswordHash';
import AuthenticationTokenManager from '@applications/security/AuthenticationTokenManager';


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
  },
  {
    key: AuthenticationTokenManager.name,
    Class: JwtTokenManager,
  }
]);


// registering use cases
container.register([
  {
    key: AddUserUseCase.name,
    Class: AddUserUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name
        },
        {
          name: 'passwordHash',
          internal: PasswordHash.name
        },
      ]
    }
  },
  {
    key: AuthLoginUseCase.name,
    Class: AuthLoginUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'userRepository',
          internal: UserRepository.name,
        },
        {
          name: 'passwordHash',
          internal: PasswordHash.name,
        },
        {
          name: 'authenticationTokenManager',
          internal: AuthenticationTokenManager.name,
        }
      ]
    }
  }
]);

export default container;
