/**
 * Abstract class for password hashing and validation.
 *
 * This class defines the contract for hashing passwords and comparing plaintext passwords
 * with their hashed counterparts. Implementations of this class must provide concrete
 * methods for both hashing and comparing passwords.
 */
abstract class PasswordHash {
  /**
   * Hashes a plaintext password.
   *
   * @param {string} password - The plaintext password to hash.
   * @returns {Promise<string>} - A promise that resolves to the hashed password.
   */
  abstract hash(password: string): Promise<string>;

  /**
   * Compares a plaintext password with a hashed password to verify if they match.
   *
   * @param {string} plain - The plaintext password.
   * @param {string} encrypted - The hashed password.
   * @returns {Promise<void>} - A promise that resolves if the passwords match.
   * @throws {Error} - Will throw an error if the passwords do not match or if the comparison fails.
   */
  abstract comparePassword(plain: string, encrypted: string): Promise<void>;
};

export default PasswordHash;
