class Weather{
    constructor(city){
        this.apiKey = '22ddbd5e8bfd7ce3ae8f86037aa1b962'
        this.city = city
    }
    // Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)
        const responseData = await response.json();
        return responseData;
    }
    // Change weather location
    changeLocation(city){
        this.city = city
    }
}