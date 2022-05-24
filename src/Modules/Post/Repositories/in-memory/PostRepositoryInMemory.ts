import { CreatePostDTO } from "@modules/post/dtos/createPostDTO";
import { PostIt } from "@modules/post/infra/typeorm/entities/postit";
import { IPostRepository } from "../iPostRepository";


export class PostRepositoryInMemory implements IPostRepository {
  private _posts: PostIt[] = [];

  async create({
    description,
    status,
    titulo,
  }: CreatePostDTO): Promise<void> {
    const post = new PostIt();

    Object.assign(post, {
      description,
      status,
      titulo,
    });

    this._posts.push(post);
  }

  async list(): Promise<PostIt[]> {
    return this._posts;
  }
}
