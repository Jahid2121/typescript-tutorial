"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userCountry = document.querySelector("#country");
const userEmail = document.querySelector("#email");
const userFeedback = document.querySelector("#feedback");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {
        username: userName.value,
        useremail: userEmail.value,
        usercountry: userCountry.value,
        userfeedback: userFeedback.value
    };
    console.log(data);
});
