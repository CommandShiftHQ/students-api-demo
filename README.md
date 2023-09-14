# Student API demo

A demo from the backend track, putting all the pieces together.

## Get started

Ensure you create a `.env` file in the root of the project, with the following contents (note, it's not normally good practice to put this in a README, but this is a demo 😊):

```properties
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password
``````

run the following commands to get started

Spin up your database

```bash
docker compose up
```
Install dependencies
```bash
npm install
```
Start the server
```bash
npm start
```