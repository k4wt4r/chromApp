const API_KEY = "fbdf5d9ab879a56827beb0d0a6153a66";

function onGeoOk(position) {
  
    const crd = position.coords;
    const url =` https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

