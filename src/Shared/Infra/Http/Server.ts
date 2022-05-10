import express, { Express } from "express";
import "express-async-errors";
import "@Shared/Infra/Typeorm";

export class Server {
  app: Express;
  port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3333";
  }

  Start() {
    this.app.listen(this.port, () => {
      console.log("running server " + this.port);
    });
  }
}
