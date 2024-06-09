const userForm = document.querySelector(".user-form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;
console.log(userName);

userForm.addEventListener("submit", (e) => {
    e.preventDefault();
})