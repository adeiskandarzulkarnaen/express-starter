
const config = {
  app: {
    port: process.env.PORT,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  jwt: {
    age: process.env.ACCESS_TOKEN_AGE,
    secret: process.env.ACCESS_TOKEN_SECRET_KEY,
  }
};

export default config;
