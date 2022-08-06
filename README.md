# COMANDOS DOCKER

docker run --name curso_node_postgres -e POSTGRES_PASSWORD=123456789  -p 5454:5432 -d postgres

docker run --name curso_node_redis -p 6565:6379 -d redis:alpine

docker run --name curso_node_redis_client -v redisinsight:/db -p 8001:8001 -d -t redislabs/redisinsight:latest

# CONFIGURAÇÃO INICIAL DO AMBIENTE DE DESENVOLVIMENTO

1) copiar e colar o .env.example
2) renomear para .env

# COMANDO PARA INSTALAR E RODAR O AMBIENTE DE DESENVOLVIMENTO

yarn | npm install
yarn dev | npm run dev

# COMANDO PARA INSTALAR E RODAR O AMBIENTE DE PRODUCAO

yarn | npm install
yarn build | npm run build
node dist/shared/http/server.js

