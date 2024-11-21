import { eRegisterUser, RegisterUser } from '@domains/users/entities/RegisterUser';
import { eRegisteredUser } from '@domains/users/entities/RegisteredUser';
import UserRepository from '@domains/users/UserRepository';
import PasswordHash from '@applications/security/PasswordHash';


class AddUserUseCase {
  private userRepository: UserRepository;
  private passwordHash: PasswordHash;

  constructor(userRepository: UserRepository, passwordHash: PasswordHash) {
    this.userRepository = userRepository;
    this.passwordHash = passwordHash;
  }

  async execute(useCasePayload: eRegisterUser): Promise<eRegisteredUser> {
    const registerUser = new RegisterUser(useCasePayload);
    await this.userRepository.verifyAvailableUsername(registerUser.username!);
    registerUser.password = await this.passwordHash.hash(registerUser.password!);
    return this.userRepository.addUser(registerUser);
  }
}

export default AddUserUseCase;
