import jsonServer from "json-server";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "data", "cities.json"));
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);

server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${port}`);
});
