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
          Complete JavaScript 
        </h1>

        {/* ==================================================================================================================================== */}
        {/* NEW/UPDATED CHAPTER 1: Engine & Execution Context */}
        {/* ==================================================================================================================================== */}
        <Chapter title="1. Engine & Execution Context (The 'How')">
          <p>
            JavaScript code ko run karne ke liye ek **Engine** ki zaroorat hoti hai. Har browser mein (aur Node.js mein) V8 Engine (Google ka) sabse aage hai.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>V8 Engine:</strong> Yeh aapke JS code ko tezi se **Machine Code** mein badalta hai. Yeh ab sirf *interpret* nahi karta, balki **JIT (Just-In-Time) Compilation** istemal karta hai taake performance badh sake.
            </li>
            <li>
              <strong>Execution Context:</strong> Jab bhi code run hota hai, ek **Context** banta hai. Ismein teen zaroori cheezein hoti hain:
              <ul className="list-circle pl-6 mt-2">
                <li>**Variable Environment:** Variables (`let`, `const`, `var`) yahan store hote hain.</li>
                <li>**Scope Chain:** Yeh tay karta hai ke code bahar ke variables ko kahan aur kaise dhoondhega.</li>
                <li>**`this`:** Yeh batata hai ke current context kis object ko point kar raha hai.</li>
              </ul>
            </li>
          </ul>
        </Chapter>

        {/* Original Chapter 1: Introduction & Setup */}
        <Chapter title="2. Introduction & Setup">
          <p>
            JavaScript is the <strong>programming language of the web</strong>.
            It allows us to make static HTML & CSS pages interactive. Without
            JS, websites would be like digital posters — only text and images.
            With JS, we can add logic, animations, games, and apps.
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

        {/* Original Chapter 2: Variables & Data Types */}
        <Chapter title="3. Variables & Data Types">
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
          <CodeBlock>{`let name = "Shahzaib"; // string
const age = 21;       // number
var isActive = true;  // boolean

let skills = ["JS", "HTML", "CSS"]; // array
let user = { name: "Shahzaib", age: 21 }; // object`}</CodeBlock>
        </Chapter>

        {/* Original Chapter 3: Functions */}
        <Chapter title="4. Functions">
          <p>
            A <strong>function</strong> is a reusable block of code. It can take
            input (parameters) and return an output. Functions help us avoid
            repeating code.
          </p>
          <CodeBlock>{`// Normal Function
function greet(name) {
  return "Hello, " + name;
}

// Arrow Function (short form - 'this' ka alag behaviour)
const greetArrow = (name) => "Hi, " + name;

console.log(greet("Shahzaib")); // Hello, Shahzaib
console.log(greetArrow("Maaz")); // Hi, Maaz`}</CodeBlock>
        </Chapter>

        {/* UPDATED CHAPTER 4: Scope & Closures (Hoisting ki detail) */}
        <Chapter title="5. Scope, Hoisting & Closures (Deep Dive)">
          <p>
            <strong>Scope</strong> woh daira hai jahan ek variable access ho sakta hai. `let` aur `const` ka **Block Scope** (curly braces `{}`) modern JS mein standard hai.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Hoisting:</strong> JS Engine code execute karne se pehle `var` aur function declarations ko unke scope ke **top** par move kar deta hai. `let` aur `const` bhi hoist hote hain, lekin unhe initialize karne se pehle access karne par error aata hai (**Temporal Dead Zone**).
            </li>
            <li>
              <strong>Closures:</strong> Ek inner function ka apne outer function ke variables ko **yaad** rakhna, bhale hi outer function execute ho chuka ho. Yeh **Data Privacy** aur **State Management** ke liye powerful concept hai.
            </li>
          </ul>
          <CodeBlock>{`// Closure Example
function outer() {
  let count = 0; // private variable
  
  // 'inner' function 'count' ko apne closure mein rakhta hai
  return function inner() {
    count++;
    return count;
  }; 
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2 
// 'count' sirf 'counter' ke through change ho sakta hai, direct nahi.

// Hoisting Example
console.log(hoistedVar); // undefined (hoisted, value nahi)
var hoistedVar = "I am hoisted";`}</CodeBlock>
        </Chapter>

        {/* Original Chapter 5: Objects & This Keyword */}
        <Chapter title="6. Objects & 'This' Keyword">
          <p>
            Objects **key-value pairs** (Properties) aur functions (Methods) ka collection hote hain.
          </p>
          <p>
            The <code>this</code> keyword ka behavior **context** par depend karta hai:
            <ul className="list-disc pl-6">
              <li>**Object Method** mein, `this` us object ko refer karta hai.</li>
              <li>**Normal Function** mein, `this` Global Object (browser mein `window`) ko refer karta hai (Non-strict mode mein).</li>
              <li>**Arrow Functions** ka apna `this` nahi hota, woh apne **parent scope** ka `this` inherit karti hain.</li>
            </ul>
          </p>
          <CodeBlock>{`const user = {
  name: "Shahzaib",
  // Regular function: 'this' points to 'user'
  greet: function () { 
    console.log("Hi, " + this.name);
  },
  // Arrow function: 'this' global scope ko point karega (agar object method ho)
  // yahan isse avoid karna chahiye.
  arrowGreet: () => {
    console.log("Hi, " + this.name); // 'this.name' yahan undefined ho sakta hai
  }
};

user.greet(); // Hi, Shahzaib`}</CodeBlock>
        </Chapter>

        {/* UPDATED CHAPTER 6: Classes & OOP (Prototypes ki detail) */}
        <Chapter title="7. Classes, OOP & Prototypes (The Core)">
          <p>
            JavaScript asal mein **Prototype-based** hai. `class` keyword (`ES6+`) sirf code likhne ko aasan banane ke liye hai (**Syntactic Sugar**).
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Prototypes:</strong> Har object ke paas ek hidden reference (`__proto__`) hota hai apne **Prototype Object** ki taraf. Jab koi property object mein nahi milti, JS use **Prototype Chain** mein upar dhoondhta hai. Isse memory save hoti hai aur **Inheritance** achieve hota hai.
            </li>
            <li>
              **Classes:** Prototypes par kaam karne ka modern tareeqa. `extends` se inheritance aasan ho jaati hai.
            </li>
          </ul>
          <CodeBlock>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a sound.");
  }
}

