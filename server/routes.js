import livepoolNodeRouter from './api/routes/node.routes'

export default function routes(app) {
  app.use('/api/v1', livepoolNodeRouter);
}
