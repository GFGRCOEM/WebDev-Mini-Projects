let presentQuote = "";
let authorName = ""; 

document.getElementById('switch').onclick = function () 
{
  fetchdata()
    .then(({ quote, author }) => {
      presentQuote = quote;
      authorName = author;
      
      var comma=authorName.indexOf(',');
      var authorName2 = authorName.slice(0,comma);
           
      document.getElementById('quote').innerHTML = presentQuote;
      document.getElementById('author').innerHTML = authorName2;
    });
};

function fetchdata() 
{
  return fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const randomIndex = Math.floor(Math.random() * data.length);
      const quote = data[randomIndex].text;
      const author = data[randomIndex].author || "Unknown";

      console.log("Quote:", quote);
      console.log("Author:", author);

      return { quote, author };
    })
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
}