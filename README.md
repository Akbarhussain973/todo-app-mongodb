# 📝 Todo App

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?logo=express&logoColor=white)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000)
![EJS](https://img.shields.io/badge/EJS-Template-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

A full-stack **Todo Management Application** built using **Node.js, Express.js, MongoDB Atlas, Mongoose, and EJS** following the **MVC (Model–View–Controller)** architecture.

The application allows users to efficiently manage daily tasks by creating, updating, completing, viewing, and deleting todos while storing data securely in **MongoDB Atlas**.

---

# 🌐 Live Demo

🚀 **Live Application**

https://todo-app-yzk2.onrender.com

> **Note**
>
> This application is hosted on **Render's Free Tier**.
>
> The first request after a period of inactivity may take **30–60 seconds** while the server wakes up.

---

# 📸 Screenshots

## 🏠 Home Page

![Home](screenshots/home.png)

---

## 👀 View Todo

![View](screenshots/view.png)

---

## ✏️ Edit Todo

![Edit](screenshots/edit.png)

---

# ✨ Features

- ➕ Create Todo
- 👀 View Todo Details
- ✏️ Edit Existing Todo
- 🗑 Delete Todo
- ✅ Mark Todo as Completed
- ↩️ Mark Completed Todo as Pending
- 📊 Dashboard Statistics
  - Total Todos
  - Completed Todos
  - Pending Todos
- ☁️ MongoDB Atlas Cloud Database
- 🏗 MVC Architecture
- 🔄 Mongoose Middleware
- 🪄 Mongoose Virtual Properties
- ⚙️ Mongoose Instance Methods
- 📚 Mongoose Static Methods
- 🚀 Live Deployment on Render

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Frontend** | EJS, HTML5, CSS3 |
| **Deployment** | Render |
| **Version Control** | Git, GitHub |
| **Utilities** | Dotenv, Method Override |

---

# 📂 Project Structure

```text
todo-app-mongodb/
│
├── controllers/
│   └── todoController.js
│
├── models/
│   └── Todo.js
│
├── public/
│   ├── css/
│   ├── images/
│   └── js/
│
├── routes/
│   └── todo.js
│
├── screenshots/
│   ├── home.png
│   ├── edit.png
│   └── view.png
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   ├── about.ejs
│   ├── edit.ejs
│   ├── index.ejs
│   └── todo.ejs
│
├── .env.example
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Installation

## 1. Clone the Repository

```bash
git clone https://github.com/Akbarhussain973/todo-app-mongodb.git
```

---

## 2. Navigate into the Project

```bash
cd todo-app-mongodb
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Create a `.env` File

Create a file named **`.env`** in the project's root directory.

Add the following environment variable:

```env
MONGODB_URI=your_mongodb_connection_string
```

> **Note:** Never commit your `.env` file to GitHub. It contains sensitive credentials and should remain private.

---

## 5. Start the Application

```bash
node app.js
```

Open your browser and visit:

```text
http://localhost:3000
```

---

# 📚 What I Learned

Developing this project helped me gain practical experience with:

- MVC (Model–View–Controller) Architecture
- Express Routing
- CRUD Operations
- MongoDB Atlas Integration
- Mongoose Models & Schema Design
- Mongoose Instance Methods
- Mongoose Static Methods
- Mongoose Virtual Properties
- Mongoose Middleware (Pre & Post Hooks)
- Environment Variables using Dotenv
- Git & GitHub Workflow
- Cloud Database Integration
- Deploying Node.js Applications on Render
- Debugging Real-world Deployment & Database Connectivity Issues

---

# 🔮 Future Improvements

- 🔐 User Authentication
- 👤 Multiple Users
- 🏷 Categories & Tags
- 📅 Due Dates
- 🔍 Search & Filtering
- 🌙 Dark Mode
- 📱 Fully Responsive UI
- 🌐 REST API
- ⚛ React Frontend
- 🤖 AI-powered Task Suggestions

---

# 💻 Local Development

```bash
npm install
node app.js
```

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Akbar Hussain**

Software Engineering Student

FAST National University of Computer and Emerging Sciences (FAST-NUCES)

**GitHub:**  
https://github.com/Akbarhussain973

**Live Demo:**  
https://todo-app-yzk2.onrender.com

---

⭐ If you found this project helpful, consider giving it a **Star ⭐** on GitHub!
