"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
console.log(userName);
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
});
