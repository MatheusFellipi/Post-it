import { AppError } from "@Shared/Errors/AppError";
import express, { Express, NextFunction, Request, Response } from "express";
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

    this._app.use((error: Error, request: Request, response: Response) => {
      if (error instanceof AppError) {
        return response
          .status(error.statusCode)
          .json({ message: error.message });
      }
      return response.status(500).json({
        status: "erro",
        message: `Interna server - ${error.message}`,
      });
    });

    this._app.listen(this.port, () => {
      console.log("running server " + this.port);
    });
  }
}
