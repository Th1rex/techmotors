<h1 align="center">🚗 TechMotors</h1>

<p align="center">
  <strong><code>Plataforma de Agendamentos Automotivos</code></strong>
</p>

<p align="center">
  Sistema web completo para agendamento de serviços automotivos, conectando clientes a oficinas mecânicas.
</p>

<p align="center">
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-22.5+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Express" src="https://img.shields.io/badge/Express-4.18-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img alt="SQLite" src="https://img.shields.io/badge/SQLite-node%3Asqlite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" />
  <img alt="Bootstrap" src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" />
  <img alt="JWT" src="https://img.shields.io/badge/Auth-JWT%20%2B%20bcrypt-D63AFF?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
</p>

---

### 🤖 Linguagens e Tecnologias

<img
    align="left"
    alt="HTML"
    title="HTML5"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
/>
<img
    align="left"
    alt="CSS"
    title="CSS3"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
/>
<img
    align="left"
    alt="JavaScript"
    title="JavaScript"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
/>
<img
    align="left"
    alt="TypeScript"
    title="TypeScript"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
/>
<img
    align="left"
    alt="Node.js"
    title="Node.js"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
/>
<img
    align="left"
    alt="SQLite"
    title="SQLite"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
/>
<img
    align="left"
    alt="Bootstrap"
    title="Bootstrap 5"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
/>
<img
    align="left"
    alt="Vitest"
    title="Vitest"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitest/vitest-original.svg"
/>
<img
    align="left"
    alt="ESLint"
    title="ESLint"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg"
/>
<img
    align="left"
    alt="NPM"
    title="NPM"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
/>
<img
    align="left"
    alt="Git"
    title="Git"
    width="30px"
    style="padding-right: 10px;"
    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
/>
<br/>
<br/>

---

## Stack Tecnológica

| Camada | Tecnologia |
|--------|-----------|
| Backend | Node.js + Express + TypeScript |
| Banco de Dados | SQLite (`node:sqlite`, nativo do Node.js 22.5+) |
| Frontend | HTML5 + CSS3 + JavaScript (SPA) |
| Autenticação | JWT + bcrypt |
| UI | Bootstrap 5 + Bootstrap Icons |
| E-mail | Nodemailer (Gmail SMTP) |
| Upload | Multer |
| Testes | Vitest + Supertest |
| Lint/Format | ESLint + Prettier |
| Git hooks | Lefthook (pré-commit) |

## Funcionalidades

### 👤 Cliente
- Busca de oficinas por serviço, categoria e geolocalização
- Agendamento em 4 passos (serviço → data/hora → veículo → confirmação)
- Histórico de serviços por veículo
- Favoritar oficinas
- Avaliações (1-5 estrelas + comentário)
- Notificações internas (sino com contador de não lidas)
- Comprovante/recibo para impressão
- Gerenciamento de veículos (placa antiga e Mercosul)
- Tema claro/escuro/sistema

### 🔧 Oficina
- Agenda semanal visual com detalhes ao clicar
- Confirmar/recusar/concluir/cancelar agendamentos
- Configuração de disponibilidade e bloqueios
- Cadastro e edição dos próprios serviços (nome, categoria, preço e duração)
- Painel de métricas (dashboard + receita + histórico)
- Exportação das métricas em CSV
- Notificações de novos agendamentos

### 🛡️ Administrador
- Dashboard com estatísticas completas
- Aprovação/rejeição de oficinas
- Gestão de usuários (busca, filtros, detalhes, alterar status)
- Ranking de oficinas (por nota e volume)
- Moderação de avaliações
- Exportação das métricas em CSV
- Notificações

### 🔐 Segurança
- Rate limiting (login, cadastro, recuperação de senha)
- Headers HTTP de segurança (CSP, X-Frame-Options, etc.)
- Sanitização de inputs contra XSS
- Prepared statements contra SQL injection
- Política de senha forte
- Validação de CPF e CNPJ com dígitos verificadores
- Recuperação de senha por e-mail com token temporário
- Upload com validação de tipo e tamanho
- JWT_SECRET obrigatório via variável de ambiente (sem fallback)

