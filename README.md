# nexus Graphql server boilerplate

## Stack
- nexus
- prisma2
- apollo-server
- apollo-client (with create-react-app)

## Get started
- setup mysql and create database
- setup env file
  - copy `.env.sample` to `.env`
  - configuration `.env` file
- export env file variables
  ```bash
  $ set -a && source .env && set +a 
  ```
- yarn install
  ```bash
  $ yarn
  ```
- migration database
  ```bash
  $ yarn prisma migrate up --experimental
  ```
- generate ORM, graphql schema codes
  ```bash
  $ yarn generate
  ```
- launch graphql server and front-end dev server
  ```bash
  $ yarn dev
  ```

