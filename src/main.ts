import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const button: HTMLElement | null = document.getElementById("button");
let jokes: HTMLElement | null = document.getElementById("jokes-container");

const reportJokes: { joke: string; score: number; date: string }[] = [];



async function takeJokes() {
  return fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.joke);
      if (jokes) jokes.innerHTML = data.joke;
      return data.joke
    });
  }
  


async function captureJokes() {
  const time = new Date().toISOString()
  const acudit = await takeJokes()
  reportJokes.push({joke: acudit, date: time})
  console.log(reportJokes)
}

takeJokes();
captureJokes();


button.addEventListener("click", () => {
  
  // const horaData = new Date().toISOString();
  // reportJokes.push(date.horaData)

  takeJokes();
  captureJokes();
}) 

//dubte: això següent ha d'anar al mateix document tal i com ho estic fent ara?????


const score1 = document.getElementById("score1")
const score2 = document.getElementById("score2")
const score3 = document.getElementById("score3") 









/* API de xistes a contemplar:
https://sv443.net/jokeapi/v2/
https://api.chucknorris.io 


*/