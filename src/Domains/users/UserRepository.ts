import { tRegisteredUser } from "./entities/RegisteredUser";

abstract class UserRepository {
  /**
   * Menambahkan user baru ke repository
   * @param registerUser - Data pengguna yang akan didaftarkan
   * @throws Error jika metode belum diimplementasikan
   */
  abstract addUser(registerUser: any): Promise<tRegisteredUser>;

  /**
   * Memverifikasi apakah username tersedia di repository
   * @param username - Username yang akan diverifikasi
   * @throws Error jika metode belum diimplementasikan
   */
  abstract verifyAvailableUsername(username: string): Promise<void>;
}

export default UserRepository;
