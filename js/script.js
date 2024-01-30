document.getElementById("main-action-button").onclick = function() {
    document.getElementById("products").scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let button = document.getElementsByClassName("products-button");
for (let i = 0; i < button.length; i++) {
    button[i].onclick = function () {
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function () {
    let hasError = false;

    [burger, name, phone].forEach(item => {
        if (!item.value) {
            item.parentElement.style.background = "red";
            hasError = true;
        } else {
            item.parentElement.style.background = "";
        }
    });

    if (!hasError) {
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Мы скоросвяжемся с вами!");
    }
}

let prices = document.getElementsByClassName("products-item-price");
document.getElementById("change-currency").onclick = function (e) {
    let currentCurrency = e.target.innerText;

    let newCurrency = "₽";
    let coefficient = 1;

    if (currentCurrency === "₽") {
        newCurrency = "BYN";
        coefficient = 0.035;
    } else if (currentCurrency === "BYN") {
        newCurrency = "$";
        coefficient = 0.011;
    } else if (currentCurrency === "$") {
        newCurrency = "€";
        coefficient = 0.010;
    } else if (currentCurrency === "€") {
        newCurrency = "¥";
        coefficient = 0.080;
    }
    e.target.innerText = newCurrency;

    for (let i = 0; i < prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }
}