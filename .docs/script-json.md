```JSON
{
  "name": "express-starter",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watchAll --coverage --setupFiles dotenv/config",
    "lint": "eslint \"src/**/*.ts\" --fix",
    "build": "npx tsc",
    "start": "node dist/app.js",
    "start:ts": "node --no-warnings --loader ts-node/esm src/app.ts",
    "start:dev": "ts-node-dev --respawn src/app.ts",
    "migrate:create": "npx prisma migrate dev --create-only",
    "migrate:up": "npx prisma migrate dev",
    "migrate:run": "npx prisma migrate deploy"
  },
  "keywords": [],
  "author": "adeiskandarzulkarnaen",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "@prisma/client": "^5.22.0",
    "bcrypt": "^5.1.1",
    "dotenv": "^16.4.5",
    "dotenv-cli": "^7.4.3",
    "express": "^4.21.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.15.0",
    "@jest/globals": "^29.7.0",
    "@types/bcrypt": "^5.0.2",
    "@types/express": "^5.0.0",
    "@types/jest": "^29.5.14",
    "eslint": "^9.15.0",
    "globals": "^15.12.0",
    "jest": "^29.7.0",
    "prisma": "^5.22.0",
    "ts-jest": "^29.2.5",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.6.3",
    "typescript-eslint": "^8.15.0"
  },
  "jest": {
    "preset": "ts-jest",
    "transform": {
      "^.+\\.[t|j]sx?$": "ts-jest"
    },
    "moduleNameMapper": {
      "^@domains/(.*)$": "<rootDir>/src/Domains/$1",
      "^@applications/(.*)$": "<rootDir>/src/Applications/$1",
      "^@interfaces/(.*)$": "<rootDir>/src/Interfaces/$1",
      "^@infrastructures/(.*)$": "<rootDir>/src/Infrastructures/$1",
      "^@commons/(.*)$": "<rootDir>/src/Commons/$1"
    }
  }
}
```

