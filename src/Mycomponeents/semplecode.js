// CORA IDE Landing Page - HTML + CSS Export Module

const csscode = `/* Reset and Base Styles - Shadcn-Inspired Dark Theme */
:root {
  --background: #09090b;
  --foreground: #fafafa;
  --card: #18181b;
  --card-foreground: #fafafa;
  --primary: #fafafa;
  --primary-foreground: #09090b;
  --muted: #27272a;
  --muted-foreground: #a1a1aa;
  --border: #27272a;
  --radius: 0.5rem;
}

body::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  min-height: 100vh;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  border-radius: var(--radius);
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  border: 1px solid transparent;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--primary-foreground);
}

.btn-primary:hover {
  background-color: #e5e5e5;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  border-bottom: 1px solid var(--border);
  background: var(--background);
  position: sticky;
  top: 0;
  z-index: 10;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--foreground);
}

.navbar nav ul {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar nav ul li a {
  color: var(--muted-foreground);
  text-decoration: none;
  font-size: 0.95rem;
}

.navbar nav ul li a:hover {
  color: var(--foreground);
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 8rem 2rem;
  background: var(--background);
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw + 1rem, 4rem);
  max-width: 800px;
  margin: 0 auto;
  font-weight: 800;
  line-height: 1.1;
}

.hero p {
  margin: 1.5rem 0 2rem;
  font-size: clamp(1rem, 2vw + 0.5rem, 1.25rem);
  color: var(--muted-foreground);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Features Section */
.features {
  padding: 6rem 3rem;
  text-align: center;
  background: var(--card);
  border-top: 1px solid var(--border);
}

.features h2, .about h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: var(--foreground);
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Card Style */
.card {
  background: var(--card);
  color: var(--card-foreground);
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  text-align: left;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card p {
  color: var(--muted-foreground);
}

/* About Section */
.about {
  padding: 6rem 3rem;
  background: var(--background);
  text-align: center;
  border-top: 1px solid var(--border);
}

.about p {
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  color: var(--muted-foreground);
}

/* Footer */
footer {
  text-align: center;
  padding: 1.5rem;
  background: var(--card);
  border-top: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: 0.85rem;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem 1.5rem;
  }

  .navbar nav {
    display: none; 
  }

  .navbar .logo {
    width: 100%;
    text-align: center;
  }

  .hero {
    padding: 6rem 1.5rem;
  }

  .features, .about {
    padding: 4rem 1.5rem;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  .card {
    text-align: center;
  }
}`

const htmlcode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CORA IDE - Professional Landing</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="navbar">
    <div class="logo">CORA IDE</div>
    <nav>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#get-started" class="btn btn-primary">Get Started</a></li>
      </ul>
    </nav>
  </header>

  <section class="hero">
    <h1>A Modern, Powerful Code Editor Built for Developers.</h1>
    <p>CORA IDE is a lightweight, web-based development environment that helps you code, debug, and deploy seamlessly.</p>
    <button class="btn btn-primary" onclick="showAlert()">Start Coding Now</button>
  </section>

  <section id="features" class="features">
    <h2>Key Features</h2>
    <div class="cards">
      <div class="card">
        <h3>⚡ Ultra-Fast</h3>
        <p>Optimized for speed and efficiency, delivering a seamless coding experience on any device.</p>
      </div>
      <div class="card">
        <h3>🎨 Customizable</h3>
        <p>Personalize themes, extensions, and workspace layouts to match your unique workflow.</p>
      </div>
      <div class="card">
        <h3>🌍 Web-based</h3>
        <p>Access your code from anywhere, anytime, with our secure, cross-platform online editor.</p>
      </div>
    </div>
  </section>

  <section id="about" class="about">
    <h2>About CORA IDE</h2>
    <p>
      We designed CORA IDE to be the perfect blend of simplicity and power. By focusing on essential developer needs—speed, flexibility, and a beautiful interface—we provide a tool that gets out of your way so you can focus on building.
    </p>
  </section>

  <footer>
    <p>© 2025 CORA IDE. All rights reserved. | Terms of Service</p>
  </footer>

  <script>
    function showAlert() {
      alert("Welcome to CORA IDE! Get started by signing up.");
    }
  </script>
</body>
</html>`

export { htmlcode, csscode }
  