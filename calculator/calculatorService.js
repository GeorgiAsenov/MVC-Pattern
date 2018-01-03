var calc = (function (kg, lt, deliveryIncluded, currency) {
    const PRICE_OF_MEAT = 1.2;
    const PRICE_OF_MANGO = 3;
    const PRICE_OF_DELIVERY = 5;

    function calculator(kg, lt, deliveryIncluded, currency) {
        kg = parseInt(kg);
        lt = parseInt(lt);
        return new Promise(function (resolve, reject) {
            if (isNaN(kg) || kg < 0) {
                reject("Invalid quantity of meat!");
                return;
                // throw new Error("Invalid quantity of meat!");
            }

            if (isNaN(lt) || lt < 0) {
                reject("Invalid liters of mango!");
                return;
                // throw new Error('Invalid liters of mango!');
            }

            var coeff = 1.0;
            if (currency == "BGN") {
                resolve(coeff * ((kg * PRICE_OF_MEAT) + (lt * PRICE_OF_MANGO) + ((deliveryIncluded) ? PRICE_OF_DELIVERY : 0)))
            }

            var xhr;
            if (XMLHttpRequest != undefined) {
                xhr = new XMLHttpRequest();
            } else {
                xhr = new ActiveXObject();
            }

            xhr.addEventListener('load', function () {

                if ((xhr.status >= 200) && (xhr.status <= 299)) {
                    //success
                    var data = JSON.parse(xhr.responseText);
                    coeff *= data.rates[currency];
                    resolve(
                        coeff * ((kg * PRICE_OF_MEAT) + (lt * PRICE_OF_MANGO) + ((deliveryIncluded) ? PRICE_OF_DELIVERY : 0))
                    );
                    return;
                } else {
                    reject(xhr.statusText);
                }
            });

            xhr.open('GET', 'http://api.fixer.io/latest?base=BGN', true);
            xhr.send(null);

        });
    }

    return calculator;
})();

