let signInForm = document.querySelector("#signIn");
signInForm.style.display = "block";

let signUpForm = document.querySelector("#signUp");
signUpForm.style.display = "none";

let title = document.querySelector("title");
let isSignIn = false;
document.getElementById("toggle_btn").addEventListener("click", (e) => {
  if (signInForm.style.display === "block") {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    e.target.textContent = "Already have an account? Sign In!";
    title.textContent = "Sign Up";
  } else {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
    e.target.textContent = "Don't have an account? Sign Up!";
    title.textContent = "Sign In";
  }
});

const signInBtn = document.getElementById("signInBtn");

const email = "namanpancholi1998@gmail.com";
const password = "12345";

signInBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  if (inputEmail === email && inputPassword === password) {
    window.location.href = "../pages/welcome.html";
    console.log("Current URL:", window.location.href);
  } else {
    // If the condition is false, you can display an error message or take other actions
    alert("Invalid email or password");
  }
});
