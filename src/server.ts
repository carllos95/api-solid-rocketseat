import { app } from "./app";

// Setar o host, para evitar problemas quando front end tentar acessar as rotas
app.listen({
    host: '0.0.0.0',
    port: 3333
}).then(() => console.log('🚀 HTTP Server Running'))