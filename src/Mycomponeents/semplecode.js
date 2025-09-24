const csscode = `/* Reset */
      body::-webkit-scrollbar {
    display: none; /* Chrome, Safari */
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #0a0b0d;
  color: #f4f4f5;
}

.navbar .logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #22d3ee;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1.5rem;
}

.navbar ul li a {
  color: #f4f4f5;
  text-decoration: none;
}

.navbar ul li .btn {
  background: #22d3ee;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  color: #0a0b0d;
  font-weight: bold;
}

/* Hero */
.hero {
  text-align: center;
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #0a0b0d, #1e293b);
  color: #f4f4f5;
}

.hero h1 {
  font-size: 2.5rem;
}

.hero p {
  margin: 1rem 0;
  font-size: 1.2rem;
  color: #cbd5e1;
}

.hero button {
  background: #22d3ee;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 6px;
  font-weight: bold;
  color: #0a0b0d;
}

/* Features */
.features {
  padding: 3rem 2rem;
  text-align: center;
  background: #111827;
  color: #f4f4f5;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  background: #1f2937;
  color: #f4f4f5;
  padding: 2rem;
  border-radius: 10px;
  width: 250px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);
}

/* About */
.about {
  padding: 3rem 2rem;
  background: #0a0b0d;
  text-align: center;
  color: #e5e7eb;
}

.about p {
  max-width: 600px;
  margin: auto;
  line-height: 1.6;
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  background: #000;
  color: #f4f4f5;
  font-size: 0.9rem;
}`


const htmlcode =`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CORA IDE - Landing</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header Section -->
  <header class="navbar">
    <div class="logo">CORA IDE</div>
    <nav>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#get-started" class="btn">Get Started</a></li>
      </ul>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <h1>Welcome to CORA IDE</h1>
    <p>A modern, lightweight, and powerful web-based code editor.</p>
    <button onclick="showAlert()">Learn More</button>
  </section>

  <!-- Features Section -->
  <section id="features" class="features">
    <h2>Key Features</h2>
    <div class="cards">
      <div class="card">
        <h3>⚡ Fast</h3>
        <p>Optimized performance for seamless coding experience.</p>
      </div>
      <div class="card">
        <h3>🎨 Customizable</h3>
        <p>Personalize themes, fonts, and layouts.</p>
      </div>
      <div class="card">
        <h3>🌍 Web-based</h3>
        <p>Access your code anywhere, anytime via the browser.</p>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="about">
    <h2>About CORA IDE</h2>
    <p>
      CORA IDE is designed to empower developers with simplicity, flexibility, 
      and performance. Built for the modern web, it helps you code, debug, 
      and deploy seamlessly.
    </p>
  </section>

  <!-- Footer -->
  <footer>
    <p>© 2025 CORA IDE. All rights reserved.</p>
  </footer>
</body>
</html>`

export {htmlcode,csscode}