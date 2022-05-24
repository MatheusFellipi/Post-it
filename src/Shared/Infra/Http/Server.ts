import express, { Express, NextFunction, Request, Response } from "express";
import "express-async-errors";
import "@shared/infra/typeorm";

import { AppError } from "@shared/errors/appError";
import { Routes } from "./routes";

export class Server {
  private _app: Express;
  private port: string;
  private route: Routes;

  constructor() {
    this._app = express();
    this.port = process.env.PORT || "3333";
    this.route = new Routes();
  }

  Routes() {
    this._app.use(this.route.routes);
  }

  Start() {
    this.Routes();

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
