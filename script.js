console.log("JavaScript is connected!");

// ===== HELLO BUTTON =====
document.getElementById("helloBtn").addEventListener("click", () => {
  document.getElementById("helloText").textContent =
    "Thanks for visiting my portfolio, Gaurang!";
});


// ===== FORM VALIDATION =====
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", (e) => {
  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert("Please fill all fields");
  } 
  else if (!email.value.includes("@")) {
    e.preventDefault();
    alert("Enter valid email");
  }
});


// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent =
    document.body.classList.contains("dark-mode")
      ? "Light Mode"
      : "Dark Mode";
});


// ===== TASK MANAGER =====
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (!task) return alert("Enter task");
  const li = document.createElement("li");
  li.textContent = task;
  taskList.appendChild(li);
  taskInput.value = "";
});

taskList.addEventListener("click", e => {
  if (e.target.tagName === "LI") e.target.remove();
});


// ===== WEATHER APP =====
const API_KEY = "7851f7d227c4746b143cfdb413ece2f8";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weatherResult");

async function getWeather() {
  const city = cityInput.value.trim();

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  weatherBox.style.display = "block";
  weatherBox.innerHTML = `<p class="loading">Loading...</p>`;

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();

    weatherBox.innerHTML = `
      <h3>${data.name}</h3>
      <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Wind:</strong> ${data.wind.speed} km/h</p>
    `;
  } catch (error) {
    weatherBox.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

searchBtn.addEventListener("click", getWeather);
cityInput.addEventListener("keyup", e => {
  if (e.key === "Enter") getWeather();
});
