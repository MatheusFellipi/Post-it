import { PostRepositoryInMemory } from "@modules/post/repositories/in-memory/PostRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreatePostUseCase } from "./CreatePostUseCase";

describe("Create post it", () => {
  let createThemesUseCase: CreatePostUseCase;
  let postRepositoryInMemory: PostRepositoryInMemory;

  beforeEach(() => {
    postRepositoryInMemory = new PostRepositoryInMemory();
    createThemesUseCase = new CreatePostUseCase(postRepositoryInMemory);
  });

  it("should be able to create new post", async () => {
    const post = {
      title: "Teste",
      description: "Oi eu sou um teste",
      status: "FAZENDO",
    };

    await createThemesUseCase.execute(post);
    const res = await postRepositoryInMemory.list();

    expect(res[0].title).toBe(post.title);
  });
  it("should be able to list", async () => {
    const post = {
      title: "Teste",
      description: "Oi eu sou um teste",
      status: "FAZENDO",
    };

    await createThemesUseCase.execute(post);
    const res = await postRepositoryInMemory.list();

    expect(res.length).not.toBe(0);
  });
  it("should be able not create a post", async () => {
    expect(async () => {
      const post = {
        title: "",
        description: "",
        status: "FAZENDO",
      };

      await createThemesUseCase.execute(post);
      const res = await postRepositoryInMemory.list();
    }).rejects.toBeInstanceOf(AppError);
  });
});
