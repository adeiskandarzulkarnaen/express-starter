import { Jwt, Secret, SignOptions } from 'jsonwebtoken';
import AuthenticationTokenManager from '@applications/security/AuthenticationTokenManager';
import InvariantError from '@commons/exceptions/InvariantError';



interface JwtLib {
  sign(payload: object, secretOrPrivateKey: Secret, options?: SignOptions): string;
  verify(token: string, secretOrPublicKey: Secret): Jwt;
}


class JwtTokenManager extends AuthenticationTokenManager {
  constructor(private readonly jwt: JwtLib) {
    super();
  }

  generateAccessToken(payload: Record<string, string>): string {
    const accessToken: string = this.jwt.sign(payload, process.env.ACCESS_TOKEN_KEY!,
      {
        noTimestamp: true,
        expiresIn: process.env.ACCESS_TOKEN_AGE
      },
    );
    return accessToken;
  }

  verifyAccessToken(accessToken: string): Jwt {
    try {
      const decoded = this.jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY!);
      return decoded;
    } catch {
      throw new InvariantError('access token tidak valid!');
    }
  }
};

export default JwtTokenManager;
