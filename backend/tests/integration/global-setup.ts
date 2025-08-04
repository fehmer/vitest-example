export async function setup(): Promise<void> {
  //start testcontainers
  process.env["DB_URI"] = "integration";
}
export async function teardown(): Promise<void> {
  //stop testcontainers
}
