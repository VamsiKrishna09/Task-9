async function fetchurl(url) {
    let fetchres = await fetch(url);
    let data = await fetchres.json();
    return data;
}

var basecode = document.querySelector('.currency');

var code = "";
basecode.addEventListener('change', (event) => {
    code = event.target.value
    var amount = document.querySelector('#amount').value;
    var data = fetchurl('https://api.exchangeratesapi.io/latest?base=' + code + '&symbols=USD,INR,RON,RUB,MYR');
    data.then((result) => {
        var usd = result.rates.USD;
        var inr = result.rates.INR;
        var ron = result.rates.RON;
        var rub = result.rates.RUB;
        var myr = result.rates.MYR;
        document.querySelector("#i").innerText = "Re " + ((+amount) * (+inr)).toFixed(2);
        document.querySelector("#u").innerText = "$ " + ((+amount) * (+usd)).toFixed(2);
        document.querySelector("#l").innerText = "lei " + ((+amount) * (+ron)).toFixed(2);
        document.querySelector("#r").innerText = "P " + ((+amount) * (+rub)).toFixed(2);
        document.querySelector("#m").innerText = "RM " + ((+amount) * (+myr)).toFixed(2);
    });
});

var tocurrency = document.querySelector('.Tocurrency');
var fromcurrency = document.querySelector('.fromcurrency');
var input = document.querySelector('.amount1');
var base = "";
tocurrency.addEventListener('change', (event) => {
    currency_change();
});

fromcurrency.addEventListener('change', (event) => {
    currency_change();
});

function currency_change() {
    code = tocurrency.value;
    console.log(code);
    base = fromcurrency.value;
    console.log(base);
    var amount = document.querySelector('#amount1').value;
    console.log(base);
    var data = fetchurl('https://api.exchangeratesapi.io/latest?base=' + base + '&symbols=' + code);
    data.then((result) => {
        var rate = Object.values(result.rates)[0];
        document.querySelector("#amount2").value = ((+amount) * (+rate)).toFixed(2);
        console.log(((+amount) * (+rate)).toFixed(2));
    });
}