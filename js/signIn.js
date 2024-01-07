let signInForm = document.querySelector("#signIn");
signInForm.style.display = "block";

let signUpForm = document.querySelector("#signUp");
signUpForm.style.display = "none";

document.getElementById("toggle_btn").addEventListener("click", (e) => {
  if (signInForm.style.display === "block") {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    e.target.textContent = "Already have an account? Sign In!";
  } else {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
    e.target.textContent = "Don't have an account? Sign Up!";
  }
});
