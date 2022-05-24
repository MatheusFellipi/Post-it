import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  port: 5432,
  host: "localhost",
  username: "docker",
  password: "post",
  database: "post",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  migrationsTableName: "./src/shared/infra/typeorm/migrations",
  synchronize: true,
  logging: false,
});

AppDataSource.initialize()
  .then((res) => {
    console.log("running database");
  })
  .catch((error) => console.log(error));

export { AppDataSource };
