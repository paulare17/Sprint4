import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const button: HTMLElement | null = document.getElementById("button");
let jokes: HTMLElement | null = document.getElementById("jokes-container");

// const callJoke = () => {
//   fetch("https://icanhazdadjoke.com/")
//     .then((resposta) => console.log(resposta.json()))
//     .then((data) => {
//       console.log(data)
//     //   showJoke(data)

//   }
// )
// };

// callJoke();

// function showJoke(joke) {
//   const acudit = document.createElement('acudit')
//   console.log(joke)
//   jokes.innerHTML = data.joke;
// }

async function takeJokes() {
const acudits = await fetch("https://icanhazdadjoke.com/", {
  headers: {
    Accept: "application/json"
  }
})
.then(res => res.json())
.then(data => {
  console.log(data.joke)
  return data.joke
})

jokes.innerHTML = acudits

}

button.addEventListener('click', takeJokes)
