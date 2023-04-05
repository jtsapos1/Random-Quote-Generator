/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'The journey of a thousand miles begins with one step',
    source: "Lao Tzu",
    citation: "Wisdomquotes.com/famous-quotes"
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly',
    source: "John F. Kennedy",
    citation: "Wisdomquotes.com/famous-quotes"
  },
  {
    quote: 'Wisely, and slow. They stumble that run fast',
    source: "William Shakespeare",
    citation: "Wisdomquotes.com/famous-quotes"
  },
  {
    quote: 'Suffer the little children to come unto me for of such is the Kingdom of Heaven',
    source: "Jesus Christ",
    citation: "Matthew 19:14 KJV"
  },
  {
    quote: 'Family is the most important thing in the world',
    source: "Princess Diana",
    citation: "Wisdomquotes.com/famous-quotes"
  },
  {
    quote: 'The simplest toy, one which even the youngest child can operate, is called a grandparent',
    source: "Sam Levenson",
    citation: "https://www.rd.com/article/quotes-from-famous-people/",
    year: 1985
  }
]

/***
 * `getRandomQuote` function
***/
// Function that generates a random quote
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

/***
 * `printQuote` function will: 1)Call the getRandomQuote() function
 * 2) Use the returned quote object to build a string of HTML and quote 
 * properties, then 3) Use that string to display a random quote in the
 * browser
***/
function printQuote() {
  let newQuote = getRandomQuote(); //newQuote stores a random quote object from the getRandomQuote() function.
  let realQuote = `<p class="quote">${newQuote.quote}</p> 
  <p class="source">${newQuote.source}`; //realQuote is the variable to hold the HTML string.

  //using conditionals to test if object or elements exist
  if (quotes.citation !== null) {
     realQuote += `<span class = citation>${newQuote.citation}</span>`
  }
  if (quotes.year !== null) {
    realQuote += `<span class = year>${newQuote.year}</span>`
  }
  realQuote += '</p>'

  document.getElementById('quote-box').innerHTML = realQuote;
 }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);