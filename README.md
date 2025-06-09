# Testing champion

This project uses Cypress for end-to-end and component testing, and Vitest for unit tests.

## Prerequisites

- Node.js and npm installed on your machine.

## Installation

1. Install all dependencies for both server and client:

   ```sh
   npm run install
   ```

## Usage

### 1. Start the client application

Open a terminal, go to the `client` directory, and run:

```sh
cd client
npm run dev
```

This will start the client app in development mode.

### 2. Run the tests

Open another terminal at the project root and run:

```sh
npm run test
```

This command will run both Cypress end-to-end and component tests.

---

## Useful scripts

- `npm run install`: Installs dependencies in both `server` and `client`.
- `npm run test`: Runs all Cypress tests (e2e and component).
- `npm run client:dev`: Starts the client in development mode.
- `npm run server:dev`: Starts the server in development mode.

---

## Folder structure

```
/client      # Frontend source code
/server      # Backend source code
/cypress     # e2e and component tests
```

---

## Notes

- Make sure the client is running before executing the tests.
- You can edit or add tests in the `/cypress` folder.

## Walkthrough video

- If you want to see a walkthough video of the tests running, go into the following link: [Testing Champion Demo](https://youtu.be/e43K4x7j7kg)

## License

This project is licensed under the [MIT License](LICENSE).
