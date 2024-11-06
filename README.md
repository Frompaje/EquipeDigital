# Projeto de Cadastro de Usuários

Este projeto é uma aplicação de cadastro de usuários, que permite criar, editar, listar e excluir usuários, além de definir o nível de permissão como **User** ou **Admin**. A aplicação foi construída utilizando React, TypeScript e Tanstack Query (React Query) para gerenciamento de dados.

## Funcionalidades

- **Cadastro de Usuários**: Campos para `name`, `email`, `password` e `role` (com seleção entre User e Admin).
- **Listagem de Usuários**: Exibe todos os usuários cadastrados em uma tabela.
- **Edição de Usuário**: Permite editar informações de um usuário específico.
- **Exclusão de Usuário**: Permite excluir um usuário específico com confirmação.
- **Feedback de Interação**: Notificações de sucesso e erro, com a biblioteca [Sonner](https://sonner.dev/) para exibir toasts.

## Tecnologias Utilizadas

- **React** com TypeScript
- **React Query** para gerenciamento de dados e cache
- **Tailwind CSS** para estilização
- **Zod** para validação de formulários
- **Sonner** para notificações
- **React Hook Form** para gerenciamento de formulários
- **Lucide React** para ícones

## Instalação

Siga as etapas abaixo para configurar e executar o projeto localmente.

1. Clone o repositório:
   ```bash
   git clone git@github.com:Frompaje/EquipeDigital.git
   ```
 2. Entre no projeto 
    ```bash
       cd EquipeDigital
    ```
 3. Instale as dependências:
    ```bash
      npm i
    ```
 3. Configure a variavel local para o prisma achar o banco.
      - Crie um arquivo chamado .env e adicione: 
      ```ts
      DATABASE_URL="postgresql://docker:docker@localhost:5432/api-digital?schema=public"
      ```
 4. No terminal use o comando. Para subir o banco 
    ```bash
     docker compose up
    ```

5. Baixe prisma generate. Use esse comando no terminal
    ```bash
     npx prisma generate
    ```
6. Agora baixe as migrates. Usando :
   ```bash
     npx prisma migrate dev 
    ```

7. Agora só rodar o projeto !
     ```bash
       npm run dev
     ```
 ## Observação :
- Entendo que eu podia usar o dockerFile para facilitar a instalação só rodando ```docker compose up --build```, infelizmente tomei um gap por conta da configuração do next. Mesmo assim como podem ve nos comites tentei fazer mas como não consegui, e pelo horário resolvi fazer só o ```banco com docker-compose.yml```.
- Agradeço pelo teste. Já estou trabalhando para resolver esse gap que tomei.
