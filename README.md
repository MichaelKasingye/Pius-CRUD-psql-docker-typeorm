
## Project Structure
CRUD/
├── config/
│ ├── custom-environment-variables.ts
│ └── default.ts
├── src/
│ ├── controllers/
│ │ ├── auth.controller.ts
│ │ ├── post.controller.ts
│ │ └── user.controller.ts
│ ├── entities/
│ │ ├── model.entity.ts
│ │ ├── post.entity.ts
│ │ └── user.entity.ts
│ ├── middleware/
│ │ ├── deserializeUser.ts
│ │ ├── requireUser.ts
│ │ └── validate.ts
│ ├── migrations/
│ │ └── 1652179771572-added-entity.ts
│ ├── routes/
│ │ ├── auth.routes.ts
│ │ ├── post.routes.ts
│ │ └── user.routes.ts
│ ├── schemas/
│ │ ├── post.schema.ts
│ │ └── user.schema.ts
│ ├── services/
│ │ ├── post.service.ts
│ │ └── user.service.ts
│ ├── utils/
│ │ ├── appError.ts
│ │ ├── connectRedis.ts
│ │ ├── data-source.ts
│ │ ├── email.ts
│ │ ├── jwt.ts
│ │ └── validateEnv.ts
│ ├── views/
│ │ ├── base.pug
│ │ ├── resetPassword.pug
│ │ ├── verificationCode.pug
│ │ └── _styles.pug
│ ├── app.ts
│ └── example.env
├── .env
├── .gitignore
├── docker-compose.yml
├── package.json
├── README.md
├── tsconfig.json
├── yarn-error.log
└── yarn.lock