# Front-End de Cadastro de Usuários
Front-End em **React + Vite + Axios** para integração com uma API REST (**Node.js + Express + Prisma**) para criar, listar, atualizar e excluir usuários.  
Foco em boas práticas, organização de código e uso de variáveis de ambiente e CORS.

## Funcionalidades
- **Criar usuário**: recebe `{ nome, age, email }` e retorna o usuário criado (POST `/usuarios`);

- **Listar usuários**: retorna todos os usuários (GET `/usuarios`);

- **Atualizar usuário**: atualiza um usuário pelo ID (PUT `/usuarios/:id`);

- **Deletar usuário**: remove um usuário pelo ID (DELETE `/usuarios/:id`);

## Pré-requisitos
- Node.js;
- npm;
- Banco de dados (MongoDB usado no projeto);
- Opcional: Thunder Client (VS Code) ou Postman para testes.

## Configuração
1. Clone o repositório: `git clone <URL_DO_REPOSITORIO>`
2. Instale as dependências: `npm install`
3. Crie um arquivo `.env` com base no `.env.example`:
- Para desenvolvimento local, só é necessario configurar `VITE_LOCAL_API_URL` somente se você alterou a porta padrão(`http://localhost:3000`).

4. Para deploy no Vercel, configure no painel:
- `VITE_PRODUCTION_API_URL=https://api-usuarios.onrender.com`

## Configuração para o arquivo **.env**
- **`#VITE_PRODUCTION_API_URL` ,  **`VITE_LOCAL_API_URL`** e **`VITE_HML_API_URL`** : URLs de configuração central do Axios para que a aplicação saiba qual URL base usar ao fazer as requisições para a API;

- **`import.meta.env.PROD`**: Pode ser usado para verificar se esta no ambiente de Produção;

## Executando Localmente
1. Configure o `.env` (apenas se alterou a porta padrão)
2. Inicie o servidor: `npm run dev` (Vite irá executar);
3. Teste com:
- Abra o front-end em `http://localhost:5173` (ou a porta configurada).

## Deploy no Vercel
1. Crie um novo projeto (Add new -> Project);
2. Configure a variável de ambiente no painel do Vercel ( em **Settings** -> **Environment Variables**): `VITE_LOCAL_API_URL`;
3. Faça o Deploy o projeto.

## Estrutura do Projeto
- `src/main.jsx` — Arquivo de entrada da aplicação React;
- `src/assets/` — Imagens do projeto;
- `src/hooks/` — hooks personalizados (ex: para requisições);
- `src/pages/home/` — componente Home e styles globais;
- `src/pages/home/components/` — componentes usados na home;
- `src/services/api` — Configurações central do Axios para que a aplicação saiba qual URL base usar ao fazer as requisições para a API;
- `src/services/userService` — Camada de serviços responsável por centralizar as requisições HTTP da sua aplicação;
- `.env.example` — Modelo para criação das variáveis de ambiente.
