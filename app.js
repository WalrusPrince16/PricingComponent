let toggler = document.getElementById("toggler");
let monthlyPrices = document.getElementsByClassName("monthly");
let annualPrices = document.getElementsByClassName("annual");

toggler.addEventListener("click", function () {
    iterate(monthlyPrices);
    iterate(annualPrices);
})

function iterate(domSelector) {
    for (let i = 0; i < domSelector.length; i++) {
        domSelector[i].classList.toggle("hide");
    }
}