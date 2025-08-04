import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: { label: "unit", color: "blue" },
          setupFiles: ["tests/setup-tests.ts"],
          include: ["tests/**/*.spec.ts"],
          exclude: ["tests/integration"],
          sequence: {
            groupOrder: 0,
          },
        },
      },
      {
        extends: true,
        test: {
          name: { label: "integration", color: "yellow" },
          setupFiles: ["tests/integration/setup-integration-tests.ts"],
          globalSetup: "tests/integration/global-setup.ts",
          include: ["tests/integration/**/*.spec.ts"],
          sequence: {
            concurrent: false,
            groupOrder: 1,
          },
        },
      },
    ],
    globals: true,
    environment: "node",
  },
});
