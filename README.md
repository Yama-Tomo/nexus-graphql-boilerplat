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
- prisma sql playground 
  ```bash
  $ yarn prisma-playground
  yarn run v1.22.4
  $ ts-node -P tsconfig-graphql-server.json -O '{ "isolatedModules": false }'
  > import { prisma } from './src/graphql-server/prisma_client'
  {}
  > prisma.test_table.findMany().then(data => console.log(data))
  Promise { <pending> }
  > SQL(11ms) SELECT `db`.`test_table`.`id`, `db`.`test_table`.`name` FROM `db`.`test_table` WHERE 1=1
  []
  ```
