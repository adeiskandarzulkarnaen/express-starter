import { tRegisterUser, RegisterUser } from "@domains/users/entities/RegisterUser";
import { tRegisteredUser } from "@domains/users/entities/RegisteredUser";
import UserRepository from "@domains/users/UserRepository";
import PasswordHash from "@applications/security/PasswordHash";


type tAddUserUseCaseDependencies = {
  userRepository: UserRepository;
  passwordHash: PasswordHash;
};

class AddUserUseCase {
  private userRepository: UserRepository;
  private passwordHash: PasswordHash;

  constructor({ userRepository, passwordHash }: tAddUserUseCaseDependencies) {
    this.userRepository = userRepository;
    this.passwordHash = passwordHash;
  }

  public async execute(useCasePayload: tRegisterUser): Promise<tRegisteredUser> {
    const registerUser = new RegisterUser(useCasePayload);
    await this.userRepository.verifyAvailableUsername(registerUser.username!);
    registerUser.password = await this.passwordHash.hash(registerUser.password!);
    return this.userRepository.addUser(registerUser);
  }
}

export default AddUserUseCase;
