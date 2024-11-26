# express-starter

starter project with ExpressJs clean Architecture

## setup project
- setup .env
- npm install
- npm run migrate:up
- npm run build
- npm start

```
auth-api/                   → Root Proyek.
├─ config/                  → Folder konfigurasi, digunakan untuk mengonfigurasi node-pg-migrate pada database testing.
├─ migrations/              → Berkas migrations database.
├─ src/                     → Source code aplikasi
│  ├─ Applications/         → Application Business Rules
│  │  ├─ security/          → Abstraksi/interface dari tools dan helper dalam hal security yang digunakan pada use case. Contohnya AuthTokenManager dan EncryptionHelper
│  │  ├─ use_cases/         → Alur bisnis aplikasi.
│  ├─ Commons/              → Shared folder.
│  │  ├─ exceptions/        → Custom exceptions.
│  ├─ Domains/              → Enterprise Business Rules.
│  │  ├─ authentications/   → Subdomain authentications, di sini berisi domain model (entities) dan abstraksi/interface AuthenticationRepository .
│  │  ├─ users/             → Subdomain users, di sini berisi domain model (entities) dan abstraksi/interface UserRepository.
│  ├─ Infrastructures/      → Agen External seperti Framework dan Tools External.
│  │  ├─ database/          → Driver database.
│  │  ├─ http/              → HTTP Server menggunakan Hapi.js.
│  │  ├─ repositories/      → Objek konkrit/implementasi dari repository domain.
│  │  ├─ security/          → Objek konkrit/implementasi dari tools dan helper dalam hal security.
│  │  ├─ container.js       → Penampung (container) seluruh instance dari service yang digunakan aplikasi.
│  ├─ Interfaces/           → Interface Adapter. Di sini kita akan mendefinisikan routes configuration dan juga handler yang dibungkus dengan Hapi Plugin.
│  ├─ app.js                → Entry point aplikasi.
├─ tests/                   → Utilitas kebutuhan untuk testing.
├─ .env                     → Environment variable.
├─ package.json             → Project Manifest.
```