## Como Rodar

### Pré-requisitos
- **Node.js 22.5 ou mais recente** (recomendado: versão LTS). O projeto usa o SQLite nativo do Node (`node:sqlite`), que não existe nas versões 18 e 20.
- Git

Para conferir as versões instaladas:

```bash
node -v
git --version
```

### Instalação

Abra o terminal **sem** ser como administrador e clone o projeto numa pasta comum (por exemplo, Documentos). No Windows, **não** clone dentro de `C:\Windows\System32`, que é a pasta onde o PowerShell abre quando é executado como administrador.

```bash
git clone https://github.com/Th1rex/techmotors.git
cd techmotors/backend
npm install
```

> **Windows (PowerShell):** se aparecer o erro `npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada`, use `npm.cmd` no lugar de `npm` (ex.: `npm.cmd install`) ou libere os scripts só para o seu usuário com `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

### Configuração (obrigatória)

Ainda dentro da pasta `backend`, copie `.env.example` para `.env`:

```bash
cp .env.example .env
```

No Prompt de Comando (cmd) do Windows, use `copy .env.example .env`.

O `JWT_SECRET` é **obrigatório**: o servidor não inicia sem ele. Para testar localmente, o valor que vem no `.env.example` já funciona; em produção, troque por uma string longa e aleatória. `EMAIL_USER` e `EMAIL_PASS` só são necessários para o envio do e-mail de recuperação de senha.

### Iniciar em desenvolvimento

Ainda dentro da pasta `backend`:

```bash
npm run dev
```

### Build + produção

Ainda dentro da pasta `backend`:

```bash
npm run build
npm start
```

Acesse **http://localhost:3000**

Na primeira execução o banco é criado automaticamente em `backend/data/techmotors.db`, já com as contas de teste abaixo. Para recomeçar do zero, pare o servidor, apague os arquivos `techmotors.db*` dessa pasta e inicie de novo.

### Problemas comuns

| Problema | Solução |
|----------|---------|
| `JWT_SECRET não definido` | O arquivo `.env` não existe na pasta `backend`. Refaça o passo **Configuração** |
| `npm.ps1 não pode ser carregado` | Use `npm.cmd` ou `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (ver **Instalação**) |
| `EPERM` ou `package.json` não encontrado em `C:\Windows\System32\...` | O projeto foi clonado na pasta do sistema. Abra o terminal como usuário comum, vá para `Documentos` e clone de novo |
| `No such built-in module: node:sqlite` | Node.js anterior à 22.5. Atualize o Node |
| `EADDRINUSE :3000` | Já existe outro servidor na porta 3000. Feche-o ou mude `PORT` no `.env` |
| Aviso `ExperimentalWarning: SQLite is an experimental feature` | É só um aviso do Node, não um erro. O servidor funciona normalmente |

### Testes

Testes unitários das validações de CPF/CNPJ e da geração de CSV:

```bash
npm test            # roda a suíte com Vitest
npm run test:watch  # modo watch
```

### Lint e formatação

```bash
npm run lint        # verifica erros
npm run lint:fix    # corrige automaticamente
npm run format      # formata com prettier
npm run format:check # verifica formatação sem alterar
```

### Git hooks (Lefthook)

O Lefthook roda automaticamente no `pre-commit`:
- ESLint
- Prettier format check
- TypeScript typecheck (tsc)

Para instalar os hooks após clonar:
```bash
npx lefthook install
```

## Contas de Teste

| Tipo | E-mail | Senha |
|------|--------|-------|
| Admin | admin@techmotors.com | Senha@123 |
| Cliente | joao@email.com | Senha@123 |
| Cliente | maria@email.com | Senha@123 |
| Oficina (aprovada) | jm@oficina.com | Senha@123 |
| Oficina (aprovada) | high@oficina.com | Senha@123 |
| Oficina (pendente) | autocenter@oficina.com | Senha@123 |

