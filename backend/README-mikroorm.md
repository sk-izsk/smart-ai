# MikroORM Migration Guide

## 1. Install Dependencies

Already installed: `@mikro-orm/core`, `@mikro-orm/postgresql`, etc.

## 2. Configuration

See `src/config/mikro-orm.config.ts` for MikroORM setup.

## 3. Entities

- `src/entities/User.ts`
- `src/entities/Creation.ts`

## 4. Usage

- EntityManager is available as `req.em` in controllers.
- See `userController.ts` and `aiController.ts` for examples.

## 5. Migrations

To generate a migration:

npx mikro-orm migration:create

```
npx mikro-orm migration:create
npx mikro-orm migration:up
```

To run migrations:

```
npx mikro-orm migration:up
```

## 6. Remove Drizzle/Neon

- Drizzle ORM and Neon are removed from dependencies and codebase.

## 7. Type Safety

- All entities are TypeScript classes.
- EntityManager is typed.

---

For more, see [MikroORM Docs](https://mikro-orm.io/docs/).
