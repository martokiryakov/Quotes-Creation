// Array of quotes
const quotes = [
    "Be yourself; everyone else is already taken. - Oscar Wilde",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
  ];

  // Function to generate a random quote
function generateQuote() {
    // Select a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    
    // Update the quote text in the HTML
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = randomQuote;
  }

  // Attach event listener to the button
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", generateQuote);