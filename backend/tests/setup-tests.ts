import { vi } from "vitest";

vi.mock("../src/db", () => ({
  getDatabaseInfo: () => ({
    identifier: "test",
    isMocked: true,
  }),
}));
