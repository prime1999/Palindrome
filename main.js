//Assigning variables
const form = document.querySelector("form");
const output = document.querySelector(".output");
const input = document.querySelector("#input");

function onSubmit(e) {
  e.preventDefault();
  let text = input.value;
  let check = text.trim().replaceAll(" ", "");
  let val = text.split("").reverse().join("").replaceAll(" ", "");

  if (check === val) {
    output.innerHTML = `
    <h6>Yes, <span>'${text}'</span> is a palindrome word</h6>
    `;
  } else {
    output.innerHTML = `
    <h6>Yes, <span>'${text}'</span> is a not palindrome word</h6>
    `;
  }
  input.value = "";
}

form.addEventListener("submit", onSubmit);
