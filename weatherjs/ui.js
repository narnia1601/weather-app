class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }
    paint(weather){
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `${Math.round(weather.main.temp / 10)} Degree Celsius`;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`
        this.wind.textContent = `Wind: ${weather.wind.speed}`
    }
}