import {describe, it, expect} from "bun:test";
import { sayHello } from "../src/hello";

describe("sayHello", () => {
  it("should return a greeting message", () => {
    const result = sayHello("Alice");
    expect(result).toBe("Hello, Alice!");
  });
  
  it("should return a greeting message", () => {
    const result = sayHello("Joko");
    expect(result).toBe("Hello, Joko!");
  });
});
