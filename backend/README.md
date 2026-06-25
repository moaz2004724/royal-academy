# Royal Academy Backend

This is the backend for the Royal Academy Management System, built with Express, Prisma, and PostgreSQL.

## Deployment Steps

### 1. Neon PostgreSQL
1. Create a project at [Neon.tech](https://neon.tech).
2. Get your `DATABASE_URL` connection string.

### 2. Local Setup
1. Create a `.env` file in this directory:
   ```env
   DATABASE_URL="your_neon_connection_string"
   PORT=3001
   ```
2. Run `npm install`.
3. Run `npx prisma db push` to create the tables in Neon.
4. Run `npm start`.

### 3. Railway Deployment
1. Go to [Railway.app](https://railway.app).
2. New Project -> Deploy from GitHub repo.
3. Add Environment Variables:
   - `DATABASE_URL`: Your Neon connection string.
   - `PORT`: 3001 (or leave blank for Railway default).
4. Railway will automatically run `npm install` and `npm start`.

## API Endpoints
- `POST /api/login`: User authentication.
- `GET /api/overview`: Dashboard statistics.
- `GET /api/groups`: List of teams.
- `GET /api/coaches`: List of coaches.
- `GET /api/players`: List of players.
- `POST /api/attendance`: Record attendance.
