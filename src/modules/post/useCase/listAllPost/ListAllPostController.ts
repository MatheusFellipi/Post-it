import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllPostUseCase } from "./ListAllPostUseCase";

class ListAllPostController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllPostUseCase = container.resolve(ListAllPostUseCase);
    const all = await listAllPostUseCase.execute();
    return response.status(200).json(all);
  }
}
export { ListAllPostController };
