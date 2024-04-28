var phone = [ ]
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Extract country names from the response
    console.log(data);
    let countriesArray = [];
    for (country of data) {
      countriesArray.push(country.name.common);
    }
    let sortedArray = countriesArray.sort();
    for (country of sortedArray) {
      droplist.innerHTML += `<div class="opt">${country}</div>`;
    }
    const countries = document.querySelectorAll(".opt");

    countries.forEach((country) => {
      country.addEventListener("click", () => {
        inputDropList.value = country.innerHTML;
        droplist.classList.remove("active-list");
        expand.classList.toggle("active-expand");
      });
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));
