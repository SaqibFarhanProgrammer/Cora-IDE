import React, { useState } from "react";

// Complete React component for a professional black-background
// JavaScript documentation page with white text. It covers theory + code examples.

export default function LearnJSGuide() {
    const [active, setActive] = useState("intro");

    const chapters = [
        { id: "intro", title: "Introduction & Setup" },
        { id: "basics", title: "Basics: Variables & Types" },
        { id: "operators", title: "Operators" },
        { id: "control", title: "Control Flow" },
        { id: "functions", title: "Functions" },
        { id: "scope", title: "Scope & Closures" },
        { id: "objects", title: 'Objects, Arrays & "this"' },
        { id: "classes", title: "Classes & OOP" },
        { id: "dom", title: "DOM & Events" },
        { id: "async", title: "Asynchronous JS" },
        { id: "es6", title: "ES6+ Modern Features" },
        { id: "modules", title: "Modules & Tooling" },
        { id: "tips", title: "Best Practices & Tips" },
    ];

    // Custom Chapter component for consistent styling
    const Chapter = ({ id, children, title }) => (
        <section id={id} className="prose prose-invert max-w-none">
            <h2 className="text-2xl font-bold mt-6 mb-2">{title}</h2>
            <div className="text-base leading-relaxed space-y-4">{children}</div>
        </section>
    );

    // Styling for code blocks (Yellow text on dark background for highlighting)
    const CodeBlock = ({ children }) => (
        <pre className="bg-zinc-900/90 p-3 rounded mt-2 overflow-x-auto text-sm font-mono border border-zinc-800">
            <code className="whitespace-pre-wrap text-zinc-300">{children}</code>
        </pre>
    );

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Sidebar Navigation */}
                <aside className="md:col-span-1 sticky top-6 self-start">
                    <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-4 shadow-lg">
                        <h1 className="text-2xl font-extrabold text-zinc-300">
                            Learn Javascript
                        </h1>
                        <p className="text-xs mt-1 text-gray-400">
                            Complete theory & practical guide (Black Theme)
                        </p>
                        <nav className="mt-4 space-y-2">
                            {chapters.map((c) => (
                                <button
                                    key={c.id}
                                    onClick={() => setActive(c.id)}
                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition 
                    ${active === c.id
                                            ? "bg-teal-700/30 text-zinc-300 ring-1 ring-zinc-500/50 font-semibold"
                                            : "text-gray-200 hover:bg-white/5"
                                        }`}
                                >   
                                    {c.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </aside>

                {/* Content Area */}
                <main className="md:col-span-3">
                    <div className="bg-[#050505] border border-gray-900 rounded-2xl p-6 shadow-2xl">
                        {/* 1. Introduction & Setup */}
                        {active === "intro" && (
                            <Chapter id="intro" title="Introduction & Setup">
                                <p>
                                    JavaScript is the most widely used programming language for
                                    the web, adding interactivity, logic, and dynamic features to
                                    static HTML and CSS. It powers everything from simple button
                                    clicks to complex server-side applications (via Node.js).
                                </p>
                                <p>
                                    Evolved significantly since 1995, modern JS supports features
                                    like ES6 modules and `async/await`, establishing itself as a
                                    professional and versatile language.
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Environment Setup
                                </h3>
                                <p>
                                    Run JS either in the browser (via <code>&lt;script&gt;</code>{" "}
                                    tags) or on the server (via Node.js). Modern web apps use the
                                    `type="module"` attribute for modularity.
                                </p>
                                <CodeBlock>{`<!doctype html>
<html>
  <body>
    <script src="app.js"></script>
    <script type="module" src="main.js"></script>
  </body>
</html>`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 2. Basics: Variables & Types */}
                        {active === "basics" && (
                            <Chapter id="basics" title="Basics: Variables & Types">
                                <p>
                                    Use **`const`** for values that are constant (preferred
                                    default) and **`let`** for values that will be reassigned.
                                    **Avoid `var`** due to its confusing scoping rules.
                                </p>
                                <p>
                                    JS is dynamically typed. Main primitive types: **Number,
                                    String, Boolean, Undefined, Null, Symbol**, and **BigInt**.
                                </p>
                                <CodeBlock>{`const name = 'Sara';        // String (Constant)
let age = 30;             // Number (Mutable)
let isActive = true;      // Boolean
let position = null;      // Intentional absence of value

age = 31; // OK: using 'let'

// name = 'Max'; // ERROR: Cannot reassign 'const'`}</CodeBlock>
                                <p>
                                    <strong>Numbers</strong> handle both integers and floats. Use
                                    **Template Literals** (backticks `` ` ``) for easy variable
                                    embedding in strings.
                                </p>
                            </Chapter>
                        )}

                        {/* 3. Operators */}
                        {active === "operators" && (
                            <Chapter id="operators" title="Operators">
                                <p>
                                    Operators perform actions on values. The most important rule
                                    is the distinction in comparison operators.
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Strict vs. Loose Equality
                                </h3>
                                <ul className="list-disc ml-5">
                                    <li>
                                        <code>==</code> (Loose): Checks only the value. It performs
                                        **type coercion**, which can lead to bugs. **Avoid this.**
                                    </li>
                                    <li>
                                        <code>===</code> (Strict): Checks both the **value AND the
                                        type**. **Always prefer this for reliability.**
                                    </li>
                                </ul>
                                <CodeBlock>{`// Comparison Operators
console.log(10 == '10');  // true (10 is coerced to '10')
console.log(10 === '10'); // false (Number vs. String)

// Arithmetic and Logical Operators
let x = 5 + 3;      // 8 (Addition)
let remainder = 10 % 3; // 1 (Modulus/Remainder)
let isTrue = (x > 5) && (remainder === 1); // true (AND)`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 4. Control Flow */}
                        {active === "control" && (
                            <Chapter id="control" title="Control Flow">
                                <p>
                                    Control flow structures dictate the order of execution. This
                                    is achieved using conditionals (`if/else`, `switch`) and loops
                                    (`for`, `while`).
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Conditional Logic
                                </h3>
                                <CodeBlock>{`let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside.");
} else if (temperature > 20) {
    console.log("It's pleasant.");
} else {
    console.log("It's cool.");
}`}</CodeBlock>
                                <h3 className="font-semibold text-lg mt-4">
                                    Repetition (Loops)
                                </h3>
                                <p>
                                    A standard `for` loop is used when you know the number of
                                    iterations beforehand.
                                </p>
                                <CodeBlock>{`// For Loop: i from 0 up to 4
for (let i = 0; i < 5; i++) {
    console.log("Counting: " + i);
}`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 5. Functions */}
                        {active === "functions" && (
                            <Chapter id="functions" title="Functions">
                                <p>
                                    Functions are the core units of reuse in JavaScript. They
                                    package a specific task, take inputs (parameters), and return
                                    outputs.
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Arrow Functions (Modern Syntax)
                                </h3>
                                <p>
                  Arrow functions (`=>`) provide a concise syntax, especially
                                    for simple, one-line operations. They also have a unique way
                                    of handling the `this` keyword.
                                </p>
                                <CodeBlock>{`// Traditional Function Declaration
function calculateArea(width, height) {
    return width * height;
}

// Modern Arrow Function (Implicit return for one line)
const multiply = (x, y) => x * y;

console.log(calculateArea(10, 5)); // 50
console.log(multiply(2, 4));      // 8`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 6. Scope & Closures */}
                        {active === "scope" && (
                            <Chapter id="scope" title="Scope & Closures (Crucial Theory)">
                                <h3 className="font-semibold text-lg mt-4">Theory: Scope</h3>
                                <p>
                                    <strong>Scope</strong> governs variable visibility.
                                    `let`/`const` are **Block Scoped** (confined to `{ }`), while
                                    `var` is Function Scoped. Block scoping helps prevent naming
                                    conflicts and accidental modification of variables.
                                </p>
                                <CodeBlock>{`function exampleScope() {
    const functionVar = "I am local to the function"; 

    if (true) {
        let blockVar = "I am local to the block";
        console.log(blockVar); // Accessible
    }
    // console.log(blockVar); // ERROR: blockVar is not defined here
    console.log(functionVar); // Accessible
}`}</CodeBlock>
                                <h3 className="font-semibold text-lg mt-4">
                                    Theory: Closures 🔒
                                </h3>
                                <p>
                                    A **closure** is when a function retains access to its parent
                                    function's scope *even after* the parent function has finished
                                    executing. This allows for data privacy and state management.
                                </p>
                                <CodeBlock>{`function createCounter() {
    let count = 0; // This variable is 'closed over'

    return function increment() {
        count = count + 1; // The inner function remembers 'count'
        return count;
    };
}

const counterA = createCounter();
console.log(counterA()); // 1
console.log(counterA()); // 2 (State is preserved)`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 7. Objects, Arrays & 'this' */}
                        {active === "objects" && (
                            <Chapter id="objects" title="Objects, Arrays & 'this'">
                                <h3 className="font-semibold text-lg mt-4">
                                    Objects and Arrays (Data Structures)
                                </h3>
                                <p>
                                    An **Object** groups related data (properties) and actions
                                    (methods) using key-value pairs. An **Array** is an ordered
                                    list of values accessed by index.
                                </p>
                                <CodeBlock>{`const player = {
    x: 100,
    health: 90,
    color: 'white',
    // Method
    move: function() { this.x += 10; } 
};

const scores = [10, 20, 30]; // Array

player.move();
console.log(player.x); // 110 (Accessing a property)`}</CodeBlock>
                                <h3 className="font-semibold text-lg mt-4">
                                    Theory: The `this` Keyword
                                </h3>
                                <p>
                                    The value of **`this`** depends on *how* a function is called.
                                    When a function is called as an object's method, `this` refers
                                    to that object.
                                </p>
                                <CodeBlock>{`const game = {
    lives: 3,
    // Regular Method: 'this' refers to 'game'
    getLivesMethod: function() {
        return this.lives;
    }
};

console.log(game.getLivesMethod()); // Output: 3 (Correctly uses 'game.lives')`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 8. Classes & OOP */}
                        {active === "classes" && (
                            <Chapter
                                id="classes"
                                title="Classes & Object-Oriented Programming (OOP)"
                            >
                                <p>
                                    The **`class`** syntax provides a clear, structure for
                                    creating object blueprints, supporting **Encapsulation** and
                                    **Inheritance**.
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Classes and Inheritance
                                </h3>
                                <p>
                                    Use the `extends` keyword to create a child class that
                                    inherits properties and methods from a parent class. The
                                    `super()` call is necessary to initialize the parent's
                                    properties.
                                </p>
                                <CodeBlock>{`// Parent Class (Base Blueprint)
class GameObject {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

// Child Class using 'extends'
class Player extends GameObject {
    constructor(x, y, color, speed) {
        super(x, y, color); // Initialize parent properties
        this.speed = speed;
    }
}

const player1 = new Player(10, 20, 'yellow', 5);
console.log(player1.color); // Output: 'yellow'`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 9. DOM & Events */}
                        {active === "dom" && (
                            <Chapter id="dom" title="DOM & Events">
                                <p>
                                    The **Document Object Model (DOM)** is the API that allows
                                    JavaScript to interact with, modify, and update the structure,
                                    style, and content of a web page.
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Selecting and Manipulating Elements
                                </h3>
                                <p>
                                    We use selector methods like `querySelector` and
                                    `getElementById` to find elements, then attach **event
                                    listeners** to respond to user actions like clicks or key
                                    presses.
                                </p>
                                <CodeBlock>{`const button = document.getElementById('myButton');

// Attach an event listener
button.addEventListener('click', () => {
    console.log('Button clicked!');
    button.textContent = 'I was clicked!'; // Change content
    button.style.backgroundColor = 'teal'; // Change style
});`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 10. Asynchronous JS */}
                        {active === "async" && (
                            <Chapter id="async" title="Asynchronous JS (The Event Loop)">
                                <h3 className="font-semibold text-lg mt-4">
                                    Theory: Single-Threaded & Asynchronous
                                </h3>
                                <p>
                                    JS runs on a single thread. To handle long operations (like
                                    data fetching or timers) without freezing the browser, it uses
                                    the **Event Loop** to manage **Asynchronous** tasks outside
                                    the main execution stack.
                                </p>
                                <CodeBlock>{`console.log("1. Sync Start");

// Async Web API call (offloaded)
setTimeout(() => {
    console.log("3. Async Callback (Runs later)");
}, 0); 

console.log("2. Sync End");

/* Output Order: 1, 2, 3 */`}</CodeBlock>
                                <h3 className="font-semibold text-lg mt-4">
                                    Promises and Async/Await
                                </h3>
                                <p>
                                    **Promises** (`.then()`, `.catch()`) are objects representing
                                    the eventual completion (or failure) of an asynchronous
                                    operation. **Async/Await** is modern syntax built on Promises,
                                    allowing asynchronous code to be written in a cleaner,
                                    synchronous-looking style.
                                </p>
                            </Chapter>
                        )}

                        {/* 11. ES6+ Modern Features */}
                        {active === "es6" && (
                            <Chapter id="es6" title="ES6+ Modern Features">
                                <p>
                                    ES6 (ECMAScript 2015) introduced key features that define
                                    modern JavaScript development.
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Destructuring and Spread/Rest
                                </h3>
                                <ul className="list-disc ml-5">
                                    <li>
                                        **Destructuring:** Easily unpack values from arrays or
                                        properties from objects into distinct variables.
                                    </li>
                                    <li>
                                        **Spread (`...`):** Expands an iterable (like an array) into
                                        its individual elements.
                                    </li>
                                </ul>
                                <CodeBlock>{`const user = { id: 101, email: 'dev@guide.com' };
// Object Destructuring
const { id, email } = user;
console.log(id); // 101

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // Spread
console.log(arr2); // [1, 2, 3, 4]`}</CodeBlock>
                            </Chapter>
                        )}

                        {/* 12. Modules & Tooling */}
                        {active === "modules" && (
                            <Chapter id="modules" title="Modules & Tooling">
                                <p>
                                    ES6 **Modules** (`import`/`export`) are the standard way to
                                    organize code into reusable, encapsulated files, preventing
                                    global variable conflicts.
                                </p>
                                <h3 className="font-semibold text-lg mt-4">
                                    Professional Tooling
                                </h3>
                                <p>
                                    Modern development relies on tooling to handle code conversion
                                    and packaging:
                                </p>
                                <ul className="list-disc ml-5">
                                    <li>
                                        **Babel:** **Transpiles** (converts) modern ES6+ code into
                                        older JavaScript versions for wider browser compatibility.
                                    </li>
                                    <li>
                                        **Webpack/Vite:** **Bundlers** that package all your JS,
                                        CSS, and assets into a few optimized files for production
                                        deployment.
                                    </li>
                                </ul>
                            </Chapter>
                        )}

                        {/* 13. Best Practices & Tips */}
                        {active === "tips" && (
                            <Chapter id="tips" title="Best Practices & Tips">
                                <h3 className="font-semibold text-lg mt-4">
                                    Writing Clean, Professional Code
                                </h3>
                                <ul className="list-disc ml-5">
                                    <li>
                                        **Principle of Least Privilege:** Use **`const`** as the
                                        default variable declaration. Only use **`let`** when you
                                        absolutely must reassign the value.
                                    </li>
                                    <li>
                                        **Type Safety:** Always use **`===`** and **`!==`** to
                                        compare values and types, avoiding type coercion bugs.
                                    </li>
                                    <li>
                                        **Immutability:** Avoid changing data structures directly;
                                        use array methods like `map()` and `filter()` to return new
                                        copies instead.
                                    </li>
                                    <li>
                                        **Documentation:** Use meaningful names and add comments (or
                                        JSDoc) for complex functions.
                                    </li>
                                </ul>
                            </Chapter>
                        )}

                        <div className="mt-6 text-xs text-gray-500 border-t border-gray-800 pt-4">
                            This guide is optimized for readability on a dark theme and serves
                            as a detailed reference for core JavaScript concepts.
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
