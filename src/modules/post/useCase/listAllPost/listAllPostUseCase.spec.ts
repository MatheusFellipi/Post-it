import { PostRepositoryInMemory } from "@modules/post/repositories/in-memory/postRepositoryInMemory";
import { ListAllPostUseCase } from "./ListAllPostUseCase";

describe("Create post it", () => {
  let postRepositoryInMemory: PostRepositoryInMemory;
  let listAllUseCase: ListAllPostUseCase;

  beforeEach(() => {
    postRepositoryInMemory = new PostRepositoryInMemory();
    listAllUseCase = new ListAllPostUseCase(postRepositoryInMemory);
  });

  it("should be able to list", async () => {
    const post = {
      title: "Teste",
      description: "Oi eu sou um teste",
      status: "FAZENDO",
    };

    await postRepositoryInMemory.create(post);
    const res = await listAllUseCase.execute();
    expect(res.length).not.toBe(0);
  });

});
