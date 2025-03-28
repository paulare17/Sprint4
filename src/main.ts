import "./style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { takeJokes } from "./apigestor";
import { obtainWeather } from "./apigestor";
import { takeJokesChuck } from "./apigestor";

const button: HTMLElement | null = document.getElementById("button");
let jokes: HTMLElement | null = document.getElementById("jokes-container");

const reportJokes: { joke: string; score: number | null; date: string }[] = [];

const score1: HTMLElement | null = document.getElementById("score1");
const score2: HTMLElement | null = document.getElementById("score2");
const score3: HTMLElement | null = document.getElementById("score3");

let apiAltern = 0;
const apis = [takeJokes, takeJokesChuck];

async function capturePrintJokes() {
  const time = new Date().toISOString();
  const acudit = await apis[apiAltern]();;

  reportJokes.push({ joke: acudit, score: null, date: time });
  console.log(reportJokes);

  if (jokes) jokes.innerHTML = acudit;
  apiAltern = (apiAltern + 1) % apis.length;
}


async function scoreJokes(puntuacio: number) {
  await await apis[apiAltern]();;

  reportJokes[reportJokes.length - 1].score = puntuacio;
  console.log(reportJokes);
}


window.addEventListener("load", () => {
  takeJokes();
  capturePrintJokes();
  obtainWeather();
});

button?.addEventListener("click", () => {
  takeJokes();
  capturePrintJokes();
});

score1?.addEventListener("click", () => {
  scoreJokes(1);
});
score2?.addEventListener("click", () => {
  scoreJokes(2);
});
score3?.addEventListener("click", () => {
  scoreJokes(3);
});
