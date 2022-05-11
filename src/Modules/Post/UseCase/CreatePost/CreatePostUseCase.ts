import { IPostRepository } from "@Modules/Post/Repositories/IPostRepository";
import { AppError } from "@Shared/Errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id?: string;
  titulo: string;
  description: string;
  finalized: boolean;
}

@injectable()
class CreatePostUseCase {
  constructor(
    @inject("PostRepository")
    private articleRepository: IPostRepository
  ) {}

  async execute({ description, finalized, titulo }: IRequest): Promise<void> {
    if (description.length === 0 || titulo.length === 0) {
      throw new AppError("description and title cannot be null");
    }

    this.articleRepository.create({ description, finalized, titulo });
  }
}
export { CreatePostUseCase };
