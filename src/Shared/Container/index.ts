import { container, delay } from "tsyringe";

import { IPostRepository } from "modules/post/repositories/IPostRepository";
import { PostItRepository } from "modules/post/infra/typeorm/repositories/PostRepository";

container.registerSingleton<IPostRepository>(
  "PostRepository",
  delay(() => PostItRepository)
);
