import { PostIt } from "../infra/typeorm/entities/Postit";
import { DTOCreatePost } from "../dtos/DTOCreatePost";

export interface IPostRepository {
  create(data: DTOCreatePost): Promise<void>;
  list(id: string): Promise<PostIt[]>;
}
