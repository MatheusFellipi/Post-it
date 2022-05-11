import { container, delay } from "tsyringe";

import { IPostRepository } from "@Modules/Post/Repositories/IPostRepository";
import { PostItRepository } from "@Modules/Post/Infra/Typeorm/Repositories/PostRepository";

container.registerSingleton<IPostRepository>(
  "PostRepository",
  delay(() => PostItRepository)
);
