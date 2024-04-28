const droplist = document.getElementById("opt-country");
const inputDropList = document.getElementById("country-input");
const buttonList = document.getElementById("country");
const expand = document.getElementById("expand");
document.querySelectorAll("input").forEach(input=>{
  input.setAttribute("autocomplete", "off")
});

fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Extract country names from the response
    console.log(data);
    for (country of data) {
      
      droplist.innerHTML += `<div class="opt">${country.name.common}</div>`;
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

/* Toggle droplist */
buttonList.addEventListener("click", () => {
  droplist.classList.toggle("active-list");
  expand.classList.toggle("active-expand");
});



const addButtonLogic = (buttonAdd,buttonLess,span)=>{
  
  if(span.innerHTML > 0){
    buttonAdd.addEventListener("click",()=>{
      span.innerHTML = span++
    })  
  }else{
    buttonLess.addEventListener("click",()=>{
      span.innerHTML = span--
    })
  }
}

/*   */