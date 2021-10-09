let url = "https://api.quotable.io/random";
const quotes = document.querySelector(".quotes");
const author = document.querySelector(".author");
quotes.textContent = "";
author.textContent = "";

let newQuote = function() {
    fetch(url)
        .then(function(url) {
            return url.json();
        })
        .then(function(url) {
            quotes.textContent = url.content;
            author.textContent = `- ${url.author}`;
        });
};
document.querySelector(".clickMe").addEventListener("click", newQuote);