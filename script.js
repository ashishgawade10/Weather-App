async function getWeather(){


let city = document.getElementById("city").value;


let apiKey = "6103fc4d43bd347814526a8e6daa5e10";


let url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;



document.getElementById("cityName").innerHTML =
"Loading...";



try{


let response = await fetch(url);


let data = await response.json();



if(data.cod == 200){



document.getElementById("cityName").innerHTML =
data.name;



document.getElementById("temperature").innerHTML =
Math.round(data.main.temp) + " °C";



document.getElementById("description").innerHTML =
data.weather[0].description;



document.getElementById("humidity").innerHTML =
"Humidity: " + data.main.humidity + "%";



document.getElementById("wind").innerHTML =
"Wind Speed: " + data.wind.speed + " m/s";





// Weather Emoji

let condition = data.weather[0].main;


let emoji = "🌤️";


if(condition == "Clear"){

emoji="☀️";

}

else if(condition == "Clouds"){

emoji="☁️";

}

else if(condition == "Rain"){

emoji="🌧️";

}

else if(condition == "Thunderstorm"){

emoji="⛈️";

}

else if(condition == "Snow"){

emoji="❄️";

}

else if(condition=="Mist" || condition=="Fog"){

emoji="🌫️";

}



document.getElementById("weatherEmoji").innerHTML =
emoji;



}


else{


alert("City not found");

document.getElementById("cityName").innerHTML="";


}



}


catch(error){


alert("Something went wrong");


}


}





// Enter key search

document.getElementById("city").addEventListener(
"keypress",
function(event){


if(event.key==="Enter"){

getWeather();

}


});
