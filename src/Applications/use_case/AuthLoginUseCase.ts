import AuthenticationTokenManager from '@applications/security/AuthenticationTokenManager';
import PasswordHash from '@applications/security/PasswordHash';
import { NewAuth } from '@domains/authentications/entities/NewAuth';
import { eUserLogin, UserLogin } from '@domains/users/entities/UserLogin';
import UserRepository from '@domains/users/UserRepository';


interface AuthLoginUseCaseDevedencies {
  userRepository: UserRepository,
  passwordHash: PasswordHash,
  authenticationTokenManager: AuthenticationTokenManager,
};

class AuthLoginUseCase {
  private readonly userRepository: UserRepository;
  private readonly passwordHash: PasswordHash;
  private readonly authenticationTokenManager: AuthenticationTokenManager;
  constructor({ userRepository, passwordHash, authenticationTokenManager }: AuthLoginUseCaseDevedencies){
    this.userRepository = userRepository;
    this.passwordHash = passwordHash;
    this.authenticationTokenManager = authenticationTokenManager;
  }

  public async execute(payload: eUserLogin): Promise<NewAuth> {
    const { username, password } = new UserLogin(payload);

    const { id: userId, password: encriptedPassword } = await this.userRepository.getUserCredentialByUsername(username);
    await this.passwordHash.comparePassword(password, encriptedPassword);
    const accessToken = this.authenticationTokenManager.generateAccessToken({ userId, username });
    return new NewAuth({ accessToken });
  };
};

export default AuthLoginUseCase;
