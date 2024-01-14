const formElem = document.querySelector("form");

formElem.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  
  const userLogin = formElem.elements.email.value.trim();
  const userPassword = formElem.elements.password.value.trim();

  if (userLogin === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const obj = {
      userLogin: userLogin,
      userPassword: userPassword,
    }; 
    console.log(obj);
  }

  
  formElem.reset();
}

