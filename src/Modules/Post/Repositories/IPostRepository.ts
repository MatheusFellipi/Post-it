import { CreatePostDTO } from "../dtos/createPostDTO";
import { PostIt } from "../infra/typeorm/entities/postit";

export interface IPostRepository {
  create(data: CreatePostDTO): Promise<void>;
  list(id: string): Promise<PostIt[]>;
}
