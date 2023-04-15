
const inputBox = document.querySelector('.input-box');// we can select by both id and class of button
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature'); //query selector k liye dot lagate h aage me
const description = document.querySelector('.description'); //query selector k liye dot lagate h aage me

const humidity =  document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
const api_key = "968437e67c0d58dc1bc1a47aff983cbd"; //my api key = 968437e67c0d58dc1bc1a47aff983cbd
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data = await fetch(`${url}`).then(response => response.json());


if(weather_data.cod === `404`){
location_not_found.style.display = "flex";
weather_body.style.display = "none";
console.log("error");
return;
}
location_not_found.style.display = "none";
weather_body.style.display = "flex";

temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;

humidity.innerHTML = `${weather_data.main.humidity} %`;
wind_speed.innerHTML = `${weather_data.wind.speed}km/H`


switch(weather_data.weather[0].main){
case 'Clouds':
weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/cloud.png?raw=true";
break;
case 'Clear':
weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/clear.png?raw=true";
break;
case 'Rain':
weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/rain.png?raw=true";
break;
case 'Mist':
weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/mist.png?raw=true";
break;
case 'Snow':
weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/snow.png?raw=true";
break;

}
console.log(weather_data)
}


searchBtn.addEventListener('click', ()=>{
checkWeather(inputBox.value);
});



// const Clear = ["Chaiyya Chaiyya", "Bheegi Si Bhaagi Si", "O Re Piya", "Ae Dil Hai Mushkil", "Pee Loon", "Tere Bina", "Tum Se Hi", "Soch Na Sake", "Tu Hai", "Kal Ho Na Ho", "Chand Sifarish", "Khuda Jaane", "Peecha Chhute", "Tum Ho", "Patakha Guddi", "Tere Bina Zindagi Se", "Hai Junoon", "Kabhi Kabhi Aditi", "Tum Hi Ho", "Tera Ban Jaunga", "Lag Ja Gale", "Mere Bina", "Jeene Laga Hoon", "Zara Zara", "Tere Naina", "Zinda", "Tere Liye", "Teri Meri", "Aaoge Jab Tum", "Aas Paas Khuda"];

// const Rain = ["Tip Tip Barsa Paani", "Bheegi Bheegi Raaton Mein", "Rimjhim Rimjhim", "Sawan Aaya Hai", "Cham Cham", "Barso Re", "Aaj Rapat Jaayen To", "Badal Yun Garaj Hai", "Koi Ladki Hai", "Ae Ajnabi", "Kabhi Jo Badal Barse", "Tere Bina", "Kuch Kuch Hota Hai", "Bheegi Si Bhaagi Si", "Mere Haath Mein", "Tum Hi Ho", "Hawaayein", "Chaiyya Chaiyya", "Sawan Mein Lag Gayi Aag", "Baadal", "Sajde Kiye Hai Lakhon", "Ab Ke Sawan", "Yeh Mausam Ka Jaadu Hai Mitwa", "Tujh Mein Rab Dikhta Hai", "Tum Se Hi", "Ghanan Ghanan", "Zoobi Doobi", "Tum Hi Aana", "Aaj Mausam Bada Beimaan Hai"];

// const Mist = ["Tum Se Hi", "Pehla Nasha", "Gerua", "Agar Tum Saath Ho", "Teri Meri", "Tum Hi Ho", "Kuch Kuch Hota Hai", "Tum Se Milke Dil Ka Jo Haal", "Aaj Kal Zindagi", "Bolna", "Khuda Jaane", "Naina Da Kya Kasoor", "Humdard", "Pachtaoge", "Tera Ban Jaunga", "Neele Neele Ambar Par", "Baarish", "Ek Ladki Ko Dekha Toh Aisa Laga", "Aaoge Jab Tum", "Soch Na Sake", "Tujh Mein Rab Dikhta Hai", "Yeh Haseen Vadiyan", "Laal Ishq", "Tu Hi Re", "Kabhi Kabhi Mere Dil Mein", "Humein Tumse Pyar Kitna", "Hoshwalon Ko Khabar Kya", "Tere Bina Zindagi Se", "Yeh Raaten Yeh Mausam", "Jab Deep Jale Aana"];

// const Snow = ["Lamhein", "Luka Chuppi", "Tum Se Hi", "Phir Se Ud Chala", "Gulabi Aankhen", "Pal Pal Dil Ke Paas", "Kahin Door Jab Din Dhal Jaaye", "Yeh Ishq Haaye", "Main Hoon Na", "Jai Ho", "Aao Naa", "Tum Hi Ho Bandhu", "Tera Ban Jaunga", "Khaabon Ke Parinday", "Tera Noor", "Tum Tak", "Dil Diyan Gallan", "Raabta", "Naina", "Kabhi Kabhi Mere Dil Mein", "Tu Hi Re", "Mitwa", "Hamesha Tumko Chaha", "Zara Sa Jhoom Loon Main", "Ek Ladki Ko Dekha To Aisa Laga", "Yeh Raat Bheegi Bheegi", "Tu Tu Hai Wahi", "Tumse Milke Dil Ka", "Ghar More Pardesiya", "Rang De Basanti"];

// Define the function that recommends a song based on the user's mood
function recommendSong() {
    const mood = document.getElementById('mood').value;
    let songs = [];

    if (mood === 'Clouds') {
        songs = Clouds;
    } 
    else if (mood === 'Clear') {
        songs = Clear;
    } 
    else if (mood === 'Rain') {
        songs = Rain;
    }
     else if (mood === 'Mist') {
        songs = Mist;
    }
     else if (mood === 'Snow') {
        songs = Snow;
    }


    const randomIndex = Math.floor(Math.random() * songs.length);
    const recommendation = songs[randomIndex];
//     document.getElementById('recommendation').textContent = `We recommend "${recommendation}"`;
// }
document.getElementById('recommendation').innerHTML = `We recommend <a href="${recommendation.link}" target="_blank">${recommendation.name}</a>!`;
    }