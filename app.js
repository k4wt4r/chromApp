const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form-input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";


function onSubmit(event){
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASS);
   const username = loginInput.value;
    localStorage.setItem("login", username);
    greetIngs(username);
    greeting.classList.remove(HIDDEN_CLASS);

}
savedUsersavedUsersavedUser
function greetIngs(username){
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASS);
}

const savedUser = localStorage.getItem("username");

if(savedUser === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onSubmit);
} else{
    greetIngs(savedUser);
    
}
