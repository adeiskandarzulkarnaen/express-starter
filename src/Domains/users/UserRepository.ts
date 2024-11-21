import { RegisteredUser } from './entities/RegisteredUser';
import { RegisterUser } from './entities/RegisterUser';

/**
 * Abstract class representing a user repository.
 *
 * This class defines the contract for user-related operations, such as adding a new user
 * to the repository and verifying username availability. Concrete implementations must
 * provide the actual behavior for these methods.
 */
abstract class UserRepository {
  /**
   * Adds a new user to the repository.
   *
   * This method takes a `RegisterUser` object containing the user's registration data
   * and persists it to the repository. It returns a `RegisteredUser` object that represents
   * the newly created user.
   *
   * @param {RegisterUser} registerUser - The user registration data to be added to the repository.
   * @returns {Promise<RegisteredUser>} - A promise that resolves to the newly registered user.
   * @throws {Error} - Throws an error if the method is not implemented in a concrete class.
   */
  abstract addUser(registerUser: RegisterUser): Promise<RegisteredUser>;

  /**
   * Verifies if a username is available in the repository.
   *
   * This method checks if a given username is already in use. If the username is not
   * available, an error should be thrown. Otherwise, it resolves without issues.
   *
   * @param {string} username - The username to be verified for availability.
   * @returns {Promise<void>} - A promise that resolves if the username is available.
   * @throws {Error} - Throws an error if the method is not implemented or if the username
   *                   is already taken.
   */
  abstract verifyAvailableUsername(username: string): Promise<void>;
}

export default UserRepository;
