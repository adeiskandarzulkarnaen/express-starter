import bcrypt from 'bcrypt';
import AuthenticationError from '@commons/exceptions/AuthenticationError';
import PasswordHash from '@applications/security/PasswordHash';


class BcryptPasswordHash extends PasswordHash {
  private readonly bcrypt;
  private readonly saltRound: number;
  constructor(saltRound: number = 10) {
    super();
    this.bcrypt = bcrypt;
    this.saltRound = saltRound;
  }

  async hash(password: string): Promise<string> {
    return this.bcrypt.hash(password, this.saltRound);
  }

  async comparePassword(plain: string, encrypted: string): Promise<void> {
    const match = await this.bcrypt.compare(plain, encrypted);
    if (!match) throw new AuthenticationError('credendensial tidak sesuai');
  }
};

export default BcryptPasswordHash;
