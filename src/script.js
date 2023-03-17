function displayImageAndQuote() {
  // Create a new XMLHttpRequest object to get the list of photos from Unsplash
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.unsplash.com/photos/random", true);
  xhr.setRequestHeader("Authorization", "Client-ID YOUR_ACCESS_KEY_HERE");
  xhr.setRequestHeader("Accept-Version", "v1");

  // Define the function to be executed when the file is loaded
  xhr.onload = function() {
    // Check if the request was successful
    if (xhr.status === 200) {
      // Parse the JSON response to get the image URL and the photographer's name
      const response = JSON.parse(xhr.responseText);
      const imageUrl = response.urls.regular;
      const photographerName = response.user.name;
      
      // Set the background image of the container
      const containerElement = document.querySelector(".container");
      containerElement.style.backgroundImage = `url(${imageUrl})`;
      
      // Display the quote and photographer's name on the page
      const quoteElement = document.getElementById("quote");
      quoteElement.innerHTML = `<span>"${getRandomQuote()}"</span><br>- ${photographerName}`;
    }
  };

  // Send the request to get a random photo from Unsplash
  xhr.send();
}