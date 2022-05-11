import { DTOCreatePost } from "@Modules/Post/DTOS/DTOCreatePost";
import { PostIt } from "@Modules/Post/Infra/Typeorm/Entities/Postit";
import { IPostRepository } from "../IPostRepository";

export class PostRepositoryInMemory implements IPostRepository {
  private _posts: PostIt[] = [];

  async create({
    description,
    finalized,
    titulo,
  }: DTOCreatePost): Promise<void> {
    const post = new PostIt();

    Object.assign(post, {
      description,
      finalized,
      titulo,
    });

    this._posts.push(post);
  }

  async list(): Promise<PostIt[]> {
    return this._posts;
  }
}
