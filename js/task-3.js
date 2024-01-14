
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onInput);
  
  function onInput(evt) {
  const textName = evt.target.value.trim();
 
 output.textContent = textName || "Anonymous";
};

// function onInputChange(evt) {
//   output.textContent = textInput.value;
//     const text = output.textContent.trim();
//   if (text.value !== "") {
//     return text.value
//   } else {
//     text.value = "Anonymous";
//   }
// }
// textInput.addEventListener("input", (event) => {

//   output.textContent = event.currentTarget.value;
// });

// "Anonymous"
