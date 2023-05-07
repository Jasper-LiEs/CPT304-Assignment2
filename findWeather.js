// A settings object for the AJAX call to the weather API
const getWeatherSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://aerisweather1.p.rapidapi.com/forecasts/Beijing,CN?plimit=24",
	"method": "GET",
	"headers": {
        "x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
		"x-rapidapi-host": "aerisweather1.p.rapidapi.com"
    }
};

function getWeather() {
    // Get the city, countrycode, and holiday from the HTML input fields
    var city = document.getElementById("city").value;
    var countrycode = document.getElementById("countrycode").value;
    var holiday = document.getElementById("holiday").value

    // Set the URL for the API call
    getWeatherSettings.url = "https://aerisweather1.p.rapidapi.com/forecasts/"+city+","+countrycode+"?plimit=24";

    // Make an AJAX call to the API
    $.ajax(getWeatherSettings).done(function (response) {
        // Log the first forecast's valid time to the console
        var message = JSON.stringify(response.response[0].periods[0].validTime,null,4)
        console.log(message);
        var forecastPeriods = response.response[0].periods;
        var formattedWeatherData = '';
        // Loop through each forecast period and format the weather data as a string
        for (var i = 0, len = forecastPeriods.length; i < len; i++) {
            formattedWeatherData += 'validTime: ' + forecastPeriods[i].validTime + '\n' +
                'minTempC: ' + forecastPeriods[i].minTempC + '\n' +
                'maxTempC: ' + forecastPeriods[i].maxTempC + '\n\n';
        }
        // Display the formatted weather data
        document.getElementById('weatherlist').innerHTML = 'weatherlist:\n' + formattedWeatherData;
    });
}
