let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
let password = document.getElementById("password");

document.querySelector(".toggle-btn").addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("hidden");
  document.querySelector(".social-icons").classList.toggle("hidden");
});

const all_user_data = [];

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const user_data = {
    first_name: fname.value,
    last_name: lname.value,
    email: email.value,
    password: password.value,
  };

  all_user_data.push(user_data);

  if (!localStorage.getItem("users_accounts")) {
    localStorage.setItem("users_accounts", JSON.stringify(all_user_data));
  } else {
    let getAcconuts = JSON.parse(localStorage.getItem("users_accounts"));
    getAcconuts.push(user_data);
    localStorage.setItem("users_accounts", JSON.stringify(getAcconuts));
  }

  fname.value = "";
  lname.value = "";
  email.value = "";
  password.value = "";

  window.location.href = "./index.html";
});