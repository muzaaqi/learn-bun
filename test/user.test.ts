import { describe, it, expect } from "bun:test";
import { sayHello } from "../src/hello";
import { User } from "user/user.ts";


describe("User", () => {
  it("should create a user", () => {
    const user = new User("1", "John Doe");
    expect(user.id).toBe("1");
    expect(user.name).toBe("John Doe");
  });
});