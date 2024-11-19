import ClientError from '../ClientError';
import AuthenticationError from '../AuthenticationError';

describe('AuthenticationError', () => {
  it('should create AuthenticationError correctly', () => {
    const authenticationError = new AuthenticationError('authentication error!');

    expect(authenticationError).toBeInstanceOf(ClientError);
    expect(authenticationError.statusCode).toEqual(401);
    expect(authenticationError.message).toEqual('authentication error!');
    expect(authenticationError.name).toEqual('AuthenticationError');
  });
});
