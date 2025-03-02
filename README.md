# MERN Login System

## 🌐 Live Demo
🔗 [MERN Login](https://mern-login-two.vercel.app/)

## 📌 Project Overview
This is a **Full-Stack MERN (MongoDB, Express, React, Node.js) Authentication System** that includes user registration, login, and session management.

### 🔑 Features
- User Registration & Login
- Secure Password Hashing (bcrypt)
- JSON Web Token (JWT) Authentication
- MongoDB Database for User Data Storage
- Fully Responsive UI (React.js & Tailwind CSS)
- Hosted on **Vercel** (Frontend) & **Backend Deployment**

---

## 🖥️ Screenshots
### **Signup Page**
![Signup Page](https://github.com/devraj1608/MERN-LOGIN/blob/4c625e60031b2900014fab368aaf7ca417f99aa5/Screenshot%202025-03-02%20210007.png)
### **Login Page**
![Login Page](https://github.com/devraj1608/MERN-LOGIN/blob/36f5fe426c4987822c7ffd9d78acdbabf98b9575/Screenshot%202025-03-02%20205951.png)

### **Home Page (After Login)**
![Home Page](https://github.com/devraj1608/MERN-LOGIN/blob/b37072a4749ed64e17c3beaf9a995c74d9dd70f8/Screenshot%202025-03-02%20210123.png)

---

## 🏗️ Tech Stack
### **Frontend:**
- React.js
- Tailwind CSS
- Axios (API calls)

### **Backend:**
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- JWT Authentication
- bcrypt for password hashing

---

## 🚀 Installation & Setup
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/mern-login.git
cd mern-login
```

### **2️⃣ Install Dependencies**
#### Install Backend Dependencies:
```sh
cd backend
npm install
```
#### Install Frontend Dependencies:
```sh
cd frontend
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the **backend** directory and add:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### **4️⃣ Run the Application**
#### Start the Backend Server:
```sh
cd backend
npm start
```
#### Start the Frontend React App:
```sh
cd frontend
npm start
```

Now, the frontend should run on **`http://localhost:3000`** and the backend on **`http://localhost:5000`**.

---

## 🌍 Deployment
### **Frontend Deployment (Vercel)**
1. Install Vercel CLI:
   ```sh
   npm i -g vercel
   ```
2. Deploy React App:
   ```sh
   vercel
   ```

### **Backend Deployment (Railway/Render/Heroku)**
1. Push your backend code to GitHub.
2. Deploy the backend on **Render/Heroku**.
3. Update the frontend `.env` file to point to the deployed backend.

---

## 🛠️ API Endpoints
### **User Authentication**
| Method | Endpoint      | Description           |
|--------|--------------|-----------------------|
| POST   | /api/register | Register a new user  |
| POST   | /api/login   | Authenticate user     |




🚀 **Happy Coding!**

