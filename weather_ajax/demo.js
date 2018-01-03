document.getElementById('but').addEventListener('click', function () {
    
        getWeather(document.querySelector('input').value).then(function (data) {
            document.getElementById('result').innerHTML =
                '<p> The weather is: ' + data.weather + "</p>" +
                "<h2> Wind speed: " + data.wind + " m/s </h2>" +
                "<p> Pressure: " + data.pressure + " hPa </p>" +
                "<img src='http://openweathermap.org/img/w/" + data.icon + ".png'/>";
        }).catch(function (err) {
            document.getElementById('result').innerHTML = "<p> Wrong or unexisting populated place </p>";
        });
    });