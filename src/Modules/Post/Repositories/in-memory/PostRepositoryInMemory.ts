import { DTOCreatePost } from "modules/post/dtos/DTOCreatePost";
import { PostIt } from "modules/post/infra/typeorm/entities/Postit";
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
