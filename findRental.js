// A settings object for the AJAX call to the hotel API
const getRentalSettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query=Suzhou&locale=CN",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "84b4e004d4msh6eabc7a0120cf44p1d9ce3jsn5502a62f81e9",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

function getHotel() {
	// Get the city, date, and countrycode from the HTML input fields
    var city = document.getElementById("city").value
    var date = document.getElementById("date").value
    var countrycode = document.getElementById("countrycode").value;

    // Set the URL for the API call
    getRentalSettings.url = "https://hotels4.p.rapidapi.com/locations/search?query="+city+"&locale="+countrycode,

    // Make an AJAX call to the hotel API using the settings object
    $.ajax(getRentalSettings).done(function (response) {
        // Store the API response
        var message = JSON.stringify(response.suggestions[1],null,4);
        // Log the entire API response to the console
    	console.log(message);
    	// Display the hotellist in the HTML page
    	document.getElementById("hotellist").innerHTML= "hotellist:\n" + message;
    });
}
