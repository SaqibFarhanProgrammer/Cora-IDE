import React from "react";

export default function LearnJSGuide() {
  const Chapter = ({ title, children }) => (
    <section className="prose prose-invert max-w-none mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mt-6 mb-4">{title}</h2>
      <div className="text-base sm:text-lg leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );

  const CodeBlock = ({ children }) => (
    <pre className="bg-zinc-900/90 p-4 rounded mt-3 overflow-x-auto text-xs sm:text-sm font-mono border border-zinc-800">
      <code className="whitespace-pre-wrap text-zinc-300">{children}</code>
    </pre>
  );

  return (
    <div className="min-h-screen bg-black text-white p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
          Complete JavaScript Guide
        </h1>

        {/* Chapter 1 */}
        <Chapter title="Introduction & Setup">
          <p>
            JavaScript is the <strong>programming language of the web</strong>.
            It allows us to make static HTML & CSS pages interactive. Without
            JS, websites would be like digital posters — only text and images.
            With JS, we can add logic, animations, games, and apps.
          </p>
          <p>
            Every browser (Chrome, Firefox, Safari, Edge) has a built-in{" "}
            <strong>JavaScript Engine</strong> (like Google’s V8). That’s why JS
            runs directly in the browser without installation.
          </p>
          <CodeBlock>{`<!doctype html>
<html>
  <head>
    <title>JS Example</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>
    <script>
      // This is JavaScript code inside HTML
      console.log("Hello World");
    </script>
  </body>
</html>`}</CodeBlock>
        </Chapter>

        {/* Chapter 2 */}
        <Chapter title="Variables & Data Types">
          <p>
            Variables are <strong>containers for storing values</strong>. In JS,
            we use <code>var</code>, <code>let</code>, and <code>const</code>.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <code>var</code> → Old, function-scoped (avoid using now)
            </li>
            <li>
              <code>let</code> → Block-scoped, can be updated
            </li>
            <li>
              <code>const</code> → Block-scoped, cannot be re-assigned
            </li>
          </ul>
          <p>
            Data Types in JS include: string, number, boolean, null, undefined,
            object, array, function.
          </p>
          <CodeBlock>{`let name = "Shahzaib"; // string
const age = 21;       // number
var isActive = true;  // boolean

let skills = ["JS", "HTML", "CSS"]; // array
let user = { name: "Shahzaib", age: 21 }; // object

console.log(name, age, isActive);
console.log(skills[0]); // JS
console.log(user.name); // Shahzaib`}</CodeBlock>
        </Chapter>

        {/* Chapter 3 */}
        <Chapter title="Functions">
          <p>
            A <strong>function</strong> is a reusable block of code. It can take
            input (parameters) and return an output. Functions help us avoid
            repeating code.
          </p>
          <CodeBlock>{`// Normal Function
function greet(name) {
  return "Hello, " + name;
}

// Arrow Function (short form)
const greetArrow = (name) => "Hi, " + name;

console.log(greet("Shahzaib")); // Hello, Shahzaib
console.log(greetArrow("Maaz")); // Hi, Maaz`}</CodeBlock>
        </Chapter>

        {/* Chapter 4 */}
        <Chapter title="Scope & Closures">
          <p>
            <strong>Scope</strong> defines where a variable can be accessed.
            <ul className="list-disc pl-6">
              <li>
                <strong>Global Scope</strong> → Available everywhere
              </li>
              <li>
                <strong>Function Scope</strong> → Available inside a function
              </li>
              <li>
                <strong>Block Scope</strong> → Available only inside {`{}`}, if
                declared with <code>let</code> or <code>const</code>
              </li>
            </ul>
          </p>
          <p>
            A <strong>Closure</strong> happens when a function remembers
            variables from its outer function, even after that function has
            finished. Closures are used for data privacy and state management.
          </p>
          <CodeBlock>{`function outer() {
  let count = 0; // private variable
  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
// count is hidden, only accessible via inner()`}</CodeBlock>
        </Chapter>

        {/* Chapter 5 */}
        <Chapter title="Objects & This Keyword">
          <p>
            Objects are collections of <strong>key-value pairs</strong>. They
            can also hold functions (called methods).
          </p>
          <p>
            The <code>this</code> keyword refers to the context. Inside an
            object method, <code>this</code> means the object itself.
          </p>
          <CodeBlock>{`const user = {
  name: "Shahzaib",
  greet: function () {
    console.log("Hi, " + this.name);
  },
};

user.greet(); // Hi, Shahzaib`}</CodeBlock>
        </Chapter>

        {/* Chapter 6 */}
        <Chapter title="Classes & OOP">
          <p>
            JavaScript is prototype-based, but ES6 introduced{" "}
            <strong>classes</strong> to make OOP easier. A class is a blueprint
            for objects.
          </p>
          <CodeBlock>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + " barks.");
  }
}

