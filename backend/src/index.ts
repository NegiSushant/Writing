import { Hono } from "hono";
import { cors } from "hono/cors";
import { blogRouter } from "./routes/blog";
import { userRouter } from "./routes/user";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// app.use("/*", cors());

// app.get("/", (c) => {
//   return c.text("Hello Hono!");
// });
app.use("/*", cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/post", blogRouter);

export default app;
