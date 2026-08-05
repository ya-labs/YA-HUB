# Contratos conceituais da API V1

## Objetivo

Este documento registra os contratos conceituais da API V1 do YA Hub.

Os nomes finais de DTOs, propriedades e rotas podem ser refinados durante a implementação, mas a intenção da API deve permanecer clara: entregar dados públicos da YA LABS já tratados para o front-end e permitir manutenção administrativa básica de projetos e membros.

Este documento é conceitual. Quando a implementação definir contratos reais, os exemplos devem ser atualizados para refletir o comportamento efetivo da API.

## Padrão de resposta

A API deve usar um envelope de resposta inspirado no `ServiceResult<T>` usado no CADE O DANO.

Exemplo de sucesso:

```json
{
  "result": true,
  "message": null,
  "data": {}
}
```

Exemplo de falha:

```json
{
  "result": false,
  "message": "Não foi possível buscar os projetos da YA LABS.",
  "data": null
}
```

## Endpoints previstos

```text
GET /api/organization
GET /api/projects
GET /api/projects/{slug}
GET /api/members
GET /api/members/{slug}
GET /api/activity
POST /api/login
POST /api/register
GET /api/admin/projects
POST /api/admin/projects
PUT /api/admin/projects/{id}
DELETE /api/admin/projects/{id}
GET /api/admin/github/repositories
POST /api/admin/github/repositories/resolve
GET /api/admin/members
POST /api/admin/members
PUT /api/admin/members/{id}
DELETE /api/admin/members/{id}
```

## Estado atual da implementação

A implementação inicial do back-end já possui autenticação JWT e CRUD protegido para usuários administrativos, membros e projetos.

Endpoints implementados no momento:

```text
POST /api/login
POST /users
GET /users
PUT /users/{id}
DELETE /users/{id}
GET /api/members
POST /api/members
PUT /api/members/{id}
DELETE /api/members/{id}
GET /api/members/{id}/projects
GET /api/projects
POST /api/projects
PUT /api/projects/{id}
DELETE /api/projects/{id}
GET /api/projects/{id}/members
POST /api/projects/{projectId}/members/{memberId}
DELETE /api/projects/{projectId}/members/{memberId}
```

Todos os endpoints acima, exceto `POST /api/login`, exigem token JWT no header:

```text
Authorization: Bearer {token}
```

O Swagger da API permite informar o token pelo botão `Authorize`.

O usuário administrador inicial não é definido no código-fonte. Em ambiente local, ele deve existir no banco de dados ou ser criado por um fluxo autenticado.

## GET /api/organization

Retorna informações públicas da organização para a Home do YA Hub.

Dados esperados:

- nome da organização;
- descrição;
- links oficiais;
- resumo estatístico simples;
- destaque institucional.

Exemplo conceitual:

```json
{
  "result": true,
  "message": null,
  "data": {
    "name": "YA LABS",
    "description": "Organização voltada a desenvolvimento de produtos, estudos técnicos e experimentos de software.",
    "links": [
      {
        "label": "GitHub",
        "url": "https://github.com/ya-labs"
      }
    ],
    "stats": {
      "projects": 6,
      "members": 3
    }
  }
}
```

## GET /api/projects

Retorna a listagem de projetos públicos exibidos no YA Hub.

Dados esperados:

- identificador;
- slug;
- nome de exibição;
- categoria;
- vínculo com a YA LABS;
- descrição curta;
- status;
- linguagem principal;
- URL do repositório;
- URL do site, quando existir;
- data da última atualização;
- indicação de destaque.

Para projetos orientados, a resposta também deve incluir autoria e tipos de apoio da YA LABS.

Exemplo conceitual:

