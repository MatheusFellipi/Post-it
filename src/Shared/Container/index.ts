import { container, delay } from "tsyringe";

import { PostItRepository } from "@modules/post/infra/typeorm/repositories/PostRepository";
import { IPostRepository } from "@modules/post/repositories/IPostRepository";

container.registerSingleton<IPostRepository>(
  "PostRepository",
  delay(() => PostItRepository)
);
