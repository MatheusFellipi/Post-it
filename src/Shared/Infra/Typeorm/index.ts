import { dbConfig } from "@Config/db";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource(dbConfig);

AppDataSource.initialize()
  .then((res) => {
    console.log("running database");
  })
  .catch((error) => console.log(error));

export { AppDataSource };
