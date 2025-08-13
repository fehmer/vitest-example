import { defineConfig, UserWorkspaceConfig } from "vitest/config";

export const projects: UserWorkspaceConfig[] = [
  {
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
];

export default defineConfig({
  test: {
    projects: projects,
    environment: "node",
  },
});
