const baseURL = 'https://marketdata.websol.barchart.com/getQuote.json?apikey='
const key = 'd685de05e1a59d65e15c2d9323b1be78'
let url
//charts.js to display data in a chart
const searchTerm = document.querySelector('.search');
const searchFrom = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const stockName = document.querySelector('ul')

searchFrom.addEventListener('submit', fetchResults)

function fetchResults(e) {
    e.preventDefault();
    let url = baseURL + key + '&symbols=' + searchTerm.value;

    fetch(url).then(function(results) {
        return results.json()
    }).then(function(json) {
        displayResults(json);
    })
    .catch(err=> alert('Check spelling of ticker symbol'))
}

function displayResults(stocks) {
    console.log(stocks)
    stocks.results.forEach(s => {
        let stock = document.createElement('li');
        stock.innerText = '$' + s.lastPrice + " " + s.name;
        stockName.appendChild(stock);
    });
}

function refreshPage() {
    window.location.reload()
}