// A settings object for the AJAX call to the holiday API
const getHolidaySettings = {
	"async": true,
	"crossDomain": true,
	"url": "https://public-holiday.p.rapidapi.com/2019/US",
	"dataType": 'JSON',
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "635d961c9bmshaa8710f55d0d970p1f8630jsn16849758d1e1",
		"x-rapidapi-host": "public-holiday.p.rapidapi.com"
	}
};

function getHoliday() {
    // Get the year and countrycode from the HTML input fields
    var year = document.getElementById("year").value;
    var countrycode = document.getElementById("countrycode").value;

    // Set the URL for the API call
    getHolidaySettings.url = "https://public-holiday.p.rapidapi.com/"+ year + "/" + countrycode;

    // Make an AJAX call to the API
    $.ajax(getHolidaySettings).done(function (response) {
        // Store the API response
        var message = JSON.stringify(response,null,4);
        // Log the entire API response to the console
        console.log(message);
        // Display the formatted API response
        document.getElementById("holidaylist").innerHTML= "holidaylist:\n" + message;
    });
}
