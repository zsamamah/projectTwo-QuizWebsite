"use strict";

document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("hidden");
  document.querySelector(".social-icons").classList.toggle("hidden");
});

let email = document.querySelector("#email");
let password = document.querySelector("#password");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let r_data = localStorage.getItem("users_accounts");

  if (r_data) {
    // if there is local storage ...
    r_data = JSON.parse(r_data);

    for (let i = 0; i < r_data.length; i++) {
      // if there is a valid email & password
      if (
        r_data[i].email === email.value &&
        r_data[i].password === password.value
      ) {
        window.location.href = "./quiz.html";
      } else {
        // if there is a incorrect email & password
        if (
          r_data[i].password !== password.value &&
          r_data[i].email !== email.value
        ) {
          showError("email & password incorrect!");
        } else if (r_data[i].password !== password.value) {
          showError("password incorrect!");
        } else if (r_data[i].email !== email.value) {
          showError("email incorrect!");
        }
      }
    }
  } else {
    // if there is no local storage
    email.value = "";
    password.value = "";
    showError("Please go to register page & create an account!");
  }
});

function showError(error_type) {
  document.querySelector(".msg_error").style.display = "block";
  document.querySelector(".msg_error").textContent = `${error_type}`;
}

document.querySelector(".login").addEventListener("click", () => {
  document.querySelector("form").style.display = "block";
});
