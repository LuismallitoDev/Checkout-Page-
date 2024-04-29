/* Validating inputs */
const form = document.getElementById("form");
const inputs = document.querySelectorAll(".input-form");
const regexp = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  phone: /^\d{7,15}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  address: /^[0-9A-Za-z\s\.,#-]{1,100}$/,
  city: /^[0-9A-Za-z\s\.,#-]+$/,
  postal: /^\d{1,11}$/,
  country: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
};
const fields = {
  name: false,
  phone: false,
  email: false,
  address: false,
  city: false,
  postal: false,
  country: false,
};
const validateField = (expresion, input, field) => {
  if (expresion.test(input.value)) {
    if (field == "country") {
      if (input.value != "Your country...") {
        fields[field] = true;
      }
    }
    document.getElementById(`${field}-message`).classList.remove("wrong");
    fields[field] = true;
  } else {
    document.getElementById(`${field}-message`).classList.add("wrong");
    fields[field] = false;
  }
};
const validateForm = (e) => {
  switch (e.target.id) {
    case "name":
      validateField(regexp.name, e.target, "name");
      break;
    case "phone":
      validateField(regexp.phone, e.target, "phone");
      break;
    case "email":
      validateField(regexp.email, e.target, "email");
      break;
    case "address":
      validateField(regexp.address, e.target, "address");
      break;
    case "city":
      validateField(regexp.city, e.target, "city");
      break;
    case "postal":
      validateField(regexp.postal, e.target, "postal");
      break;
    case "country,":
      validateField(regexp.country, e.target, "country");
  }
};
inputs.forEach((input) => {
  input.addEventListener("keydown", validateForm);
  input.addEventListener("blur", validateForm);
  input.addEventListener("focus", (e) => {
    validateForm;
    document
      .getElementById(`${e.target.id}`)
      .parentElement.classList.add("focused");
    document
      .getElementById(`${e.target.id}`)
      .previousElementSibling.classList.add("focused-span");
  });
  input.addEventListener("blur", (e) => {
    document
      .getElementById(`${e.target.id}`)
      .parentElement.classList.remove("focused");
    document
      .getElementById(`${e.target.id}`)
      .previousElementSibling.classList.remove("focused-span");
  });
  input.addEventListener("mouseenter", (e) => {
    document
      .getElementById(`${e.target.id}`)
      .parentElement.classList.add("hovered");
  });
  input.addEventListener("mouseleave", (e) => {
    document
      .getElementById(`${e.target.id}`)
      .parentElement.classList.remove("hovered");
  });
});
form.addEventListener("submit", (e) => {
  const checkBox = document.getElementById("save");
  if (
    fields.address &&
    fields.city &&
    fields.country &&
    fields.email &&
    fields.name &&
    fields.phone &&
    fields.postal
  ) {
    alert(
      `You ordered ${itemsBag} Vintage Backbag(s) and ${itemsShoes} Levi shoes pairs, making a total of $${totalPrice.textContent}. ${
        checkBox.checked ? "The info will be saved for the next purchase" : "The info won't be saved for the next purchase."
      }`
    );
  } else {
    e.preventDefault();
    alert("Complete all the required fields");
  }
});
