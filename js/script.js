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
    source: "Lao Tzu"
  },
  {
    quote: 'Those who dare to fail miserably can achieve greatly',
    source: "John F. Kennedy"
  },
  {
    quote: 'Wisely, and slow. They stumble that run fast',
    source: "William Shakespeare"
  },
  {
    quote: 'Suffer the little children to come unto me',
    source: "Jesus Christ"
  },
  {
    quote: 'Family is the most important thing in the world',
    source: "Princess Diana"
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
 * `printQuote` function
***/
function printQuote() {
  let newQuote = getRandomQuote();
  let realQuote = `<p class="quote">${newQuote.quote}</p>
  <p class="source">${newQuote.source}`;

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