# CS-312 MiniProject-1: Blog Web Application

## 📌 Project Overview

This is a Blog Web Application built using Node.js, Express.js, and EJS as part of the CS-312 MiniProject-1 assignment. The application allows users to:

- Create blog posts
- View blog posts
- Edit blog posts
- Delete blog posts
- Filter posts by category (Bonus Feature)

> ⚠ **Note:** Data is not persistent. Posts are stored in-memory and will reset when the server restarts.

---

## 🛠 Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Bootstrap 5
- HTML / CSS

---

## 🚀 Features

- Create new blog posts (author, title, content, category, date)
- View all posts on homepage
- Edit existing posts
- Delete posts
- Filter posts by category: Tech, Lifestyle, Education (Bonus)
- Responsive UI using Bootstrap

---

## 📂 Project Structure

```

CS-312-MiniProject-1/
│
├── app.js               # Main server file
├── package.json         # Project dependencies
│
├── views/               # EJS templates
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── home.ejs
│   ├── new\.ejs
│   └── edit.ejs
│
├── public/
│   └── css/
│       └── styles.css   # Custom styling
│
└── README.md            # Project documentation

````

---

## 💻 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/avnishsinha/CS-312-MiniProject-1
````

### 2️⃣ Navigate into the Project Folder

```bash
cd CS-312-MiniProject-1
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Start the Server

```bash
node app.js
```

### 5️⃣ Open Browser

```
http://localhost:3000
```
---

## ✅ Submission Info

**Submitted by:** Avnish Sinha
**Course:** CS-312



