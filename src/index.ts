import { Hono } from "hono";
import { serveStatic } from 'hono/serve-static.bun';

const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));

app.get("/", (c) => {
  return c.json({
    status: true,
    message: 'Success to deploy bun at railway',
    dados: [{
      name: 'Daniel Rodrigues',
      page: 'https://linktr.ee/danielsrod'
    }]
  });
});

console.info(`Running at *:${port}`);

export default {
  port,
  fetch: app.fetch
};
