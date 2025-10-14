# 🧠 CORA IDE: Your Browser-Based Development Environment

**CORA IDE** is a modern, fast, and feature-rich web-based **Integrated Development Environment (IDE)**. It gives developers a powerful platform to write, manage, and test code snippets and small projects directly in their browser.

By combining a sleek editor with file management, real-time preview, and secure user accounts, CORA IDE provides a complete and intuitive coding experience.

---

## 🚀 Key Features

### 💻 Core IDE Functionality

* **Powerful Code Editor:** Built on the **Monaco Editor** (the same technology powering VS Code) for syntax highlighting, advanced autocompletion, and IntelliSense.
* **Multi-Language Support:** Supports a variety of programming languages (as configured in `src/lenguagesname.js`).
* **Real-time Preview:** Includes a built-in web preview (`<Web.jsx>`) for instant visualization of code output.
* **Code Management:** Easily create, save, and manage your code files (`<Newfile.jsx>`, `<CodefileCard.jsx>`).
* **Integrated Terminal:** A dedicated terminal component (`<Terminal.jsx>`) for running code (assumed functionality).

### 🌐 Technology Stack

* **Frontend:** Built with **React** and **Vite** for a high-performance, snappy user interface.
* **Styling & UI:** Uses **Tailwind CSS**, **Radix UI**, and **Shadcn UI** components for a clean and professional dark-mode design.
* **State Management:** Global application state, including user and file status, is handled efficiently using the **React Context API** (`src/context/context.jsx`).
* **Authentication & Data:** Secure user login, signup, and data persistence are managed via **Firebase** (`src/config/Firebase.js`).

### 🔒 User & Navigation

* **Secure Authentication:** Users can register and log in via email/password or **Google** integration (`src/Auth/LoginScreen.jsx`).
* **User Profiles:** Dedicated pages for user profile management (`src/Pages/profile/Profile.jsx`) and code file display.
* **Intuitive Navigation:** Features a consistent **Sidebar** (`<SideNavigate.jsx>`) and **Topbar** (`<Topbar.jsx>`) for easy access to the main IDE, documentation (`src/Pages/Learn/Learn.jsx`), and application settings (`src/Pages/Settings/Settings.jsx`).

---

## 🛠️ Getting Started

### Prerequisites

Before running this project, you'll need:

* **Node.js** (and npm or yarn)
* **Firebase Project:** A configured Firebase project for authentication and database services. You will need to add your credentials to `src/config/Firebase.js`.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [Your-Repo-URL]
    cd [Your-Project-Folder]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Project

Run the development server:

```bash
npm run dev
# or
yarn dev