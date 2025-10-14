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
          Complete JavaScript Guide 🚀
        </h1>

        {/* ==================================================================================================================================== */}
        {/* 🟢 BEGINNER (Basics You Must Master) */}
        {/* ==================================================================================================================================== */}
        <h2 className="text-3xl font-extrabold text-green-400 mt-16 mb-6 border-b border-green-400/30 pb-2">
          🟢 Beginner: Basics You Must Master
        </h2>

        <Chapter title="1. Engine & Execution Context (The 'How')">
          <p>
            To run JavaScript code, an Engine is required. In every browser (and in Node.js), the V8 Engine (from Google) is the most prominent.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>V8 Engine:</strong> This rapidly converts your JS code into Machine Code. It doesn't just *interpret* anymore, but uses JIT (Just-In-Time) Compilation to boost performance.
            </li>
            <li>
              <strong>Execution Context:</strong> Whenever code runs, a Context is created. This includes three crucial components:
              <ul className="list-circle pl-6 mt-2">
                <li>Variable Environment: Where variables (`let`, `const`, `var`) are stored.</li>
                <li>Scope Chain: Determines where and how the code looks for variables outside its immediate block.</li>
                <li>`this`: Specifies which object the current context is pointing to.</li>
              </ul>
            </li>
          </ul>
        </Chapter>

        ---

        <Chapter title="2. Introduction & Setup">
          <p>
            JavaScript is the programming language of the web. It allows us to make static HTML & CSS pages interactive and dynamic.
          </p>
          <p>
            You can link JS to HTML in three ways: Inline, using an internal &lt;script&gt; tag, or using an external file (most common).
          </p>
          <CodeBlock>{`<!doctype html>
<html>
  <head>
    <title>JS Example</title>
  </head>
  <body>
    <h1>Hello JavaScript</h1>
    
    <script>
      console.log("Hello World from internal script");
    </script>
    
    </body>
</html>`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="3. Variables & Data Types">
          <p>
            Variables are containers for storing values. We use <code>var</code>, <code>let</code>, and <code>const</code>.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <code>var</code> → Old, function-scoped (avoid using now).
            </li>
            <li>
              <code>let</code> → Block-scoped (modern standard), can be updated.
            </li>
            <li>
              <code>const</code> → Block-scoped, cannot be re-assigned (use for values that shouldn't change).
            </li>
          </ul>
          <p>
            JS has Primitive types (String, Number, Boolean, Null, Undefined, Symbol, BigInt) and Reference types (Object, Array, Function).
          </p>
          <CodeBlock>{`let name = "Shahzaib"; // string
const age = 21;       // number
let isActive = true;    // boolean

let empty = null;       // object (a bug, but used to mean 'no object value')
let notAssigned;      // undefined

let skills = ["JS", "HTML", "CSS"]; // array (Reference Type)
let user = { name: "Shahzaib", age: 21 }; // object (Reference Type)`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="4. Operators & Control Flow">
          <p>
            Operators perform actions on values. Control Flow structures (like `if` and `for`) dictate the order of execution.
          </p>

          <h3>Operators</h3>
          <ul className="list-disc pl-6">
            <li>Arithmetic: `+`, `-`, `*`, `/`, `%` (Modulus/Remainder), `` (Exponentiation).</li>
            <li>
              {/* FIX: Replaced < and > with HTML entities (&lt; and &gt;) to prevent JSX parsing errors. */}
              Comparison: `==` (loose equals), `===` (strict equals), `!=`, `!==`, `&gt;`, `&lt;`, `&gt;=`, `&lt;=`. Always use strict comparison (`===`).
            </li>
            <li>Logical: `&&` (AND), `||` (OR), `!` (NOT).</li>
          </ul>

          <h3>Control Flow</h3>
          <p>
            The `if/else if/else` block and the `switch` statement are used for conditional execution. The Ternary Operator is a concise way to write simple `if/else` statements.
          </p>

          <CodeBlock>{`let x = 10;
let y = 5;

// Comparison & Logical
if (x > y && x !== 100) {
  console.log("X is greater than Y.");
} else {
  console.log("Condition not met.");
}

// Ternary Operator
let message = (x > y) ? "Greater" : "Lesser or Equal";
console.log(message); // Greater`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="5. Loops (Iteration)">
          <p>
            Loops are used to execute a block of code repeatedly.
          </p>
          <ul className="list-disc pl-6">
            <li>
              `for` loop: The most common loop, used when you know the number of iterations.
            </li>
            <li>
              `while` loop: Executes as long as a specified condition is true.
            </li>
            <li>
              `for...of`: Used to iterate over the values of an iterable object (like Arrays, Strings).
            </li>
            <li>
              `for...in`: Used to iterate over the keys (property names) of an object.
            </li>
          </ul>
          <CodeBlock>{`const numbers = [1, 2, 3];

// Traditional for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of loop (for values)
for (const num of numbers) {
  console.log(num);
}

const user = { name: "Alex", age: 30 };
// for...in loop (for keys/properties)
for (const key in user) {
  console.log(\`\${key}: \${user[key]}\`); 
}
// Output: name: Alex, age: 30`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="6. Functions">
          <p>
            A function is a reusable block of code that can be called by name. It can take input (parameters) and return an output.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Function Declaration: Defined with the `function` keyword. These are hoisted.
            </li>
            <li>
              Function Expression: Stored in a variable. Not hoisted like declarations.
            </li>
            <li>
              Arrow Functions (`() => {}`): A modern, concise syntax. They have a different, more predictable behavior for the `this` keyword.
            </li>
          </ul>
          <CodeBlock>{`// Function Declaration
function calculateSum(a, b) {
  return a + b;
}

// Function Expression
const multiply = function(a, b) {
  return a * b;
}

// Arrow Function
const greetArrow = (name) => "Hi, " + name;

console.log(calculateSum(5, 3)); // 8
console.log(greetArrow("Maaz")); // Hi, Maaz`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="7. Arrays & Common Methods">
          <p>
            An Array is an ordered list of values. Arrays are objects and come with many built-in methods for manipulation.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Mutating Methods: `push()`, `pop()`, `shift()`, `unshift()` (change the original array).
            </li>
            <li>
              Iteration/Transform Methods: `map()` (transforms array into a new one), `filter()` (creates a new array with elements that pass a test), `reduce()` (reduces array to a single value).
            </li>
          </ul>
          <CodeBlock>{`const scores = [10, 50, 80, 20, 95];

// Map: creates a new array by applying a function to every element
const multiplied = scores.map(score => score * 2); 
console.log(multiplied); // [20, 100, 160, 40, 190]

// Filter: returns a new array of items that pass the condition
const highScores = scores.filter(score => score > 70);
console.log(highScores); // [80, 95]

// Reduce: returns a single value (accumulator)
const total = scores.reduce((sum, score) => sum + score, 0); 
console.log(total); // 255`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="8. Objects & Accessing Properties">
          <p>
            An Object is a collection of key-value pairs (properties). It's the fundamental way to store structured data in JS.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Dot Notation: `object.property` (preferred when property name is known).
            </li>
            <li>
              Bracket Notation: `object["property"]` (used when property name is dynamic or contains spaces/special characters).
            </li>
          </ul>
          <CodeBlock>{`const car = {
  make: "Honda",
  model: "Civic",
  year: 2022,
  start: function() {
    console.log("Engine started!");
  }
};

// Accessing properties
console.log(car.make); // Dot Notation: Honda
console.log(car["year"]); // Bracket Notation: 2022

// Calling a method
car.start(); // Engine started!

// Adding a new property
car.color = "Red";`}</CodeBlock>
        </Chapter>


        {/* ==================================================================================================================================== */}
        {/* 🟡 INTERMEDIATE (Real Project Level Stuff) */}
        {/* ==================================================================================================================================== */}
        <h2 className="text-3xl font-extrabold text-yellow-400 mt-16 mb-6 border-b border-yellow-400/30 pb-2">
          🟡 Intermediate: Real Project Level Stuff
        </h2>

        <Chapter title="9. Scope, Hoisting & Closures (Deep Dive)">
          <p>
            Scope is the region where a variable can be accessed. `let` and `const` use Block Scope (within `{}`), which is the modern standard.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Hoisting:</strong> The JS Engine conceptually moves `var` and function declarations to the top of their scope before execution. `let` and `const` are also hoisted, but accessing them before initialization causes an error (Temporal Dead Zone).
            </li>
            <li>
              <strong>Closures:</strong> An inner function's ability to remember and access the variables of its outer function, even after the outer function has finished executing. This is key for Data Privacy and State Management.
            </li>
          </ul>
          <CodeBlock>{`// Closure Example: Data Privacy
function createCounter() {
  let count = 0; // The 'private' variable
  
  // 'inner' function forms a closure over 'count'
  return function increment() {
    count++;
    return count;
  }; 
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2 
// 'count' cannot be changed directly, only through 'counter()'.

// Hoisting Example
console.log(hoistedVar); // undefined (var is hoisted, but not its value)
var hoistedVar = "I am hoisted";

// console.log(tdzLet); // ReferenceError: Cannot access 'tdzLet' before initialization
// let tdzLet = "In TDZ";`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="10. ES6+ Modern Features">
          <p>
            Modern JS introduced features to make code shorter, cleaner, and more expressive.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Destructuring: A quick way to extract values from Arrays or properties from Objects into distinct variables.
            </li>
            <li>
              Spread/Rest Operators (`...`): Spread is used to expand an array/object into its individual elements/properties. Rest is used in function arguments to gather the remaining arguments into an array.
            </li>
            <li>
              Template Literals: Strings using backticks (`` ` ``) that allow for string interpolation using `${}` and multi-line strings.
            </li>
          </ul>
          <CodeBlock>{`// Destructuring & Template Literals
const person = { firstName: "Ali", age: 25, job: "Developer" };
const { firstName, age } = person; // Object Destructuring

console.log(\`\${firstName} is a \${job} who is \${age} years old.\`); 

// Spread Operator (Copying/Merging)
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]

// Rest Operator (Function Arguments)
function sumAll(a, b, ...remainingNumbers) {
  // remainingNumbers will be an array of [3, 4, 5]
  console.log(remainingNumbers); 
  return a + b + remainingNumbers.reduce((acc, num) => acc + num, 0);
}
sumAll(1, 2, 3, 4, 5); // Returns 15`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="11. Asynchronous JavaScript (Promises & Event Loop)">
          <p>
            JS is Single-Threaded, but it handles Asynchronous tasks (like data fetching or timers) in the background using Web APIs and the Event Loop. This prevents the main thread from blocking.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Promises:</strong> Objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They move from Pending to Fulfilled or Rejected states.
            </li>
            <li>
              <strong>Async/Await:</strong> A modern, cleaner way to work with Promises, making asynchronous code look and feel synchronous.
            </li>
          </ul>
          <CodeBlock>{`// Promises
const checkUser = new Promise((resolve, reject) => {
  const isLogged = true;
  if(isLogged) {
    resolve("User successfully found!");
  } else {
    reject("Login failed.");
  }
});

checkUser
  .then(message => console.log(message)) 
  .catch(error => console.error(error));`}</CodeBlock>
          <CodeBlock>{`// Async/Await
async function fetchData() {
  try {
    // The 'await' keyword pauses execution here (non-blocking)
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1"); 
    const data = await res.json();
    console.log("Fetched Data:", data);
  } catch(e) {
    console.error("Error fetching data:", e);
  }
}
fetchData();`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="12. Error Handling (`try...catch`)">
          <p>
            Error Handling is crucial for robust applications. The `try...catch` statement allows you to test a block of code for errors and handle them gracefully.
          </p>
          <ul className="list-disc pl-6">
            <li>
              `try`: Contains the code that might throw an error.
            </li>
            <li>
              `catch(error)`: Contains the code to execute if an error occurs in the `try` block.
            </li>
            <li>
              `finally`: Contains code that runs regardless of whether an error was thrown or not.
            </li>
            <li>
              `throw`: Used to create custom errors.
            </li>
          </ul>
          <CodeBlock>{`function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero."); // Custom Error
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error("Caught an error:", error.message); // Output: Caught an error: Cannot divide by zero.
} finally {
  console.log("Division attempt finished.");
}`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="13. Local Storage & JSON">
          <p>
            The Web Storage API (`localStorage` and `sessionStorage`) allows you to save user data directly in the browser.
          </p>
          <ul className="list-disc pl-6">
            <li>
              `localStorage`: Stores data with no expiration date (persists after browser close).
            </li>
            <li>
              `sessionStorage`: Stores data for the duration of the page session (cleared when the browser tab is closed).
            </li>
            <li>
              JSON: (JavaScript Object Notation) is the format used for storing and transmitting data.
            </li>
          </ul>
          <CodeBlock>{`const userData = { id: 101, theme: "dark" };

// Objects must be converted to a JSON string before storing
localStorage.setItem("userSettings", JSON.stringify(userData));

// Retrieving and converting back to an Object
const storedSettings = localStorage.getItem("userSettings");
if (storedSettings) {
  const settingsObject = JSON.parse(storedSettings); // Convert JSON string back to JS object
  console.log(settingsObject.theme); // dark
}

// Clearing a key
// localStorage.removeItem("userSettings");`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="14. DOM Manipulation (The Web Interface)">
          <p>
            The DOM (Document Object Model) is the programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Selecting Elements: `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`.
            </li>
            <li>
              Modifying Elements: Changing `textContent`, `innerHTML`, `style`, and attributes like `src` or `class`.
            </li>
          </ul>
          <CodeBlock>{`<h1 id="title" class="text-blue">Hello</h1>

<script>
  // Select the element
  const h1 = document.querySelector("#title"); 

  // Modify content and style
  h1.textContent = "DOM Manipulated!";
  h1.style.backgroundColor = "yellow";
  h1.classList.remove("text-blue");
  h1.classList.add("text-red");
  
  // Creating a new element
  const newP = document.createElement('p');
  newP.textContent = "I was added by JavaScript.";
  document.body.appendChild(newP); // Add to the body
</script>`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="15. DOM Events & Listeners">
          <p>
            Events are actions that occur in the browser (e.g., a user clicking, a page loading, an input value changing). Event Listeners allow you to attach a function to an element that runs when a specific event is triggered.
          </p>
          <ul className="list-disc pl-6">
            <li>
              `addEventListener(event, handler)`: The standard way to attach handlers.
            </li>
            <li>
              Event Object: The handler function receives an `event` object with useful information (e.g., `event.target`, `event.preventDefault()`).
            </li>
            <li>
              Event Bubbling: The default behavior where an event flows from the target element up to the window.
            </li>
          </ul>
          <CodeBlock>{`<button id="myButton">Click Me</button>

<script>
  const button = document.getElementById("myButton");

  // Attach a click listener
  button.addEventListener("click", function(event) {
    console.log("Button was clicked!");
    event.target.textContent = "Clicked!"; // event.target is the button itself
  });
  
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    // Prevent the default form submission (page reload)
    e.preventDefault(); 
    console.log("Form submitted via JS, no reload.");
  });
</script>`}</CodeBlock>
        </Chapter>

        {/* ==================================================================================================================================== */}
        {/* 🔵 ADVANCED (Pro Level Concepts) */}
        {/* ==================================================================================================================================== */}
        <h2 className="text-3xl font-extrabold text-blue-400 mt-16 mb-6 border-b border-blue-400/30 pb-2">
          🔵 Advanced: Pro Level Concepts
        </h2>

        <Chapter title="16. Object-Oriented Programming (OOP) & Prototypes">
          <p>
            JavaScript is fundamentally Prototype-based. The `class` keyword (ES6+) is merely Syntactic Sugar to make prototype-based inheritance easier to write, resembling traditional OOP languages.
          </p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Prototypes:</strong> Every object has a hidden reference (`__proto__`) to its Prototype Object. When a property is not found on an object, JS looks up the Prototype Chain. This enables Inheritance.
            </li>
            <li>
              Classes: Provide a clean structure for creating objects (instances) and managing inheritance with `extends` and `super()`.
            </li>
          </ul>
          <CodeBlock>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  // This method is stored once on the Animal prototype, not on every instance.
  speak() { 
    console.log(this.name + " makes a sound.");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls the parent Animal's constructor
    this.breed = breed;
  }
  // Method Overriding
  speak() { 
    console.log(this.name + " barks."); 
  }
}

const rex = new Dog("Rex", "German Shepherd");
rex.speak(); // Rex barks. 

// The prototype chain check:
// console.log(rex.__proto__ === Dog.prototype); // true`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="17. Higher-Order Functions (HOFs) & Functional Programming">
          <p>
            A Higher-Order Function (HOF) is a function that either takes one or more functions as arguments or returns a function as its result.
          </p>
          <ul className="list-disc pl-6">
            <li>
              Examples: Array methods like `map()`, `filter()`, and `reduce()` are all HOFs.
            </li>
            <li>
              Benefits: Leads to more reusable, composable, and cleaner code. It is a core concept of Functional Programming in JS.
            </li>
          </ul>
          <CodeBlock>{`// HOF: A function that returns another function (similar to the closure example)
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const multiplyByTen = createMultiplier(10);
console.log(multiplyByTen(5)); // 50 (The returned function is called)

// HOF: A function that takes another function as an argument
const numbers = [1, 2, 3];
const squares = numbers.map(function(n) { // map takes a function as an argument
  return n * n;
});
console.log(squares); // [1, 4, 9]`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="18. Modules (Import/Export)">
          <p>
            Modules allow you to break your JavaScript code into smaller, reusable files. This helps in managing complexity and avoiding variable name collisions.
          </p>
          <ul className="list-disc pl-6">
            <li>
              ES Modules (ESM): The modern, standardized system using `import` and `export`. This is the standard in browsers and modern Node.js.
            </li>
            <li>
              Named Exports: Exporting multiple values by name (`export const func = ...`).
            </li>
            <li>
              Default Exports: Exporting a single main value per module (`export default ...`).
            </li>
          </ul>
          <CodeBlock>{`// --- file: math.js ---
export const PI = 3.14159; 

export function add(a, b) {
  return a + b;
}

// --- file: app.js ---
import { PI, add } from './math.js'; 
// import * as Math from './math.js'; // Alternative way

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="19. API Handling (`fetch`)">
          <p>
            APIs (Application Programming Interfaces) are how your frontend communicates with backend servers to send and retrieve data. The modern `fetch()` API is Promise-based and is the standard for making network requests.
          </p>
          <ul className="list-disc pl-6">
            <li>
              `fetch(url)`: Returns a Promise that resolves to the `Response` object.
            </li>
            <li>
              The `Response` object itself is not the JSON data; you must call a method like `response.json()` or `response.text()` which returns a second Promise.
            </li>
            <li>
              Methods: You can specify the request method (GET, POST, PUT, DELETE) in the second argument of `fetch`.
            </li>
          </ul>
          <CodeBlock>{`// Making a GET request using async/await
async function getUser(id) {
  try {
    const url = \`https://jsonplaceholder.typicode.com/users/\${id}\`;
    const response = await fetch(url);

    if (!response.ok) { // Check for HTTP errors (e.g., 404, 500)
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const userData = await response.json(); // Wait for the body to be parsed as JSON
    console.log("User Name:", userData.name); 

  } catch (error) {
    console.error("Fetch failed:", error);
  }
}

getUser(1);`}</CodeBlock>
        </Chapter>

        {/* ==================================================================================================================================== */}
        {/* 🔴 BONUS (Highly Useful in Real Work) */}
        {/* ==================================================================================================================================== */}
        <h2 className="text-3xl font-extrabold text-red-400 mt-16 mb-6 border-b border-red-400/30 pb-2">
          🔴 Bonus: Highly Useful in Real Work
        </h2>

        <Chapter title="20. Debounce & Throttle">
          <p>
            These are performance optimization techniques used to limit how often a function can execute, especially for event handlers that fire rapidly (like `scroll`, `resize`, or `input`).
          </p>
          <ul className="list-disc pl-6">
            <li>
              Debounce: Delays function execution until after a period of inactivity. Useful for search bar input: only search after the user has stopped typing for, say, 300ms.
            </li>
            <li>
              Throttle: Ensures a function executes at most once in a given time period. Useful for scroll events: process the scroll position every 100ms, regardless of how many times the event fires in between.
            </li>
          </ul>
          <CodeBlock>{`// Simplified Debounce Implementation Logic
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId); // Reset the timer on every call
    timeoutId = setTimeout(() => {
      func.apply(this, args); // Execute after delay
    }, delay);
  };
}

const debouncedSearch = debounce((text) => {
  console.log("Searching for:", text);
}, 500);

// On user input:
// input.addEventListener('input', (e) => debouncedSearch(e.target.value));`}</CodeBlock>
        </Chapter>

        ---

        <Chapter title="21. TypeScript Basics (Strong Typing)">
          <p>
            TypeScript (TS) is a superset of JavaScript that adds Static Typing. It compiles down to plain JavaScript but catches many common errors *before* the code runs (at compile time).
          </p>
          <ul className="list-disc pl-6">
            <li>
              Benefits: Improved code quality, better tooling (IntelliSense/autocompletion), and safer refactoring.
            </li>
            <li>
              Syntax: You add type annotations using a colon (`:`).
            </li>
          </ul>
          <CodeBlock>{`// TypeScript Example
function getGreeting(name: string): string {
  // Argument 'name' must be a string.
  // The function must return a string.
  return "Hello, " + name;
}

// let age: number = "twenty"; // Type error: Cannot assign string to number

let user: { id: number, name: string } = {
  id: 1,
  name: "Shahzaib"
};`}</CodeBlock>
        </Chapter>


        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6 mt-10">
          © {new Date().getFullYear()} Complete JavaScript Guide – Expanded Dark Theme 💡
        </footer>
      </div>
    </div>
  );
}