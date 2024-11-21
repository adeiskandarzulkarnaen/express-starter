

describe('/auth endpoint', () => {
  // let server;

  beforeAll(async () => {
    // todo create server
  });

  afterAll(async () => {
    // todo: pool end
  });

  afterEach(async () => {
    // todo: clean user and auth table
  });

  describe('when POST /auth', () => {
    it.todo('should response 201 and new authentication');
    it.todo('should response 400 if username not found');
    it.todo('should response 401 if password wrong');
    it.todo('should response 400 if login payload not contain needed property');
    it.todo('should response 400 if login payload wrong data type');
  });
});
