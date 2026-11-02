// Digital Clock
function updateClock() {
    const now = new Date();

    document.getElementById("clock").innerText = now.toLocaleTimeString();
    document.getElementById("date").innerText = now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();

// Greeting based on time
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = "Hi, User! 👋";

    if (hour < 12) greeting = "Good Morning! 🌤️";
    else if (hour < 18) greeting = "Good Afternoon! ☀️";
    else greeting = "Good Evening! 🌙";

    document.getElementById("greeting").innerText = greeting;
}

updateGreeting();

// Motivational Quotes
const quotes = [
    "Dream big. Work hard. Stay focused.",
    "Success starts with self-discipline.",
    "Never stop learning.",
    "Small steps lead to big achievements.",
    "Your future depends on what you do today."
];

function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

// To-Do List
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;

        const btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.onclick = function () {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        };

        li.appendChild(span);
        li.appendChild(btn);
        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);
    saveTasks();
    displayTasks();
    input.value = "";
}

displayTasks();

// Dark Mode
document.getElementById("themeBtn").onclick = function () {
    document.body.classList.toggle("dark");
};
