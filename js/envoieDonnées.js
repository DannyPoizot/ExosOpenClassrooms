function send() {
  let request = new XMLHttpRequest();
  let value = document.getElementById("value").value;
  request.setRequestHeader("Content-Type", "application/json");
  request.onreadystatechange = function() {
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.stringify(json);
      }
}
  request.open("POST", "https://mockbin.com/request");
  request.send();

document.getElementById("result").addEventListener("input", function(e){
  send();
});
