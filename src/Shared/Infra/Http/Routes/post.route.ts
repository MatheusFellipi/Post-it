import { CreatePostItController } from "@modules/post/useCase/createPost/CreatePostController";
import { ListAllPostController } from "@modules/post/useCase/listAllPost/ListAllPostController";
import { Router } from "express";

export class PostRoutes {
  public router: Router;
  private createPostItController: CreatePostItController
  private listAllPostController: ListAllPostController

  constructor(router: Router) {
    this.createPostItController = new CreatePostItController()
    this.listAllPostController = new ListAllPostController()
    this.router = router;
    this.Route();
  }

  Route() {
    this.router.get("/task", this.listAllPostController.handle);
    this.router.post("/task", this.createPostItController.handle);
  }
}
