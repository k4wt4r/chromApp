const clock = document.querySelector("h2#clock");
const background = document.querySelector(".container");
const input = document.querySelector('#todo-form-input');
const form = document.querySelector('#todo-form');
const todolist = document.querySelector('#todo-list')
const pictures = ["https://live.staticflickr.com/65535/51420140244_33a70fcfbb_h.jpg", "https://live.staticflickr.com/65535/51312105177_3d718cb0d2_h.jpg", "https://live.staticflickr.com/65535/49449270391_6f852dfa90_h.jpg"];
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;

}
const todos = [];
function getbg(link) {
    return `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${link});`;
}
background.setAttribute("style", `background-image:${getbg(pictures[Math.floor(Math.random() * 3)])}`);
getClock();
setInterval(getClock, 1000);
form.addEventListener("submit", e => {
    e.preventDefault();
    todos.push(input.value);
    todos.map((todo) => {
        todolist.innerHTML += `<li>${todo}</li>`
    })
    input.value = "";
})