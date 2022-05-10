import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "post",
  database: "post",
  entities: ["./src/Modules/**/Entities/*.ts"],
  migrations: ["./src/Shared/Infra/Typeorm/Migrations/*.ts"],
  synchronize: true,
  logging: false,
  migrationsTableName: "./src/Shared/Infra/Typeorm/Migrations",
});

AppDataSource.initialize()
  .then((res) => {
    // here you can start to work with your database
    console.log("running database");
  })
  .catch((error) => console.log(error));
