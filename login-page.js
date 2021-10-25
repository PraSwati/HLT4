const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => 
{
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "testuser" && password === "sp_web123") 
    {
/*         alert("You have successfully logged in.");
        location.reload(); */
        window.open("hlt1_swati.html");
        location.reload();
    } 
    else 
    {
        loginErrorMsg.style.opacity = 1;
    }
})