## Estrutura do Projeto

```
techmotors/
├── backend/
│   ├── src/
│   │   ├── server.ts            Servidor + middlewares de segurança
│   │   ├── config/database.ts   SQLite + schema + seed
│   │   ├── middleware/auth.ts   JWT + controle de acesso
│   │   ├── utils/
│   │   │   ├── documentos.ts    Validação de CPF e CNPJ (+ testes)
│   │   │   └── csv.ts           Geração de CSV para exportação (+ testes)
│   │   └── routes/
│   │       ├── auth.ts          Login, cadastro, perfil, foto, reset senha
│   │       ├── cliente.ts       Busca, agendamento, veículos, favoritos, histórico
│   │       ├── oficina.ts       Agenda, solicitações, serviços, métricas, notificações
│   │       └── admin.ts         Dashboard, aprovações, usuários, ranking, moderação
│   ├── tests/setup.ts           Configuração dos testes (Vitest)
│   ├── data/                    Banco SQLite (auto-gerado)
│   ├── .env.example             Variáveis de ambiente
│   ├── .eslintrc.json           Configuração ESLint
│   ├── .prettierrc              Configuração Prettier
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── index.html               SPA (Single Page Application)
│   ├── css/style.css            Design system + tema escuro
│   ├── img/icon.svg             Ícone da aplicação
│   ├── uploads/                 Fotos de perfil (auto-gerado)
│   └── js/
│       ├── api.js               HTTP helper + utilitários
│       ├── app.js               Router + navbar + tema
│       ├── pages-auth.js        Login, cadastro, perfil, recuperação
│       ├── pages-cliente.js     Todas as telas do cliente
│       ├── pages-oficina.js     Todas as telas da oficina
│       └── pages-admin.js       Todas as telas do admin
├── docs/                        Documentação completa (TCC)
├── lefthook.yml                 Hooks de pré-commit
├── render.yaml                  Deploy no Render (Blueprint)
├── .editorconfig                Padrões de editor
├── CONTRIBUTING.md              Guia de contribuição
└── README.md
```

## Documentação

A pasta `docs/` contém documentação completa para o TCC:
- **[DER](docs/01-DER-banco-de-dados.md)** — Diagrama de banco com 12 tabelas e relacionamentos
- **[Casos de Uso](docs/02-casos-de-uso.md)** — 39 casos de uso por ator
- **[API REST](docs/03-documentacao-api.md)** — Todas as rotas documentadas
- **[Telas](docs/04-telas-do-sistema.md)** — Guia de 38 telas com credenciais
- **[Justificativa](docs/05-justificativa-problema.md)** — Problema, solução, objetivos, metodologia
- **[Segurança](docs/06-seguranca.md)** — Mecanismos implementados e conformidade LGPD
- **[Deploy](docs/07-deploy-render.md)** — Publicação no Render com domínio próprio

## Autores

Projeto de TCC — **UDF · Sistemas de Informação**

<table>
  <tr>
    <td align="center">
      <strong>Thiago Régis Vieira Rocha</strong><br/><br/>
      <a href="https://github.com/Th1rex">
        <img alt="GitHub" src="https://img.shields.io/badge/GitHub-Th1rex-181717?style=for-the-badge&logo=github&logoColor=white" />
      </a>
      <a href="https://www.linkedin.com/in/thirex/">
        <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-thirex-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
      </a>
    </td>
    <td align="center">
      <strong>Eduardo Santos Morais</strong><br/><br/>
      <a href="https://github.com/Eduardosnt">
        <img alt="GitHub" src="https://img.shields.io/badge/GitHub-Eduardosnt-181717?style=for-the-badge&logo=github&logoColor=white" />
      </a>
    </td>
  </tr>
</table>
