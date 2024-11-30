import type { JwtPayload, sign, verify } from 'jsonwebtoken';
import config from '@commons/config';
import AuthenticationTokenManager from '@applications/security/AuthenticationTokenManager';
import InvariantError from '@commons/exceptions/InvariantError';


interface JwtLib {
  sign: typeof sign,
  verify: typeof verify,
}


class JwtTokenManager extends AuthenticationTokenManager {
  constructor(private readonly jwt: JwtLib) {
    super();
  }

  generateAccessToken(payload: Record<string, string>): string {
    const accessToken = this.jwt.sign(payload, config.jwt.secret!,
      {
        noTimestamp: true,
        expiresIn: process.env.ACCESS_TOKEN_AGE,
        algorithm: 'HS256'
      },
    );
    return accessToken;
  }

  verifyAccessToken(accessToken: string): JwtPayload {
    try {
      const decoded = this.jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY!);
      return decoded as object;
    } catch {
      throw new InvariantError('access token tidak valid!');
    }
  }
};

export default JwtTokenManager;
