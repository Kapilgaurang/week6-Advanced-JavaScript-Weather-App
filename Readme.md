Week 6 – Advanced JavaScript & APIs Documentation

Project Title -
Weather Dashboard Application

Project Overview
This project is part of Week 6: Advanced JavaScript & APIs.
 The goal was to build a Weather Dashboard that:
Fetches live weather data using OpenWeatherMap API


Displays current weather details


Allows users to search any city


Shows helpful messages such as Loading, Error, and Invalid City


Saves user workflow understanding of Async JavaScript, Promises, API calls, and Error Handling
Objectives
✔ Understand REST APIs & HTTP Requests
 ✔ Work with fetch(), Promises & Async/Await
 ✔ Parse and display JSON data
 ✔ Implement UI for real-time weather
 ✔ Handle errors (invalid city, network failure)
 ✔ Implement user experience enhancements


Technologies Used
HTML5


CSS3


JavaScript (ES6+)


OpenWeatherMap REST API


JSON


Local Storage (Concept Covered)
Setup Instructions
1️- Get API Key
Go to:
https://openweathermap.org/api
Create account → Copy API Key
2️⃣ Add API Key in JavaScript
const API_KEY = "7851f7d227c4746b143cfdb413ece2f8";

Run Project
Simply open:
index.html
in any browser.
No server required.
Working Process
1️- User enters city name
Input field takes city example:
Delhi
London
Shimla

2️- Click Search
getWeather() triggers
3️- API Request Sent
https://api.openweathermap.org/data/2.5/weather?q=CITY&appid=API_KEY&units=metric

4️- Data Received
JSON response example contains:
Temperature


Description


Humidity


Wind Speed


City Name


5️- Weather Displayed
UI dynamically updates using DOM.

 Features Implemented
✔ City Weather Search
 ✔ Beautiful Weather Card UI
 ✔ Async/Await API Handling
 ✔ JSON Parsing
 ✔ Error Handling
 ✔ Loading Text Handling
 ✔ Enter Key Search Support
 Key JavaScript Concepts Learned
✅ Async & Await
const res = await fetch();
const data = await res.json();

✅ API Handling
fetch("API_URL")

✅ Error Handling
try{
} catch(error){
}
✅ DOM Manipulation
document.getElementById().textContent

Week 6 – Advanced JavaScript & APIs Documentation

Project Title -
Weather Dashboard Application

Project Overview
This project is part of Week 6: Advanced JavaScript & APIs.
 The goal was to build a Weather Dashboard that:
Fetches live weather data using OpenWeatherMap API


Displays current weather details


Allows users to search any city


Shows helpful messages such as Loading, Error, and Invalid City


Saves user workflow understanding of Async JavaScript, Promises, API calls, and Error Handling
Objectives
✔ Understand REST APIs & HTTP Requests
 ✔ Work with fetch(), Promises & Async/Await
 ✔ Parse and display JSON data
 ✔ Implement UI for real-time weather
 ✔ Handle errors (invalid city, network failure)
 ✔ Implement user experience enhancements


Technologies Used
HTML5


CSS3


JavaScript (ES6+)


OpenWeatherMap REST API


JSON


Local Storage (Concept Covered)
Setup Instructions
1️- Get API Key
Go to:
https://openweathermap.org/api
Create account → Copy API Key
2️⃣ Add API Key in JavaScript
const API_KEY = "7851f7d227c4746b143cfdb413ece2f8";

Run Project
Simply open:
index.html
in any browser.
No server required.
Working Process
1️- User enters city name
Input field takes city example:
Delhi
London
Shimla

2️- Click Search
getWeather() triggers
3️- API Request Sent
https://api.openweathermap.org/data/2.5/weather?q=CITY&appid=API_KEY&units=metric

4️- Data Received
JSON response example contains:
Temperature


Description


Humidity


Wind Speed


City Name


5️- Weather Displayed
UI dynamically updates using DOM.

 Features Implemented
✔ City Weather Search
 ✔ Beautiful Weather Card UI
 ✔ Async/Await API Handling
 ✔ JSON Parsing
 ✔ Error Handling
 ✔ Loading Text Handling
 ✔ Enter Key Search Support
 Key JavaScript Concepts Learned
✅ Async & Await
const res = await fetch();
const data = await res.json();

✅ API Handling
fetch("API_URL")

✅ Error Handling
try{
} catch(error){
}
✅ DOM Manipulation
document.getElementById().textContent

🧪 Testing
Test Case	Result
Valid city	✔ Works
Invalid city	✔ Shows error
Empty input	✔ Alerts user
Slow internet	✔ Shows loading
Different cities tested	✔ Works fine
📑 API Documentation

Base URL:

https://api.openweathermap.org/data/2.5/weather


Parameters Used:

Parameter	Meaning
q	city name
appid	API key
units	metric

Example:

https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=KEY&units=metric

🚀 Future Enhancements

🔹 5 Day Forecast
🔹 Save city to Local Storage
🔹 Multiple city weather cards
🔹 Add Weather Icons
🔹 Theme Mode Weather Based

✅ Conclusion

This project helped me understand:

How APIs work

Real time data integration

Async JavaScript

Practical UI handling

Debugging and testing

It successfully fulfills all Week 6 requirements.
