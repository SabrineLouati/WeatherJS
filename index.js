const apiKEY= "77136267e5d642adef7a2a525a1d40f6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather (city){
    const response = await fetch(apiURL + city + `&appid=${apiKEY}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
      
    //queryselector will select the city and inner html will update the text written in the element 
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed;
    //image update according to the weather condition
    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }
    document.querySelector(".weather").style.display ="block"
    document.querySelector(".error").style.display ="none"
    }
    

}
searchBtn.addEventListener("click", ()=>{
    //this checkweather will have the city information written in 
    //the input field so to get the data written in the field we will use search box 
    //it will get the city name and pass it in the checkweather function and give the info accroding to the city entered
    checkWeather(searchBox.value);
})
