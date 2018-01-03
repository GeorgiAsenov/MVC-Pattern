function getWeather(city) {
    
        return new Promise(function (resolve, reject) {
    
            var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + document.querySelector('input').value + '&appid=f631fd357c75163a46154773a513dd64';
            var xhr;
            if (XMLHttpRequest == undefined)
                xhr = new ActiveXObject(); // IE <= 7
            else
                xhr = new XMLHttpRequest();
    
    
            xhr.open('GET', url, true);
            xhr.send(null);
            xhr.addEventListener('load', function () {
                if (xhr.status == 200) {
                    var response = xhr.responseText;
                    var weatherData = JSON.parse(response);
    
                    var result = {
                        weather: weatherData.weather[0].description,
                        pressure: weatherData.main.pressure,
                        icon: weatherData.weather[0].icon,
                        wind: weatherData.wind.speed
                    }
                    resolve(result);
                } else {
                    reject({ error: xhr.status, errorText: xhr.statusText });
                }
            });
        });
    }