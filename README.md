# TO-DO-LIST API
Uma API simples para criar, listar, deletar ou alterar tarefas.

## Instalação
1. Clone o repositório usando o comando:
```
git clone https://github.com/ewertonlx/to-do-list-api.git
```
2. Instale as dependências do projeto:
```
npm install
```
3. Crie um .env com a seguinte estrutura:
```
PORT=numero_da_porta
DATABASE_URL="url_database"
```

## Uso

Para rodar a API, use o seguinte comando:
```
npm run dev
```
Ele irá rodar na sua máquina no **localhost**.

## 
## Rotas disponíveis
1. Rotas de usuário
```
GET -> http://localhost:port/user/:id/tasks
GET -> http://localhost:port/user/:id
POST -> http://localhost:port/user/
PATCH -> http://localhost:port/user/:id
DELETE -> http://localhost:port/user/:id
```
2. Rotas de tasks
```
GET -> http://localhost:port/task/:id
POST -> http://localhost:port/task
DELETE -> http://localhost:port/task/:id
PATCH -> http://localhost:port/task/:id
```
##
Essa API foi feita para meus estudos em criação de APIs e validação de dados com **zod**.