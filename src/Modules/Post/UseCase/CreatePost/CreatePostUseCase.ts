import { IPostRepository } from "modules/post/repositories/iPostRepository";
import { AppError } from "@shared/errors/appError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id?: string;
  titulo: string;
  description: string;
  status: string;
}

@injectable()
class CreatePostUseCase {
  constructor(
    @inject("PostRepository")
    private repository: IPostRepository
  ) {}

  async execute({ description, status, titulo }: IRequest): Promise<void> {
    if (description.length === 0 || titulo.length === 0) {
      throw new AppError("description and title cannot be null");
    }

    this.repository.create({ description, status, titulo });
  }
}
export { CreatePostUseCase };
