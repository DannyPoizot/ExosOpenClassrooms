function askWeather(){
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
          var response = JSON.parse(this.responseText);
          console.log(response);
          document.getElementById("weather-result").innerHTML = response.current_condition.condition;
          img.src = response.current_condition.icon;
      }
  };
  request.open("GET", "https://www.prevision-meteo.ch/services/json/valenciennes");
  request.send();
}
document.getElementById("ask-weather").addEventListener("click", askWeather);

var img = document.createElement("img");

document.getElementById("weather-result").appendChild(img);
