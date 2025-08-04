export type DatabaseInfo = {
  identifier: string;
  isMocked: boolean;
};

export function getDatabaseInfo(): DatabaseInfo {
  return {
    identifier: "prod",
    isMocked: "false",
  };
}
