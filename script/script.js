
const currencyEl_one = document.getElementById("currency-one");
const amountEl_one = document.getElementById("amount-one");

const currencyEl_two = document.getElementById("currency-two");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");


//fetch exchange rates and update the DOM

function calculate() {
    const currency_one = currencyEl_one.value;
    const currency_two = currencyEl_two.value;

   // console.log(currency_one, currency_two)

    fetch(`https://open.exchangerate-api.com/v6/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            //console.log(data);
            const rate = data.rates[currency_two];
            console.log(rate);
            rateEl.innerText =  `1 ${currency_one} = ${rate} ${currencyEl_two}`
        });
}

// event listerners

    currencyEl_one.addEventListener("change", calculate);
    amountEl_one.addEventListener("input", calculate);
    currencyEl_two.addEventListener("change", calculate);
    amountEl_two.addEventListener("input", calculate);

    calculate();



  