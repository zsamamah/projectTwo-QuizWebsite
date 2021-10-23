
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');

let user_data={};
let all_user_data=[];

const togglebtn = document.querySelector(".toggle-btn");

togglebtn.addEventListener("click", () => {
  document.querySelector(".nav-list").classList.toggle("hidden");
  document.querySelector(".social-icons").classList.toggle("hidden");
});

document.querySelector('form').addEventListener("submit",function(e){
    e.preventDefault();

    user_data={
        first_name:fname.value,
        last_name:lname.value,
        email:email.value,
        password:password.value,
    };

    all_user_data.push(user_data);
    localStorage.setItem('users_accounts',JSON.stringify(all_user_data));

    fname.value = "";
    lname.value = "";
    email.value = "";
    password.value = "";

    window.location.href="./index.html";
});
    
  