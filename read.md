# Practice Node - Auth API

A simple **Node.js + Express** REST API for user authentication.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Middleware:** CORS, express.json

---

## 📁 Project Structure

```
practice_node/
├── controller/
│   └── authController.js   # Business logic
├── routes/
│   └── authRoutes.js       # Route definitions
├── server.js               # Entry point
├── package.json
└── .gitignore
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Server
```bash
npm start
```

Server runs on: `http://localhost:5000`

---

## 📡 API Endpoints

### Register User
| Field  | Value |
|--------|-------|
| Method | `POST` |
| URL    | `http://localhost:5000/auth/register` |

**Request Body:**
```json
{
  "id": 1,
  "name": "shiv",
  "username": "shiv@123"
}
```

**Success Response (200):**
```json
{
  "message": "User registered successfully",
  "data": {
    "id": 1,
    "name": "shiv",
    "username": "shiv@123"
  }
}
```

**Already Registered (400):**
```json
{
  "message": "User already registered with id 1"
}
```

---

## 📝 Notes

- Data is stored **in-memory** (resets on server restart)
- No database connected yet