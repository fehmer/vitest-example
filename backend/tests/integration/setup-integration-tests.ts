import { beforeAll, vi } from "vitest";

beforeAll(async () => {
  vi.mock("../../src/db", () => ({
    getDatabaseInfo: () => ({
      identifier: process.env["DB_URI"],
      isMocked: false,
    }),
  }));
});
