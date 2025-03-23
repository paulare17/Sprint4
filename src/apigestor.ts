

export async function takeJokes() {
    return fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data.joke);
    }
    


const showWeather: HTMLElement | null = document.getElementById("weather")


   export async function obtainWeather() {
      const resposta = await fetch(`https://api.weatherapi.com/v1/current.json?key=9abcfa56cc7e4cd885c131129252303&q=Barcelona`);
      const dades = await resposta.json();
      
      console.log(dades); 
      if (showWeather)
      showWeather.innerHTML = `La temperatura a Barcelona és ${dades.current.temp_c}ºC i la humitat és del ${dades.current.humidity}%. <br>
    ${dades.current.condition.text}.`
      
}
 

  