import Fastify from "fastify";
import routes from "./controllers/routes.js";
import home from "./controllers/routes/home.js";
const fastify = Fastify({
  logger: true,
});

fastify.route(home);

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
