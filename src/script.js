const quotesFilePath = "src/quotes.txt";

// Add event listener to the quote element
const quoteElement = document.getElementById("quote");
quoteElement.addEventListener("click", displayRandomQuote);

// Display a random quote when the page is loaded
displayRandomQuote();

function displayRandomQuote() {
  // Read the quotes from the file
  const quotes = readQuotesFromFile(quotesFilePath);

  // Choose a random quote
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  // Display the quote on the page
  quoteElement.textContent = randomQuote;
}

function readQuotesFromFile(filePath) {
  // Create a new XMLHttpRequest object to read the file
  const xhr = new XMLHttpRequest();
  xhr.open("GET", filePath, false); // synchronous request
  xhr.send();

  // Check if the request was successful
  if (xhr.status === 200) {
    // Split the text into an array of lines
    const text = xhr.responseText;
    const lines = text.split("\n");

    // Filter out any empty lines
    const quotes = lines.filter((line) => line.trim() !== "");

    // Return the array of quotes
    return quotes;
  } else {
    // If the request was not successful, log an error message and return an empty array
    console.error(`Failed to read quotes from ${filePath}. Status code: ${xhr.status}`);
    return [];
  }
}
