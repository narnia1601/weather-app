const weather = new Weather('Singapore');

const ui = new UI;

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', () => {
    const city = document.getElementById('city').value
    weather.changeLocation(city)
    getWeather();
    $('#locModal').modal('hide');
})

function getWeather(){
    weather.getWeather()
    .then(res => ui.paint(res))
    .catch(err => console.log(err))
}