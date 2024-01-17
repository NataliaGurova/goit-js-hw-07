
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onInput);
  
  function onInput() {
  // const textName = evt.target.value.trim();
    const textName = textInput.value.trim();
 
  output.textContent = textName || "Anonymous";
};

