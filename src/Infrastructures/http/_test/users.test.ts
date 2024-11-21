// import prismaClient from '@infrastructures/database/prisma/PrismaClient';
// import container from '@infrastructures/container';
// import createServer
// import UsersTableTestHelper from '@tests/UsersTableTestHelper';

describe('HTTP server', () => {
  // let server;

  afterEach(async () => {
    // await UsersTableTestHelper.cleanTable();
  });
  afterAll(async () => {
    // await prismaClient.$disconnect();
  });

  describe('when POST /users', () => {
    it.todo('should response 201 and persisted user');
    it.todo('should response 400 when request payload not contain needed propert');
    it.todo('should response 400 when request payload not meet data type specification');
    it.todo('should response 400 when username more than 50 character');
    it.todo('should response 400 when username contain restricted character');
    it.todo('should response 400 when username unavailable');
  });
});
