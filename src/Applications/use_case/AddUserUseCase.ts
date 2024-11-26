import { eRegisterUser, RegisterUser } from '@domains/users/entities/RegisterUser';
import { eRegisteredUser } from '@domains/users/entities/RegisteredUser';
import UserRepository from '@domains/users/UserRepository';
import PasswordHash from '@applications/security/PasswordHash';


interface AddUserUseCaseDevedencies {
  userRepository: UserRepository,
  passwordHash: PasswordHash,
};



/**
 * Use case for adding a new user.
 *
 * This class handles the business logic for registering a new user, including
 * validating the user payload, ensuring the username is available, hashing the password,
 * and saving the user to the repository.
 */
class AddUserUseCase {
  private readonly userRepository: UserRepository;
  private readonly passwordHash: PasswordHash;
  constructor({ userRepository, passwordHash }: AddUserUseCaseDevedencies) {
    this.userRepository = userRepository;
    this.passwordHash = passwordHash;
  }

  /**
   * Executes the AddUserUseCase.
   *
   * This method validates the input payload, checks for username availability,
   * hashes the user's password, and stores the user in the repository.
   *
   * @async
   * @param {eRegisterUser} useCasePayload - The payload containing user registration details.
   * @returns {Promise<eRegisteredUser>} - The registered user entity.
   * @throws {Error} Will throw an error if the username is unavailable or the payload is invalid.
   */
  async execute(useCasePayload: eRegisterUser): Promise<eRegisteredUser> {
    const registerUser = new RegisterUser(useCasePayload);
    await this.userRepository.verifyAvailableUsername(registerUser.username);
    registerUser.password = await this.passwordHash.hash(registerUser.password);
    return this.userRepository.addUser(registerUser);
  }
}

export default AddUserUseCase;
