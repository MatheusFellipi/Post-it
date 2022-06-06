import { IPostRepository } from "@modules/post/repositories/IPostRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id?: string;
  title: string;
  description: string;
  status: string;
}

@injectable()
class CreatePostUseCase {
  constructor(
    @inject("PostRepository")
    private repository: IPostRepository
  ) {}

  async execute({ description, status, title }: IRequest): Promise<void> {
    if (description.length === 0 || title.length === 0) {
      throw new AppError("description and title cannot be null");
    }

    this.repository.create({ description, status, title });
  }
}
export { CreatePostUseCase };
