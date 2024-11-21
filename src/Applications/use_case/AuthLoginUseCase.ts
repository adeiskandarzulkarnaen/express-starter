import PasswordHash from '@applications/security/PasswordHash';
import { eUserLogin, UserLogin } from '@domains/users/entities/UserLogin';
import UserRepository from '@domains/users/UserRepository';


interface AuthLoginUseCaseDevedencies {
  userRepository: UserRepository,
  passwordhash: PasswordHash,
  //
}

class AuthLoginUseCase {
  private userRepository: UserRepository;
  private passwordhash: PasswordHash;
  constructor(userRepository: UserRepository, passwordhash: PasswordHash){
    this.userRepository = userRepository;
    this.passwordhash = passwordhash;
  }

  public async execute(payload: eUserLogin): Promise<void> {
    const { username, password } = new UserLogin(payload);

    // const { id: userId, username, password: encriptedPassword } = await this.userRepository.getUserByUsername(username)
    // await this.passwordhash.comparePassword(password, encriptedPassword);
    // const accessToken = this.tokenManager.generateAccessToken({ userId, username });
    // return new NewAuth({ accessToken })
  };
};

export default AuthLoginUseCase;
