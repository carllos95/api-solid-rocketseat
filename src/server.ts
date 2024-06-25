import { app } from './app'
import { env } from './env'

// Setar o host, para evitar problemas quando front end tentar acessar as rotas
app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => console.log('🚀 HTTP Server Running'))
