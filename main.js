let city = "";
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Extract country names from the response
    console.log(data);
  })
  .catch((error) => console.error("Error fetching countries:", error));
