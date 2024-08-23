import { Application } from "https://deno.land/x/oak@v10.0.0/mod.ts";
import "https://deno.land/x/dotenv@v3.1.0/load.ts";

const app = new Application();

// A unique name for each instance so you know where the load balancer is sending the request
const INSTANCE = Deno.env.get("INSTANCE");
const PORT = 8080;

if (!INSTANCE) throw new Error(`Missing Env: $INSTANCE`);

app.use((ctx) => {
  if (ctx.request.url.pathname === "/" && ctx.request.method === "GET") {
    console.log(`Request received from ${ctx.request.ip}`);
    ctx.response.status = 200;
    ctx.response.body = `Resonse from ${INSTANCE}`;
  } else {
    ctx.response.status = 404;
    ctx.response.body = "Not Found";
  }
});

console.log(`Server started at :${PORT} on ${INSTANCE}`);
await app.listen({ port: PORT });
