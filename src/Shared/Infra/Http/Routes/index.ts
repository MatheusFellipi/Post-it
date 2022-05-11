import { Router } from "express";
import { PostRoutes } from "./post.route";

export class Routes {
  public routes: Router;

  private postRoutes: PostRoutes;

  constructor() {
    this.routes = Router();

    this.postRoutes = new PostRoutes(this.routes);

    this.startRoutes();
  }

  startRoutes() {
    this.routes.use(this.postRoutes.router);
  }
}
