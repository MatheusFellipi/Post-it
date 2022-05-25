import { Repository, DataSource } from "typeorm";
import { PostIt } from "../entities/Postit";
import { AppDataSource } from "@shared/Infra/typeorm";
import { CreatePostDTO } from "@modules/post/dtos/createPostDTO";
import { IPostRepository } from "@modules/post/repositories/IPostRepository";

class PostItRepository implements IPostRepository {
  private repository: Repository<PostIt>;

  constructor() {
    this.repository = AppDataSource.getRepository(PostIt);
  }

  async create({ description, status, title }: CreatePostDTO): Promise<void> {
    const post = this.repository.create({ description, status, title });

    await this.repository.save(post);
  }

  async list(): Promise<PostIt[]> {
    return this.repository.find();
  }
}

export { PostItRepository };
