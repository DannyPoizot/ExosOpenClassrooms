function send(e) {
  let request = new XMLHttpRequest();

  request.open("POST", "https://mockbin.com/request");

  request.setRequestHeader("Content-Type", "application/json");

  e.preventDefault();
  // let value = document.getElementById("value").value;
  // console.log(value);

  // request.onreadystatechange = function() {
      // if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let userResponse = document.getElementById("value").value;
        // console.log(userResponse);
        let response = JSON.stringify(userResponse);
        request.send(response);
        console.log(response);
        let json = JSON.parse(response);
        console.log(json);
//       }
//     }
//
        document.getElementById("result").innerHTML = json;

 }
document.getElementById("bouton").addEventListener("click", send);
