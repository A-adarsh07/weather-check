const apiKey = "e9f5a17fafe110926455f8eaf4a9484c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 document.getElementById("demo").innerHTML = "Date : " + Date();

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    // If entered city name not found or wrongly texted name then 
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display="none";
    }
    else {
        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/snow.png";
        }

        else {
            weatherIcon.src = "img/clear.png";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }


}


searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value); // it will fetch whatever city name user will type
})

checkWeather(city);
