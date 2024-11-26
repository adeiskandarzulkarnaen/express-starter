

abstract class AuthenticationTokenManager {
  abstract generateAccessToken(payload: Record<string, string>): string;
  abstract verifyAccessToken(accessToken: string): object;
};

export default AuthenticationTokenManager;
