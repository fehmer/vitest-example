import { describe, expect, it } from "vitest";
import * as Test from "../src/test";

describe("test", () => {
  it("test", () => {
    expect(Test.test()).toEqual("ok");
  });
});
