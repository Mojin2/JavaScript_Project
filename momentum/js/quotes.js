const quotes = [
  {
    quotes: "The way yo get started is to quit talking and begin doing.",
    author: "Walt disney",
  },
  {
    quotes: "Age is no guarantee of maturity.",
    author: "Lawana Blackwell",
  },
  {
    quotes: "Sometimes even to live is an act of courage.",
    author: "Seneca",
  },
  {
    quotes: "There is no cure for birth and death, save to enjoy the interval.",
    author: "George Santayana",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
