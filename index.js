const fastify = require('fastify')({ logger: true })
const API_NAME = process.env.API_NAME || 'default'

fastify.get('/', async (request, reply) => {
  reply.type('application/json').code(200)
  return { API_NAME }
})


const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
