import jsonServer from "json-server";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "data", "cities.json"));
const middlewares = jsonServer.defaults();

// Add custom middleware for logging
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Add root route handler
server.get("/", (req, res) => {
  res.json({ message: "Welcome to the WorldWise API" });
});

server.use(middlewares);
server.use("/api", router); // Mount json-server routes under /api

const port = process.env.PORT || 8000;

server.listen(port, "0.0.0.0", () => {
  console.log(`JSON Server is running on port ${port}`);
  console.log(`API endpoints available at http://localhost:${port}/api`);
});
