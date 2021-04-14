function send() {
  let request = new XMLHttpRequest();

  request.open("POST", "https://mockbin.com/request");

  request.setRequestHeader("Content-Type", "application/json");


  let value = document.getElementById("value").value;
  console.log(value);

  request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.stringify(json);
        console.log(response);
        let json = JSON.parse(response);
        console.log(json);
        request.send(JSON.stringify(json));
        document.getElementById("value").innerHTML = response;
      }
    }

}

document.getElementById("result").addEventListener("click", send);
