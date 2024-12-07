# setup commonJS
## init project
npm init --y

## install requirement library
npm install express bcrypt dotenv jsonwebtoken
npm install --save-dev @types/express @types/bcrypt 
npm install --save-dev prisma
npx prisma init

## setup eslint
npm init @eslint/config@latest

## setup typescript
npm install --save-dev typescript
npm install --save-dev ts-node-dev tsconfig-paths tsc-alias
npx tsc --init

## setup jest for typescript
npm install --save-dev jest @types/jest

### jest typescript via ts-js [simple]
npm install --save-dev ts-jest @jest/globals

### jest typescript via babel [ribet]
npm install --save-dev babel-jest @babel/preset-env @babel/preset-typescript

