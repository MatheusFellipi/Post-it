import { PostIt } from "../Infra/Typeorm/Entities/Postit";
import { DTOCreatePost } from "../DTOS/DTOCreatePost";

export interface IPostRepository {
  create(data: DTOCreatePost): Promise<void>;
  list(id: string): Promise<PostIt[]>;
}
