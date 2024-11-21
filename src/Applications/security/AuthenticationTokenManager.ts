

abstract class AuthenticationTokenManager {
  abstract generateAccessToken(payload: unknown): Promise<string>;
  abstract verifyAccessToken(accessToken: string): Promise<boolean>;
};

export default AuthenticationTokenManager;