const dog = new Dog("Rex");
dog.speak(); // Rex barks.`}</CodeBlock>
        </Chapter>

        {/* Chapter 7 */}
        <Chapter title="Asynchronous JavaScript">
          <p>
            JavaScript is <strong>single-threaded</strong>. To avoid blocking
            the main thread, it uses asynchronous operations like callbacks,
            promises, and async/await.
          </p>
          <CodeBlock>{`console.log("Start");

setTimeout(() => {
  console.log("Async Task Done");
}, 1000);

console.log("End");
// Output: Start → End → Async Task Done`}</CodeBlock>
          <p>
            Modern way: <strong>Promises</strong> and{" "}
            <strong>Async/Await</strong> make async code easier.
          </p>
          <CodeBlock>{`// Using Promises
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res => res.json())
  .then(data => console.log(data));

// Using Async/Await
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data);
}
getData();`}</CodeBlock>
        </Chapter>

        {/* Chapter 8 */}
        <Chapter title="ES6+ Modern Features">
          <p>
            Modern JS introduced many new features: template literals,
            destructuring, spread/rest operators, default parameters, and
            modules.
          </p>
          <CodeBlock>{`const person = { name: "Shahzaib", age: 21 };
const { name, age } = person;

console.log(\`My name is \${name}, I am \${age}\`); // My name is Shahzaib, I am 21`}</CodeBlock>
        </Chapter>
        {/* ================== HTML Section ================== */}
        <Chapter title="HTML Basics">
          <p>
            HTML (HyperText Markup Language) webpage ki structure banata hai. Ye{" "}
            <strong>tags</strong> use karta hai jaise <code>&lt;h1&gt;</code>,{" "}
            <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code>.
          </p>
          <CodeBlock>{`<!DOCTYPE html>
<html>
  <head><title>My Page</title></head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
    <a href="https://google.com">Visit Google</a>
  </body>
</html>`}</CodeBlock>
        </Chapter>

        <Chapter title="HTML Forms & Inputs">
          <p>
            Forms user input lene ke liye use hote hain. Important tags:{" "}
            <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>,{" "}
            <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>.
          </p>
          <CodeBlock>{`<form>
  <label>Name:</label>
  <input type="text" placeholder="Enter name" />

  <label>Email:</label>
  <input type="email" placeholder="Enter email" />

  <label>Message:</label>
  <textarea></textarea>

  <button type="submit">Submit</button>
</form>`}</CodeBlock>
        </Chapter>

        <Chapter title="HTML Tables & Media">
          <p>
            <strong>Table</strong> data ko organize karne ke liye aur
            <strong>media tags</strong> images/videos embed karne ke liye use
            hote hain.
          </p>
          <CodeBlock>{`<table border="1">
  <tr><th>Name</th><th>Age</th></tr>
  <tr><td>Ali</td><td>20</td></tr>
</table>

<img src="photo.jpg" alt="Sample" width="200"/>
<video controls width="300">
  <source src="video.mp4" type="video/mp4" />
</video>`}</CodeBlock>
        </Chapter>

        {/* ================== CSS Section ================== */}
        <Chapter title="CSS Basics">
          <p>
            CSS styling ke liye hota hai. 3 types hote hain: Inline, Internal,
            External.
          </p>
          <CodeBlock>{`body {
  background-color: #222;
  color: white;
  font-family: Arial;
}
h1 { color: yellow; }
p { font-size: 18px; }`}</CodeBlock>
        </Chapter>

        <Chapter title="CSS Box Model & Selectors">
          <p>
            Har element ek box hota hai:{" "}
            <strong>margin, border, padding, content</strong>.
          </p>
          <CodeBlock>{`div {
  border: 2px solid red;
  margin: 10px;
  padding: 15px;
}`}</CodeBlock>
        </Chapter>

        <Chapter title="Flexbox & Grid Layout">
          <p>Modern layout ke liye Flexbox aur Grid use hote hain.</p>
          <CodeBlock>{`/* Flexbox */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}`}</CodeBlock>
        </Chapter>

        <Chapter title="Responsive Design">
          <p>
            Responsive design banane ke liye <strong>media queries</strong> use
            karte hain.
          </p>
          <CodeBlock>{`@media (max-width: 600px) {
  body {
    background: lightblue;
  }
}`}</CodeBlock>
        </Chapter>

        {/* ================== JavaScript DOM Section ================== */}
        <Chapter title="JavaScript DOM Manipulation">
          <p>
            DOM (Document Object Model) page ko tree structure ke roop me
            dikhata hai. JS se hum elements ko{" "}
            <strong>select, modify, add, remove</strong> kar sakte hain.
          </p>
          <CodeBlock>{`<h1 id="title">Hello</h1>
<button onclick="changeText()">Click</button>

<script>
  function changeText() {
    const h1 = document.getElementById("title");
    h1.textContent = "Text Changed!";
    h1.style.color = "red";
  }
</script>`}</CodeBlock>
        </Chapter>

        <Chapter title="DOM Events Handling">
          <p>
            Events user actions hote hain jaise click, input, keypress. JS me
            hum <code>addEventListener()</code> use karte hain.
          </p>
          <CodeBlock>{`<input id="name" placeholder="Type something..." />
<p id="output"></p>

<script>
  const input = document.getElementById("name");
  const output = document.getElementById("output");

  input.addEventListener("input", function() {
    output.textContent = "You typed: " + input.value;
  });
</script>`}</CodeBlock>
        </Chapter>

        <Chapter title="Form Validation Example">
          <p>JS se hum form submit hone se pehle validate kar sakte hain.</p>
          <CodeBlock>{`<form onsubmit="return validateForm()">
  <input id="email" type="email" placeholder="Enter email" />
  <button type="submit">Submit</button>
</form>

<script>
  function validateForm() {
    const email = document.getElementById("email").value;
    if(email === "") {
      alert("Email is required!");
      return false;
    }
    return true;
  }
</script>`}</CodeBlock>
        </Chapter>

        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6 mt-10">
          © {new Date().getFullYear()} Complete JavaScript Guide – Dark Theme
        </footer>
      </div>
    </div>
  );
}
