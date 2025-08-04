import { describe, it, expect } from "vitest";
import { getDatabaseInfo } from "../src/db";

describe("DB", () => {
  it("returns db information", () => {
    const info = getDatabaseInfo();

    expect(info).toEqual({
      identifier: "test",
      isMocked: true,
    });
  });
});
