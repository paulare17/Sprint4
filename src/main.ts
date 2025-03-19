import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

let button: HTMLElement | null = document.getElementById("button");
let jokes: HTMLElement | null = document.getElementById("jokes-container");


function takeJokes() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.joke);
      const acudit = data.joke;
      jokes.innerHTML = acudit;
    });
}

takeJokes();
button.addEventListener("click", takeJokes);

