import AuthenticationError from '@commons/exceptions/AuthenticationError';
import PasswordHash from '@applications/security/PasswordHash';


interface BcryptLib {
  hash(password: string, saltRounds: number): Promise<string>;
  compare(plain: string, encrypted: string): Promise<boolean>;
}

class BcryptPasswordHash extends PasswordHash {
  private readonly bcrypt: BcryptLib;
  private readonly saltRound: number;

  constructor(bcrypt: BcryptLib, saltRound: number = 10) {
    super();
    this.bcrypt = bcrypt;
    this.saltRound = saltRound;
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
