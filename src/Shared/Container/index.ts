import { container, delay } from "tsyringe";

import { IPostRepository } from "@modules/post/repositories/iPostRepository";
import { PostItRepository } from "@modules/post/infra/typeorm/repositories/postRepository";



container.registerSingleton<IPostRepository>(
  "PostRepository",
  delay(() => PostItRepository)
);