```json
{
  "result": true,
  "message": null,
  "data": [
    {
      "id": "cade-o-dano",
      "slug": "cade-o-dano",
      "displayName": "CADE O DANO",
      "category": "produto",
      "affiliation": "oficial",
      "shortDescription": "Projeto desenvolvido para testar APIs do League of Legends.",
      "status": "Em desenvolvimento",
      "primaryLanguage": "TypeScript",
      "repositoryUrl": "https://github.com/ya-labs/CADE-O-DANO",
      "websiteUrl": "https://ya-labs.github.io/CADE-O-DANO/",
      "updatedAt": "2026-06-05T15:20:28Z",
      "featured": true
    }
  ]
}
```

## GET /api/projects/{slug}

Retorna o detalhe básico de um projeto.

Na V1, este endpoint não deve depender de `.yahub/project.json`. O detalhe deve usar metadados cadastrados no banco do YA Hub e pode combinar dados complementares vindos da GitHub API.

Dados esperados:

- dados do projeto;
- categoria e vínculo com a YA LABS;
- autoria e tipos de apoio, quando for orientado;
- links;
- responsáveis;
- tecnologias;
- últimas atividades simples.

## GET /api/members

Retorna membros oficiais da YA LABS exibidos no YA Hub.

Dados esperados:

- identificador;
- nome;
- papel principal;
- responsabilidades;
- GitHub;
- vínculo futuro com Spotifolio;
- projetos relacionados.

Exemplo conceitual:

```json
{
  "result": true,
  "message": null,
  "data": [
    {
      "id": "nicolas",
      "name": "Nícolas Machado Cardoso",
      "role": "Product / Front-end / UX",
      "githubUsername": "yoriyoi",
      "spotifolioUsername": null,
      "responsibilities": [
        "Idealização do YA Hub",
        "Direção funcional",
        "Front-end"
      ]
    }
  ]
}
```

## GET /api/members/{slug}

Retorna o detalhe público de um membro oficial da YA LABS.

Dados esperados:

- dados públicos do membro;
- papel principal e responsabilidades;
- GitHub;
- projetos relacionados;
- vínculo futuro com Spotifolio, quando existir.

Membros ocultos não devem ser retornados por este endpoint.

## GET /api/activity

Retorna atividade recente simples da organização.

Na V1, a atividade deve ser limitada para evitar complexidade excessiva.

Fontes possíveis:

- commits recentes;
- última atualização dos repositórios;
- releases, se estiverem disponíveis e forem úteis.

Dados esperados:

- tipo da atividade;
- projeto relacionado;
- descrição;
- autor, quando disponível;
- data;
- URL de referência.

## POST /api/login

Autentica um usuário administrativo.

Entrada esperada:

```json
{
  "email": "admin@yahub.local",
  "password": "senha"
}
```

Resposta esperada:

```json
{
  "result": true,
  "message": null,
  "data": {
    "username": "admin",
    "email": "admin@yahub.local",
    "token": "jwt",
    "expiresAt": "2026-07-16T03:35:05Z"
  }
}
```

## POST /users

Cadastra um usuário administrativo.

Este endpoint exige autenticação JWT. Antes de produção, o fluxo deve continuar impedindo cadastro público aberto de administradores.

Entrada esperada:

```json
{
  "username": "Caio",
  "email": "caio@email.com",
  "password": "senha"
}
```

Resposta esperada:

```json
{
  "result": true,
  "message": null,
  "data": {
    "username": "Caio",
    "email": "caio@email.com"
  }
}
```

## CRUD atual de projetos

Entrada atual para criação e atualização:

```json
{
  "name": "YA Hub",
  "description": "Portal oficial da YA LABS.",
  "url": "https://github.com/ya-labs/YAHub"
}
```

Resposta atual:

```json
{
  "result": true,
  "message": null,
  "data": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": "YA Hub",
    "description": "Portal oficial da YA LABS.",
    "url": "https://github.com/ya-labs/YAHub"
  }
}
```

## CRUD atual de membros

Entrada atual para criação e atualização:

```json
{
  "name": "Caio Matheus",
  "role": "Back-end"
}
```

Resposta atual:

