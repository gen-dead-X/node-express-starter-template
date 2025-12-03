import createServer from "./server/server";

async function bootstrap() {
  console.log("Bootstrapping application...");
  createServer();
}

bootstrap().catch((error) => {
  console.error("Error during application bootstrap:", error);
  process.exit(1);
});
