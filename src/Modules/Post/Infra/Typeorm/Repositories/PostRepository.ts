import { Repository, DataSource } from "typeorm";
import { DTOCreatePost } from "@Modules/Post/DTOS/DTOCreatePost";
import { IPostRepository } from "@Modules/Post/Repositories/IPostRepository";
import { PostIt } from "../Entities/Postit";
import { AppDataSource } from "@Shared/Infra/Typeorm";

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
