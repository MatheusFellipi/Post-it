import express, { Express } from "express";
import "express-async-errors";
import { Routes } from "./Routes";
// import "@Shared/Infra/Typeorm";

export class Server {
  private _app: Express;
  private port: string;
  private route: Routes;

  constructor() {
    this._app = express();
    this.port = process.env.PORT || "3333";
    this.route = new Routes();
  }

  routes() {
    this._app.use(this.route.routes);
  }

  Start() {
    this.routes();

    this._app.listen(this.port, () => {
      console.log("running server " + this.port);
    });
  }
}
