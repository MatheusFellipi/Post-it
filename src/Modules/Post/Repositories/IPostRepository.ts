import { CreatePostDTO } from "../dtos/createPostDTO";
import { PostIt } from "../infra/typeorm/entities/Postit";

export interface IPostRepository {
  create(data: CreatePostDTO): Promise<void>;
  list(): Promise<PostIt[]>;
}
