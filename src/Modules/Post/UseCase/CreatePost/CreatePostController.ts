import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreateArticleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { titulo, description, finalized } = request.body;

    const createPostUseCase = container.resolve(CreatePostUseCase);
    await createPostUseCase.execute({
      description,
      finalized,
      titulo,
    });

    return response.status(201).send();
  }
}
export { CreateArticleController };
