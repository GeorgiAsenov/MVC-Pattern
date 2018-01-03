(function () {

    var currency = 'BGN';
    function getTotal() {

        var kg = document.querySelectorAll('input[type=text]')[0].value;
        var lt = document.querySelectorAll('input[type=text]')[1].value;
        var delivery = document.querySelector('input[type=checkbox]').checked;

        calc(kg, lt, delivery, currency).then(function (total) {
            document.getElementById('result').style.color = "green";
            document.getElementById('result').style.fontWeight = 'bolder';
            document.getElementById('result').innerText = "total: " + total.toFixed(2) + ' ' + currency;
        }).catch(function (err) {
            document.getElementById('result').style.color = 'red';
            document.getElementById('result').style.fontWeight = 'bolder';
            document.getElementById('result').innerText = "Invalid, you are!";
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('calc').addEventListener('click', function (event) {
            event.preventDefault();
            getTotal();
        });

        document.querySelectorAll('input[type=radio]').forEach(function (radio) {
            radio.addEventListener('click', function () {
                currency = this.value;
                getTotal();
            }, false);

        });
        getTotal();
    });

}());
