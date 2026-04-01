# Smart AI

Smart AI is a full-stack AI application split into two projects:

- `backend`: Express + TypeScript API for AI and user creation workflows.
- `frontend`: React + TypeScript app for the product UI and user interaction.

This document explains the implementation approach, how the system is organized, and how each side (BE/FE) contributes to the final product.

## 1. Project Approach

The repo uses a clear separation-of-concerns approach:

- Backend is responsible for authentication enforcement, business rules, AI/media processing, and persistence.
- Frontend is responsible for user experience, navigation, and rendering feature-specific interfaces.
- Clerk is used for identity and plan-aware access logic.
- The AI/media pipeline combines Google Gemini, ClipDrop, and Cloudinary depending on the feature.

The architecture is intentionally modular:

- Routes define API surface.
- Controllers implement use cases.
- Config modules isolate infrastructure setup (ORM, env, Cloudinary, multer).
- Frontend screens/components are split by feature for easy iteration.

## 2. Repository Structure

```text
smart-ai/
  backend/
    src/
      config/        # env, ORM, cloudinary, upload config
      controllers/   # AI and user business logic
      entities/      # MikroORM entity schemas
      middlewares/   # auth + plan/free-usage logic
      routes/        # API route groups
      types/         # Express request type extensions
  frontend/
    src/
      components/    # reusable UI blocks
      screen/        # page-level feature screens
      assets/        # static assets
      types/         # shared FE types
      utils/         # helpers
```

## 3. Backend (BE)

### 3.1 Stack and Responsibilities

- Runtime/API: Express 5 + TypeScript
- Auth and user metadata: `@clerk/express`
- ORM and persistence: MikroORM + PostgreSQL
- AI generation: Google Gemini (`@google/genai`)
- Image generation/editing: ClipDrop + Cloudinary
- File upload parsing: multer

Backend responsibilities:

- Validate access (authenticated, free vs premium plan).
- Execute AI tasks.
- Persist user creations.
- Track and enforce usage limits.
- Return normalized JSON responses.

### 3.2 Server Boot Flow

Server initialization in `backend/src/index.ts` follows this flow:

1. Initialize Cloudinary config.
2. Initialize MikroORM.
3. Register global middleware (`cors`, JSON parsers, Clerk middleware).
4. Expose a health route (`GET /`).
5. Enforce auth globally for API routes.
6. Attach per-request ORM context (`req.em = orm.em.fork()`).
7. Mount route groups:
   - `/api/ai`
   - `/api/user`

### 3.3 Auth and Plan Enforcement

`backend/src/middlewares/auth.ts` enriches each request with:

- `req.plan`: `free` or `premium`
- `req.free_usage`: usage counter from Clerk private metadata

Behavior:

- Premium users are treated as unrestricted for premium-only features.
- Free users are rate-limited for text generation endpoints.
- Usage metadata is synchronized via Clerk user private metadata.

### 3.4 AI/User API Design

AI routes in `backend/src/routes/aiRoutes.ts`:

- `POST /api/ai/generate-article`
- `POST /api/ai/generate-blog-title`
- `POST /api/ai/generate-image`
- `POST /api/ai/remove-image-background`
- `POST /api/ai/remove-image-object`
- `POST /api/ai/resume-review`

User routes in `backend/src/routes/userRoutes.ts`:

- `GET /api/user/get-user-creations`
- `GET /api/user/get-published-creations`
- `POST /api/user/toggle-like-creation`

### 3.5 Persistence Model

MikroORM entities currently include:

- `User`
- `Creation`

`Creation` captures:

- owner (`user_id`)
- prompt
- output content (text or URL)
- type (`article`, `blog-title`, `image`, `resume-review`, etc.)
- optional `publish`, `likes`, `createdAt`

### 3.6 Environment and Configuration

Backend env is loaded from:

- `.env`
- `.env.test` when `NODE_ENV=test`

Important vars:

- `PORT`
- `DATABASE_URL` / `DATABASE_URL_TEST`
- `GEMINI_API_KEY`
- `CLIPBOARD_API_KEY`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

## 4. Frontend (FE)

### 4.1 Stack and Responsibilities

- Framework: React 19 + TypeScript
- Build tooling: Vite
- Styling: Tailwind CSS
- Routing: React Router
- Auth UI/session: Clerk React SDK
- Data client foundation: TanStack Query (provider is in place)

Frontend responsibilities:

- Render marketing and app surfaces.
- Handle user navigation across AI tools.
- Gate app layout by authentication.
- Collect feature input and display output regions.

### 4.2 App Composition

Core composition flow:

1. `main.tsx` renders the app inside `AppProvider`.
2. `AppProvider.tsx` wraps app with:
   - `QueryClientProvider`
   - `ClerkProvider`
   - `BrowserRouter`
3. `AppRouter.tsx` defines route tree:
   - Public home route (`/`)
   - Authenticated AI route namespace (`/ai/*`) via `LayoutScreen`
4. `lazyComponents.tsx` lazily loads each screen for lighter initial bundles.

### 4.3 Screen-Level Feature Design

Feature screens map directly to backend capabilities:

- Write article
- Blog title generation
- Image generation
- Background removal
- Object removal
- Resume review
- Community feed
- Dashboard

Shared component patterns (`TextInputCard`, `FileInputCard`, `GenerateResultCard`) keep UX consistent across tools.

## 5. How It Is Accomplished End-to-End

High-level user journey:

1. User signs in via Clerk.
2. User enters the AI workspace (`/ai/*`).
3. User submits prompt/file input for a chosen tool.
4. Backend validates auth and plan.
5. Backend calls the required AI/media provider.
6. Backend stores output as a `Creation` record.
7. Backend returns result JSON to frontend.
8. Frontend renders generated output and history/community views.

For premium-only workflows (image editing/generation and resume review), access is blocked server-side for non-premium users.

## 6. Current Implementation State

Current state is partially integrated:

- Backend API and business logic are implemented with persistence.
- Frontend routing and UI screens are implemented.
- Several frontend screens are still wired to mock/demo state rather than complete live API calls.
- `QueryClientProvider` is already configured, so migrating feature screens to real API hooks can be done incrementally.

## 7. Local Development

### 7.1 Backend

```bash
cd backend
npm install
npm run dev
```

Build/start:

```bash
npm run build
npm start
```

Test command:

```bash
npm run test:e2e
```

### 7.2 Frontend

```bash
cd frontend
npm install
npm run start
```

Build/preview:

```bash
npm run build
npm run preview
```

## 8. Suggested Next Milestones

1. Add a dedicated frontend API layer (e.g., typed service modules using `ky`) mapped to `/api/ai` and `/api/user`.
2. Replace mock data in dashboard/community and generation screens with real TanStack Query hooks.
3. Add request validation and stricter error typing on backend responses.
4. Add integration tests for premium/free plan boundaries and creation persistence behavior.

---

If you want, I can next generate a second doc with a feature-by-feature API contract table (request body, response shape, auth/plan requirements) to speed up FE-BE integration.
