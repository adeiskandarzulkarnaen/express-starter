
export type eNewAuth = {
  accessToken: string
}

export class NewAuth {
  private readonly accessToken: string;
  constructor(payload: Record<string, unknown>) {
    this.verifyPayload(payload);

    const { accessToken } = payload as eNewAuth;
    this.accessToken = accessToken;
  }

  private verifyPayload(payload: Record<string, unknown>) {
    const { accessToken } = payload;

    if (!accessToken) {
      throw new Error('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof accessToken !== 'string') {
      throw new Error('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }
  }
}
