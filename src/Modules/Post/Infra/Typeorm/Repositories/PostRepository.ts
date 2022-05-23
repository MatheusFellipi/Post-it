import { Repository, DataSource } from "typeorm";
import { DTOCreatePost } from "modules/post/dtos/DTOCreatePost";
import { IPostRepository } from "modules/post/repositories/IPostRepository";
import { PostIt } from "../entities/Postit";
import { AppDataSource } from "@Shared/infra/Typeorm";

class PostItRepository implements IPostRepository {
  private repository: Repository<PostIt>;

  constructor() {
    this.repository = AppDataSource.getRepository(PostIt);
  }

  async create({
    description,
    finalized,
    titulo,
  }: DTOCreatePost): Promise<void> {
    const post = this.repository.create({ description, finalized, titulo });

    await this.repository.save(post);
  }

  async list(): Promise<PostIt[]> {
    return this.repository.find();
  }
}

export { PostItRepository };
