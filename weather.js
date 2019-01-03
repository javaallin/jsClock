const weather = document.querySelector(".js-weather");

const COORDS = 'coords';
const API_KEY = '293a701198b30b022dae6346d639b875';

function getWeather(lat, lon){
    fetch(`
      https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr
      `).then(function(response){
        return response.json()
      }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        const description = json.weather[0].description;
        weather.innerText=`${temperature} @ ${place} - ${description}`;
      })
}
function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude,longitude);
}

function handleGeoErro(){
  console.log("Cant access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoErro);
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(COORDS);

  if(loadedCoords === null){
    askForCoords();
  }else{
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parseCoords.latitude,parseCoords.longitude);
    //getWeather
  }
}

function init(){
  loadCoords();
}

init();