class Dog extends Animal {
  // Dog Animal ke prototype se 'speak' method ko inherit karta hai
  speak() { 
    console.log(this.name + " barks."); // Method Overriding
  }
}

const dog = new Dog("Rex");
// dog.speak() -> pehle Dog mein dekhega, phir Animal ke prototype mein
dog.speak(); // Rex barks.`}</CodeBlock>
        </Chapter>

        {/* UPDATED CHAPTER 7: Asynchronous JavaScript (Promises ki detail) */}
        <Chapter title="8. Asynchronous JavaScript (Promises & Event Loop)">
          <p>
            JS **Single-Threaded** hai, lekin yeh **Asynchronous** tasks (jaise data fetch, timers) ko Web APIs aur **Event Loop** ki madad se background mein handle karta hai. Isse main thread **block** nahi hota.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Promises:</strong> Asynchronous operations ke final outcome (value ya error) ko represent karte hain. Promises **Pending** se **Fulfilled** ya **Rejected** state mein jaate hain. Yeh Callback Hell se bachate hain.
            </li>
            <li>
              <strong>Async/Await:</strong> Promises par kaam karne ka sabse saaf tareeqa. `await` function ko *pauses* karta hai jab tak promise resolve na ho jaye. `async` function hamesha promise return karta hai.
            </li>
          </ul>
          <CodeBlock>{`// Promises
const checkUser = new Promise((resolve, reject) => {
  const isLogged = true;
  if(isLogged) {
    resolve("User found!");
  } else {
    reject("Login failed.");
  }
});

checkUser
  .then(message => console.log(message)) // Output: User found!
  .catch(error => console.error(error));`}</CodeBlock>
          <CodeBlock>{`// Async/Await
async function getData() {
  try {
    // Yahan Execution 'wait' karega (non-blocking)
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
    const data = await res.json();
    console.log(data);
  } catch(e) {
    console.error("Error fetching data:", e);
  }
}
getData();`}</CodeBlock>
        </Chapter>

        {/* Original Chapter 8: ES6+ Modern Features */}
        <Chapter title="9. ES6+ Modern Features (Syntax Sugar)">
          <p>
            Modern JS ne code ko chota aur zyada expressive banane ke liye bohot se features diye hain:
          </p>
          <ul className="list-disc pl-6">
            <li>
              **Destructuring:** Arrays/Objects se values ko asani se nikalna.
            </li>
            <li>
              **Spread/Rest Operators (`...`):** Copying, merging, ya function arguments ko handle karne ke liye.
            </li>
            <li>
              **Template Literals:** Variables ko string mein asani se embed karna.
            </li>
          </ul>
          <CodeBlock>{`// Destructuring & Template Literals
const person = { name: "Shahzaib", age: 21 };
const { name, age } = person; // Object Destructuring

console.log(\`My name is \${name}, I am \${age}.\`); 

// Spread Operator
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Rest Operator
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // 6`}</CodeBlock>
        </Chapter>

        {/* ================== HTML Section ================== */}
        <Chapter title="10. HTML Basics">
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
  </body>
</html>`}</CodeBlock>
        </Chapter>

        {/* ================== JavaScript DOM Section ================== */}
        <Chapter title="11. JavaScript DOM Manipulation">
          <p>
            **DOM (Document Object Model)** webpage ko JS ke through access aur change karne ka ek interface hai. JS se hum elements ko{" "}
            <strong>select, modify, add, remove</strong> kar sakte hain.
          </p>
          <CodeBlock>{`<h1 id="title">Hello</h1>
<button onclick="changeText()">Click</button>

<script>
  function changeText() {
    // Select karna
    const h1 = document.getElementById("title");
    // Modify karna
    h1.textContent = "Text Changed!";
    h1.style.color = "red";
  }
</script>`}</CodeBlock>
        </Chapter>

        <Chapter title="12. DOM Events & Validation">
          <p>
            **Events** user actions hote hain. `addEventListener()` ek element par function attach karta hai jab woh event trigger hota hai (jaise click).
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

        <Chapter title="13. CSS Basics (Styling)">
          <p>
            CSS **styling** ke liye hota hai. Yeh elements ke colours, layout, aur appearance ko control karta hai.
          </p>
          <CodeBlock>{`/* External CSS file ka code */
body {
  background-color: #222;
  color: white;
  font-family: Arial;
}
.card { 
  /* CSS Box Model */
  border: 2px solid red;
  padding: 15px; 
  margin: 10px;
}
/* Media Query for Responsive Design */
@media (max-width: 600px) {
  body {
    background: #333;
  }
}`}</CodeBlock>
        </Chapter>


        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6 mt-10">
          © {new Date().getFullYear()} Complete JavaScript Guide – Dark Theme
        </footer>
      </div>
    </div>
  );
}