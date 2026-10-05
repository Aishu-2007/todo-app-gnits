# Todo App (React + Node + Express + MongoDB)

## Folder structure

```
todo-app/
├── client/                  # React (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── api.js           # all fetch calls
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── vite.config.js       # proxies /api to port 5001 in dev
├── server/                  # Node + Express
│   ├── controllers/
│   │   └── todoController.js
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todoRoutes.js
│   ├── .env.example
│   └── index.js
└── package.json             # root scripts
```

## API

| Method | Route            | What it does      |
| ------ | ---------------- | ----------------- |
| GET    | /api/todos       | Get all todos     |
| POST   | /api/todos       | Create a todo     |
| PUT    | /api/todos/:id   | Update a todo     |
| DELETE | /api/todos/:id   | Delete a todo     |

> ⚠️ **The controllers still need work.** Some functions in `server/controllers/todoController.js` are empty or incorrect. Finish and fix them so every route in the table above works as described, and make sure each one returns relevant responses with the appropriate status codes (e.g. `200`, `201`, `400`, `404`, `500`).

## Run locally

1. Copy `server/.env.example` to `server/.env` and put in your MongoDB Atlas URL.
2. Install everything:
   ```bash
   npm install
   npm install --prefix server
   npm install --prefix client
   ```
3. Start both frontend and backend:
   ```bash
   npm run dev
   ```
4. Open http://localhost:5173

> The API runs on port 5001 (set by `PORT` in `server/.env`). Port 5000 is avoided because macOS AirPlay Receiver uses it. If you change `PORT`, update the proxy target in `client/vite.config.js` too.

## Deploy on Render (one service)

- Build command: `npm run build`
- Start command: `npm start`
- Environment variable: `MONGO_URI` = your Atlas URL
- In Atlas → Network Access, allow `0.0.0.0/0`
