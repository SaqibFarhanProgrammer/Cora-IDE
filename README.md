# 🚀 Cora IDE (Koda Code Editor)

A modern **web-based code editor** built with **React + Vite**, designed for simplicity, flexibility, and performance.
Cora IDE provides developers with a clean interface, authentication, and a powerful editor experience using **Monaco Editor**.

---

## ✨ Features

* 📝 **Code Editor** powered by Monaco Editor with custom **zincDark** theme & zoom support
* 🔑 **User Authentication** using Firebase (Email/Password + Google Sign-In)
* 🧑‍💻 **User Profiles** with name, description & profile picture
* 🎨 **Modern UI Components** using shadcn/ui & Tailwind CSS
* 🌐 **Routing** with React Router DOM (Home, Profile, Settings pages)
* ⚡ **State Management** with React Context API
* 📂 **Organized Project Structure** for scalability

---

## 🛠️ Tech Stack

* **Frontend:** React + Vite
* **Editor:** Monaco Editor (`@monaco-editor/react`)
* **Authentication:** Firebase
* **Styling:** Tailwind CSS + shadcn/ui
* **Routing:** React Router DOM
* **State Management:** React Context
* **Linting:** ESLint

---

## 📂 Project Structure

```
src/
 ├── Auth/               # Login & Signup components
 ├── Mycomponents/       # Code editor (Monaco + custom theme)
 ├── Pages/              # Main, Profile & Settings pages
 ├── components/ui/      # Reusable UI components (shadcn/ui)
 ├── context/            # Global state management with React Context
 ├── config/             # Firebase configuration
 └── App.jsx             # Application routes
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/cora-ide.git
cd cora-ide
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Firebase

* Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
* Enable **Authentication** (Email/Password & Google Sign-In)
* Copy your Firebase config into `src/config/Firebase.js`

### 4️⃣ Run Development Server

```bash
npm run dev
```

Now visit 👉 `http://localhost:5173`

---

## 📸 Screenshots / Demo

(Add screenshots of editor, login, profile page here)

---

## 📌 Roadmap / Next Steps

* [ ] Save & retrieve code files in Firebase/Firestore
* [ ] Multi-language syntax highlighting support
* [ ] Real-time collaboration (multi-user editing)
* [ ] Better error handling & notifications
* [ ] Project name consistency (`Cora IDE` vs `Koda Code Editor`)

---

## 🤝 Contributing

Contributions are always welcome!

1. Fork the repo
2. Create a new branch (`feature/xyz`)
3. Commit your changes
4. Push to your branch
5. Create a Pull Request 🚀

---

## 📜 License

This project is licensed under the **MIT License**.
You’re free to use, modify, and distribute with attribution.

---

### 💡 Author

Developed by **Saqib Farhan** ✨
