# IMG do node na versão 16
FROM node:16-alpine
# Expor a porta 3000
EXPOSE 3001
# Diretório de trabalho(é onde a aplicação ficará dentro do container).
WORKDIR /app
# Adicionando `/app/node_modules/.bin` para o $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Instalando dependências da aplicação e armazenando em cache.
COPY package.json /app/package.json
# Roda o comando npm install
RUN npm install -g npm@9.1.3
RUN npm install
# Inicializa a aplicação
CMD ["npm", "run", "dev"]