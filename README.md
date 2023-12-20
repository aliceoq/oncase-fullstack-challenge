# oncase-fullstack-challenge

## Summary 

- [Deploy](#-deploy)
- [Back-end](#%EF%B8%8F-back-end)
- [Front-end](#%EF%B8%8F-front-end)

## 🚀 Deploy

The app, front and back, was deployed using [Render](https://dashboard.render.com/). Check it out [here](https://oncase-fs-challenge-registration.onrender.com).

## 🔎 Pre-requisites

Before running the project, you must have the following tools installed:

- [Git](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git)
- [Node.js](https://nodejs.org/pt-br/download/package-manager/)
- [PostgreSQL](https://www.postgresql.org/)

### 🔨 Cloning the repository

```
git clone https://github.com/aliceoq/oncase-fullstack-challenge.git
```

## ⚙️ Back-end

### 📝 Set the environment variables

Create the file `.env`, in the `server` directory, copy the contents of the `.env.example` file and change the variables as needed.

```
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=
DB_NAME=postgres
```

### 🔎 Installing the dependencies

```bash
npm install
```

### 🗃️ Run migration

The migration will create a new 'participants' table and populate it with the data in the seed file, if your db already has a 'participants' table it will be deleted and a new one will be created.

```bash
# It will run the command npx knex migrate:latest
npm run migration
```

### 🚧 Build

To build and serve run the following commands.

```bash
npm run build

npm run serve
```

### 🏃‍♂️ Running the app

Run the following command:

```bash
# Development
npm run start
```

### 🧪 Testing

Run the following command:

```bash
npm run test
```

## 🖥️ Front-end

### 🔎 Installing the dependencies

```bash
npm install
```

### 📝 Set the environment variables

Create the file `.env`, in the `server` directory, copy the contents of the `.env.example` file and add the URL for the back-end.

```
VITE_BACKEND_URL=
```

### 🏃‍♂️ Running the app

```
npm run dev
```

### 🧪 E2E tests with Cypress

Run the following command and then use the Cypress interface to see and run the tests.

```bash
# It will run the command npx cypress open
npm run test
```

### 🚧 Build

The build will generate the /dist folder with the build files.

```
npm run build
```