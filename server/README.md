# Server

Web server built with nodejs and express.

## Getting Started

1. Clone the repository

2. Install dependencies

```
npm install
```

3. Set up environment variables

Create a .env file using the .env.example as base.

```
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

4. Set up database

Run the migration, use npx if you don't have knex installed globally.

```
npx knex migrate:latest
```

If your db has a 'participants' table it will be deleted and a new one will be created, it also will be populated with the data in the seed_participants.js file.

5. Build

```
npm run build
```

6. Start the server in development mode

```
npm start
```

7. Run tests

```
npm test
```