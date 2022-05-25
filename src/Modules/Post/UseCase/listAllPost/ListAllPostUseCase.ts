import { PostIt } from "@modules/post/infra/typeorm/entities/Postit";
import { IPostRepository } from "@modules/post/repositories/iPostRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllPostUseCase {
  constructor(
    @inject("PostRepository")
    private repository: IPostRepository
  ) {}

  async execute(): Promise<PostIt[]> {
    return this.repository.list();
  }
}

export { ListAllPostUseCase };
