import { DataSourceOptions } from "typeorm";

export const dbConfig = {
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
} as DataSourceOptions;
