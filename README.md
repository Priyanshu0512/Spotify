# Spotify

A full-stack music streaming application that replicates Spotify's core functionality with real-time features, built with modern web technologies.

<p align="center">
  <img src="https://img.shields.io/badge/Spotify-Clone-1DB954?style=for-the-badge&logo=spotify&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" />
</p>

## Demo

![Uploading Screenshot 2025-07-06 at 8.38.13 AM.png…]()


## ✨ Features

- 🎧 High-quality music streaming with real-time controls
- 🧑‍🤝‍🧑 Live chat & friends activity feed
- 🎛️ Admin panel for content and user management
- 🔐 Secure OAuth login and session handling
- 📡 Real-time sync using Socket.io

## 🛠️ Tech Stack

### Frontend

- React 18, TypeScript, Vite, Tailwind, Zustand, shadcn/ui, Lucide

### Backend

- Node.js, Express.js, MongoDB, Mongoose, Socket.io, Cloudinary

## 📋 Prerequisites

- Node.js v18+
- npm/yarn
- MongoDB (local or Atlas)
- Cloudinary Account

## 🚀 Installation & Setup

### 1. Clone the Repo

```bash
git clone <repository-url>
cd realtime-spotify-clone
```

### 2. Install Dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 3. Configure Environment

- Setup `.env` files in both `backend` and `frontend` as per sample files

### 4. Start MongoDB & Cloudinary Setup

- Setup your MongoDB connection and Cloudinary API keys

## 🔐 Environment Variables

Correctly setting up environment variables is essential for running the application securely and successfully.

### Backend `.env` Configuration

Create a `.env` file inside the `backend/` directory and include the following:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/spotify-clone
# or for MongoDB Atlas
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/spotify


# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# App Server
PORT=5000
NODE_ENV=development

# CORS
CLIENT_URL=http://localhost:3000
```

Be sure to never commit these `.env` files to version control.

## 🏃‍♂️ Running the Application

### Development

```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

## 📁 Project Structure (Simplified)

```
realtime-spotify-clone/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── models/
│   │   ├── routes/
│   │   └── index.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── stores/
│   │   └── main.tsx
```

## 🔧 API Endpoints

### Auth

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/auth/callback`

### Music

- `GET /api/songs`
- `GET /api/albums`

### Admin

- `POST /api/admin/songs`
- `GET /api/admin/stats`

### User

- `GET /api/users/me`
- `GET /api/users/messages`

---
