
abstract class PasswordHash {
  /**
   * Meng-hash password.
   * @param password - Password yang akan di-hash.
   * @returns Hasil hash dari password.
   */
  abstract hash(password: string): Promise<string>;

  /**
   * Membandingkan password plaintext dengan password yang sudah di-hash.
   * @param plain - Password plaintext.
   * @param encrypted - Password yang sudah di-hash.
   * @returns Boolean yang menunjukkan apakah password cocok.
   */
  abstract comparePassword(plain: string, encrypted: string): Promise<boolean>;
};

export default PasswordHash;
