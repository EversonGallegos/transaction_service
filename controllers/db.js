import fastifyPlugin from 'fastify-plugin'
import fastifyPostgres from '@fastify/postgres'

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
async function dbConnector (fastify, options) {
  fastify.register(fastifyPostgres, {
    connectionString: 'postgres://admin:admin@127.0.0.1:5432/pagouai'
  })
}

export default fastifyPlugin(dbConnector)
