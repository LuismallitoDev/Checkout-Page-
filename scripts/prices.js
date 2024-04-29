const droplist = document.getElementById("opt-country");
const inputDropList = document.getElementById("country-input");
const buttonList = document.getElementById("country");
const expand = document.getElementById("expand");
document.querySelectorAll("input").forEach((input) => {
  input.setAttribute("autocomplete", "off");
});
buttonList.addEventListener("click", () => {
  buttonList.lastChild.previousSibling.classList.toggle("focused") 
  document.querySelectorAll(".country-span").forEach((span) => {
    span.classList.toggle("focused-span");
  })
  droplist.classList.toggle("active-list");
  expand.classList.toggle("active-expand");
});

/*  Configure prices  */

let itemsBag = 1;
let itemsShoes = 1;

var totalPrice = document.getElementById("total-price");
var shippingPrice = document.getElementById("shipping-price").textContent;
var shoePrice = document.getElementById("shoe-price").textContent;
var bagPrice = document.getElementById("bag-price").textContent;
var quantityShoes = document.getElementById("quantity-shoes");
var quantityBag = document.getElementById("quantity-bag");

const evalPrice = () => {
  totalPrice.textContent = eval(
    parseFloat(shippingPrice) +
      parseFloat(shoePrice) * parseInt(quantityShoes.textContent) +
      parseFloat(bagPrice) * parseInt(quantityBag.textContent)
  ).toFixed(2);
  if(itemsBag == 0 && itemsShoes == 0){
    totalPrice.textContent = "0.00";
  }
};
evalPrice();
document.getElementById("add-shoes").addEventListener("click", () => {
  itemsShoes++;
  quantityShoes.textContent = itemsShoes;
  evalPrice();
});
document.getElementById("remove-shoes").addEventListener("click", () => {
  if (itemsShoes >= 1) {
    itemsShoes--;
    quantityShoes.textContent = itemsShoes;
    evalPrice();
  }
});
document.getElementById("add-bag").addEventListener("click", () => {
  itemsBag++;
  quantityBag.textContent = itemsBag;
  evalPrice();
});
document.getElementById("remove-bag").addEventListener("click", () => {
  if (itemsBag >= 1) {
    itemsBag--;
    quantityBag.textContent = itemsBag;
    evalPrice();
  }
});
