import Fastify from 'fastify';
import {getRandomPrediction} from "./constants/predictions.js";

const fastify = Fastify({
    logger: true
})
fastify.get('/', () => ({hello: 'world'}));

fastify.get('/prediction', (req, resp) => {
    resp
        // Don't do this in production
        .header('Access-Control-Allow-Origin', '*')
        .send({text: getRandomPrediction()})
});

try {
    await fastify.listen({port: 4000})
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}