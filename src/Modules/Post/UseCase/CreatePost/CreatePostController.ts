import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePostUseCase } from "./CreatePostUseCase";

class CreatePostItController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, status } = request.body;

    const createPostUseCase = container.resolve(CreatePostUseCase);
    await createPostUseCase.execute({
      description,
      status,
      title,
    });

    return response.status(201).send();
  }
}
export { CreatePostItController };
