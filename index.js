let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let username = document.getElementById("inputUsername");
    let password = document.getElementById("inputPassword");

    if (username.value == "" || password.value == "") {
        alert("Vaues can't be empty!");
    } else {
        console.log(
            `Submitted form with ${username.value} and ${password.value}`
        );
    }

    username.value = "";
    password.value = "";
});
