import AuthenticationError from '@commons/exceptions/AuthenticationError';
import PasswordHash from '@applications/security/PasswordHash';


class BcryptPasswordHash extends PasswordHash {
  constructor(private bcrypt: any, private saltRound: number = 10) {
    super();
  }

  async hash(password: string): Promise<string> {
    return this.bcrypt.hash(password, this.saltRound);
  }

  async comparePassword(plain: string, encrypted: string): Promise<void> {
    const match = await this.bcrypt.compare(plain, encrypted);
    if (!match) throw new AuthenticationError('kredensial yang Anda masukkan salah');
  }
};

export default BcryptPasswordHash;
