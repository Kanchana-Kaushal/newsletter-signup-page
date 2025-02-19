const inputElem = document.querySelector(".js-input");

document.querySelector(".js-subscribe").addEventListener("click", () => {
  const emailAddress = document.querySelector(".js-input").value;
  validateInput(emailAddress);
});

inputElem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const emailAddress = document.querySelector(".js-input").value;
    validateInput(emailAddress);
  }
});

inputElem.addEventListener("click", () => {
  if (inputElem.classList.contains("bg-red-200")) {
    inputElem.classList.remove("bg-red-200", "ring-red-500");
  }
});

document.querySelector(".js-dismiss-btn").addEventListener("click", () => {
  if (document.querySelector(".js-popup").classList.contains("opacity-100")) {
    document
      .querySelector(".js-popup")
      .classList.remove("opacity-100", "scale-100");

    document.querySelector(".js-main").classList.remove("opacity-0");
  }
});

function validateEmail(email) {
  //Regular expression for email format.
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regexEmail.test(email);
}

function inputErrorDisplay(errorMessage) {
  document.querySelector(".js-error-display").innerText = errorMessage;
  inputElem.classList.add("bg-red-200", "ring-red-500");
}

function validateInput(emailAddress) {
  if (emailAddress) {
    if (validateEmail(emailAddress)) {
      document.querySelector(".js-email-address").innerText = emailAddress;
      document
        .querySelector(".js-popup")
        .classList.add("opacity-100", "scale-100");

      document.querySelector(".js-main").classList.add("opacity-0");
    } else {
      inputErrorDisplay("Valid email required");
    }
  } else {
    inputErrorDisplay("Please enter your email address");
  }
}
