import { Router } from "express";

export class PostRoutes {
  public router: Router;

  constructor(router: Router) {
    this.router = router;
    this.route();
  }

  route() {
    this.router.get("/", function (req, res) {
      res.send("Hello World!");
    });
  }
}