```json
{
  "result": true,
  "message": null,
  "data": {
    "id": "00000000-0000-0000-0000-000000000000",
    "name": "Caio Matheus",
    "role": "Back-end"
  }
}
```

## Vínculo atual entre projetos e membros

A implementação atual permite vincular membros a projetos e consultar a relação dos dois lados.

Endpoints implementados:

```text
GET /api/projects/{id}/members
POST /api/projects/{projectId}/members/{memberId}
DELETE /api/projects/{projectId}/members/{memberId}
GET /api/members/{id}/projects
```

Todos exigem autenticação JWT.

Regras atuais:

- o projeto deve existir;
- o membro deve existir;
- o mesmo membro não pode ser vinculado duas vezes ao mesmo projeto;
- só é possível remover vínculo existente;
- a relação é persistida na tabela `project_members`.

## Endpoints administrativos de projetos

Endpoints previstos:

```text
GET /api/admin/github/repositories
POST /api/admin/github/repositories/resolve
GET /api/admin/projects
POST /api/admin/projects
PUT /api/admin/projects/{id}
DELETE /api/admin/projects/{id}
```

`GET /api/admin/github/repositories` lista os repositórios públicos da organização `ya-labs` disponíveis para cadastro. A resposta deve indicar quais já possuem projeto no YA Hub.

`POST /api/admin/github/repositories/resolve` recebe uma URL pública do GitHub, valida o repositório e retorna os dados técnicos usados para iniciar o formulário. Repositórios privados, inexistentes ou já cadastrados devem ser rejeitados.

Campos obrigatórios:

- `githubRepositoryId`;
- `githubOwner`;
- `githubName`;
- `slug`;
- `displayName`;
- `tagline`;
- `shortDescription`;
- `fullDescription`;
- `category`;
- `affiliation`;
- `status`;
- `visibility`;
- `repositoryUrl`;
- `websiteUrl`;
- `documentationUrl`;
- `technologies`;
- `featured`;
- `displayOrder`.

Valores fechados:

- `category`: `produto`, `ecossistema`;
- `affiliation`: `oficial`, `orientado`;
- `status`: `ideia`, `planejamento`, `desenvolvimento`, `ativo`, `pausado`, `arquivado`;
- `visibility`: `publico`, `oculto`.

Campos de projetos orientados:

- `authorDisplayName`;
- `supportTypes`;
- `yalabsMentorIds`.

Valores de `supportTypes`:

- `apoio_tecnico`;
- `documentacao`;
- `revisao`;
- `divulgacao`;
- `mentoria`.

Regras:

- cada projeto possui exatamente um repositório principal;
- somente repositórios públicos podem ser cadastrados;
- `githubRepositoryId` não pode se repetir;
- repositório de `ya-labs` gera `affiliation = oficial`;
- repositório externo gera `affiliation = orientado` e exige `category = produto`;
- o vínculo é calculado pelo back-end e não deve ser aceito livremente do cliente.

Na interface administrativa, os campos podem ser exibidos em português. No payload da API, o contrato deve permanecer consistente com os nomes técnicos acima.

## Endpoints administrativos de membros

Endpoints previstos:

```text
GET /api/admin/members
POST /api/admin/members
PUT /api/admin/members/{id}
DELETE /api/admin/members/{id}
```

O modelo final de membro pode ser refinado durante a implementação, mas a V1 deve permitir cadastro e manutenção dos membros exibidos no portal.

## Fora da API V1

Não fazem parte da API V1:

- documentação interna dos projetos;
- upload;
- escrita em repositórios;
- criação de Pull Requests;
- cadastro público aberto de administradores sem controle;
- permissões administrativas granulares;
- Discord;
- integração real com Spotifolio;
- leitura de `.yahub/project.json`.

## Regra para o front-end

O front-end deve consumir os dados já tratados pelo back-end.

Ele não deve depender do formato bruto da GitHub API, porque a origem dos dados pode mudar nas próximas versões.
